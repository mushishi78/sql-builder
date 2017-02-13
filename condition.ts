import { INT, DECIMAL, DATETIME, STRING, BINARY, NULLABLE } from "./data";

export type Condition =
    [INT, "=" | "<>" | "!=" | ">" | ">=" | "<" | "<=", number | INT] |
    [DECIMAL, "=" | "<>" | "!=" | ">" | ">=" | "<" | "<=", number | DECIMAL] |
    [DATETIME, "=" | "<>" | "!=" | ">" | ">=" | "<" | "<=", Date | DATETIME] |
    [STRING, "=" | "<>" | "!=" , string | STRING];
