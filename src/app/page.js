import Image from "next/image";

export default function Home() {
  return (
   <> 
    <h1 className="text-3xl text-center font-bold">Home Page</h1>
    <div className="p-3">
       Welcome to Firebase - Web - App <br/>
       Benefits: <br></br>
      Enhanced Security: Firebase provides robust authentication features to protect your user data.
      Seamless User Experience: Sign up and log in with ease using email/password or social login options.
      Flexibility: Integrate with various Firebase services for a comprehensive solution.
    </div>
   </>
  );
}
