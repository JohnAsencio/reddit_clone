# subreddits/urls.py
from django.urls import path
from .views import CommentViewSet

urlpatterns = [
    path('', CommentViewSet.as_view({'get': 'list'}), name='comment-list'),
]
