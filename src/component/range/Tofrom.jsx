import React from 'react';
import './style.css';
export const ToFrom = (props) => (
    <div className="head">
        <form onSubmit={props.handleSlider}>
            <label htmlFor="from"><b>From:</b></label>
            <input type="number" id="from" placeholder="$" onChange = {props.handleChange} name = "from"></input>
            <label htmlFor="to"><b>To:</b></label>
            <input type="number" id="to" placeholder="$" onChange = {props.handleChange} name = "to"></input>
            <button type="submit">Go</button>
        </form>
    </div>
);
