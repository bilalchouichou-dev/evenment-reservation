import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  try {
    const result =
      await sql `SELECT event.idevent,titre,nomville,TO_CHAR(date, 'YYYY/MM/DD') AS date,public_id AS imageId FROM event INNER JOIN ville ON ville.idville = event.idville  LEFT JOIN events_images ON events_images.idevent = event.idevent   LIMIT 26;`;
    console.log(result.rows)
    return NextResponse.json( result.rows , { status: 200 });    c
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}