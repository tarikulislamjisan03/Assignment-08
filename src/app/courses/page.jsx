
import CourseData from "@/components/CourseCard";
import datas from "@/data.json";
const CoursePage =async () => {
 
    console.log(datas)
    return (
        <div>
         
            <div className="grid grid-cols-3 gap-5 container mx-auto mt-10"> 

                {
                datas.map(data=><CourseData key={data.id} data={data}> </CourseData>)
            }
            </div>
        </div>
    );
};
 
export default CoursePage;