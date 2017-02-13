import { Logic } from "./logic";
import { Condition } from "./condition";
import { TABLE, COLUMN } from "./data";

export interface Select {
    columns: COLUMN[],
    from: TABLE,
    where: Logic<Condition>
}

export function select(query: Select) {
    // Run time sanity checks go here
    return query;
}
