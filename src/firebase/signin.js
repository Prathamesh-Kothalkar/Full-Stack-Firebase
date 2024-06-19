import firebaseApp from "./config";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";

const auth=getAuth(firebaseApp);

export default async function signIn(email,password){
    let result=null;
    let error=null;
    try{
        result=await signInWithEmailAndPassword(auth,email,password);
    }
    catch(err){
        error=err;
    }
    return {result,error}
}