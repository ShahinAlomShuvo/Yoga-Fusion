const SectionHeader = ({ sectionSlogan, sectionTitle }) => {
  return (
    <div className='text-center mt-20 mb-10'>
      <h2 className='text-3xl font-bold text-[#45445A]'>{sectionTitle}</h2>
      <p className='text-lg font-semibold text-gray-500'>{sectionSlogan}</p>
    </div>
  );
};

export default SectionHeader;
