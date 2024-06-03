import React from "react";

interface FAQCardProps {
    question: string;
    answer: string;
}

const FaqCard: React.FC<FAQCardProps> = ({question, answer}) => {
  return (
    <details className="group [&_summary::-webkit-details-marker]:hidden" >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
        <h2 className="font-medium text-sm lg:text-lg">
          {question}
        </h2>

        <svg
          className="transition duration-300 size-5 shrink-0 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>

      <p className="px-4 mt-4 leading-relaxed text-gray-700">
        {answer}
      </p>
    </details>
  );
};

export default FaqCard;
