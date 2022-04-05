

<h1> TrybeSmith </h1>

![Medieval-Times](https://user-images.githubusercontent.com/85764731/161766901-77273016-c0e7-42b7-816e-e85a1d676a3b.gif)

### It is a web application that peforms CRUD operations of medieval items, using Typescript.


## Technologies Used:

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

## Installation

```bash
$ npm install
```

## Configuration
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

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```
# First Steps

## 1 - Create a User

### Make a POST request to "http://localhost:3000/users" using this structure:

```json
{
  "username": "username",
  "classe": "randomClass",
  "level": 1,
  "password": "123456789"
}
```
### You must receive a token like this: 

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoidXNlcm5hbWUiLCJpYXQiOjE2NDkxNjc0NTksImV4cCI6MTY0OTI1Mzg1OX0.BmDlKtLQNsgTWZFhhTG0_FGhX1nyRuDBwy8V4YhZb50"
}
```
