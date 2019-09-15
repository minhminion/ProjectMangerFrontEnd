import React, { Component } from 'react'
import { Layout} from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from './Sidebar'
import Myheader from './Myheader'
import AppProject from './project/App';

const {Content, Footer} = Layout;


export default class SiderDemo extends React.Component {
  constructor(props)
  {
      super(props);
      this.state = {
      };
  }
  focusSearch = () =>
  {
    this.nameInput.focus();
  }


  render() {
    return (
    <Router>
      <Layout style={{ minHeight: '100vh' }} id='components-layout-demo-side'>
        <Sidebar/>
        <Layout>
          <Myheader />
          <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 20,
                minHeight: 280,
              }}
            >
              <Route path="/" exact render={ ( ) => (AppProject) } />
              <Route path="/dashboard" render={ ( ) => (<h2> Dashboard </h2>) } />
              <Route path="/project" component={AppProject} />
              
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </Router>
    );
  }
}