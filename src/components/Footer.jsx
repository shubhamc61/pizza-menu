import React, { useState } from 'react';

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <div>
      <footer>{hour} We are currently open!</footer>
    </div>
  );
}

export default Footer;
