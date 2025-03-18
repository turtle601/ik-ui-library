import { ComponentPropsWithoutRef, ElementType } from 'react';

export type PolymorpicProps<T extends ElementType, P> = {
  as?: T;
} & P &
  ComponentPropsWithoutRef<T>;
