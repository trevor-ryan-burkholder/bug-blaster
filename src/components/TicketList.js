import React from "react";
import TicketItem from "./TicketItem";
import '../styles.css';

export default function TicketList({ tickets, dispatch }) {

    return (
        <>
            <div className="ticket-list">
                {
                    tickets.map(ticket => (
                        <TicketItem key={ticket.id} ticket={ticket} dispatch={dispatch}></TicketItem>
                    ))
                }
            </div>
        </>
    )
}