import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { fetchComments } from "../api/fetch";

export const Home = () => {
  const { data, isLoading, isError, error } = useQuery("comments", fetchComments);

  if (isLoading) return <p>Loading...</p>;
  if (isError) throw error;

  return (
    <div className="flex w-[100vw] flex-col h-[100vh] text-[20px] items-center justify-center">
      {data.length} comments loaded.
    </div>
  );
};
