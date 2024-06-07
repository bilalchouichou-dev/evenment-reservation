import { sql } from '@vercel/postgres';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { options } from '@/app/api/auth/[...nextauth]/options';
 
export async function DELETE(request) {

    const session = await getServerSession(options);
    if(session.user.role=='admin'){
        try {
            const {idEvent} = await request.json()
            const result = await sql `DELETE FROM event WHERE idevent=${idEvent}`;
            return NextResponse.json( result.rows, { status: 200 });
        } catch (error) {
            return NextResponse.json({ error }, { status: 500 });
        }
    }

}
