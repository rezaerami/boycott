import React from 'react';
import { Card } from 'antd';

import { BrandType } from 'types/brands.types';

import { StyledCardWrapper, StyledImageWrapper } from './styles';
const { Meta } = Card;

interface BrandItemPropTypes {
  className?: string;
  brand: BrandType;
  onClick: () => void;
}

const BrandItem: React.FC<BrandItemPropTypes> = ({
  className,
  brand,
  onClick,
}: BrandItemPropTypes) => (
  <StyledCardWrapper className={className} onClick={onClick}>
    <Card>
      <StyledImageWrapper>
        <img alt={brand.title} src={`/brands/images/${brand.logo}`} />
      </StyledImageWrapper>
      <Meta title={brand.title} description={brand.description} />
    </Card>
  </StyledCardWrapper>
);

export default BrandItem;
