'use client'
import React, { useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import addData from "@/firebase/firestore/addData";
import getData from "@/firebase/firestore/getData";
import firebaseApp from "@/firebase/config";
import { getAuth, signOut } from "firebase/auth";
function Page() {
    const { user } = useAuthContext()
    const router = useRouter()
    const [fecthData,setFetchData]=useState();
    const [name,setName]=useState();
    const [age,setAge]=useState();
    const [loader,setLoader]=useState(false);

    const handleAddData = async()=>{
        const data = {
            name:name,
            age:age
        }
        const {result,error}=await addData("user","id12",data);

        if(error){
            return console.log(error)
        }
        console.log(result);
        alert("Data added sucessfully");
    }

    const handleGetData = async () =>{
        setLoader(true)
        const {result,error}=await getData("user","id12");
        if(error){
            return console.log(error);
        }
        setFetchData(result.data())
        console.log(fecthData);
        console.log(result);
        setLoader(false)
    }

    const handleLogOut = async () =>{
        const auth = getAuth(firebaseApp);
        try{
            await signOut(auth);
            console.log("User Signed Out");
            router.push("/")
        }
        catch(err){
            console.log(err);
        }
    }

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    return (
        <div className="w-full h-svh bg-slate-400" >
            <h1 className="text-3xl font-semibold uppercase">Only logged in users can view this page</h1>
            <button onClick={handleLogOut}
             className="m-3 p-2 cursor-pointer rounded-sm shadow-sm shadow-black">Log Out</button><br />
            <div className="shadow-sm shadow-black rounded m-2 p-2">
                <form>
                 <input type="text" placeholder="Enter Your Name" 
                 onChange={(e)=>{setName(e.target.value)}} 
                 value={name}
                 className="m-3 p-2" /><br />
                 <input type="number" placeholder="Enter Age"
                  onChange={(e)=>{setAge(e.target.value)}} 
                  value={age}
                  className="m-3 p-2"/> <br/>
                <input type="button" 
                onClick={handleAddData} 
                value={"Submit Data"}
                className="m-3 p-2 cursor-pointer rounded-sm shadow-sm shadow-black" /><br />
                </form>
            </div>
            <hr />
            <button onClick={handleGetData}
             className="m-3 p-2 cursor-pointer rounded-sm shadow-sm shadow-black">Get Data</button><br />
            {fecthData ? (
                <div className="m-3 p-2">
                    <h2 className="text-xl font-semibold">Fetched Data </h2>
                    <p><span className="text-xl font-semibold">Name:</span> {fecthData.name}</p>
                    <p><span className="text-xl font-semibold">Age:</span> {fecthData.age}</p>
                </div>
            ) : (
              loader?<>Loading...!</>:<></>
            )}
        </div>
    
    );
}

export default Page;