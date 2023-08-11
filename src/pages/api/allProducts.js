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

// const processor = [
//   {
//       image: "https://i.ibb.co/10cdwkr/processor4.jpg",
//       name: "Pc Processor",
//       category : "Ultimate Processor",
//       status : "In Stock",
//       price : "2800",
//       description : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
//       key_feature :"Rider Brand",
//       individual_rating :"5 star",
//       average_rating : "5 start",
//       reviews: "Oustanding Product For Customer Satisfaction"
//   },

//   {
//       image: "https://i.ibb.co/BLDnQtt/processor3.jpg",
//       name: "ultra processor",
//       category : "Processor",
//       status : "In Stock",
//       price : "4500",
//       description : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
//       key_feature :"Rider Brand",
//       individual_rating :"5 star",
//       average_rating : "5 start",
//       reviews: "Oustanding Product For Customer Satisfaction"
//   },

//   {
//       image: "https://i.ibb.co/1QVZzT8/processor1.png",
//       name: "Processor",
//       category : "Processor",
//       status : "In Stock",
//       price : "5000",
//       description : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
//       key_feature :"Rider Brand",
//       individual_rating :"5 star",
//       average_rating : "5 start",
//       reviews: "Oustanding Product For Customer Satisfaction"
//   },

//   {
//       image: "https://i.ibb.co/7vW0jc5/processor2.jpg",
//       name: "power Processor",
//       category : "Processor",
//       status : "In Stock",
//       price : "4000",
//       description : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
//       key_feature :"Rider Brand",
//       individual_rating :"5 star",
//       average_rating : "5 start",
//       reviews: "Oustanding Product For Customer Satisfaction"
//   },

// ]

// const motherboard = [
//   {
//     image: "https://i.ibb.co/Y7LVxwS/motherboard4.png",
//     name: "Msi Mother Board",
//     category: "Ultimate MotherBoard",
//     status: "In Stock",
//     price: "8800",
//     description:
//       "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
//     key_feature: "Rider Brand",
//     individual_rating: "5 star",
//     average_rating: "5 star",
//     reviews: "Oustanding Product For Customer Satisfaction",
//   },

//   {
//     image: "https://i.ibb.co/hLTs7zD/mothrboard2.jpg",
//     name: "ultra MotherBoard",
//     category: "MothreBoard",
//     status: "In Stock",
//     price: "8900",
//     description:
//       "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
//     key_feature: "Rider Brand",
//     individual_rating: "5 star",
//     average_rating: "5 star",
//     reviews: "Oustanding Product For Customer Satisfaction",
//   },

//   {
//     image: "https://i.ibb.co/gS7hbdk/motherboard1.jpg",
//     name: "MotherBoard",
//     category: "MotherBoard",
//     status: "In Stock",
//     price: "9000",
//     description:
//       "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
//     key_feature: "Rider Brand",
//     individual_rating: "5 star",
//     average_rating: "5 star",
//     reviews: "Oustanding Product For Customer Satisfaction",
//   },

//   {
//     image: "https://i.ibb.co/mF2BSLj/motherboard3.jpg",
//     name: "MotherBoard Processor",
//     category: "MotherBoard",
//     status: "In Stock",
//     price: "10000",
//     description:
//       "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
//     key_feature: "Rider Brand",
//     individual_rating: "5 star",
//     average_rating: "5 star",
//     reviews: "Oustanding Product For Customer Satisfaction",
//   },
// ];

const ram = [
  {
    image: "https://i.ibb.co/gV4FMrS/ram4.jpg",
    name: "ultra Ram",
    category: " Ram",
    status: "In Stock",
    price: "4500",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    key_feature: "Rider Brand",
    individual_rating: "5 star",
    average_rating: "5 star",
    reviews: "Oustanding Product For Customer Satisfaction",
  },

  {
    image: "https://i.ibb.co/vdQFWzZ/ram3.jpg",
    name: "ultra Ram Bar",
    category: "Ram",
    status: "In Stock",
    price: "4600",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    key_feature: "Rider Brand",
    individual_rating: "5 star",
    average_rating: "5 star",
    reviews: "Oustanding Product For Customer Satisfaction",
  },

  {
    image: "https://i.ibb.co/vVgb8bx/ram1.jpg",
    name: "Modern Ram",
    category: "Ram",
    status: "In Stock",
    price: "4700",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    key_feature: "Rider Brand",
    individual_rating: "5 star",
    average_rating: "5 star",
    reviews: "Oustanding Product For Customer Satisfaction",
  },

  {
    image: "https://i.ibb.co/7Npjfx6/ram2.jpg",
    name: "MotherBoard Ram",
    category: "Ram",
    status: "In Stock",
    price: "4550",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    key_feature: "Rider Brand",
    individual_rating: "5 star",
    average_rating: "5 star",
    reviews: "Oustanding Product For Customer Satisfaction",
  },
];

const powersupply = [
  {
    image: "https://i.ibb.co/WPvjcds/power4.jpg",
    name: "ultra PowerSupply",
    category: "Powersupply",
    status: "In Stock",
    price: "4500",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    key_feature: "Rider Brand",
    individual_rating: "5 star",
    average_rating: "5 star",
    reviews: "Oustanding Product For Customer Satisfaction",
  },

  {
    image: "https://i.ibb.co/K94QNsZ/power3.jpg",
    name: "ultra Powersupply Bar",
    category: "Powersupply",
    status: "In Stock",
    price: "4600",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    key_feature: "Rider Brand",
    individual_rating: "5 star",
    average_rating: "5 star",
    reviews: "Oustanding Product For Customer Satisfaction",
  },

  {
    image: "https://i.ibb.co/QP87QLx/power2.jpg",
    name: "Modern PowerSupply",
    category: "Powersupply",
    status: "In Stock",
    price: "4700",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    key_feature: "Rider Brand",
    individual_rating: "5 star",
    average_rating: "5 star",
    reviews: "Oustanding Product For Customer Satisfaction",
  },

  {
    image: "https://i.ibb.co/phFQGqL/power1.jpg",
    name: "MotherBoard Powersupply",
    category: "Powersupply",
    status: "In Stock",
    price: "4550",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    key_feature: "Rider Brand",
    individual_rating: "5 star",
    average_rating: "5 star",
    reviews: "Oustanding Product For Customer Satisfaction",
  },
];

const storagedevice = [
  {
    image: "https://i.ibb.co/DfSM88p/sd3.jpg",
    name: "ultra Storge Device",
    category: "Storge Device",
    status: "In Stock",
    price: "4500",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    key_feature: "Rider Brand",
    individual_rating: "5 star",
    average_rating: "5 star",
    reviews: "Oustanding Product For Customer Satisfaction",
  },

  {
    image: "https://i.ibb.co/YBNw8J2/sd4.jpg",
    name: "ultra Storage Device Bar",
    category: "Storage Device",
    status: "In Stock",
    price: "4600",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    key_feature: "Rider Brand",
    individual_rating: "5 star",
    average_rating: "5 star",
    reviews: "Oustanding Product For Customer Satisfaction",
  },

  {
    image: "https://i.ibb.co/1f89Zh5/sd2.jpg",
    name: "Modern Storage Device",
    category: "Storge Device",
    status: "In Stock",
    price: "4700",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    key_feature: "Rider Brand",
    individual_rating: "5 star",
    average_rating: "5 star",
    reviews: "Oustanding Product For Customer Satisfaction",
  },

  {
    image: "https://i.ibb.co/1JDP9xM/sd1.jpg",
    name: "MotherBoard Storage Device",
    category: "Storage Device",
    status: "In Stock",
    price: "4550",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    key_feature: "Rider Brand",
    individual_rating: "5 star",
    average_rating: "5 star",
    reviews: "Oustanding Product For Customer Satisfaction",
  },
];

const monitor = [
  {
    image: "https://i.ibb.co/Brbjktq/monitor4.jpg",
    name: "ultra HP MONITOR",
    category: "Monitor",
    status: "In Stock",
    price: "9000",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    key_feature: "Rider Brand",
    individual_rating: "5 star",
    average_rating: "5 star",
    reviews: "Oustanding Product For Customer Satisfaction",
  },

  {
    image: "https://i.ibb.co/vw7kBXQ/monitor3.jpg",
    name: "ultra ASUS MONITOR",
    category: "Monitor",
    status: "In Stock",
    price: "10000",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    key_feature: "Rider Brand",
    individual_rating: "5 star",
    average_rating: "5 star",
    reviews: "Oustanding Product For Customer Satisfaction",
  },

  {
    image: "https://i.ibb.co/wr1rWRK/monirtor1.jpg",
    name: "Modern SAMSUNG MONITOR",
    category: "Monitor",
    status: "In Stock",
    price: "9500",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    key_feature: "Rider Brand",
    individual_rating: "5 star",
    average_rating: "5 star",
    reviews: "Oustanding Product For Customer Satisfaction",
  },

  {
    image: "https://i.ibb.co/g70TVrk/monitor2.jpg",
    name: "DELL MONITOR",
    category: "MONITOR",
    status: "In Stock",
    price: "10500",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    key_feature: "Rider Brand",
    individual_rating: "5 star",
    average_rating: "5 star",
    reviews: "Oustanding Product For Customer Satisfaction",
  },
];

const others = [
  {
    image: "https://i.ibb.co/553wgjZ/others4.jpg",
    name: "ultra Mouse",
    category: "others",
    status: "In Stock",
    price: "400",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    key_feature: "Rider Brand",
    individual_rating: "5 star",
    average_rating: "5 star",
    reviews: "Oustanding Product For Customer Satisfaction",
  },

  {
    image: "https://i.ibb.co/pbkZ5L7/others3.jpg",
    name: "ultra Keyboard",
    category: "Others",
    status: "In Stock",
    price: "600",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    key_feature: "Rider Brand",
    individual_rating: "5 star",
    average_rating: "5 star",
    reviews: "Oustanding Product For Customer Satisfaction",
  },

  {
    image: "https://i.ibb.co/S3jBDHM/others1.jpg",
    name: "Modern Mouse",
    category: "Others",
    status: "In Stock",
    price: "450",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    key_feature: "Rider Brand",
    individual_rating: "5 star",
    average_rating: "5 star",
    reviews: "Oustanding Product For Customer Satisfaction",
  },

  {
    image: "https://i.ibb.co/s57zFXs/others2.jpg",
    name: "Logitec Keyboard",
    category: "others",
    status: "In Stock",
    price: "650",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    key_feature: "Rider Brand",
    individual_rating: "5 star",
    average_rating: "5 star",
    reviews: "Oustanding Product For Customer Satisfaction",
  },
];
