import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import classNames from 'classnames';

@observer
class Header extends Component {
  @observable toggle = false;

  @action setState = ({
    toggle = this.toggle,
  } = {}) => {
    this.toggle = toggle;
  };

  render() {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button
        className={classNames('navbar-toggler', {
          collapsed: !this.toggle,
        })}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => {
          this.setState({ toggle: !this.toggle });
        }}
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div
        className={classNames('collapse', 'navbar-collapse', {
          show: this.toggle,
        })} id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>;
  }
}

export default Header;