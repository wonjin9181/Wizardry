
import React, { Component } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./create_user.css";
// import Dropdown  from "../DropDownMenue.js"
class CreateUser extends Component {

  handleCatChange(e) {
    this.setState({
      storeType: e.target.value
    })
    console.log(this.state.storeType)
  }

  render() {
    return (
      <div>

        <aside id="createuser">
          <h1>Wizard game</h1>

          <Form >
            <Form.Group as={Row} controlId="formHorizontalName">
              <Form.Label column sm={2}>
                Name
                </Form.Label>
              <Col sm={10}>
                <Form.Control type="email" placeholder="Name" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalName">
              <Form.Label column sm={2}>
                House
                </Form.Label>
              <Col sm={10}>
            <Form.Check
              inline
              type="radio"
              label="Fire"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />

            <Form.Check
              inline
              type="radio"
              label="Water"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />


            <Form.Check
              inline
              type="radio"
              label="Earth"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />


            <Form.Check
              inline
              type="radio"
              label="Air"
              name="formHorizontalRadios"
              id="formHorizontalRadios4"
            />
            </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Email
                </Form.Label>
              <Col sm={10}>
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>

            <Button id="createUserBtn" variant="primary" type="submit">
              Create account </Button>
          </Form>
        </aside>

      </div>
    )

  }

}


export default CreateUser;