import React ,{useState, useEffect} from 'react';
import AWS from 'aws-sdk';
import './PhotoUpload.css';

const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
const REGION ='us-west-1';


AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})

const PhotoUpload = (props) => {
  const { formData, setFormData } = props
  const [progress , setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
      setSelectedFile(e.target.files[0]);
  }

  useEffect(() => {
    if(selectedFile) {
      uploadFile(selectedFile)
    }
    

  }, [selectedFile])

  const uploadFile = async (file) => {

      const params = {
          ACL: 'public-read',
          Body: file,
          Bucket: S3_BUCKET,
          Key: file.name
      };

      let s3Response = await myBucket.upload(params).promise()
      console.log(s3Response.Location, "S3 LOCATION")
      setFormData({
        ...formData,
        ['photoUrl']: s3Response.Location,
        error: ''
      });


      // myBucket.putObject(params)
      //     .on('httpUploadProgress', (evt) => {
      //         setProgress(Math.round((evt.loaded / evt.total) * 100))
      //     })
      //     .send((err) => {
      //         if (err) console.log(err)
      //     })
          
  }


  return (
  <div className='file-input-container'>
    {/* {formData.photoUrl !== '' ? 
      <img src={formData.photoUrl} alt="" />
      :
      <> */}
      
      <label className="file-input-label" htmlFor="file_input"><i className="fa-solid fa-cloud-arrow-up"></i></label>
      <input className="file-input" aria-describedby="file_input_help" id="file_input" type="file" onChange={handleFileInput}/>
      <p className="file-input-text">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
      {/* </>} */}
  </div>
  )
}

export default PhotoUpload;