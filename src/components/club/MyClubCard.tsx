import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Input, Body, Icon, Heading, Logo, Badge } from 'pov-design-system';

import { CardContainer, CardFlex, ReviewCardContainer, TitleInfo, FlexWrapper } from '@components/club/ClubCard.style';
import { useMyClubsQuery } from '@/hooks/queries/useClubsQuery';

function MyClubCard() {
  const navigate = useNavigate();
  const { clubsData } = useMyClubsQuery();

  const [searchKeyword, setSearchKeyword] = useState('');

  const filteredClubs = clubsData?.data.clubs.filter((club) => club.clubName.toLowerCase().includes(searchKeyword.toLowerCase())) || [];

  return (
    <>
      <Input
        placeholder="검색어를 입력해 주세요"
        icon={<Icon icon="search" color="#ADACAF" />}
        value={searchKeyword}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)}
      />

      {filteredClubs.map((club) => {
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
                    {club.participant}/{club.maxParticipants}
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
