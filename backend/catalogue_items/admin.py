from django.contrib import admin
from catalogue_items.models import Mosaic
from news.models import News

class MosaicAdmin(admin.ModelAdmin):
    list_display = ('articul', 'title' )

admin.site.register(Mosaic, MosaicAdmin)

