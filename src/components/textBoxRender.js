import React from 'react';
import BackgroundRenderer from './backgroundRender';

function TextBoxRender (data) {

    return(
        <>
        {data.boxActive === true && 
        <div id='text_box'>
            
                <div id='text_box_front_layer'>
                    <p id='line1'>This is the first line.</p>
                    <p id='line2'>And this is the second line!!</p>
                </div>
            
            < BackgroundRenderer id='textbox_background' />
        </div>
        }
        </>
    )
}

export default TextBoxRender;