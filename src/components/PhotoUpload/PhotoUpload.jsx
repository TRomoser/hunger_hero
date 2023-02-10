import { useState, useRef } from 'react';
import AWS from 'aws-sdk';
import S3 from "react-aws-s3"
window.Buffer = window.Buffer || require("buffer").Buffer;
const AWS_ACCESS_KEY_ID = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
// const S3_BASE_URL = process.env.REACT_APP_S3_BASE_URL

export default function PhotoUpload() {
  const fileInput = useRef()
  // const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('ready');

  // const handleFileSelect = (e) => {
  //   setFile(e.target.files[0]);
  // };

  const handleClick = async (event) => {
    event.preventDefault();
    setUploadStatus('uploading');
    const newFile = fileInput.current.files[0];
    const newFileName = fileInput.current.files[0].name;
    const config = {
      bucketName: S3_BUCKET,
      // dirName: 'images', /* optional */
      region: 'us-west-2',
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    }
      const ReactS3Client = new S3(config);
      // console.log(newFile, newFileName)

      ReactS3Client.uploadFile(newFile, newFileName).then(data => {
        console.log(data);
        if (data.status === 204) {
          console.log('success')
        } else {
          console.log("fail")
        }
      })
    }
  return (
    <>
      <form className='upload-steps' onSubmit={handleClick}>
        <label>Upload File:
          <input type="file" ref={fileInput} />
          </label>
          <br />
          <button type='submit'>Upload</button>
        </form>
    </>
  );
}