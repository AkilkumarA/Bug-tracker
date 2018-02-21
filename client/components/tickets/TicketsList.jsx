import React from 'react';
import axios from 'axios';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import ExpandLessIcon from 'material-ui/svg-icons/navigation/expand-less';

import DeleteModal from './DeleteModal';
import CreateModal from './CreateModal';
import EditModal from './EditModal';

var clientConfig = require('../../../config').client;

class TicketsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tickets: [],
            selectedTicketId: 0,
            expandedTicketId: 0,
            isCreateModalOpen: false,
            isEditModalOpen: false,
            isDeleteModalOpen: false
        }
    };

    componentWillMount() {
        this.init();
    }

    init() {
        const URL = 'http://' + clientConfig.mongoAPI.HOST + clientConfig.mongoAPI.BASE_PATH;
        axios({
            method: 'get',
            url: URL
        }).then(response => {
            this.setState({
                ...this.state,
                tickets: response.data.tickets
            });
        }).catch((error) => {
            console.log('Error: ' + error);
        });
    }

    handleExpand = (ticketId) => {
        if (this.state.expandedTicketId == ticketId)
            ticketId = 0;
        this.setState({
            ...this.state,
            expandedTicketId: ticketId
        });
    }

    handleModalOpen = (modalId, ticketId) => {
        switch (modalId) {
            case "createModal":
                this.setState({
                    ...this.state,
                    isCreateModalOpen: true
                });
                break;
            case "editModal":
                var selectedTicket = {};
                this.state.tickets.forEach(
                    function iterator(ticket) {
                        if (ticketId == ticket._id)
                            selectedTicket = ticket;
                    }
                );
                this.setState({
                    ...this.state,
                    selectedTicketId: ticketId,
                    isEditModalOpen: true
                });
                this.refs.editModal.init(selectedTicket);
                break;
            case "deleteModal":
                this.setState({
                    ...this.state,
                    selectedTicketId: ticketId,
                    isDeleteModalOpen: true
                });
                break;
        }
    };

    handleModalClose = (modalId) => {
        switch (modalId) {
            case "createModal":
                this.setState({
                    ...this.state,
                    isCreateModalOpen: false
                });
                break;
            case "editModal":
                this.setState({
                    ...this.state,
                    selectedTicketId: 0,
                    isEditModalOpen: false
                });
                break;
            case "deleteModal":
                this.setState({
                    ...this.state,
                    selectedTicketId: 0,
                    isDeleteModalOpen: false
                });
                break;
        }
    };

    createTicket = (ticket) => {
        const URL = 'http://' + clientConfig.mongoAPI.HOST + clientConfig.mongoAPI.BASE_PATH;
        axios({
            method: 'post',
            url: URL,
            headers: {
                'Content-Type': 'application/json'
            },
            data: ticket
        }).then((response) => {
            this.init();
        }).catch((error) => {
            console.log('Error: ' + error);
        });

        this.setState({
            ...this.state,
            isCreateModalOpen: false
        });
    }

    editTicket = (ticketId, ticket) => {
        const URL = 'http://' + clientConfig.mongoAPI.HOST + clientConfig.mongoAPI.BASE_PATH + '/' + ticketId;
        axios({
            method: 'put',
            url: URL,
            headers: {
                'Content-Type': 'application/json'
            },
            data: ticket
        }).then((response) => {
            this.init();
        }).catch((error) => {
            console.log('Error: ' + error);
        });

        this.setState({
            ...this.state,
            isEditModalOpen: false
        });
    }

    deleteTicket = (ticketId) => {
        const URL = 'http://' + clientConfig.mongoAPI.HOST + clientConfig.mongoAPI.BASE_PATH + '/' + ticketId;
        axios({
            method: 'delete',
            url: URL
        }).then((response) => {
            this.init();
        }).catch((error) => {
            console.log('Error: ' + error);
        });

        this.setState({
            ...this.state,
            isDeleteModalOpen: false
        });
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div>
                        <FlatButton
                            label="Create Ticket"
                            primary={true}
                            onClick={() => this.handleModalOpen("createModal")}
                        />
                    </div>
                    <div>
                        {this.state.tickets.map(ticket =>
                            <Card 
                                key={ticket._id} 
                                style={{ "margin": "15px" }}
                                expanded={this.state.expandedTicketId == ticket._id ? true : false}
                            >
                                <CardHeader
                                    title={"ID-" + ticket._id}
                                    subtitle={ticket.title}
                                >
                                    <IconButton>
                                        {this.state.expandedTicketId == ticket._id ? 
                                            <ExpandLessIcon onClick={() => this.handleExpand(ticket._id)}/> : 
                                            <ExpandMoreIcon onClick={() => this.handleExpand(ticket._id)}/>
                                        }
                                    </IconButton>
                                    <IconMenu
                                        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                        >
                                            <MenuItem primaryText="Edit" onClick={() => this.handleModalOpen("editModal", ticket._id)} />
                                            <MenuItem primaryText="Delete" onClick={() => this.handleModalOpen("deleteModal", ticket._id)} />
                                    </IconMenu>
                                </CardHeader>
                                <CardText expandable={true}>
                                    <div style={{ "display": "flex", "justifyContent": "space-between" }}>
                                        <div>{ticket.description}</div>
                                        <div style={{ "paddingRight": "20px" }}>Assignee: {ticket.assignee}</div>
                                    </div>
                                </CardText>
                                <CardActions expandable={true}>
                                    <div>
                                        <RaisedButton label="View details" />
                                    </div>
                                </CardActions>
                            </Card>
                        )}
                        <CreateModal
                            id="createModal"
                            open={this.state.isCreateModalOpen}
                            handleClose={this.handleModalClose}
                            createTicket={this.createTicket}
                        />
                        <EditModal
                            id="editModal"
                            ref="editModal"
                            selectedTicketId={this.state.selectedTicketId}
                            open={this.state.isEditModalOpen}
                            handleClose={this.handleModalClose}
                            editTicket={this.editTicket}
                        />
                        <DeleteModal
                            id="deleteModal"
                            selectedTicketId={this.state.selectedTicketId}
                            open={this.state.isDeleteModalOpen}
                            handleClose={this.handleModalClose}
                            deleteTicket={this.deleteTicket}
                        />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default TicketsList;