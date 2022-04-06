import PropTypes from 'prop-types';
import './MobileLanguageSwitcher.scss';
import { useTranslation } from 'react-i18next';

const MobileLanguageSwitcher = ({ language, onLanguageChange }) => {
  const { t } = useTranslation();

  return (
    <div className="mobile-language-switcher__container">
      <div
        className={`language ${language === 'en' ? 'active' : ''} ${
          language === 'en' ? 'english' : ''
        }`}
        onClick={() => {
          if (language !== 'en') {
            onLanguageChange('en');
          }
        }}
      >
        {t('Header.languagesSwitcher.en')}
      </div>
      <div className="divider">|</div>
      <div
        className={`language ${language === 'sch' ? 'active' : ''} ${
          language === 'en' ? 'english' : ''
        }`}
        onClick={() => {
          if (language !== 'sch') {
            onLanguageChange('sch');
          }
        }}
      >
        {t('Header.languagesSwitcher.sch')}
      </div>
      <div className="divider">|</div>
      <div
        className={`language ${language === 'tch' ? 'active' : ''} ${
          language === 'en' ? 'english' : ''
        }`}
        onClick={() => {
          if (language !== 'tch') {
            onLanguageChange('tch');
          }
        }}
      >
        {t('Header.languagesSwitcher.tch')}
      </div>
    </div>
  );
};

MobileLanguageSwitcher.propTypes = {
  onLanguageChange: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

export default MobileLanguageSwitcher;
