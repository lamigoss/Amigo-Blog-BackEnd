require('dotenv').config()
const multer = require('multer');
const router = require("express").Router();
const imageModel = require('../model/imageModel')
const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const crypto = require('crypto');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');



// RANDOMIZE UNIQUE KEYS TO UPLOAD TO AWS
const randomName = (bytes = 16) => crypto.randomBytes(bytes).toString('hex')

// AWS VARIABLES FOR AWS CREDENTIALS
const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

// PARAMS TO SEND TO AWS
const s3 = new S3Client({
    credentials: {
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey
    },
    region: region
  })

  // MULTER MEMORY STORAGE
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.post('/', upload.single('image'), async (req, res) => {
    console.log(req.file)
    console.log(req.body)
    
    const randomImageKey = randomName()
  
    const params = {
      Bucket: bucketName,
      Key: randomImageKey,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    }
  
    const command = new PutObjectCommand(params)
    await s3.send(command)
  
    const postImage = await imageModel.create({...req.body, imageKey: randomImageKey })
    // const populate = await postImage.populate('storeFront')
     res.sendStatus(201)
  })
  module.exports = router;