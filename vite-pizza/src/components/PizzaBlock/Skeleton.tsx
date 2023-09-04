import React from 'react';
import ContentLoader from 'react-content-loader';

type SkeletonProps = {
  key: number;
};

export const Skeleton: React.FC<SkeletonProps> = (props) => (
  <ContentLoader
    className='pizza-block'
    speed={3}
    width={280}
    height={500}
    viewBox='0 0 280 463'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}>
    <rect x='0' y='270' rx='10' ry='10' width='280' height='23' />
    <rect x='0' y='310' rx='10' ry='10' width='280' height='88' />
    <rect x='0' y='420' rx='10' ry='10' width='95' height='30' />
    <rect x='125' y='415' rx='24' ry='24' width='152' height='45' />
    <circle cx='134' cy='125' r='125' />
  </ContentLoader>
);
