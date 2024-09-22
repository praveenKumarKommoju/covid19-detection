"use client";

import React, { useRef} from "react";
import PrimaryButton from "../../components/primaryButton"

const Home=()=> {

    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        // Handle the selected file here (e.g., upload it or play it)
        console.log(file);
      };

  return (
    <div>
      <PrimaryButton onClick={() => fileInputRef.current.click()} title={'Upload Audio'}/>
      <input
      type="file"
      accept="audio/*"
      onChange={handleFileChange}
      ref={fileInputRef}
      style={{ display: 'none' }}
    />
    </div>
  );
}

export default Home;