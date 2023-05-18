import mysql from "mysql2";

export default function initDatabase() {
  const connection = mysql.createConnection({
    host: "server2.bsthun.com",
    port: "6105",
    user: "workshop1",
    password: "csc1056789",
    database: "workshop_spot1",
  });

  connection.connect((err) => {
    if (err == null) {
      console.log("\nDatabase connected!\n");
    } else {
      console.error(err);
    }
  });

  connection.query("SELECT 1", (err, rows) => {
    if (err) throw err;

    console.log(rows);
  });

  return connection;
}
