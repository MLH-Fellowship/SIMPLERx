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
            validate(credentials['uid'], credentials['password'])
            return HttpResponse()
        except:
            return HttpResponse(status=HTTPStatus.BAD_REQUEST)

def validate(uid, password):
    if uid == 'admin' and password == 'password':
        pass
