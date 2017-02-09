import { Logic } from "./logic";
import { Condition } from "./condition";

export interface Select<Table, I, F, D, S, B> {
    columns: (I | F | D | S | B)[],
    from: Table,
    where: Logic<Condition<I, F, D, S, B>>
}

export function select<Table, I, F, D, S, B>(
    query: Select<Table, I, F, D, S, B>) {

    // Run time sanity checks go here

    return query;
}
