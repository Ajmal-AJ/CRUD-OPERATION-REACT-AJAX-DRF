from django.shortcuts import render
from backend_api.models import Movie
from rest_framework.response import Response

def index(request):
    return render(request,'index.html')

