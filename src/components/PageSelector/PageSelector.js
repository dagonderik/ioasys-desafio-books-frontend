import React from 'react';
import { BsFillArrowLeftCircleFill ,BsFillArrowRightCircleFill } from "react-icons/bs";

const Navigation = ({ bookList, changePage }) =>{
    return(
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p className='f3 black pa3'>
            Página {bookList.page} de {Math.ceil(bookList.totalPages)} <> </>
            <span className='dim pointer' onClick={() => changePage('back')} role='img' aria-label='Back'>
                <BsFillArrowLeftCircleFill/><> </>
            </span>
            <span className='dim pointer' onClick={() => changePage('forward')} role='img' aria-label='Forward'>
                <BsFillArrowRightCircleFill/>
            </span> 
        </p>
    </nav>
    )
}


export default Navigation;