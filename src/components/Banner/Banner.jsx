import { useTranslation } from 'react-i18next';
import binanceIcon from '../../global/media/binance-statistic-image.svg';
import tetherIcon from '../../global/media/tether-statistic-icon.svg';
import bannerGif from '../../global/media/banner.gif';
import './Banner.scss';

const Banner = () => {
  const { t } = useTranslation();

  const getPageHighlightedTitle = (title) => {
    const titleParts = title.split('/');
    if (titleParts.length === 3) {
      return (
        <span className="title-content">
          <span className="usual">{titleParts[0]}</span>
          <span className="highlighted">{titleParts[1]}</span>
          <span className="usual">{titleParts[2]}</span>
        </span>
      );
    }
    return (
      <span className="title-content">
        <span className="usual">{title}</span>
      </span>
    );
  };

  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="left-block">
          <div className="title-container">
            {getPageHighlightedTitle(t('Banner.title'))}
          </div>
          <a href="asdasd" className="join-waitlist-btn__container">
            <div className="join-waitlist">
              {t('Banner.joinWaitlistBtnTitle')}
            </div>
          </a>
        </div>
        <div className="right-block">
          <div className="banner-gif__container">
            <img src={bannerGif} alt="banner gif" />
          </div>
        </div>
      </div>
      <div className="statistic-container">
        <div className="statistic-block">
          <div className="statistic-block__icon">
            <img src={binanceIcon} alt="binance-icon" />
          </div>
          <div className="statistic-block__content">
            <div className="value">534</div>
            <div className="text">
              {t('Banner.statistic.binanceAccountsTitle')}
            </div>
          </div>
        </div>
        <div className="statistic-block">
          <div className="statistic-block__icon">
            <img src={tetherIcon} alt="tether icon" />
          </div>
          <div className="statistic-block__content">
            <div className="value">$122,673,328 USDT</div>
            <div className="text">
              {t('Banner.statistic.purchasingPowerTitle')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
