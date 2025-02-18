import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, doc, getDoc, setDoc, Timestamp } from "firebase/firestore";

const googleProvider : GoogleAuthProvider = new GoogleAuthProvider();
// creation de la classe qui vas gerer les connexions
class AuthClass{

    authFire;
    dbFire;

    constructor(){

        this.authFire =  auth;
        this.dbFire = db;
    
    }
    // création d'une fonction asynchrone pour gerer la connexion google 
    connexionGoogle = async () => {
        const result = await signInWithPopup (this.authFire,googleProvider);
        console.log("user" , result);

        if (result != null){ // si utilisateur est connecter 
            // péparation de la requete ou de la query avec la lecture du document lier a la table user et ses references uid
            const docRefUser = doc(this.dbFire, "users", result.user.uid)
            //capture du dossier avec les reference de l'utilisateur et lancement de la requete ou de la query 
            const snapUser = await getDoc (docRefUser);
            // si il n'existe pas 
            if (!snapUser.exists()){
                await setDoc(docRefUser, {
                    name : result.user.displayName,
                })
            }

        }
    }

}
export default AuthClass;