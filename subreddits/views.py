from django.shortcuts import render

from rest_framework import viewsets
from .models import Subreddit
from .serializers import SubredditSerializer

class SubredditViewSet(viewsets.ModelViewSet):
    queryset = Subreddit.objects.all()
    serializer_class = SubredditSerializer

