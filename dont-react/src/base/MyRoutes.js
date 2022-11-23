import React, { Component } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import StreamHome from "../stream/StreamHome";
import VRHome from "../vr/VRHome";
import TrendsHome from "../trends/TrendsHome";
import Home from "../base/Home";

export default class MyRoutes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="stream" element={<StreamHome />} />
                    <Route path="vr" element={<VRHome />} />
                    <Route path="trends" element={<TrendsHome />} />
                </Routes>
            </BrowserRouter>
        )
    }
}