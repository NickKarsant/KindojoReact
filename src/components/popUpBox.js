import React, { useState } from 'react';
import ThemeButton from '../components/ThemeButton'
import {Button} from '@mui/material';
import FsLightbox from 'fslightbox-react';




const PopupBox = ({content, text='see this prop in action!'}) => {
  const [toggler, setToggler] = useState(false);


  return (
    <>
    <ThemeButton text={text} onClick={ () => setToggler(!toggler) } />
    <FsLightbox
    toggler={toggler}
    sources={[content]}
    />
    </>
    );
 
};

export default PopupBox
