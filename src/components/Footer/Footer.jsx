import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { ReactComponent as TwitterIcon } from '../../global/media/twitter-icon.svg';
import { ReactComponent as DiscordIcon } from '../../global/media/discord-icon.svg';
import { ReactComponent as RedditIcon } from '../../global/media/reddit-icon.svg';
import { ReactComponent as Logo } from '../../global/media/footer-logo.svg';
import { ReactComponent as MobileLogo } from '../../global/media/footer-mobile-logo.svg';
import './Footer.scss';
import useDesktopSize from '../../global/hooks/useDesktopSize';

const Footer = ({
  onHowItWorksClick,
  onMarketplaceClick,
  onWhyTradeSharingClick,
  onFAQClick,
}) => {
  const { t } = useTranslation();
  const isDesktop = useDesktopSize();

  const socialLinks = [
    {
      id: 0,
      Icon: <TwitterIcon className="social-icon" />,
      href: '#',
    },
    {
      id: 1,
      Icon: <DiscordIcon className="social-icon" />,
      href: '#',
    },
    {
      id: 2,
      Icon: <RedditIcon className="social-icon" />,
      href: '#',
    },
  ];

  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-logo__container">
          {isDesktop ? <Logo /> : <MobileLogo />}
        </div>
        <div className="footer-navigation__container">
          <div className="navigation-block">
            <div onClick={onHowItWorksClick} className="navigation-item">
              {t('Header.navigationItems.howItWorks')}
            </div>
            <div onClick={onMarketplaceClick} className="navigation-item">
              {t('Header.navigationItems.marketPlace')}
            </div>
          </div>
          <div className="navigation-block">
            <div onClick={onWhyTradeSharingClick} className="navigation-item">
              {t('Header.navigationItems.whyTradeSharing')}
            </div>
            <div onClick={onFAQClick} className="navigation-item">
              {t('Header.navigationItems.FAQ')}
            </div>
          </div>
        </div>
        <div className="footer-controls__container">
          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="social-link__container"
            >
              {item.Icon}
            </a>
          ))}
        </div>
      </div>
      <div className="rights-container">{t('Footer.rightsTitle')}</div>
    </div>
  );
};

Footer.propTypes = {
  onHowItWorksClick: PropTypes.func.isRequired,
  onMarketplaceClick: PropTypes.func.isRequired,
  onWhyTradeSharingClick: PropTypes.func.isRequired,
  onFAQClick: PropTypes.func.isRequired,
};

export default Footer;
