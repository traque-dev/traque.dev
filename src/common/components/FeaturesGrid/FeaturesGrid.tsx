import { ReactNode } from 'react';
import { GridItem } from './GridItem';

type Item = {
  area: string;
  icon: ReactNode;
  title: string;
  description: string;
};

type Props = {
  items: Item[];
};

export function FeaturesGrid({ items }: Props) {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      {items.map(({ area, icon, title, description }) => (
        <GridItem
          key={title}
          area={area}
          icon={icon}
          title={title}
          description={description}
        />
      ))}
    </ul>
  );
}
