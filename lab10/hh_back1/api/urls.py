from django.contrib import admin
from django.urls import path, re_path
from .views import *

urlpatterns = [
    path('companies/', list_companies),
    re_path(r'^companies/(\d+)/$', get_company),
    re_path(r'^companies/(\d+)/vacancies/$', list_vacancies_by_company),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:pk>/', GenericVacancyDetail.as_view()),
    path('vacancies/top-ten/', VacancyTopTenApiView.as_view()),  
]