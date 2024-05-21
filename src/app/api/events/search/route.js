import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';
 
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('search')
    console.log(title);
    const result =
      await sql `SELECT event.idevent, event.titre, ville.nomville, TO_CHAR(event.date, 'YYYY/MM/DD') AS date 
                FROM event 
                INNER JOIN ville ON ville.idville = event.idville 
                WHERE titre ILIKE '%' || ${title} || '%' `;
    return NextResponse.json( result.rows , { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}