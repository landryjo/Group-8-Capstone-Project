// /app/api/publications/route.js
import { createConnection } from '@/lib/db.js';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const db = await createConnection();
        const sql = "SELECT * FROM publications ORDER BY pyear ASC";
        const [publications] = await db.query(sql);
        return NextResponse.json({ publications });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message });
    }
}