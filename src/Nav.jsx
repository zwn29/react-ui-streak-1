import './Nav.css'

export default function Nav () {
  return (
    <div className='fixed  w-full bl-blur select-none  flex justify-between text-violet-500  box2 '>
      <div className=' mx-10 my-5  px-3 rounded'>
        <span className='cursor-pointer'>Home</span>
      </div>
      <div className='flex'>
        <div className='mx-10 my-5'>
          <span className='cursor-pointer'>About</span>
        </div>
        <div className='mx-10 my-5'>
          <span className='cursor-pointer'>login</span>
        </div>
      </div>
    </div>
  )
}
