import { createPortal } from "react-dom";
import {useEffect, useState} from 'react';

const Portal = ({ children }) => {
  const [element, setElement] = useState(null);

  useEffect(() => {
    setElement(document.getElementById("global-modal"));
  }, []);

  if (!element) {
    return <></>;
  }
  return createPortal(children, element);
};

export default Portal;
