const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY
const S3_Bucket = process.env.S3_Bucket
const S3_BASE_URL = process.env.S3_BASE_URL

import { useState } from 'react';
import AWS from 'aws-sdk';

export default function PhotoUpload() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('ready');

  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    setUploadStatus('uploading');
    const s3 = new AWS.S3({
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: 'AWS_SECRET_ACCESS_KEY',
    });
    const params = {
      Bucket: 'catcollector-tromoser',
      Key: file.name,
      Body: file,
    };
    try {
      await s3.upload(params).promise();
      setUploadStatus('success');
    } catch (error) {
      setUploadStatus('error');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileSelect} />
      {file && (
        <button onClick={handleUpload}>Upload</button>
      )}
      {uploadStatus === 'uploading' && <p>Uploading...</p>}
      {uploadStatus === 'success' && <p>Upload Successful!</p>}
      {uploadStatus === 'error' && <p>Upload Failed. Try Again.</p>}
    </div>
  );
}