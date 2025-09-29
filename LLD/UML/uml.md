# UML (Unified Modeling Language)

UML (Unified Modeling Language) is a **visual modeling language** used to design and document software systems.  
It helps developers, architects, and stakeholders **understand structure, behavior, and interactions** of a system.

In interviews, you are usually asked about **core UML diagrams** and how to use them for system design.

---

## ✅ Commonly Asked UML Diagrams in Interviews

### 1. Class Diagram (Structure)

- \*\* **Definition\*\***: Represents the **static structure** of a system (classes, attributes, methods, and relationships).
- \*\* **Usage**:\*\*: Shows how different classes interact in OOP design.

**Example**: E-commerce Order System

```plaintext
+-----------------+         +-----------------+
|   Customer      |         |    Order        |
+-----------------+         +-----------------+
| - name          |1     * | - orderId       |
| - email         |---------| - totalAmount  |
+-----------------+         +-----------------+
          |                          |
          |                          |
          |                          |
          |                +-----------------+
          |                |   Product       |
          |                +-----------------+
          |                | - productId     |
          |                | - price         |
          |                +-----------------+


### 2.  Use Case Diagram (Requirements / Users)

 **Definition**: Represents how users (actors) interact with the system.

 **Usage**:: Used during requirements gathering to clarify system functionality.

Example: Online Food Ordering System

     +-----------------+
     |   Customer      |
     +-----------------+
            |
            | (1) Place Order
            |
         -------------
         |   System   |
         -------------
        /       |       \
 (2) Track  (3) Make  (4) Cancel
    Order       Payment   Order
Actors:

Customer interacts with the system.

System provides functionalities: Place Order, Track Order, Make Payment, Cancel Order.



3. Sequence Diagram (Flow of Calls)

 **Definition**: Represents the flow of messages between objects over time.

 **Usage**:: Used to explain how operations are carried out step by step.

Example: User Login Flow

User       UI Layer       Auth Service      DB
 |             |                |           |
 |--Enter Id-->|                |           |
 |             |--Validate----->|           |
 |             |                |--Query--> |
 |             |                |<-Result-- |
 |             |<---Success-----|           |
 |<-Login OK---|                |           |
Flow:

User enters login details.

UI sends to Auth Service.

Auth Service queries DB.

DB returns result.

Auth Service validates and sends success back to UI.







4. Activity Diagram (Workflow / Logic)

 **Definition**: Represents workflow or business logic in the system.

 **Usage**:: Helps visualize process flows like decision making and parallel tasks.

Example: ATM Withdrawal Flow

    flowchart TD
    A[Start] --> B[Insert Card]
    B --> C[Enter PIN]
    C --> D{PIN Valid?}
    D -- No --> E[End]
    D -- Yes --> F[Choose Transaction]
    F --> G[Enter Amount]
    G --> H{Sufficient Balance?}
    H -- Yes --> I[Dispense Cash]
    H -- No --> J[Show Error]
    I --> K[End]
    J --> K[End]
```
