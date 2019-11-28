const request = require("supertest");
const server = require("../api/server.js");
const db = require('../db/config.js');

beforeEach(async () => {
  await db.raw('TRUNCATE TABLE users CASCADE;');
});

afterAll(async () => {
  await db.raw('TRUNCATE TABLE users CASCADE;');
})

const user1 = {
  username: 'user1',
  email: 'user1@email.com'
}

const user1Updates = {
  username: 'user1Updated',
  email: 'user1Updated@email.com'
}

const user2 = {
  username: 'user2',
  email: 'user2@email.com'
}

// tests for the GET /api/users endpoint
describe("GET /api/users", () => {
  it("Empty database", async () => {
    const response = await request(server).get("/api/users");
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toEqual(0);
  });

  it("Database with two users", async () => {
    await db.seed.run();
    const response = await request(server).get("/api/users");
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toEqual(2);
  });
});

describe("POST /api/users", () => {
  it('Valid user data', async () => {
    const postResponse = await request(server).post("/api/users").send(user1);
    const getResponse = await request(server).get('/api/users');
    const allUsers = getResponse.body;

    // receives 201 status
    expect(postResponse.status).toEqual(201);
    // response asserts 1 inserted row
    expect(postResponse.body.length).toEqual(1);
    // database reflects 1 inserted row
    expect(allUsers.length).toEqual(1);

    const insertedUser = allUsers[0];

    // database reflects correct username, email, and valid timestamp
    expect(insertedUser.username).toEqual(user1.username);
    expect(insertedUser.email).toEqual(user1.email);
    expect(typeof Date.parse(insertedUser["created_at"])).toEqual('number');
  });
});

describe("PUT /api/users", () => {
  it ('Valid updates', async () => {
    const putResponse = await request(server).put('/api/users/1').send(user1Updates);
  });
});
