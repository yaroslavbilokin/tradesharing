import { useTranslation } from 'react-i18next';
import './FAQ.scss';
import useAccordion from '../../global/hooks/useAccordion';
import Accordion from './components/Accordion';

const FAQ = () => {
  const { t } = useTranslation();

  const questions = [
    {
      id: 1,
      question: t('FAQ.questions.1.question'),
      answer: t('FAQ.questions.1.answer'),
    },
    {
      id: 2,
      question: t('FAQ.questions.2.question'),
      answer: t('FAQ.questions.2.answer'),
    },
    {
      id: 3,
      question: t('FAQ.questions.3.question'),
      answer: t('FAQ.questions.3.answer'),
    },
    {
      id: 4,
      question: t('FAQ.questions.4.question'),
      answer: t('FAQ.questions.4.answer'),
    },
    {
      id: 5,
      question: t('FAQ.questions.5.question'),
      answer: t('FAQ.questions.5.answer'),
    },
    {
      id: 6,
      question: t('FAQ.questions.6.question'),
      answer: t('FAQ.questions.6.answer'),
    },
    {
      id: 7,
      question: t('FAQ.questions.7.question'),
      answer: t('FAQ.questions.7.answer'),
    },
    {
      id: 8,
      question: t('FAQ.questions.8.question'),
      answer: t('FAQ.questions.8.answer'),
    },
  ];

  const [accordionState, setAccordionState] = useAccordion(questions);

  const handleChangeAccordion = (id) => setAccordionState(id);

  return (
    <div className="faq-container">
      <div className="title">{t('FAQ.title')}</div>
      <span className="faq-content">
        {questions.map((item) => (
          <Accordion
            key={item.id}
            question={item.question}
            answer={item.answer}
            id={item.id}
            onClick={handleChangeAccordion}
            isCollapsed={accordionState[item.id]}
          />
        ))}
      </span>
    </div>
  );
};

export default FAQ;
