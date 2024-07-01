from rest_framework import serializers
from .models import Upvote

class UpvoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Upvote
        fields = ['id', 'user', 'post']
