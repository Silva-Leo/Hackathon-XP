from django.shortcuts import render
from django.http import HttpResponse
from scripts import get_jsons


def home_view(request):
    return render(request, 'bank.html')


def bank_view(request):
    data = get_jsons.get_bank()

    return HttpResponse(data)






