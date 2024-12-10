import { useNavigate } from 'react-router-dom';
import { CardContainer, CardFlex, ReviewCardContainer, TitleInfo, FlexWrapper } from './ClubCard.style';
import { Input, Body, Icon, Heading, Logo, Badge } from 'pov-design-system';
import { useMyClubsQuery } from '../../hooks/queries/useClubsQuery';

function MyClubCard() {
  const navigate = useNavigate();
  const { clubsData } = useMyClubsQuery();

  return (
    <>
      <Input placeholder="검색어를 입력해 주세요" icon={<Icon icon="search" color="#ADACAF" />} />

      {clubsData &&
        clubsData.data.clubs.map((club) => {
          return (
            <CardContainer
              key={club.clubId}
              onClick={() => {
                navigate(`/club/${club.clubId}/detail`);
              }}
            >
              <CardFlex>
                <ReviewCardContainer>
                  <Heading size="large">{club.clubName}</Heading>
                  <Body size="large">{club.clubDescription}</Body>
                  <FlexWrapper>
                    <Body>
                      {club.participant}/{club.maxParticipant}
                    </Body>
                    <Body>·</Body>
                    <Body>북마크 {club.clubMovieCount}개</Body>
                  </FlexWrapper>
                </ReviewCardContainer>
              </CardFlex>
              <FlexWrapper>
                {club.clubFavorGenres.map((genre, index) => (
                  <Badge key={index} variant="keyword" cancel={true}>
                    {genre}
                  </Badge>
                ))}
              </FlexWrapper>
            </CardContainer>
          );
        })}
    </>
  );
}

// eslint-disable-next-line react/display-name
MyClubCard.Empty = () => {
  return (
    <TitleInfo>
      <Heading size="xxLarge">등록된 클럽이 없습니다.</Heading>
      <Logo icon="type3" />
    </TitleInfo>
  );
};

export default MyClubCard;
