import React from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import PropTypes from "prop-types";

/**
 * PageSelector holds the buttons and information about the number of pages in the bookList
 */

const PageSelector = ({ bookList, changePage }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p className="f3 black pa3">
        Página {bookList.page} de {Math.ceil(bookList.totalPages)} <> </>
        <span
          className="dim pointer"
          onClick={() => changePage("back")}
          role="img"
          aria-label="Back"
        >
          <BsFillArrowLeftCircleFill />
          <> </>
        </span>
        <span
          className="dim pointer"
          onClick={() => changePage("forward")}
          role="img"
          aria-label="Forward"
        >
          <BsFillArrowRightCircleFill />
        </span>
      </p>
    </nav>
  );
};

PageSelector.propTypes = {
  /**
   * bookList holds the list of books got from the API
   */
  bookList: PropTypes.string,
  /**
   * changePage controls which page in the list of books is showing at the moment
   */
  changePage: PropTypes.func,
};

export default PageSelector;
