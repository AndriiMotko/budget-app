import React, { useEffect, useMemo } from "react";
import ReactDom from "react-dom";

const parent = document.getElementById('modal')

const Portal = ({ children }) => {
  const el = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    parent.appendChild(el);

    return () => {
      parent.removeChild(el)
    }
  }, [])

  return ReactDom.createPortal(
    children,
    el
  )
}

export default Portal
