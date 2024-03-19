from django.db import models

class News(models.Model):
    articul = models.TextField()
    title = models.TextField()
    description = models.TextField()
    image = models.TextField()
    image2 = models.TextField()
    image3 = models.TextField()
    image4 = models.TextField()
    image5 = models.TextField()
    
    
    
    def __str__(self):
        return f"Mosaic {self.id}, {self.articul}"
