from catalogue_items.models import Mosaic
from rest_framework import serializers

class MosaicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mosaic
        fields = '__all__'