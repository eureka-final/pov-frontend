import { useState } from 'react';
import { Heading, Badge } from 'pov-design-system';
import { Container, Name, Keywords, BadgeContainer } from './Keyword.style';

interface KeywordProps {
  onKeywordsChange: (keywords: string[]) => void;
}

// eslint-disable-next-line react/prop-types
const Keyword: React.FC<KeywordProps> = ({ onKeywordsChange }) => {
  // 초기 키워드 상태 설정: 긍정 5개, 부정 5개
  const [keywords, setKeywords] = useState([
    { text: '감동적인', cancel: false },
    { text: '재미있는', cancel: false },
    { text: '몰입감 있는', cancel: false },
    { text: '연기력이 뛰어난', cancel: false },
    { text: '연출이 뛰어난', cancel: false },
    { text: '지루한', cancel: false },
    { text: '연기가 어색한', cancel: false },
    { text: '연출이 어색한', cancel: false },
    { text: '전개가 느린', cancel: false },
    { text: '기대이하의', cancel: false },
  ]);

  const handleBadgeClick = (index: number) => {
    const updatedKeywords = keywords.map((keyword, i) => (i === index ? { ...keyword, cancel: !keyword.cancel } : keyword));
    setKeywords(updatedKeywords);

    const selectedKeywords = updatedKeywords.filter((keyword) => keyword.cancel).map((keyword) => keyword.text);

    onKeywordsChange(selectedKeywords);
  };

  return (
    <Container>
      <Name>
        <Heading size="small">키워드</Heading>
      </Name>

      <Keywords>
        <BadgeContainer>
          {keywords.slice(0, 5).map((keyword, index) => (
            <Badge key={index} variant="keyword" cancel={keyword.cancel} onClick={() => handleBadgeClick(index)}>
              {keyword.text}
            </Badge>
          ))}
        </BadgeContainer>

        <BadgeContainer>
          {keywords.slice(5).map((keyword, index) => (
            <Badge
              key={index + 5} // slice 때문에 인덱스를 보정
              variant="keyword"
              cancel={keyword.cancel}
              onClick={() => handleBadgeClick(index + 5)}
            >
              {keyword.text}
            </Badge>
          ))}
        </BadgeContainer>
      </Keywords>
    </Container>
  );
};

export default Keyword;
