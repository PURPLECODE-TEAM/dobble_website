import React from 'react';
import styled from 'styled-components';
import { brandsData } from '../../components/Header/interface';
import ItemLayout from '../../components/ItemLayout';
import ProductDetail from '../../components/ProductDetail';
import { useScrollTop } from '../../utils/scrollTop';
import useLoadData from '../../hooks/useLoadData';

const Brand = () => {
  useScrollTop(true);

  //firebase database ref key와 category 이름을 hook에 보내줘서 해당 테이블 해당 카테고리에 맞는 데이터를 받아온다.
  const [firebaseData, loading, error, empty] = useLoadData('product', 'all', 'brand');

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Banner>
        <Desc>
          <SubDesc>기부 스토어 브랜드와 기부처에 따른 아이템을 확인해 보세요</SubDesc>
          <Title>Brand</Title>
          <Title>2020 F/W</Title>
        </Desc>
      </Banner>
      <ItemLayout data={brandsData}>
        <Top>Best</Top>
        {error && <div>Error : {error}</div>}
        {loading && <div>Loading...</div>}
        {empty && <div>상품이 존재하지 않습니다.</div>}
        {firebaseData && firebaseData.map((data) => <ProductDetail key={data.alt} data={data} />)}
      </ItemLayout>
    </div>
  );
};

const Top = styled.div`
  font-size: 1.4rem;
  width: 100%;
  padding-bottom: 20px;
`;

const Banner = styled.div`
  height: 80vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url('https://github.com/PURPLECODE-TEAM/dobble_website/blob/master/src/components/img/brandBanner.png?raw=true');
`;

const Desc = styled.div`
  padding: 0 80px;
  padding-top: 140px;
  @media (max-width: 768px) {
    padding: 0 40px;
    padding-top: 140px;
  }
`;

const SubDesc = styled.div`
  color: rgb(70, 70, 70);
  font-size: 0.8rem;
  font-family: Arial;
`;

const Title = styled.div`
  color: #303030;
  margin-top: 10px;
  font-size: 3.4rem;
  font-family: Stilu;
  font-weight: bold;
`;

export default Brand;
