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
      backgroundColor: 'rgba(0, 0, 0, 0.55)'
    },
    content: {
      position: 'absolute',
      top: '10%',
      left: '20%',
      right: '20%',
      bottom: '10%',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  }

  

const Home = ({ onRouteChange, color, bookList, user, route, showModal, handleCloseModal, changePage}) =>{

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
                    <PageSelector 
                    onRouteChange={onRouteChange}
                    bookList={bookList}
                    changePage={changePage}/>
                    <ReactModal 
                        onRequestClose={handleCloseModal}
                        appElement={document.getElementById('app')}
                    style={modalConfig}
                        isOpen={showModal}
                        contentLabel="Book Details"
                        
                        >
                        <button className='br4 b f5' style={{ position: "absolute", right:"0"  }} onClick={handleCloseModal}><span role='img' aria-label='Close'>❌</span></button>
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