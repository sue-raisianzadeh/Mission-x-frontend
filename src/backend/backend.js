// get the client
import { Table } from "@material-ui/core";
import userEvent from "@testing-library/user-event";
const mysql = require ("mysql12");
const connection = mysql.createConnection ({
host:"Localhost 3306",
database:"test",
user: "root",
password:"",
});

// a method to convert the result into proper JSON.
const parseResultToJSON = (resulttoobj)  => JSON.parse(JSON.stringify(resulttoobj));

//simple query
connection.query("SELECT * FROM 'missionx'",  (err, result,fields) => {
        const jsonresults = JSON.parse(JSON.stringify(results));
        console.log(jsonresults); //results contain rows returned by server
        //  //fields contains extra meta data about results,
    }
);
const parseResultToJSON = (result)
app.get('/hello', (req, res) =>{
    const responeData = runDBQuery();
console.log('sending response for GET', reonponseData); 
res.send('responseData');
)};
app.listen(3000, ()=> console.log("server ready at port 3000"));