import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class ProjectItem1 extends Component {
constructor(props)
{
    super(props)
}

handleFlipping = () => {
  this.setState({ flipped: !this.state.flipped });
}

render() {

  return (
    <MDBCol>
        <MDBCard style={{ width: "22rem" }} key={this.props.key}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
            </MDBCardText>
            <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
        </MDBCard>
    </MDBCol>
    )
  }
}



export default ProjectItem1;