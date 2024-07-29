# Chain of Responsibility Design Pattern

## Introduction

The Chain of Responsibility design pattern is a behavioral pattern that allows an object to pass a request along a chain of potential handlers until the request is handled. This pattern decouples the sender of a request from its receivers, giving more than one object a chance to handle the request. Handlers can process requests, pass them along the chain, or terminate the chain.

## Intent

The Chain of Responsibility pattern aims to:

- Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request.
- Process a request by passing it along a chain of potential handlers until an object handles it.
- Allow the chain to be dynamically assembled at runtime.

## Motivation

In software development, there are scenarios where a request needs to be processed by more than one object. Each object in the chain can either handle the request or pass it to the next object in the chain. For example, in a logging framework, different handlers might process different levels of logging messages (e.g., debug, info, error).

For instance, consider a customer support system where a request might be handled by a frontline support agent, escalated to a technical support specialist, and finally to a manager if needed. The Chain of Responsibility pattern allows each level of support to attempt to handle the request before passing it to the next level.

## Structure

The Chain of Responsibility pattern consists of the following components:

- **Handler**: Defines an interface for handling requests and optionally implements the successor link.
- **ConcreteHandler**: Handles requests it is responsible for and can access its successor. If the ConcreteHandler can handle the request, it does so; otherwise, it passes the request to its successor.
- **Client**: Initiates the request to a handler in the chain.

The typical flow of the Chain of Responsibility pattern involves the following steps:

1. Define the `Handler` interface with a method for handling requests.
2. Create `ConcreteHandler` classes that implement the `Handler` interface and handle specific types of requests or pass them along the chain.
3. Chain the `ConcreteHandler` objects together.
4. Use the `Client` to initiate requests to the first handler in the chain.

## Participants

The main participants in the Chain of Responsibility pattern are:

- **Handler**: Declares the interface for handling requests and optionally maintains a reference to the next handler in the chain.
- **ConcreteHandler**: Implements the `Handler` interface, handles specific requests, and forwards unhandled requests to the next handler.
- **Client**: Creates and configures the chain of handlers and sends requests to the first handler in the chain.

## Usage

To implement the Chain of Responsibility pattern, follow these steps:

1. **Define the Handler Interface**: Create an interface or abstract class that declares the method for handling requests.

2. **Implement ConcreteHandler Classes**: Create classes that implement the Handler interface, handle specific requests, and pass unhandled requests to the next handler in the chain.

3. **Chain the Handlers**: Configure the chain of handlers by setting the successor for each handler.

4. **Client Code**: Send requests to the first handler in the chain.

By following these steps, you can effectively use the Chain of Responsibility pattern to process requests through a chain of handlers, allowing multiple objects a chance to handle the request.

## Variation

**Pure Chain of Responsibility**

- **Unbroken Chain**: In a pure chain of responsibility, the request is always passed to the next handler in the chain, whether it is handled or not. If no handler in the chain handles the request, it reaches the end of the chain unprocessed.
- **Example Use Case**: A help desk support system where a request is escalated through several levels of support staff until it is resolved.

**Impure Chain of Responsibility**

- **Breaking the Chain**: In an impure chain of responsibility, a handler can choose not to pass the request to the next handler, terminating the chain if the request is handled.
- **Example Use Case**: A chain of validation checks where, if any check fails, subsequent checks are not performed.

The choice between pure and impure chains depends on the specific requirements and constraints of the application.
