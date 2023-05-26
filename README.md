# Train Schedule Application

This project was created using NestJS and the ORM Prisma and contains a REST API.

## API Endpoints
GET /trainroutes - retrieves a list of routes
POST /trainroutes - creates a new route
PUT /trainroutes/{id} - updates route
DELETE /trainroutes/{id} - deletes a route

## Steps to run the project:

1. Clone the repository to your local machine.
2. Update .env file, with proper connection url.
2. Install dependencies by running `npm install`.
3. Launch the database by running `npm install @prisma/client`.
4. Start the backend server by running `npm run start:dev`.

Technologies:
 - NestJS
 - Express
 - TypeScript
