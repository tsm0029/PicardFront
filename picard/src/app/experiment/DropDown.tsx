import React, { useEffect, useState } from 'react';

type DropDownProps = {
  algorithms: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  algSelection: Function;
  /*nodes: number[];
  nodeSelection: Function;*/
};

const DropDown: React.FC<DropDownProps> = ({
  algorithms,
  algSelection,
  /*nodes,
  nodeSelection,*/
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  /**
   * Handle passing the algorithm
   * back to the parent component
   *
   * @param alg The selected city
   */
  const onClickHandler = (alg: string): void => {
    algSelection(alg);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {algorithms.map(
          (alg: string, index: number): JSX.Element => {
            return (
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(alg);
                }}
              >
                {alg}
              </p>
            );
          }
        )}
      </div>
    </>
  );
};

export default DropDown;
