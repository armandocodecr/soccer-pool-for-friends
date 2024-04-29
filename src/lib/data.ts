import { sql } from '@vercel/postgres';

export async function fetchTeams() {
    try {
      const data = await sql`SELECT * FROM equipos`;

      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch teams data.');
    }
  }