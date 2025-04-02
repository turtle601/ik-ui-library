import { Center, Tabs } from '@/ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tabs> = {};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Example: Story = {
  render: () => {
    return (
      <Tabs.Provider>
        <Tabs.TabList>
          <Tabs.Tab>
            {(isSelected: boolean) => {
              return (
                <Center
                  etcStyles={{
                    width: '200px',
                    height: '48px',
                    background: isSelected ? 'green' : 'transparent',
                    color: isSelected ? 'white' : '#000',
                  }}
                >
                  Tab 1
                </Center>
              );
            }}
          </Tabs.Tab>
          <Tabs.Tab>
            {(isSelected: boolean) => {
              return (
                <Center
                  etcStyles={{
                    width: '200px',
                    height: '48px',
                    background: isSelected ? 'green' : 'transparent',
                    color: isSelected ? 'white' : '#000',
                  }}
                >
                  Tab 2
                </Center>
              );
            }}
          </Tabs.Tab>
          <Tabs.Tab>
            {(isSelected: boolean) => {
              return (
                <Center
                  etcStyles={{
                    width: '200px',
                    height: '48px',
                    background: isSelected ? 'green' : 'transparent',
                    color: 'white',
                  }}
                >
                  Tab 3
                </Center>
              );
            }}
          </Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanels>
          <Tabs.TabPanel>탭 내용 1</Tabs.TabPanel>
          <Tabs.TabPanel>탭 내용 2</Tabs.TabPanel>
          <Tabs.TabPanel>탭 내용 3</Tabs.TabPanel>
        </Tabs.TabPanels>
      </Tabs.Provider>
    );
  },
};
