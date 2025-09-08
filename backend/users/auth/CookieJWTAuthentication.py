from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.authentication import CSRFCheck
from rest_framework import exceptions
from rest_framework.request import Request

class CookieJWTAuthentication(JWTAuthentication):
    
    def authenticate(self, request : Request) -> tuple:
        """Override authenticate method from JWT package. Use cookies instaed of headers.

        Args:
            request (Request): The HTTPS request from React

        Returns:
            _type_: _description_
        """
        # get token from cookies
        access_token = request.COOKIES.get("access_token")

        if not access_token:
            return None
        # validate the access token
        validated_token = self.get_validated_token(access_token)
        user = self.get_user(validated_token)

        if not request.META.get("HTTP_X_REQUESTED_WITH") == "XMLHttpRequest":
            self.enforce_csrf(request)

        return (user, validated_token)
    
    def enforce_csrf(self, request : Request):
        check = CSRFCheck()
        check.process_request(request)
        reason = check.process_view(request, None, (), {})
        if reason:
            raise exceptions.PermissionDenied(f"CSRF failed {reason}")