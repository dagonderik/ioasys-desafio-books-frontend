import React from "react";
import ReactDOM from 'react-dom';
import renderer from "react-test-renderer";
import CardList from "./../CardList";

const bookTest=[
    {
        id:1,
        authors:["authors"],
        title:"title",
        pageCount:1,
        publisher:"publisher",
        published:"published",
        imageUrl:"imageURL"
    },
    {
        id:2,
        authors:["authors"],
        title:"title",
        pageCount:1,
        publisher:"publisher",
        published:"published",
        imageUrl:"imageURL"
    },
    {
        id:3,
        authors:["authors"],
        title:"title",
        pageCount:1,
        publisher:"publisher",
        published:"published",
        imageUrl:"imageURL"
    }

]

it("renders without crashing", () => {  
    const div = document.createElement("div");
    ReactDOM.render(<CardList 
    bookList={bookTest}
    onRouteChange={()=>{}}></CardList>,div)
})

it("matches snapshot", () =>{
    const tree = renderer.create(<CardList 
    bookList={bookTest}
    onRouteChange={()=>{}}></CardList>).toJSON();
    expect(tree).toMatchSnapshot();
})