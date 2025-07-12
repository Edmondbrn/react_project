from django.db import models

class User(models.Model):
    """
    
    User model to store information about user for the app
    @author Edmond
    @version 12/07/2025
    
    """

    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)

    class Meta:
        db_table = "user"

    def __init__(self):
        pass

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
