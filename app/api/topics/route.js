import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { connect } from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {title, description} = await request.json();

    await connectMongoDB();

    await Topic.create({title, description});
    
    return NextResponse.json({message: "Topic created"}, {status: 201});
}