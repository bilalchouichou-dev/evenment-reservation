import { sql } from '@vercel/postgres';
import { getServerSession } from 'next-auth';
import bcrypt, { compare } from "bcrypt";
import { NextRequest, NextResponse } from 'next/server';
import { options } from '../../auth/[...nextauth]/options';
 
export async function PUT(request) {

    const session = await getServerSession(options);
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,32}$/;

    if(session.user.role=='user'){
        try {
            const {ancienMDP,nouveauMDP} = (await request.json());
            const result = await sql `SELECT password FROM users WHERE iduser=${session.user.id}`;
            const match = await bcrypt.compare(ancienMDP, result.rows[0].password);
            if(!match){
                return NextResponse.json( { message: 'votre ancien mot de passe et incorrect' }, { status: 400 });
            }
            
            if(!passwordRegex.test(nouveauMDP))
            {
                return NextResponse.json( { message: 'nouveau mot de passe ne respect pas la pattern' }, { status: 400 });
            }
            const hashedPassword = await bcrypt.hash(nouveauMDP, 10);
            await sql `UPDATE users SET password=${hashedPassword} WHERE iduser=${session.user.id}`;
    
            return NextResponse.json( { message: 'donnée changer avec succées' }, { status: 200 });
        } catch (error) {
            return NextResponse.json({ error }, { status: 500 });
        }
    }

}
