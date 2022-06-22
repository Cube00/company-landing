import React from 'react';

import {Link} from 'react-router-dom';

import {pageypos} from './header.utils';

import './header.styles.scss';

class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      scroll: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollListener)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener)
  }

  scrollListener = () =>{
    let pos = pageypos();
    if(pos !== 0){
      this.setState({
        scroll: !this.scroll
      })
    }else {
      this.setState({
        scroll: false
      })
    }
  }

  render(){
    return <>
      <div className="clear"></div>
      <div className={`header${this.state.scroll ? ' sticky-header' : ''}`}>
        <div className="logo"></div>
        <div className="menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/employees">Employee</Link></li>
          </ul>
        </div>
        <div className="feedback">
          <Link to="/feedback"><button>Feedback</button></Link>
        </div>
      </div>
    </>
  }
}

export default Header;
