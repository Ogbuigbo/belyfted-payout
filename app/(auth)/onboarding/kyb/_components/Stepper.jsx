"use client";

import React, { useState, useEffect, useRef } from "react";
import Step1Form from "./Step1Form";
import Image from "next/image";
import Step2Form from "./Step2Form";
import Step3Form from "./Step3Form";
import Step4Form from "./Step4Form";
import OnboardSuccess from "./OnboardSuccess";
import { useVerificationSession } from "../_hooks/useVerificationSession";

function Stepper() {
  const [step, setStep] = useState(1);
  const [documents, setDocuments] = useState({});

  const hasProcessedSessionRef = useRef(false);

  const {
    session,
    loading: sessionLoading,
    error: sessionError,
  } = useVerificationSession();

  useEffect(() => {
    if (
      session !== null &&
      session !== undefined &&
      !hasProcessedSessionRef.current
    ) {
      hasProcessedSessionRef.current = true;

      let currentStep;

      if (typeof session === "string" || typeof session === "number") {
        currentStep = session.toString();
      } else if (typeof session === "object") {
        currentStep = session.current_step || session.data?.current_step;
      }

      if (currentStep) {
        const stepNumber = parseInt(currentStep, 10);

        if (!isNaN(stepNumber) && stepNumber >= 1 && stepNumber <= 5) {
          const nextStep = Math.min(stepNumber + 1, 5);

          setStep(nextStep);
        } else {
          const stepMap = {
            business_info: 2,
            registration_info: 3,
            directors_info: 4,
            documents: 5,
            completed: 5,
          };
          const mappedStep = stepMap[currentStep] || 2;

          setStep(mappedStep);
        }
      }
    }
  }, [session]);

  if (sessionLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading verification session...</p>
        </div>
      </div>
    );
  }

  // Show error state if session fetch failed
  if (sessionError) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 mb-4">
            <svg
              className="w-16 h-16 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Session Error
          </h3>
          <p className="text-gray-600 mb-4">{sessionError}</p>
          <div className="space-y-2">
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full"
            >
              Retry
            </button>
            <button
              onClick={() => {
                setStep(1);
                hasProcessedSessionRef.current = false; // Reset processing flag
              }}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors w-full"
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Blue dotted pattern background */}
      <div className="absolute left-1/2 -translate-x-1/2 top-20 z-10">
        <Image
          src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1749477621/Vector_15_vbmcek.svg"
          alt=""
          width={800}
          height={40}
          className="w-[450px] h-auto"
        />
      </div>

      {/* Yellow/Orange gradient left - Extended and larger */}
      <div
        className="absolute -left-48 top-1/3 transform -translate-y-1/2 w-[500px] h-[120vh] rounded-full opacity-20"
        style={{
          background: `radial-gradient(ellipse, #F39C12 0%, transparent 70%)`,
        }}
      />

      {/* Yellow/Orange gradient right - Extended and larger */}
      <div
        className="absolute -right-48 top-1/3 transform -translate-y-1/2 w-[500px] h-[120vh] rounded-full opacity-20"
        style={{
          background: `radial-gradient(ellipse, #F39C12 0%, transparent 70%)`,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Header with Belyfted logo */}
        <div className="text-center mb-8">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1749476977/Frame_5_1_1_gyb16r.png"
            alt="logo"
            width={98}
            height={69}
          />
        </div>

        {/* Step forms */}
        {step === 1 && <Step1Form onNext={handleNext} />}
        {step === 2 && <Step2Form onNext={handleNext} onPrev={handlePrev} />}
        {step === 3 && <Step3Form onNext={handleNext} onPrev={handlePrev} />}
        {step === 4 && (
          <Step4Form
            onNext={handleNext}
            onPrev={handlePrev}
            documents={documents}
            setDocuments={setDocuments}
          />
        )}
        {step === 5 && <OnboardSuccess />}

        {/* Dotted pattern - Bottom */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 z-10">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1749477621/Vector_15_vbmcek.svg"
            alt=""
            width={800}
            height={40}
            className="w-[450px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Stepper;
