const TeacherCard = ({ teacher }) => {
  const { name, profilePic, badge, areaOfExp, Experience } = teacher;
  return (
    <div className='pb-10'>
      <div className='card  bg-base-100 shadow-xl'>
        <figure>
          <img
            className='h-64 w-full'
            src={profilePic}
            alt='Teacher Profile pic'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-[#45445A]'>
            {name}
            <div className='badge badge-secondary'>{badge}</div>
          </h2>
          <p className='text-gray-500'>
            <span className='text-lg font-semibold pr-2'>Area of exp:</span>
            {areaOfExp}
          </p>
          <p className='text-gray-500'>
            <span className='text-lg font-semibold pr-2'>Experience:</span>
            {Experience}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
