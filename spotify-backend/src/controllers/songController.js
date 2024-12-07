import {v2 as cloudinary} from 'cloudinary'
import songModel from '../models/songModel.js';
const addSong = async (req,res)=>{
    try{
        // console.log("INSIDE");
        console.log(req.body);
        const name = req.body.name;
        const desc = req.body.desc;
        const album = req.body.album;
        const audiofile = req.files.audio[0];
        const imagefile = req.files.image[0];
        const auidoUpload = await cloudinary.uploader.upload(audiofile.path,{resource_type:"raw"});
        const imageUpload = await cloudinary.uploader.upload(imagefile.path,{resource_type:"raw"});

        console.log(name, desc, album, audiofile, imagefile, auidoUpload, imageUpload);
        

        const duration = `${Math.floor(auidoUpload.duration/60)}:${Math.floor(auidoUpload.duration%60)}`
        const songData ={
            name,desc,album,image:imageUpload.secure_url,song:auidoUpload.secure_url,duration
        }
        const song = songModel(songData);
        await song.save();

        res.json({success:true,message:"Song added successfully"})
    } 

    catch(error)
    {
        console.log("CATCH");
        console.log(error.message);
        
        res.json({success:false,message: error.message});
    }
}

const listSong = async (req, res) => {
    try {
        const allSongs = await songModel.find();
        res.json({success:true,songs:allSongs});
    } catch (error) {
        res.json({success:false})
    }
};

const removeSong = async (req, res) => {
    try{
        await songModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Song deleted successfully"});
    }
    catch (error) {
        res.json({success:false});
    }
}

export {addSong,listSong,removeSong}
