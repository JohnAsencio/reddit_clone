# subreddits/urls.py
from django.urls import path
from .views import SubredditViewSet

urlpatterns = [
    path('', SubredditViewSet.as_view({'get': 'list'}), name='subreddit-list'),
]
