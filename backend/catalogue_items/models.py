from django.db import models

class Mosaic(models.Model):
    articul = models.TextField()
    title = models.TextField()
    description = models.TextField()
    image = models.TextField()
    
    def __str__(self):
        return f"Mosaic {self.id}, {self.articul}"