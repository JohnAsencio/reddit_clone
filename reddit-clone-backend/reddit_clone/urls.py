"""
URL configuration for reddit_clone project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect
from rest_framework.routers import DefaultRouter
from users.views import UserViewSet
from subreddits.views import SubredditViewSet
from posts.views import PostViewSet
from comments.views import CommentViewSet
from upvotes.views import UpvoteViewSet
from .views import index

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'subreddits', SubredditViewSet)
router.register(r'posts', PostViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'upvotes', UpvoteViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('users/', include('users.urls')),
    path('subreddits/', include('subreddits.urls')),
    path('posts/', include('posts.urls')),
    path('comments/', include('comments.urls')),
    path('upvotes/', include('upvotes.urls')),
    path('', index),
    path('', lambda request: redirect('api/', permanent=True)),  # Redirect root URL to /api/
]
