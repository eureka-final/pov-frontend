import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge, Body } from 'pov-design-system';
import { BadgeWrapper, Wrapper, ClubBtn } from '../Review/Review.style';
import ClubList from '../../components/club/ClubList';
import MyClubList from '../../components/club/MyClubList';

const Index = () => {
  const navigate = useNavigate();

  const [sections, setSections] = useState([
    { text: '모든 클럽', click: true },
    { text: '내 클럽', click: false },
  ]);

  const [sectionsType, setSectionsType] = useState('모든 클럽');

  const handleBadgeClick = (index: number) => {
    const updatedSections = sections.map((section, i) => ({
      ...section,
      click: i === index,
    }));

    setSections(updatedSections);

    // 클릭한 섹션에 따라 ReviewList를 뿌려주기 위해 현재 sections 값 할당
    setSectionsType(sections[index].text);
  };

  const handleClubCreate = () => {
    navigate('/club/create');
  };

  return (
    <>
      <Wrapper>
        <BadgeWrapper>
          {sections.map((section, index) => (
            <Badge key={index} size="large" variant="section" click={section.click} onClick={() => handleBadgeClick(index)} css={{ cursor: 'pointer' }}>
              {section.text}
            </Badge>
          ))}
        </BadgeWrapper>
        <ClubBtn onClick={handleClubCreate}>
          <Body size="xLarge">+ 클럽 만들기</Body>
        </ClubBtn>
      </Wrapper>
      {sectionsType === '모든 클럽' && <ClubList />}
      {sectionsType === '내 클럽' && <MyClubList />}
    </>
  );
};

export default Index;
