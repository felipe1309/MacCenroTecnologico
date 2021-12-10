import { connect,connection } from "mongoose";
const conn = {
    isConected: false,
}
export async function dbconnetion(){
    if (conn.isConected) return;
    const db = await connect('mongodb://127.0.0.1:27017/macdatabace',{ useNewUrlParser: true,
    useUnifiedTopology: true, });
    conn.isConected =  db.connections[0].readyState;
}
connection.on('error', console.error.bind(console, 'connection error:'));
connection.on('open', function() {
    console.log("db connected");
});