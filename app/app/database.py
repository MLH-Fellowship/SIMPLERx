import pymongo
import json
import os
from bson.objectid import ObjectId
from pymongo import MongoClient
from dotenv import load_dotenv
load_dotenv()

username = os.getenv('DB_USERNAME')
password = os.getenv('DB_PASSWORD')
db_name = os.getenv('DB_NAME')
cluster = MongoClient(
    f"mongodb+srv://{username}:{password}@cluster0.b8j1y.gcp.mongodb.net/{db_name}?retryWrites=true&w=majority&?ssl=true&ssl_cert_reqs=CERT_NONE"
    )
db = cluster["medrecords"]
patientCollection = db["patient"]


# check login
# db.DoctorDb.findOne(

#     {$and : [
#         {name: req.body.username.toLowerCase()},
#         {password: req.body.password}
#     ]},

#     (err, result)= > {

#         if(err) {
#             res.status(500).send(err)
#             return
#         }

#         if(!result) {
#             data={
#                 "meta": {
#                     "status": "fail",
#                     "message": "Login Failure: Invalid username or password"
#                 }
#             }
#             res.status(401).send(data)
#         } else {
#             data={
#                 "meta": {
#                     "status": "success",
#                     "message": "Login success"
#                 }
#             }
#             res.json(data)
#         }
#     })

# Test data:
# data_set = {
#     "_id": "PA2426",
#     "Aadhaar": "1234454",
#     "key1": [1, 2, 3],
#     "key2": [4, 5, 6]}
# json_dump = json.dumps(data_set)
# json_obj = json.loads(json_dump)


def addPatient(new_patient):
    db.patientCollection.insert_one(new_patient)


# Test func: addPatient(json_obj)


def addRecord(post_id, record):
    # find user document
    # document = db.patientCollection.find_one({'_id': post_id})
    db.patientCollection.update_one(
        {
            '_id': post_id
        },
        {
            "$push": record
        }
    )


# Test function:
data_set = {"Name": "MLH", "Prescription": "Crocin",
            "key1": [1, 2, 3], "key2": [4, 5, 6]}
# json_dump = json.dumps(data_set)
# json_obj = json.loads(json_dump)
# addRecord("PA2426", json_obj)


def getRecord(PatientID):
    res= db.patientCollection.find(
            {
                "_id": PatientID
            },
        {
                "History": 1,
                "_id": 0
                })
    for x in res:
    	return x


# Test function: getRecord("PA1234")

def getPrescription(PatientID):
    res= db.patientCollection.find(
            {
                "_id": PatientID
            },
        {
                "History.Prescription": 1,
                "_id": 0
                })
    for x in res:
    	return x
        