# A basic Hapi.js API following Clean Architecture principles

## Getting started (< 2mn)

```
git clone git@github.com:jbuget/nodejs-clean-architecture-app.git
cd hapijs-v17-app
npm install
npm test
npm start
```

In a browser, open [http://localhost:3000/hello](http://localhost:3000/hello).

## DDD and Clean Architecture

The application follows the Uncle Bob "[Clean Architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)" principles and project structure :

### Clean Architecture layers

![Schema of flow of Clean Architecture](/doc/Uncle_Bob_Clean_Architecture.jpg)

### Project anatomy

```
app 
 └ lib                      → Application sources 
    └ application           → Application services layer
       └ repositories       → Data access objects interfaces (unfortunately, there is no Interface pattern in JavaScript)
       └ use_cases          → Application business rules 
    └ domain                → Enterprise core business layer
       └ models             → Domain model objects such as Entities, Aggregates, Value Objects, Business Events, etc.
       └ services           → Domain services, e.g. business objects that manipulate multiple and different Domain Models
    └ infrastructure        → Frameworks, drivers and tools such as Database, the Web Framework, mailing/logging/glue code etc.
       └ database           → ORM and database connection objects
       └ webserver          → Hapi.js Web server configuration (server, routes, plugins, etc.)
          └ routes          → Hapi.js routes declaration (route handlers are in inner layer "interfaces/controllers")
          └ server.js       → Hapi.js server definition
    └ interfaces            → Adapters and formatters for use cases and entities to external agency such as Database or the Web
       └ controllers        → Hapi.js route handlers
       └ serializers        → Converter objects that transform outside objects (ex: HTTP request payload) to inside objects (ex: Use Case request object)
       └ storage            → Repository implementations
 └ node_modules (generated) → NPM dependencies
 └ test                     → Source folder for unit or functional tests
 └ index.js                 → Main application entry point
```

### Flow of Control

![Schema of flow of Control](/doc/Hapijs_Clean_Architecture.svg)
