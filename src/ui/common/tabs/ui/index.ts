import TabsProvider from '@/ui/common/tabs/ui/provider';
import Tab from '@/ui/common/tabs/ui/tab';
import TabList from '@/ui/common/tabs/ui/tabList';
import TabPanel from '@/ui/common/tabs/ui/tabPanel';
import TabPanels from '@/ui/common/tabs/ui/tabPanels';

export const Tabs = {
  Provider: TabsProvider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} as const;
