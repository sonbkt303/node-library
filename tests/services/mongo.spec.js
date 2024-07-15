const { MongoClient } = require("mongodb");

describe("Must connect and insert document success", () => {
  let connection;
  let db;
  const DB_URI = "mongodb://localhost:27017";
  const DB_NAME = "test";
  const MOCK_COLLECTION = 'mock_jest_users';

  beforeAll(async () => {
    connection = await MongoClient.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(DB_NAME);
  });

  afterAll(async () => {
    await connection.close();
  });


  it("should insert a doc into collection", async () => {
    const users = db.collection(MOCK_COLLECTION);

    const mockUser = { _id: "some-user-id", name: "John" };
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({ _id: "some-user-id" });
    expect(insertedUser).toEqual(mockUser);


  });

  it("Should be delete all document on mock_users collection", async () => {
    const users = db.collection(MOCK_COLLECTION);
    await users.deleteOne({ _id: "some-user-id" });

    const allUsers = await users.find().toArray();

    expect(allUsers.length).toEqual(0);
  })
});
