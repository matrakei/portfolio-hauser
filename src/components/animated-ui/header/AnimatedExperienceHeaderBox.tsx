import { BriefcaseBusiness } from "lucide-react";
import { AnimatedBox } from "../AnimatedBox";

//TODO: get text from info
export const AnimatedExperienceHeaderBox = () => {
  return (
    <AnimatedBox className="col-span-5 row-span-2 p-0">
      <div className="p-8 space-y-5">
        <h2 className="text-4xl font-medium leading-tight flex items-center gap-3">
          <BriefcaseBusiness className="size-8 text-zinc-400" /> Experience
        </h2>
        <p className="text-zinc-300">
          La experiencia laboral con la que cuento la adquiri mediante disntitos encuentros que tuve y actividades que realicé
          <br />
        
        </p>
      </div>
    </AnimatedBox>
  );
};
