from django.http import JsonResponse
from django.forms.models import model_to_dict
from .models import Product, Category

def product_list(request):
    products = list(Product.objects.values())
    return JsonResponse(products, safe=False)

def product_detail(request, pk):
    try:
        product = Product.objects.get(pk=pk)
        return JsonResponse(model_to_dict(product))
    except Product.DoesNotExist:
        return JsonResponse({'message': 'Product not found'}, status=404)

def category_list(request):
    categories = list(Category.objects.values())
    return JsonResponse(categories, safe=False)

def category_detail(request, pk):
    try:
        category = Category.objects.get(pk=pk)
        return JsonResponse(model_to_dict(category))
    except Category.DoesNotExist:
        return JsonResponse({'message': 'Category not found'}, status=404)

def category_product_list(request, pk):
    products = list(Product.objects.filter(category_id=pk).values())
    return JsonResponse(products, safe=False)
