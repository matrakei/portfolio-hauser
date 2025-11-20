import { motion, type HTMLMotionProps } from "framer-motion";
import { AnimatedBox } from "./AnimatedBox";
import { myInfo } from "../../assets/data";
import { twMerge } from "tailwind-merge";

export const AnimatedSkillsBox = () => {
  return (
    <AnimatedBox className="col-span-5 row-span-2 grid grid-cols-4 gap-6">
      {/* Título centrado */}
      <div className="col-span-4 flex items-center justify-center mb-2">
        <h2 className="font-bold text-xl tracking-wide">TECNOLOGIAS</h2>
      </div>

      {myInfo.skills.map((skill) => (
        <SkillItem key={skill.name} className={skill.className}>
          {skill.children}
        </SkillItem>
      ))}
    </AnimatedBox>
  );
};

type StackItemProps = { className?: string } & HTMLMotionProps<"div">;

const SkillItem = ({ className, ...rest }: StackItemProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        rotate: Math.random() > 0.5 ? 8 : -8,
        y: -6,
      }}
      className={twMerge(
        // 🔥 CUADRADO REAL + grande + marco correcto
        "aspect-square rounded-xl flex items-center justify-center",
        "bg-[#18181B] border border-[#3F3F47] p-3", // marco exacto del portfolio
        className
      )}
      {...rest}
    />
  );
};
