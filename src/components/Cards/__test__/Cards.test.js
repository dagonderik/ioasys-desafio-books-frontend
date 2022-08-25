import React from "react";
import ReactDOM from 'react-dom';
import Cards from './../Cards';
import renderer from "react-test-renderer";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Cards authors={["a","b"]} 
    title="title" 
    pageCount={10}
    publisher="publisher"
    published={1}
    imageUrl="imageUrl"
    onRouteChange={()=>{}}
    id={1}></Cards>,div)
})

it("matches snapshot", () =>{
    const tree = renderer.create(<Cards authors={["a","b"]} 
    title="title" 
    pageCount={10}
    publisher="publisher"
    published={1}
    imageUrl="imageUrl"
    onRouteChange={()=>{}}
    id={1}></Cards>).toJSON();
    expect(tree).toMatchSnapshot();
})