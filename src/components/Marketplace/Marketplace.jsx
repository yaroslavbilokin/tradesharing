import { useTranslation } from 'react-i18next';
import Table from './components/Table';
import './Marketplace.scss';

const Marketplace = () => {
  const { t } = useTranslation();

  return (
    <div className="marketplace-container">
      <div className="marketplace__title">{t('Marketplace.title')}</div>
      <Table />
    </div>
  );
};

export default Marketplace;
