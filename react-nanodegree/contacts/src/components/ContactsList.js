import React, { Component } from "react";

class ContactsList extends Component {

    render() {
        console.log(this.props)
        return (
            <ol className="contact-list"> 
            {
                this.props.contacts.map((person) => (
                    <li key={person.id} className="contact-list-item">
                        <div 
                            className="contact-avatar" 
                            style={ {backgroundImage: `url(${person.avatarURL})`} }
                        >
                        </div>
                        <div className="contact-details">
                            <p>{person.name}</p>
                            <p>{person.handle}</p>
                        </div>
                        <button className="contact-remove"></button>
                    </li>
                ))
            }
            </ol>       
        )
    }
}

export default ContactsList;