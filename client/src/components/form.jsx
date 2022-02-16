import React, { Fragment, useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

export function Form() {
    const [imageName, setImageName] = useState('');
    const [link, setLink] = useState('');
    const [category, setCategory] = useState('');
    const [edit, setEdit] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            Axios.get('http://localhost:9000/api/images/' + id).then((res) => {
                if (res.status === 200) {
                    setImageName(res.data.image_name);
                    setLink(res.data.link);
                    setCategory(res.data.category);
                    setEdit(true);
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [])

    const submit = (e) => {
        e.preventDefault();
        let options = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        const newImage = {
            image_name: imageName,
            link: link,
            dimx: 200,
            dimy: 500,
            category: category
        };
        Axios.post('http://localhost:9000/api/images/', newImage, options).then((res) => {
            if (res.status === 200) {
                console.log(res.data);
                alert('Imagen guardada con éxito');
            }
        }).catch((err) => {
            console.log(err);
        })
    };

    const editItem = (e) => {
        e.preventDefault();
        let options = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        const editedImage = {
            image_name: imageName,
            link: link,
            dimx: 200,
            dimy: 500,
            category: category
        };
        Axios.put('http://localhost:9000/api/images/' + id, editedImage, options).then((res) => {
            if (res.status === 200) {
                console.log(res.data);
                alert('Imagen actualizada con éxito');
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const [file, setFile] = useState(null);

    const handleInputChange = (e) => {
        const target = e.target;
        switch (target.name) {
            case 'imageName': setImageName(target.value); break;
            case 'link': setLink(target.value); break;
            case 'category': setCategory(target.value); break;
            default: break;
        }
    }
    const selectedHandler = (e) => {
        setFile(e.target.files[0]);
    }
    const sendHandler = () => {
        if (!file) {
        alert('No selecciono archivo');
        return ;
        }
        const formData = new FormData();
        formData.append('image', file);

        fetch('http://localhost:9000/images/post', {
        method: 'POST', body: formData
        }).then(res => res.text()).then(res => console.log(res))
        .catch(err => { console.log(err) });

        document.getElementById('file-input').value = null;

        setFile(null)
    }
    return (<Fragment>
        <div className='container col-lg-6 mx-auto'>
            <form>
                <div className='form-group mt-3'>
                    <input type="text" name='imageName' id='image-name' className='form-control' placeholder='Nombre' onChange={handleInputChange} 
                    value={imageName}/>
                </div>
                <div className='form-group mt-2'>
                    <input type="url" name='link' id='link' className='form-control' placeholder='URL' onChange={handleInputChange}
                    value={link}/>
                </div>
                <div className='form-group mt-2'>
                    <input type="file" id='file-input' className='form-control' onChange={selectedHandler}/>
                </div>
                <div className='form-group mt-2'>
                    <input type="text" name='category' id='category' className='form-control' placeholder='Categoría' onChange={handleInputChange}
                    value={category}/>
                </div>
                <button type='submit' className='btn btn-primary mt-2' onClick={edit ? editItem : submit}>Save</button>
            </form>
        </div>
    </Fragment>)
}