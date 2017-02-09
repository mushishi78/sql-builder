export type Logic<T> =
    [T] |
    [T, "AND" | "OR", T] |
    [T, "AND" | "OR", T, "AND" | "OR", T] |
    [T, "AND" | "OR", T, "AND" | "OR", T, "AND" | "OR", T] |
    [T, "AND" | "OR", T, "AND" | "OR", T, "AND" | "OR", T, "AND" | "OR", T] |
    [T, "AND" | "OR", T, "AND" | "OR", T, "AND" | "OR", T, "AND" | "OR", T, "AND" | "OR", T] |
    [T, "AND" | "OR", T, "AND" | "OR", T, "AND" | "OR", T, "AND" | "OR", T, "AND" | "OR", T, "AND" | "OR", T];
