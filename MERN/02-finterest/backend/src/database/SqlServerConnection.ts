import sql from 'mssql';

const sqlConfig = {
    user: 'sa',
    password: 'admin',
    database: 'FinterestDB',
    server: '127.0.0.1',
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: false, // for azure
      trustServerCertificate: true // change to true for local dev / self-signed certs
    }
  }

export const connection = async () => {
    try {
        //const stmt = await sql.connect("Server=127.0.0.1,1433;Database=FinterestDB;User Id='sa';Password='admin';Encrypt=false;TrustServerCertificate=True;");
        const conn = await sql.connect(sqlConfig);
        return conn;
    } catch ( err ) {
        console.log(err);
        throw new Error( `SqlServer Connection Failed: ${ err }` );
    }
}