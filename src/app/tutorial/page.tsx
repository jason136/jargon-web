"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Question from "../../components/Question";

const FlexiblePopup = ({ text, buttonText, onButtonClick, isVisible, position }) => {
  if (!isVisible) return null;

  return (
    <div className={`absolute ${position} rounded-lg p-4 w-64`}>
      <span className="text-gray-700 mb-4">{text}</span>
      <div style={{
        height: "10px"
      }}></div>
      <button 
        onClick={onButtonClick}
        className="bg-[#7F7FFF] text-white px-6 py-2 rounded-full hover:bg-[#6A6AE3] transition-colors"
      >
        {buttonText}
      </button>
    </div>
  );
};

const FinalFlexiblePopup = ({ text, buttonText, isVisible, position }) => {
  if (!isVisible) return null;

  return (
    <div className={`absolute ${position} rounded-lg p-4 w-64 flex flex-col items-center`}>
      <span className="text-gray-700 mb-4 text-sm text-center">{text}</span>
      <div
        className="text-center bg-[#EEF6FE] text-purple-600 px-8 py-1 rounded-full cursor-default transition-colors text-xs w-[120%] font-bold"
      >
        {buttonText}
      </div>
    </div>
  );
};



const FinalPopup = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">End of Tutorial: Start learning!</h3>
        <div className="bg-[#F8F7FF] p-4 rounded-lg mb-6">
          <div className="flex items-start mb-4">
            <Image src="/favicon.ico" alt="Jar Icon" width={24} height={24} className="mr-3 flex-shrink-0 mt-1" />
            <span className="text-sm text-gray-700">
              You can track progress and review what you've learned in your jar. Once you start answering questions you see while browsing the web, your jar will be filled with more vocabulary!
            </span>
          </div>
          <div className="flex items-start">
            <Image src="/setting.svg" alt="Settings Icon" width={24} height={24} className="mr-3 flex-shrink-0 mt-1" />
            <span className="text-sm text-gray-700">
              If you want to change learning preferences, simply click on the "settings" button on the top right
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="https://en.wikipedia.org/wiki/Jargon" target="_blank" rel="noopener noreferrer">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors font-semibold">
              Let's go
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};



const TutorialNextPage = ({ onNextClick }) => {
  const [currentPopup, setCurrentPopup] = useState(0);
  const [showFinalFlexiblePopup, setShowFinalFlexiblePopup] = useState(false);
  const [showFinalPopup, setShowFinalPopup] = useState(false);

  useEffect(() => {
    if (!showFinalFlexiblePopup) return; // Only run this effect after FinalFlexiblePopup is shown

    const checkForPanelOpen = () => {
      const allElements = document.getElementsByTagName('*');
      for (const element of allElements) {
        if (element.shadowRoot) {
          const panelOpen = element.shadowRoot.getElementById('panel-open');
          if (panelOpen) {
            setShowFinalPopup(true);
            return;
          }
        }
      }
    };
  
    const intervalId = setInterval(checkForPanelOpen, 1000); // Check every second
  
    // Initial check
    checkForPanelOpen();
  
    return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
  }, [showFinalFlexiblePopup]);
  
  


  const popups = [
    {
      text: "This is an example question generated from the text you're reading.",
      buttonText: "Okay",
      position: "right-full mr-[-10px] top-0"
    },
    {
      text: "Right now, questions are only generated from English text. Now try answering this question!",
      buttonText: "Got it",
      position: "right-full mr-[-10px] top-0"
    },
    {
      text: "The correct answer is saved to your 'jar' after answering the question",
      buttonText: "Sounds good",
      position: "left-full ml-4 top-40 "
    },
    {
      text: "The pause button on the left allows you to stop the extension temporarily",
      buttonText: "Sounds good",
      position: "left-full ml-4 mt-[-80px]"
    },
    {
      text: "You can report any issues to us by clicking the button on the right",
      buttonText: "Great!",
      position: "left-full ml-4 mt-[-80px]"
    },
  ];

  const handlePopupButtonClick = () => {
    if (currentPopup < popups.length - 1) {
      setCurrentPopup(currentPopup + 1);
    } else {  
      setShowFinalFlexiblePopup(true); // Reset to first popup or handle completion
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 relative">
      <h2 className="text-3xl font-bold mb-6">Getting to Know Jargon</h2>
      <div className="bg-[#EEF6FE] p-4 rounded-xl shadow-sm flex items-center mb-4">
        <Image src="/favicon.ico" alt="Favicon" width={32} height={32} className="mr-2" />
        <span className="text-sm">
          You nailed it!! Here is a quick overview of what each part of the extension does.
        </span>
      </div>
      <div className="relative">
        <Question
          progress={50}
          sentence="A practice ______ generated from the text you're reading."
          options={["answer","question", "problem", "solution"]}
          correct="question"
        />
        {!showFinalFlexiblePopup && (
          <FlexiblePopup
            text={popups[currentPopup].text}
            buttonText={popups[currentPopup].buttonText}
            onButtonClick={handlePopupButtonClick}
            isVisible={true}
            position={popups[currentPopup].position}
          />
        )}

        {showFinalFlexiblePopup && (
          <FinalFlexiblePopup
            text="Finally, you can access your vocabulary “jar” by clicking here or directly on the extension icon"
            buttonText="Click on the extension icon at the top right of your page to open the jar!"
            position="right-full mr-[15px] mt-[-125px] "
            isVisible={true}
          />
        )}
      </div>

      {showFinalPopup && <FinalPopup />}
    </div>
  );
};

const PanelContent = ({ onQuestionAnswered }) => {
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);

  useEffect(() => {
    const checkForAnsweredQuestion = () => {
      const shadowHost = document.getElementById('shadowHost');
      if (shadowHost && shadowHost.shadowRoot) {
        // Look for a button with green or red color, indicating an answer was selected
        const answeredButton = shadowHost.shadowRoot.querySelector('.jg-bg-emerald-200, .jg-bg-red-500');
        if (answeredButton) {
          setIsQuestionAnswered(true);
        }
      }
    };

    // Set up an interval to check periodically
    const intervalId = setInterval(checkForAnsweredQuestion, 1000); // Check every second

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h2 className="text-4xl font-bold mb-4 text-center">Your First Practice Question</h2>
      <h3 className="text-xl font-semibold mb-4 text-indigo-500">What Does Jargon Do?</h3>
      <span className="mb-4">
        Jargon uses the content you're already consuming, from Product Hunt
        comments to news articles to social media, to teach you new vocabulary
        and phrases relevant to your life.
      </span>
      <div style={{
        height: "30px"
      }}></div>
      <h3 className="text-xl font-semibold mb-4 text-indigo-500">How to Use Jargon?</h3>
      <span className="mb-4">
        <span className="highlighted-span" id="test-999999999999" style={{
          textDecoration: 'underline',
          textDecorationColor: '#7E8EF8',
          textDecorationStyle: 'solid',
          textDecorationThickness: '2.5px',
          cursor: 'pointer'
        }}>No need to carve out extra time for lessons. </span>Jargon brings language
        practice to you. When Jargon is on, it highlights sentences at your
        language level and generates a question in the language you're trying to
        learn. Simply click on highlights while you're reading to get practice.
      </span>
      <div style={{
        height: "40px"
      }}></div>
      <div className="bg-[#EEF6FE] p-4 rounded-lg shadow-sm flex items-center">
        <Image src="/favicon.ico" alt="Favicon" width={32} height={32} className="mr-2" />
        <span className="text-sm">
          Click on the highlight in the text above to try your first question!
        </span>
      </div>
      {isQuestionAnswered ?  (
        <div className="mt-6 text-center">
          <button
            onClick={onQuestionAnswered}
            className="bg-indigo-600 text-white px-6 py-2 mr-[-200px] rounded-full hover:bg-indigo-700 transition-colors"
          >
            Next
          </button>
        </div>
      ):(
        <div className="mt-6 text-center" style={{
          height: "40px"
        }}>
        </div>
      )
      }
    </>
  );
};

export default function Tutorial() {
  const [showPanel, setShowPanel] = useState(false);
  const [showNextPage, setShowNextPage] = useState(false);

  const handleSignIn = () => {
    setShowPanel(true);
  };

  const handleNextClick = () => {
    setShowNextPage(true);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center pb-16 pt-10">
      {!showPanel ? (
        <>
          <div className="mb-6 text-center">
            <h1 className="font-quicksand text-3xl font-bold">
              Welcome to Jargon!
            </h1>
            <span className="font-quicksand text-xl font-medium text-neutral-700">
              Sign in by clicking on the extension icon 
            </span>
          </div>
          <div>
            <video preload="auto" autoPlay muted loop id="myVideo" width="500" height="300">
              <source src="/onboarded.mp4" type="video/mp4" />
            </video>
          </div>
          <div 
            className="flex flex-row items-center justify-center gap-1 rounded-[40px] bg-violet-700 px-6 py-2 sm:gap-2 sm:px-12 sm:py-4 cursor-pointer"
            onClick={handleSignIn}
          >
            <button className="whitespace-nowrap text-nowrap text-[14px] font-medium text-white sm:text-[22px]">
              I'm signed in!
            </button>
          </div>
        </>
      ) : showNextPage ? (
        <TutorialNextPage onNextClick={() => console.log("Next tutorial step")} />
      ) : (
        <div className="p-8 rounded-lg max-w-2xl mx-auto">
          <PanelContent onQuestionAnswered={handleNextClick} />
        </div>
      )}
    </div>
  );
}