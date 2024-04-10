from django.http import JsonResponse
from django.forms.models import model_to_dict
from .models import Company, Vacancy

def company_list(request):
    companies = Company.objects.all().values()
    return JsonResponse(list(companies), safe=False)

def company_detail(request, id):
    company = model_to_dict(Company.objects.get(pk=id))
    return JsonResponse(company)

def company_vacancies(request, company_id):
    vacancies = Vacancy.objects.filter(company_id=company_id).values()
    return JsonResponse(list(vacancies), safe=False)

def vacancy_list(request):
    vacancies = Vacancy.objects.all().values()
    return JsonResponse(list(vacancies), safe=False)

def vacancy_detail(request, id):
    vacancy = model_to_dict(Vacancy.objects.get(pk=id))
    return JsonResponse(vacancy)

def vacancy_top_ten(request):
    top_vacancies = Vacancy.objects.order_by('-salary')[:10].values()
    return JsonResponse(list(top_vacancies), safe=False)