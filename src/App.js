import React, {useState} from 'react';
import { GridImage } from './comps/GridImage';
import Title from './comps/Title';
import { UploadForm } from './comps/UploadForm';
import { Slider } from "./comps/Slider/Index"
import { Modal } from './comps/Modal';

function App() {
  const [selectedImage, SetSelectedImage] = useState(null)

  return (
    <div className="App">
      <Title />
      <Slider />
      <UploadForm />
      <GridImage SetSelectedImage={ SetSelectedImage}/>
      {selectedImage && <Modal selectedImage={selectedImage} SetSelectedImage={SetSelectedImage}/>}
    </div>
  );
}

export default App;
