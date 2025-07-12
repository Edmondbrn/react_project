from django.db import models
from django.contrib.auth.hashers import make_password, check_password


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

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    
    def set_password(self, raw_password):
        """
        Method to hash the password of the new user

        Args:
            raw_password (str): The password from the REACT form
        """
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        """_summary_ Method to check if the raw passwords correspond to the hashed one in the database

        Args:
            raw_password (str): Raw password from the UI

        Returns:
            bool: True if passwords are equals, false otherwise
        """
        return check_password(raw_password, self.password)
