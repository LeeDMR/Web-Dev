from django.urls import path
from . import views

urlpatterns = [
    path('api/companies/', views.company_list, name='company_list'),
    path('api/companies/<int:id>/', views.company_detail, name='company_detail'),
    path('api/companies/<int:company_id>/vacancies/', views.company_vacancies, name='company_vacancies'),
    path('api/vacancies/', views.vacancy_list, name='vacancy_list'),
    path('api/vacancies/<int:id>/', views.vacancy_detail, name='vacancy_detail'),
    path('api/vacancies/top_ten/', views.vacancy_top_ten, name='vacancy_top_ten'),
]