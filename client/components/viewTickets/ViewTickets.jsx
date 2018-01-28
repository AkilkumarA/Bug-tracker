import React from 'react';
import axios from 'axios';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class ViewTickets extends React.Component {

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
                    <Card>
                        <CardHeader
                            title={"ID-" + ticket._id}
                            subtitle={ticket.title}
                            actAsExpander={true}
                            showExpandableButton={true}
                        />
                        <CardText expandable={true}>
                            <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                                <tbody>
                                    <tr>
                                        <td class="mdl-data-table__cell--non-numeric">Reporter</td>
                                        <td class="mdl-data-table__cell--non-numeric">{ticket.reporter}</td>
                                    </tr>
                                    <tr>
                                        <td class="mdl-data-table__cell--non-numeric">Assignee</td>
                                        <td class="mdl-data-table__cell--non-numeric">{ticket.assignee}</td>
                                    </tr>
                                    <tr>
                                        <td class="mdl-data-table__cell--non-numeric">Status</td>
                                        <td class="mdl-data-table__cell--non-numeric">{ticket.status}</td>
                                    </tr>
                                    <tr>
                                        <td class="mdl-data-table__cell--non-numeric">Severity</td>
                                        <td class="mdl-data-table__cell--non-numeric">{ticket.severity}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </CardText>
                        <CardActions expandable={true}>
                            <FlatButton label="Edit" />
                            <FlatButton label="Delete" />
                        </CardActions>
                    </Card>
                )}
            </MuiThemeProvider>
        );
    }
}

export default ViewTickets;