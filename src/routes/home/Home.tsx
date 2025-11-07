import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { fetchComments } from "../../api/fetch";
import ApiErrorBoundary from "../../component/ApiErrorBoundary";
import { CommentsFetcher } from "../../api/fetchHooks";
import HomeContainer from "../../component/Home/HomeContainer";

export const Home = () => {
  return (
    <ApiErrorBoundary>
      <CommentsFetcher>
        <HomeContainer/>
      </CommentsFetcher>
    </ApiErrorBoundary>
  );
};
