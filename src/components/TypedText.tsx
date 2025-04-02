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
          const char = text[currentIndex];
          const charCode = text.charCodeAt(currentIndex);

          setDisplayText((prev) => {
            const newText = prev + char;
            console.log(
              "Adding character:",
              char,
              "Character code:",
              charCode,
              "Current text:",
              newText
            );
            return newText;
          });
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(timer);
          console.log("Typing complete. Final text:", displayText);
        }
      }, typingSpeed);
    }

    return () => clearInterval(timer);
  }, [text, typingSpeed, isTyping]);

  return (
    <div className={`relative inline-block ${className}`}>
      <span style={{ whiteSpace: "pre" }}>{displayText}</span> {/* Added whiteSpace: "pre" */}
      {isTyping && (
        <span className="inline-block w-[2px] bg-current animate-cursor-blink"></span>
      )}
    </div>
  );
};

export default TypedText;