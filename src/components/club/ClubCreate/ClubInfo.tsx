import React from 'react';
import { Heading, Input } from 'pov-design-system';

import { Container, Label, inputStyling } from '@/components/styles/InputLabel';

interface ClubInfoProps {
  name: string;
  description: string;
  maxParticipants: number;
  onNameChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onMaxParticipantsChange: (value: number) => void;
}

const ClubInfo: React.FC<ClubInfoProps> = ({ name, description, maxParticipants, onNameChange, onDescriptionChange, onMaxParticipantsChange }) => {
  return (
    <>
      <Container>
        <Label>
          <Heading size="small">클럽 이름</Heading>
        </Label>
        <Input
          placeholder="클럽 이름을 지어주세요"
          required={true}
          isError={!name.trim()}
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onNameChange(e.target.value)}
          css={inputStyling}
        />
      </Container>
      <Container>
        <Label>
          <Heading size="small">설명</Heading>
        </Label>
        <Input
          placeholder="클럽에 대한 추가 설명을 입력해 주세요"
          required={true}
          isError={!description.trim()}
          value={description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onDescriptionChange(e.target.value)}
          css={inputStyling}
        />
      </Container>
      <Container>
        <Label>
          <Heading size="small">최대 인원 수</Heading>
        </Label>
        <Input
          placeholder="클럽 최대 인원 수를 입력해 주세요"
          required={true}
          isError={maxParticipants < 2}
          supportingText="2명 이상 입력해주세요"
          value={maxParticipants}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onMaxParticipantsChange(Number(e.target.value))}
          css={inputStyling}
        />
      </Container>
    </>
  );
};

export default ClubInfo;
