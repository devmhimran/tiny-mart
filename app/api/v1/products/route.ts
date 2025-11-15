import { prisma } from '@/prisma/db';
import { Prisma } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search') || '';
  const page = searchParams.get('page') || '1';
  const limit = searchParams.get('limit') || '100';

  console.log({ search, page, limit, searchParams });

  const whereConditions: Prisma.ProductWhereInput[] = [];

  if (search) {
    whereConditions.push({
      OR: [{ productName: { contains: search, mode: 'insensitive' } }],
    });
  }

  const where: Prisma.ProductWhereInput = whereConditions.length
    ? { AND: whereConditions }
    : {};

  try {
    const count = await prisma.product.count({ where });
    const totalPages = Math.ceil(count / Number(limit));
    const products = await prisma.product.findMany({
      where,
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
    });

    return NextResponse.json(
      {
        data: products,
        meta: { count, totalPages, page: Number(page), limit: Number(limit) },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
