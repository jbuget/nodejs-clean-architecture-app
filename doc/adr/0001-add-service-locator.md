# 0001 - Add service locator

## Context

Domain centric architectures implementations are based on "Object Inheritance" and "Dependency Injection" concepts, mainly because of the port & adapters pattern and the dependency flow rules (ouside-in only).

Such mechanisms do not exist by default in JavaScript. But they can be implemented.

## Decision

One solution is to use the [Service Locator pattern](https://en.wikipedia.org/wiki/Service_locator_pattern) (a.k.a. Service Resolver pattern).

## Consequences

The `service-locator` module is placed in middle layer "interface_adapters" because it is a part of the system given a specific context. It is not a connector to external components, but an application-level configuration object.

It is a singleton initialized during the application bootstrap phase.

It must be passed (or injected) in every application or domain objects that depend on technical & transversal components/concerns.

The service locator is responsible to select which implementation should be selected and initialized for which environment/technical context (ex: test, development, production, etc).
