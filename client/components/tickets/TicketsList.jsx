import React from 'react';
import axios from 'axios';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class TicketsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tickets: []
        }
    };

    componentWillMount() {
        const URL = 'http://localhost:3000/tickets';
        axios({
            method: 'get',
            url: URL
        }).then(response => {
            this.setState({
                tickets: response.data.tickets
            });
        }).catch((error) => {
            console.log('Error: ' + error);
        });
    }

    render() {
        return (
            <MuiThemeProvider>
                {this.state.tickets.map(ticket =>
                    <Card style={{"margin":"15px"}}>
                        <CardHeader
                            title={"ID-" + ticket._id}
                            subtitle={ticket.title}
                            actAsExpander={true}
                            showExpandableButton={true}
                            
                        />
                        <CardText expandable={true}>                            
                            <div style={{"display": "flex", "justify-content":"space-between"}}>
                            <div>{ticket.description}</div>
                                <div style={{"padding-right":"20px"}}>Asignee: {ticket.assignee}</div>
                            </div>
                        </CardText>
                        <CardActions expandable={true}>                            
                        <div><FlatButton label="View details"/></div>
                        </CardActions>
                    </Card>
                )}
            </MuiThemeProvider>
        );
    }
}

export default TicketsList;