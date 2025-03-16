var dbconfig = {
  development: {
    server: "10.21.45.35",
    database: "team5_engse214_db",
    user: "team5",
    password: "P@ssw0rd",
    port: 1433,
    options: {
      encript: true,
      setTimeout: 12000,
      enableArithAbort: true,
      trustServerCertificate: true,
      trustedconnection: true,
      instancename: "10.21.45.35", // SQL Server instance name
    },
  },
  production: {
    server: "10.21.45.35",
    database: "team5_engse214_db",
    user: "team5",
    password: "P@ssw0rd",
    port: 1433,
    options: {
      encript: true,
      setTimeout: 12000,
      enableArithAbort: true,
      trustServerCertificate: true,
      trustedconnection: true,
      instancename: "10.21.45.35", // SQL Server instance name
    },
  },
};
module.exports = dbconfig;
