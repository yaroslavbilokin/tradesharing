import { useTranslation } from 'react-i18next';
import './Table.scss';
import CustomTooltip from '../../../CustomTooltip';

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
      userName: 'Tom 2971',
      exchange: 'Binance',
      crypto: 'USDT',
      limits: '$5k - $12k',
      escrow: '$2k',
      rentRate: '0.0125%',
      href: '#',
    },
    {
      userName: 'Tom 2972',
      exchange: 'Binance',
      crypto: 'BUSD',
      limits: '$5k - $12k',
      escrow: '$2k',
      rentRate: '0.0125%',
      href: '#',
    },
    {
      userName: 'Tom 2973',
      exchange: 'Binance',
      crypto: 'BUSD',
      limits: '$5k - $12k',
      escrow: '$2k',
      rentRate: '0.0125%',
      href: '#',
    },
    {
      userName: 'Tom 2974',
      exchange: 'Binance',
      crypto: 'BUSD',
      limits: '$5k - $12k',
      escrow: '$2k',
      rentRate: '0.0125%',
      href: '#',
    },
    {
      userName: 'Tom 2975',
      exchange: 'Binance',
      crypto: 'BUSD',
      limits: '$5k - $12k',
      escrow: '$2k',
      rentRate: '0.0125%',
      href: '#',
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
                <a className="rent-account-btn__container" href={row.href}>
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
