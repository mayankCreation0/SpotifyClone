import React from 'react';
// redux
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../containers/Search/searchActions';
import {
  SearchContainer,
  Input,
  SearchIcon,
  CancelIcon,
  SearchFullContainer
} from './searchInputStyles';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SearchInput = () => {

  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();

  const {
    transcript,
    // listening,

  } = useSpeechRecognition();


  const startListeningbtn = () => {
    SpeechRecognition.startListening();
    // setTimeout(() => {
      setValue(transcript) 
    // }, 1000);
    console.log(value);
  };

  const handleChange = ({ target }) => {
    setValue(target.value);
    dispatch(setSearchValue({ query: target.value }));
  };

  const handleReset = () => {
    setValue('');
    dispatch(setSearchValue({ query: '' }));
  };

  React.useEffect(() => setValue(''), []);

  return (
    <SearchFullContainer>
      <SearchContainer>
        <SearchIcon fill='#121212' width={24} height={24} />
        {value.trim().length ? (
          <CancelIcon
            stroke='#121212'
            width={24}
            height={24}
            onClick={handleReset}
            style={{marginRight:'20px'}}
          />
        ) : null}
        <Input
          type='text'
          placeholder='Search for Artists, Songs or Podcasts'
          value={value}
          onChange={handleChange}
        />
        <button style={{ width: '20px', marginLeft: '-28px', border: 'none',backgroundColor:'transparent' }} onClick={startListeningbtn}><img style={{ width: '20px' }} src='https://cdn-icons-png.flaticon.com/512/3747/3747132.png' alt='mike' /></button>
      </SearchContainer>
    </SearchFullContainer>
  );
};

export default SearchInput;
