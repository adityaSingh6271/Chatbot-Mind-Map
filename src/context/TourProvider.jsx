import React, { createContext, useState } from 'react';

export const TourContext = createContext();

export const TourProvider = ({ children }) => {
    const [runTour, setRunTour] = useState(false);
    const [stepIndex, setStepIndex] = useState(0);

    const startTour = () => {
        setStepIndex(0);
        setRunTour(true); // Starts the tour from the first step
    };

    const nextStep = () => {
        setStepIndex((prevIndex) => prevIndex + 1);
    };

    const prevStep = () => {
        setStepIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    };

    const goToStep = (index) => {
        setStepIndex(index);
    };


    const resetTour = () => {
        setStepIndex(0); // Reset to the first step
        setRunTour(false); // Ensure tour is stopped
    };
    return (
        <TourContext.Provider value={{ runTour, stepIndex, startTour, nextStep, prevStep, goToStep, resetTour }}>
            {children}
        </TourContext.Provider>
    );
};
