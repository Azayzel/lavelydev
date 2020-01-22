import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
        <nav
          className="uk-navbar-container"
          uk-navbar="true"
          style={{ position: "relative", zIndex: "980" }}
        >
          <div className="uk-navbar-center">
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li className="uk-active">
                  <a href="#">Feed</a>
                </li>
                <li>
                  <a href="#">Snippets</a>
                  <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li className="uk-active">
                        <a href="#">Active</a>
                      </li>
                      <li>
                        <a href="#">Item</a>
                      </li>
                      <li>
                        <a href="#">Item</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">Me</a>
                </li>
              </ul>
            </div>
            <div className="uk-navbar-right uk-margin-left">
              <div className="uk-navbar-item uk-width-1-1">
                <form className="uk-search uk-search-default">
                  <span className="uk-search-icon-flip" uk-search-icon="true" />
                  <input
                    className="uk-search-input"
                    type="search"
                    placeholder="Search..."
                  />
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
