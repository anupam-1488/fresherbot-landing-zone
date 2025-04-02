
import { useEffect, useState } from "react";

interface TypedTextProps {
  text: string;
  typingSpeed?: number;
  className?: string;
}

const TypedText = ({ text, typingSpeed = 100, className = "" }: TypedTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let timer: NodeJS.Timeout;

    if (isTyping) {
      timer = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText((prev) => prev + text[currentIndex]);
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(timer);
        }
      }, typingSpeed);
    }

    return () => clearInterval(timer);
  }, [text, typingSpeed, isTyping]);

  return (
    <div className={`relative inline-block ${className}`}>
      <span>{displayText}</span>
      {isTyping && (
        <span className="absolute right-[-4px] h-full w-[2px] bg-current animate-cursor-blink"></span>
      )}
    </div>
  );
};

export default TypedText;
