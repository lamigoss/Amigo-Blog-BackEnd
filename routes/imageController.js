require('dotenv').config()
const multer = require('multer');

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

