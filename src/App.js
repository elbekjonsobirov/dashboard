import React, { Component } from 'react';
import { MenuSharp } from '@mui/icons-material'
import Search from './components/search';
import Navbar from './components/navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Customers from './components/Customers/Customers'
import Products from './components/Products/Products'
import Account from './components/Account/Account'
import Settings from './components/Settings/Settings'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Error from './components/Error/Error'


import {Route, Routes} from 'react-router-dom'


class App extends Component {

  state = {
    MenuActive: true,
  }

  MenuLeftRigth = () => {
    const { MenuActive } = this.state
    this.setState({
      MenuActive: !MenuActive
    })
  }


  render() {
    const { MenuActive, UserPhoto } = this.state
    return (
      <div className='container'>
        <button onClick={this.MenuLeftRigth} className={MenuActive === false ? 'navbar-left-right' : 'navbar-left-right navbar-left-right-active'}>
          <MenuSharp className='navbar-btn-icon' />
        </button>
        <Search
          MenuActive={MenuActive}
          UserPhoto={UserPhoto}
        />
        <Navbar
          MenuLeftRigth={this.MenuLeftRigth}
          MenuActive={this.state.MenuActive}
        />
        <Routes>
            <Route path='/dashboard' element={
              <Dashboard
              MenuActive={this.state.MenuActive}
            />
            } />
            <Route path='/customers' element={
              <Customers 
                MenuActive={this.state.MenuActive}
                />
              } />
            <Route path='/products' element={
              <Products 
                MenuActive={this.state.MenuActive}              
                />
              } />
            <Route path='/account' element={
              <Account 
              MenuActive={this.state.MenuActive}              
              />
            } />
            <Route path='/settings' element={
              <Settings 
              MenuActive={this.state.MenuActive}              
              />
            }/>
            <Route path='/login' element={
              <Login 
                MenuActive={this.state.MenuActive}              
                />
              }/>
            <Route path='/register' element={
              <Register 
              MenuActive={this.state.MenuActive}              
              />
            }/>
            <Route path='/error' element={
              <Error 
              MenuActive={this.state.MenuActive}              
              />
            }/>
          </Routes>
      </div>
    );
  }
}

export default App;
