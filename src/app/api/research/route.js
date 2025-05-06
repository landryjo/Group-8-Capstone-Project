// /app/api/research/route.js
import { createConnection } from '@/lib/db.js';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = await createConnection();
    const sql = "SELECT * FROM projects ORDER BY project_id ASC";
    const [projects] = await db.query(sql);
    return NextResponse.json({ projects });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message });
  }
}