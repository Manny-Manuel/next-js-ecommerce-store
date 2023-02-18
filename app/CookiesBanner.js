'use client';

import { useState } from 'react';

// checking  if  there is a  localStorage filed for the cookiesBanner
// if not then initial value  is true
// if yes the initial value is what is stored in the browser

export default function CookiesBanner() {
  const cookiesLocalStorageValue = JSON.parse(
    window.localStorage.getItem('areCookiesTermAccepted'),
  );
  const cookiesInitialState =
    cookiesLocalStorageValue === null ? false : cookiesLocalStorageValue;
  const [areCookiesTermAccepted, setAreCookiesTermAccepted] =
    useState(cookiesInitialState);

  return (
    !areCookiesTermAccepted && (
      <div className="div-cookies">
        <h1 className="Cookies-privacy-h1">Your Privacy</h1>
        <p className="cookies-paragraph">
          We use cookies to improve your experience on our site and show you
          relevant advertising. To find out more, read our updated privacy and
          cookies policy
        </p>

        <button
          onClick={() => {
            setAreCookiesTermAccepted(true);
            window.localStorage.setItem(
              'areCookiesTermAccepted',
              JSON.stringify(true),
            );
          }}
        >
          Accept
        </button>
      </div>
    )
  );
}
