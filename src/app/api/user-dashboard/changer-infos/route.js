const bcrypt = require('bcrypt');
import { sql } from '@vercel/postgres';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { options } from '../../auth/[...nextauth]/options';
 
export async function PUT(request) {

    const session = await getServerSession(options);

    if(session.user.role=='user'){
        try {
            const { prenom,nom,username } = (await request.json());
            console.log(prenom + "   " + nom + "    "+username )
            
            if( !namesRegex.test(prenom) || !namesRegex.test(nom) || !usernameRegex.test(username))
            {
                return NextResponse.json( { message: 'informations non valide' }, { status: 400 });
            }
            await sql `UPDATE users SET prenom=${prenom}, nom=${nom}, username=${username} WHERE iduser=${session.user.id}`;
    
            return NextResponse.json( { message: 'donnée changer avec succées' }, { status: 200 });
        } catch (error) {
            return NextResponse.json({ error }, { status: 500 });
        }
    }

}
