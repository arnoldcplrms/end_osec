const mongoDb = require('mongodb')
const MongoClient = mongoDb.MongoClient
const URI = process.env.MONGODB_URI || 'mongodb://arnold:arnold123@ds233278.mlab.com:33278/indigitous'
const DB_NAME = 'indigitous'

exports.submitNewsLetter = async (req, res) => {
    try {
        const { name, email, contactNo, message } = req.body
        const collection = await createCollection()
        await collection.insertOne({
            name,
            email,
            contactNo,
            message
        })
        res.send('Subscriber added')
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

const createCollection = async () => {
    const client = await MongoClient.connect(URI, { useNewUrlParser: true })
    const db = client.db(DB_NAME)
    const collection = db.collection('news_letter')
    return collection
}
