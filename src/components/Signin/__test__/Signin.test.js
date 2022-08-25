import React from "react";
import ReactDOM from 'react-dom';
import Signin from "../Signin";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Signin
    onEmailChange={()=>{}}
    onPasswordChange={()=>{}}
    onSubmit={()=>{}}></Signin>,div)
})

it("matches snapshot", () =>{
    const tree = renderer.create(<Signin
        onEmailChange={()=>{}}
        onPasswordChange={()=>{}}
        onSubmit={()=>{}}></Signin>).toJSON();
    expect(tree).toMatchSnapshot();
})