import React from 'react'
import styles from '../styles/Curso.module.css'

const Curso = ({curso}) => {
    const {attributes:{contenido, titulo, imagen:{data:{attributes:{url:imagen}}}}} = curso
  return (
    <section>
        <div className={`contenedor ${styles.grid}`}>
            <div className={styles.contenido}>
                <h2>{titulo}</h2>
                <p>{contenido}</p>
                <a className={styles.enlace} href="">Más Informacion</a>
            </div>
        </div>
        <style jsx>{`
            section{
                padding: 10rem 0;
                margin-top: 10px;
                background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen})
            }   
        `}</style>
    </section>
  )
}

export default Curso