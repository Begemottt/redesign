import React from 'react';

function SplashImage (data) {

    return(
        <div id='splash'>
            <img src={'/images/splash/' + data.imageName} alt={data.description} loading='lazy' />
        </div>
    )
}

export default SplashImage;