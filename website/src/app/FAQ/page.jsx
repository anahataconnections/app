import React from "react";
import FAQItem from "./FAQItem";
async function fetchFaq() {
  try {
    const res = await fetch(`https://cms.anahataaconnections.com/api/faqs`);
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

const FAQ =  async  () => {

  const Faq = await fetchFaq();
  return (
    <div className="h-auto">
      <header className="font-Pattaya flex items-center text-center justify-center text-[#094C3B] text-[52px]">
        Frequently Asked Questions
      </header>

      <div className="flex flex-col justify-center items-center p-10">
        <FAQItem question={Faq.data[0].attributes.question} answer={Faq.data[0].attributes.answer} />
        <FAQItem question={Faq.data[1].attributes.question} answer={Faq.data[1].attributes.answer} />
        <FAQItem question={Faq.data[2].attributes.question} answer={Faq.data[2].attributes.answer} />
      </div>
    </div>
  );
};

export default FAQ;


