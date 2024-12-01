import { useState } from 'react';
import Padded from '../../components/templates/Padded/Padded';
import { Badge } from 'pov-design-system';
import { Wrapper } from './Review.style';
import ReviewList from '../../components/review/ReviewList';

const Index = () => {
  const [sections, setSections] = useState([
    { text: '모든 리뷰', click: true },
    { text: '내 리뷰', click: false },
    { text: '클럽 리뷰', click: false },
  ]);

  const [sectionsType, setSectionsType] = useState('모든 리뷰');

  const handleBadgeClick = (index: number) => {
    const updatedSections = sections.map((section, i) => ({
      ...section,
      click: i === index,
    }));

    setSections(updatedSections);

    // 클릭한 섹션에 따라 ReviewList를 뿌려주기 위해 현재 sections 값 할당
    setSectionsType(sections[index].text);
  };

  return (
    <Padded>
      <Wrapper>
        {sections.map((section, index) => (
          <Badge key={index} variant="section" click={section.click} onClick={() => handleBadgeClick(index)} css={{ cursor: 'pointer' }}>
            {section.text}
          </Badge>
        ))}
      </Wrapper>
      <ReviewList sectionsType={sectionsType} />
    </Padded>
  );
};

export default Index;
