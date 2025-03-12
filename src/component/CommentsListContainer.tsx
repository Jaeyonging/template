import React from 'react'
import useFetchDataStore from '../store/data'
import { useNavigate } from 'react-router-dom'


const CommentsListContainer = () => {
  const { data } = useFetchDataStore()
  const navigate = useNavigate()
  const clickHandler = () => {
    navigate('/second')
  }
  return (
    <div className='bg-[blue] flex flex-col w-[100%] h-[100%]'>
      <div className='flex bg-[red] p-2' onClick={clickHandler}>
        다음 페이지 이동
      </div>
    </div>
  )
}

export default CommentsListContainer
