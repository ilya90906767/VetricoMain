from django.db import models

class Mosaic(models.Model):
    articul = models.TextField()
    title = models.TextField()
    description = models.TextField()
    categoru = models.TextField() # 1-Прошлые работы
    image = models.TextField()
    image2 = models.TextField()
    image3 = models.TextField()
    image4 = models.TextField()
    image5 = models.TextField()
    
    
    
    def __str__(self):
        return f"Mosaic {self.id}, {self.articul}"