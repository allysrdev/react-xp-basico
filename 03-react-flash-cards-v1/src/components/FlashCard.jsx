import React, { useState } from "react";

export default function FlashCard({
  id,
  title = "Título do Card",
  description = "Descrição do Card",
  showFlashCardTitle = true,
  onButtonClick = null,
}) {
  const fontSizeClassName = showFlashCardTitle ? "text-xl" : "text-sm";
  const handleShowTitle = () => {
    onButtonClick(id);
  };

  return (
    <div
      className={`shadow-lg m-4 p-4 w-80 h-48 flex flex-row items-center justify-center cursor-pointer font-semibold ${fontSizeClassName}`}
      style={{
        fontFamily: "'JetBrains Mono', monospace",
      }}
      onClick={handleShowTitle}
    >
      {showFlashCardTitle ? title : description}
    </div>
  );
}
