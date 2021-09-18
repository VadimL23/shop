import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import './preloader.scss';

type IProps = {
  isVisible: boolean;
};

const Preloader = (props: IProps) => {
  const { isVisible } = props;
  return (
    <div
      className={cn([s.preloader], { [s.visible]: isVisible })}
      id='preloader'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid'
        className='preloader'
      >
        <rect
          x='0'
          y='0'
          width='100'
          height='100'
          fill='none'
          className='bk'
        ></rect>
        <rect
          x='46.5'
          y='40'
          width='7'
          height='20'
          rx='5'
          ry='5'
          className='rect'
          transform='rotate(0 50 50) translate(0 -30)'
        >
          <animate
            attributeName='opacity'
            from='1'
            to='0'
            dur='1s'
            begin='0s'
            repeatCount='indefinite'
          />
        </rect>
        <rect
          x='46.5'
          y='40'
          width='7'
          height='20'
          rx='5'
          ry='5'
          className='rect'
          transform='rotate(36 50 50) translate(0 -30)'
        >
          {' '}
          <animate
            attributeName='opacity'
            from='1'
            to='0'
            dur='1s'
            begin='0.1s'
            repeatCount='indefinite'
          />
        </rect>
        <rect
          x='46.5'
          y='40'
          width='7'
          height='20'
          rx='5'
          ry='5'
          className='rect'
          transform='rotate(72 50 50) translate(0 -30)'
        >
          {' '}
          <animate
            attributeName='opacity'
            from='1'
            to='0'
            dur='1s'
            begin='0.2s'
            repeatCount='indefinite'
          />
        </rect>
        <rect
          x='46.5'
          y='40'
          width='7'
          height='20'
          rx='5'
          ry='5'
          className='rect'
          transform='rotate(108 50 50) translate(0 -30)'
        >
          {' '}
          <animate
            attributeName='opacity'
            from='1'
            to='0'
            dur='1s'
            begin='0.3s'
            repeatCount='indefinite'
          />
        </rect>
        <rect
          x='46.5'
          y='40'
          width='7'
          height='20'
          rx='5'
          ry='5'
          className='rect'
          transform='rotate(144 50 50) translate(0 -30)'
        >
          {' '}
          <animate
            attributeName='opacity'
            from='1'
            to='0'
            dur='1s'
            begin='0.4s'
            repeatCount='indefinite'
          />
        </rect>
        <rect
          x='46.5'
          y='40'
          width='7'
          height='20'
          rx='5'
          ry='5'
          className='rect'
          transform='rotate(180 50 50) translate(0 -30)'
        >
          {' '}
          <animate
            attributeName='opacity'
            from='1'
            to='0'
            dur='1s'
            begin='0.5s'
            repeatCount='indefinite'
          />
        </rect>
        <rect
          x='46.5'
          y='40'
          width='7'
          height='20'
          rx='5'
          ry='5'
          className='rect'
          transform='rotate(216 50 50) translate(0 -30)'
        >
          {' '}
          <animate
            attributeName='opacity'
            from='1'
            to='0'
            dur='1s'
            begin='0.6s'
            repeatCount='indefinite'
          />
        </rect>
        <rect
          x='46.5'
          y='40'
          width='7'
          height='20'
          rx='5'
          ry='5'
          className='rect'
          transform='rotate(252 50 50) translate(0 -30)'
        >
          {' '}
          <animate
            attributeName='opacity'
            from='1'
            to='0'
            dur='1s'
            begin='0.7s'
            repeatCount='indefinite'
          />
        </rect>
        <rect
          x='46.5'
          y='40'
          width='7'
          height='20'
          rx='5'
          ry='5'
          className='rect'
          transform='rotate(288 50 50) translate(0 -30)'
        >
          {' '}
          <animate
            attributeName='opacity'
            from='1'
            to='0'
            dur='1s'
            begin='0.8s'
            repeatCount='indefinite'
          />
        </rect>
        <rect
          x='46.5'
          y='40'
          width='7'
          height='20'
          rx='5'
          ry='5'
          className='rect'
          transform='rotate(324 50 50) translate(0 -30)'
        >
          {' '}
          <animate
            attributeName='opacity'
            from='1'
            to='0'
            dur='1s'
            begin='0.9s'
            repeatCount='indefinite'
          />
        </rect>
      </svg>
    </div>
  );
};

export { Preloader };
