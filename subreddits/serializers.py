from rest_framework import serializers
from .models import Subreddit

class SubredditSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subreddit
        fields = ['id', 'name', 'description', 'created_at']
