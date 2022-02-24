# Hackathon-XP | <img src="https://raw.githubusercontent.com/Silva-Leo/Hackathon-XP/1af13ca59ad5e38d91371cdd5445d6f27fa20603/hacka-xp/src/assets/img/HeaderLogo.svg" height="35px" width="35px"> Open2B - Localizando investimentos 

<div align="center">
 <img src="https://user-images.githubusercontent.com/87882835/155593966-4aa41898-7a54-448c-92bd-33d184e9133f.png" height="350px" width="600px">
</div>

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta onde clonou esse repositório;
3. Rode `yarn` dentro da pasta `frontend` para instalar as dependências;
4. Na pasta `frontend` execute `yarn start` pra iniciar o servidor de desenvolvimento;

# Frontend :computer:

## <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="30px" width="35px"/> React

O Frontend foi desenvolvido em React. 

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" height="30px" width="35px" /> - Material UI foi utilizado nos componentes

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" height="30px" width="35px"/> - Sass foi utilizado para estilização e definição do design system aplicados no projeto

# Backend :computer:


## <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="35px" width="35px"/> Python 3.7.9

As APIS foram consumidas atráves de scripts em Python.

<div align="center">
 <img src="https://user-images.githubusercontent.com/29557513/154873137-3493e280-95ef-4446-9472-7ce154e0e318.png" height="570px" width="450px">
</div>

## Django 3.2.12

No diretório do projeto instale as dependências do projeto:

##### `pip install -r requeriments.txt`



Rode a aplicação:

##### `python manage.py runserver`



No browser você poderá ver os dados das APIs com as rotas:

##### `127.0.0.1:8000/user-json/`

##### `127.0.0.1:8000/bank-json/`



![image](https://user-images.githubusercontent.com/29557513/154873166-5735efef-f173-4ce1-8b33-f6e930bb38cb.png)



As informações das APIs foramm consumidas com a finalidade de alimentar o banco de dados Sqlite e o Front-End com React e Django.

Com isso iríamos hospedar a aplicação no Heroku para testes.




# Problemas e Resoluções ao longo do Projeto

 - Tivemos problemas ao consumir as APIs devido ao bloqueio dos headers que não foram autorizados. Acabamos perdendo muito tempo para poder solucionar.
   Além de não estarem todas padronizadas. Por exemplo:
  
  GET users ´--url 'https://openapi.xpi.com.br/openbanking/users?limi='´
  
  GET banks ´--url 'https://openapi.xpi.com.br/openbanking/users?limi'´


- Como não tínhamos no time um profissional de back-end, foi usado o conhecimento básico de django para poder levar os dados para o front-end.
