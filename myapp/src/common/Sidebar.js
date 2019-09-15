import React, { Component } from 'react'
import { Layout, Menu, Icon} from 'antd';
import {BrowserRouter as Router, Route ,Link} from 'react-router-dom'
import logo from './../asset/image/logo.svg'
import banana from './../asset/image/banana-boy.svg'

const { Sider } = Layout;
const { SubMenu } = Menu;

const menuItems =
    [
        {
            key: 'dashboard',
            icon:'bar-chart',
            title: "Dash Board",
            notice:false,
        },
        {
            key: 'project',
            icon:'project',
            title: "My Projects",
            notice:true,
        }
    ]

export default class Sidebar extends Component {
    constructor(props)
    {
      super(props);
      this.state = {
        collapsed: false,
      };
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
    
      focusSearch = () =>
      {
        this.nameInput.focus();
      }
    
      changeLogoStyle = () =>
      {
        const collapsed = this.state.collapsed;
        if(collapsed)
        {
          
        }
      }

    render() {
        // const { location } = this.props
        const {collapsed}  =this.state
        let logoClass = ['my-logo']
        let menuGroupClass = ['menu-item-group']
        if(collapsed) {
            logoClass.push('collapse');
        }
        else
        {
            menuGroupClass.push('non-collapse');
        }
        return (
            <Sider  className='side-bar' 
                theme="light" 
                width='260px'
                collapsible 
                collapsed={collapsed} 
                onCollapse={this.onCollapse}>
          <div className="logo" >
                <a id="logo" href="/" className={logoClass.join(' ')}>
                  <img alt="logo" src={logo} />
                  <img alt="Banana" src={banana} />
              </a>
          </div>
          <Menu theme="light" defaultSelectedKeys={'project'} mode="inline">
            <Menu.ItemGroup key="g1" title={
              <span style={collapsed ? {display:'none'}:{display:'block'}}>PROJECTS</span>
            }>
            {menuItems.map((menuItem) =>(
              <Menu.Item key={menuItem.key}>
                  <Link to={'/'+ menuItem.key}>
                      <Icon type={menuItem.icon} style={{fontSize: 20}} />
                      <span>
                          {menuItem.title}
                      </span>
                  </Link>
                </Menu.Item>
            ))}
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title={
              <span style={collapsed ? {display:'none'}:{display:'block'}}>ACCOUNT</span>
            }>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
              
            >
              <Menu.ItemGroup title="" className={menuGroupClass.join(' ')}>
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </Menu.ItemGroup>

            </SubMenu>
            {/* <Menu.Divider /> */}
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
            </ Menu.ItemGroup>
          </Menu>
        </Sider>
        )
    }
}
