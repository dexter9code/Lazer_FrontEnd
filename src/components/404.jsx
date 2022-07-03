import React from 'react';

import errorVideo from  '../assets/video/404.mp4'

const Error=()=>{
    return (
        <div >
            <video src={errorVideo} autoPlay loop muted className='blur-sm -z-20 object-cover w-full h-full' />
            <div className='text-center absolute top-[500px] left-[200px]'>
                <h1 className='text-white text-5xl capitalize '>oops we lost you !!</h1>
            </div>
        </div>
    )
}

export default Error