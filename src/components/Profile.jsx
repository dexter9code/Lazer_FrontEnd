import React from 'react';
import {Link} from 'react-router-dom'

import ProfileCard from './common/ProfileField';
import accright from '../assets/svg/accRight.svg'
import acchalfcircle from '../assets/svg/accHalfCircle.svg'
import accleftfull from '../assets/svg/acctestleftfull.svg'
import accfullcircle from '../assets/svg/accfullCircle.svg'
import accfullcircle2 from '../assets/svg/accanotherfullcircle.svg'

const Profile=({user})=>{
    return(
        <div className=' flex justify-center'>
            {/* <img src={accleftfull} alt="" className='absolute left-0 bottom-0 -z-40 object-cover w-[900px] h-[680px]' />    */}
            <img src={acchalfcircle} alt="" className='absolute right-0 top-[330px] -z-30 object-cover w-[180px] ' />
            <img src={accright} alt="" className='absolute right-0 -z-40 object-cover w-[900px] h-[500px]' />
            <img src={accfullcircle} alt="" className='absolute  -z-40 top-[310px] right-[250px] object-cover p-2 w-[220px] h-[220px]' />
            <img src={accfullcircle2} alt="" className='absolute  -z-40 top-[480px] right-[250px] object-cover  p-2 w-[100px] h-[95px]' />
            <div className='  px-40 py-20'>
                <div className='flex justify-center border-b'>
                    <div className='flex justify-center overflow-hidden rounded-full w-[150px] '>
                        <img className='self-center' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" />
                    </div>
                    <div className='p-2 self-center ml-3    '>
                        <h1 className='text-2xl font-bold px-3 py-2 border-b capitalize' >{user ? user.name :'username'}</h1>
                        <h1 className='text-lg font-semibold px-3 py-2' >RanverRock@gmail.com</h1>
                        <h2 className='text-base font-semibold px-3 py-2'>Account Type <span className='text-orange-400 capitalize' >gold</span></h2>
                    </div>
                </div>
                    <div className='p-2 mt-10 flex flex-col justify-center items-center'>
                        <ProfileCard image={'https://cdn-icons-png.flaticon.com/512/733/733329.png'} title='wallet' />
                        <ProfileCard image={'https://cdn-icons-png.flaticon.com/512/7245/7245022.png'} title='Wishlist' />
                        <ProfileCard image={'https://cdn-icons.flaticon.com/png/512/4013/premium/4013982.png?token=exp=1656942052~hmac=b24ff5d1631dd962dbb877d38fcea1ca'} title='coupons' />
                        <ProfileCard image={'https://cdn-icons.flaticon.com/png/128/5336/premium/5336018.png?token=exp=1656939254~hmac=994877713da8980688e0c9e069993efb'} title='orders' />
                        <Link to={'/lazer/logout'} >
                            <ProfileCard image={'https://cdn-icons.flaticon.com/png/128/4400/premium/4400483.png?token=exp=1656939096~hmac=28edcbc0f005f57161db89480128a81a'} title='Logout' />
                        </Link>
                    </div>
            </div>
        </div>
    )
}



export default Profile