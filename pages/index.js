import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso';
import ListadoBlog from '../components/ListadoBlog';

const Home=({guitarras, curso, entradas}) => {
  return (
      <Layout
        pagina="Inicio"
        guitarra={guitarras[3]}
      >
        <main className="contenedor">
          <h2 className="heading">Nuestra Colección</h2>
          <Listado guitarras={guitarras} />
        </main>
        <Curso curso={curso}/>
        <section className='contenedor'>
          <ListadoBlog entradasBlog={entradas}/>
        </section>
      </Layout>
  )
}


export async function getServerSideProps(){

  const URLGUITARRAS = `${process.env.API_URL}/guitarras?populate=*`
  const URLCURSO = `${process.env.API_URL}/curso?populate=*`
  const URLBLOGS =`${process.env.API_URL}/blogs?populate=imagen&pagination[limit]=3`

  const [resGuitarras, resCurso, resEntrada] = await Promise.all([
    fetch(URLGUITARRAS),
    fetch(URLCURSO),
    fetch(URLBLOGS)
  ])

  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCurso.json(),
    resEntrada.json()
    ])

  return{
    props:{
      guitarras: guitarras.data,
      curso: curso.data,
      entradas: entradas.data
    }
  }
}

export default Home