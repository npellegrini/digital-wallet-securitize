# Digital Wallet

This project was built dividing the responsabilities, the front-end side and the backend side. Both of then were created thinking to be scalable projects.
Backend: The backend was created using the Clean Architecture guide.This architectures produce systems that are:

- Independent of Frameworks
- Testable. The business rules can be tested without the UI, Database, Web Server, or any other external element.
- Independent of UI. 
- Independent of Database. 
- Independent of any external agency. 
- Versioning API

Front-end: was built in a way of:

- Reuseable components
- Avoiding using a lot of nested files & folders
- Good css structure depend on features
- Api layer to control all the request. I've destructured the request to make more configurable so we can inject parameters depend on the scenario.
- Service layer: to have services that we are going to use along the app. In this case i coded only the service to the global error handling
- Custom Hooks
- Hocs
- Helpers to assist in some process.
 
### Side Note
All this solution was coded in a very fast way just only to show some of the principles, best practices and architecture desicions that we can take over an application. There are a lot of things to improve, validate, make it better and add. For example the JWT securitazion in the API, the token into the frontend to use the api, cases of error handling in frontend and backend, migrations for the database etc.

## Installation
##### Backend:
1. Install `Mysql` and start `Mysql.server`.
2. Create database `digital-wallet` for development or import the one that i left for you in the folder db-mock
3. cd api-digital-wallet
4. `npm install`
5. Configure your owns credential in "config/default.json" 
6. `npm run dev`

###### Folder Structure

- Controllers:
  Unlike huge and mighty typical express.js controllers, controllers focus \
  on returning response object for given custom request object(`IHttpRequest`).

- Data-access:
  Instead of directly using `sequelize` model methods, `data-access` wraps those api thus \
  provides proper abstractions over the framework.

- Errors:
  Generally, typical web application needs to handle two kinds of errors, one is 5XX error and \
  the other is 4XX error. So for 5XX errors, use native js `Error` and for 4XX errors, use `ClientError`.

- Model-validations:
  This is the place where the business logic of each entity resides. It validates given data with `Joi` schema.\
  It throws `ClientError` when data is invalid and returns `getter` methods for each field instead of returning data object directly.\
  This makes `service` code more resilient to changes in entities structure.
- Model:
  Place for `typeorm` model definition however you can use whatever `ORM` or database client you like.
  It should work regardless of your selection of framework/library.
- Routes:
  It contains definition for each routes. For each route handlers, it must be wrapped with `buildExpressCallback` helper.
  Thus making our controller simple, dumb and not knowing which routing framework you're using.
- Services:
  It handles validations via `models-validation` and use `data-access` to interact with database.

##### Frontend

1. cd front-digital-wallet
2. yarn
3. Configure your REACT_APP_API_URL in .env
4. yarn start