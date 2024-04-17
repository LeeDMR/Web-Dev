from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from ..models import Company
from ..serializers import CompanySerializer


class company_listAPIview(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class company_detailAPIView(APIView):
    class company_detailAPIView(APIView):
        def get_object(self, pk):
            try:
                return Company.objects.get(pk=pk)
            except Company.DoesNotExist:
                return None

        def get(self, request, pk):
            company = self.get_object(pk)
            if company is not None:
                serializer = CompanySerializer(company)
                return Response(serializer.data)
            else:
                return Response({"message": "Company not found"}, status=status.HTTP_404_NOT_FOUND)

        def put(self, request, pk):
            company = self.get_object(pk)
            if company is not None:
                serializer = CompanySerializer(company, data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({"message": "Company not found"}, status=status.HTTP_404_NOT_FOUND)

        def delete(self, request, pk):
            company = self.get_object(pk)
            if company is not None:
                company.delete()
                return Response(status=status.HTTP_204_NO_CONTENT)
            else:
                return Response({"message": "Company not found"}, status=status.HTTP_404_NOT_FOUND)