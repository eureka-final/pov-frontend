import Padded from '../../components/templates/Padded/Padded';
import { Heading, Body, Icon } from 'pov-design-system';
import { Container, InputContainer, SearchInput, Section, CardContainer, Card, ImageLayer, InfoContainer, Info, Count } from './Movie.styles';
import { constants } from '../../constants/constants';
import { useState } from 'react';

interface User {
  name: string;
}

const Index = () => {
  const [userData, setUserData] = useState<User>({
    name: '혜밍웨이',
  });
  const [value, setValue] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Padded>
      <Container>
        <InputContainer>
          <SearchInput id="example-input" type="text" value={value} placeholder="영화 검색하기" onChange={handleSearch} />
        </InputContainer>
        <Section>
          <Heading size="large">{`${userData.name}${constants.movies.main.topic.recommendation}`}</Heading>
          <CardContainer>
            <Card>
              <ImageLayer />
              <Heading size="medium">{'올드보이'}</Heading>
              <Body size="large">Body02</Body>
              <Info>
                <InfoContainer>
                  <Icon icon="heartline" color="#ffffff" />
                  <Count>156</Count>
                </InfoContainer>
                <InfoContainer>
                  <Icon icon="reviewline" color="#ffffff" />
                  <Count>15</Count>
                </InfoContainer>
              </Info>
            </Card>
            <Card>
              <ImageLayer />
              <Heading size="medium">{'올드보이'}</Heading>
              <Body size="large">Body02</Body>
              <Info>
                <InfoContainer>
                  <Icon icon="heartline" color="#ffffff" />
                  <Count>156</Count>
                </InfoContainer>
                <InfoContainer>
                  <Icon icon="reviewline" color="#ffffff" />
                  <Count>15</Count>
                </InfoContainer>
              </Info>
            </Card>
            <Card>
              <ImageLayer />
              <Heading size="medium">{'올드보이'}</Heading>
              <Body size="large">Body02</Body>
              <Info>
                <InfoContainer>
                  <Icon icon="heartline" color="#ffffff" />
                  <Count>156</Count>
                </InfoContainer>
                <InfoContainer>
                  <Icon icon="reviewline" color="#ffffff" />
                  <Count>15</Count>
                </InfoContainer>
              </Info>
            </Card>
            <Card>
              <ImageLayer />
              <Heading size="medium">{'올드보이'}</Heading>
              <Body size="large">Body02</Body>
              <Info>
                <InfoContainer>
                  <Icon icon="heartline" color="#ffffff" />
                  <Count>156</Count>
                </InfoContainer>
                <InfoContainer>
                  <Icon icon="reviewline" color="#ffffff" />
                  <Count>15</Count>
                </InfoContainer>
              </Info>
            </Card>
          </CardContainer>
        </Section>
      </Container>
    </Padded>
  );
};

export default Index;
