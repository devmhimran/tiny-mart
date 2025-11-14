export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <div className='text-center text-sm px-6 py-4 text-muted-foreground'>
        © {currentYear} / Tiny Mart
      </div>
    </div>
  );
}
