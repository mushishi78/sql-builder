export interface TABLE { [columnName: string]: COLUMN };
export interface COLUMN { type: string, nullable: boolean };

export interface INT { type: "INT" }
export interface DECIMAL { type: "DECIMAL" }
export interface DATETIME { type: "DATETIME" }
export interface STRING { type: "STRING" }
export interface BINARY { type: "BINARY" }

export interface NOTNULLABLE { nullable: false };
export interface NULLABLE { nullable: true };