from django.db import models


class Test(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return str(self.id)


class Bank(models.Model):
    name = models.CharField(max_length=200)
    investment = models.CharField(max_length=200)
    bankId = models.CharField(max_length=200)
    type = models.CharField(max_length=200)
    value = models.DecimalField(decimal_places=2, max_digits=8)
    dueDate = models.DateTimeField()
    profitability = models.DecimalField(decimal_places=2, max_digits=8)
    risk = models.DecimalField(decimal_places=0, max_digits=3)
    acquisitions = models.DateTimeField()
    volumn = models.DecimalField(decimal_places=2, max_digits=8)

    def __str__(self):
        return str(self.name)