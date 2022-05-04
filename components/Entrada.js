import Link from "next/link";
import Image from "next/image";
import { formatearFecha } from "../helpers";

import styles from '../styles/Entrada.module.css'

const Entrada = ({entrada}) => {
    const {attributes :{resumen,url, titulo, publishedAt, imagen:{data:{attributes:{url:imagen}}}},id} = entrada
  return (
    <article>
        <Image priority="true" width={800} height={600} layout="responsive" src={imagen} alt={`Imagen Blog ${titulo}`} />
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{resumen}</p>
            <Link href={`/blog/${url}`}>
                <a className={styles.enlace}>
                    Leer Entrada
                </a>
            </Link>
        </div>
    </article>
  )
}

export default Entrada