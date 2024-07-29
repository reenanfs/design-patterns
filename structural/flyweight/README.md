# Flyweight Design Pattern

## Introduction

The Flyweight design pattern is a structural pattern that minimizes memory usage by sharing as much data as possible with similar objects. This pattern is particularly useful when dealing with a large number of objects that have a lot of common properties. By sharing the intrinsic state and storing the extrinsic state separately, the Flyweight pattern reduces the memory footprint and improves performance.

## Intent

The Flyweight pattern aims to:

- Minimize memory usage by sharing common data among objects.
- Allow clients to work with large numbers of similar objects efficiently.
- Separate intrinsic state (shared) from extrinsic state (unique to each instance).

## Motivation

In software development, managing a large number of similar objects can lead to high memory consumption. For instance, in a graphical application, you might need to render many shapes with the same color. Creating separate instances for each shape would consume a lot of memory. The Flyweight pattern addresses this issue by sharing the common state among objects while keeping the unique state separate.

For example, in a game, you might have many bullets with the same size, color, and shape, but different positions and speeds. The Flyweight pattern allows you to store the shared properties in a single object and only keep the unique properties in each bullet object, thus saving memory.

## Structure

The Flyweight pattern consists of the following components:

- **Flyweight Interface**: Defines the common interface for all flyweight objects, including methods that work with both intrinsic and extrinsic state.
- **Concrete Flyweight**: Implements the Flyweight interface and stores the intrinsic state. It is shared among multiple instances.
- **Flyweight Factory**: Manages the creation and reuse of flyweight objects, ensuring that only one instance of each intrinsic state exists.
- **Context**: Stores the extrinsic state, which varies among flyweight objects, and uses the flyweight objects to perform actions.
- **Client Code**: Uses the Flyweight Factory to obtain flyweight objects and sets their extrinsic state.

The typical flow of the Flyweight pattern involves the following steps:

1. Define the `Flyweight` interface with common operations for all flyweight objects.
2. Create `ConcreteFlyweight` classes that implement the `Flyweight` interface and store the intrinsic state.
3. Implement the `FlyweightFactory` class to manage the creation and sharing of `ConcreteFlyweight` objects.
4. Use the `Context` class to store the extrinsic state and use the flyweight objects.
5. Use the `FlyweightFactory` to get flyweight objects and set their extrinsic state through the context.

## Participants

The main participants in the Flyweight pattern are:

- **Flyweight Interface**: Declares the interface for all flyweight objects, including methods for handling both intrinsic and extrinsic state.
- **ConcreteFlyweight**: Implements the `Flyweight` interface and stores the intrinsic state.
- **FlyweightFactory**: Manages the creation and sharing of `ConcreteFlyweight` objects, ensuring that each intrinsic state is shared among multiple objects.
- **Context**: Stores the extrinsic state and associates it with a flyweight object, allowing the flyweight to be used as needed.
- **Client Code**: Uses the `FlyweightFactory` to obtain flyweight objects and sets their extrinsic state through the context.

## Usage

To implement the Flyweight pattern, follow these steps:

1. **Define the Flyweight Interface**: Create an interface or abstract class that defines the common operations for all flyweight objects.

2. **Implement ConcreteFlyweight Classes**: Create classes that implement the `Flyweight` interface and store the intrinsic state.

3. **Implement FlyweightFactory**: Create a factory class that manages the creation and sharing of `ConcreteFlyweight` objects based on their intrinsic state.

4. **Implement Context Class**: Create a class that stores the extrinsic state and associates it with a flyweight object.

5. **Client Code**: Use the `FlyweightFactory` to obtain flyweight objects, set their extrinsic state through the context, and use them as needed, allowing for efficient memory usage.

By following these steps, you can effectively use the Flyweight pattern to manage large numbers of objects with shared state, significantly reducing memory usage and improving performance.

## Variation

**Intrinsic State Sharing**

- **State Objects**: Intrinsic state is typically stored in the flyweight objects themselves. These objects are immutable or shared among multiple flyweights.
- **State Management**: The Flyweight Factory is responsible for ensuring that only one instance of each intrinsic state exists, managing the mapping between intrinsic state and flyweight objects.

The choice between different approaches to state management depends on the specific requirements and constraints of the application.
