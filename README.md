# rental_app_backend
 This is the first part of a project that consists of creating the backend part for an application for the rental of films. The functionalities that will be required for this first check lie in the data query.
# Rental App (backend)
 This is the first part of a project that consists of creating the backend part for an application for the rental of films. 
 The functionalities that will be required for this first check lie in the data query.

### General Info
***

Esta es la primera parte de un proyecto que consiste en crear el backend de una aplicación para el alquiler de películas.
Las funcionalidades que se requerirán para esta primera comprobación radican en la consulta de datos.
El proyecto consiste en poner en práctica los conocimientos adquiridos en materia de APIs, Express, Mongo y principalmente la implementación 
de peticiones y creación de CRUD. Así como el desarrollo y mejora de los conocimientos adquiridos en el transcurso del curso.
También representa la primera parte del cuarto proyecto del Bootcamp Full Stack Developer que imparte GeeksHubs Academy.

A continuación se desglosan los endpoints requeridos por esta aplicación integrada con la api de movieDB. 
Entre otroas cosas, se ha creado una base de datos de usuarios para el login y sing up, además de aquellos endpoint que se requerían en el proyecto, los cuales se desglosan a continuación junto con un ejemplo para realizar las peticiones.

# ¡Este es el resultado!

Puedes visitar: https://mayrms.github.io/TicTacToe/

### Listar todos los usuarios:

URL: http://patatas.com/users
Method: GET

Requisitos: Endpoint securizado con token de JWT. Es preciso logearse con un usuario administrador.

Ejemplo de petición para importar en Postman: 

curl --location --request GET 'http://localhost:8934/users' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIs… Correspondiente al token del administrador

### Screenshot
![Image text](https://github.com/MayRMS/rental_app_backend/blob/main/img/allUsers.png)

### Usuario por ID:

URL: http://localhost:xxxxxx/users/63b6f402cf1a1e8
Method: GET

Requisitos: Endpoint securizado con token de JWT. Es preciso logearse con un usuario administrador.

Ejemplo de petición para importar en Postman: 

curl --location --request GET 'http://localhost:8934/users/63b6f402cf1a1e82a2a0cf37' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIs… Correspondiente al token del administrador

### Screenshot
![Image text](https://github.com/MayRMS/rental_app_backend/blob/main/img/usersById.png)


### Usuario: login:

URL: http://localhost:xxxxxx/users/login
Method: POST

Requisitos: Este endpoint no está securizado con token de JWT ni es preciso logearse con un usuario administrador.

Ejemplo de petición para importar en Postman: 

curl --location --request POST 'http://localhost:8934/users/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "password": "******",
    "email": "******@beers.com"
}'

### Screenshot
![Image text](https://github.com/MayRMS/rental_app_backend/blob/main/img/usersLogin.png)


### Usuario: sign up:

URL: http://localhost:xxxxxx/users/login
Method: POST

Requisitos: Este endpoint no está securizado con token de JWT ni es preciso logearse con un usuario administrador.

Ejemplo de petición para importar en Postman: 

curl --location --request POST 'http://localhost:8934/users/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "abcd",
    "age": ##,
    "password": "*****",
    "email": "*****@beers.com"
}'

### Screenshot
![Image text](https://github.com/MayRMS/rental_app_backend/blob/main/img/usersSignUP.png)


### Películas Top Rated:

URL: http://patatas.com/movies/toprated
Method: GET

Requisitos: Endpoint securizado con token de JWT. No es preciso logearse con un usuario administrador.

Ejemplo de petición para importar en Postman: 

curl --location --request GET 'http://localhost:8934/movies/name/troll'
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIs… Correspondiente al token del administrador

### Screenshot
![Image text](https://github.com/MayRMS/rental_app_backend/blob/main/img/moviesTopRated.png)


### Películas: by Name:

URL: http://patatas.com/movies/name/****
Method: GET

Requisitos: Endpoint securizado con token de JWT. No es preciso logearse con un usuario administrador.

Ejemplo de petición para importar en Postman: 

curl --location --request GET 'http://localhost:8934/movies/name/*****'
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIs… Correspondiente al token del administrador

### Screenshot
![Image text](https://github.com/MayRMS/rental_app_backend/blob/main/img/movieByName.png)


### Películas: by Id:

URL: http://patatas.com/movies/736529
Method: GET

Requisitos: Endpoint securizado con token de JWT. No es preciso logearse con un usuario administrador.

Ejemplo de petición para importar en Postman: 

curl --location --request GET 'http://localhost:8934/movies/736526'
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIs… Correspondiente al token del administrador

### Screenshot
![Image text](https://github.com/MayRMS/rental_app_backend/blob/main/img/moviesById.png)

### Películas: by Genre:

URL: http://patatas.com/movies/genre/*****
Method: GET

Requisitos: Endpoint securizado con token de JWT. No es preciso logearse con un usuario administrador.

Ejemplo de petición para importar en Postman: 

curl --location --request GET 'http://localhost:8934/movies/genre/action'
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIs… Correspondiente al token del administrador

![Image text](https://github.com/MayRMS/rental_app_backend/blob/main/img/movieByGenre.png)

### Series Top Rated:

URL: http://patatas.com/series/toprated
Method: GET

Requisitos: Endpoint securizado con token de JWT. No es preciso logearse con un usuario administrador.

Ejemplo de petición para importar en Postman: 

curl --location --request GET 'http://localhost:8934/series/toprated' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIs… Correspondiente al token del administrador

### Screenshot
![Image text](https://github.com/MayRMS/rental_app_backend/blob/main/img/seriesTopRated.png)


### Series: by Name:

URL: http://patatas.com/series/name/****
Method: GET

Requisitos: Endpoint securizado con token de JWT. No es preciso logearse con un usuario administrador.

Ejemplo de petición para importar en Postman: 

curl --location --request GET 'http://localhost:8934/series/name/*****'
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIs… Correspondiente al token del administrador

### Screenshot
![Image text](https://github.com/MayRMS/rental_app_backend/blob/main/img/seriesByName.png)


### Series: by Id:

URL: http://patatas.com/series/736529
Method: GET

Requisitos: Endpoint securizado con token de JWT. No es preciso logearse con un usuario administrador.

Ejemplo de petición para importar en Postman: 

curl --location --request GET 'http://localhost:8934/series/130392'
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIs… Correspondiente al token del administrador

### Screenshot
![Image text](https://github.com/MayRMS/rental_app_backend/blob/main/img/seriesById.png)

### Series: vistas en cines:

URL: http://patatas.com/series/screened/cinema
Method: GET

Requisitos: Endpoint securizado con token de JWT. No es preciso logearse con un usuario administrador.

Ejemplo de petición para importar en Postman: 

curl --location --request GET 'http://localhost:8934/series/screened/cinema'
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIs… Correspondiente al token del administrador

### Screenshot
![Image text](https://github.com/MayRMS/rental_app_backend/blob/main/img/screened.png)

### Series: con capítulo en los próximos 7 días:

URL: http://patatas.com/series/comingsoon/thisweek
Method: GET

Requisitos: Endpoint securizado con token de JWT. No es preciso logearse con un usuario administrador.

Ejemplo de petición para importar en Postman: 

curl --location --request GET 'http://localhost:8934/series/comingsoon/thisweek'
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIs… Correspondiente al token del administrador

### Screenshot
![Image text](https://github.com/MayRMS/rental_app_backend/blob/main/img/next7Days.png)


## Instalación
***
Para correrlo en local:
```
$ git clone https://example.com
$ cd ../path/to/the/file
$ npm install
$ npm start
```
