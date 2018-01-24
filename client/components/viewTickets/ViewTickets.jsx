import React from 'react';

class ViewTickets extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
           tickets:[
                {
                    id: 1,
                    title: 'Hi',
                },
                {
                    id: 2,
                    title: 'Hello',
                },         
                      {
                    id: 3,
                    title: 'Thank you',
                }
           ]
        }
     };

    render() {
        return (
            <div>
                <ul>
                {this.state.tickets.map(ticket=>
                    <li>{ticket.id} {ticket.title}</li>
                )}
                </ul>
            </div>
        );
    }
}

export default ViewTickets;