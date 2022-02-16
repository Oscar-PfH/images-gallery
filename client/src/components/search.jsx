import React, { Fragment, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export function Search({setImageList}) {
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const search = (e) => {
        if (input === '') return ;
        e.preventDefault();
        Axios.get('http://localhost:9000/api/images/imagename/' + input).then((res) => {
            if (res.status === 200) {
                console.log(res.data);
                navigate('/' + input);
                setImageList(res.data);
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    return (<Fragment>
        <form className="col-3">
            <div className="d-flex">
                <input type="text" className='form-control m-2' placeholder='Search' onChange={(e) => {
                    setInput(e.target.value);
                }} required />
                <button type='submit' className='btn btn-secondary my-2 ms-sm-0' onClick={search}>Search</button>
            </div>
        </form>
    </Fragment>)
}