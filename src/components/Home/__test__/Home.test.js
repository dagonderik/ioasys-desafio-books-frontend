import React from "react";
import ReactDOM from 'react-dom';
import Home from "../Home";
import renderer from "react-test-renderer";

const userTest = {
    data:{
        name:"name"
    }
}

const bookTest1={
    data:[
        {
        authors:['Sra. Ígor Oliveira', 'Marcelo Martins'],
        category: "Poesia",
        description: "Nihil facilis vel. Ut nobis porro labore. Est aspernatur quaerat blanditiis debitis id et excepturi voluptatem mollitia. Voluptates odio explicabo ut tempore cum corrupti sed voluptatem non. Libero recusandae velit commodi consequatur incidunt ut ea saepe. Voluptatem cupiditate quibusdam dignissimos sint ea adipisci illo.\n \rSed et sint similique est ut. Tempora possimus facilis et sapiente recusandae sunt qui ut a. Est distinctio consequatur aut. Omnis autem dicta illo eaque. Quas laborum neque et pariatur.",
        id: "61c9c28fcc498b5c08845d06",
        imageUrl: "https://d2drtqy2ezsot0.cloudfront.net/Book-3.jpg",
        imageurl:"sads",
        isbn10: "6708847316",
        isbn13: "216-6708847316",
        language: "Inglês",
        pageCount: 298,
        published: 2013,
        publisher: "Santos, Carvalho and Franco",
        title: "Accusantium nobis"
        }
    ],
    page:1,
    totalItems:1,
    totalPages:1,
}



it("renders without crashing", () => {  
    const div = document.createElement("div");
    ReactDOM.render(<Home
    onRouteChange={()=>{}}
    color=""
    bookList={bookTest1}
    user={userTest}
    route="route"
    showModal={()=>{}}
    changePage={()=>{}}></Home>,div)
})

// it("renders without crashing", () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<Home
//     onRouteChange={()=>{}}
//     color=""
//     bookList={{}}
//     user={userTest}
//     route="route"
//     showModal={true}
//     handleCloseModal={()=>{}}
//     changePage={()=>{}}
//     ></Home>,div)
// })