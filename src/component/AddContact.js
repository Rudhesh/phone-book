import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default class AddContact extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            name:"",
            contact:""
        }
    }

    updateInputName = (e) => {
        this.setState(
            {name: e.target.value}
        )
    }


    updateInputNumber = (e) => {
        this.setState(
            {contact: e.target.value}
        )
    }
    submit = (e) => {
        e.preventDefault()
        this.props.addContact({
            name:this.state.name ,
            contact:this.state.contact 
        })

    }


    render() {
        return (
<Form onSubmit={this.submit} >
                    <Form.Group className="mb-3 d-flex ">
                    <Form.Label className="mt-1 mx-2" horizontal>Name: </Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Tom"
                        value={this.state.name}
                        onChange={this.updateInputName}
                        />
                            <Form.Label className="mt-1 mx-2">Number: </Form.Label>

                        <Form.Control 
                        type="number" 
                        placeholder="+1234..."
                        value={this.state.contact}
                        onChange={this.updateInputNumber}
                        />
                    <Button
                        disabled={ !this.state.contact.length} 
                        className="mx-3" variant="success" type="submit"
                        size="sm">
                            Save
                            </Button>
                        
                    </Form.Group>


                    

                </Form>
  
        )
    }
}
