import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

export function LogButtons() {
    const navigate = useNavigate();
    return (<Fragment>
        <button type='button' className='btn btn-outline-secondary btn-sm' onClick={() => { navigate('/login') }}>Login</button>
        <button type='button' className='btn btn-outline-secondary btn-sm' onClick={() => { navigate('/signin')}}>Signin</button>
    </Fragment>)
}