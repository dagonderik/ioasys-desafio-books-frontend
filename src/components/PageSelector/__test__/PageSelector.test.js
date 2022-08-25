import React from "react";
import ReactDOM from 'react-dom';
import PageSelector from "../PageSelector";
import renderer from "react-test-renderer";

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
    ReactDOM.render(<PageSelector
    bookList={bookTest}
    changePage={()=>{}}></PageSelector>,div)
})

it("matches snapshot", () =>{
    const tree = renderer.create(<PageSelector
        bookList={bookTest}
        changePage={()=>{}}></PageSelector>).toJSON();
    expect(tree).toMatchSnapshot();
})