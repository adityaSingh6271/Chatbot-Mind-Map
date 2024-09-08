import React, { useContext } from 'react';
import Joyride from 'react-joyride';
import { TourContext } from '../context/TourProvider';

const GuidedTour = () => {
    const { runTour, stepIndex, resetTour, goToStep } = useContext(TourContext);

    const totalSteps = 5; // Update to match the number of steps

    const steps = [
        {
            target: 'body', // Use a dummy target if you don't want to highlight anything specific
            content: (
                <div>
                    <h2 className="text-center text-[1.5rem] p-3 font-[500] text-[#333]">Welcome to the Guided Tour!</h2>
                    <p className='text-[1.125] font-[400] text-[#333]'>This tour will help you understand all the functionalities of BeyondChats admin dashboard. Click the 'Start Tour' button below to start the tour!</p>
                </div>
            ),
            placement: 'center',
            isFixed: true,
        },
        {
            target: '.icon-1',
            content: (
                <div>
                    <h2 className="text-center text-[1.5rem] p-3 font-[500] text-[#333]">User Chats</h2>
                    <p className='text-[1.125] font-[400] text-[#333]'>Conversations of your website visitors are shown here</p>
                </div>
            ),
            placement: 'right',
        },
        {
            target: '.icon-2',
            content: (
                <div>
                    <h2 className="text-center text-[1.5rem] p-3 font-[500] text-[#333]">Leads for you</h2>
                    <p className='text-[1.125] font-[400] text-[#333]'>Data of users who have shown interest in your products/services and have shared their contact details</p>
                </div>
            ),
            placement: 'right',
        },
        {
            target: '.icon-3',
            content: (
                <div>
                    <h2 className="text-center text-[1.5rem] p-3 font-[500] text-[#333]">Chatbot Mind Map
                    </h2>
                    <p className='text-[1.125] font-[400] text-[#333]'>This is the brain and the memory of the chatbot. You can add, edit and analyse the source data being used to answer user queries from here</p>
                </div>
            ),
            placement: 'right',
        },
        {
            target: '.icon-4',
            content: (
                <div>
                    <h2 className="text-center text-[1.5rem] p-3 font-[500] text-[#333]">Manage your Team
                    </h2>
                    <p className='text-[1.125] font-[400] text-[#333]'>View team, Add new members, remove members, etc</p>
                </div>
            ),
            placement: 'right',
        },
        {
            target: '.icon-5',
            content: (
                <div>
                    <h2 className="text-center text-[1.5rem] p-3 font-[500] text-[#333]">Personalize the chatbot</h2>
                    <p className='text-[1.125] font-[400] text-[#333]'>Customize the look & feel of the chatbot: colors, personality, chatbot name, logo, business actions, and much more!</p>
                </div>
            ),
            placement: 'right',
        }
    ];

    return (
        <Joyride
            steps={steps}
            stepIndex={stepIndex}
            run={runTour}
            continuous={true}
            scrollToFirstStep={true}
            showSkipButton={true}
            disableOverlayClose={true}
            callback={(data) => {
                const { action, index, type } = data;

                if (type === 'step:after') {
                    goToStep(index + (action === 'prev' ? -1 : 1));
                }

                if (action === 'skip' || action === 'close') {
                    resetTour(); // Stop the tour on skip or close
                }
            }}
            styles={{
                options: {
                    zIndex: 10000,
                    arrowColor: 'white',
                    backgroundColor: '#fff',
                    overlayColor: 'rgba(0, 0, 0, 0.5)',
                    primaryColor: '#2872fa',
                    textColor: '#333',
                    fontSize: '16px',
                    width: '600px',
                    height: 'auto',
                    borderRadius: '8px',
                },
                tooltip: {
                    zIndex: 10000,
                    fontSize: '16px',
                },
                buttonClose: {
                    display: 'none', // Hide the default close button
                },
                buttonSkip: {
                    backgroundColor: '#f0f0f0',
                    color: '#333',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '8px 16px',
                    fontSize: '14px',
                },
                buttonNext: {
                    backgroundColor: '#2872fa',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '8px 16px',
                    fontSize: '16px',
                },
                buttonBack: {
                    backgroundColor: '#f0f0f0',
                    color: '#333',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '8px 16px',
                    fontSize: '14px',
                },
                spotlight: {
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                },
            }}
            locale={{
                back: 'Back',
                close: 'Close',
                last: 'Finish',
                next: stepIndex === 0 ? `Start Tour (${stepIndex}/${steps.length - 1})` : `Next (${stepIndex}/${steps.length - 1})`,
                skip: 'Skip',
            }}
        />
    );
};

export default GuidedTour;
