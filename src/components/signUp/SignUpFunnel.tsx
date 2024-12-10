import React from 'react';
import { FunnelProps, StepProps } from '../../hooks/funnel/useFunnel';
import NicknameStep from './step/NicknameStep';
import { useNavigate } from 'react-router-dom';
import BirthStep from './step/BirthStep';
import FavorGenreStep from './step/FavorGenreStep';
import type { User } from '../../types/user';
import OnSuccessStep from './step/OnSuccessStep';

interface SignUpFunnelProps {
  steps: string[];
  Funnel: React.ComponentType<FunnelProps>;
  Step: React.ComponentType<StepProps>;
  stepHandler: (step: string) => void;
  onSubmit: (data: User) => Promise<void>;
}

const SignUpFunnel = ({ steps, Funnel, Step, stepHandler, onSubmit }: SignUpFunnelProps) => {
  const navigate = useNavigate();
  return (
    <Funnel>
      <Step name="nickname">
        <NicknameStep onNext={() => stepHandler(steps[1])} onPrev={() => navigate(-1)}></NicknameStep>
      </Step>
      <Step name="birth">
        <BirthStep onNext={() => stepHandler(steps[2])} onPrev={() => stepHandler(steps[1])}></BirthStep>
      </Step>
      <Step name="favorGenres">
        <FavorGenreStep onSubmit={onSubmit} onPrev={() => stepHandler(steps[2])}></FavorGenreStep>
      </Step>
      <Step name="success">
        <OnSuccessStep onNext={() => navigate('/main')} onPrev={() => navigate('/login')}></OnSuccessStep>
      </Step>
    </Funnel>
  );
};

export default SignUpFunnel;
