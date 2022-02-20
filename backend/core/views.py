from django.shortcuts import render
from django.http import HttpResponse
from .get_jsons import get_bank, get_user


def home_view(request):
    return render(request, 'bank.html')


def bank_view(request):
    data = get_bank()

    return HttpResponse(data)


def user_view(request):
    data = get_user()

    return HttpResponse(data)




