import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import logoStore from './twitter_profile_image.png'
// import Email from './smtp'


function Navbar() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [number,setNumber]=useState('')
    const [msg,setMsg]=useState('')


    // function sendMail(){
    //     // e.preventDefault()
    //     Email.send({
    //         Host : "smtp.gmail.com",
    //         Username : "jeevanaloor500@gmail.com",
    //         Password : "password",
    //         To : 'jeevanaloor500@gmail.com',
    //         From :email ,
    //         Subject : "sample mail",
    //         Body : "And this is the body"
            
    //     },alert("done")).then(
    //       message => alert(message)
    //     );

    // }

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_zcvuwba', 'template_s0qkxh7', form.current, 'Pt9U39IH8S0QXmCtU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };







  return (
    <div style={{textAlign:"left"}}>
    <img src={logoStore} style={{width:"150px",height:"150px"}}   />
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="to_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
   




    </div>
  )
}

export default Navbar