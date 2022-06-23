import './Card.css'

export default function Card () {
  return (
    <div className=' text-violet-500 w-[344px] sm:w-[400px] md:w-[344px] xl:w-[300px] box  mt-5 rounded animate-pulse'>
      <div className='p-1'>
        <img
          src='https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
          className='w-full'
        />
      </div>
      <div className='px-1 py-2 '>
        <div>Lorem ipsum color</div>
        <div />
      </div>
    </div>
  )
}
