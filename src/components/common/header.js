import React from 'react'
import { Menu } from 'antd';

const AppHeader = () => {
    return (
    <div className="container-fluid">
    <div className="header">
    <div className="logo">
    <i className="fas fa-server fa-lg"></i>  
    <span>&nbsp;&nbsp;&nbsp;FULLSTACKCODECAMP</span>  
    </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="2">Login / SignUp</Menu.Item>
        
        
      </Menu>
    </div>  
    </div>  
    );
}

export default AppHeader;
