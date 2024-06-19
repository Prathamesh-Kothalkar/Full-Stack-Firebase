import firebaseApp from "../config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db =getFirestore(firebaseApp);

export default async function addData(collection,id,data){
    let result = null, error=null;

    try{
        const result = await setDoc(doc(db,collection,id),data,{
            merge:true
        });
    }
    catch(err){
        error =err;
    }   

    return {result,error}
}