import { useState } from "react";
const Desplegable = ({ children, type }) => {
  const [active, setActive] = useState(false);
  const toggle = () => setActive(!active);
  return (
    <>
      <li>
        <span id="desple" onClick={toggle}>{type}</span>
        {active ? children : null}
      </li>
      <style jsx>{`
        #desple {
          position: relative;
          display: inline-block;
        }
        #desple:after {
          content: "";
          width: 0;
          height: 4px;
          background-color: black;
          position: absolute;
          bottom: 0;
          right: 50%;
          transition: all 0.3s;
          will-change: width;
        }
        #desple:hover:after {
          width: 100%;
          right: 0;
        }
      `}</style>

      <style jsx global>{`
        ul.desplegable {
          position: absolute;
          width: auto;
        }
        ul.desplegable li {
          border-bottom: 1px solid #ccc;
          padding: 10px;
          background-color: #fff;
        }
        li,
        span {
          font-size: 1.5rem;
        }
      `}</style>
    </>
  );
};

export default Desplegable;
