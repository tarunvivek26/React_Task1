import React, { useState } from "react";

const ResponsiveParagraphWordCounter = () => {
  const [wordCount, setWordCount] = useState(0);

  const handleInputChange = (e) => {
    const text = e.target.value;
    setWordCount(text.split(" ").length);
  };

  return (
    <div className="responsive-paragraph-word-counter">
      <h1 className="title">Responsive Paragraph Word Counter</h1>
      <textarea
        className="text-area"
        placeholder="Enter your text here..."
        onChange={handleInputChange}
      />
      <div className="word-count">
        <span>Word count: </span>
        {wordCount}
      </div>
    </div>
  );
};

export default ResponsiveParagraphWordCounter;