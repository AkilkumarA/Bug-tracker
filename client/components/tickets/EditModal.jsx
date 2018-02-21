import React from 'react';
import axios from 'axios';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class EditModal extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            ticket: {
                title: '',
                description: '',
                reporter: '',
                assignee: '',
                status: '',
                severity: ''
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.init = this.init.bind(this);

    };

    init(selectedTicket){
        this.setState({
            ...this.state,
            ticket:{
                ...this.state.ticket,
                title: selectedTicket.title,
                description: selectedTicket.description,
                reporter: selectedTicket.reporter,
                assignee: selectedTicket.assignee,
                status: selectedTicket.status,
                severity: selectedTicket.severity
            }
        });
    }

    clearState(){
        this.setState({
            ...this.state,
            ticket: {
                title: '',
                description: '',
                reporter: '',
                assignee: '',
                status: '',
                severity: ''
            }
        });
    }

    handleChange(elementId, element) {
        switch (elementId) {
            case "title":
                this.setState({
                    ...this.state,
                    ticket:{
                        ...this.state.ticket,
                        title: element.target.value
                    }
                });
                break;
            case "description":
                this.setState({
                    ...this.state,
                    ticket:{
                        ...this.state.ticket,
                        description: element.target.value
                    }
                });
                break;
            case "reporter":
                this.setState({
                    ...this.state,
                    ticket:{
                        ...this.state.ticket,
                        reporter: element.target.value
                    }
                });    
                break;
            case "assignee":
                this.setState({
                    ...this.state,
                    ticket:{
                        ...this.state.ticket,
                        assignee: element.target.value
                    }
                });    
                break;
            case "status":
                this.setState({
                    ...this.state,
                    ticket:{
                        ...this.state.ticket,
                        status: element
                    }
                });    
                break;
            case "severity":
                this.setState({
                    ...this.state,
                    ticket:{
                        ...this.state.ticket,
                        severity: element
                    }
                });    
                break;
        }
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={() => {
                    this.props.handleClose(this.props.id);
                    this.clearState();
                }}
            />,
            <FlatButton
                label="Edit"
                primary={true}
                onClick={() => {
                    this.props.editTicket(this.props.selectedTicketId, this.state.ticket);
                    this.clearState();
                }}
            />,
        ];
        return (
            <Dialog
                title="Edit Ticket"
                actions={actions}
                modal={false}
                open={this.props.open}
                onRequestClose={() => this.props.handleClose(this.props.id)}
                autoScrollBodyContent={true}
            >
                <div>
                    <TextField
                        id="title"
                        floatingLabelText="Title"
                        style={{width:"100%"}}
                        value={this.state.ticket.title}
                        onChange={(event) => this.handleChange("title", event)}
                    /><br />
                    <TextField 
                        id="description"
                        floatingLabelText="Description"
                        multiLine={true}
                        rows={3}
                        style={{width:"100%"}}
                        value={this.state.ticket.description}
                        onChange={(event) => this.handleChange("description", event)}
                    /><br />
                    <TextField
                        id="reporter"
                        floatingLabelText="Reporter"
                        style={{width:"100%"}}
                        value={this.state.ticket.reporter}
                        onChange={(event) => this.handleChange("reporter", event)}
                    /><br />
                    <TextField
                        id="assignee"
                        floatingLabelText="Assignee"
                        style={{width:"100%"}}
                        value={this.state.ticket.assignee}
                        onChange={(event) => this.handleChange("assignee" ,event)}
                    /><br />
                    <SelectField
                        id="status"
                        floatingLabelText="Status"
                        value={this.state.ticket.status}
                        onChange={(event, index, value) => this.handleChange("status", value)}
                    >
                        <MenuItem value="Open" primaryText="Open" />
                        <MenuItem value="In progress" primaryText="In progress" />
                        <MenuItem value="Done" primaryText="Done" />
                    </SelectField>
                    <br />
                    <SelectField
                        id="severity"
                        floatingLabelText="Severity"
                        value={this.state.ticket.severity}
                        onChange={(event, index, value) => this.handleChange("severity", value)}
                    >
                        <MenuItem value="Low" primaryText="Low" />
                        <MenuItem value="Medium" primaryText="Medium" />
                        <MenuItem value="High" primaryText="High" />
                        <MenuItem value="Critical" primaryText="Critical" />
                    </SelectField>
                    <br />
                </div>
            </Dialog>
        );
    }
}

export default EditModal;