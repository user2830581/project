from django.db import models

# Create your models here.

class User(models.Model):
    # email
    # password
    # userID
    # role
    # creationDate
    email = models.EmailField()
    password = models.CharField(max_length = 256)
    # role = models.BooleanField()
    creationDate = models.DateField(auto_now_add=True)

    # String representation of the Users
    def __str__(self):
        return(f"ID:{self.id}: User created on {self.creationDate} with email {self.email}")



