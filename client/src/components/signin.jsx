import React, { Fragment, useState } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

export function Signin() {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const target = e.target;
        switch(target.name) {
            case 'nickname': setNickname(target.value); break;
            case 'email': setEmail(target.value); break;
            case 'password': setPassword(target.value); break;
            case 'age': setAge(target.value); break;
            default: ;
        }
    }

    const signin = (e) => {
        e.preventDefault();
        let options = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        const newUser = {
            nickname: nickname,
            email: email,
            userpassword: password,
            age: age
        }
        Axios.post('http://localhost:9000/api/users/', newUser, options).then((res) => {
            if (res.status === 200) {
                console.log(res.data);
                navigate('/');
            }
        }).catch((err) => {
            console.log(err);
        })
    }
    return (<Fragment>
        <div className="d-flex justify-content-center">
            <form className="col-3 mt-4">
                <div className="from-group mb-2">
                    <input type="text" name='nickname' className="form-control" placeholder="Nombre" onChange={handleInputChange} required />
                </div>
                <div className="form-group mb-2">
                    <input type="email" name="email" className="form-control" placeholder="Correo electrónico" onChange={handleInputChange} required />
                </div>
                <div className="form-group mb-2">
                    <input type="password" name="password" className="form-control" placeholder="Contraseña" onChange={handleInputChange} required />
                </div>
                <div className="form-group mb-2">
                    <input type="number" name="age" className="form-control" placeholder="Edad" onChange={handleInputChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={signin}>Sign in</button>
            </form>
        </div>
    </Fragment>)
}