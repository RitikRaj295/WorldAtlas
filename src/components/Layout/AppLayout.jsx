import Header from '../UI/Header';
import Footer from '../UI/Footer';
import { Outlet } from 'react-router-dom';
import style from '../../css/AppLayout.module.css'

const AppLayout = () => {
  return (
    <div className={style.container}>
    <Header/>
    <Outlet/>
    <Footer/>
      
    </div>
  )
}

export default AppLayout
