# SqlBuilder

This is a spike repository demonstrating a possible means of building
sql queries with static type checking with typescript. However this
approach is seriously limited and isn't really something I'd advise.

Also, to be noted that I haven't compiled or run this code, so sorry
if I've made some basic stupid mistake.

## Naming

For the purposes of screen width sanity, the following initials
are used in the code for representing columns with primitive type:

I - Integer
F - Float
D - DateTime
S - String
B - Binary

## Usage

An example can be found in the "example" folder. `schema.ts` is
intended to be a generated file that maps column names to data
type and `example.ts` makes a simple select query and prints it
to the console.

## Known issues

The following query should totally be allowed, but I think there's
a typescript bug.

```
const query = select({
    columns: ["Book.id", "Book.authorId", "Book.price"],
    from: "Book",
    where: [
        ["Book.authorId", "=", "Book.id"]
    ]
});
```

The problem is that typescript thinks that the second `"Book.id"` is
of type `string`, rather than an `I` (integer) so doesn't treat it as
a `Condition`.
