import multer from "multer";

const storage = multer.diskStorage({
    filename:function(req,file,callback)
    {
        callback(null,file.originalname)
    }
});

const upload = multer({
    storage: multer.diskStorage({})
})

export default upload;