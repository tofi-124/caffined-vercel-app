export default function CheckoutLoading() {
  return (
    <main className='bg-stone-50 min-h-screen'>
      <div className='container mx-auto py-16 px-4 max-w-4xl'>
        <div className='animate-pulse space-y-6'>
          <div className='h-8 w-40 bg-gray-200 rounded' />
          <div className='h-64 bg-gray-200 rounded-2xl' />
          <div className='h-48 bg-gray-200 rounded-2xl' />
        </div>
      </div>
    </main>
  )
}
