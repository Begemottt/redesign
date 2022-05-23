import React from 'react';

export default function TripleLayer (data) {
    return(
        <>
            <div className={'back_layer ' + data.name}></div>
            <div className={'middle_layer ' + data.name}></div>
            <div className={'front_layer ' + data.name}>{data.content}</div>
        </>
    )
}