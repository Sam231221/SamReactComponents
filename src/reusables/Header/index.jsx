const Header = ({ title, description }) => {
  return (
    <div className='my-4'>
      <h2 className='text-zinc-800 font-bold text-5xl mb-2'>{title}</h2>
      <p className='text-gray-700 font-medium text-2xl'>{description}</p>
    </div>
  );
};
export default Header;
