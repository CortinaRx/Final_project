import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import './EmergencyRegister.scss'

const EmergencyRegister = ({props, props2}) => {
console.log("Esto esta llegando a emergency register como finalInfo:", props.finalInfo)
const { register, handleSubmit } = useForm();
// const [contact, setContact] = useState()

const onSubmit = (formData) =>{
//  setContact(formData)
  props.setFinalInfo({...props.finalInfo, contact:formData} )
  // props.setFinalInfo(props.finalInfo, contact)
  setTimeout(()=>{
    props2.setPage(3)
  },300)
  

} 





  return (
    <div className='emergency-register-container'>
    <div className='emergency-register-container--page'>
      <a onClick={()=>props2.setPage(1)}><img src="./Images/returnBackImage.png" alt="Back Icon"/>Volver</a>
      <p>{props2.page} de 4</p>
    </div>
    <div className='emergency-register-container--text'>
      <h1>Vamos a añadir tu contacto en caso de emergencía.</h1>
      <p>Nos pondremos en contacto con tu persona de confianza y/o compañía de seguros en caso de emergencía</p>
      
    </div>
    <form className='emergency-register-container--form' onSubmit={handleSubmit(onSubmit)}>

    <input className='emergency-register-container--form--input'
      id="sosname"
      defaultValue="rick"
      placeholder="Nombre completo de tu contacto"
      type="text"
      {...register("sosname", { required: false })}
    />
    <input className='emergency-register-container--form--input'
      id="sosemail"
      defaultValue="rick@rick.com"
      placeholder="Dirección e-mail"
      type="email"
      {...register("sosemail", {
        required: false
        
      })}
    />

    <input className='emergency-register-container--form--input'
      id="sosphone"
      defaultValue="1234567"
      placeholder="Móvil"
      type="number"
      {...register("sosphone", {
        // required: true
        
      })}
    />


    <input className='emergency-register-container--form--input'
      name="Assurance"
      defaultValue="segurooooo"
      id="assurance"
      type="text"
      placeholder="Compañia de Seguros / Nº Póliza"
      {...register("assurance", {
        required: false
        
      })}
    />

    <input className='emergency-register-container--form--button'  type="submit" value="Guardar emergencias" />
    <a>Registraré mi contacto en otro momento</a>
  </form>
  </div>
  )
}

export default EmergencyRegister