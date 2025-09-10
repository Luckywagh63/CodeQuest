"use server";

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export async function POST(req) {
  const { teamName, player1Name, player1Email, player2Name, player2Email, year } = await req.json();

  try {
    const client = await clientPromise;
    const db = client.db("hackathon");
    const teamsCollection = db.collection("teams");

    const existing = await teamsCollection.findOne({
      $or: [{ player1Email }, { player2Email }]
    });

    if (existing) {
      return new Response(JSON.stringify({ error: "One of the emails is already registered!" }), { status: 400 });
    }

    const result = await teamsCollection.insertOne({
      teamName,
      player1Name,
      player1Email,
      player2Name,
      player2Email,
      year
    });

    return new Response(JSON.stringify({ message: "Team registered successfully!", id: result.insertedId }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("hackathon");
    const teamsCollection = db.collection("teams");
    const teams = await teamsCollection.find({}).toArray();

    return new Response(JSON.stringify({ teams }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
