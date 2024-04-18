"use client";

import { useState } from "react";

interface ReadMoreProps {
  text: string;
  maxLength?: number;
}

export default function ReadMore({ text, maxLength = 190 }: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="lg:hidden">
      {isExpanded ? (
        <>
          <p className="text-sm text-dusty-gray">
            {text}{" "}
            <button
              className="text-sm font-bold text-primary"
              onClick={toggleExpanded}
            >
              Read less
            </button>
          </p>
        </>
      ) : (
        <div>
          {text.length <= maxLength ? (
            text
          ) : (
            <>
              <p className="text-sm text-dusty-gray">
                {`${text.slice(0, maxLength)}...`}{" "}
                <button
                  className="text-sm font-bold text-primary"
                  onClick={toggleExpanded}
                >
                  Read more
                </button>
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
