import TeacherCard from "./TeacherCard";

const OurTeacher = ({ teacherData }) => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto px-4 lg:px-0'>
      {teacherData.map((teacher) => (
        <TeacherCard key={teacher.id} teacher={teacher}></TeacherCard>
      ))}
    </div>
  );
};

export default OurTeacher;
