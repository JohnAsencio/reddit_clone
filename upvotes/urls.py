# subreddits/urls.py
from django.urls import path
from .views import UpvoteViewSet

urlpatterns = [
    path('', UpvoteViewSet.as_view({'get': 'list'}), name='upvote-list'),
    # Other URLs for subreddits API endpoints
]
