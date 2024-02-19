# OpenClassrooms project 13 : Argent Bank

## Context

Remede Agency, an imaginary agency specializing in the development of web applications, agreed to work for Argent Bank, an imaginary bank.

This project represents the application that was created.

With it, users can log in their customer area, view the list of their bank accounts and manage their personal data.

It was bootstrapped with [Vite JS](https://vitejs.dev/), [react](https://react.dev/) and [typescript](https://www.typescriptlang.org/).

The page was integrated from a [static site mockup](https://github.com/Cycle9898/OC_Projet-13_ArgentBank_Back/tree/main/designs).

Redux is used to store the global state of the application.

Data is retrieved via an API. More infos on this API [here](https://github.com/Cycle9898/OC_Projet-13_ArgentBank_Back).

Data from 2 users is currently available through the API :

### Tony Stark

-   First Name: `Tony`
-   Last Name: `Stark`
-   Email: `tony@stark.com`
-   Password: `password123`

### Steve Rogers

-   First Name: `Steve`,
-   Last Name: `Rogers`,
-   Email: `steve@rogers.com`,
-   Password: `password456`

The next functionality that will be added is the retrieval and display of banking transactions from each customer's accounts.

To begin with, it was necessary to design and document the endpoints that would have to be created for the API v2, on the back-end side, with Swagger.

## Web application overview

### Prerequisites

-   [Node.JS](https://nodejs.org/en)

-   [Yarn](https://yarnpkg.com/)

-   [MongoDB](https://www.mongodb.com/try/download/community)

### Getting Started (Back-end)

**This step can be skipped because the back-end part is currently hosted on a cloud platform.**

Otherwise, it is possible to test the complete app locally.

To do so, delete the .env file in the main folder (or edit/remove VITE_API_URL environment variable) and follow [these instructions](https://github.com/Cycle9898/OC_Projet-13_ArgentBank_Back) to set up the
back-end part.

### Getting Started (Front-end)

-   Clone this repo : `git clone https://github.com/Cycle9898/OC_Projet-13_ArgentBank_Front.git`

-   Inside the cloned folder, install all dependencies with : `yarn`

-   Then start the front-end part with : `yarn dev`

This command runs the app in the development mode.

Open http://localhost:5173 to view it in the browser.

### V2 API documentation

The documentation for v2 API, a swagger YAML file, is stored in [the swagger folder of the front-end repo](https://github.com/Cycle9898/OC_Projet-13_ArgentBank_Front/blob/main/swagger/).
