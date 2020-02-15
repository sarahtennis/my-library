# API Documentation

## Backend deployed at [TBD](url)

## Getting Started

## Framework

## Endpoints

### Users

Method | Endpoint       | Access Control | Description
------ | -------------- | -------------- | -------------------------------------------------------------------
GET    | /api/users     |                | Returns array of all user objects, or empty
GET    | /api/users/:id |                | Returns array containing user object matching provided id, or empty
POST   | /api/users     |                | Returns array containing newly inserted row id (integer)
PUT    | /api/users/:id |                | Returns array containing updated row id (integer)
DELETE | /api/users/:id |                | Returns integer count of number of rows deleted

### Account Settings

Method | Endpoint                 | Access Control | Description
------ | ------------------------ | -------------- | -----------------------------------------------------------------------
GET    | /api/accountSettings/:id |                | Returns array of account settings object matching provided id, or empty
POST   | /api/accountSettings     |                | Return array containing the id of the newly added row
PUT    | /api/accountSettings/:id |                | Return integer count of rows updated

# Account Details

Method | Endpoint                | Access Control | Description
------ | ----------------------- | -------------- | ----------------------------------------------------------------------
GET    | /api/accountDetails/:id |                | Returns array of account details object matching provided id, or empty
POST   | /api/accountDetails     |                | Return array containing the id of the newly added row
PUT    | /api/accountDetails/:id |                | Return integer count of rows updated

## Data Models

![terminal command](images/datamodels.png)

## Actions

## Environmental Variables

In order for the app to function correctly, the user must set up their own environment variables. Create a .env file that includes the following:

```javascript
VARIABLE_NAME = 123456; // example value
```

## Contributing

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.
