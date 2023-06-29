# Strategy Pattern

## Introduction

The Strategy pattern is a behavioral design pattern that enables dynamic selection of algorithms or strategies at runtime. It allows you to encapsulate different algorithms or strategies within separate classes and switch between them based on the context or requirements.

The Strategy pattern is useful when you have multiple algorithms or strategies that can be used interchangeably, and you want to decouple the client code from the specific algorithm implementations. It promotes flexibility, extensibility, and maintainability by allowing you to add or modify strategies independently without impacting the client code.

## Intent

The Strategy pattern aims to:

- Define a family of algorithms or strategies.
- Encapsulate each algorithm or strategy into separate classes.
- Make the algorithms or strategies interchangeable at runtime.
- Enable the client to select and use strategies dynamically.

## Motivation

In certain scenarios, you may encounter situations where you need to apply different algorithms or strategies to achieve the desired outcome. However, directly embedding these algorithms or strategies within the client code can lead to code duplication, poor readability, and limited flexibility.

The Strategy pattern addresses these concerns by providing a way to encapsulate algorithms or strategies in separate classes. By doing so, you can easily swap or modify strategies without impacting the client code. This promotes code reuse, improves code organization, and allows for more dynamic behavior.

## Structure

The Strategy pattern consists of the following components:

- **Context**: Represents the client code that interacts with the strategies.
- **Strategy**: Defines the interface or abstract class that declares the method(s) to be implemented by concrete strategies.
- **Concrete Strategies**: Implement the Strategy interface or extend the abstract class, providing specific algorithm implementations.

The typical flow of the Strategy pattern involves the following steps:

1. The client creates a context object and selects a strategy to be used.
2. The client sets the chosen strategy in the context.
3. The context delegates the execution of the algorithm to the selected strategy.
4. The client can change the strategy at runtime by setting a different strategy in the context.

## Participants

The main participants in the Strategy pattern are:

- **Context**: Maintains a reference to the Strategy interface and delegates the algorithm execution to the current strategy.
- **Strategy**: Defines the interface or abstract class that declares the method(s) to be implemented by concrete strategies.
- **Concrete Strategies**: Implement the Strategy interface or extend the abstract class, providing specific algorithm implementations.

## Usage

To implement the Strategy pattern, follow these steps:

1. Define the **Strategy** interface or abstract class that declares the method(s) to be implemented by concrete strategies. This interface or abstract class should represent the common contract shared by all strategies.

2. Implement multiple **Concrete Strategies** that implement the Strategy interface or extend the abstract class. Each concrete strategy should provide its own implementation for the defined method(s).

3. Create the **Context** class that will interact with the strategies. The context should maintain a reference to the Strategy interface and delegate the execution of the algorithm to the current strategy.

4. In the **Client** code, create an instance of the Context class. Select a strategy based on the requirements or context. Set the chosen strategy in the context using a setter method or constructor injection.

5. Invoke the appropriate method(s) on the context object to trigger the execution of the algorithm using the selected strategy.

By following these steps, you can achieve a flexible and dynamic behavior by easily swapping or modifying strategies at runtime, without tightly coupling the client code to specific implementations.
