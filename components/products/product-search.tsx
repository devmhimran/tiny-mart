'use client';

import { useState } from 'react';
import { Search, X } from 'lucide-react';

import { Input } from '../ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export function ProductSearch({
  search,
  params,
  setParams,
}: {
  search: (value: string) => void;
  params: { search: string; page: string };
  setParams: React.Dispatch<
    React.SetStateAction<{ search: string; page: string }>
  >;
}) {
  const [searchQuery, setSearchQuery] = useState(params.search);
  return (
    <Card className='w-full shadow-none'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2 text-xl'>
          Search
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-3'>
          <div>
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
              <Input
                placeholder='Search products by title'
                value={searchQuery}
                onChange={(e) => {
                  search(e.target.value);
                  setSearchQuery(e.target.value);
                }}
                className='pl-10 h-11'
              />
            </div>
          </div>

          <div className='flex flex-wrap gap-2'>
            {params.search && (
              <div className='pl-3 pr-2 py-1 border flex gap-2 items-center rounded-full text-sm'>
                {params.search}
                <span
                  onClick={() => {
                    setParams((prev) => ({
                      ...prev,
                      search: '',
                    }));
                    setSearchQuery('');
                  }}
                >
                  <X className='w-4 h-4 cursor-pointer' />
                </span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
