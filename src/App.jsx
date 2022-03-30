import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import './App.scss';
import { useEffect, useRef } from 'react';
import { getFromLocalStorage, setToLocalStorage } from './global/helpers';
import Header from './components/Header';
import Footer from './components/Footer';
import WhyTradeSharing from './components/WhyTradeSharing';
import Banner from './components/Banner';
import HowItWorks from './components/HowItWorks';
import Marketplace from './components/Marketplace';
import FAQ from './components/FAQ';

const App = () => {
  const en = require('./global/translations/en.json');

  const howItWorksSectionRef = useRef();
  const marketplaceSectionRef = useRef();
  const whyTradeSharingRef = useRef();
  const faqSectionRef = useRef();

  i18n.use(initReactI18next).init({
    resources: {
      en,
    },
    lng: getFromLocalStorage('lang'),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

  const handleScrollToHowItWorks = () => {
    howItWorksSectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleScrollToMarketplace = () => {
    marketplaceSectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleScrollToWhyTradeSharing = () => {
    whyTradeSharingRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleScrollToFAQ = () => {
    faqSectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    if (!getFromLocalStorage('lang')) {
      setToLocalStorage('lang', 'en');
    }
  }, []);

  return (
    <div className="app-container">
      <Header
        onHowItWorksClick={handleScrollToHowItWorks}
        onMarketplaceClick={handleScrollToMarketplace}
        onWhyTradeSharingClick={handleScrollToWhyTradeSharing}
        onFAQClick={handleScrollToFAQ}
      />
      <div className="app-content">
        <Banner />
        <div ref={howItWorksSectionRef}>
          <HowItWorks />
        </div>
        <div ref={marketplaceSectionRef}>
          <Marketplace />
        </div>
        <div ref={whyTradeSharingRef}>
          <WhyTradeSharing />
        </div>
        <div ref={faqSectionRef}>
          <FAQ />
        </div>
        <Footer
          onHowItWorksClick={handleScrollToHowItWorks}
          onMarketplaceClick={handleScrollToMarketplace}
          onWhyTradeSharingClick={handleScrollToWhyTradeSharing}
          onFAQClick={handleScrollToFAQ}
        />
      </div>
    </div>
  );
};

export default App;
