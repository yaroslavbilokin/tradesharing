import PropTypes from 'prop-types';
import './Accordion.scss';

const Accordion = ({ question, answer, id, onClick, isCollapsed }) => {
  const handleCollapse = () => onClick(id);

  return (
    <div className="accordion-wrapper">
      <div className="accordion-header">
        <div className="header-content">{question}</div>
        <div className="header-control__container" onClick={handleCollapse}>
          <div className={`toggle ${isCollapsed ? 'collapsed' : ''}`} />
        </div>
      </div>
      <div className={`accordion-body ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="accordion-body__content">{answer}</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
};

export default Accordion;
