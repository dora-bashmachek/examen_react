import "./login.css";
import loginPNG from "./login.webp";
import {Component} from 'react';
import {Link} from "react-router-dom"
// import App from "../../App";

class Login extends Component {
    render(){
        return(
          <div>
            <div className="login">
                <div className="photolog">
                <img className="photologin" src={loginPNG}/>
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
          <Link to="/main">
          <button  className="card-text-button">Завершить регистрацию</button> 
          </Link>
        </div>
        <div className="flx">
          <div className="liner"></div>
          <div>OR</div>
          <div className="liner"></div>
        </div>
        <div className="part2">
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
          <Link to="/main">
          <button  className="card-text-button">Войти</button>
          </Link>
        </div>
            </div>
            </div>
            </div>
        )
    }
}
export default Login;