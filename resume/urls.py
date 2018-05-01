from django.urls import path

from . import views

urlpatterns = [
    path('resume/', views.resume, name='resume'),
    path('', views.index, name='index'),
]
