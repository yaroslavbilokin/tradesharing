import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import icon from '../../global/media/tooltip-icon.svg';
import './CustomTooltip.scss';

const CustomTooltip = ({ text }) => {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#000',
      color: '#fff',
      fontSize: 16,
      padding: '8px 16px',
      borderRadius: 8,
    },
  }));

  return (
    <LightTooltip
      placement="top"
      title={text}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 400 }}
    >
      <img className="tooltip-img" src={icon} alt="tooltip icon" />
    </LightTooltip>
  );
};

CustomTooltip.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CustomTooltip;
