# subreddits/views.py
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Subreddit
from .serializers import SubredditSerializer

class SubredditViewSet(viewsets.ModelViewSet):
    queryset = Subreddit.objects.all()
    serializer_class = SubredditSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
