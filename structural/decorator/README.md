# Decorator Design Pattern

## Introduction

The Decorator design pattern is a structural design pattern that allows behavior to be added to individual objects, dynamically, without affecting the behavior of other objects from the same class. It provides a flexible alternative to subclassing for extending functionality.

The Decorator pattern involves creating a set of decorator classes that wrap the original class and provide additional functionality or modify existing behavior. This allows the client code to work with decorated objects as if they were the original objects, while also incorporating additional features.

## Intent

The Decorator pattern aims to:

- Add responsibilities to objects dynamically and transparently.
- Extend functionality without the need to modify the original class.
- Provide a flexible way to mix and match behaviors for different objects.

## Motivation

In object-oriented programming, subclassing is a common way to extend the functionality of classes. However, subclassing has limitations, such as:

- It is static and determined at compile-time.
- It leads to a proliferation of classes when many variations are required.

The Decorator pattern addresses these limitations by allowing behavior to be added at runtime dynamically. By using composition and wrapping the original object in decorators, new functionality can be added to an object without modifying its structure. This approach promotes code reusability and keeps the codebase maintainable.

## Structure

The Decorator pattern consists of the following components:

- **Component**: Defines the interface for objects that can have responsibilities added to them.
- **ConcreteComponent**: Represents the original object to which responsibilities can be added.
- **Decorator**: Maintains a reference to a Component object and conforms to the Component interface.
- **ConcreteDecorator**: Adds responsibilities to the component and extends its behavior.
- **Client**: Initiates the construction of the object and decides which decorators to apply based on its requirements.

The typical flow of the Decorator pattern involves the following steps:

1. The client code creates a ConcreteComponent object.
2. The client can wrap the ConcreteComponent with one or more ConcreteDecorator objects, adding new functionality or modifying existing behavior.
3. The client code interacts with the decorated object as if it were the original ConcreteComponent, not being aware of the decorators.

## Participants

The main participants in the Decorator pattern are:

- **Component**: Defines the interface for objects that can have responsibilities added to them.
- **ConcreteComponent**: Represents the original object to which responsibilities can be added.
- **Decorator**: Maintains a reference to a Component object and conforms to the Component interface.
- **ConcreteDecorator**: Adds responsibilities to the component and extends its behavior.
- **Client**: Initiates the construction of the object and decides which decorators to apply based on its requirements.

## Usage

To implement the Decorator pattern, follow these steps:

1. Create the **Component** interface or abstract class that declares the common interface for both ConcreteComponent and ConcreteDecorator classes. This interface should define the basic operations that can be decorated.

2. Implement the **ConcreteComponent** class that represents the original object to which responsibilities can be added. This class should implement the Component interface.

3. Define the **Decorator** class that maintains a reference to a Component object and conforms to the Component interface. This class should have a constructor that takes a Component object as a parameter.

4. Create one or more **ConcreteDecorator** classes that extend the functionality of the Decorator by adding new responsibilities or modifying existing behavior. Each ConcreteDecorator should call the corresponding methods of the wrapped Component and then add its own behavior.

5. In the client code, create a ConcreteComponent object. Optionally, you can wrap it with one or more ConcreteDecorator objects to add additional functionality.

6. The client code can then interact with the decorated object as if it were the original ConcreteComponent, without being aware of the decorators.

The Decorator pattern allows you to create a flexible and extensible architecture by adding or modifying behavior at runtime. It is particularly useful when a class has multiple optional features or behaviors that can be combined in various ways.
