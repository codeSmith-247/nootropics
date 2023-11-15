
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bycrypt from "bcryptjs";

const prisma = new PrismaClient();

export const POST = async (request: NextRequest ) => {

    const data = await request.json();

    console.log(data);

    const { firstName, lastName, email, username, password, terms } = data;

    if( !firstName || !lastName || !email || !username || !password || !terms ) {
        return new NextResponse("Empty inputs, please check your inputs and try again", { status: 400 });
    }

    const exists = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if(exists) {
        return new NextResponse("User already exists, please login to use your account", { status: 400 });
    }

    const hash = await bycrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            firstName,
            lastName,
            email,
            username,
            password: hash,
        }
    })

    return NextResponse.json(user);
}