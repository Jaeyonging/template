import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "./store/configureStore";
import GlobalErrorBoundary from "./boundary/GlobalErrorBoundary";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GlobalErrorBoundary>
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
        <App />
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  </GlobalErrorBoundary>
);
