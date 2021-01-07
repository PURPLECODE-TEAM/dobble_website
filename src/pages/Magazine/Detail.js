import React from 'react';
import styled from 'styled-components';
import ItemLayout from './ItemLayout';
import { MagazineCategory, Season } from './categoryData';
import useList from '../../hooks/useList';

const Detail = ({ match, history }) => {
  //경로를 hook에 보내줘서 경로에 맞는 firebase 데이터를 받아온다.
  const [magazineData, error, loading, empty] = useList(match);

  const onOpen = () => {
    history.push('/magazinepage');
  };
  return (
    <div>
      <ItemLayout MagazineCategory={MagazineCategory} Season={Season}>
        {error && <div>Error : {error}</div>}
        {loading && <div>Loading...</div>}
        {empty && <div>매거진이 존재하지 않습니다.</div>}
        {magazineData &&
          magazineData.map((data) => (
            <ProductDiv key={data.title}>
              <ProductImgDiv>
                <ProductImg src={data.mainImg.img} alt={data.mainImg.alt} />
              </ProductImgDiv>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '12px',
                }}
              >
                <Title onClick={() => onOpen(data)} style={{ cursor: 'pointer' }}>
                  {data.title}
                </Title>
                <HashTag>{data.hashtag}</HashTag>
              </div>
              <Text>{data.description}</Text>
            </ProductDiv>
          ))}
      </ItemLayout>
    </div>
  );
};
const ProductDiv = styled.div`
  display: inline-block;
  margin-top: 40px;
  margin-right: 90px;
  margin-bottom: 50px;
  padding-top: 0;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const ProductImgDiv = styled.div`
  width: 300px;
  height: 180px;
  overflow: hidden;
  border-radius: 18px 18px;
  background: rgb(220, 220, 220);
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const Title = styled.div`
  font-size: 1rem;
  font-weight: bold;
  font-family: 'Stilu';
`;
const HashTag = styled.div`
  font-size: 0.8rem;
  width: 60px;
  text-align: center;
  color: white;
  overflow: hidden;
  border-radius: 18px 18px;
  background: #ea404a;
  font-family: 'Stilu';
`;
const Text = styled.div`
  font-size: 0.8rem;
  font-family: 'Arial';
  color: #888888;
  margin-top: 5px;
`;
export default Detail;
