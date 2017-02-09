import { select, Select } from "./select";
import { printSelect } from "./printSelect";

export default function<Table, I, F, D, S, B>() {
    return {
        select: (query: Select<Table, I, F, D, S, B>) => select(query),
        printSelect: (query: Select<Table, I, F, D, S, B>) => printSelect(query)
    };
}
