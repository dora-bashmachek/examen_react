import "./login.css";
import loginPNG from "./login.webp";
import {Component} from 'react';

class Login extends Component {
    render(){
        return(
            <div className="login">
                <div className="photolog">
                <img className="photo" src={loginPNG}/>
                </div>
                <div className="log">
           <div className="part1">
          <div className="group">
            <input className type="text" name="first" id="name" placeholder="Write your name" />
          </div>
          <div className="group">
            <input type="text" name="last" placeholder="Write your last name" id="last name" />
          </div>
          <div className="group">
            <input type="email" name="email" placeholder="Write your email" id="email" />
          </div>
          <div className="group">
            <input type="password" name="password" placeholder="Write your password" />
          </div>
          <button  className="card-text-button">Завершить регистрацию</button> 
          {/* @click="createUser" */}
        </div>
        
        <div class="flx">
          <div class="liner"></div>
          <div>OR</div>
          <div class="liner"></div>
        </div>
        <div class="part2">
          <input
            type="email"
            name="auth_email"
            value="dora@example.com"
            placeholder="Write your email"
          />
          <input
            type="password"
            name="auth_password"
            value="1234"
            placeholder="Write your password"
          />
          <button  class="card-text-button">Войти</button>
          {/* @click="getAuth" */}
        </div>
            </div>
            </div>
        )
    }
}


export default Login;