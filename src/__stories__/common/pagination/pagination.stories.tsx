import { Flex, Pagination } from '@/ui';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Pagination> = {
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => (
    <Pagination.Provider>
      <Pagination.BtnContainer totalPage={21} range={5}>
        {({ pageNumList, isNextDisabled, isPrevDisabled }) => {
          return (
            <Flex gap="8px">
              <Pagination.PrevBtn isDisabled={isPrevDisabled} />
              {pageNumList.map((pageNum) => {
                return <Pagination.NumBtn pageNum={pageNum} />;
              })}
              <Pagination.NextBtn isDisabled={isNextDisabled} />
            </Flex>
          );
        }}
      </Pagination.BtnContainer>
    </Pagination.Provider>
  ),
};
