import { ComponentPropsWithoutRef, FC, useMemo } from 'react';
import { CSSObject, css } from '@emotion/react';

import { useTabsContext } from '@/ui/common/tabs/model';

export interface ITabPanelProps extends ComponentPropsWithoutRef<'div'> {
  id?: string;
  etcStyles?: CSSObject;
  children: React.ReactNode;
}

const TabPanel: FC<ITabPanelProps> = ({ id, etcStyles = {}, children }) => {
  const { selectedId } = useTabsContext();

  const isSelected = useMemo(() => id === selectedId, [selectedId]);

  return (
    isSelected && (
      <div
        css={css({
          ...etcStyles,
        })}
      >
        {children}
      </div>
    )
  );
};

TabPanel.displayName = 'Tabs.TabPanel';

export default TabPanel;
