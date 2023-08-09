const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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

async function run2(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const singleProducts = client
      .db("NEXT_LEVEL_ASSIGNMENT_6")
      .collection("allProducts");

    if (req.method === "GET") {
      const { detailSingleProduct } = req.query;
      const query = { _id: new ObjectId(detailSingleProduct) };
      const result = await singleProducts.findOne(query);
      res.send(result);
    }
    // console.log("database connected succesfully");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
// run().catch(console.dir);
export default run2;
