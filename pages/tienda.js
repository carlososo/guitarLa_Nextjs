import Layout from '../components/Layout'
import Listado from '../components/Listado'

const Tienda = ({guitarras}) => {
  return (
    <Layout
        pagina="Tienda"
      >
        <main className='contenedor'>
          <h1 className='heading'>Nuestra Colección</h1>
          <Listado guitarras={guitarras}/>
        </main>
      </Layout>
  )
}

export async function getServerSideProps(){
  const URL = `${process.env.API_URL}/guitarras?populate=*`
  const respuesta = await fetch(URL)
  const {data: guitarras} = await respuesta.json()

  return{
    props:{
      guitarras
    }
  }
}

export default Tienda
