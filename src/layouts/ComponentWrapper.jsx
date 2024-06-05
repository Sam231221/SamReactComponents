export function ComponentWrapper(props) {
  return (
    <div className='mt-5 mb-4'>
      <h1 className='text-zinc-700 font-semibold text-2xl mb-2'>
        {props.title}
      </h1>
      <p className='text-gray-600 font-medium text-lg mb-2'>
        {props.description}
      </p>
      {props.children}
    </div>
  );
}
