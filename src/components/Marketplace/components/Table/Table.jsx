import { useTranslation } from 'react-i18next';
import './Table.scss';
import CustomTooltip from '../../../CustomTooltip';
import { RENT_ACCOUNT_HREF } from '../../../../global/constants';

const Table = () => {
  const { t } = useTranslation();

  const TableHeader = (
    <thead className="table-header">
      <tr className="header-row">
        <th className="row-cell name-cell">
          <div className="row-cell__content">
            <span className="cell-title">
              {t('Marketplace.table.header.user.title')}
            </span>
            <CustomTooltip
              text={t('Marketplace.table.header.user.tooltipTitle')}
            />
          </div>
        </th>
        <th className="row-cell name-cell">
          <div className="row-cell__content">
            <span className="cell-title">
              {t('Marketplace.table.header.exchange.title')}
            </span>
            <CustomTooltip
              text={t('Marketplace.table.header.exchange.tooltipTitle')}
            />
          </div>
        </th>
        <th className="row-cell">
          <div className="row-cell__content">
            <span className="cell-title">
              {t('Marketplace.table.header.crypto.title')}
            </span>
            <CustomTooltip
              text={t('Marketplace.table.header.crypto.tooltipTitle')}
            />
          </div>
        </th>
        <th className="row-cell">
          <div className="row-cell__content">
            <span className="cell-title">
              {t('Marketplace.table.header.limits.title')}
            </span>
            <CustomTooltip
              text={t('Marketplace.table.header.limits.tooltipTitle')}
            />
          </div>
        </th>
        <th className="row-cell">
          <div className="row-cell__content">
            <span className="cell-title">
              {t('Marketplace.table.header.escrow.title')}
            </span>
            <CustomTooltip
              text={t('Marketplace.table.header.escrow.tooltipTitle')}
            />
          </div>
        </th>
        <th className="row-cell">
          <div className="row-cell__content">
            <span className="cell-title">
              {t('Marketplace.table.header.rentRate.title')}
            </span>
            <CustomTooltip
              text={t('Marketplace.table.header.rentRate.tooltipTitle')}
            />
          </div>
        </th>
        <th className="row-cell" />
      </tr>
    </thead>
  );

  const rowsData = [
    {
      userName: '***du2190',
      exchange: 'Binance',
      crypto: 'USDT',
      limits: '$20K - $23K',
      escrow: '100%',
      rentRate: '0.0125%',
      href: RENT_ACCOUNT_HREF,
    },
    {
      userName: '***ca1083',
      exchange: 'Binance',
      crypto: 'BUSD',
      limits: '$1K - $4K',
      escrow: '100%',
      rentRate: '0.0127%',
      href: RENT_ACCOUNT_HREF,
    },
    {
      userName: '***am907',
      exchange: 'Binance',
      crypto: 'BUSD',
      limits: '$2K - $4K',
      escrow: '100%',
      rentRate: '0.0128%',
      href: RENT_ACCOUNT_HREF,
    },
    {
      userName: '***ti102',
      exchange: 'Binance',
      crypto: 'USDT',
      limits: '$15K - $17K',
      escrow: '100%',
      rentRate: '0.0130%',
      href: RENT_ACCOUNT_HREF,
    },
    {
      userName: '***ap899',
      exchange: 'Binance',
      crypto: 'BUSD',
      limits: '$3K - $4K',
      escrow: '100%',
      rentRate: '0.0133%',
      href: RENT_ACCOUNT_HREF,
    },
    {
      userName: '***co919',
      exchange: 'Binance',
      crypto: 'USDT',
      limits: '$5K - $8K',
      escrow: '100%',
      rentRate: '0.0135%',
      href: RENT_ACCOUNT_HREF,
    },
  ];

  return (
    <div className="table-container">
      <table className="table">
        {TableHeader}
        <tbody>
          {rowsData.map((row) => (
            <tr key={row.userName} className="table-row">
              <td className="table-row__cell name-cell">{row.userName}</td>
              <td className="table-row__cell">{row.exchange}</td>
              <td className="table-row__cell">{row.crypto}</td>
              <td className="table-row__cell">{row.limits}</td>
              <td className="table-row__cell">{row.escrow}</td>
              <td className="table-row__cell">{row.rentRate}</td>
              <td className="table-row__cell">
                <a
                  className="rent-account-btn__container"
                  target="_blank"
                  rel="noreferrer"
                  href={row.href}
                >
                  <div className="rent-account-btn">
                    {t('Marketplace.table.rentAccountBtnTitle')}
                  </div>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
