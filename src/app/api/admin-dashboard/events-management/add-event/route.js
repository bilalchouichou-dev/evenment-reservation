const bcrypt = require('bcrypt');
import { sql } from '@vercel/postgres';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { options } from '@/app/api/auth/[...nextauth]/options';
 
export async function POST(request) {

    const session = await getServerSession(options);

    if(session.user.role=='admin'){
        try {
            const { titre,places,prix,date,location,ville,categorie,description } = (await request.json());
            
            await sql `INSERT INTO event (titre, places, prix, date, location, idville, idcategorie, description) VALUES (${titre}, ${places}, ${prix}, ${date}, ${location}, ${ville}, ${categorie}, ${description})`;
    
            return NextResponse.json( { message: 'évènement ajouté avec succées' }, { status: 200 });
        } catch (error) {
            return NextResponse.json({ error }, { status: 500 });
        }
    }

}
