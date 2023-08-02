import React from 'react';
import { Button } from 'reactstrap';
import OpenNewWindow from './OpenNewWindow';

// Take the dates from the SHOW object and create a list of the showtimes //

function ShowDates({ dates }) { // Destructure 'dates' from props here
    // const currentDate = new Date()

    return (
      <>
        <ul className="mb12">
          {dates.map((showDate, index) => {
            const currentDate = new Date(showDate);
            const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
            const formattedDate = currentDate.toLocaleDateString('en-US', options);
            return <li key={index}>{formattedDate}</li>; 
          })}
        </ul>
        <div className="centered">
          <Button type="button" className="button" onClick={() => OpenNewWindow('http://indyfringe.vbotickets.com/event/4b_-_three_2_one/100320')}>
              Get Tickets!
          </Button>
        </div>
      </>
    );
  }
  
// Export statements //
export default ShowDates;