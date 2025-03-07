import React from 'react'
import { useQuery } from 'react-query';
import { fetchComments } from '../api/fetch';
import Loading from '../lotties/Loading';

const ApiComments = () => {
    const { data, isLoading, isError, error } = useQuery("comments", fetchComments);

    if (isLoading) return <Loading />
    if (isError) throw error;

    console.log(data)
    return (
        <div>
            {/* {data} error 확인*/}
            {data.length} comments loaded.
        </div>
    )
}

export default ApiComments
