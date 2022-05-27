import React from 'react';
import TripleLayer from '../tripleLayer';

export default function TopNavButton(data){
    const navigate = (page) => {
        console.log(page + ' clicked!');
    }

    let name = data.content;

    return(
        <li><div className='top_button' onClick={()=>(navigate(name))}>< TripleLayer name='top_nav' content={name} /></div></li>
    )
}