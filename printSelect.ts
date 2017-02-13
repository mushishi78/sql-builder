import { Select } from "./select";

export function printSelect(query: Select) {
    let str = `SELECT ${query.columns.join(", ")}\nFROM ${query.from}\n`;

    if (query.where) {
        str += "WHERE ";

        for (var e of query.where) {
            // If element is an array it will be an expression
            // like ["id", "<", 5] so join with a space.
            // Otherwise it'll be an operator like "AND" or "OR"
            // so create a newline with an indent afterwards
            str += e instanceof Array ? e.join(" ") : e + "\n     ";
        }
        
        str += "\n";
    }

    return str;
}
