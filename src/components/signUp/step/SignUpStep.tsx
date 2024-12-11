import { Heading, Paragraph, Icon } from 'pov-design-system';
import { SignUpSection, SignUpSectionHeader, SignUpSectionBody } from './SignUpStep.style';

interface SignUpStepProps {
  firstLine: { keyword: string; particle: string };
  secondLine: string;
  description: string;
  onPrev: (prevStep: string) => void;
  children: React.ReactNode;
}

const SignUpStep = ({ firstLine, secondLine, description, onPrev, children }: SignUpStepProps) => {
  return (
    <SignUpSection>
      <SignUpSectionHeader>
        <Icon icon="angleleft" css={{ marginBottom: '32px' }} onClick={onPrev} />
        <Heading size="xxLarge">
          <p style={{ display: 'inline', color: '#AA6FFF' }}>{firstLine.keyword}</p>
          <p style={{ display: 'inline' }}>{firstLine.particle}</p>
        </Heading>
        <Heading size="xxLarge">{secondLine}</Heading>
        <Paragraph>{description}</Paragraph>
      </SignUpSectionHeader>
      <SignUpSectionBody>{children}</SignUpSectionBody>
    </SignUpSection>
  );
};

export default SignUpStep;
