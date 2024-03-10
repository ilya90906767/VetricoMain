from django.urls import path, include
from api.views import MosaicApiView

urlpatterns = [
    path('public/', include([
        path('mosaics/', MosaicApiView.as_view()),

    ]))
]