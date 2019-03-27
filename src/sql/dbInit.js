//this file is to inport the configuration database item in to the app
//it shoyuld only run on thee initial load of the game
// this is only neccicary because the db plug in currently has a issue with connecting with a prebuilt db file. iam tracking this issue for a resolution and will update then.
import SQLite from 'react-native-sqlite-storage';
var db = SQLite.openDatabase({ name: 'testdb', createFromLocation: '~testdb.sqlite', androidLockWorkaround: true }, successcb, errorcb);
// var db = SQLite.openDatabase({ name: 'testDb.db', location: 'default' });
function successcb(event) {//sucsessfull connnection//not required
    // console.dir(event);
    console.log('sucsess:', event);
}
function errorcb(event) {//failed to conect
    console.log('else', event);
}
//end of database init stuff 
export class dbInit {
    constructor() {

    }
    startDb = () => {//check for database, if not available create//problably the only forward facing function needed 
        
    }
    initAll = () => {//will init all of the current tables then return a responce code and msg
        let promises = [];
        let msg = 'Not ran.';
        let code = -1;
        promises.push(this.createDrywallSizes());
        promises.push(this.createDrywallTypes());
        promises.push(this.initDrywallSizes());
        promises.push(this.initDrywallTypes());

        promises.map((promise, inx) => {
            if (promise.code > 0 && code === -1) {
                code = promise.code;
                msg = promise.msg;
                break;
            }
            if (inx === promises.length - 1 && code === -1) {
                code = 0;
                msg = 'initialized database sucsessfully';
            }
        })
        return { code: code, msg: msg };
    }
    /*
    @params:
    table: string ${tableName + (fields)}// i think id will auto ioncrement 
    data: string (Data, in, the), (same order as fields)
    */
    massInsert = (table, data) => { //pass in table and data as string and array will return code and msg
        db.transaction(tx => {
            tx.executeSql(
                `INSET IN TO ${table} VALUES (${data})`,
                (tx, responce) => {
                    console.log('responce', responce);
                    return (reponce);
                }
            );
        })
    }
    createDrywallSizes = () => {
        db.transaction(tx => {
            tx.executeSql(
                `CREATE TABLE drywall_sizes (id Int, name Varchar, value Int)`,
                (tx, responce) => {
                    console.log(responce);
                }
            )
        })
    }
    createDrywallTypes = () => {
        db.transaction(tx => {
            tx.executeSql(
                `CREATE TABLE drywall_types (id Int, name Varchar)`,
                (tx, responce) => {
                    console.log(responce);
                }
            )
        })
    }
    initDrywallSizes = () => {//will init drywall sizes then return a code and a msg
        var table = 'drywall_sizes (name, value)';
        var data = '(),(),()';
    }
    initDrywallTypes = () => {
        var table = 'drywall_types (name)';
        var data = '';
    }
}