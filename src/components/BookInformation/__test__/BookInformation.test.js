import React from "react";
import ReactDOM from 'react-dom';
import BookInformation from "../BookInformation";
import renderer from "react-test-renderer";

const test=[
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
    ReactDOM.render(<BookInformation
    route={1}
    bookList={test}></BookInformation>,div)
})

it("matches snapshot", () =>{
    const tree = renderer.create(<BookInformation
        route={1}
        bookList={test}></BookInformation>).toJSON();
    expect(tree).toMatchSnapshot();
})