import { lazy } from "react";
import { Home } from "../routes/Home";
import Second from "../routes/Second";

interface RouteConfig {
  path: string;
  element: JSX.Element;
}


export const AppRouteConfig = {
  public: [
    {path: "/", element: <Home/>},
    {path: "/second", element: <Second/>}
  ],
  protected: [],
  admin: [] as RouteConfig[],
} as const;
