import Layout from '../../components/Layout'
import Image from 'next/image'
import { formatearFecha } from '../../helpers'
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({entrada}) => {

    const {attributes: 
            {contenido, imagen:
                {data:
                    {attributes:
                        {url:imagen}
                    }
                }, publishedAt, titulo}} = entrada
  return (
      <Layout pagina={titulo}>
        <main className='contenedor'>
            <h2 className='heading'>{titulo}</h2>
            <article className={styles.entrada}>
                <Image 
                    priority='true'
                    layout='responsive' 
                    width={800} 
                    height={600} 
                    src={imagen}
                    alt={`Imagen Entrada ${titulo}`}
                />
                <div className={styles.contenido}>
                    <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                    <p className={styles.texto}>{contenido}</p>
                </div>
            </article>
        </main>
      </Layout>
  )
}

export async function getStaticPaths(){
    const URL =`${process.env.API_URL}/blogs?populate=*`
    const respuesta = await fetch(URL);
    const {data: entradas} = await respuesta.json()
    const paths =entradas.map(entrada =>({
        params:{url:entrada.attributes.url}
    }))
    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps({params:{url}}){

    const URL =`${process.env.API_URL}/blogs?populate=imagen&filters[url][$eq]=${url}`
    const respuesta = await fetch(URL);
    const entrada = await respuesta.json()
    console.log(entrada);
    return{
        props:{
            entrada: entrada.data[0]
        }
    }
}

// export async function getServerSideProps({query:{id}}){

//     const URL =`${process.env.API_URL}/blogs/${id}?populate=*`
//     const respuesta = await fetch(URL);
//     const entrada = await respuesta.json()
//     return{
//         props:{
//             entrada
//         }
//     }
// }

export default EntradaBlog