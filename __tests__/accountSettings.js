const request = require("supertest");
const server = require("../api/server.js");
const db = require('../db/config.js');

beforeAll(async () => {
  await db.raw('TRUNCATE TABLE users CASCADE;');
});

const user = {
  username: 'user1',
  email: 'user1@email.com'
}

const defaultAccountSettings = {
  account_visible: true,
  lending_friend_only: true,
  location_visible: true,
  message_friend_only: true,
  view_library_friend_only: true
}

let insertedUserId;
let insertedAccountSettingsId;

const updatedAccountSettings = {
  account_visible: false,
  lending_friend_only: false
}

const someMoreAccountSettings = {
  account_visible: false,
  lending_friend_only: false,
  location_visible: true,
  message_friend_only: true,
  view_library_friend_only: true
}

describe('POST /api/accountSettings', () => {
  it("should do something", async () => {
    insertedUserId = await request(server).post('/api/users').send(user);
    insertedUserId = insertedUserId.body[0]; 
    let response = await request(server).post('/api/accountSettings').send({ user_id: insertedUserId });
    expect(response.status).toEqual(201);
    expect(response.body.length).toEqual(1);
    insertedAccountSettingsId = response.body[0];
  });
});

// /api/accountSettings
describe("GET /api/accountSettings/:id", () => {
  it("Return array with account settings", async () => {
    let response = await request(server).get(`/api/accountSettings/${insertedUserId}`);
    const object = {...defaultAccountSettings, id: insertedAccountSettingsId, user_id: insertedUserId};
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toEqual(1);
    expect((response.body)[0]).toEqual(object);
  });
});

describe("PUT /api/accountSettings/:id", () => {
  it("Update account settings for user by id", async () => {
    let response = await request(server).put(`/api/accountSettings/${insertedUserId}`).send(updatedAccountSettings);
    const object = {...someMoreAccountSettings, id: insertedAccountSettingsId, user_id: insertedUserId};
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(1);
    let getResponse = await request(server).get(`/api/accountSettings/${insertedUserId}`);
    expect((getResponse.body)[0]).toEqual(object);
  });
});
