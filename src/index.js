import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import store from "./redux";
import Home from "./component/home";
import FingerScan from "./component/FingerScan";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";
import IconExit from "./images/icon/exit";
import { listItem } from "./data/dataListItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Home
            nameOffice="PGD Thành Công"
            timeTransaction="09:48, 21 September 2019"
            title="Xin chào quý khách"
            desp="Mời quý khách lựa chọn giao dịch"
            listItem={listItem}
            valueBtn="Thoát"
            iconBtn={<IconExit />}
          />
        ),
      },
      {
        path: "main",
        element: (
            <FingerScan
              nameOffice="PGD Thành Công"
              timeTransaction="09:48, 21 September 2019"
            />
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
