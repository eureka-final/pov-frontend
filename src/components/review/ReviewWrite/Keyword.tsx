/* eslint-disable react/prop-types */
import { Heading, Badge } from 'pov-design-system';
import { Container, Label, Keywords, BadgeContainer } from '../../styles/InputLabel';

interface KeywordProps {
  keywords: { text: string; cancel: boolean }[];
  onKeywordsChange: (keywords: string[]) => void;
}

const Keyword: React.FC<KeywordProps> = ({ keywords, onKeywordsChange }) => {
  const handleBadgeClick = (index: number) => {
    const updatedKeywords = keywords.map((keyword, i) => (i === index ? { ...keyword, cancel: !keyword.cancel } : keyword));

    // 취소된 키워드만 부모로 전달
    const selectedKeywords = updatedKeywords.filter((keyword) => keyword.cancel).map((keyword) => keyword.text);

    onKeywordsChange(selectedKeywords);
  };

  return (
    <Container>
      <Label>
        <Heading size="small">키워드</Heading>
      </Label>

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
            <Badge key={index + 5} variant="keyword" cancel={keyword.cancel} onClick={() => handleBadgeClick(index + 5)}>
              {keyword.text}
            </Badge>
          ))}
        </BadgeContainer>
      </Keywords>
    </Container>
  );
};

export default Keyword;
