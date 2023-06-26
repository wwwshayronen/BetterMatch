import React from "react";
import "./BurgerMenu.css";
import { styled } from "styled-components";

interface MenuProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

function BurgerMenu(props: MenuProps) {
  const { children, open, onClose } = props;

  function handleKeypress(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.keyCode === 27) {
      onClose();
    }
  }

  React.useEffect(() => {
    function fn(event: KeyboardEvent) {
      if (event.keyCode === 27) {
        onClose();
      }
    }

    document.addEventListener("keydown", fn);

    return () => document.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <div>
      <Overlay
        onClick={onClose}
        role="presentation"
        onKeyPress={handleKeypress}
        data-open={JSON.stringify(open)}
      />
      <MenuStyle data-open={JSON.stringify(open)}>{children}</MenuStyle>
    </div>
  );
}

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: none;
  z-index: 1000;
`;

const MenuStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 90%;
  height: 100vh;
  background-color: #f2f2f2;
  text-align: left;
  padding: 32px 112px 16px 16px;
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
`;

export default BurgerMenu;
