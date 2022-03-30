import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './Header.scss';
import headerLogo from '../../global/media/header-logo.svg';

const Header = ({
  onHowItWorksClick,
  onMarketplaceClick,
  onWhyTradeSharingClick,
  onFAQClick,
}) => {
  const { t } = useTranslation();

  const navItems = [
    {
      id: 0,
      title: t('Header.navigationItems.howItWorks'),
      handleClick: onHowItWorksClick,
    },
    {
      id: 1,
      title: t('Header.navigationItems.marketPlace'),
      handleClick: onMarketplaceClick,
    },
    {
      id: 2,
      title: t('Header.navigationItems.whyTradeSharing'),
      handleClick: onWhyTradeSharingClick,
    },
    {
      id: 3,
      title: t('Header.navigationItems.FAQ'),
      handleClick: onFAQClick,
    },
  ];

  return (
    <div className="header-container">
      <div className="header-logo__container">
        <img src={headerLogo} alt="header logo" />
      </div>
      <div className="navigation-items__container">
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
      <div className="waitlist-btn__container">
        <div className="waitlist-btn">{t('Header.joinWaitlist')}</div>
      </div>
    </div>
  );
};

Header.propTypes = {
  onHowItWorksClick: PropTypes.func.isRequired,
  onMarketplaceClick: PropTypes.func.isRequired,
  onWhyTradeSharingClick: PropTypes.func.isRequired,
  onFAQClick: PropTypes.func.isRequired,
};

export default Header;
