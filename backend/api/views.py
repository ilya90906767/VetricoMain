from django.shortcuts import render

from api.serializers import MosaicSerializer
from catalogue_items.models import Mosaic

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status

class MosaicApiView(APIView):
    def get(self,request):
        mosaics = Mosaic.objects.all()
        serializer = MosaicSerializer(mosaics, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
# Create your views here.
