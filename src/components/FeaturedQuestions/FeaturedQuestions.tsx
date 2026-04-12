import { questions } from "~/constants/addText";
import FAQItem from "../FAQItem/FAQItem";

const FeaturedQuestions = () => {
  const featuredQuestions = questions.filter((question) => question.featured);
  return (
    <section className="flex flex-col items-center">
      <h1 className="extra-big leading-none">
        Frequently Asked&nbsp;<span className="text-blue">Questions</span>
      </h1>
      <ul className="flex flex-col gap-[10px] xl:w-[80%] mx-auto mt-6">
        {featuredQuestions.map((item, i) => (
          <FAQItem key={i} question={item.question} answer={item.answer} />
        ))}
      </ul>
    </section>
  );
};

export default FeaturedQuestions;
