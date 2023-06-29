# Factory Design Pattern

## Introduction

The Factory design pattern is a creational design pattern that provides an interface for creating objects without specifying their concrete classes. It encapsulates the object creation logic within a factory method, allowing the client code to create objects dynamically based on certain parameters or conditions.

The Factory pattern promotes loose coupling between the client code and the created objects. It abstracts the process of object creation and provides a common interface to create different types of objects, making the code more flexible and maintainable.

## Intent

The Factory pattern aims to:

- Provide an interface for creating objects without specifying their concrete classes.
- Encapsulate the object creation logic within a factory method.
- Decouple the client code from the specific classes of objects being created.

## Motivation

In software development, there are scenarios where the client code needs to create objects of different classes that share a common base or interface. Instead of directly instantiating the concrete classes in the client code, which would lead to tight coupling, the Factory pattern suggests using a separate factory class or method to handle the object creation.

This approach allows the client code to rely on abstractions rather than concrete implementations. It simplifies the client code by delegating the responsibility of object creation to a factory, which can select the appropriate subclass to instantiate based on certain conditions or parameters. This flexibility enables easier maintenance and extensibility of the codebase.

## Structure

The Factory pattern consists of the following components:

- **Product**: The common interface or base class that defines the methods for the objects the factory can create.
- **ConcreteProduct**: The concrete classes that implement the Product interface.
- **Factory**: The factory class or method that encapsulates the object creation logic. It provides a method to create objects of the Product type.
- **ConcreteFactory**: The concrete factory class that implements the Factory interface and overrides its method(s) to create specific ConcreteProduct objects.
- **Client**: The code that invokes the factory to create objects instead of directly instantiating concrete classes.

The typical flow of the Factory pattern involves the following steps:

1. The client code calls a factory method or class to create an object.
2. The factory method or class selects the appropriate concrete class based on certain conditions or parameters.
3. The factory method or class creates an instance of the selected concrete class and returns it as a Product object.
4. The client code uses the Product object without knowing the specific class it belongs to.

## Participants

The main participants in the Factory pattern are:

- **Product**: Defines the interface or base class that represents the objects created by the factory.
- **ConcreteProduct**: Implements the Product interface or extends the base class to provide specific implementations.
- **Factory**: Provides a method or class that encapsulates the object creation logic and returns instances of the Product type.
- **ConcreteFactory**: Implements the Factory interface or class and overrides its method(s) to create specific ConcreteProduct objects.
- **Client**: Invokes the factory to create objects and uses the Product objects without knowledge of their concrete classes.

## Usage

To implement the Factory pattern, follow these steps:

1. Create the Product interface or base class that defines the common methods that all objects created by the factory should implement.

2. Implement the ConcreteProduct classes that provide specific implementations of the Product interface or extend the base class. Each ConcreteProduct class represents a different type of object that the factory can create.

3. Design the Factory interface or base class that declares the method for creating objects of the Product type.

4. Implement the ConcreteFactory class that extends the Factory interface or class and overrides its method(s) to create specific ConcreteProduct objects.

5. In the Client code, create an instance of the ConcreteFactory class and use its factory method to create objects dynamically. Use the returned Product objects without knowing their specific classes. This promotes loose coupling and flexibility in the client code.

By following these steps, you can effectively use the Factory pattern in your software development projects.

## Variation

Simple Factory

The Simple Factory, also known as the Static Factory Method, is a variation of the Factory pattern. In this variation, a single factory method or class is responsible for creating objects of different types based on input parameters or conditions.
