import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';
 
export async function POST(request) {
  const fieldsValidation = () => {}
  try {
    const { firstNameVal,lastNameVal,usernameVal, passwordVal } = (await request.json());
    console.log(firstNameVal + "   " + lastNameVal + "    "+usernameVal + "   " + passwordVal)
    const existingUser = await sql `SELECT * FROM users WHERE username = ${usernameVal}`;
    console.log("passed")
     if (existingUser.rows.length > 0) {
       return res.status(400).json({ message: 'username already exists' });
     }
     //await sql `INSERT INTO users (prenom,nom,username, password) VALUES ( ${firstNameVal},${lastNameVal} ${usernameVal}, ${passwordVal})`;

    return NextResponse.json( { message: 'Signup successful, you can now login with your account' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
