import React from 'react';
import axios from 'axios';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class DeleteModal extends React.Component {

    render() {
        const actions = [
            <FlatButton
                label="No"
                primary={true}
                onClick={() => this.props.handleClose(this.props.id)}
            />,
            <FlatButton
                label="Yes"
                primary={true}
                onClick={() => this.props.deleteTicket(this.props.selectedTicketId)}
            />,
        ];
        return (
            <Dialog
                title = "Delete Ticket"
                actions={actions}
                modal={false}
                open={this.props.open}
                onRequestClose={() => this.props.handleClose(this.props.id)}
            >
                Are you sure that you want to delete this ticket?
            </Dialog>
        );
    }
}

export default DeleteModal;