import firebaseApp from "../config";
import { doc,getDoc, getFirestore } from "firebase/firestore";

const db = getFirestore(firebaseApp)
export default async function getData(collection,id){
    let result=null,error=null;
    try{
        result= await getDoc(doc(db,collection,id));
    }
    catch(err){
        error=err;
    }
    return {result,error}
}