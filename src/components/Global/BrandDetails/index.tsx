import React from 'react';
import { Col, Divider, List, Row, Table, Typography } from 'antd';

import MESSAGES from 'constants/messages';
import { BrandType } from 'types/brands.types';

import { StyledBrandDetailWrapper } from './styles';
import { StyledImageWrapper } from '../BrandItem/styles';

interface BrandDetailsPropTypes {
  className?: string;
  brand: BrandType;
}

const BrandDetails: React.FC<BrandDetailsPropTypes> = ({
  className,
  brand,
}: BrandDetailsPropTypes) => (
  <StyledBrandDetailWrapper className={className}>
    <Row>
      <Col xs={{ span: 24 }}>
        <StyledImageWrapper>
          <img alt={brand.title} src={`/brands/images/${brand.logo}`} />
        </StyledImageWrapper>
      </Col>
      <Col xs={{ span: 24 }}>
        <h2>{brand.title}</h2>
        <p>{brand.description}</p>
        <Divider />
      </Col>
      <Col xs={{ span: 24 }}>
        <p>{brand.content}</p>
        <Divider />
      </Col>
      {brand?.links?.length !== 0 && (
        <Col xs={{ span: 24 }}>
          <List
            header={<div>{MESSAGES.RELATED_LINKS}</div>}
            bordered
            dataSource={brand.links}
            renderItem={(link) => (
              <List.Item>
                <a
                  href={link.href}
                  target="_blank"
                  title={link.title}
                  rel="noreferrer"
                >
                  {link.title}
                </a>
              </List.Item>
            )}
          />
        </Col>
      )}
      {brand?.attributes?.length !== 0 && (
        <Col xs={{ span: 24 }}>
          <Table
            direction={'rtl'}
            pagination={false}
            columns={[
              {
                dataIndex: 'key',
                key: 'key',
              },
              {
                dataIndex: 'value',
                key: 'value',
              },
            ]}
            dataSource={brand.attributes}
          />
        </Col>
      )}
    </Row>
  </StyledBrandDetailWrapper>
);

export default BrandDetails;
