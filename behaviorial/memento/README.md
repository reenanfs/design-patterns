# Memento Design Pattern

## Introduction

The Memento design pattern is a behavioral pattern that allows you to capture and restore an object's internal state without exposing its implementation details. This pattern is useful for implementing undo and redo functionality, as well as saving and restoring the state of an object at various points in time.

The Memento pattern provides a way to encapsulate the state of an object and store it externally, enabling you to revert the object to a previous state when needed. By using this pattern, you can manage object state changes effectively while keeping the internal state hidden from external access.

## Intent

The Memento pattern aims to:

- Capture and restore an object's internal state without exposing its implementation details.
- Provide a way to revert an object to a previous state.
- Enable the implementation of undo and redo functionality.

## Motivation

In software development, it is often necessary to manage the state of objects over time, such as when implementing undo and redo features in an application. For example, a text editor may need to store the state of a document at different points so that users can undo or redo changes.

The Memento pattern addresses this issue by providing a way to capture the state of an object and store it externally. This approach allows you to revert the object to a previous state without exposing its internal details, making it easier to manage and restore object states as needed.

For example, in a drawing application, you may want to allow users to undo their last drawing action. The Memento pattern can be used to capture the state of the drawing at different points, enabling you to restore the drawing to a previous state when the user performs an undo action.

## Structure

The Memento pattern consists of the following components:

- **Originator**: The object whose state needs to be saved and restored. It creates and uses the memento to capture and restore its state.
- **Memento**: Stores the state of the Originator. It provides methods to access the saved state but does not allow modification.
- **Caretaker**: Manages the memento objects and provides functionality to save and restore the state of the Originator.

The typical flow of the Memento pattern involves the following steps:

1. Define the `Memento` class to store the state of the `Originator`.
2. Implement the `Originator` class with methods to create and restore a `Memento`.
3. Implement the `Caretaker` class to manage `Memento` objects and handle saving and restoring state.

## Participants

The main participants in the Memento pattern are:

- **Originator**: Creates a memento to capture its current state and can restore its state from a memento.
- **Memento**: Stores the state of the originator and provides access to the stored state without allowing modification.
- **Caretaker**: Manages the memento objects and handles saving and restoring the state of the originator.

## Usage

To implement the Memento pattern, follow these steps:

1. **Define the Memento Class**: Create a class that stores the state of the originator and provides methods to access the state.

2. **Implement the Originator Class**: Create a class that can create and restore mementos, capturing its state and using mementos to revert to previous states.

3. **Implement the Caretaker Class**: Create a class that manages the memento objects, providing functionality to save and restore states.

4. **Client Code**: Use the `Originator` and `Caretaker` classes to capture and restore the state of objects as needed.

By following these steps, you can effectively use the Memento pattern to manage object states and implement features like undo and redo, while keeping the internal state encapsulated and hidden from external access.

## Variation

**Caretaker vs. Originator Responsibility**

- **Caretaker Responsibility**: The caretaker is responsible for managing the mementos but does not modify or access the internal state of the originator.
- **Originator Responsibility**: The originator creates and uses mementos to capture and restore its state, without exposing its internal details.

The choice of responsibilities between the caretaker and the originator depends on the design requirements and constraints of the application.
