import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        let ville = searchParams.get('ville');
        let categorie = searchParams.get('categorie');
        let date = searchParams.get('date');
        let prix = searchParams.get('prix');
        let index = 0
        let conditions = [];

        if (date) {
            date = "\'" + date + "\'"
            conditions.push('event.date = ' + date);
            index++
        }
        if (prix) {
            conditions.push('event.prix = ' + prix);
            index++
        }
        if (ville) {
            ville = "\'" + ville + "\'"
            conditions.push('nomville = ' + ville);
            index++
        }
        if (categorie) {
            categorie = "\'" + categorie + "\'"
            conditions.push('titrecategorie = ' + categorie);
            index++
        }

        const conditionStm = conditions.length ? 'WHERE ' + conditions.join(' AND ') : '';

        const query = `
            SELECT event.idevent, event.titre, ville.nomville, TO_CHAR(event.date, 'YYYY/MM/DD') AS date, public_id AS imageId
            FROM event
            INNER JOIN ville ON ville.idville = event.idville
            INNER JOIN categories ON categories.id = event.idcategorie
            LEFT JOIN events_images ON events_images.idevent = event.idevent
            ${conditionStm}
        `;
        console.log(query)
        const result = await sql.query(query);

        return NextResponse.json(result.rows, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
