import { useState } from 'react'
import Image from 'next/image';
import Layout from '../../components/Layout';

import styles from '../../styles/Guitarra.module.css'

const Producto = ({guitarra, agregarCarrito}) => {
    const [cantidad, setCantidad] = useState(1)
    const {attributes:{imagen:{data:{attributes:imagen}}, nombre, precio, descripcion}, id} = guitarra
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(cantidad<1){
            alert("Cantidad No Valida");
            return
        }
        const guitarraSeleccionada ={
            nombre,
            precio,
            cantidad,
            imagen: imagen.url,
            id
        }
        agregarCarrito(guitarraSeleccionada)

    }   

  return (
      <Layout pagina={`Guitarra ${nombre}`}>
        <div className={styles.guitarra}>
            <Image 
                layout='responsive' 
                width={180} height={350} 
                src={imagen.url} 
                alt={`Imagen Guitarra${nombre}`}
                priority='true'
                />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>{precio}</p>
            
                <form className={styles.formulario} onSubmit={handleSubmit}>
                    <label htmlFor="">Cantidad:</label>
                    <select value={cantidad} onChange={(e)=>{setCantidad(parseInt(e.target.value))}}>
                        <option value="">--Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <input type="submit" value="Agregar al Carrito"  />
                </form>
            </div>
        </div>

      </Layout>
  )
}

export default Producto

export async function getServerSideProps({query:{url}}){

    const URL = `${process.env.API_URL}/guitarras?populate=imagen&filters[url][$eq]=${url}`
    const response = await fetch(URL);
    const {data} = await response.json()

    return{
        props:{
            guitarra: data[0]
        }
    }
}