'use client';

import React, { useState, useEffect } from 'react';
import MobileFooter from './mobileFooter/mobileFooter';
import DesktopFooter from './desktopFooter/desktopFooter';

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);  // state to hold window size info

  // function to check window size and update state accordingly
  const checkWindowSize = () => {
    if (window.innerWidth < 680) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // useEffect to listen to window resize event
  useEffect(() => {
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    // cleanup function to remove event listener when component unmounts
    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  if (isMobile) {
    return (
      <MobileFooter />
    );
  }

  return (
    <DesktopFooter />
  );
}
