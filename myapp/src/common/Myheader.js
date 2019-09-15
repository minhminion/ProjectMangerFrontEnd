import React, { Component } from 'react'
import { Popover } from 'antd';
import { Layout, Menu, Icon, Input, Badge, Row, Col, Typography, Dropdown} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import UserImg from './../asset/image/user/avatar4.png'

const { Title, Text } = Typography
const {Header} = Layout;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="/"><Icon type="user" />Profile</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="/"><Icon type="logout" /> Log out</a>
    </Menu.Item>
  </Menu>
);

export default class Myheader extends Component {
    render() {
        return (
            <Header className='menuBar' style={{  padding: 16 }}>
            <Row>
              <Col xs={{span:0}} lg={{span:10, offset:1}}>
                <Input
                    className='nav-input-search'
                    placeholder='Search...'
                    onFocus={this.focusSearch}
                    allowClear
                    onSearch={value => console.log(value)}
                    style={{ width: '100%' ,margin:0 , border:'none' ,float:'left'}}
                    size='large'
                    ref={(input) => { this.nameInput = input; }}
                    prefix={<Icon type='search' className='btn-search' onClick={this.focusSearch}/>}
                />
              </Col>
              <Col xs={{ span: 2 , offset:15}} lg={{ span: 1}} className='btn-search-a right-menu-item' >
                  
                  <Popover
                    trigger='click' placement='bottom' content={
                      <Input.Search
                          placement='leftBottom'
                          placeholder='Search...'
                          allowClear
                          style={{width:500}}
                          onSearch={value => console.log(value)}
                      />
                    }
                  >
                    <div className='circle-base notification'>
                      <Icon type='search' className='btn-notice' style={{ fontSize: 20 }}/>
                    </div>
                  </Popover>
              </Col>
              <Col xs={{ span: 2}} lg={{ span: 1 , offset: 9}} className='right-menu-item'>
                <Badge dot>
                    <Icon type='notification' className='btn-notice' style={{ fontSize: 20 }}/>
                </Badge>
              </Col>
              <Col xs={{ span: 5}} lg={{ span: 3}}  className='right-menu-item'>
                <Dropdown overlay={menu} trigger={['click']}>
                  <div className='circle-base user'>
                    <img src={UserImg} style={UserImgStyle}/>
                    <Text strong>Hi, Minh</Text>
                    <Icon type="down" style={{marginLeft: 10 , fontSize:15}}/>
                  </div>
                </Dropdown>
              </Col>

            </Row>
          </Header>
        )
    }
}

const UserImgStyle = {
    height:40,
    width:40,
    borderRadius:'50%',  
    marginRight: 30,
    marginBottom: 10,
    backgroundColor: '#64CCBD',
}
