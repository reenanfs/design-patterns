# Command Pattern

## Introduction

The Command pattern is a behavioral design pattern that turns requests or simple operations into objects. This allows you to parameterize clients with queues, requests, and operations. It also provides a way to store the state of requests and support undoable operations.

The Command pattern is useful when you want to decouple the sender and receiver objects, allow for extensible command handling, and support transactional behavior. It promotes flexibility, scalability, and the ability to handle complex sequences of operations.

## Intent

The Command pattern aims to:

- Encapsulate a request as an object, thereby allowing users to parameterize clients with queues, requests, and operations.
- Support undoable operations by storing the state of requests.
- Decouple the sender and receiver objects, promoting flexibility and extensibility.

## Motivation

In many scenarios, you may need to execute operations that can be parameterized, queued, or undone. Directly embedding these operations in the client code can lead to tight coupling, making the code difficult to manage, extend, or maintain.

The Command pattern addresses these issues by encapsulating requests as objects. This allows you to decouple the sender from the receiver, manage operations through a command queue, and implement undoable operations easily. It enhances code organization, maintainability, and scalability.

## Structure

The Command pattern consists of the following components:

- **Command**: Declares the interface for executing a request.
- **ConcreteCommand**: Implements the Command interface and defines the binding between a Receiver object and an action.
- **Client**: Creates a ConcreteCommand object and sets its receiver.
- **Invoker**: Asks the command to execute the request.
- **Receiver**: Knows how to perform the operations associated with carrying out a request.

The typical flow of the Command pattern involves the following steps:

1. The client creates a ConcreteCommand object, sets its receiver, and stores it.
2. The client passes the command to the invoker.
3. The invoker calls the execute method on the command, invoking the action on the receiver.
4. The client can also call the undo method on the command to reverse the action if required.

## Participants

The main participants in the Command pattern are:

- **Command**: Declares the interface for executing a request.
- **ConcreteCommand**: Implements the Command interface and binds the receiver to the action.
- **Client**: Creates a ConcreteCommand object and sets its receiver.
- **Invoker**: Holds a command and at some point asks the command to execute the request.
- **Receiver**: Knows how to perform the operations to carry out a request.

## Usage

To implement the Command pattern, follow these steps:

1. **Define the Command Interface**: Create an interface or abstract class that declares the `execute` and `undo` methods. This interface represents the common contract for all concrete commands.

2. **Implement Concrete Commands**: Create classes that implement the Command interface. Each concrete command should define the specific action to be performed by the receiver.

3. **Create the Receiver**: Define classes that implement the operations to be performed. These classes contain the actual business logic or actions.

4. **Set Up the Invoker**: Create an Invoker class that stores commands and triggers their execution. The invoker calls the `execute` and `undo` methods on the command objects.

5. **Establish the Client Code**: Instantiate the receiver, create concrete commands, and associate them with the receiver. Pass the commands to the invoker and execute them.

By following these steps, you can implement the Command pattern, enabling flexible and scalable handling of requests and operations, with support for undo functionality.
