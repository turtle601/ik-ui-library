import { CSSObject, css } from '@emotion/react';
import { ComponentPropsWithoutRef, FC, ReactNode, useMemo } from 'react';

import { useTabsActionContext, useTabsContext } from '@/ui/common/tabs/model';

export interface ITabProps
  extends Omit<ComponentPropsWithoutRef<'li'>, 'children'> {
  id?: string;
  externalOnClick?: () => void;
  etcStyles?: CSSObject;
  children: (isSelected: boolean) => ReactNode;
}

const Tab: FC<ITabProps> = ({
  id,
  externalOnClick,
  children,
  etcStyles = {},
}) => {
  const { selectedId } = useTabsContext();
  const { selectTab } = useTabsActionContext();

  const isSelected = useMemo(() => selectedId === id, [id, selectedId]);

  const handleSelectTab = () => {
    if (externalOnClick) {
      externalOnClick();
    }

    if (id) {
      selectTab(id);
      return;
    }
  };

  return (
    <li
      onClick={handleSelectTab}
      css={css({
        cursor: 'pointer',
        ...etcStyles,
      })}
    >
      {children(isSelected)}
    </li>
  );
};

Tab.displayName = 'Tabs.Tab';

export default Tab;
