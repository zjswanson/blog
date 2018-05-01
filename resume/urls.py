from django.urls import path

from . import views

app_name = 'resume'
urlpatterns = [
    path('resume/', views.resume, name='resume'),
    path('', views.index, name='index'),
]
