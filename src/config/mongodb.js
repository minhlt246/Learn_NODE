const uri = "mongodb+srv://minhltps40328:minh249@cluster-minh.1gj5spk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-minh";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


export const Start_db = async () => {
    await millemongoClient.connect()
    millemongoClient =mongoClient.db(DataBase_Name)
}