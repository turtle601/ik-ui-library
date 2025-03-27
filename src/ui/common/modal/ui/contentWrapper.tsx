import { css } from '@emotion/react';

import { useModal } from '../../../common/modal/model';
import { Responsive } from '../../../layout';
import { borderRadius } from '../../../../config';

interface ContentProps {
  children: React.ReactNode;
}

function ContentWrapper({ children }: ContentProps) {
  const {
    close,
    isBackDropClose,
    contentWrapperStyles,
    contentDefaultStyles,
    breakPoint,
  } = useModal();

  console.log(breakPoint);

  return (
    <div
      onClick={close}
      css={css({
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 10,
        pointerEvents: isBackDropClose ? 'auto' : 'none',
        backgroundColor: isBackDropClose ? 'rgba(22,28,45,.2)' : 'transparent',
        width: '100vw',
        height: '100vh',
        ...contentWrapperStyles,
      })}
    >
      <Responsive
        defaultStyles={{
          ...contentDefaultStyles,
        }}
        breakpoint={breakPoint ? [breakPoint] : []}
        breakPointStyles={
          breakPoint
            ? [
                {
                  width: '500px',
                  height: '500px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  borderRadius: borderRadius.md,
                },
              ]
            : []
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </Responsive>
    </div>
  );
}

export default ContentWrapper;
