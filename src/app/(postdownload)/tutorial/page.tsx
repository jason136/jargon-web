"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Question from "../../../components/Question";

interface FlexiblePopupProps {
  text: string;
  buttonText: string;
  onButtonClick: () => void;
  isVisible: boolean;
  position: string;
  lineExists: boolean;
  lineWidth: string;
  leftMargin: number;
}

interface FinalFlexiblePopupProps {
  text: string;
  isVisible: boolean;
  position: string;
}

interface FinalFinalPopupProps {
  showEndPage: boolean;
  onButtonClick: () => void;
}



const FlexiblePopup = ({ text, buttonText, onButtonClick, isVisible, position, lineWidth = '110%', lineExists = true, leftMargin = 50 }: FlexiblePopupProps & { lineWidth?: string, lineExists?: boolean }) => {
  if (!isVisible) return null;

  return (
    <div className={`absolute ${position} rounded-lg p-4 w-64`}>
      <span className="text-gray-700 mb-4">{text}</span>
      {!lineExists ? (<div style={{
        height: "10px"
      }}></div>) : <div 
      style={{
        width: lineWidth,
        height: '2px',
        backgroundColor: 'gray',
        margin: '10px 0',
        marginLeft: `-${leftMargin}px`
        }}
      ></div>}
      <button 
        onClick={onButtonClick}
        className="bg-[#7F7FFF] text-white px-6 py-2 rounded-full hover:bg-[#6A6AE3] transition-colors"
      >
        {buttonText}
      </button>
    </div>
  );
};

const FinalFlexiblePopup = ({ text, isVisible, position }: FinalFlexiblePopupProps) => {
  if (!isVisible) return null;

  return (
    <div className={`absolute ${position} rounded-lg p-4 w-64 flex flex-col items-center`}>
      <span className="text-gray-700 mb-4 text-sm text-center">{text}</span>
      <div
        className="text-center bg-[#EEF6FE] text-violet-500 px-8 py-1 rounded-full cursor-default transition-colors text-xs w-[120%] font-bold"
      >
        Click on the extension icon <Image src="/icon.png" alt="Extension Icon" width={16} height={16} className="inline-block mx-1" /> at the top right of your page to open the jar!
      </div>
    </div>
  );
};



const FinalPopup = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">Welcome to your Jar!</h3>
        <div className="bg-[#F8F7FF] p-4 rounded-lg mb-6">
          <div className="flex items-start mb-4">
            <Image src="/favicon.ico" alt="Jar Icon" width={24} height={24} className="mr-3 flex-shrink-0 mt-1" />
            <span className="text-sm text-gray-700">
              You can track progress and review what you&apos;ve learned in your jar. Once you start answering questions you see while browsing the web, your jar will be filled with more vocabulary!
            </span>
          </div>
          <div className="flex items-start">
            <Image src="/setting.svg" alt="Settings Icon" width={24} height={24} className="mr-3 flex-shrink-0 mt-1" />
            <span className="text-sm font-bold text-gray-700">
              Now, click on the &quot;settings&quot; button on the top right to change your learning preferences!
            </span>
          </div>
        </div>

        {/* <div className="flex justify-center">
          <Link href="https://en.wikipedia.org/wiki/Jargon">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors font-semibold">
              Let&apos;s go
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

const FinalFinalPopup = ({ showEndPage, onButtonClick }: FinalFinalPopupProps) => {
  return (
    
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg">
        {!showEndPage ? (
          <>
          <h3 className="text-2xl font-bold mb-6 text-center">Settings</h3>
            <div className="bg-[#F8F7FF] p-4 rounded-lg mb-6">
              <div className="flex items-start mb-4">
                <Image src="/setting.svg" alt="Settings Icon" width={24} height={24} className="mr-3 flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-700">
                You can change language, difficulty, practice and question settings as well as modify the permissions for Jargon to generate questions on certain sites. 
                </span>
              </div>
              <div className="flex items-start">
                <Image src="/report_problem.svg" alt="Problem Icon" width={24} height={24} className="mr-3 flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-700">
                  If you run into any additional problems, you can also send us a report by pressing the error icon.
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <button 
                onClick={onButtonClick} 
                className="bg-violet-500 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors font-semibold"
              >
                Got it
              </button>
            </div>
          </>
        ): (
          <>
          <h3 className="text-2xl font-bold mb-6 text-center">End of Tutorial!</h3>
            <div className="bg-[#F8F7FF] p-4 rounded-lg mb-6">
              <div className="flex items-start mb-4">
                <Image src="/favicon.ico" alt="Jar Icon" width={24} height={24} className="mr-3 flex-shrink-0 mt-1" />
            <span className="text-sm text-gray-700">
              Enjoy language learning with Jargon! If you run into a question you think is fun, don&apos;t be shy about sharing it in our{" "}
              <Link href="https://discord.com/invite/aSeHJw3Db4" target="_blank" className="inline-flex items-center cursor:pointer mt-1">
                <span className="text-indigo-400 font-medium">discord community! </span>
                <Image src="/discord-icon.svg" alt="Discord Logo" width={16} height={16} className="ml-1" />
              </Link>
            </span>
          </div>
          <div className="flex items-start mb-4">
            <Image src="https://www.google.com/chrome/static/images/chrome-logo.svg" alt="Chrome Icon" width={24} height={24} className="mr-3 flex-shrink-0 mt-1" />
            <span className="text-sm text-gray-700">
            If you like Jargon or have any feedback, leave us a review on the Chrome Web Store!
            </span>
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="https://en.wikipedia.org/wiki/Jargon">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors font-semibold">
                  Let&apos;s go
                </button>
            </Link>
          </div>
        </>
        )}
      </div>
    </div>  
  );
};




const TutorialNextPage = () => {    
  const [currentPopup, setCurrentPopup] = useState(0);
  const [showFinalFlexiblePopup, setShowFinalFlexiblePopup] = useState(false);
  const [showFinalPopup, setShowFinalPopup] = useState(false);
  const [showFinalFinalPopup, setShowFinalFinalPopup] = useState(false);
  const [showEndPage, setShowEndPage] = useState(false);

  useEffect(() => {
    if (!showFinalFlexiblePopup) return;
    if(showFinalFinalPopup) return; // Only run this effect after FinalFlexiblePopup is shown

    const checkForPanelOpen = () => {
      const allElements = document.getElementsByTagName('*');
      for (const element of allElements) {
        if (element.shadowRoot) {
          const panelOpen = element.shadowRoot?.getElementById('panel-open');
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
  }, [showFinalFinalPopup, showFinalFlexiblePopup]);

  useEffect(() => {
    if (!showFinalPopup) return;
    if (showFinalFinalPopup) return; // Only run this effect after FinalFlexiblePopup is shown

    const checkForSettingsOpen = () => {
      const allElements = document.getElementsByTagName('*');
      for (const element of allElements) {
        if (element.shadowRoot) {
          const blurElement = element.shadowRoot?.querySelector('.jg-blur-sm');
          if (blurElement) {
            setShowFinalPopup(false);
            setShowFinalFinalPopup(true);
            return;
          }
        }
      }
    };
  
    const intervalId = setInterval(checkForSettingsOpen, 1000); // Check every second
  
    // Initial check
    checkForSettingsOpen();
  
    return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
  }, [showFinalPopup]);
  


  const popups = [
    {
      text: "This is an example question generated from the text you're reading.",
      buttonText: "Okay",
      position: "right-full mr-[-10px] top-0",
      lineExists: true,
      lineWidth: "110%",
      leftMargin: 0
    },
    {
      text: "Right now, questions are only generated from English text. Now try answering this question!",
      buttonText: "Got it",
      position: "right-full mr-[-10px] top-0",
      lineExists: false,
      lineWidth: "110%",
      leftMargin: 0
    },
    {
      text: "If a question generates incorrectly, you can regenerate it by clicking on the highlight again.",
      buttonText: "Sounds good",
      position: "right-full mr-[-10px] top-0",
      lineExists: false,
      lineWidth: "110%",
      leftMargin: 0
    },
    {
      text: "The correct answer is saved to your jar after answering the question",
      buttonText: "Sounds good",
      position: "left-full ml-4 top-[100px] ",
      lineExists: true,
      lineWidth: "120%",
      leftMargin: 50
    },
    {
      text: "The pause button on the left allows you to stop the extension temporarily",
      buttonText: "Sounds good",
      position: "left-full ml-4 mt-[-125px]",
      lineExists: true,
      lineWidth: "110%",
      leftMargin: 85
    },
    {
      text: "You can report any issues to us by clicking the button on the right",
      buttonText: "Great!",
      position: "left-full ml-4 mt-[-125px]",
      lineExists: true,
      lineWidth: "110%",
      leftMargin: 50
    },
  ];

  const handlePopupButtonClick = () => {
    if (currentPopup < popups.length - 1) {
      setCurrentPopup(currentPopup + 1);
    } else {  
      setShowFinalFlexiblePopup(true);
       // Reset to first popup or handle completion
    }
  };

  const handleFinalFinalPopupClick = () => {
   setShowEndPage(true);
  }

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
            text={popups[currentPopup]?.text ?? ''}
            buttonText={popups[currentPopup]?.buttonText ?? ''}
            onButtonClick={handlePopupButtonClick}
            isVisible={true}
            lineExists={popups[currentPopup]?.lineExists ?? true}
            lineWidth={popups[currentPopup]?.lineWidth ?? '110%'}
            position={popups[currentPopup]?.position ?? ''}
            leftMargin={popups[currentPopup]?.leftMargin ?? 50}
          />
        )}

        {showFinalFlexiblePopup && (
          <FinalFlexiblePopup
            text="Finally, you can access your vocabulary jar by clicking here or directly on the extension icon"
            position="right-full mr-[15px] mt-[-125px] "
            isVisible={true}
          />
        )}
      </div>

      {showFinalFlexiblePopup && (
        <div className="fixed top-4 right-[100px] z-50">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 bg-violet-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {showFinalPopup && !showFinalFinalPopup && <FinalPopup />}
      {showFinalFinalPopup && <FinalFinalPopup showEndPage={showEndPage} onButtonClick={handleFinalFinalPopupClick} />}
    </div>
  );
};

const PanelContent = ({ onQuestionAnswered }: { onQuestionAnswered: () => void }) => {
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);

  useEffect(() => {
    const checkForAnsweredQuestion = () => {
      const shadowHost = document.getElementById('shadowHost');
      if (shadowHost?.shadowRoot) {
        // Look for a button with green or red color, indicating an answer was selected
        const answeredButton = shadowHost.shadowRoot.querySelector('.jg-bg-emerald-200, .jg-bg-red-500');
        if (answeredButton) {
          // Remove the shadowHost element after 2 seconds
          setTimeout(() => {
            const shadowHostElement = document.getElementById('shadowHost');
            if (shadowHostElement) {
              shadowHostElement.remove();
            }
            setIsQuestionAnswered(true);
          }, 1000);
        }
      }
    };

    // Set up an interval to check periodically
    const intervalId = setInterval(checkForAnsweredQuestion, 500); // Check every second

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h2 className="text-4xl font-bold mb-4 text-center">Tutorial: How to use Jargon</h2>
      <h3 className="text-xl font-semibold mb-4 text-indigo-500">What Does Jargon Do?</h3>
      <span className="mb-4">
        Jargon uses the content you&apos;re already consuming, from Product Hunt
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
        }}>No need to carve out extra time for lessons.</span> Jargon brings language
        practice to you. When Jargon is on, it highlights sentences at your
        language level and generates a question in the language you&apos;re trying to
        learn. Simply click on highlights while you&apos;re reading to get practice.
      </span>
      <div style={{
        height: "40px"
      }}></div>
      <div className="bg-[#EEF6FE] p-4 rounded-lg shadow-sm flex items-center">
        <Image src="/favicon.ico" alt="Favicon" width={32} height={32} className="mr-2" />
        <span className="text-sm">
          Click on the highlight in the text above to try your first question! If the question doesn&apos;t pop-up, you might need to login again.
        </span>
      </div>
      {isQuestionAnswered ?  (
        <div className="flex justify-center w-full">
          <div 
            className="flex flex-row items-center mt-[30px] justify-center gap-1 rounded-[40px] bg-violet-700 px-6 py-2 sm:gap-2 sm:px-12 sm:py-4 cursor-pointer"
            onClick={onQuestionAnswered}
            style={{ width: '200px' }}
          >
            <button className="whitespace-nowrap w-full text-nowrap text-[14px] font-medium text-white sm:text-[22px]">
              Next
            </button>
          </div>
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
  const [showNextPage, setShowNextPage] = useState(false);


  const handleNextClick = () => {
    setShowNextPage(true);
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center pb-16 pt-10">
      {showNextPage ? (
        <TutorialNextPage />
      ) : (
        <div className="p-8 rounded-lg max-w-2xl mx-auto">
          <PanelContent onQuestionAnswered={handleNextClick} />
        </div>
      )}
    </div>
  );
}