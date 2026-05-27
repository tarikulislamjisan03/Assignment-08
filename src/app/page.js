import Banner from "@/components/Banner";
import LearningTips from "@/components/LearningTips";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex container mx-auto flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <Banner> </Banner>
      <LearningTips> </LearningTips>
    </div>
  );
}
