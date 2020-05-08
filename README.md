# **IMPORTANT NOTE:**

To avoid getting charged by AWS or hacked, we've stopped our deployments and RDS. Please refer to the demo video in our submission to see them in action.

# **San Jose State University**

## **Course:** Enterprise Software - CMPE172 / SPRING 2020

**Instructor:** Professor Babu Thomas <br />
**Team Name:** The IT Crowd - Team 8 <br />
**Team Members:**

- Tien Nguyen
- Sridevi Kuchibotla
- Dale Christian Seen

# Project Introduction

In today’s world, it is very easy to get distracted because of the Internet. Many people end up procrastinating on the things that they should be doing. Agenda is a web-based application, and it seeks to increase the users’ productivity by allowing them to plan and execute their tasks. Users can have multiple to-do lists and can categorize them by name. They can create, edit, check-off, and remove items on a list. Most importantly, Agenda utilizes Amazon Web Services to secure the users’ data.

## Application URL

http://agenda-client-dev.us-west-2.elasticbeanstalk.com/

## Project Setup Prerequisites:

1. NodeJS Runtime Environment
2. Java 11
3. Maven

## How To Run The Program Locally:

### Client

1. Open up a terminal and change directory (`cd`) to the project directory
2. `cd` to 'client'
3. Type `npm install` to install frontend dependencies
4. Type `npm run start` to start client server

### Server

1. `cd` to the project directory.
2. `cd` to server.
3. Build and run the maven project: `mvn spring-boot:run`
4. If backend fails to run due to failed MySQL connection, read note below:

**IMPORTANT NOTE:** Since we've closed our deployments, our RDS is no longer active and so the backend will not run. To run locally, you need to change the server/src/main/resources/application.properties to connect to your MySQL local instance running at port 3306.

The database schemas & dummy data is included in server/database folder

```
    spring.datasource.url=jdbc:mysql://localhost:3306/todo?useLegacyDatetimeCode=false&serverTimezone=America/Los_Angeles

    spring.datasource.username=<YOUR MYSQL INSTANCE USERNAME>

    spring.datasource.password=<YOUR MYSQL INSTANCE PASSWORD>
```

## Project Documentation

### System Diagram

![System Diagram](documentation/System%20Diagram.png)

### Database ERD

![ERD](documentation/erd.png)

### Server Structure

![Server Structure](documentation/Server%20Structure.png)

### Database Queries

![Database Queries](documentation/queries.png)

### Mid-tier API

![API](documentation/api.png)

### Data Transport Example of a TodoList(JSON):

```
{
    "todo_list_id": 41,
    "title": "Homework",
    "user_id": 39,
    "description": "Homework for SJSU",
    "status": "planned"
    "creation_date": "1999-04-18 23:45:37"
    "modification_date": "2000-04-18 23:45:37"
}
```

## Project Documents (Google Docs):

- [Project Report](https://docs.google.com/document/d/1Uxd7TTeCD-0PiNiAxDvdvqvcGygJw6UGnfWWuA8b8IU/edit?usp=sharing)
- [Project Proposal](https://docs.google.com/document/d/1qxvki3F0zz8bxmlaqNY0W6UA-gU2xafN5GrrWD1lQOs/edit?usp=sharing)
- [Database ERD](https://drive.google.com/file/d/1YBNmNB-DwWwcsTWDBla1Nk2MjC2HV14G/view?usp=sharing)
- [Project Backlog](https://docs.google.com/spreadsheets/d/1xL222FVPeo5MLKAXXRyjO8meQvX-7i1IBg-ogQp9kgw/edit?usp=sharing)
