import tarball = require('./tar')
import * as AWS from 'aws-sdk';
import stream =require('stream');

AWS.config.update({
    credentials:{ 
        accessKeyId: '',
        secretAccessKey: ''
    }
})

const uploadStream = (Key) => {
    const s3 = new AWS.S3();
    const pass = new stream.PassThrough();
    const Bucket = ''
    const upload = new AWS.S3.ManagedUpload({
        params: {Bucket: '', Key: Key, Body: pass},
    })
   upload.on('httpUploadProgress', (progress) => console.log(`${progress.loaded}/${progress.total}`))

    return {
        promise: upload.promise(),
        writeStream:pass
    }
  }

(async () => {
    const {promise, writeStream} = uploadStream('tarball.tgz')
    tarball.pipe(writeStream)
    // tarball.on('data', (data)=> console.log("WOOHOO"))
    promise.then(details => console.log(details))
    .catch(err => console.log('UPLOAD ERROR - ', err))
})()

    

