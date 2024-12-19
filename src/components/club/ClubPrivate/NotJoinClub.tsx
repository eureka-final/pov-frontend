import Basic from '../../../components/templates/Basic/Basic';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useClubPrivateQuery } from '../../../hooks/queries/useClubsQuery';

import { Button, Heading, Badge, Body, useOverlay, Modal } from 'pov-design-system';
import {
  Container,
  HeaderContainer,
  FlexWrapper,
  Additionals,
  ReviewInfo,
  BackgroundLayer,
  ModalContainer,
  JoinContainer,
} from '../../../components/club/ClubDetail/ClubDetail.styles';
import { useJoinPrivateClubMutation } from '../../../hooks/queries/useJoinClubMutation';
import { useToast } from '../../../hooks/common/useToast';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const NotJoinClub = () => {
  const { isOpen: isSaveOpen, open: saveOpen, close: saveClose } = useOverlay();
  const { createToast } = useToast();

  const query = useQuery();
  const [privateQueries, setPrivateQueries] = useState<string | null>(null);

  useEffect(() => {
    const privateQuery = query.get('value');
    setPrivateQueries(privateQuery || '');
  }, [query]);

  const { clubsData } = useClubPrivateQuery(privateQueries || '', { enabled: !!privateQueries });

  const joinPrivateMutation = useJoinPrivateClubMutation(privateQueries || '');

  const handleJoin = () => {
    joinPrivateMutation.mutate(
      { privateQueries: privateQueries! },
      {
        onSuccess: () => {
          saveClose();
          createToast('클럽 가입에 성공했어요.', 'success');
        },
      }
    );
  };

  return (
    <Basic>
      {clubsData && (
        <>
          <Container>
            <HeaderContainer src={clubsData.data.clubImage}>
              <BackgroundLayer src={clubsData.data.clubImage}></BackgroundLayer>
              <ReviewInfo>
                <Heading size="xLarge">{clubsData.data.clubName}</Heading>
                <Body size="large">{clubsData.data.clubDescription}</Body>
                <FlexWrapper>
                  <Body>
                    {clubsData.data.participant}/{clubsData.data.maxParticipants}
                  </Body>
                  <Body>·</Body>
                  <Body>북마크 {clubsData.data.movieCount}개</Body>
                </FlexWrapper>
                <Additionals>
                  {clubsData.data.clubFavorGenres.map((item, index) => (
                    <Badge variant="keyword" cancel={true} key={item + index}>
                      {item}
                    </Badge>
                  ))}
                </Additionals>
              </ReviewInfo>
            </HeaderContainer>
            <JoinContainer>
              <Button size="large" onClick={saveOpen}>
                클럽 참여하기
              </Button>
            </JoinContainer>
          </Container>
          {/* 참여하기 버튼 누르면 나오는 모달창 */}
          <Modal isOpen={isSaveOpen} closeModal={saveClose}>
            <Heading size="medium">클럽에 참여하시겠어요?</Heading>
            <Body>참여하기를 클릭하면 바로 클럽에 가입돼요.</Body>
            <ModalContainer>
              <Button variant="secondary" onClick={saveClose} css={{ width: '45%' }}>
                취소하기
              </Button>
              <Button variant="primary" onClick={handleJoin} css={{ width: '45%' }}>
                참여하기
              </Button>
            </ModalContainer>
          </Modal>
        </>
      )}
    </Basic>
  );
};

export default NotJoinClub;
