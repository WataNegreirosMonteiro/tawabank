import './styles.css';
import Eye_on from '../../assets/eye_on.svg';
import Eye_off from '../../assets/eye_off.svg';
import Icon_bank from '../../assets/icon_bank.svg';
import Icon_google from '../../assets/icon_google.png';
import { useState } from 'react';

export default function Login(){
  const [eye, setEye] = useState(Eye_off)
  const [input_type, setinput_type] = useState('password')

  function toggleHandle(){
    if (eye === Eye_off){
      setEye(Eye_on)
      setinput_type('text')
    }
    else{
      setEye(Eye_off)
      setinput_type('password')
    }

  }
  return (
    <main>
      <h1 style={{color: '#565D6A', display: 'flex', gap: '8px', marginBottom: '8px'}}>
        <img src={Icon_bank} style={{width: '10%'}}/> Tawabank
      </h1>
      <p style={{color: '#8e9093', marginBottom: '48px'}} >O banco digital mais acessível do Brasil</p>

      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
          <label for="InputPassword" class="form-label">Senha</label>
          <div class="form-control">
            <input type={input_type} id="InputPassword"/>
            <button type='button' onClick={toggleHandle} id='eye_button'><img src={eye}/></button>
          </div>
        </div>
        <div class='checkbox-forget_password'>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Lembrar de mim</label>
          </div>
          <a href="#"><p>Esqueceu a senha?</p></a>
        </div>
        <div class="login-buttons">
          <button type="submit" class="btn btn-primary">Entrar</button>
          <button type="button" class="btn btn-outline-primary">Cadastrar</button>
        </div>
      </form>
      <div class="sep">
        <span class="or">ou</span>
      </div>
      <button id='google-button'><img src={Icon_google} id='google-image'/> Google</button>
    </main>
  )
}