import { TABLE, COLUMN, INT, DECIMAL, DATETIME, STRING, BINARY, NOTNULLABLE, NULLABLE } from "..";

interface Book_id extends INT, NOTNULLABLE {};
interface Book_authorId extends INT, NOTNULLABLE {};
interface Book_price extends DECIMAL, NOTNULLABLE {};
interface Book_released extends DATETIME, NULLABLE {};
interface Book_isbn extends STRING, NULLABLE {};
interface Book_coverImage extends BINARY, NULLABLE {};

interface Author_id extends INT, NOTNULLABLE {};
interface Author_age extends INT, NULLABLE {};
interface Author_name extends STRING, NULLABLE {};

export const Book = {
    id: { type: "INT", nullable: false } as Book_id,
    authorId: { type: "INT", nullable: false } as Book_authorId,
    price: { type: "DECIMAL", nullable: false } as Book_price,
    released: { type: "DATETIME", nullable: true  } as Book_released,
    isbn: { type: "STRING", nullable: true } as Book_isbn,
    coverImage: { type: "BINARY", nullable: true  } as Book_coverImage
}
export const Author = {
    id: { type: "INT", nullable: false } as Author_id,
    age: { type: "INT", nullable: true } as Author_age,
    name: { type: "STRING", nullable: true } as Author_name
}