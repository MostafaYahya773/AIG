import { createContext, useEffect, useState } from 'react';

export let CallContext = createContext();

export function CallContextProvider({ children }) {
  // test if localstorage have an language or not
  let [language, setLanguage] = useState(localStorage.getItem('lang') || 'ar');
  useEffect(() => {
    //set a language in localstorage
    localStorage.setItem('lang', language);
    //set direction
    // window.location.reload();
    document.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <CallContext.Provider value={{ language, setLanguage }}>
      <div key={language}>{children}</div>
    </CallContext.Provider>
  );
}
