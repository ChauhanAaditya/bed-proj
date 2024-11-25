import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { url } from '../App'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSong = () => {
  const [image, setImage] = useState(null);
  const [song, setSong] = useState(null);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [album, setAlbum] = useState('None');
  const [loading, setLoading] = useState(false);
  const [albumData, setAlbumData] = useState([]);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('desc', desc);
//       formData.append('image', image);
//       formData.append('song', song);
//       formData.append('album', album);
  
//       const url = "http://localhost:4000/api/song/add";
//       const options = {
//         method: "POST",
//         body: formData,
//       };
  
//       const req1 = await fetch(url, options);
      
//       // Parse the response as JSON
//       const data = await req1.json();
  
//       if (data.success) {
//         console.log("SUCCESS");
//         toast.success("Song added successfully");
//         setName('');
//         setDesc('');
//         setAlbum('None');
//         setImage(null);
//         setSong(null);
//       } else {
//         console.error("Something went wrong", data);
//         toast.error("Something went wrong");
//       }
//     } catch (error) {
//       console.error("ERROR:", error);
//       toast.error("Error occurred: " + error.message);
//     }
//     setLoading(false);
//   };
  

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    try{
      const formData = new FormData();
      formData.append('name', name);
      formData.append('desc',desc );
      formData.append('image', image);
      formData.append('song', song);
      formData.append('album', album);

      // console.log(name, desc, image, song, album);
      
      // console.log(formData);

      // console.log("INSIDE");
      

      

      // const response = await axios.post(`${url}/api/song/add`, {
      //   body: formData
      // })


      const url = "http://localhost:4000/api/song/add"
      const options = {
        method: "POST",
        body: formData
      }
      const req1 = await fetch(url, options)
      const data = await req1.text()
      console.log("data: ", data)

      // console.log(formData);
      
      
      // const response = await fetch(`${url}/api/song/add`, {
      //   method: 'POST',
      //   body: formData
      // })

      
      // const response = await fetch(`${url}/api/song/add`, {
      //   method : "POST",
      //   headers : {"Content-Type": "application/json"},
      //   body: JSON.stringify({
      //     name : name,
      //     desc : desc,
      //     image : image,
      //     song : song,
      //     album : album,
      //   })
      // })
      
      // console.log(response.data);
      // const data = await response.json();
      // console.log(data);
      
      

      if(req1.data.success)
      {
        
        console.log("SUCCESS");
        
        toast.success("Song added successfully")
        setName("");
        setDesc("");
        setAlbum("None");
        setImage(false);
        setSong(false);
      }
      else{
        toast.error("Something went wrong")
      }
    }
    catch (error) {
      console.log("ERROR");
      
      toast.error("Error occurred: " + error.message)
    }
    setLoading(false)
  };

  return loading?
  <div className='grid place-items-center min-h-[80vh]'>
    <div className='w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin'>

    </div>
  </div>:(
    <form
      
      onSubmit={onSubmitHandler}
      className="flex flex-col items-start gap-8 text-gray-600"
      encType='multipart/form-data'
    >
      <div className="flex gap-8">
        <div className="flex flex-col gap-4">
          <p>Upload Song</p>
          <input
            onChange={(e) => setSong(e.target.files[0])}
            type="file"
            id="song-upload"
            accept="audio/*"
            hidden
          />
          <label htmlFor="song-upload">
            <img src={song? assets.upload_added:assets.upload_song} className="w-24 cursor-pointer" alt="Upload song" />
          </label>
        </div>
        <div className="flex flex-col gap-4">
          <p>Upload Image</p>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image-upload"
            accept="image/*"
            hidden
          />
          <label htmlFor="image-upload">
            <img src={image? URL.createObjectURL(image):assets.upload_area} className="w-24 cursor-pointer" alt="Upload image" />
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Song name</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Song Description</p>
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Album</p>
        <select
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2"
        >
          <option value="None">None</option>
        </select>
      </div>
      <button
        type="submit"
        // onSubmit={onSubmitHandler}
        className={`bg-black text-base text-white py-3 px-8 cursor-pointer ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={loading}
      >
        {loading ? 'Adding...' : 'ADD'}
      </button>
    </form>
  );
};

export default AddSong;
