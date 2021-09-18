import React, { Dispatch, useRef, useEffect, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { SearchForm } from './components/SearchForm';
import { Preloader } from 'components/Preloader';
import { useProductStore } from 'hooks';
import { getSnapshot, onSnapshot, getType } from 'mobx-state-tree';
import { observer } from 'mobx-react-lite';

type IProps = {
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void;
  className?: string;
  children?: React.ReactNode;
  isVisibleModal: boolean;
  setVisibleModal: Dispatch<any>;
};

const Popup = observer((props: IProps) => {
  const { children, isVisibleModal, setVisibleModal } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const productStore = useProductStore();
  const [snapshot, setSnapshot] = useState(getSnapshot(productStore));
  onSnapshot(productStore, (sn) => {
    setSnapshot(sn);
  });

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = isVisibleModal ? 'hidden' : 'auto';
    }
  }, [isVisibleModal]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isVisibleModal]);

  return (
    <div
      onClick={(e) => {
        setVisibleModal(false);
      }}
      className={cn(s['overlay'], { [s.active]: isVisibleModal })}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={cn(s.overlay__content)}
      >
        {snapshot.typesOfProduct.length == 0 ? (
          <Preloader isVisible={true} />
        ) : (
          <SearchForm ref={inputRef} />
        )}

        {children}
      </div>
    </div>
  );
});

export { Popup };

//<SearchForm ref={inputRef} isVisibleModal/>
