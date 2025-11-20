import { GraduationCap } from "lucide-react";
import { AnimatedBox } from "../AnimatedBox";

//TODO: Get text from info
export const AnimatedEducationHeaderBox = () => {
  return (
    <AnimatedBox className="col-span-5 row-span-2 p-0">
      <div className="p-8 space-y-5">
        <h2 className="text-4xl font-medium leading-tight flex items-center gap-3">
          <GraduationCap className="size-8 text-zinc-400" /> Mi Educación
        </h2>
        <p className="text-zinc-300">
          Mi futura educacion me va a proveer con una base solida para introducirme directamente despues de mi graduacion en el mundo laboral teniendo conocimiento previo adquirido en la institucion
        </p>
      </div>
    </AnimatedBox>
  );
};
