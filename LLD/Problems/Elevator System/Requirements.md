# 🚀 Elevator System Design (Tic Tac Toe Series - System Design Practice)

## 🧩 Problem Understanding

We need to design an **Elevator (Lift) System** for a **Building** that consists of **multiple floors** and **multiple elevator cars**.

The system should handle:
- Requests from users **inside** the elevator (Internal Requests).
- Requests from users **outside** the elevator (External Requests).

It must schedule elevator movements efficiently based on **dispatching algorithms** like *Odd-Even*, *Fixed Floor*, or *LOOK Algorithm (SCAN type)*.

---

## 🎯 Requirements Gathering

### Functional Requirements
1. The building has multiple floors and elevators.
2. Each floor has an **External Button** for calling an elevator (Up/Down).
3. Each elevator has:
   - **Internal Buttons** for selecting destination floors.
   - **Display** showing the current floor and direction.
   - **Doors** that open when the elevator arrives.
4. A **Dispatcher** decides which elevator should serve a request.
5. **Elevator Controller** handles movement and state (IDLE, MOVING, etc.).
6. Supports both **Internal** and **External** button requests.
7. Elevator moves **one floor at a time** (discrete floor movement).

### Non-Functional Requirements
- Low latency during **peak hours** (10–11 AM and 7–8 PM).
- Modular, easily extendable system.
- Thread-safe / concurrent requests (future enhancement).
- No persistence, fault tolerance, or emergency features.

### Constraints & Simplifications
- No express zones or restricted floors.
- Doors open instantly (0.5s delay allowed).
- No acceleration or speed modeling.
- Each elevator can serve all floors.
- Single building, single shaft per elevator.

