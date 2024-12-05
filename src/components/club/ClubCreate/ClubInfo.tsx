import React from 'react';
import { Heading, Input } from 'pov-design-system';
import { Container, Label } from '../../styles/InputLabel';

interface ClubInfoProps {
  name: string;
  description: string;
  maxParticipants: string;
  onNameChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onMaxParticipantsChange: (value: string) => void;
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
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onNameChange(e.target.value)}
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
        />
      </Container>
      <Container>
        <Label>
          <Heading size="small">최대 인원 수</Heading>
        </Label>
        <Input
          placeholder="클럽 최대 인원 수를 입력해 주세요"
          required={true}
          isError={!maxParticipants.trim()}
          value={maxParticipants}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onMaxParticipantsChange(e.target.value)}
        />
      </Container>
    </>
  );
};

export default ClubInfo;
