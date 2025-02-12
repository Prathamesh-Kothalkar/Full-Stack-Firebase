import firebaseApp from "./config";
import {createUserWithEmailAndPassword,getAuth} from "firebase/auth"

const auth =getAuth(firebaseApp);

export default async function  signUp(email,password) {
    let result=null;
    let error=null;
    try{
        result=await createUserWithEmailAndPassword(auth,email,password);
    }
    catch(err){
        error=err;
    }
    return {result,error}
}