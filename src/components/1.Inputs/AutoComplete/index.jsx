/*
improvements:
case insensitiveness
.debounce()
network call for options
*/

import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineSearch } from 'react-icons/ai';
import './AutocompleteInput.css';
import useDebounce from '../../../hooks/useDebounce';

// remove options props
export default function AutocompleteInputDebounce() {
  const [showOptions, setShowOptions] = useState(false);
  const autocompleteRef = useRef(null);
  const [album, setAlbum] = useState('');
  // add here
  const debouncedAlbum = useDebounce(album, 600);
  console.log(debouncedAlbum);
  const [options, setOptions] = useState([]);

  const selectAlbumHandler = (newAlbumValue) => {
    setAlbum(newAlbumValue);
    setShowOptions(false);
  };

  useEffect(() => {
    window.addEventListener('mousedown', clickOutsideHandler);
    return () => {
      window.addEventListener('mousedown', clickOutsideHandler);
    };
  }, []);

  const clickOutsideHandler = (ev) => {
    if (
      autocompleteRef &&
      autocompleteRef.current &&
      !autocompleteRef.current.contains(ev.target)
    ) {
      setShowOptions(false);
    }
  };
  useEffect(() => {
    axios
      .get(
        'https://jsonplaceholder.typicode.com/albums?search=' + debouncedAlbum
      )
      .then(({ data }) => {
        const filteredDate = data.filter(
          (opt) => opt.title.toLowerCase().indexOf(album.toLowerCase()) >= 0
        );
        setOptions(filteredDate);
      })
      .catch((err) => {
        console.err(err);
        setOptions([]);
      });
  }, [debouncedAlbum]);

  return (
    <div className='search-box' ref={autocompleteRef}>
      {/* searchinput */}

      <div id='search-header'>
        <input
          onClick={() => setShowOptions(!showOptions)}
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
          placeholder='Search for ...'
        />
        <div className='search-icon-box'>
          <AiOutlineSearch className='search-icon' size={20} />
        </div>
      </div>

      {showOptions && (
        <ul className='options'>
          {options.map((opt) => (
            <li key={opt.id} onClick={() => selectAlbumHandler(opt.title)}>
              {opt.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
