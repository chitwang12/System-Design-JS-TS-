
## 🏢 System Overview

**Key Objects:**
1. Building
2. Floor
3. ElevatorCar
4. Display
5. Door
6. InternalButton
7. ExternalButton
8. ElevatorController
9. InternalButtonDispatcher
10. ExternalButtonDispatcher
11. Dispatch Algorithms (OddEvenDispatcher, FixedFloorDispatcher)

---

## 🧱 Object Details & Relationships

### 1. Building
- **Has:** List of Floors
- **Description:** Represents the building that contains all floors and elevators.

## classDiagram
 ## 1. Building   
    class Building {
    - List<Floor> floors
    }
    Building --> Floor
 ## 2. Floor
    Has: ExternalButton

    Attributes:

    floorId: number

    Methods:

    Request elevator via external button.

    classDiagram
        class Floor {
        +int floorId
        +ExternalButton button
        }
        Floor --> ExternalButton
## 3. ExternalButton
Has: ExternalButtonDispatcher

Method:

pressButton(int floor, Direction dir)

Description: Represents Up/Down button outside elevator.

Copy code
classDiagram
class ExternalButton {
  +pressButton(int floor, Direction dir)
}
ExternalButton --> ExternalButtonDispatcher


## 4. ExternalButtonDispatcher
Has: List<ElevatorController>

Method:

submitRequest(int floor, Direction dir, int elevatorId)

Description: Chooses elevator based on algorithm and dispatches the request.



## 5. ElevatorCar
Has: Display, Door, InternalButton

Attributes:

id: number

currentFloor: number

direction: Direction

status: Status

Methods:

move(int destinationFloor, Direction dir)

Copy code
classDiagram
class ElevatorCar {
  +int id
  +int currentFloor
  +Direction direction
  +Status status
  +move(int destinationFloor, Direction dir)
}
ElevatorCar --> Display
ElevatorCar --> Door
ElevatorCar --> InternalButton
## 6. Display
Attributes:

floor: number

direction: Direction

Description: Shown both inside and outside the elevator to indicate state.

## 7. Door
Methods:

openDoor()

closeDoor()

Description: Represents the physical door of the elevator.

## 8. InternalButton
Has: InternalButtonDispatcher

Methods:

pressButton(int floor)

Description: Allows users to select destination floor inside elevator.

## 9. InternalButtonDispatcher
Has: List<ElevatorController>

Methods:

submitRequest(int destinationFloor, Direction dir, int elevatorId)

Description: Routes internal requests to the correct elevator controller.

## 10. ElevatorController
Has: ElevatorCar

Methods:

submitNewRequest(int destinationFloor, Direction dir)

controlElevatorCar()

Description: Manages a single elevator car’s operations.

## 11. Dispatch Algorithms
OddEvenDispatcher: Assigns elevators to odd/even floors.

FixedFloorDispatcher: Assigns elevators to fixed range of floors.

classDiagram
class Dispatcher {
  <<interface>>
  +selectElevator(int floor, Direction dir): int
}
Dispatcher <|-- OddEvenDispatcher
Dispatcher <|-- FixedFloorDispatcher
⚙️ Enums
## Direction.ts
enum Direction {
  UP,
  DOWN
}
## Status.ts 
enum Status {
  IDLE,
  MOVING
}
## 🔗 Relationships Summary

    Object	Relationship	Type
    Building → Floor	Composition	Has many
    Floor → ExternalButton	Composition	Has one
    ExternalButton → ExternalButtonDispatcher	Association	Has one
    ElevatorCar → Display	Composition	Has one
    ElevatorCar → Door	Composition	Has one
    ElevatorCar → InternalButton	Composition	Has one
    ElevatorController → ElevatorCar	Aggregation	Has one
    InternalButton → InternalButtonDispatcher	Association	Has one
    Dispatcher → ElevatorController	Association	Has many
    OddEvenDispatcher, FixedFloorDispatcher	Inherit from Dispatcher	Inheritance


## Design Patterns Used

## 1.Strategy Pattern

    For dispatching algorithms (OddEven, FixedFloor, Look, etc.)

## 2. Observer Pattern

    For notifying displays when elevator moves.

## 3.Singleton (optional)

    For central dispatcher management.

## 4. Command Pattern

    Pressing buttons triggers commands handled by controllers.

## Flow Summary

## 1.User presses an external button on a floor.

  * ExternalButton → ExternalButtonDispatcher → decides elevator → ElevatorController.

## 2. ElevatorController sends command to ElevatorCar.

  * ElevatorCar starts moving toward the floor.

## 3. When inside, user presses internal button.

  * InternalButton → InternalButtonDispatcher → ElevatorController → ElevatorCar moves.

## 4. Display and Door update based on car status.


## ⚙️ 6. Flow Example (Scenario)

  1. User on floor 3 presses UP on the external button.

  2. ExternalButton → sends request to ExternalButtonDispatcher.

  3. DispatcherAlgorithm (say OddEven) chooses Elevator #2.

  4. ElevatorController(2) receives the request → instructs ElevatorCar to move to floor 3.

  5. On arrival, Door.open() and Display shows “3 ↑”.

  6. Passenger enters, presses 7 inside → InternalButton → InternalButtonDispatcher.

  7. Dispatcher calls ElevatorController(2) → elevator moves to floor 7.

  8. Door.open() again, trip completed ✅

