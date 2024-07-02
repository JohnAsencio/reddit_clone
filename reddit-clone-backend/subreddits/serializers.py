# subreddits/serializers.py
from rest_framework import serializers
from .models import Subreddit

class SubredditSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')  # Read-only field

    class Meta:
        model = Subreddit
        fields = '__all__'
