import React, { useReducer } from "react";

const countReducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText };
        case "TOGGLE_SHOW_TEXT":
            return { count: state.count, showText: !state.showText };
        default:
            return state;
    }
};

const ReducerTutorial = () => {
    const [state, dispatch] = useReducer(countReducer, { count: 0, showText: true });

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => {
                dispatch({ type: "INCREMENT" });
                dispatch({ type: "TOGGLE_SHOW_TEXT" });
            }}>Click Here</button>
            {state.showText && <p>This is a text</p>}
        </div>
    );
};

export default ReducerTutorial;
