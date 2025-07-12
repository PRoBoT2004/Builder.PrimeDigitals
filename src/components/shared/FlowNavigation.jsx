import React from 'react'
import { useBuilderFlow } from '../../context/BuilderFlowContext.jsx'

const FlowNavigation = ({ showProgress = true }) => {
  const { 
    currentStep, 
    currentStepIndex, 
    totalSteps, 
    goToNextStep, 
    goToPreviousStep, 
    isFirstStep, 
    isLastStep 
  } = useBuilderFlow()

  return (
    <div className="w-full">
      {/* Progress Bar */}
      {showProgress && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Step {currentStep.step} of {totalSteps}
            </span>
            <span className="text-sm text-gray-500">
              {currentStep.title}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 transition-all duration-300 bg-blue-600 rounded-full"
              style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between">
        <button
          onClick={goToPreviousStep}
          disabled={isFirstStep}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            isFirstStep 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
          }`}
        >
          Previous
        </button>

        <button
          onClick={goToNextStep}
          disabled={isLastStep}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            isLastStep 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isLastStep ? 'Complete' : 'Next'}
        </button>
      </div>
    </div>
  )
}

export default FlowNavigation