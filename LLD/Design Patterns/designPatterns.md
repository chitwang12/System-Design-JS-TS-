# 🏗️ Design Patterns – Introduction Notes

## 📌 Introduction

Design patterns are a foundational concept in **software engineering**, especially when building **scalable and maintainable systems**.  
They provide **reusable solutions** to common software design problems and help developers build consistent and reliable architectures.

---

## 🤔 What Are Design Patterns?

- **Definition**: Design patterns are **standard, time-tested solutions** to recurring software design problems.
- They are **not code templates** but **abstract blueprints** or **recipes** that guide developers in structuring their code.

👉 In short: _Design patterns help you avoid reinventing the wheel._

### 🔖 Real-World Analogy

Think of design patterns like **recipes in cooking**:  
If you want to bake a cake, you don’t invent a new method each time — you follow a proven recipe.  
Similarly, design patterns are **tried-and-tested "recipes"** for solving common coding challenges.

---

## 📜 The Origin of Design Patterns

- Popularized by the **Gang of Four (GoF)**: _Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides_.
- Introduced in the **1994 book**: _“Design Patterns: Elements of Reusable Object-Oriented Software”_.
- The GoF cataloged **23 design patterns**, classified into **3 main categories**:
  - Creational
  - Structural
  - Behavioral

---

## 🏷️ The Three Categories of Design Patterns

### 1. Creational Patterns

- **Focus**: Object **creation mechanisms**, making the system independent of how objects are created.
- **Goal**: Abstract the instantiation process for flexibility.

#### 🔖 Real-World Analogy

Imagine a **vending machine**.  
You press the “Orange Juice” button, and the machine figures out whether to pour from a bottle, mix a concentrate, or dispense fresh juice.  
👉 You don’t care how it’s made — you just get your drink.

This is similar to the **Factory Method Pattern**, where creation logic is hidden from the user.

#### 📌 Examples

- Singleton
- Factory Method
- Abstract Factory
- Builder
- Prototype

---

### 2. Structural Patterns

- **Focus**: Object **composition** — combining classes and objects into larger structures.
- **Goal**: Ensure flexibility and efficiency in how objects interact, even if they were initially incompatible.

#### 🔖 Real-World Analogy

You have a **modern smartphone** that charges via USB-C, but your old power adapter only supports micro-USB.  
Instead of replacing either device, you use an **adapter**.  
👉 This is like the **Adapter Pattern** — making incompatible components work together.

#### 📌 Examples

- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy

---

### 3. Behavioral Patterns

- **Focus**: Object **interaction and responsibility** — how objects communicate and assign responsibilities.
- **Goal**: Promote **loose coupling** while enabling collaboration between components.

#### 🔖 Real-World Analogy

In a **restaurant**, the **waiter** takes your order and delivers it to the kitchen.  
You don’t talk to the chef directly — the waiter acts as a **mediator**.  
👉 This reflects the **Mediator Pattern**, which prevents tight interdependencies.

#### 📌 Examples

- Observer
- Strategy
- Command
- Chain of Responsibility
- Mediator
- State
- Template Method
- Visitor
- Iterator
- Memento
- Interpreter

---

## ✅ Summary

- **Design Patterns = Proven solutions** to recurring design problems.
- Introduced by **Gang of Four (GoF)** in 1994.
- **3 Categories**:
  1. **Creational** → Object creation (e.g., Factory, Singleton).
  2. **Structural** → Object composition (e.g., Adapter, Proxy).
  3. **Behavioral** → Object interactions (e.g., Observer, Strategy).
