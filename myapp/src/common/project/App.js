import React, { Component } from 'react'
import ProjectList from './ProjectList';
import AddProject from './AddProject';
import uuid from 'uuid'
import img1 from './../../asset/image/user/avatar1.png'
import img2 from './../../asset/image/user/avatar2.png'
import img3 from './../../asset/image/user/avatar3.png'
import img4 from './../../asset/image/user/avatar4.png'
import { Button, Pagination, Row, Col, Typography } from 'antd'
import ButtonGroup from 'antd/lib/button/button-group';

const { Title } = Typography

export default class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            view: true,
            contents:[
                {
                    id: uuid.v4(),
                    title: "React App",
                    completed : false,
                    step : 3,
                    members:[
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img1
                        },
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img2
                        },
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img3
                        },
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img4
                        }
                    ]
                },
                {
                    id: uuid.v4(),
                    title: "Vue App",
                    completed : false,
                    step : 3,
                    members:[
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img1
                        },
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img2
                        },
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img3
                        },
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img4
                        }
                    ]
                },
                {
                    id: uuid.v4(),
                    title: "Angular App",
                    completed : false,
                    step : 3,
                    members:[
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img1
                        },
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img2
                        },
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img3
                        },
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img4
                        }
                    ]
                },
                {
                    id: uuid.v4(),
                    title: "Node App",
                    completed : false,
                    step : 3,
                    members:[
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img1
                        },
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img2
                        },
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img3
                        },
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img4
                        },
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img1
                        },
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img2
                        },
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img3
                        },
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img4
                        }
                    ]
                },
                {
                    id: uuid.v4(),
                    title: "Angular App",
                    completed : false,
                    step : 3,
                    members:[
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img1
                        },
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img2
                        },
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img4
                        }
                    ]
                },
                {
                    id: uuid.v4(),
                    title: "Node App",
                    completed : false,
                    step : 3,
                    members:[
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img1
                        },
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img2
                        },
                        {
                            id: uuid.v4(),
                            name: 'minhminion',
                            img:img3
                        },
                    ]
                },
            ],
            totalContent: 8,
            minValue:0,
            maxValue:8,
        }   
    }

    addProject = (values)=>{
        console.log(values)
        const newProject = {
            id: uuid.v4(),
            title: values.title,
            completed : false,
            step : 3,
            members:[
                {                   
                    id: uuid.v4(),
                    name: 'minhminion',
                    img:img4
                },
            ]
        }

        this.setState({ contents :[...this.state.contents,newProject]})
    }


    handlePaging =(value) =>{
        if(value <= 1)
        {
            this.setState({
                minValue: 0,
                maxValue: 8,
              });
        }
        else{
            this.setState({
                minValue: (value-1)*this.state.totalContent,
                maxValue: value*this.state.totalContent
              });
        }
    }

    handleView = () => {
        this.setState({ 
            view: !this.state.view
        })
    }

    render()
    {
        const data = this.state.contents;
        return(
            <div>
                <Row style={{ borderBottom:'1px #9999 solid' , marginBottom:10}}>
                    <Col lg={{span:5}}>
                        <Title level={2}>My Projects</Title>
                    </Col>
                    <Col lg={{span:2 , offset:17}}>
                        <AddProject addProject={this.addProject}/>
                    </Col>
                </Row>
                <Row style={{ marginBottom:20}}>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                    <Col lg={{ span:2 , offset: 22 }}>
                        <ButtonGroup>
                            <Button icon='table' size='large' disabled={this.state.view} onClick={this.handleView}/>
                            <Button icon='unordered-list' size='large' disabled={!this.state.view} onClick={this.handleView} />
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row gutter={50}>
                    <ProjectList contents={data} min={this.state.minValue} max={this.state.maxValue}/>
                </Row>
                <Pagination 
                    defaultCurrent={1}
                    defaultPageSize={this.state.totalContent}
                    onChange={this.handlePaging}
                    total={this.state.contents.length}
                    />
            </div>
        )
    }
}
