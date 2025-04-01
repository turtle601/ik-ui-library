import { css, CSSObject } from '@emotion/react';

import { Center, Grid } from '@/ui';

import Button from '@/ui/common/tab/button';

import type { Meta, StoryObj } from '@storybook/react';
import { color } from '@/config';

const meta: Meta<typeof Button> = {
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

const getGridItemStyle = (): CSSObject => {
  return {
    width: '100%',
    height: '50px',
    border: '1px solid #000',
  };
};

export const ColorTable: Story = {
  render: () => {
    return (
      <Grid.Container>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>색상 이름</Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>색상 코드</Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>primary-1</Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>
            <div
              css={css({
                width: '20px',
                height: '20px',
                backgroundColor: color['primary-1'],
                marginRight: '10px',
              })}
            ></div>
            #fff2ee
          </Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>primary-2</Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>
            <div
              css={css({
                width: '20px',
                height: '20px',
                backgroundColor: color['primary-2'],
                marginRight: '10px',
              })}
            ></div>
            #ffe5dd
          </Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>primary-3</Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>
            <div
              css={css({
                width: '20px',
                height: '20px',
                backgroundColor: color['primary-3'],
                marginRight: '10px',
              })}
            ></div>
            #ffcabb
          </Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>primary-4</Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>
            <div
              css={css({
                width: '20px',
                height: '20px',
                backgroundColor: color['primary-4'],
                marginRight: '10px',
              })}
            ></div>
            #ffb098
          </Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>gray400</Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>
            <div
              css={css({
                width: '20px',
                height: '20px',
                backgroundColor: color['gray400'],
                marginRight: '10px',
              })}
            ></div>
            #222
          </Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>gray350</Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>
            <div
              css={css({
                width: '20px',
                height: '20px',
                backgroundColor: color['gray350'],
                marginRight: '10px',
              })}
            ></div>
            #999
          </Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>gray300</Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>
            <div
              css={css({
                width: '20px',
                height: '20px',
                backgroundColor: color['gray300'],
                marginRight: '10px',
              })}
            ></div>
            #5E5F61
          </Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>gray275</Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>
            <div
              css={css({
                width: '20px',
                height: '20px',
                backgroundColor: color['gray275'],
                marginRight: '10px',
              })}
            ></div>
            #CCC
          </Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>gray250</Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>
            <div
              css={css({
                width: '20px',
                height: '20px',
                backgroundColor: color['gray250'],
                marginRight: '10px',
              })}
            ></div>
            #C9CACD
          </Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>gray200</Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>
            <div
              css={css({
                width: '20px',
                height: '20px',
                backgroundColor: color['gray200'],
                marginRight: '10px',
              })}
            ></div>
            #E1E2E4
          </Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>gray150</Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>
            <div
              css={css({
                width: '20px',
                height: '20px',
                backgroundColor: color['gray150'],
                marginRight: '10px',
              })}
            ></div>
            #f2f5f8
          </Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>gray100</Center>
        </Grid.Item>
        <Grid.Item xs={6}>
          <Center etcStyles={{ ...getGridItemStyle() }}>
            <div
              css={css({
                width: '20px',
                height: '20px',
                backgroundColor: color['gray100'],
                marginRight: '10px',
              })}
            ></div>
            #f0f1f3
          </Center>
        </Grid.Item>
      </Grid.Container>
    );
  },
};
