import React, { Component } from 'react';
import { MenuSharp } from '@mui/icons-material'
import Search from './components/search';
import Navbar from './components/navbar';
import Dashboard from './components/Dashboard/Dashboard';


class App extends Component {

  state = {
    MenuActive: true
  }

  MenuLeftRigth = () => {
    const { MenuActive } = this.state
    this.setState({
      MenuActive: !MenuActive
    })
  }

  render() {
    const { MenuActive } = this.state
    return (
      <div className='container'>
        <button onClick={this.MenuLeftRigth} className={MenuActive === false ? 'navbar-left-right' : 'navbar-left-right navbar-left-right-active'}>
          <MenuSharp className='navbar-btn-icon' />
        </button>
        <Search
          MenuActive={this.state.MenuActive}
        />
        <Navbar
          MenuLeftRigth={this.MenuLeftRigth}
          MenuActive={this.state.MenuActive}
        />
        <Dashboard
          MenuActive={this.state.MenuActive}
        />
      </div>
    );
  }
}

export default App;
