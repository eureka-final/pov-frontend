import { useNavigate } from 'react-router-dom';
import { CardContainer, CardFlex, ReviewCardContainer, TitleInfo } from './ClubCard.style';
import { Body, Paragraph, Input, Icon, Heading, Logo } from 'pov-design-system';
import { useClubs } from '../../hooks/club/useClubs';

function ClubCard() {
  const navigate = useNavigate();
  const { clubsData } = useClubs();

  return (
    <>
      <Input placeholder="검색어를 입력해 주세요" icon={<Icon icon="search" color="#ADACAF" />} />

      {clubsData.map((club) => {
        return (
          <CardContainer
            key={club.clubId}
            onClick={() => {
              navigate(`/club/detail/${club.clubId}`);
            }}
          >
            <CardFlex>
              <ReviewCardContainer>
                <Paragraph>{club.clubName}</Paragraph>
                <Body size="large">{club.description}</Body>
                <Body>
                  {club.participant}/{club.maxParticipant}
                </Body>
                <Body>북마크 {club.collections}개</Body>
              </ReviewCardContainer>
            </CardFlex>
          </CardContainer>
        );
      })}
    </>
  );
}

// eslint-disable-next-line react/display-name
ClubCard.Empty = () => {
  return (
    <TitleInfo>
      <Heading size="xxLarge">등록된 클럽이 없습니다.</Heading>
      <Logo icon="type3" />
    </TitleInfo>
  );
};

export default ClubCard;
