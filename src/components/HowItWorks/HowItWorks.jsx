import { useTranslation } from 'react-i18next';
import { ReactComponent as FirstVector } from '../../global/media/first-vector.svg';
import { ReactComponent as SecondVector } from '../../global/media/second-vector.svg';
import { ReactComponent as ThirdVector } from '../../global/media/third-vector.svg';
import { ReactComponent as FirstStep } from '../../global/media/first-step-icon.svg';
import { ReactComponent as SecondStep } from '../../global/media/second-step-icon.svg';
import { ReactComponent as ThirdStep } from '../../global/media/third-step-icon.svg';
import { ReactComponent as FourthStep } from '../../global/media/fourth-step-icon.svg';
import { ReactComponent as FirstMobileVector } from '../../global/media/first-mobile-vector.svg';
import { ReactComponent as SecondMobileVector } from '../../global/media/second-mobile-vector.svg';
import { ReactComponent as ThirdMobileVector } from '../../global/media/third-mobile-vector.svg';
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
      icon: <FirstStep />,
    },
    {
      id: 1,
      title: t('HowItWorks.steps.2.title'),
      subTitle: t('HowItWorks.steps.2.subTitle'),
      icon: <SecondStep />,
    },
    {
      id: 2,
      title: t('HowItWorks.steps.3.title'),
      subTitle: t('HowItWorks.steps.3.subTitle'),
      icon: <ThirdStep />,
    },
    {
      id: 3,
      title: t('HowItWorks.steps.4.title'),
      subTitle: t('HowItWorks.steps.4.subTitle'),
      icon: <FourthStep />,
    },
  ];

  const mobileVectorsStrategy = {
    0: null,
    1: (
      <div className="mobile-vector__container">
        <FirstMobileVector />
      </div>
    ),
    2: (
      <div className="mobile-vector__container">
        <SecondMobileVector />
      </div>
    ),
    3: (
      <div className="mobile-vector__container">
        <ThirdMobileVector />
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
                <FirstVector />
              </div>
              <div className="vector-container bottom">
                <SecondVector />
              </div>
              <div className="vector-container top">
                <ThirdVector />
              </div>
            </div>
          </div>
        )}
        <div className="content">
          {howItWorksSteps.map((step, index) => (
            <div key={step.id} className="step-container">
              {mobileVectorsStrategy[index]}
              <div className="icon-container">{step.icon}</div>
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
