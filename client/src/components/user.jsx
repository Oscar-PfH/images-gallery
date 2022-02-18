import React, { Fragment } from "react";

export function User({setIsLogged, userName}) {
    return (<Fragment>
        <h4 className="m-2">{userName}</h4>
        <button className="btn btn-secondary" onClick={ () => setIsLogged(false) }>Log out</button>
    </Fragment>)
}