import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import "./App.css";
import AnimatedRoutes from "./utils/AnimatedRoutes";

function App() {
  return (
    <>
      <Suspense fallback={<div>로딩중...</div>}>
        <AnimatedRoutes />
      </Suspense>
    </>
  );
}

export default App;
