import React, { useEffect, useRef, useState, Suspense } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getFromLocalStorage, setToLocalStorage } from './global/helpers';
import './App.scss';

const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));
const WhyTradeSharing = React.lazy(() =>
  import('./components/WhyTradeSharing')
);
const Banner = React.lazy(() => import('./components/Banner'));
const HowItWorks = React.lazy(() => import('./components/HowItWorks'));
const Marketplace = React.lazy(() => import('./components/Marketplace'));
const FAQ = React.lazy(() => import('./components/FAQ'));

const App = () => {
  const [selectedLang, setSelectedLang] = useState(
    getFromLocalStorage('lang') || 'en'
  );

  const en = require('./global/translations/en.json');
  const tch = require('./global/translations/tch.json'); // Traditional Chinese
  const sch = require('./global/translations/sch.json'); // Simplified Chinese

  const howItWorksSectionRef = useRef();
  const marketplaceSectionRef = useRef();
  const whyTradeSharingRef = useRef();
  const faqSectionRef = useRef();

  i18n.use(initReactI18next).init({
    resources: {
      en,
      tch,
      sch,
    },
    lng: selectedLang,
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
      setSelectedLang('en');
    }
  }, []);

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    setToLocalStorage('lang', lang);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="app-container">
        <Header
          onHowItWorksClick={handleScrollToHowItWorks}
          onFAQClick={handleScrollToFAQ}
          language={selectedLang}
          onLanguageChange={handleLanguageChange}
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
    </Suspense>
  );
};

export default App;
