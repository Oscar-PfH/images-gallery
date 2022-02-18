import React, { Fragment, useState } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

export function Login({setIsLogged, setUserName}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const target = e.target;
        switch(target.name) {
            case 'email': setEmail(target.value); break;
            case 'password': setPassword(target.value); break;
            default: ;
        }
    }

    const login = (e) => {
        e.preventDefault();
        Axios.get('http://localhost:9000/api/users/useremail/' + email).then((res) => {
            if (res.status === 200) {
                const userData = res.data;
                if (userData.userpassword === password) {
                    setIsLogged(true);
                    setUserName(userData.nickname);
                    navigate('/');
                }
            }
        }).catch((err) => {
            console.log(err);
        })
    }
    return (<Fragment>
        <div className="d-flex justify-content-center">
            <form className="col-3 mt-4">
                <div className="form-group mb-2">
                    <input type="email" name="email" className="form-control" placeholder="Correo electrónico" onChange={handleInputChange} required />
                </div>
                <div className="form-group mb-2">
                    <input type="password" name="password" className="form-control" placeholder="Contraseña" onChange={handleInputChange} required />
                </div>
                <button type="submit" className="btn btn-primary" onClick={login}>Log in</button>
            </form>
        </div>
    </Fragment>)
}