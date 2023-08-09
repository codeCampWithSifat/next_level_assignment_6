const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://NEXT_LEVEL_ASSIGNMENT_6:6ltf6cF7muoWbg4Z@cluster0.qulzvkz.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run7(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const allRam = client.db("NEXT_LEVEL_ASSIGNMENT_6").collection("ram");

    if (req.method === "GET") {
      const news = await allRam.find({}).toArray();
      res.send(news);
    }
    // console.log("database connected succesfully");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
// run().catch(console.dir);
export default run7;
