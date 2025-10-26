## Some Sample commands how to use this system ,

cmd> external 4 UP

# Requests elevator from floor 4 in upward direction

cmd> internal 0 7

# Inside elevator 0, request floor 7

cmd> tick 3

# Advances the system 3 simulation steps (moves elevator)

cmd> status

# Prints current elevator status, floors, direction, etc.

cmd> useFixed

# Switches dispatcher to FixedFloorDispatcher (each elevator fixed to some floors)

cmd> useOdd

# Switches dispatcher to OddEvenDispatcher (odd/even floor assignment)

cmd> quit

# Exits simulation
