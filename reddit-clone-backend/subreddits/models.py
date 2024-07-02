# subreddits/models.py
from django.db import models
from django.conf import settings

class Subreddit(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='owned_subreddits', default=1)  # Ensure this default user exists
    subscribers = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='subscribed_subreddits')

    def __str__(self):
        return self.name
