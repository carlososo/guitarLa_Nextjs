import React from 'react'
import { Guitarra } from './Guitarra'
import styles from '../styles/Tienda.module.css'

const Listado = ({guitarras}) => {
    
  return (
    <section className={styles.tienda}>
      {guitarras.map(guitarra => (<Guitarra guitarra={guitarra} key={guitarra.id} />))}
    </section>
    
  )
}

export default Listado