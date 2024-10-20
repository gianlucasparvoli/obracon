import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { useMediaQuery } from 'react-responsive'

const Contact = () => {
  var path = window.location.pathname;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [stateVariable, setStateVariable] = useState('');
  const [recaptcha, setRecaptcha] = useState('');
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const captcha_sitekey = process.env.REACT_APP_captcha_sitekey;

  const getCaptcha = (captchaValue) => {
    setRecaptcha(captchaValue);
  }

  const sendEmail = (formParams) => {
    const serviceId = process.env.REACT_APP_emailjs_serviceId;
    const templateId = process.env.REACT_APP_emailjs_templateId;
    const publicKey = process.env.REACT_APP_emailjs_publicKey;

    formParams["g-recaptcha-response"] = recaptcha;

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, formParams, publicKey)
      .then((response) => {
        if (response.status == 200) {
          console.log('Email sent successfully!', response);
          setStateVariable(response.status)
          setTimeout(() => {
            document.location.href = "/";
          }, 4000);
        }
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setStateVariable("FAIL")
      });

  };

  return (
    <div style={{ "margin-top": "1rem" }}>
      {path !== "/" && <Navbar />}
      {path == "/" && <div className="line" style={{ borderColor: "#FCC913", borderWidth: "1px", borderStyle: "solid" }}></div>}
      {/* <div class="divider py-1 rounded bg-dark mb-1"></div> */}
      {/* {!isMobile && <div style={{ "marginTop": path == "/" && "15rem" }}> </div>} */}
      <div style={{"padding-top": "1px"}}>
        <form style={{ border: "2px solid #909191","backgroundColor": "#b7b7b6", "padding": "2rem", "margin-top": path !== "/" ? "5rem": "1rem" }} onSubmit={handleSubmit(sendEmail)}>
          <h3 className="text-center">¿Querés contactarte con nosotros? Completá el siguiente formulario:</h3>

          <div className="mt-4 form-group row d-flex justify-content-center">
            <label for="staticEmail" className="col-sm-2 col-form-label">Nombre y Apellido</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="inputName" placeholder="Nombre y Apellido" {...register('nombre', { required: true })} />
              {errors.nombre && <div className="mt-2 text-danger">El Nombre y Apellido es requerido.</div>}
            </div>
          </div>

          <div className="mt-4 form-group row d-flex justify-content-center">
            <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-8">
              <input type="email" className="form-control" id="inputEmail" placeholder="Email" {...register('email', { required: true })} />
              {errors.email && <div className="mt-2 text-danger">El Email es requerido.</div>}
            </div>
          </div>

          <div className="mt-4 form-group row d-flex justify-content-center">
            <label for="statictelefono" className="col-sm-2 col-form-label">Teléfono</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" id="inputTelefono" placeholder="Teléfono" {...register('telefono', { required: true })} />
              {errors.telefono && <div className="mt-2 text-danger">El Teléfono es requerido.</div>}
            </div>
          </div>

          <div className="mt-4 form-group row d-flex justify-content-center">
            <label className="col-sm-2 col-form-label">Mensaje</label>
            <div className="col-sm-8">
              <textarea className="form-control " id="inputMensaje" rows="4" {...register('mensaje', { required: true })} />
              {errors.mensaje && <div className="mt-2 text-danger">El Mensaje es requerido.</div>}
            </div>
          </div>

          {stateVariable == 200 ?
            <div className="mt-4 form-group row d-flex justify-content-center">
              <div className="d-flex justify-content-center col-sm-8 alert alert-success">
                Consulta enviada de forma correcta!
              </div>
            </div>
            : stateVariable == "FAIL" ?
              <div className="mt-4 form-group row d-flex justify-content-center">
                <div className="d-flex justify-content-center col-sm-8 alert alert-danger">
                  Error. Por favor intentelo de nuevo.
                </div>
              </div>
              : null}

          <div style={{ "margin": "0 auto", "textAlign": "center" }} className="mt-4">
            <ReCAPTCHA
              key={isMobile ? "compact-recaptcha" : "normal-recaptcha"}
              style={{ "display": "inline-block" }}
              sitekey={captcha_sitekey}
              onChange={getCaptcha}
            />
          </div>
          <div className="mt-4 form-group row d-flex justify-content-center ">
            <button type="submit" className="btn btn-dark col-sm-6 ">
              Enviar
            </button>
          </div>

        </form>
      </div>
      {path !== "/" && <Footer />}
    </div>
  );
};

export default Contact;
