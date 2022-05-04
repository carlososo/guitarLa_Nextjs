import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router'

export const Header = ({guitarra}) => {
  const router = useRouter();
  return (
    <header className={styles.header}>
        <div className="contenedor">
            <div className={styles.barra}>
              <Link passHref href="/">
                <a>
                  <Image 
                    className={styles.logo} 
                    width={400} height={100} 
                    src='/img/logo.svg' 
                    alt='logo'
                  />
                </a>
              </Link>
              <nav className={styles.navegacion}>
                  <Link href="/">Inicio</Link>
                  <Link href="/nosotros">Nosotros</Link>
                  <Link href="/blog">Blog</Link>
                  <Link href="/tienda">Tienda</Link>
                  <Link href="/carrito">
                    <a>
                      <Image
                      layout='fixed'
                      width={38}
                      height={25}
                      src="/img/carrito.png"
                      alt='Imagen carrito'
                      />
                    </a>
                  </Link>
              </nav>
            </div>
            {guitarra && ( <div className={styles.modelo}>
              <h2>Modelo {guitarra.attributes.nombre}</h2> 
              <p>{guitarra.attributes.descripcion}</p>
              <p className={styles.precio}>${guitarra.attributes.precio}</p>
              <Link href={`/guitarras/${guitarra.attributes.url}`}>
              <a className={styles.enlace}>
                Ver Producto
              </a>
              </Link>
            </div>)}
        </div>
        {router.pathname ==='/' &&(
          <div className={styles.guitarra}>
            <Image layout='fixed' width={500} height={1200} src='/img/header_guitarra.png' alt='imagen guitarra header'/>
          </div>
        )}
    </header>
  )
}
