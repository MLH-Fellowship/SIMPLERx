from http import HTTPStatus
import json
import pymongo
from django.http import HttpResponse, HttpResponseNotAllowed
from passlib.hash import pbkdf2_sha256

def index(request):
    return HttpResponse("Hello, world.")

def signin(request):
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    else:
        try:
            credentials = json.loads(request.body.decode('utf-8'))
            if validate(credentials['uid'], credentials['password']):
                response = HttpResponse(status=HTTPStatus.OK)
                response.set_signed_cookie('uid', credentials['uid'], max_age=30*24*60*60)
                response.set_signed_cookie('loggedin', 'true', salt=credentials['uid'], max_age=30*24*60*60)
            else:
                response = HttpResponse(status=HTTPStatus.UNAUTHORIZED)
            return response
        except:
            return HttpResponse(status=HTTPStatus.BAD_REQUEST)

def signup(request):
    if request.method != 'POST':
        return HttpResponseNotAllowed(['POST'])
    else:
        try:
            credentials = json.loads(request.body.decode('utf-8'))
            if not if_new_id(credentials['uid']):
                response = HttpResponse(
                    status=HTTPStatus.BAD_REQUEST,
                    content='{"error": "UID already exists."}',
                    content_type='application/json')
            else:
                # actually create in db
                response = HttpResponse(status=HTTPStatus.CREATED)
            return response
        except:
            return HttpResponse(status=HTTPStatus.BAD_REQUEST)


def validate(uid, password):
    if not if_new_uid(uid) and password == 'password':
        return True
    else:
        return False

def if_new_uid(uid):
    if uid != 'admin':  # check UID in database
        return False
    else:
        return True