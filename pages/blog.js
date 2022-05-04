import Layout from '../components/Layout'
import ListadoBlog from '../components/ListadoBlog';


const Blog = ({entradas}) => {
    const {data:entradasBlog}= entradas
  return (
    <Layout
        pagina="Blog"
      >
        <main className='contenedor'>
          <ListadoBlog entradasBlog={entradasBlog} />
        </main>

      </Layout>
  )
}

export async function getStaticProps(){

  const URL =`${process.env.API_URL}/blogs?populate=*`
  const respuesta = await fetch(URL);
  const entradas = await respuesta.json()

  return {
    props: {
      entradas
    }
  }
}

export default Blog
