
import Link from "next/link"
import styles from '../styles/NoEncontrado.module.css'

const noEncontrado = () => {
  return (
        <div className={styles.no_encontrado}>
            <h2 className="heading" >Pagina No Encontrada</h2>
            <Link href='/'>Volver al inicio</Link>
        </div>
  )
}

export default noEncontrado