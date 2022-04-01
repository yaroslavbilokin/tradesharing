import PropTypes from 'prop-types';
import './MobileLanguageSwitcher.scss';
import { useTranslation } from 'react-i18next';

const MobileLanguageSwitcher = ({ language, onLanguageChange }) => {
  const { t } = useTranslation();

  return (
    <div className="mobile-language-switcher__container">
      <div
        className={`language ${language === 'en' ? 'active' : ''}`}
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
        className={`language ${language === 'ch' ? 'active' : ''}`}
        onClick={() => {
          if (language !== 'ch') {
            onLanguageChange('ch');
          }
        }}
      >
        {t('Header.languagesSwitcher.ch')}
      </div>
    </div>
  );
};

MobileLanguageSwitcher.propTypes = {
  onLanguageChange: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

export default MobileLanguageSwitcher;
