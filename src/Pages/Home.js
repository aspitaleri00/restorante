
import React, {Fragment, useState} from 'react';
import Comida from '../Components/Comida';

import Cart from '../Components/Cart';

import Imagenes from '../Components/Imagenes'
import Card from 'react-bootstrap/Card'


function Home(){






  const [comidas,setComidas]=useState([ 
    
    {   id: "1",
        nombre: "Filet de ternera grillada, pure de coliflor, pesto de cavolo, hongos y panceta",
        precio: "2700",
        sku: "I",
        descripcion: "Cocción a tu gusto, a fuego lento tiernizado con especias y salmuera"
        
        
       
    }, { id: "2", nombre: "Bondiola de Cerdo ahumada, ketchup de zanahorias y cebolla colorada dulce",  precio: "2500",sku: "II",  descripcion: "Ahumada y marinada al limón y especias" }, 
    
    
    { id: "3", nombre: "Ñoquis de Camote crocantes, salteados con brócoli arvejas y jamón crudo",
       precio: "980",sku: "III", descripcion: "Bien caseros con frutos de nuestra huerta ",
     
        
    },
    {    id: "4",
        nombre: "Salmon marinado con vegetales, propio de nuestros frutos de río",
        
        precio: "2100",
        sku: "IV",
        descripcion: "Salmon marinado al limón y a la pimienta roja",

    },
    {    id: "5",
        nombre: "Hamburguesa triple con queso azul y papas, extra grande",
       
        precio: "2500",
        sku: "V",
        descripcion: "Super Grande, muy sabrosa estilo italoAmericano",

    },
    {    id: "6",    
        nombre: " Lasagna rellena de carne y mozzarella, bien a nuestro estilo italiano",
        precio: "1200",
        sku: "VI",
        descripcion: "Pastas al buen estilo italiano, con queso de primera ",

     },
     {   id: "7",

      nombre: "Sorrentinos de Salmón con crema de limón",
      
      precio: "1300",
      sku: "VII",
      descripcion: "Pastas como Dios manda, caseras, ideal para paladar exigente ",
  
  },
  
    
    ])
    const styles1= {
      Body :{
      textAlign : "left",
      right:"30vw",
      textTransform: "capitalize",
      fontStyle: "italic",
      fontSize: "21px"

       }
   };
     
    
     
     

     const styles = {

      tamañoTitulo:{
        textShadow: "5px 3px 6px" ,
       color: "White",
       fontSize: "320%",
       fontFamily: "Garamond",
       backgroundColor: "Black",
       textAlign : "center",

     }
     }


     const [cart,setCart] = useState([

      
    ])
    


 return (
 
  
     <Fragment >

<Card className="bg-dark text-white">
  <Card.Img src={Imagenes.img8} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title style ={styles.tamañoTitulo}> Spitaleri al Mondo</Card.Title>
    <Card.Text>
      " Cocina Italiana, desde el viejo continente a las mas nuevas generaciones "
    </Card.Text>
    <Card.Text>Since 1996</Card.Text>
  </Card.ImgOverlay>
</Card>



       <section style={styles1.Body}>
      
       
       


      {comidas.map((comida) => (
        <  Comida key={comida.id} comida={comida} cart={cart} setCart={setCart} comidas={comidas} /> )) }

      
      
    
    

    


    <Cart 
    cart={cart}
    setCart={setCart}
    
    
    />
 </section>
 </Fragment>
 

 );

   }

 
 export default Home;