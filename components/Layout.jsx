import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'


const Layout = ({ children }) => {
  return (
    <>
        <Nav/>
        <Header/>
        <div className={styles.container}>
            <main className={styles.main} >
                <h1>{children}</h1>
            </main>
        </div>
    </>
  )
}

export default Layout