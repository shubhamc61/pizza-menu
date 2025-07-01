import React, { useState } from 'react';

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour > openHour && hour <= closeHour;

  if (hour === openHour)
    return (
      <footer className='footer'>
        We have just opened the initial oders can be delayed by 30 mins
      </footer>
    );
  return (
    <div>
      <footer className='footer'>
        {isOpen
          ? `We are currently open! until ${closeHour}:00`
          : `we are currently closed! see you at ${openHour}:00`}
      </footer>
    </div>
  );
}

export default Footer;
