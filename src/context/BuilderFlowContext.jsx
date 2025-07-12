import React, { createContext, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const BuilderFlowContext = createContext()

// Define the flow steps
export const FLOW_STEPS = [
  { path: '/builder/start', title: 'Start', step: 1 },
  { path: '/builder/niches', title: 'Choose Niche', step: 2 },
  { path: '/builder/mode', title: 'Select Mode', step: 3 },
  { path: '/builder/templates', title: 'Pick Template', step: 4 },
  { path: '/builder/editor', title: 'Customize', step: 5 },
  { path: '/builder/preview', title: 'Preview', step: 6 },
  { path: '/builder/export', title: 'Export', step: 7 }
]

export const BuilderFlowProvider = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const getCurrentStep = () => {
    return FLOW_STEPS.find(step => step.path === location.pathname) || FLOW_STEPS[0]
  }

  const getCurrentStepIndex = () => {
    return FLOW_STEPS.findIndex(step => step.path === location.pathname)
  }

  const goToNextStep = () => {
    const currentIndex = getCurrentStepIndex()
    if (currentIndex < FLOW_STEPS.length - 1) {
      navigate(FLOW_STEPS[currentIndex + 1].path)
    }
  }

  const goToPreviousStep = () => {
    const currentIndex = getCurrentStepIndex()
    if (currentIndex > 0) {
      navigate(FLOW_STEPS[currentIndex - 1].path)
    }
  }

  const goToStep = (stepPath) => {
    navigate(stepPath)
  }

  const isFirstStep = () => getCurrentStepIndex() === 0
  const isLastStep = () => getCurrentStepIndex() === FLOW_STEPS.length - 1

  const value = {
    currentStep: getCurrentStep(),
    currentStepIndex: getCurrentStepIndex(),
    totalSteps: FLOW_STEPS.length,
    goToNextStep,
    goToPreviousStep,
    goToStep,
    isFirstStep: isFirstStep(),
    isLastStep: isLastStep(),
    allSteps: FLOW_STEPS
  }

  return (
    <BuilderFlowContext.Provider value={value}>
      {children}
    </BuilderFlowContext.Provider>
  )
}

export const useBuilderFlow = () => {
  const context = useContext(BuilderFlowContext)
  if (!context) {
    throw new Error('useBuilderFlow must be used within BuilderFlowProvider')
  }
  return context
}