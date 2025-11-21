import { FaLanguage } from "react-icons/fa";
import { useSectionContext } from "../../hooks/useSectionContext";
import { AnimatedBox } from "./AnimatedBox";

export const AnimatedLanguagesBox = () => {
  const { activeSection } = useSectionContext();

  const excludedSections = ["experience", "education"];
  if (excludedSections.includes(activeSection)) {
    return null;
  }

  return (
    <AnimatedBox className="col-span-5 row-span-1 flex items-center justify-between p-2 px-6">
      <p>Español</p>
      <FaLanguage className="size-10 text-teal-300" />
      <p>English</p>
    </AnimatedBox>
  );
};
