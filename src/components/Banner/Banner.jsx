import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as BinanceIcon } from '../../global/media/binance-statistic-image.svg';
import { ReactComponent as TetherIcon } from '../../global/media/tether-statistic-icon.svg';
import bannerVideo from '../../global/media/banner-video.webm';
import bannerVideoMp4 from '../../global/media/banner-video.mp4';
import './Banner.scss';

const Banner = () => {
  const [isMobile, setIsMobile] = useState(true);

  const { t } = useTranslation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 450);
      };
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const getPageHighlightedTitle = (title) => {
    const titleParts = title.split('/');
    if (titleParts.length === 3) {
      return (
        <div className="title-content">
          <span className="usual">{titleParts[0]}</span>
          <span className="highlighted">{titleParts[1]}</span>
          <span className="usual">{titleParts[2]}</span>
        </div>
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
          <div className={`banner-gif__container ${isMobile ? 'mobile' : ''}`}>
            <video loop autoPlay muted playsInline>
              <source src={bannerVideoMp4} type="video/mp4" />
              <source src={bannerVideo} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="statistic-container">
        <div className="statistic-block">
          <div className="statistic-block__icon">
            <BinanceIcon />
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
            <TetherIcon />
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
