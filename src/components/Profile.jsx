import React from 'react';
import {Link} from 'react-router-dom'

import {couponImg,favImg,logoutImg,orderImg,walletImg} from '../assets/icons/index'

import ProfileCard from './common/ProfileField';

import {accfullcircle,accfullcircle2,acchalfcircle,accright} from '../assets/svg/svgIndex'



const Profile=({user})=>{
    return(
        <div className=' flex justify-center'>
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
                        <h1 className='text-lg font-semibold px-3 py-2' >{user ? user.email : 'user@example.com'}</h1>
                        <h2 className='text-base font-semibold px-3 py-2'>Account Type <span className='text-orange-400 capitalize' >gold</span></h2>
                    </div>
                </div>
                    <div className='p-2 mt-10 flex flex-col justify-center items-center'>
                        <ProfileCard image={walletImg} title='wallet' />
                        <ProfileCard image={favImg} title='Wishlist' />
                        <ProfileCard image={couponImg} title='coupons' />
                        <ProfileCard image={orderImg} title='orders' />
                        <Link to={'/lazer/logout'} >
                            <ProfileCard image={logoutImg} title='Logout' />
                        </Link>
                    </div>
            </div>
        </div>
    )
}



export default Profile