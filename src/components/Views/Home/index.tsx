import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Modal, Row } from 'antd';

import ENDPOINTS from 'constants/endpoints';
import { BrandType } from 'types/brands.types';
import { BrandItem, BrandDetails } from 'components/Global';

import { StyledHomeWrapper } from './styles';

interface HomePropTypes {
  className?: string;
}

const Home: React.FC<HomePropTypes> = ({ className }: HomePropTypes) => {
  const [brands, setBrands] = useState<BrandType[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<BrandType | null>(null);

  useEffect(() => {
    void handleGetBrands();
  }, []);

  const handleGetBrands = async (): Promise<void> => {
    try {
      const results = await axios.get(ENDPOINTS.BRANDS.LIST);
      setBrands(results.data);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <StyledHomeWrapper className={className}>
      <Row justify="center">
        {brands.map((brand) => (
          <Col key={brand.title} lg={{ span: 6 }}>
            <BrandItem brand={brand} onClick={() => setSelectedBrand(brand)} />
          </Col>
        ))}
      </Row>
      <Modal
        open={!!selectedBrand}
        onCancel={() => setSelectedBrand(null)}
        footer={false}
      >
        {!!selectedBrand && <BrandDetails brand={selectedBrand} />}
      </Modal>
    </StyledHomeWrapper>
  );
};

export default Home;
