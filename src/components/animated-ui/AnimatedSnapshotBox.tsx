import { AnimatedBox } from "./AnimatedBox";
import { myInfo } from "../../assets/data";

export const AnimatedSnapshotBox = () => {
  return (
    <AnimatedBox className="col-span-4 row-span-4 p-0 overflow-hidden">
      <div className="p-8 space-y-5 h-full">

        {/* Sin título */}

        <div className="grid grid-cols-1 gap-2 p-1 h-full">
          {myInfo.about_me.snapshot.map((item, index) => (
            <div
              key={index}
              className="text-center p-0 hover:bg-zinc-700 transition rounded-md h-full"
            >
              <div className="hidden">{item.label}</div>

              <div className="w-full h-full rounded-md overflow-hidden">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedBox>
  );
};
