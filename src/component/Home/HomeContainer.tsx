import React from 'react'
import { useFetchDataStore } from '../../store/data';

const HomeContainer = () => {
    const { data } = useFetchDataStore();
    return (
        <div>
            {data && data.map((item: any) => (
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <p>{item.email}</p>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    )
}

export default HomeContainer
