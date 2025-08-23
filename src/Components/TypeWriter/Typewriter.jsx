import React, { useState, useEffect } from "react";
import './Typewriter.css'

function Typewriter({ texts }) {
  const [index, setIndex] = useState(0); // which text from array
  const [subIndex, setSubIndex] = useState(0); // which letter
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      // Pause at full text
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      // Switch to next text
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts]);

  return (
    <span>
      {texts[index].substring(0, subIndex)}
      <span className="cursor">|</span>
    </span>
  );
}

export default Typewriter;
