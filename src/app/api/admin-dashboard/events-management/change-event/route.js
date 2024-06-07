const bcrypt = require('bcrypt');
import { sql } from '@vercel/postgres';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { options } from '@/app/api/auth/[...nextauth]/options';
 
export async function PUT(request) {

    const session = await getServerSession(options);

    if(session.user.role=='admin'){
        try {
            const { idevent,titre,places,prix,date,location,ville,categorie,description } = (await request.json());
            console.log('this is event' + idevent)
            
            if( !idevent || idevent == undefined)
            {
                return NextResponse.json( { message: 'informations non valide' }, { status: 400 });
            }
            await sql `UPDATE event SET titre=${titre}, places=${places}, prix=${prix}, date=${date}, location=${location}, idville=${ville}, idcategorie=${categorie}, description=${description} WHERE idevent=${idevent}`;
    
            return NextResponse.json( { message: 'donnée changer avec succées' }, { status: 200 });
        } catch (error) {
            return NextResponse.json({ error }, { status: 500 });
        }
    }

}
