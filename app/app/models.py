from djongo import models
from nanoid import generate

class Users(models.Model):
    uid = models.CharField(max_length=10, primary_key=True)
    is_doctor = models.BooleanField(max_length=10)
    is_pharmacist = models.BooleanField(max_length=10)
    is_patient = models.BooleanField(max_length=10)
    name = models.EmailField(blank=True)
    password = models.CharField(max_length=128)
