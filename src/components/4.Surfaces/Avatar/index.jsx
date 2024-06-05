import { useState } from 'react';

import CropEasy from './CropEasy';

import { useEffect } from 'react';

const Profile = () => {
  const [modal, setModal] = useState({ isOpen: false, title: '', content: '' });
  const [name, setName] = useState('Sam');
  const [file, setFile] = useState(null);
  const [photoURL, setPhotoURL] = useState(
    'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
  );
  const [openCrop, setOpenCrop] = useState(false);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setPhotoURL(URL.createObjectURL(file));
      setOpenCrop(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (openCrop) {
      setModal({ ...modal, title: 'Crop Profile Photo' });
    } else {
      setModal({ ...modal, title: 'Update Profile' });
    }
  }, [openCrop]);

  return (
    <div className='h-full w-full'>
      {!openCrop ? (
        <form onSubmit={handleSubmit}>
          <div className='flex  flex-col items-center'>
            <div>
              <label htmlFor='profilePhoto'>
                <input
                  accept='image/*'
                  id='profilePhoto'
                  type='file'
                  style={{ display: 'none' }}
                  onChange={handleChange}
                />
                <div className='w-40 h-40 rounded-full'>
                  <img
                    className='object-cover rounded-full'
                    src={photoURL}
                    style={{
                      width: '100%',
                      height: '100%',
                      cursor: 'pointer',
                    }}
                  />
                </div>
              </label>
              {file && (
                <button
                  aria-label='Crop'
                  color='primary'
                  onClick={() => setOpenCrop(true)}
                >
                  crop
                </button>
              )}
            </div>
            <button
              className='mt-4 py-2 px-3 bg-sky-500 text-white rounded-xl text-lg'
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <CropEasy {...{ photoURL, setOpenCrop, setPhotoURL, setFile }} />
      )}
    </div>
  );
};

export default Profile;
