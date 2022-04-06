
<h1 align="center">TrybeSmith</h1>

### It is a web application that peforms some CRUD operations of medieval items, using Typescript.

<!-- ![Medieval-Times](https://user-images.githubusercontent.com/85764731/161766901-77273016-c0e7-42b7-816e-e85a1d676a3b.gif) -->

<h4 align="center"> 
	🚧   Under development...   🚧
</h4>

<p align="center">
 <a href="#objective">Objective</a> •
 <a href="#features">Features</a> • 
 <a href="#technologies">Technologies</a> • 
 <a href="#prerequisites">Prerequisites</a> • 
 <a href="#instructions">Instructions</a> •
 <a href="#author">Autor</a>
</p>


<h2 id="objective"> Objective </h2>
- This is a study project whose aim was to exercise the construction of APIs.

<h3 id="features"> Features </h3>

- [x] User register
- [x] Login
- [x] Items Register
- [x] List of Items
- [ ] Get item by id
- [ ] Delete items 
- [ ] Update items

<h2  id="technologies">Technologies: </h2>

<table>
  <tr>
    <td>TypeScript</td>
    <td>Express</td>
    <td>MySql2</td>
  </tr>
  <tr>
    <td>4.4.3</td>
    <td>4.17.1</td>
    <td>2.3.0</td>
  </tr>
</table>

<h2 id="prerequisites"> Prerequisites </h2>

Before start, you will need to install the following tools: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [MySql](https://www.mysql.com/downloads/). For the API Client, i recommend [Insomnia](https://insomnia.rest/download).
It's good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/).

### 🎲 First Steps

```bash
# Clone this repository
$ git clone <https://github.com/EnzoThome-et/crud-nodejs-ts.git>

# Go to the project folder
$ cd crud-nodejs-ts

# Install the dependencies
$ npm install

```

### Configuration
In the project root create an .env file for the database connection and use your local environments
```bash
# Insert your MySql User
MYSQL_USER=user

# Insert your MySql Password
MYSQL_PASSWORD=123

HOSTNAME=localhost

# Default Port
PORT=3000
```

### Running the server

```bash
# Execute the aplication in development mode
$ npm run dev

# The server will start on port:3000
```
<h1 id="instructions"> Instructions </h1>

## 1 - Create a User

- Make a POST request to `http://localhost:3000/users` using this structure:

```json
{
  "username": "username",
  "classe": "randomClass",
  "level": 1,
  "password": "123456789"
}
```
- In case of success, you must receive a token structure similar to this: 

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoidXNlcm5hbWUiLCJpYXQiOjE2NDkxNjc0NTksImV4cCI6MTY0OTI1Mzg1OX0.BmDlKtLQNsgTWZFhhTG0_FGhX1nyRuDBwy8V4YhZb50"
}
```

## 2 - Login

- Make a POST request to `http://localhost:3000/login` using your email and password registered in the database. 

```json
{
  "username": "username",
  "password": "123456789"
}
```

- In case of success, you must receive a token structure similar to the first step.

## 3 - Register Products

- Make a POST request to `http://localhost:3000/products`.

- Here you need to use your token on request header:

![2022-04-05_21-26](https://user-images.githubusercontent.com/85764731/161872159-c19d93d3-f5d2-4ccf-a941-209b1f0bee5f.png)

- The endpoint needs to receive this structure: 

```json
{
  "name": "Long Sword",
  "amount": "30 gold coins"
}
```

- If everything went well, the expected return is :

```json
{
  "item": {
    "id": 1,
    "name": "Long Sword", 
    "amount": "30 gold coins"
  }
}
```

## 4 - List Products

- Before proceeding, let's create one more item (if you have any difficulties, go back to the previous step.):

```json
{
  "name": "Corrupting Potion ",
  "amount": "50 gold coins"
}
```

- With your token on requisition headers, make a GET request to `http://localhost:3000/products`.

- You must receive a return like this:

```json
[
  {
    "id": 1,
    "name": "Espada longa",
    "amount": "30 peças de ouro",
    "orderId": null
  },
  {
    "id": 2,
    "name": "Corrupting Potion ",
    "amount": "50 gold coins",
    "orderId": null
  }
]
```

<h2 id="author"> Author </h2>
- [Enzo Thomé](https://github.com/EnzoThome-et)
