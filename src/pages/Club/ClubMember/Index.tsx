import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { ReviewListContainer, CardContainer, CardFlex, ReviewCardContainer } from '../../../components/club/ClubCard.style';
import { Body, Input, Icon, Heading, Avatar, useOverlay, Modal, Button } from 'pov-design-system';
import { useClubMemberQuery } from '../../../hooks/queries/useClubsQuery';
import { useChangeLeaderMutation } from '../../../hooks/queries/useEditClubMutation';
import { useToast } from '../../../hooks/common/useToast';

function Index() {
  const { clubId } = useParams<{ clubId: string }>();

  const { clubsData, refetch } = useClubMemberQuery(clubId!);

  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedEmail, setSelectedEmail] = useState<string>('');

  const { isOpen: isSaveOpen, open: saveOpen, close: saveClose } = useOverlay();
  const { createToast } = useToast();

  const leaderChangeMutation = useChangeLeaderMutation();

  // 그룹장을 항상 리스트의 첫 번째에 배치하는 로직
  const sortedMembers =
    clubsData?.data.clubMember
      .filter((member) => member.nickname.toLowerCase().includes(searchKeyword.toLowerCase())) // 검색 필터
      .sort((a, b) => (b.isLeader ? 1 : 0) - (a.isLeader ? 1 : 0)) || []; // 그룹장을 앞에 배치

  const handleChange = () => {
    const requestData = {
      newLeaderEmail: selectedEmail,
    };
    leaderChangeMutation.mutate(
      { clubId: clubId!, ...requestData },
      {
        onSuccess: () => {
          saveClose();
          createToast('클럽장이 변경되었어요.', 'success');
          refetch();
        },
      }
    );
  };

  return (
    <>
      <Input
        placeholder="검색어를 입력해 주세요"
        icon={<Icon icon="search" color="#ADACAF" />}
        value={searchKeyword}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value)}
      />

      <ReviewListContainer>
        {sortedMembers.map((member) => (
          <CardContainer key={member.nickname}>
            <CardFlex>
              <Avatar size="small" username={member.nickname} src={member.profileImage} />
              <ReviewCardContainer>
                <Heading size="large">{member.nickname}</Heading>
                {member.isLeader ? <Body size="large">그룹장</Body> : <Body size="large">멤버</Body>}
              </ReviewCardContainer>
              {member.isLeader ? (
                <></>
              ) : (
                <Heading
                  size="small"
                  css={{ color: '#1BD27D', cursor: 'pointer' }}
                  onClick={() => {
                    setSelectedEmail(member.email);
                    saveOpen();
                  }}
                >
                  그룹장 임명하기
                </Heading>
              )}
            </CardFlex>
          </CardContainer>
        ))}
        <Modal isOpen={isSaveOpen} closeModal={saveClose}>
          <Heading>클럽장을 위임하시겠습니까?</Heading>
          <Button variant="primary" onClick={handleChange} css={{ marginTop: '20px' }}>
            확인
          </Button>
        </Modal>
      </ReviewListContainer>
    </>
  );
}

export default Index;
