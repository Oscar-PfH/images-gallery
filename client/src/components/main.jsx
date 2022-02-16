import React, { Fragment, useEffect, useState } from "react";
import { List } from './list';
import { Search } from "./search";
import Axios from 'axios';

export function Main() {
    const [imagesList, setImageList] = useState([]);

    const handleDelete = (id) => {
        Axios.delete(`http://localhost:9000/api/images/${id}`).then((res) => {
            if (res.status === 200) {
                console.log(res.data);
                alert('Imagen eliminada con éxito');
            }
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
            Axios.get('http://localhost:9000/api/images').then((res) => {
                setImageList(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }, [])
    
    return (<Fragment>
        <div className="container-fluid bg-secondary">
            <Search setImageList={setImageList} />
        </div>
        {imagesList.length ? <List list={imagesList} onDelete={handleDelete}/> : <p>Images not found</p>}
    </Fragment>);
}
