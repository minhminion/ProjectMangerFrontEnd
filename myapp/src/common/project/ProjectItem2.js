import React, { Component } from 'react'
import { Row, Col, Icon, Button, Popover, Typography } from 'antd'
import PropTypes from 'prop-types'

const { Text } = Typography

export default class ProjectItem2 extends Component {
    constructor(props)
    {
        super(props)
        this.state ={
            favorited: false,
            maxHeight: '0',
            opacity: '0',
            hover : false,
        }
    }

    handleMouseOver = (e) =>{
        this.setState({
            maxHeight: '500px',
            opacity: 1,
            hover: true
        })
        // this.handleHover
    }

    handleMouseLeave = (e) =>{
        this.setState({ 
            maxHeight : 0,
            opacity: 0,
            hover: false 
        });
    }


    handleFavorite = () => {
        this.setState({ 
            favorited : !this.state.favorited
        });
    }
    // componentDidMount(){
    //     window.addEventListener('load',this.handleHover)
    // }
    

    render() {
        const { title , members } = this.props.content
        const {favorited} = this.state
        const span = Math.round(24/members.length)
        return (
            <Col xl={{span:6}} lg={{span:8}} style={cardStyle}>
                {/* <!-- Normal Demo--> */}
                <div class="column" >
                    {/* <!-- Post--> */}
                    <div className={['post-module', this.state.hover ? '' : ''].join(' ')} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                    {/* <!-- Thumbnail--> */}
                        <div class="thumbnail">
                            <div className='date' onClick={this.handleFavorite} >
                                <Icon type='heart' theme={favorited ? 'filled' : ''} style={{fontSize:25,lineHeight:1.55,transition:'all 0.5s ease-in-out'}}/>
                            </div>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"/>
                        </div>
                    {/* <!-- Post Content--> */}
                        <div class="post-content">
                            <div class="category">Created By: Minhminh</div>
                            <h1 class="title">{title}</h1>
                            <Row className='sub_title' align="middle" type='flex'>
                                {
                                    members.map((member) => (
                                        <Col span={span} id={member.id}>
                                            <Popover style={{textAlign:'center'}} placement='bottom'  title={<Text strong>{member.name}</Text>} content='Programing Developer' >
                                                <img src={member.img} className='member-project' width={30} />
                                            </Popover>
                                        </Col>
                                    ))
                                }
                            </Row>
                            <div class="description" style={{opacity: this.state.opacity,maxHeight:this.state.maxHeight,display:this.state.display,...styles}}>
                                New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.
                            </div>
                            <Row class="post-meta">
                                <Col class="timestamp" lg={{span:12}} style={{lineHeight:2}}>
                                    <Icon type="clock-circle" /> 6 mins ago
                                </Col>
                                <Col class="comments" lg={{span:11}} style={{lineHeight:2}}>
                                    <Icon type="message" />
                                    <a href="#"> 39 comments</a>
                                </Col>
                                <Col lg={{span:1}}>
                                    <a>
                                        <Icon type="arrow-right" style={{fontSize:23}}/>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </Col>
        )
    }
}

const styles = {
    paddingBottom:'20px',
    transition: 'all 0.5s ease-in-out'
}

const cardStyle = {
    marginBottom: 30,
    borderRadius:'10%'
}



ProjectItem2.propTypes = {
    content: PropTypes.object.isRequired
}
