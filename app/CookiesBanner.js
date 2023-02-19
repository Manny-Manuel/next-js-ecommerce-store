'use client';

import React, { useEffect, useState } from 'react';
// checking  if  there is a  localStorage filed for the cookiesBanner
// if not then initial value  is true
// if yes the initial value is what is stored in the browser
import { getLocalStorage, setLocalStorage } from '../util/localStorage';

export default function CookiesBanner() {
  const [areCookiesTermAccepted, setAreCookiesTermAccepted] = useState(false);

  useEffect(() => {
    const cookiesLocalStorageValue = getLocalStorage('areCookiesTermAccepted');
    // const cookiesLocalStorageValue = JSON.parse(
    // window.localStorage.getItem('areCookiesTermAccepted'),
    // );
    const cookiesInitialState =
      cookiesLocalStorageValue === undefined ? false : cookiesLocalStorageValue;
    setAreCookiesTermAccepted(cookiesInitialState);
  }, []);

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
            setLocalStorage('areCookiesTermAccepted', true);
            // setAreCookiesTermAccepted(true);
            // window.localStorage.setItem(
            // 'areCookiesTermAccepted',
            // </div> JSON.stringify(true),
            // );
          }}
        >
          Accept
        </button>
      </div>
    )
  );
}
