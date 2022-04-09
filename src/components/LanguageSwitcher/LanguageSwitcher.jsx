import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ReactComponent as Icon } from '../../global/media/lang-switch-icon.svg';
import { ReactComponent as SelectedLangIcon } from '../../global/media/selected-lang-icon.svg';
import { ReactComponent as NotSelectedLangIcon } from '../../global/media/not-selected-lang-icon.svg';
import './LanguageSwitcher.scss';

const LanguageSwitcher = ({ onLanguageChange, language }) => {
  const [show, setShow] = useState(false);

  const { t } = useTranslation();

  const handleClick = () => setShow((prev) => !prev);

  const languagesStrategy = {
    en: t('Header.languagesSwitcher.en'),
    tch: t('Header.languagesSwitcher.tch'),
    sch: t('Header.languagesSwitcher.sch'),
  };

  const languages = [
    {
      id: 1,
      name: t('Header.languagesSwitcher.en'),
      key: 'en',
    },
    {
      id: 2,
      name: t('Header.languagesSwitcher.sch'),
      key: 'sch',
    },
    {
      id: 3,
      name: t('Header.languagesSwitcher.tch'),
      key: 'tch',
    },
  ];

  const handleLanguageChange = (selectedLang) => {
    if (selectedLang !== language) {
      onLanguageChange(selectedLang);
    }
    setShow(false);
  };

  return (
    <div className="language-switcher__container">
      <div onClick={handleClick} className="language-switcher__content">
        <div className="content-lang">{languagesStrategy[language]}</div>
        <div className={`content-control ${show ? 'active' : ''}`}>
          <Icon />
        </div>
      </div>
      <div className={`languages-body ${show ? 'active' : ''}`}>
        {languages.map((lang) => (
          <div
            key={lang.key}
            className="language-container"
            onClick={() => handleLanguageChange(lang.key)}
          >
            <div className="language-title">{lang.name}</div>
            <div className="language-icon__container">
              {language === lang.key ? (
                <SelectedLangIcon />
              ) : (
                <NotSelectedLangIcon />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

LanguageSwitcher.propTypes = {
  onLanguageChange: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

export default LanguageSwitcher;
