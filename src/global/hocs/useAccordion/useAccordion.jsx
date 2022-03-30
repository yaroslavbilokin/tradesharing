import { useState } from 'react';

const useAccordion = (accordionData) => {
  const [accordionState, setAccordionState] = useState(
    accordionData?.reduce(
      (state, element) => ({
        ...state,
        [element.id]: false,
      }),
      {}
    ) || {}
  );

  const handleChangeAccordionState = (id) => {
    setAccordionState(
      (prev) =>
        accordionData?.reduce(
          (state, element) => ({
            ...state,
            [element.id]: id === element.id ? !prev[id] : false,
          }),
          {}
        ) || {}
    );
  };

  return [accordionState, handleChangeAccordionState];
};

export default useAccordion;
