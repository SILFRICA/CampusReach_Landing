import React from "react";
import { faqLists } from "./FaqsList";
import FaqCard from "./FaqCard";

const FAQs: React.FC = () => {
  return (
    <section className="my-10 how-it-works">
      <div className="w-[85%] mx-auto">
        <div className="w-full text-center animate-appear">
          <h3 className="text-2xl font-bold lg:text-5xl">FAQs</h3>
        </div>
        <br />
        <div className="space-y-4 animate-appear">
          {faqLists.map(faq => (
            <FaqCard
              question={faq.question}
              answer={faq.answer}
              key={faq.question}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
