import { connection } from "./connection";

connection.raw(`
   CREATE TABLE cookenu_users(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM("ADMIN","NORMAL")
    ) ;

    CREATE TABLE cookenu_recipes(
        title VARCHAR(255) not null,
        description text ,
        image VARCHAR(255),
        creation_date DATE NOT NULL,
         creator_id VARCHAR(255),
        FOREIGN KEY ( creator_id) REFERENCES cookenu_users(id)
`).then(() => {
   console.log("Tabelas criadas!");
}).catch(error => {
   console.log(error.sqlMessage || error.message);
}).finally(()=>{
   connection.destroy()
})