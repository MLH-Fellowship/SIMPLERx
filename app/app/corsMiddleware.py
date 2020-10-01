<<<<<<< HEAD
def open_access_middleware(get_response):
=======
def cors_middleware(get_response):
>>>>>>> 2c3c08b5dd07f2f94c9ffd07a342195897121920
    def middleware(request):
        response = get_response(request)
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Headers"] = "*"
        return response
    return middleware