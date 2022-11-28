import sql from 'mssql';


export const connection = async () => {
    try {
        await sql.connect("Server=127.0.0.1,1433;Database=FinterestDB;User Id='sa';Password='admin';Encrypt=false;TrustServerCertificate=True;")
        const result = await sql.query("SELECT * FROM Person");
        console.log(result);
    } catch ( err ) {
        console.log(err);
        throw new Error( `SqlServer Connection Failed: ${ err }` );
    }
}