
import Image from 'next/image'
import { useState,useEffect } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Carrito.module.css'

const Carrito = ({carrito, modificarCantidad, eliminarProduco}) => {

  const [total, setTotal] = useState(0)

  useEffect(() => {
    const calculoTotal = carrito.reduce (( total, producto ) => total + 
    (producto.cantidad * producto.precio), 0)
    setTotal(calculoTotal)
  }, [carrito])
  

return (
  <Layout pagina={"Carrito de Compras"}>
    <h2 className="heading"> Carrito </h2>
    <main className={`contenedor ${styles.contenido}`}>
      <div className={styles.carrito}>
        <h2>Articulos</h2>
        {carrito.length === 0
          ? "Carrito Vacio"
          : carrito.map((producto) => (
              <div key={producto.id} className={styles.producto}>
                <div>
                  <Image
                    layout="responsive"
                    width={250}
                    height={480}
                    src={producto.imagen}
                    alt={producto.nombre}
                  />
                </div>
                <div>
                  <p className={styles.nombre}> {producto.nombre} </p>
                  <div className={styles.cantidad}>
                    <p>Cantidad:</p>
                    <select 
                      className={styles.select}
                      value={producto.cantidad}
                      onChange={ e =>modificarCantidad({
                        cantidad: e.target.value,
                        id: producto.id
                      })} 
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                  </div>  
                  <p className={styles.precio}>
                    $ <span> {producto.precio} </span>
                  </p>
                  <p className={styles.subtotal}>
                    Subtotal: $
                    <span> {producto.precio * producto.cantidad} </span>
                  </p>
                </div>
                <button className={styles.eliminar} onClick={()=>eliminarProduco(producto.id)}>
                  X
                </button>
              </div>
            ))}
      </div>
      <div className={styles.resumen}> 
        {
          total >0 ?(
            <>
              <h3>Resumen del Pedido</h3>
              <p>Total a Pagar: {total}</p>
            </>
          ):<p>No Hay Productos en el carrito</p>
        }
      </div>
    </main>
  </Layout>
);
}

export default Carrito