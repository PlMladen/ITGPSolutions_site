import React, { useState, useEffect, useRef, useContext } from 'react';
import './Welcome.css';
import { LanguageContext } from '../LanguageContext';

export default function Welcome() {
    let language = useContext(LanguageContext)['language'];
    var slogan = "";
    if (language === "serbian") {
        slogan = "> Budućnost počinje inovacijama - KRENIMO ZAJEDNO!";
    } else if (language === "english") {
        slogan = "> The future begins with innovation - LET'S START TOGETHER!";
    } else if (language === "german") {
        slogan = "> Die Zukunft beginnt mit Innovation - LASS UNS GEMEINSAM STARTEN!";
    } else {
        slogan = "> Default slogan - UNKNOWN LANGUAGE!";
    }

    const [visibleText, setVisibleText] = useState("");
    const [cursorPosition, setCursorPosition] = useState(75);
    const [fontSize, setFontSize] = useState(50);
    const [isCursorVisible, setIsCursorVisible] = useState(false);
    const [isTypingCompleted, setIsTypingCompleted] = useState(false);
    const [isBackgroundActive, setIsBackgroundActive] = useState(false);
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
        setVisibleText("");
        setCursorPosition(75);
        setFontSize(50);
        setIsCursorVisible(false);
        setIsTypingCompleted(false);
    
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < slogan.length) {
                setVisibleText(slogan.slice(0, index + 1));
                setCursorPosition((prevPosition) => {
                    if (textRef.current) {
                        const textLength = textRef.current.getComputedTextLength();
                        return 75 + textLength;
                    }
                    return prevPosition;
                });
                adjustFontSize();
                index++;
            } else {
                clearInterval(typingInterval);
                setIsTypingCompleted(true);
                setTimeout(() => setIsBackgroundActive(true), 3000);
            }
        }, 60);
    
        return () => clearInterval(typingInterval);
    }, [slogan, language]);

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

            <svg viewBox="0 0 1550 200" preserveAspectRatio="xMidYMid meet" className="svg-content">
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
                    y="150"
                    fontSize={fontSize}
                    fontFamily="'Courier New', Courier, monospace"
                    fill="#214be4"
                    textAnchor="start"
                    filter="url(#glow)"  
                >
                    {visibleText}
                </text>

                {isTypingCompleted && isCursorVisible && (
                    <rect
                        x={cursorPosition}
                        y="115"
                        width="3"
                        height="40"
                        fill="#214be4"
                    />
                )}
            </svg>
        </section>
    );
}
