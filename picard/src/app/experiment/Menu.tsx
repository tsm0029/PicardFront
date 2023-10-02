import React, { useState } from "react";
import DropDown from "./DropDown";

const Menu: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectAlg, setSelectAlg] = useState<string>("");
  const algorithms = () => {
    return ["Algorithm 1", "Algorithm 2", "Algorithm 3", "Algorithm 4", "Algorithm 5"];
  };

  /**
   * Toggle the drop down menu
   */
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  /**
   * Callback function to consume the
   * algorithm from the child component
   *
   * @param alg  The selected algorithm
   */
  const algSelection = (alg: string): void => {
    setSelectAlg(alg);
  };

  return (
    <>
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectAlg ? "Select: " + selectAlg : "Select ..."} </div>
        {showDropDown && (
          <DropDown
            algorithms={algorithms()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            algSelection={algSelection}
          />
        )}
      </button>
    </>
  );
};

export default Menu;
