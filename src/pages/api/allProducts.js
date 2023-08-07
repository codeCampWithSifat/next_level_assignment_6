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

async function run1(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const allProducts = client
      .db("NEXT_LEVEL_ASSIGNMENT_6")
      .collection("allProducts");

    if (req.method === "GET") {
      const news = await allProducts.find({}).toArray();
      res.send(news);
    }
    // console.log("database connected succesfully");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
// run().catch(console.dir);
export default run1;

// const data = [
//     {
//         image: "https://i.ibb.co/dWRVYqr/sd1.jpg",
//         name: "Storage Device",
//         category : "Storage Device",
//         status : "In Stock",
//         price : "2500",
//         description : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
//         key_feature :"Rider Brand",
//         individual_rating :"5 star",
//         average_rating : "5 start",
//         reviews: "Oustanding Product For Customer Satisfaction"
//     },

//     {
//         image: "https://i.ibb.co/rpwdKpK/ram1.jpg",
//         name: "RAM",
//         category : "Ram",
//         status : "In Stock",
//         price : "4500",
//         description : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
//         key_feature :"Rider Brand",
//         individual_rating :"5 star",
//         average_rating : "5 start",
//         reviews: "Oustanding Product For Customer Satisfaction"
//     },

//     {
//         image: "https://i.ibb.co/By7XKKs/processor1.png",
//         name: "Processor",
//         category : "Processor",
//         status : "In Stock",
//         price : "5000",
//         description : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
//         key_feature :"Rider Brand",
//         individual_rating :"5 star",
//         average_rating : "5 start",
//         reviews: "Oustanding Product For Customer Satisfaction"
//     },

//     {
//         image: "https://i.ibb.co/JvL9gyc/power1.jpg",
//         name: "Power Supply",
//         category : "Power supply",
//         status : "In Stock",
//         price : "2000",
//         description : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
//         key_feature :"Rider Brand",
//         individual_rating :"5 star",
//         average_rating : "5 start",
//         reviews: "Oustanding Product For Customer Satisfaction"
//     },

//     {
//         image: "https://i.ibb.co/HHtK5Lk/others1.jpg",
//         name: "Mouse",
//         category : "others",
//         status : "In Stock",
//         price : "400",
//         description : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
//         key_feature :"Rider Brand",
//         individual_rating :"5 star",
//         average_rating : "5 start",
//         reviews: "Oustanding Product For Customer Satisfaction"
//     },

//     {
//         image: "https://i.ibb.co/bFy1Lf0/motherboard1.jpg",
//         name: "Mother Board Asus",
//         category : "Mother_Board",
//         status : "In Stock",
//         price : "12000",
//         description : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
//         key_feature :"Rider Brand",
//         individual_rating :"5 star",
//         average_rating : "5 start",
//         reviews: "Oustanding Product For Customer Satisfaction"
//     },

//     {
//         image: "https://i.ibb.co/bbYwg7m/monirtor1.jpg",
//         name: "Dell Monitor",
//         category :"Monitor",
//         status : "In Stock",
//         price : "10000",
//         description : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
//         key_feature :"Rider Brand",
//         individual_rating :"5 star",
//         average_rating : "5 start",
//         reviews: "Oustanding Product For Customer Satisfaction"
//     },
// ]
