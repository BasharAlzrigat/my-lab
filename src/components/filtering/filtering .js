import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./filtering.css";
import data from '../../data/data.json'

class Filtering extends Component {

render() {
    return (
        <Form>
            <fieldset id= "horned-select">
                <Form.Group className="mb-3">
                    <Form.Label>Select Number of Hornes</Form.Label>
                    <Form.Select defualtValue="0" onChange = {(e) => this.props.handleChange(e)} >
                        <option value="0">all</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">100</option>
                    </Form.Select>
                </Form.Group>
            </fieldset>
        </Form>
    );
}
}

export default Filtering;
