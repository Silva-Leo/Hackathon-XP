# Hackathon-XP | Open2B - Localizando investimentos

# Frontend :computer:

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta onde clonou esse repositório;
3. Rode `yarn` dentro da pasta `frontend` para instalar as dependências;
4. Na pasta `frontend` execute `yarn start` pra iniciar o servidor de desenvolvimento;


# Backend :computer:



![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)



## Python 3.7.9

As APIS foram consumidas atráves de scripts em Python.

![image](https://user-images.githubusercontent.com/29557513/154873137-3493e280-95ef-4446-9472-7ce154e0e318.png)



## Django 3.2.12

No diretório do prjeto instale as dependências do projeto:

##### `pip install -r requeriments.txt`



Rode a aplicação:

##### `python manage.py runserver`



No browser você poderá ver os dados das APIs com as rotas:

##### `127.0.0.1:8000/user-json/`

##### `127.0.0.1:8000/bank-json/`



![image](https://user-images.githubusercontent.com/29557513/154873166-5735efef-f173-4ce1-8b33-f6e930bb38cb.png)



As informações  das APIs foramm consumidas com a finalidade de alimentar o banco de dados Sqlite e o Front-End com React e Django.

Com isso iríamos hospedar a aplicação no Heroku para testes.




# Problemas e Resoluções ao longo do Projeto

 - Tivemos problemas ao consumir as APIs devido ao bloqueio dos headers que não foram autorizados. Acabamos perdendo muito tempo para poder solucionar.
   Além de não estarem todas padronizadas. Por exemplo:
  
  GET users ´--url 'https://openapi.xpi.com.br/openbanking/users?limi='´
  
  GET banks ´--url 'https://openapi.xpi.com.br/openbanking/users?limi'´


- Como não tínhamos no time um profissional de back-end, foi usado o conhecimento básico de django para poder levar os dados para o front-end.
