import {connect} from "mongoose";

(async () =>{
try{
    const db = await connect("mongodb://localhost/crud-mongo")
    console.log('Db connected to', db.connection.name);
}catch (error){
    console.error(error);
}

})();