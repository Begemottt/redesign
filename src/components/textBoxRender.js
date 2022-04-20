import React from 'react';

function TextBoxRender (data) {

    return(
        <>
        {data.boxActive === true && 
        <div id='text_box'>
            
                <div id='text_box_front_layer'>
                    <p id='line1'>This is the first line.</p>
                    <p id='line2'>And this is the second line!!</p>
                </div>
            
            <div id='text_box_back_layer'>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
                <div className='background_panel'></div>
            </div>
        </div>
        }
        </>
    )
}

export default TextBoxRender;