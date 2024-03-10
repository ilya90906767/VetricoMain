from django.contrib import admin
from catalogue_items.models import Mosaic
class MosaicAdmin(admin.ModelAdmin):
    list_display = ('articul', 'title' )

admin.site.register(Mosaic, MosaicAdmin)