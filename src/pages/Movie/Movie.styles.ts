import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
`;

export const InputContainer = styled.div`
  margin: 24px 0;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

export const Section = styled.section`
  width: 100%;
`;

export const CardContainer = styled.div`
  display: flex;
  overflow-x: auto;
  @media (min-width: 0px) and (max-width: 600px) {
    gap: 16px;
  }

  @media (min-width: 600px) {
    width: 100%;
    gap: 24px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  min-width: 150px;
  max-width: 170px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ImageLayer = styled.img`
  width: 100%;
  @media (min-width: 0px) and (max-width: 600px) {
    height: 220px;
  }

  @media (min-width: 600px) {
    height: 260px;
  }
  background: url('https://s3-alpha-sig.figma.com/img/e6e7/2525/ff55062ea84c1c29644c11b52ffd3e4e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OGpweIGZMfE-f19r-yrQPCtuMFKPyyoRL5IyWBBhvLVsQdo4dKjksz8~-rPhxIDSpDVmJ3ZenNTlQEuk-sGkE9m~Fftn-KPVTpACV0F2V2z9AFo1JVovVPk9lN8talydRJEftN-SgZECwsjNIXPq26zqZMEOq-VBHKXkwN~bmrrjbTjEINB5IWX6h4Qs0D2Yn6w3kmfU2hwa~zdzJ42LpezDQ2bHEQtIoxC56kao2nFKhFztc7Lxx78JPHE9tEyejvBYg-PZdCJf~78DXtIBMlAsGkXk6Mt96aRYVxxaoNezfHz7OiyWFLPGV0p8Vp1oHq61SPrJM8ahO7GSYu2qMA__');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const InfoContainer = styled.div``;

export const Info = styled.div`
  display: flex;
  gap: 10px;
`;

export const Count = styled.span``;
