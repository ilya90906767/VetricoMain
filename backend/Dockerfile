FROM python:3.11.6

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && \
    apt-get install -y \
      # For postgresql
      libpq-dev \
      # For leaflet maps
      gdal-bin

WORKDIR /usr/src/app

RUN mkdir /usr/src/app/staticfiles
RUN mkdir /usr/src/app/staticfiles/admin 
RUN mkdir /usr/src/app/staticfiles/rest_framework

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt


CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]