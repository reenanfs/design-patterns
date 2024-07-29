# Adapter Design Pattern

## Introduction

The Adapter design pattern is a structural pattern that allows objects with incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces by converting one interface into another that the client expects. This pattern is particularly useful when integrating new systems with existing systems that have incompatible interfaces.

The Adapter pattern helps in creating a more flexible system by enabling collaboration between classes that could not normally interact due to interface mismatches. By using an adapter, you can make new code work with legacy code without modifying the existing codebase.

## Intent

The Adapter pattern aims to:

- Enable objects with incompatible interfaces to work together.
- Convert the interface of a class into another interface that the client expects.
- Facilitate communication between systems or components that were not designed to work together.

## Motivation

In software development, it's common to encounter situations where new components need to integrate with legacy systems or third-party libraries. These components often have different interfaces, making direct integration challenging. The Adapter pattern provides a way to solve this problem by introducing an intermediary adapter that translates the interfaces, allowing the components to interact seamlessly.

For example, if you have a legacy payment processing system that uses a different interface than your new e-commerce application, the Adapter pattern can be used to create an adapter that converts the legacy system's interface into one that the new application can work with.

## Structure

The Adapter pattern consists of the following components:

- **Target**: The interface that the client expects and interacts with. It defines the domain-specific interface that the adapter needs to conform to.
- **Adapter**: The class that implements the Target interface and adapts the Adaptee's interface to it. It translates requests from the client to the Adaptee.
- **Adaptee**: The class with an existing interface that needs to be adapted. It contains the functionality that the client needs but uses a different interface.
- **Client**: The code that interacts with the Target interface and uses the Adapter to work with the Adaptee.

The typical flow of the Adapter pattern involves the following steps:

1. The client code interacts with the Target interface.
2. The Adapter translates the client's requests into a format that the Adaptee can understand.
3. The Adaptee performs the actual work and returns the result to the Adapter.
4. The Adapter returns the result to the client in the format expected by the Target interface.

## Participants

The main participants in the Adapter pattern are:

- **Target**: Defines the interface that the client expects.
- **Adapter**: Implements the Target interface and adapts the Adaptee's interface to the Target.
- **Adaptee**: Contains the existing interface that needs to be adapted.
- **Client**: Uses the Target interface to interact with the Adaptee through the Adapter.

## Usage

To implement the Adapter pattern, follow these steps:

1. **Define the Target Interface**: Create an interface that defines the expected methods or operations that the client code will use.

2. **Implement the Adapter**: Create a class that implements the Target interface and includes a reference to the Adaptee. The adapter should translate the method calls from the Target interface to the appropriate methods on the Adaptee.

3. **Adapt the Adaptee**: Ensure that the Adaptee class contains the existing methods or operations that need to be adapted. The Adaptee should be able to perform the required functionality.

4. **Client Code**: Use the Target interface to interact with the Adapter. The client code will work with the Target interface, and the Adapter will handle the interaction with the Adaptee.

By following these steps, you can effectively use the Adapter pattern to bridge incompatible interfaces and facilitate communication between different systems or components.

## Variation

**Object Adapter vs. Class Adapter**

- **Object Adapter**: Uses composition to adapt the Adaptee's interface. The Adapter contains an instance of the Adaptee and delegates calls to it.
- **Class Adapter**: Uses inheritance to adapt the Adaptee's interface. The Adapter inherits from both the Target and Adaptee classes and modifies or extends their behavior.

The choice between object and class adapters depends on the specific requirements and constraints of the application.
