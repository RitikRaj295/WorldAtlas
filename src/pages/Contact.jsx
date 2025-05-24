import React from 'react'
import style from '../css/Contact.module.css'


const Contact = () => {
const handleForm = (formData) =>{
 // console.log(formData.entries());
 const data=Object.fromEntries(formData.entries());
 console.log(data);
 
}

  return (
    <section className={style.container}>
      <h2>Contact Us</h2>
      <div className={style.formContainer}>
        <form>
        <input className={style.inpt} type="text" required placeholder='Enter Your Name' name="username"/>
        <input className={style.inpt} type="text" required placeholder='Enter Your Email' name="userEmail"/>
        <textarea className={style.txt} name="textArea" placeholder='Enter Your Message' rows={10} cols={20}></textarea>
        <button formAction={handleForm} className={style.btn} value="Send">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
