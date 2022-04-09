import { useTranslation } from 'react-i18next';
import { ReactComponent as UncoverIcon } from '../../global/media/uncover-reason-icon.svg';
import { ReactComponent as DecentralizeIcon } from '../../global/media/decentralize-reason-icon.svg';
import { ReactComponent as BypassIcon } from '../../global/media/bypass-reason-icon.svg';
import { ReactComponent as LeadIcon } from '../../global/media/lead-reason-icon.svg';
import './WhyTradeSharing.scss';

const WhyTradeSharing = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      id: 0,
      title: t('WhyTradeSharing.uncover.title'),
      subTitle: t('WhyTradeSharing.uncover.subTitle'),
      icon: <UncoverIcon />,
    },
    {
      id: 1,
      title: t('WhyTradeSharing.decentralize.title'),
      subTitle: t('WhyTradeSharing.decentralize.subTitle'),
      icon: <DecentralizeIcon />,
    },
    {
      id: 2,
      title: t('WhyTradeSharing.bypass.title'),
      subTitle: t('WhyTradeSharing.bypass.subTitle'),
      icon: <BypassIcon />,
    },
    {
      id: 3,
      title: t('WhyTradeSharing.lead.title'),
      subTitle: t('WhyTradeSharing.lead.subTitle'),
      icon: <LeadIcon />,
    },
  ];

  return (
    <div className="why-trade-sharing__container">
      <div className="why-trade-sharing__title">
        {t('WhyTradeSharing.title')}
      </div>
      <div className="why-trade-sharing__subtitle">
        {t('WhyTradeSharing.subTitle')}
      </div>
      <div className="why-trade-sharing__reasons">
        {reasons.map((reason) => (
          <div key={reason.id} className="reason-container">
            <div className="reason-icon__container">{reason.icon}</div>
            <div className="reason-content">
              <div className="title">{reason.title}</div>
              <div className="subtitle">{reason.subTitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyTradeSharing;
