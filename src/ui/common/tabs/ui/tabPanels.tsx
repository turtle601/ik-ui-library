import { ComponentPropsWithoutRef, FC } from 'react';
import { CSSObject, css } from '@emotion/react';

import { allocatedIdxForChildren } from '@/ui/common/tabs/lib';

export interface ITabPanelsProps extends ComponentPropsWithoutRef<'div'> {
  etcStyles?: CSSObject;
  children: React.ReactNode;
}

const TabPanels: FC<ITabPanelsProps> = ({ etcStyles = {}, children }) => {
  return (
    <div
      css={css({
        ...etcStyles,
      })}
    >
      {allocatedIdxForChildren(
        children,
        'Tabs.TabPanel',
        'Tabs.TabPanels 안에는 Tab.TabPanel 컴포넌트만 들어올 수 있습니다.'
      )}
    </div>
  );
};

export default TabPanels;
