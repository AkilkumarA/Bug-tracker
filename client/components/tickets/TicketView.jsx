import React from 'react';
import axios from 'axios';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';

var clientConfig = require('../../../config').client;

class TicketView extends React.Component {

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
            },
            isEditModalOpen: false,
            isDeleteModalOpen: false
        }
    };

    componentWillMount() {
        this.init();
    }

    init(selectedTicket) {
        const URL = 'http://' + clientConfig.mongoAPI.HOST + clientConfig.mongoAPI.BASE_PATH + '/'+this.props.match.params.ticketId;
        axios({
            method: 'get',
            url: URL
        }).then(response => {
            this.setState({
                ...this.state,
                ticket: response.data.ticket
            });
            console.log(response.data.ticket);
        }).catch((error) => {
            console.log('Error: ' + error);
        });
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div>
                        <h4>
                            ID-{this.state.ticket._id}: {this.state.ticket.title}
                        </h4>
                    </div>
                    <div>
                        <div>
                            <b>Reporter:</b> {this.state.ticket.reporter}
                        </div>
                        <div>
                            <b>Assignee:</b> {this.state.ticket.assignee}
                        </div>
                    </div>
                    <div>
                        <div>
                            <b>Description:</b> {this.state.ticket.description}
                        </div>
                    </div>
                    <div>
                        <div>
                            <b>Status:</b> {this.state.ticket.status}
                        </div>
                        <div>
                            <b>Severity:</b> {this.state.ticket.severity}
                        </div>
                    </div>
                    <div>
                        <div>
                            <b>Created on:</b> {new Date(this.state.ticket.createdOn).getDate()+'/'+(new Date(this.state.ticket.createdOn).getMonth()+1)+'/'+new Date(this.state.ticket.createdOn).getFullYear()}
                        </div>
                        <div>
                            <b>Closed on:</b> {this.state.ticket.closedOn}
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default TicketView;