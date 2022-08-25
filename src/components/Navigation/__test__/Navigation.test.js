import React from "react";
import ReactDOM from 'react-dom';
import Navigation from "../Navigation";
import renderer from "react-test-renderer";

const userTest = {
    data:{
        name:"name"
    }
}

it("renders without crashing", () => {  
    const div = document.createElement("div");
    ReactDOM.render(<Navigation
    onRouteChange={()=>{}}
    user={userTest}></Navigation>,div)
})

it("matches snapshot", () =>{
    const tree = renderer.create(<Navigation
        onRouteChange={()=>{}}
        user={userTest}></Navigation>).toJSON();
    expect(tree).toMatchSnapshot();
})