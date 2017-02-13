import { Book, Author } from "./schema";
import { select, printSelect} from "..";

const query = select({
    columns: [Book.id, Book.authorId, Book.price],
    from: Book,
    where: [
        [Book.authorId, "=", Book.id],
        "AND",
        [Book.price, "<", 5.0]
    ]
});

console.log(printSelect(query));
