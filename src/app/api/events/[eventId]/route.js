import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request,{params}) {
  try {
    const result =
      await sql `SELECT event.idevent,titre,places,prix,TO_CHAR(date, 'YYYY/MM/DD') AS date,location,nomville,titrecategorie,event.description, public_id AS imageId
                  FROM event
                  INNER JOIN ville ON event.idville = ville.idville
                  INNER JOIN categories ON event.idcategorie = categories.id
                  LEFT JOIN events_images ON events_images.idevent = event.idevent
                  WHERE event.idevent =  ${params.eventId};`;
    return NextResponse.json( result.rows , { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}