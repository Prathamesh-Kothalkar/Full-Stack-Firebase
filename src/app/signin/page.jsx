'use client'
const { default: signIn } = require("@/firebase/signin");
const { useState } = require("react")
import { useRouter } from 'next/navigation'

function page(){
    
    const [email,setEmail]=useState();
    const [password,setPassword]=useState()
    const router = useRouter();
    const handleForm = async (e)=>{
        e.preventDefault();
        const {result,error}=await signIn(email,password);
        if(error){
            return console.log(error);
        }

        console.log(result);
        return router.push("/admin")
    }

    return <>
         <div className="w-full h-svh top-0 bg-slate-200">
           <div className="p-5">
           <div className="text-4xl p-3 text-center font-bold">
                SIGN-IN
            </div>
            <form onSubmit={handleForm} className="shadow-sm w-auto h-auto rounded-md shadow-black">
            <div className="text-black p-4">
                <input className="m-3 p-2" type="email" placeholder="Enter Email Address" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br />
                <input className="m-3 p-2" type="password" placeholder="Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br />
                <input className="m-3 p-3 cursor-pointer shadow-sm shadow-black" type="submit" value={"Submit"}/>
            </div>
            </form>
           </div>
           
        </div>
    </>
}

export default page;