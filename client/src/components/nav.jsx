import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { LogButtons } from './log-buttons';
import { User } from "./user";

export function Nav({isLogged, setIsLogged, userName}) {
    return (<Fragment>
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
            <div className='container'>
                <Link className="navbar-brand" to='/'>Image App</Link>
                <div className="collapse navbar-collapse px-5">
                    <ul className='navbar-nav me-auto'>
                        <li className="nav-item">
                            <Link className="nav-link p-2" to="/">MAIN</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link p-2' to="/add">ADD</Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex justify-content-around">
                    { isLogged ? <User setIsLogged={setIsLogged} userName={userName} /> : <LogButtons setIsLogged={setIsLogged} /> }
                </div>
            </div>
        </nav>
    </Fragment>)
}