# A basic Hapi.js API following Clean Architecture principles

## Getting started (< 2mn)

```
git clone git@github.com:jbuget/hapijs-v17-app.git
cd hapijs-v17-app
npm install
npm start
```

In a browser, open [http://localhost:3000/hello](http://localhost:3000/hello).

## DDD and Clean Architecture

The application follows the Uncle Bob "[Clean Architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)" principles and project structure :

### Project anatomy

```
hapijs-v17-app 
 └ lib                      → Application sources 
    └ business_rules        → Enterprise and application business rules
    └ interface_adapters    → Adapters and formatters for use cases and entities to external agency such as Database or the Web
    └ technical_drivers     → Frameworks and tools such as Database, the Web Framework, glue code etc.
 └ node_modules (generated) → NPM dependencies
 └ test                     → Source folder for unit or functional tests
 └ index.js                 → Main application entry point
```

### The Dependency Rule

According to Uncle Bob: 

> The concentric circles represent different areas of software. In general, the further in you go, the higher level the software becomes. The outer circles are mechanisms. The inner circles are policies.
> 
> The overriding rule that makes this architecture work is The Dependency Rule. This rule says that source code dependencies can only point inwards. Nothing in an inner circle can know anything at all about something in an outer circle. In particular, the name of something declared in an outer circle must not be mentioned by the code in an inner circle. That includes, functions, classes. variables, or any other named software entity.
> 
> By the same token, data formats used in an outer circle should not be used by an inner circle, especially if those formats are generate by a framework in an outer circle. We don’t want anything in an outer circle to impact the inner circles.

### Crossing boundaries.

According to Uncle Bob:

> At the lower right of the diagram is an example of how we cross the circle boundaries. It shows the Controllers and Presenters communicating with the Use Cases in the next layer. Note the flow of control. It begins in the controller, moves through the use case, and then winds up executing in the presenter. Note also the source code dependencies. Each one of them points inwards towards the use cases.
> 
> We usually resolve this apparent contradiction by using the Dependency Inversion Principle. In a language like Java, for example, we would arrange interfaces and inheritance relationships such that the source code dependencies oppose the flow of control at just the right points across the boundary.
> 
> For example, consider that the use case needs to call the presenter. However, this call must not be direct because that would violate The Dependency Rule: No name in an outer circle can be mentioned by an inner circle. So we have the use case call an interface (Shown here as Use Case Output Port) in the inner circle, and have the presenter in the outer circle implement it.
> 
> The same technique is used to cross all the boundaries in the architectures. We take advantage of dynamic polymorphism to create source code dependencies that oppose the flow of control so that we can conform to The Dependency Rule no matter what direction the flow of control is going in.