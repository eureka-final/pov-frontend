import { ReactNode, ReactElement, useState } from 'react';

export interface StepProps {
  name: string;
  children: ReactNode;
}

export interface FunnelProps {
  children: Array<ReactElement<StepProps>>;
}

const useFunnel = (initialStep: string) => {
  const [step, setStep] = useState<string>(initialStep);

  const Step = (props: StepProps) => {
    return <>{props.children}</>;
  };

  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find((childStep) => childStep.props.name === step);
    return <>{targetStep}</>;
  };

  return { Funnel, Step, setStep };
};

export default useFunnel;
