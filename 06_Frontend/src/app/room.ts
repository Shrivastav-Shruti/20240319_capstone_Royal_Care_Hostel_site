export interface Room {
    [x: string]: any; // This line allows flexibility in the keys of the interface.
    roomNo: number; // Unique identifier for the room
    roomType: number; // Type of the room (e.g., standard, deluxe, super deluxe)
    person1: boolean; // Indicates whether the room accommodates the first person
    person2: boolean; // Indicates whether the room accommodates the second person
    person3: boolean; // Indicates whether the room accommodates the third person
}
