import React, { useState, useEffect } from 'react';
import AccordionContent, { AccordionContainer } from './AccordionContent';
export default function Accordion({ items, multiple }) {
  const [active, setActive] = useState();
  const [activeArr, setActiveArr] = useState([]);

  let p = [...items].map((item) => {
    return { name: item.name, active: false };
  });

  useEffect(() => {
    setActiveArr(p);
  }, []);

  const handleClick = (name) => {
    setActive(name === active ? null : name);
    if (multiple) {
      let inde = activeArr.findIndex((i) => i.name === name);
      let upd = [...activeArr];
      upd[inde].active = !upd[inde].active;
      setActiveArr(upd);
    }
  };

  return (
    <AccordionContainer>
      {items.map((item, i) => {
        let isActive = active === item.name;
        if (multiple)
          isActive = activeArr.some((i) => i.name === item.name && i.active);
        return (
          <AccordionContent
            key={i + 1}
            onClick={() => handleClick(item.name)}
            itemName={item.name}
            itemContent={item.content}
            isActive={isActive}
          />
        );
      })}
    </AccordionContainer>
  );
}
