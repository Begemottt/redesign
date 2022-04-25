import React from 'react';

function ButtonRender(data){

    const buttonLockout = (id, lockTime, func) => {
        document.getElementById(id).disabled = true;
        func;
        setTimeout(() => {
            document.getElementById(id).disabled = false;
        }, lockTime);
    }

    return(
        <button id={data.id} className={data.class} onClick={()=>buttonLockout(data.id, data.time, data.func())}>
            <div className='button_back_layer'></div>
            <div className='button_middle_layer'></div>
            <div className='button_front_layer'>{data.name}</div>
        </button>
    )
}

export default ButtonRender;