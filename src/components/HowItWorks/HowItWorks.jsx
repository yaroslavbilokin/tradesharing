import { useTranslation } from 'react-i18next';
import firstVector from '../../global/media/first-vector.svg';
import secondVector from '../../global/media/second-vector.svg';
import thirdVector from '../../global/media/third-vector.svg';
import firstStep from '../../global/media/first-step-icon.svg';
import secondStep from '../../global/media/second-step-icon.svg';
import thirdStep from '../../global/media/third-step-icon.svg';
import fourthStep from '../../global/media/fourth-step-icon.svg';
import firstMobileVector from '../../global/media/first-mobile-vector.svg';
import secondMobileVector from '../../global/media/second-mobile-vector.svg';
import thirdMobileVector from '../../global/media/third-mobile-vector.svg';
import useDesktopSize from '../../global/hooks/useDesktopSize';
import './HowItWorks.scss';

const HowItWorks = () => {
  const { t } = useTranslation();
  const isDesktop = useDesktopSize();

  const howItWorksSteps = [
    {
      id: 0,
      title: t('HowItWorks.steps.1.title'),
      subTitle: t('HowItWorks.steps.1.subTitle'),
      icon: firstStep,
    },
    {
      id: 1,
      title: t('HowItWorks.steps.2.title'),
      subTitle: t('HowItWorks.steps.2.subTitle'),
      icon: secondStep,
    },
    {
      id: 2,
      title: t('HowItWorks.steps.3.title'),
      subTitle: t('HowItWorks.steps.3.subTitle'),
      icon: thirdStep,
    },
    {
      id: 3,
      title: t('HowItWorks.steps.4.title'),
      subTitle: t('HowItWorks.steps.4.subTitle'),
      icon: fourthStep,
    },
  ];

  const mobileVectorsStrategy = {
    0: null,
    1: (
      <div className="mobile-vector__container">
        <img src={firstMobileVector} alt="vector" />
      </div>
    ),
    2: (
      <div className="mobile-vector__container">
        <img src={secondMobileVector} alt="vector" />
      </div>
    ),
    3: (
      <div className="mobile-vector__container">
        <img src={thirdMobileVector} alt="vector" />
      </div>
    ),
  };

  return (
    <div className="how-it-works__container">
      <div className="title">{t('HowItWorks.title')}</div>
      <div className="how-it-works__content">
        {isDesktop && (
          <div className="desktop-content-background__container">
            <div className="background">
              <div className="vector-container top">
                <img src={firstVector} alt="vector" />
              </div>
              <div className="vector-container bottom">
                <img src={secondVector} alt="vector" />
              </div>
              <div className="vector-container top">
                <img src={thirdVector} alt="vector" />
              </div>
            </div>
          </div>
        )}
        <div className="content">
          {howItWorksSteps.map((step, index) => (
            <div key={step.id} className="step-container">
              {mobileVectorsStrategy[index]}
              <div className="icon-container">
                <img src={step.icon} alt="step icon" />
              </div>
              <div className="step-title">{step.title}</div>
              <div className="step-subtitle">{step.subTitle}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
