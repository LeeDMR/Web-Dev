import json
from django.http import JsonResponse, HttpResponse
from django.forms.models import model_to_dict
from .models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt

def company_list(request):
    companies = Company.objects.all().values()
    return JsonResponse(list(companies), safe=False)

@csrf_exempt
def company_detail(request, id):
    try:
        company = Company.objects.get(pk=id)
    except Company.DoesNotExist:
        return HttpResponse("Company not found", status=404)

    if request.method == 'GET':
        return JsonResponse(model_to_dict(company))

    elif request.method == 'PUT':
        try:
            data = json.loads(request.body.decode('utf-8'))
            company.name = data.get("name", company.name)
            company.description = data.get("description", company.description)
            company.city = data.get("city", company.city)
            company.address = data.get("address", company.address)
            company.save()
            return JsonResponse(model_to_dict(company))
        except json.JSONDecodeError:
            return HttpResponse("Invalid JSON", status=400)

    else:
        return HttpResponse("Method Not Allowed", status=405)


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