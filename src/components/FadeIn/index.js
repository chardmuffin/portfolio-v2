import { useEffect, useRef, useState } from "react";

function FadeIn({ setCurrentTab, ...props }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setVisible(entry.isIntersecting);

        if (entry.isIntersecting) {
          if (entry.target.firstElementChild.className.includes("card")) {
            setCurrentTab("projects");
            document.title="Richard Huffman - Work";
          }
          else if (entry.target.firstElementChild.className.includes("welcome")) {
            setCurrentTab("about");
            document.title="Richard Huffman Developer";
          }
          else if (entry.target.firstElementChild.className.includes("resume-contact")) {
            setCurrentTab("resume");
            document.title="Richard Huffman - Resume";
          }
        }
      });
    });

    const { current } = domRef;
    observer.observe(current);

    return () => observer.unobserve(current);
  }, [setCurrentTab]);

  return (
    <div
      className={`fade-in ${isVisible && "is-visible"}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeIn;