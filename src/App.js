import './App.css';
import TicketForm from './components/TicketForm';
import ticketReducer from './reducers/ticketReducer';
import { useReducer } from 'react';
import TicketList from './components/TicketList';

function App() {

  const initialState = { tickets: [] };

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch}></TicketForm>

        {state.tickets.length > 0 && (
          <div>
            <h3>All Tickets</h3>
            <TicketList tickets={state.tickets} dispatch={dispatch}></TicketList>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
