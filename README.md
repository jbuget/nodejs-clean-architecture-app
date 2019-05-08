# A basic Hapi.js API following Clean Architecture principles

## Getting started (< 2mn)

```
git clone git@github.com:jbuget/nodejs-clean-architecture-app.git
cd nodejs-clean-architecture-app
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
       └ security           → Security tools interfaces (ex: AccessTokenManager.js, to generate and decode OAuth access token)
       └ use_cases          → Application business rules 
    └ domain                → Enterprise core business layer
       └ models             → Domain model objects such as Entities, Aggregates, Value Objects, Business Events, etc.
       └ services           → Domain services, e.g. business objects that manipulate multiple and different Domain Models
    └ infrastructure        → Frameworks, drivers and tools such as Database, the Web Framework, mailing/logging/glue code etc.
       └ database           → ORM and database connection objects
       └ webserver          → Hapi.js Web server configuration (server, routes, plugins, etc.)
          └ server.js       → Hapi.js server definition
    └ interfaces            → Adapters and formatters for use cases and entities to external agency such as Database or the Web
       └ controllers        → Hapi.js route handlers
       └ security           → Security tools implementations (ex: JwtAccessTokenManager)
       └ serializers        → Converter objects that transform outside objects (ex: HTTP request payload) to inside objects (ex: Use Case request object)
       └ storage            → Repository implementations
 └ node_modules (generated) → NPM dependencies
 └ test                     → Source folder for unit or functional tests
 └ index.js                 → Main application entry point
```

### Flow of Control

![Schema of flow of Control](/doc/Hapijs_Clean_Architecture.svg)

### Server, Routes and Plugins

Server, routes and plugins can be considered as "plumbery-code" that exposes the API to the external world, via an instance of Hapi.js server. 

The role of the server is to intercept the HTTP request and match the corresponding route.

Routes are configuration objects whose responsibilities are to check the request format and params, and then to call the good controller (with the received request). They are registered as Plugins.

Plugins are configuration object that package an assembly of features (ex: authentication & security concerns, routes, pre-handlers, etc.) and are registered at the server startup.    

### Controllers (a.k.a Route Handlers)

Controllers are the entry points to the application context.

They have 3 main responsibilities :

1. Extract the parameters (query or body) from the request
2. Call the good Use Case (application layer)
3. Return an HTTP response (with status code and serialized data)

### Use Cases

A use case is a business logic unit.

It is a class that must have an `execute` method which will be called by controllers.

It may have a constructor to define its dependencies (concrete implementations - a.k.a. _adapters_ - of the _port_ objects) or its execution context.

**Be careful! A use case must have only one precise business responsibility!**

A use case can call objects in the same layer (such as data repositories) or in the domain layer.