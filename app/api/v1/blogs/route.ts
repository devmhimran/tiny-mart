import { prisma } from '@/prisma/db';
import { Prisma } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search') || '';
  const page = searchParams.get('page') || '1';
  const limit = searchParams.get('limit') || '100';

  const whereConditions: Prisma.BlogWhereInput[] = [];

  if (search) {
    whereConditions.push({
      OR: [{ blogTitle: { contains: search, mode: 'insensitive' } }],
    });
  }

  const where: Prisma.BlogWhereInput = whereConditions.length
    ? { AND: whereConditions }
    : {};

  try {
    const count = await prisma.blog.count({ where });
    const totalPages = Math.ceil(count / Number(limit));
    const blogs = await prisma.blog.findMany({
      where,
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(
      {
        data: blogs,
        meta: { count, totalPages, page: Number(page), limit: Number(limit) },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Blogs' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const result = await prisma.blog.create({
      data: {
        blogTitle: body.blogTitle,
        description: body.description,
        writerName: body.writerName,
      },
    });
    return NextResponse.json(
      { message: 'Blog created successfully', data: { id: result.id } },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    );
  }
}
