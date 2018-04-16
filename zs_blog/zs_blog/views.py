from django.http import HttpResponse

def home(request):
    return HttpResponse('Hey I did a thing')
