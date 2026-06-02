import Allcourses from "@/components/Allcourses";
import Banner from "@/components/Banner";
import LearningTips from "@/components/LearningTips";
import TopInstructors from "@/components/TopInstructors";
import TrendingCourses from "@/components/TrendingCourse";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <Banner> </Banner>
      <Allcourses> </Allcourses> 
      <TrendingCourses> </TrendingCourses>
       <LearningTips> </LearningTips>
      <TopInstructors> </TopInstructors>
     
    </div>
  );
}
