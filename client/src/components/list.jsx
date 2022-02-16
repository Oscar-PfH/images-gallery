import React from 'react';
import Item from './item';

export function List({list, onDelete}) {
    return (<div className='container row p-3'>
        {list.map(item => (
            <Item item={item} onDelete={onDelete} key={item.id} />
        ))}
    </div>)
}