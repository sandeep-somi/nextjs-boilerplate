import React, { useState, useEffect } from 'react';
import styles from './layout.module.scss';
import { useTranslation } from '../i18n';

function Layout({ children }) {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language)
  
  useEffect(() => {
    console.log(i18n.language)
    setLang(i18n.language)
  }, []);

  function onChangeLang ({ target: { value = 'en'} }) {
    i18n.changeLanguage(value)
    setLang(value)
  }

  return <div className={styles.container}>
    <div className="lang-container">
      <select onChange={onChangeLang} value={lang}>
        <option value="en">EN</option>
        <option value="de">DE</option>
      </select>
    </div>
    {children}
  </div>
}

export default Layout