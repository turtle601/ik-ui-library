import { ComponentPropsWithoutRef, FC } from 'react';
import { CSSObject, css } from '@emotion/react';

import { Flex } from '@/ui/layout';

import { allocatedIdxForChildren } from '@/ui/common/tabs/lib';

export interface ITabListProps extends ComponentPropsWithoutRef<'ul'> {
  etcStyles?: CSSObject;
  children: React.ReactNode;
}

const TabList: FC<ITabListProps> = ({ etcStyles = {}, children }) => {
  return (
    <Flex
      as="ul"
      css={css({
        ...etcStyles,
      })}
    >
      {allocatedIdxForChildren(
        children,
        'Tabs.Tab',
        'Tabs.TabList 안에는 Tab.Tab 컴포넌트만 들어올 수 있습니다.'
      )}
    </Flex>
  );
};

export default TabList;
