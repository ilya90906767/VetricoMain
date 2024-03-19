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

class OneMosaicApiView(APIView):
    queryset = Mosaic.objects.all()
    serializer_class = MosaicSerializer
    
    def get(self,request, title):
        if title is not None: 
            title = str(title)
            mosaics = Mosaic.objects.get(title=title)
            serializer = MosaicSerializer(mosaics)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"error": "No biosample_ids provided"}, status=400)
    
# Create your views here.
