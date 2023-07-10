import React from "react";
import { useLocation } from "react-router";

export default function Resume() {
    let { state } = useLocation();
    return (
        <div>
            <h3>имя: {state.name}</h3>
            <h3>фамилия: {state.surname}</h3>
            <h3>должность: {state.job}</h3>
        </div>
    );
}
