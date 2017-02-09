import { select, printSelect } from "./schema";

const query = select({
    columns: ["Book.id", "Book.authorId", "Book.price"],
    from: "Book",
    where: [
        ["Book.authorId", "=", 60],
        "AND",
        ["Book.price", "<", 5.0]
    ]
});

console.log(printSelect(query));
