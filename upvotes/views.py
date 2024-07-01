from django.shortcuts import render

from rest_framework import viewsets
from .models import Upvote
from .serializers import UpvoteSerializer

class UpvoteViewSet(viewsets.ModelViewSet):
    queryset = Upvote.objects.all()
    serializer_class = UpvoteSerializer

