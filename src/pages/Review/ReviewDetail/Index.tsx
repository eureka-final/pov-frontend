import Basic from '../../../components/templates/Basic/Basic';
import { useState } from 'react';
import { Heading, Body, Paragraph, Icon, Badge } from 'pov-design-system';
import { Container, HeaderContainer, Additionals, TitleInfo, ReviewInfo, Count, BodyContainer, BackgroundLayer } from './ReviewDetail.styles';
import Profile from '../../../components/common/Profile';

const Index = () => {
  const [reviewData, setReviewData] = useState({
    reviewer: '혜밍웨이',
    profileImge: 'https://avatars2.githubusercontent.com/u/123456',
    title: '누구냐, 너',
    date: '2003.11',
    keywords: ['감동적인', '연출이 뛰어난'],
    likes: '156',
    contents:
      'Pizza ipsum dolor meat lovers buffalo. Lovers Bianca chicken buffalo beef thin large party Chicago pineapple. Ricotta pineapple thin pesto large anchovies. Hawaiian Bianca pepperoni large Aussie lot melted banana olives. Bianca meatball roll pork pepperoni lovers. Buffalo thin onions dolor Philly. Green party marinara black rib lot beef ham. Meatball dolor marinara onions string. Garlic Hawaiian sauce crust and. Pineapple anchovies thin Chicago bbq. Anchovies tomato peppers Aussie white mozzarella Aussie. Sauce Aussie marinara broccoli style marinara. Meat mozzarella sauce cheese ipsum dolor string. Lasagna meatball sautéed marinara beef pesto and. NY string party Chicago banana meat crust mouth. Dolor bell bell tomato cheese pie large. Extra string mouth sauce stuffed broccoli. Meatball burnt onions and pork personal tomatoes olives wing chicken. Buffalo personal thin style red ricotta Philly tossed. Thin ipsum pineapple roll party. Sautéed melted mouth Philly lot bacon pie. Tossed onions white meat sautéed extra Aussie tomato. Rib olives lot Philly sauce.',
    url: 'https://s3-alpha-sig.figma.com/img/472e/ae15/f9f6158006f9a9a41457e6b4b6d6154e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oTRHhPd9IUhqT~UvQ1cAGibItqIX~QP3qmoUvKRw45gi2Gf3cib6HeFLt32GBig2RDYo8xvUVz-Fg0jg78gwaWi6gl2GUmmhFHRGH-P7DW9cWCLDpCjku08nThf3L~-C-gOqL9CjS3322Drr9ZjtJk7GQZ2lMfZjnzF9RMXf~IzEGYOf-cRV-eFxe5GGhx0w2y~Fd32U7E8aIYODKefdq~GNMFVTb0Pr2Rkoi3bWr99Pr8oVEs4d-lvxrH8hn2M2uISXKd-1DBPQ1~yNp8RlNjtC-TlLuYWJN75XjnLJXJPagrjxVYGkgPxtVz5Co7t2CNrGyDB7BxRNf-EODwWw-A__',
  });

  return (
    <Basic>
      <Container>
        <HeaderContainer src={reviewData.url}>
          <BackgroundLayer src={reviewData.url}></BackgroundLayer>
          <TitleInfo>
            <Heading size="xLarge">{reviewData.title}</Heading>
          </TitleInfo>
          <ReviewInfo>
            <Profile name={reviewData.reviewer} avatarUrl={reviewData.profileImge} />
            <BodyContainer>
              <Body size="large">{reviewData.date}</Body>
            </BodyContainer>
            <Additionals>
              <Icon icon="heartfill" color="#0DE781" />
              <Count color="#0DE781">{reviewData.likes}</Count>
            </Additionals>
            <Additionals>
              {reviewData.keywords.map((item, index) => (
                <Badge variant="keyword" cancel={true} key={item + index}>
                  {item}
                </Badge>
              ))}
            </Additionals>
          </ReviewInfo>
        </HeaderContainer>
      </Container>

      <Paragraph>{reviewData.contents}</Paragraph>
    </Basic>
  );
};

export default Index;
