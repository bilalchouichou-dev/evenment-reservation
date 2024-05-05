import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  try {
    const result =
      await sql `SELECT idevent,titre,nomville,TO_CHAR(date, 'YYYY/MM/DD') AS date FROM event INNER JOIN ville ON ville.idville = event.idville LIMIT 20;`;
    return NextResponse.json( result.rows , { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}