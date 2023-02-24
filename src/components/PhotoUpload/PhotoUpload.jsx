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
  <div className='mb-4'>
      {/* <div>Native SDK File Upload Progress is {progress}%</div> */}
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload Profile Picture</label>
      <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" onChange={handleFileInput}/>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
      {/* <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button> */}
  </div>
  )
}

export default PhotoUpload;