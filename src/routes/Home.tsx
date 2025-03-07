import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { fetchComments } from "../api/fetch";
import ApiErrorBoundary from "../boundary/ApiErrorBoundary";
import ApiComments from "../component/ApiComments";

export const Home = () => {

  return (
    <div className="flex w-[100vw] flex-col h-[100vh] text-[20px] items-center justify-center">
      <ApiErrorBoundary>
        <ApiComments/>
      </ApiErrorBoundary>
    </div>
  );
};
