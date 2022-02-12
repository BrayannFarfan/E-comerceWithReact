// import { useState } from "react";
// import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import "./Contact.css";
import { LoadingComponent } from '../Navbar/LoadingComponent'

const initialForm = {
    name:"",
    email:"",
    subject:"",
    comments:"",
}
const validationsForm = (form) =>{
  let errors = {}
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,300}$/;

  if(!form.name.trim()){
    errors.name= "El campo Name es 'Obligatorio'"
  }else if(!regexName.test(form.name.trim())){
    errors.name="El campo Name solo acepta letras y espacios";
  }


  if(!form.email.trim()){
    errors.email="El campo Email es 'Obligatorio'"
  }else if(!regexEmail.test(form.email.trim())){
    errors.email="No es un Email Válido";
  }


  if(!form.subject.trim()){
    errors.subject="El campo Subject es 'Obligatorio'"
  }


  if(!form.comments.trim()){
    errors.comments="El campo Mensaje es 'Obligatorio'"
  }else if(!regexComments.test(form.comments.trim())){
    errors.comments="El campo Mensjae solo acepta 300 Caracteres";
  }



  return errors;
} 

let style={
  color: "red",
  fontSize: "14px",
  position: "relative",
  left: ".7rem"
}

export const ContacUs = () => {

    const {
        form,
        errors,
        loading,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm(initialForm, validationsForm); 
   

  return (
    <>
      <div className="contact__us">
        <div className="about-content">
          <h2>Contact us</h2>
          <div className="about-line"></div>
          <p className="about__text">We’d love to hear from You</p>
        </div>
      </div>

      <section className="Contact__container">
        <div className="contact__content">
          <div className="contact__title">
            <h2>GET IN TOUCH</h2>
          </div>
          <div className="contact__text">
            <p className="contact__text_item ">
              Lorem ipsum dolor sit amet, repudiare inciderint referrentur qui
              ei, sit apeirian detraxit mnesarchum. Eos nostro vivendo
              consulatu.
            </p>
          </div>
          <div className="contact__direction">
            <div className="contact__direction__item">
              <h6>PHONES: </h6>
              <p>+1135626659</p>
            </div>
            <div className="contact__direction__item">
              <h6>E-MAILS:</h6>
              <p>+CerveMark@example.com</p>
            </div>
            <div className="contact__direction__item">
              <h6>ADDRES: </h6>
              <p>LA, California 3265 NY</p>
            </div>
            <div className="contact__direction__item">
              <h6>FOLLOW:</h6>
              <div className="contact__icons">
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
          </div>
        </div>
       
        <div className="forms__container">
          <form className="forms__control" onSubmit={handleSubmit}>
            <div>
              <input
                className="forms__input"
                placeholder="Name"
                type="text"
                name= "name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.name}
                required
              />
              {errors.name && <span style={style}>{errors.name}</span>}
            </div>
            <div>
              <input
                className="forms__input"
                placeholder="E-mail"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
             {errors.email && <span style={style}>{errors.email}</span>}
            </div>
            <div>
              <input
                className="forms__input"
                placeholder="Subject"
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.subject && <span style={style}>{errors.subject}</span>}
            </div>

            <textarea
            className="form__textarea"
            placeholder="Messege...."
            name="comments"
            value={form.comments}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            ></textarea>
            {errors.comments && <span style={style}>{errors.comments}</span>}
            <input type="submit" className="form__btn" value="Enviar"/>
          </form>
          {loading && <LoadingComponent/>}
        </div>
      </section>
    </>
  );
};
