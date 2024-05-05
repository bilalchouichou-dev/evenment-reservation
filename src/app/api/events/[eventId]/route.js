import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request,{params}) {
  try {
    const result =
      await sql `SELECT idevent,titre,places,prix,date,location,nomville,titrecategorie,description
                  FROM event
                  INNER JOIN ville ON event.idville = ville.idville
                  INNER JOIN categories ON event.idcategorie = categories.id
                  WHERE idevent = ${params.eventId};`;
    return NextResponse.json( result.rows , { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}