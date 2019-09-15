import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Icon, Avatar, Col } from 'antd';
const { Meta } = Card
 
export default class ProjectItem extends Component {
    render()
    {
        const { title , completed , step} = this.props.content
        return(
        <Col xl={{span:6}} lg={{span:8}} style={cardStyle}>
            <Card bordered
                key={this.props.key}
                // style={{ width: 300 }}
                cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />,
                ]}
            >
                <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={title}
                description="This is the description"
                />
            </Card>
        </Col>
        )
        
    }
}

const cardStyle = {
    marginBottom: 30,
    borderRadius:'10%'
}

ProjectItem.propTypes = {
    content: PropTypes.object.isRequired
}
