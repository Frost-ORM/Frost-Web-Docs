---
sidebar_position: 1
---

# What is Frost?

Frost is an [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping) (Object Relational Mapping) Library that utilizes Typescript Decorators to simplify working with [Firebases's Realtime DB](https://firebase.google.com/products/realtime-database).
Frost Focuses on the relations between the database nodes and generates all the needed code for the developer to fetch these nodes with the ones related to them.
It also utilizes [ReactiveX](https://reactivex.io/) to provide the developer with observables that listen to the changes on theses nodes. And Of course provide the developer with the utilities to preform basic operations on the database.

## Getting Started

Before we head to defining the classes and the relations between them, we need to setup the project.

### What you'll need

- Decorators Support in your project. if you don't have it already **[follow this guide](/docs/guides/decorators-support)**
- Firebase Database credentials to initialize the database client.

Finally you can follow the [installation guide](/docs/guides/installation) and then go through the documentation 
<!-- or follow the [quick start guide](/docs/guides/quick-start) -->
