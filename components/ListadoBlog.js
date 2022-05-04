import React from 'react'
import Entrada from '../components/Entrada';
import styles from '../styles/Blog.module.css'

const ListadoBlog = ({entradasBlog}) => {
  return (
    <>
        <h2 className="heading">Blog</h2>
          <div className={styles.blog}>
            {entradasBlog.map(entrada=>(<Entrada key={entrada.id} entrada={entrada}/>))}
          </div>
    </>
  )
}

export default ListadoBlog