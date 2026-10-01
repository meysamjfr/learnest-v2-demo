import { Onboarding } from '@/components/learnest/onboarding'

type Step = 'goal' | 'time' | 'placement' | 'test' | 'result'

export default async function OnboardingStep({ params }: { params: Promise<{ step: string }> }) {
  const { step } = await params
  const validStep: Step = ['goal', 'time', 'placement', 'test', 'result'].includes(step) ? (step as Step) : 'goal'
  return <Onboarding step={validStep} />
}
