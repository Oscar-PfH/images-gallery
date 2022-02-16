import React, { Component, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import './item.css';
import PropTypes from 'prop-types';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dimXY: []
        };
    }

    getDims(link) {
        var img = new Image();
        img.src = link;
        return [img.width, img.height];
    }
    componentDidMount() {
        this.setState({dimXY: this.getDims(this.props.item.link)});
    }
    render() {
        const { item, onDelete, navigate } = this.props;
        return (<Fragment>
            <div className='col-3'>
                <div className='card border-primary p-2 mb-2'>
                    <div className='card-header'>
                        <h3>{item.id + ' ' + item.image_name}</h3>
                    </div>
                    <div className='card-body'>
                        <img src={item.link} alt="Imagen" className='w-100 h-75' />
                        <p>Dimensiones: {this.state.dimXY[0] + '-' + this.state.dimXY[1]}</p>
                        <h4>{item.category}</h4>
                    </div>
                    <div className='card-footer d-flex justify-content-around'>
                        <button type='button' className='btn btn-secondary' onClick={() => navigate('/edit/' + item.id)}>Edit</button>
                        <button type='button' className='btn btn-danger' onClick={() => { onDelete(item.id) }}>Delete</button>
                    </div>
                </div>
            </div>
        </Fragment>)
    }
}

function MyNavigation(props) {
    let navigate = useNavigate();
    return (<Item {...props} navigate={navigate} />)
}

Item.propTypes = {
    item: PropTypes.object
}

export default MyNavigation;