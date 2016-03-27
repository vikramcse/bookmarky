import React from 'react';
import {Link} from 'react-router';

class Navbar extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <Link to='/' className='navbar-brand'>
            Bookmarky
          </Link>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <form ref='searchForm' className='navbar-form navbar-left animated' >
            <div className='input-group'>
              <input type='text' className='form-control'/>
              <span className='input-group-btn'>
                <button className='btn btn-default' >
                  <span className='glyphicon glyphicon-search'></span>
                </button>
              </span>
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
