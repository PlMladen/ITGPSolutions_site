import React, { useState, useEffect, useRef } from 'react';
import './Welcome.css';

export default function Welcome() {
    const slogan = "> Budućnost počinje inovacijama - KRENIMO ZAJEDNO!";
    const [visibleText, setVisibleText] = useState("");
    const [cursorPosition, setCursorPosition] = useState(75);
    const [isCursorVisible, setIsCursorVisible] = useState(false);
    const [isTypingCompleted, setIsTypingCompleted] = useState(false);
    const [isBackgroundActive, setIsBackgroundActive] = useState(false);
    const textRef = useRef(null);

    const backgroundCodeLines = [
        "random.seed(42); // #######################################",
        "const data = fetch('/api/data'); // #######################",
        "console.log('#################...'); // ####################",
        "for (let i = 0; i < 100; i++) {",
        "    processData(i);",
        "    setTimeout(() => {",
        "        console.log(`O############################# #${i}...`);",
        "    }, Math.random() * 1000);",
        "}",
        "setInterval(() => {",
        "    alert('###############################################!');",
        "}, 5000);",
        "let systemStatus = 'ACTIVE'; // ##############################",
        "if (systemStatus === 'ACTIVE') {",
        "    initiateProcess();",
        "} else {",
        "    alert('##################################################!');",
        "}",
    ];

    useEffect(() => {
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
                index++;
            } else {
                clearInterval(typingInterval);
                setIsTypingCompleted(true); 
                setTimeout(() => setIsBackgroundActive(true), 3000);
            }
        }, 60);

        return () => clearInterval(typingInterval);
    }, [slogan]);

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

    return (
        <section id="welcome_page" className={`welcome-container ${isBackgroundActive ? "background-active" : ""}`}>
            {!isBackgroundActive && <div className="black-overlay"></div>}

            <div
                className={`text-background ${isBackgroundActive ? "animate" : ""}`}
            >
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
                    fontSize="50"
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
