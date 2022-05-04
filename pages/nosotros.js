import Image  from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
        pagina="Nosotros"
      >
        <main className='contenedor'>
          <h2 className='heading'>Nosotros</h2>
          <div className={styles.contenido}>
            <Image 
              layout='responsive' 
              width={600} 
              height={450} 
              src="/img/nosotros.jpg" 
              alt='nosotros'
            />
             
            <div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi architecto iste et nemo quos totam nesciunt velit. Sit, itaque nostrum nihil, temporibus perspiciatis iusto illum, voluptatum beatae voluptatibus numquam odio.</p><p>
                Quae, deserunt saepe! Qui, nisi. Aspernatur error veniam totam? Distinctio, amet illum atque deleniti quibusdam officiis eveniet, quia facere quasi dolorem dolorum perferendis assumenda officia quis, veritatis voluptate consectetur. Repellendus?</p>
            </div>
          </div>
        </main>

      </Layout>
  )
}

export default Nosotros
