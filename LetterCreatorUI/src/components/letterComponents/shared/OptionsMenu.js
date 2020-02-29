import React, { Component } from "react";
import OptionsMenuSection from "./OptionsMenuSection";

export default class OptionsMenu extends Component {
    state = {

    }

    addMenu = () => {

    }

    render(){
        return (
            <div className="menu-container"> 
                {
                    this.props.menus.filter(m => m.title !== "Line Options").sort(m => m.placement).map(mS => <OptionsMenuSection menu={mS} />)
                }
                {
                    this.props.menus.filter(m => m.title === "Line Options").map(mS => <OptionsMenuSection menu={mS} />)
                }
            </div>
        );
    }
}