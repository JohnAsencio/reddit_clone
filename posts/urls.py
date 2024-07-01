# subreddits/urls.py
from django.urls import path
from .views import PostViewSet

urlpatterns = [
    path('', PostViewSet.as_view({'get': 'list'}), name='post-list'),
    # Other URLs for subreddits API endpoints
]
