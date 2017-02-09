import SqlBuilder from "../index";
export const { select, printSelect } =
    SqlBuilder<dbTable, dbInt, dbFloat, dbDateTime, dbString, dbBinary>();
/*

Book
-----
id         | Int
authorId   | Int
price      | Decimal
released   | DateTime
isbn       | String
coverImage | Binary

Author
------
id   | Int
age  | Int
name | String

*/
export type dbTable = "Book" | "Author";
export type dbInt = "Book.id" | "Book.authorId" | "Author.id" | "Author.age";
export type dbFloat = "Book.price";
export type dbDateTime = "Book.released";
export type dbString = "Book.isbn";
export type dbBinary = "Book.coverImage";
