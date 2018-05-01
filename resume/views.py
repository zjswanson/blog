from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, "resume/index.html", {
        "hide_navbar" : True
    })

def resume(request):
    return render(request, "resume/index.html", {
        "hide_navbar" : False
    })
