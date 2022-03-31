import React from 'react';
import FormGroup from '../Components/FormGroup';
import Firebase from '../Services/Firebase';
import { useForm } from "react-hook-form";




function Registro (){
    const { register, handleSubmit,  formState: { errors } } = useForm();

    const onSubmit = async (data) => {
      try{ console.log("Estos sons los datos",data,data.email,data.password);
       
      const responseUser = await Firebase.auth.createUserWithEmailAndPassword(data.email,data.password)
        console.log(responseUser)


        if(responseUser.user.uid){
          const document = await Firebase.db.collection("users").add({


            name:data.name,

            lastname:data.lastname,

            userId:responseUser.user.uid
          })
          console.log(document)
         
          
        }
        
     
          }catch(e){
            console.log(e.code)
 }
    }



    const styles ={
      h3:{
        color: "black",
        fontSize:"40px",
        top: " 60px",
      } ,
      h4:{
        color: "green",
        fontSize:"40px",

      },

      button: {
        color: "red",
        fontSize:"20px"
      }
    }



    return(

        <div>

          <h3 style={styles.h3}>Registrate y obtené todos nuestros beneficios !</h3><br></br>
          <h4 style={styles.h4}>Miércoles y Jueves 15% Off </h4><br/>
          <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup label="Nombre" register={{...register("name",{required:true})}} />
          {errors.name && <div>Coloca solo tu nombre en este espacio</div>}
          <FormGroup label="Apellido" register={{...register("lastname")}} />
          <FormGroup label="Email" type="email" register={{...register("email")}} />
          {errors.email?.type==="required" &&  <div>El campo Correo Electrónico es Obligatorio</div>}
          <FormGroup label="Contraseña" type="password" register={{...register("password",{required:true,minLength:6})}} />
          {errors.password?.type==="required" &&  <div>El campo Contraseña es Obligatorio</div>}
            {errors.password?.type==="minLength" &&  <div>Completa la Contraseña con al menos 5 caracteres</div>}
          <br/>
          <button style={styles.button}type="submit"  >Registrate  </button>
        </form>
  
      </div>
    
        


    )







}
export default Registro;