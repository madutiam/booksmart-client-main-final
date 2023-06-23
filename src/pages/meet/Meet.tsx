import React from "react"
import './Meet.css'
import { useNavigate } from "react-router";
import useForm from "./MeetScript";

// import { Section } from './Meet.styles'

const Meet = () => {
    const nav = useNavigate()
    const [err, setErr] = React.useState('')
    function clearInputs() {
        const inputs = document.getElementsByClassName("inputField");
        for (let i = 0; i < inputs.length; i++) {
          const input = inputs[i] as HTMLInputElement
            input.value = "";
        }
      }

      function handleSubmit() {
        const inputs = document.getElementsByClassName("inputField")
        let values = []
        for(let i = 0; i < inputs.length; i++) {
            const input = inputs[i] as HTMLInputElement
            values.push(input.value.length)
        }

        if(values.includes(0)) {
            setErr('Preencha um valor.')

            setTimeout(() => {
                setErr('')
            }, 6500);
        } else {
            nav('/dashboard')
        }
      }


  return (
   
    <section className="section">
        <section className="formSection">
            <h1>Marcar Encontro</h1>
            <form className="form">
                <input className="user inputField" type="text"  placeholder="Usuário 1" />
                <input  className="user inputField" type="text"  placeholder="Usuário 2"/>
                <input  className="data inputField" type="text"  placeholder="Data (dd/mm/aaaa)" />
                <input  className="hora inputField" type="text"  placeholder="Horário (XX:XX)" />
            </form>
        
            <div className="buttonContainer">
               
                <button onClick={clearInputs}>Cancelar</button>
                <button onClick={handleSubmit}>Confirmar</button>
            </div>
            <p style={{color: 'crimson'}}>{err}</p>
        </section>
    </section>

  )
    
}


{/* <section className="section">
      <section className="">
     
      <h1 className="title">Login</h1>
      <form  className='form'>
        <input type="text" />
        <input type="text" />

       
          <button>Entrar</button>
       

       
      </form>
      <span className="perdeu"></span>
      <div className='cadastro'>
        <h2 className='subtitle'>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
       <button>Cadastro</button>
      </div>
    </section>
    </section> */}

export default Meet