import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import headerLogo from '../../global/media/header-logo.svg';
import mobileLogo from '../../global/media/header-mobile-icon.svg';
import burgerIcon from '../../global/media/burger-logo.svg';
import closeIcon from '../../global/media/close-menu-icon.svg';
import LanguageSwitcher from '../LanguageSwitcher';
import useDesktopSize from '../../global/hooks/useDesktopSize';
import './Header.scss';
import MobileLanguageSwitcher from '../MobileLanguageSwitcher/MobileLanguageSwitcher';

const Header = ({
  onHowItWorksClick,
  onFAQClick,
  onLanguageChange,
  language,
}) => {
  const { t } = useTranslation();
  const isDesktop = useDesktopSize();

  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 0 && !scrolled) {
      setScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isMenuOpened) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpened]);

  const navItems = [
    {
      id: 0,
      title: t('Header.navigationItems.howItWorks'),
      handleClick: onHowItWorksClick,
    },
    {
      id: 1,
      title: t('Header.navigationItems.FAQ'),
      handleClick: onFAQClick,
    },
  ];

  return isDesktop ? (
    <div className="header-container">
      <div className="nav-container">
        <div className="header-logo__container">
          <img src={headerLogo} alt="header logo" />
        </div>
        <div
          className={`navigation-items__container ${
            scrolled ? 'scrolled' : ''
          }`}
        >
          {navItems.map((item) => (
            <div
              key={item.id}
              className="navigation-item"
              onClick={() => item.handleClick()}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <div className="controls-container">
        <LanguageSwitcher
          language={language}
          onLanguageChange={onLanguageChange}
        />
        <div className="waitlist-btn">{t('Header.joinWaitlist')}</div>
      </div>
    </div>
  ) : (
    <div className="mobile-header__container">
      <div className="logo-container">
        <img src={mobileLogo} alt="logo" />
      </div>
      <div
        onClick={() => setIsMenuOpened(true)}
        className="burger-control__container"
      >
        <img src={burgerIcon} alt="menu icon" />
      </div>
      <div className={`menu-body__container ${isMenuOpened ? 'active' : ''}`}>
        <div className="menu-body">
          <div className="menu-header">
            <div className="logo-container">
              <img src={mobileLogo} alt="logo" />
            </div>
            <div
              onClick={() => setIsMenuOpened(false)}
              className="menu-close__container"
            >
              <img src={closeIcon} alt="close icon" />
            </div>
          </div>
          <div className="menu-nav__container">
            {navItems.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setIsMenuOpened(false);
                  item.handleClick();
                }}
                className="mobile-navigation-item"
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
        <MobileLanguageSwitcher
          language={language}
          onLanguageChange={(lang) => {
            onLanguageChange(lang);
            setIsMenuOpened(false);
          }}
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  onHowItWorksClick: PropTypes.func.isRequired,
  onFAQClick: PropTypes.func.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

export default Header;
