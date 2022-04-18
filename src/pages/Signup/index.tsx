import React from 'react'

import Box from '@mui/material/Box'
import Step from '@mui/material/Step'
import Button from '@mui/material/Button'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { BoxButton, BoxStyled, ContainerStyled } from './styles'

export interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: {label: string; value: string };
}

const steps = ['Dados pessoais', 'Contatos', 'Endereço', 'Resumo']

export default function SignupPage() {
  let navigate = useNavigate()
  const { control } = useForm()
  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set<number>())

  const goToHome = () => navigate('/')

  const isStepOptional = (step: number) => step === 1

  const isStepSkipped = (step: number) => skipped.has(step)

  const handleNext = () => {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.")
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values())
      newSkipped.add(activeStep)
      return newSkipped
    })
  }

  const handleReset = () => setActiveStep(0)

  return (
    <ContainerStyled>
      <Typography variant="h3">Cadastre-se</Typography>

      <br />
      <hr />
      <br />

      <BoxStyled>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {}
            const labelProps: { optional?: React.ReactNode } = {}

            if (isStepOptional(index))
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              )

            if (isStepSkipped(index)) stepProps.completed = false

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            )
          })}
        </Stepper>

        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Parabéns você finalizou todos os passos!
            </Typography>
            <BoxButton>
              <Button onClick={handleReset}>Limpar</Button>

              <Button onClick={goToHome}>Voltar para página inicial</Button>
            </BoxButton>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <BoxButton>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Voltar
              </Button>

              <div>
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip}>
                    Pular
                  </Button>
                )}

                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
                </Button>
              </div>
            </BoxButton>
          </React.Fragment>
        )}
      </BoxStyled>
    </ContainerStyled>
  )
}
