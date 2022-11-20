import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Modal, Row } from 'antd';

import ENDPOINTS from 'constants/endpoints';
import { BrandType } from 'types/brands.types';
import { BrandItem, BrandDetails } from 'components/Global';
import MESSAGES from 'constants/messages';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import logo from 'resources/images/logo.jpg';

import {
  StyledHomeWrapper,
  StyledHeaderWrapper,
  StyledHeader,
  StyledSearchFormWrapper,
  StyledInput,
  StyledNoResultsFound,
} from './styles';

interface HomePropTypes {
  className?: string;
}

const Home: React.FC<HomePropTypes> = ({ className }: HomePropTypes) => {
  const [term, setTerm] = useState<string>('');
  const [brands, setBrands] = useState<BrandType[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<BrandType | null>(null);

  const pattern = new RegExp(`.*(${term}).*`, 'gm');
  const results = !term
    ? brands
    : brands.filter(
        (item) =>
          !![
            item.title,
            item.description,
            item.content ?? '',
            ...(item?.attributes ?? []),
          ]
            .join(', ')
            .match(pattern),
      );

  useEffect(() => {
    void handleGetBrands();
  }, []);

  const handleGetBrands = async (): Promise<void> => {
    try {
      const response = await axios.get(ENDPOINTS.BRANDS.LIST);
      setBrands(response.data);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <StyledHomeWrapper className={className}>
      <StyledHeaderWrapper>
        <StyledHeader>
          <img width={150} src={logo} alt={MESSAGES.HOME_TITLE} />
          <h1>{MESSAGES.HOME_TITLE}</h1>
          <p>{MESSAGES.HOME_DESCRIPTION}</p>
        </StyledHeader>
        <StyledSearchFormWrapper>
          <StyledInput
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder={MESSAGES.SEARCH_FOR_BRANDS}
          />
        </StyledSearchFormWrapper>
      </StyledHeaderWrapper>
      <Row justify="center">
        {results.map((brand) => (
          <Col key={brand.title} lg={{ span: 6 }}>
            <BrandItem brand={brand} onClick={() => setSelectedBrand(brand)} />
          </Col>
        ))}
      </Row>
      {!results.length && (
        <StyledNoResultsFound>{MESSAGES.NO_RESULTS_FOUND}</StyledNoResultsFound>
      )}
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
