import { FC } from 'react';
import { css } from '@emotion/react';

import { useTabs } from '@/ui/common/tabs/hooks/useTabs';
import { TabsActionContext, TabsContext } from '@/ui/common/tabs/model';

export interface ITabsProviderProps {
  children: React.ReactNode;
}

const TabsProvider: FC<ITabsProviderProps> = ({ children }) => {
  const { selectedId, selectTab } = useTabs();

  return (
    <TabsContext.Provider value={{ selectedId }}>
      <TabsActionContext.Provider value={{ selectTab }}>
        <div
          css={css({
            position: 'relative',
          })}
        >
          {children}
        </div>
      </TabsActionContext.Provider>
    </TabsContext.Provider>
  );
};

export default TabsProvider;
