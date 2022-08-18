import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Home.css';
import CardList from '../CardList/CardList.js'
import PageSelector from '../PageSelector/PageSelector.js'
import ReactModal from 'react-modal';
import BookInformation from '../BookInformation/BookInformation';

const modalConfig = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '150px',
      left: '150px',
      right: '150px',
      bottom: '150px',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  }

const Home = ({ onRouteChange, color, bookList, user, route, showModal, handleCloseModal}) =>{

    return(
        <div className="full-box"style={{background: color}}>
            {route === "Home"
            ?<><Navigation
                    user={user}
                    onRouteChange={onRouteChange} />
                    <CardList bookList={bookList.data}
                    onRouteChange={onRouteChange} />
                    <PageSelector bookList={bookList} />
                    </>
                :<><Navigation
                    user={user}
                    onRouteChange={onRouteChange} />
                    <CardList bookList={bookList.data}
                    onRouteChange={onRouteChange} />
                    <PageSelector bookList={bookList}/>
                    <ReactModal 
                    //style={modalConfig}
                        isOpen={showModal}
                        contentLabel="Book Details"
                        >
                        <button className='br4 b f5' style={{ position: "absolute", right:"0"  }} onClick={handleCloseModal}>❌</button>
                        <BookInformation
                        route={route}
                        bookList={bookList.data}/>
                    </ReactModal>
                    </>
            }
        </div>
    )
}

export default Home;