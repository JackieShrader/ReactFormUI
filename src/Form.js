import React from 'react';
import {Button, Jumbotron, Container, Forms} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Form extends React.Component{
    state = {
        firstName: '',
        lastName: '',
        npiNum: '',
        bussAddress: '',
        phone: '',
        email: '',
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        console.log(this.state);

        //clears fields after submission
        this.setState({
            firstName: '',
            lastName: '',
            npiNum: '',
            bussAddress: '',
            phone: '',
            email: '',
        })
    };

    render(){
        return(
            <Container>
            <Jumbotron>
            <h3>Healthcare Registration Form</h3>
            <form>
                <div class="form-group">
                <input 

                name="firstName"
                placeholder='First name...'
                class="form-control"
                value={this.state.firstName}
                onChange={e => this.change(e)} 
                />
                <br />

                <input 
                name="lastName"
                placeholder='Last name...' 
                class="form-control"
                value={this.state.lastName} 
                onChange={e => this.change(e)} 
                />
                <br />

                <input 
                name="npiNum" 
                type="number"
                placeholder='NPI number...' 
                class="form-control"
                value={this.state.npiNum} 
                onChange={e => this.change(e)} 
                />
                <br />

                <input
                name="bussAddress" 
                placeholder='Business address...' 
                class="form-control"
                value={this.state.bussAddress} 
                onChange={e => this.change(e)} 
                />
                <br />

                <input 
                name="phone"
                type="tel"
                placeholder='Telephone number...' 
                class="form-control"
                value={this.state.phone} 
                onChange={e => this.change(e)} 
                />
                <br />

                <input 
                name="email"
                type="email"
                id="email"
                placeholder='Email address...' 
                class="form-control"
                value={this.state.email} 
                onChange={e => this.change(e)} 
                />
                <br />
                </div>
                <Button onClick={e => this.onSubmit(e)}> Submit</Button> 

            </form>
            </Jumbotron>
            </Container>
            
        )
    }
}