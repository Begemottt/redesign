import React from 'react';

function BackgroundRenderer (data) {
    let panels = [];
    for (let i = 0; i < 100; i++){
        let panel = i + 1;
        panels.push(panel);
    }

    return(
        <div className='back_layer' id={data.id}>
            {panels.map((item, index)=>{
                return(
                    <div className={'back_panel ' + item} key={data.id + "_back_panel_" + index}></div>
                )
            })}
        </div>
    )
}

export default BackgroundRenderer;