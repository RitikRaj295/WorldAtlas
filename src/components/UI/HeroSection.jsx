import style from '../../css/HeroSection.module.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import {NavLink} from "react-router-dom";


const HeroSection = () => {
  return (
   <main className={style.heroSection}>
    <div className={`${style.container}`}>
      <div className={style.heroContent}>
        <h1 className={style.headingXl}>Navigate the <span>Globe</span>, Learn Beyond Borders.</h1>
        <p className={style.paragraph}>Discover the history, culture and beauty of every nation. Sort,search and filter through country and find the details you need.</p>
       <NavLink to={"/country"}><button>Start Exploring<FaLongArrowAltRight style={{ fontSize: "1rem" }} />      </button></NavLink> 
      </div>
      <div className={style.heroImage}>
        <img src="/images/img3.png" alt="world atlas image" />
      </div>
    </div>

   </main>
  )
}

export default HeroSection
