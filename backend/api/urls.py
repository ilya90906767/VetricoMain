from django.urls import path, include
from api.views import MosaicApiView, OneMosaicApiView

urlpatterns = [
    path('public/', include([
        path('mosaics/', MosaicApiView.as_view()),
        path('onemosaic/<str:title>/', OneMosaicApiView.as_view()),
        

    ]))
]