# Hackathon-XP

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




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
