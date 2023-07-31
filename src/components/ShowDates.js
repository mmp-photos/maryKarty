import React from 'react';

// Take the dates from the SHOW object and create a list of the showtimes //

function ShowDates({ dates }) { // Destructure 'dates' from props here
    return (
      <>
        <ul>
          {dates.map((showDate, index) => {
            const currentDate = new Date(showDate);
            const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
            const formattedDate = currentDate.toLocaleDateString('en-US', options);
            return <li key={index}>{formattedDate}</li>; // Return the formatted date as a list item
          })}
        </ul>
      </>
    );
  }
  
// Export statements //
export default ShowDates;