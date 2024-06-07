import { sql } from '@vercel/postgres';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { options } from '@/app/api/auth/[...nextauth]/options';
 
export async function GET(request) {

    const session = await getServerSession(options);
    if(session.user.role=='admin'){
        try {
            const result = await sql `SELECT event.idevent,titre,nomville,TO_CHAR(date, 'YYYY-MM-DD') AS date,places,prix,description,categories.titrecategorie,location FROM event INNER JOIN ville ON ville.idville = event.idville INNER JOIN categories ON event.idcategorie=categories.id ORDER BY titre LIMIT 1000`;
            return NextResponse.json( result.rows, { status: 200 });
        } catch (error) {
            return NextResponse.json({ error }, { status: 500 });
        }
    }

}
