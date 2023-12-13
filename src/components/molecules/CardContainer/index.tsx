import * as S from './styles'
import { Trips } from '../../../mock/trips'
import {Card} from '../../atoms'

export const CardContainer = () => {
  const cardsToShow = Trips.slice(0, 8); 
  return (
    <S.Container>
      {cardsToShow.map((trip) => (
        <Card
          id={trip.id}
          key={trip.id}
          name={trip.name}
          image={trip.image}
          description={trip.description}
          value={trip.value}
          date={trip.date}
          category={trip.category}
        />
      ))}
    </S.Container>
  )
}