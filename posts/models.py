from django.db import models

from django.conf import settings

class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    subreddit = models.ForeignKey('subreddits.Subreddit', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

