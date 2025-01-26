import React, { useState, useEffect, useRef, useContext } from 'react';
import './Welcome.css';
import { LanguageContext } from '../LanguageContext';

export default function Welcome() {
    let language = useContext(LanguageContext)['language'];
    var motto = "";
    if (language === "serbian") {
        motto = "> Budućnost počinje inovacijama - KRENIMO ZAJEDNO!";
    } else if (language === "english") {
        motto = "> The future begins with innovations - LET'S START TOGETHER!";
    } else if (language === "german") {
        motto = "> Die Zukunft beginnt mit Innovationen - LASS UNS GEMEINSAM STARTEN!";
    } else {
        motto = "> Default motto - UNKNOWN LANGUAGE!";
    }

    const [visibleText, setVisibleText] = useState("");
    const [visibleTextPart2, setVisibleTextPart2] = useState("");
    const [visibleTextPart3, setVisibleTextPart3] = useState("");
    const [cursorPosition, setCursorPosition] = useState(75);
    const [fontSize, setFontSize] = useState(50);
    const [isCursorVisible, setIsCursorVisible] = useState(false);
    const [isTypingCompleted, setIsTypingCompleted] = useState(false);
    const [isBackgroundActive, setIsBackgroundActive] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
    const textRef = useRef(null);

    const backgroundCodeLines = [
        "random.seed(42); // #####################################################",
        "const data = fetch('/api/data'); // #####################################",
        "console.log('#################...'); // ##################################",
        "for (let i = 0; i < 100; i++) {",
        "    processData(i);",
        "    setTimeout(() => {",
        "        console.log(`O########################################### #${i}...`);",
        "    }, Math.random() * 1000);",
        "}",
        "setInterval(() => {",
        "    alert('#############################################################!');",
        "}, 5000);",
        "let systemStatus = 'ACTIVE'; // ############################################",
        "if (systemStatus === 'ACTIVE') {",
        "    initiateProcess();",
        "} else {",
        "    alert('################################################################!');",
        "}",
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let splitIndex = 0;
        let splitIndex1 = -1;
        if (language === "serbian") {
             splitIndex = isSmallScreen ? motto.indexOf('-') : motto.length;
        }else if (language === "english") {
             splitIndex = isSmallScreen ? motto.indexOf('with') : motto.length;
             splitIndex1 = isSmallScreen ? motto.indexOf('-') : motto.length;
        }else if(language === "german"){
             splitIndex = isSmallScreen ? motto.indexOf('mit') : motto.length;
             splitIndex1 = isSmallScreen ? motto.indexOf('-') : motto.length;
        }else{
             splitIndex = isSmallScreen ? motto.indexOf('-') : motto.length;
        }
        
        
        setCursorPosition(75);
        setFontSize(isSmallScreen ? 40 : 50);
        setIsCursorVisible(false);
        setIsTypingCompleted(false);

        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < motto.length) {
                if (language === "serbian"){
                    if (index < splitIndex) {
                        setVisibleText(motto.slice(0, index + 1));
                    } else {
                        setVisibleTextPart2(motto.slice(splitIndex - 1, index + 1));
                    }
                } else {
                    if (index < splitIndex) {
                        setVisibleText(motto.slice(0, index + 1));
                    } else if (index >= splitIndex && index < splitIndex1) {
                        setVisibleTextPart2(motto.slice(splitIndex - 1, index + 1));
                    } else{
                        setVisibleTextPart3(motto.slice(splitIndex1 - 1, index + 1));
                    }
                }
                
                setCursorPosition((prevPosition) => {
                    if (textRef.current) {
                        const textLength = textRef.current.getComputedTextLength();
                        return 75 + textLength;
                    }
                    return prevPosition;
                });
                index++;
                adjustFontSize();
            } else {
                clearInterval(typingInterval);
                setIsTypingCompleted(true);
                setTimeout(() => setIsBackgroundActive(true), 3000);
            }
        }, 60);

        return () => clearInterval(typingInterval);
    }, [motto, language, isSmallScreen]);

    useEffect(() => {
        let cursorBlinkInterval;

        if (isTypingCompleted) {
            cursorBlinkInterval = setInterval(() => {
                setIsCursorVisible((prev) => !prev);
            }, 500);
        }

        return () => clearInterval(cursorBlinkInterval);
    }, [isTypingCompleted]);

    const renderBackgroundCode = (backgroundCodeLines) => {
        return backgroundCodeLines.map((line, index) => (
            <div key={index}>
                {line}
            </div>
        ));
    };

    const adjustFontSize = () => {
        if (textRef.current) {
            const textWidth = textRef.current.getComputedTextLength();
            if (textWidth > 1500) {
                setFontSize((prevSize) => prevSize - 5);
            }
        }
    };

    return (
        <section id="welcome_page" className={`welcome-container ${isBackgroundActive ? "background-active" : ""}`}>
            {!isBackgroundActive && <div className="black-overlay"></div>}

            <div className={`text-background ${isBackgroundActive ? "animate" : ""}`}>
                {renderBackgroundCode(backgroundCodeLines)}
                {renderBackgroundCode(backgroundCodeLines)}
            </div>

            <svg viewBox="0 0 1550 850" preserveAspectRatio="xMidYMid meet" className="svg-content">
                <defs>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feFlood floodColor="cyan" result="color" />
                        <feComposite in2="blur" operator="in" />
                        <feComposite in2="SourceAlpha" operator="in" />
                        <feComposite in2="SourceGraphic" operator="arithmetic" k2="1" k3="1" />
                    </filter>
                </defs>

                <text
                    ref={textRef}
                    x="50"
                    y={!isSmallScreen ? "470" : "500"}
                    fontSize={!isSmallScreen ? fontSize : fontSize + 35}
                    fontFamily="'Courier New', Courier, monospace"
                    fill="#214be4"
                    textAnchor="start"
                    filter="url(#glow)"  
                >
                    {visibleText}
                </text>
                {isSmallScreen && (
                    <text
                        x="150"
                        y={!isSmallScreen ? "500" : "600"}
                        fontSize={!isSmallScreen ? fontSize : fontSize + 35}
                        fontFamily="'Courier New', Courier, monospace"
                        fill="#214be4"
                        textAnchor="start"
                        filter="url(#glow)"  
                    >
                        {visibleTextPart2}
                    </text>
                )}

                {isSmallScreen && language !== "serbian" && (
                    <text
                        x="50"
                        y={!isSmallScreen ? "600" : "700"}
                        fontSize={!isSmallScreen ? fontSize : fontSize + 35}
                        fontFamily="'Courier New', Courier, monospace"
                        fill="#214be4"
                        textAnchor="start"
                        filter="url(#glow)"  
                    >
                        {visibleTextPart3}
                    </text>
                )}

                {isTypingCompleted && isCursorVisible && (
                    language === "serbian" ? (
                        <rect
                        x={isSmallScreen ? cursorPosition - 515 : cursorPosition}
                        y={isSmallScreen ? 545 : 441}
                        width={isSmallScreen ? "8" : "3"}
                        height={isSmallScreen ? "60" : "30"}
                        fill="#214be4"
                        />
                    ) : language === "english" ? (
                        <rect
                        x={isSmallScreen ? cursorPosition + 155 : cursorPosition - 5}
                        y={isSmallScreen ? 645 : 442}
                        width={isSmallScreen ? "8" : "3"}
                        height={isSmallScreen ? "58" : "31"}
                        fill="#214be4"
                    />
                    ) : (
                        <rect
                        x={isSmallScreen ? cursorPosition + 325 : cursorPosition - 5}
                        y={isSmallScreen ? 648 : 444}
                        width={isSmallScreen ? "8" : "3"}
                        height={isSmallScreen ? "53" : "28"}
                        fill="#214be4"
                    />
                    )
                )}
            </svg>
        </section>
    );
}
