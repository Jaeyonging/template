import ApiErrorBoundary from "../boundary/ApiErrorBoundary";
import CommentFetcher from "../api/hooks/CommentFetcher";
import CommentsListContainer from "../component/CommentsListContainer";

export const Home = () => {

  return (
    <div className="flex w-[100vw] flex-col h-[100vh] text-[20px] items-center justify-center">
      <ApiErrorBoundary>
        <CommentFetcher>
          <CommentsListContainer/>
        </CommentFetcher>
      </ApiErrorBoundary>
    </div>
  );
};
