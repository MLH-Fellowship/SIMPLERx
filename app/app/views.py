from http import HTTPStatus
import json
from django.http import HttpResponse, HttpResponseNotAllowed, HttpResponseBadRequest
from passlib.hash import pbkdf2_sha256
from . import database as db

MAX_AGE = 30*24*60*60  # 30 days

def index(request):
    return HttpResponse("Hello, world.")

def signin(request):
    if request.method != 'POST':
        response = HttpResponseNotAllowed(['POST'])
    else:
        try:
            credentials = json.loads(request.body.decode('utf-8'))
            if validate(credentials['uid'], credentials['password']):
                response = HttpResponse()
                response.set_signed_cookie('uid', credentials['uid'], max_age=MAX_AGE)
                response.set_signed_cookie('loggedin', 'true', salt=credentials['uid'], max_age=MAX_AGE)
            else:
                response = HttpResponse(status=HTTPStatus.UNAUTHORIZED)
        except:
            response = HttpResponse(status=HTTPStatus.BAD_REQUEST)
    return response

def signup(request):
    if request.method != 'POST':
        response = HttpResponseNotAllowed(['POST'])
    else:
        try:
            details = json.loads(request.body.decode('utf-8'))
            if not new_uid(details):
                response = HttpResponseBadRequest(
                    content='{"OldUIDError": "UID already exists."}',
                    content_type='application/json; charset=utf-8')
            else:
                db.addPatient(details)
                response = HttpResponse(status=HTTPStatus.CREATED)
        except:
            response = HttpResponse(status=HTTPStatus.BAD_REQUEST)
    return response

def add_prescription(request):
    if request.method != 'POST':
        response = HttpResponseNotAllowed(['POST'])
    else:
        try:
            if validate_session(request):
                new_prescription = json.loads(request.body.decode('utf-8'))
                if not new_uid(new_prescription['_id']):
                    response = HttpResponseBadRequest(
                    content='{"UnknownUIDError": "UID does not exist in database."}',
                    content_type='application/json; charset=utf-8')
                else:
                    db.addRecord(new_prescription['_id'], new_prescription['History'])
                    response = HttpResponse(status=HTTPStatus.CREATED)
            else:
                response = HttpResponse(status=HTTPStatus.FORBIDDEN)
        except:
            response = HttpResponse(status=HTTPStatus.BAD_REQUEST)
    return response

def fetch_history(request):
    if request.method != 'POST':
        response = HttpResponseNotAllowed(['POST'])
    else:
        try:
            if validate_session(request):
                body = json.loads(request.body.decode('utf-8'))
                #if new_uid(body['_id']):
                #    response = HttpResponseBadRequest(
                #    content='{"UnknownUIDError": "UID does not exist in database."}',
                #    content_type='application/json; charset=utf-8')
                #else:
                content = json.dumps(db.getRecord(body['_id']))
                response = HttpResponse(
                    status=HTTPStatus.OK,
                    content=content,
                    content_type='application/json; charset=utf-8')
            else:
                response = HttpResponse(status=HTTPStatus.FORBIDDEN)
        except:
            response = HttpResponse(status=HTTPStatus.BAD_REQUEST)
    return response

def current_prescription(request):
    if request.method != 'POST':
        response = HttpResponseNotAllowed(['POST'])
    else:
        try:
            if validate_session(request):
                body = json.loads(request.body.decode('utf-8'))
                content = json.dumps(db.getPrescription(body['_id']))
                response = HttpResponse(
                    status=HTTPStatus.OK,
                    content=content,
                    content_type='application/json; charset=utf-8')
            else:
                response = HttpResponse(status=HTTPStatus.FORBIDDEN)
        except:
            response = HttpResponse(status=HTTPStatus.BAD_REQUEST)
    return response

def mark_prescription(request):
    if request.method != 'POST':
        response = HttpResponseNotAllowed(['POST'])
    else:
        try:
            if validate_session(request):
                body = json.loads(request.body.decode('utf-8'))

                # perform db action
                response = HttpResponse()
            else:
                response = HttpResponse(status=HTTPStatus.FORBIDDEN)
        except:
            response = HttpResponse(status=HTTPStatus.BAD_REQUEST)
    return response

def validate_session(request):
    try:
        uid = request.get_signed_cookie('uid', max_age=MAX_AGE)
        return request.get_signed_cookie('loggedin', salt=uid, max_age=MAX_AGE) == 'true'
    except:
        return True

def validate(uid, password):
    if not new_uid(uid) and password == 'password':
        return True
    else:
        return False

def new_uid(uid):
    if uid == 'admin':  # check UID in database
        return False
    else:
        return True