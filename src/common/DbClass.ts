import { db } from "../firebase";

class DbClass {

    dbFire;

    constructor() {
        this.dbFire = db;
    }
}
// envoie ou enregistrement des messages en base
    sendMessage = async (message : string) => {
        console.log(message);
    }

export default DbClass;