import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Home.css";
import CardList from "../CardList/CardList.js";
import PageSelector from "../PageSelector/PageSelector.js";
import ReactModal from "react-modal";
import BookInformation from "../BookInformation/BookInformation";
import { AiOutlineCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";

/**
 * Component that renders the main screen of the app, it controls what will be draw based on the value of "route"
 */

const modalConfig = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.32)",
  },
  content: {
    position: "absolute",
    top: "10%",
    left: "20%",
    right: "20%",
    bottom: "10%",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  },
};

class Home extends React.Component {
  componentDidMount() {
    this.props.pageUpdate(1);
  }

  render() {
    if (this.props.bookList) {
      const {
        onRouteChange,
        color,
        bookList,
        user,
        route,
        showModal,
        handleCloseModal,
        changePage,
      } = this.props;
      return (
        <div className="full-box" style={{ background: color }}>
          <Navigation user={user} onRouteChange={onRouteChange} />
          <CardList bookList={bookList.data} onRouteChange={onRouteChange} />
          <PageSelector bookList={bookList} changePage={changePage} />
          <ReactModal
            onRequestClose={handleCloseModal}
            appElement={document.getElementById("app")}
            style={modalConfig}
            isOpen={showModal}
            contentLabel="Book Details"
          >
            <AiOutlineCloseCircle
              style={{
                marginRight: "20px",
                position: "absolute",
                right: "0",
                width: "30",
                height: "30",
              }}
              onClick={handleCloseModal}
            />
            <BookInformation route={route} bookList={bookList.data} />
          </ReactModal>
        </div>
      );
    }
  }
}

Home.propTypes = {
  /**
   * colors holds the information about the background of this page
   */
  color: PropTypes.string,
  /**
   * bookList holds the list of books got from the API
   */
  bookList: PropTypes.array,
  /**
   * user holds all the information about the user got from the API
   */
  user: PropTypes.object,
  /**
   * route holds the information of which screen should be showing
   */
  route: PropTypes.string,
  /**
   * showModal tracks if the modal with the selected book information should be showing or not
   */
  showModal: PropTypes.bool,
  /**
   * handleCloseModal tracks the showModal variable and sets it to false when the modal is closed
   */
  handleCloseModal: PropTypes.func,
  /**
   * onRouteChange is a funtion that receives a value to determine which screen to show
   */
  onRouteChange: PropTypes.func,
  /**
   * changePage controls which page in the list of books is showing at the moment
   */
  changePage: PropTypes.func,
};

export default Home;
