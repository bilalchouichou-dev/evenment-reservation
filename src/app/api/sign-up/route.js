const bcrypt = require('bcrypt');
import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';
 
export async function POST(request) {

  const namesRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{1,40}$/
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{7,32}$/
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,32}$/;

  try {
    const { firstNameVal,lastNameVal,usernameVal, passwordVal } = (await request.json());
    console.log(firstNameVal + "   " + lastNameVal + "    "+usernameVal + "   " + passwordVal)
    const existingUser = await sql `SELECT * FROM users WHERE username = ${usernameVal}`;
    console.log("passed")
     if (existingUser.rows.length > 0) {
      return NextResponse.json( { message: 'username already exists' }, { status: 400 });
     }
     if( !namesRegex.test(firstNameVal) || !namesRegex.test(lastNameVal) || !usernameRegex.test(usernameVal) || !passwordRegex.test(passwordVal))
     {
        return NextResponse.json( { message: 'données erronée' }, { status: 400 });
     }
     const hashedPassword = await bcrypt.hash(passwordVal, 10);
     await sql `INSERT INTO users (prenom,nom,username, password, role) VALUES ( ${firstNameVal},${lastNameVal},${usernameVal},${hashedPassword},'user')`;

    return NextResponse.json( { message: 'Signup successful, you can now login with your account' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
