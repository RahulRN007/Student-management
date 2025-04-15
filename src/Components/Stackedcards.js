import { useEffect, useRef, useState } from "react";
import "../../src/Components/Stackedcards.css"; 

const StackedCards = () => {
  const cardsRef = useRef([]);
  const stackAreaRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const rotateCards = () => {
      let angle = 0;
      cardsRef.current.forEach((card, index) => {
        if (card) {
          if (index <= scrollIndex) {
            card.style.transform = `translateY(-120vh) rotate(-48deg)`;
          } else {
            card.style.transform = `rotate(${angle}deg)`;
            angle -= 10;
            card.style.zIndex = cardsRef.current.length - index;
          }
        }
      });
    };

    const handleScroll = () => {
      if (!stackAreaRef.current) return;
      const distance = window.innerHeight * 0.5;
      const topVal = stackAreaRef.current.getBoundingClientRect().top;
      const index = Math.floor(-1 * (topVal / distance + 1));
      setScrollIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    rotateCards();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollIndex]);

  const cards = [
    { sub: "Simplified", content: "Complex tasks are now simple", color: "rgb(64, 122, 255)" },
    { sub: "Boost Productivity", content: "Perform tasks in less time", color: "rgb(221, 62, 88)" },
    { sub: "Facilitated Learning", content: "Train anyone from anywhere", color: "rgb(186, 113, 245)" },
    { sub: "Support", content: "Now it's 24/7 support", color: "rgb(247, 92, 208)" }
  ];

  return (
    <div className="stack-area" ref={stackAreaRef}>
      <div className="card-stack">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
            ref={(el) => (cardsRef.current[index] = el)}
            style={{ background: card.color }}
          >
            <div className="sub">{card.sub}</div>
            <div className="content">{card.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedCards;
