import { redirect } from "react-router-dom";

export async function AddUserAction({request}){
   const formData = await request.formData();
   // console.log(formData);
   const newUser={
    name:formData.get("name"),
    email:formData.get("email"),
   
   };
    const response= await fetch ("https://dummyjson.com/users/add",{
    method:"POST",
    headers:{"content-Type":"application/json"},
    body:JSON.stringify(newUser),
   });
   const data = await response.json();
    console.log("Response from API:", data);
   return redirect("/");
}
