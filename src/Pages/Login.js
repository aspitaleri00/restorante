import React from "react";
import { useForm } from "react-hook-form";
import Firebase from '../Services/Firebase';
import FormGroup from '../Components/FormGroup';
import Button from 'react-bootstrap/Button';





function Login(){

  const onSubmit = async (data) => {
    try{
      
      const responseUser = await Firebase.auth.signInWithEmailAndPassword(data.email,data.password)
     
      console.log(responseUser.user.uid)
    }catch(e){
      console.log(e.code)
    }
      
    }


  const { register, handleSubmit, formState: { errors } } = useForm();
  
  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup label="Email" type="email" register={{...register("email")}} />
      <FormGroup label="Contraseña" type="password" register={{...register("password",{required:true,minLength:6})}} />
      {errors.password?.type==="required" &&  <div>El campo Contraseña es obligatorio</div>}
        {errors.password?.type==="minLength" &&  <div>Debe completar al menos 6 caracteres</div>}
       
        <Button  type="submit" variant="success">Acceder</Button>
       
    </form>

  </div>
    
      
      
    
  );


}



export default Login;