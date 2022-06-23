import Card from './Card'

export default function () {
  let cards = []
  for (let i = 0; i < 10; i++) {
    cards.push(<Card key={i} />)
  }
  return (
    <div className='grid pt-14  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full place-items-center'>
      {cards.map(card => card)}
    </div>
  )
}
