import { NextResponse } from 'next/server';
import User from '../../assets/models/user'

export async function GET(req, res) {
  try {
    const users = await User.findAll();
    return new NextResponse(JSON.stringify(users));
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
