import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { dashBoard, withoutSideBar } from "./routes";
export default function Router() {

    return (
        <>
            <Routes>
                {withoutSideBar.map((_v, _i) => {
                    console.log(_v);
                    return (
                        <Route
                            key={_i}
                            path={_v.path}
                            exact
                            element={<GiftLayout children={_v.component} flag={_v.flag} next_url={_v.next_url} back_url={_v.back_url} button={_v.button} />}
                        />
                    );
                })}
                {dashBoard.map((_v, _i) => {
                    return (
                        <Route
                            key={_i}
                            path={_v.path}
                            exact
                            element={<ProtectedRoute children={_v.component} />}
                        // element={<ProtectedRoute children={_v.component} />}
                        />
                    );
                })}
                {/* <Route path="/*" element={<Layout children={<Page404 />} />} /> */}
            </Routes>
        </>
    );
}

const ProtectedRoute = ({ children, logged }) => {
    if (!logged) {
        return <DashboardLayout children={children} />
    }
    return <Navigate to="/login" replace />;
};