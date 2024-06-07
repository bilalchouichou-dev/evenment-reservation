const bcrypt = require('bcrypt');
import { sql } from '@vercel/postgres';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { options } from '../../auth/[...nextauth]/options';
 
export async function GET(request) {

    const session = await getServerSession(options);
    if(session.user.role=='user'){
        try {
            const { searchParams } = new URL(request.url)
            const iduser = searchParams.get('iduser')
            console.log(iduser);
            const result = await sql `SELECT event.idevent,event.titre,TO_CHAR(event.date, 'YYYY/MM/DD') AS date,ville.nomville,users_event.nombre_ticket FROM users_event INNER JOIN event ON event.idevent = users_event.idevent INNER JOIN ville ON event.idville = ville.idville WHERE users_event.iduser = ${iduser}`;

            return NextResponse.json( result.rows, { status: 200 });
        } catch (error) {
            return NextResponse.json({ error }, { status: 500 });
        }
    }

}
