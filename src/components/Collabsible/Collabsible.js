import React, { useState, useRef, useEffect } from "react";
import "./collapsible.css";
import { IoIosArrowUp } from "react-icons/io";

const Collabsible = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef();

  const showContent = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(!isOpen);
  }, []);

  const hasChildren = props.children.some((c) => React.isValidElement(c));

  return (
    <div className="collapsible">
      <div className="toggle" onClick={showContent}>
        <span className="toggle-header">{props.label}</span>
        <div
          className="collapse-action-icons"
          style={
            !isOpen
              ? {
                  transform: "rotate(0deg)",
                }
              : undefined
          }
        >
          <IoIosArrowUp />
        </div>
      </div>
      <div
        className="content-parent"
        style={
          isOpen
            ? {
                maxHeight: "400px",
              }
            : { maxHeight: "0px" }
        }
        ref={parentRef}
      >
        <div className="content">
          {hasChildren ? props.children : "Empty Task"}
        </div>
      </div>
    </div>
  );
};

export default Collabsible;
