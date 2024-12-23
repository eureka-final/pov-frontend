import React from 'react';
import { useNavigate } from 'react-router-dom';

import NicknameStep from '@/components/signUp/step/NicknameStep';
import BirthStep from '@/components/signUp/step/BirthStep';
import FavorGenreStep from '@/components/signUp/step/FavorGenreStep';
import OnSuccessStep from '@/components/signUp/step/OnSuccessStep';
import { FunnelProps, StepProps } from '@/hooks/funnel/useFunnel';
import type { User } from '@/types/user';

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
        <BirthStep onNext={() => stepHandler(steps[2])} onPrev={() => stepHandler(steps[0])}></BirthStep>
      </Step>
      <Step name="favorGenres">
        <FavorGenreStep onSubmit={onSubmit} onPrev={() => stepHandler(steps[1])}></FavorGenreStep>
      </Step>
      <Step name="success">
        <OnSuccessStep
          onNext={() => {
            window.location.href = '/';
          }}
          onPrev={() => navigate('/login')}
        ></OnSuccessStep>
      </Step>
    </Funnel>
  );
};

export default SignUpFunnel;
