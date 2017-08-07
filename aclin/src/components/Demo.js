import React, { Component } from "react";
import "../css/demo.css";
import DemoBGImg from "../images/gi-demo/demo-bg.png";
import DemoSidebarImg from "../images/gi-demo/demo-sidebar.png";
import DemoDashboardImg from "../images/gi-demo/demo-dashboard.png";

export default class Demo extends Component {
    constructor(props) {
        super(props);
    };

    render = () => {
        return (
            <div id="glimpzit-demo-container">
                {this.props.captionPosition === "top" && <div className="caption">
                    Scrollable demo of the GlimpzIt summary dashboard. Try scrolling the sidebar or the dashboard.
                </div>}
                <div id="page-wrapper">
                    <img src={DemoBGImg} alt="" className="static-bg"/>
                    <div id="sidebar-wrapper">
                        <img src={DemoSidebarImg} alt="" className="sidebar"/>
                    </div>
                    <div id="dashboard-wrapper">
                        <img src={DemoDashboardImg} alt="" className="dashboard"/>
                    </div>
                </div>
                {this.props.captionPosition === "bottom" && <div className="caption">
                    Scrollable demo of the GlimpzIt summary dashboard. Try scrolling the sidebar or the dashboard.
                </div>}
            </div>
        );
    };
}
