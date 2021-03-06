"""app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('signin', views.signin, name='signin'),
    path('signin/', views.signin, name='signin'),
    path('signup', views.signup, name='signup'),
    path('signup/', views.signup, name='signup'),
    path('add_prescription', views.add_prescription, name='add_prescription'),
    path('add_prescription/', views.add_prescription, name='add_prescription'),
    path('fetch_history', views.fetch_history, name='fetch_history'),
    path('fetch_history/', views.fetch_history, name='fetch_history'),
    path('current_prescription', views.current_prescription, name='current_prescription'),
    path('current_prescription/', views.current_prescription, name='current_prescription'),
    path('mark_prescription', views.mark_prescription, name='mark_prescription'),
    path('mark_prescription/', views.mark_prescription, name='mark_prescription'),
]
