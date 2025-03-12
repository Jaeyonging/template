import React from 'react'
import { useNavigate } from 'react-router-dom'

const Second = () => {
    const navigate = useNavigate()

    return (
        <div className='flex w-[100%] h-[100%] bg-[black]'>
            <div className='bg-[red] flex' onClick={()=>navigate(-1)}>
                두번 쨰 페이지
            </div>
        </div>
    )
}

export default Second
