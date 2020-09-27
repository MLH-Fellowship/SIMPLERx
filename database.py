import pymongo
from pymongo import MongoClient
import json

cluster = MongoClient(
    "mongodb+srv://sakshi:mlhFellowship@cluster0.b8j1y.gcp.mongodb.net/medrecords?retryWrites=true&w=majority&?ssl=true&ssl_cert_reqs=CERT_NONE")
db = cluster["medrecords"]
patientCollection = db["patient"]


# check login
db.collection('user').findOne(

    {$and : [
        {name: req.body.username.toLowerCase()},
        {password: req.body.password}
    ]},

    (err, result)= > {

        if(err) {
            res.status(500).send(err)
            return
        }

        if(!result) {
            data={
                "meta": {
                    "status": "fail",
                    "message": "Login Failure: Invalid username or password"
                }
            }
            res.status(401).send(data)
        } else {
            data={
                "meta": {
                    "status": "success",
                    "message": "Login success"
                }
            }
            res.json(data)
        }
    })


# Old code for individual variables
# Name = "Sakshi R"
# Notes = "No medical history"
# Symptoms = ""
# followUps = ""
# Prescription = []
# user = {"Name": Name, "Symptoms": Symptoms, "Notes": Notes,
#         "Follow Ups": followUps, "Prescription": []}

# lst = [1, 2]
# user["Prescription"].append(lst)

# patientCollection.insert_one(user)


# code for JSON
def addRecord(f):
    # find user document
    db.patientCollection.find('_id')
    db.patientCollection.update(
        {'_id': id},
        {$push: {record: {$each: f}}}
    )


def addPrescription(p):
    db.patientCollection.find('_id')
    db.patientCollection.update(
        {'_id': id},
        {$push: {prescription: {$each: p}}}
    )
