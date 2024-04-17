from .models import Company, Vacancy
from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CompanySerializer, VacancySerializer
from rest_framework.views import APIView


@api_view(["GET"])
def list_companies(request):
    if request.method == "GET":
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many = True)
        return Response(serializer.data)
    
@api_view(["GET"])
def get_company(request, id = None):
    try:
        company = Company.objects.get(id = id)
    except Company.DoesNotExist as error:
        return Response({"Error": str(error)}, status=status.HTTP_400_BAD_REQUEST)
    if request.method == "GET":
        serializer = CompanySerializer(company)
        return Response(serializer.data)

@api_view(["GET"])
def list_vacancies_by_company(request, id = None):
    try:
        company = Company.objects.get(id = id)
    except Company.DoesNotExist as error:
        return Response({"error": str(error)}, status = status.HTTP_400_BAD_REQUEST)
    if request.method == "GET":
        vacancies = Vacancy.objects.filter(company = company)
        serializer = VacancySerializer(vacancies, many = True)
        return Response(serializer.data)

class VacancyListAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

class GenericVacancyDetail(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    def get(self, request, pk = None):
        return self.retrieve(request, pk)
    
class VacancyTopTenApiView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.order_by("-salary")[:10]
        serializer = VacancySerializer(vacancies, many = True)
        return Response(serializer.data)