import React from 'react'
import useFetchDataStore from '../store/data'


const CommentsListContainer = () => {
  const {data} = useFetchDataStore()
  return (
    <div>
      {data.map((item:any)=>{
        return <div key={item.id}>{item.name}</div>
      })}
    </div>
  )
}

export default CommentsListContainer
