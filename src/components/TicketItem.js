import React, { useState } from 'react';
import '../styles.css';

export default function TicketItem({ ticket, dispatch }) {

    const { id, title, description, status } = ticket;

    const priorityClass = {
        1: "priority-low",
        2: "priority-medium",
        3: "priority-high",
    }

    return (
        <>
            <div className="ticket-item">
                <div className={`priority-dot ${priorityClass[ticket.priority]}`}></div>

                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </>

    )

}