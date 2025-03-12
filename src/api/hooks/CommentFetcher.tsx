import React from 'react'
import { useQuery } from 'react-query';
import { fetchComments } from '../fetch';
import Loading from '../../lotties/Loading';

const CommentFetcher = ({children}: {children: React.ReactNode}) => {
    const { data, isLoading, isError, error } = useQuery("comments", fetchComments);

    if (isLoading) return <Loading />
    if (isError) throw error;

    return children
}

export default CommentFetcher