var database = require('mysql');
var con = database.createConnection({
  host: "localhost",
  user: "root",
  password: "cdp17s1850913^_^",
  database: "db_mahasiswa"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("koneksi Berhasil");
})
module.exports = con;