import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {

  const { isOpen, onOpen, onClose } = useDisclosure()  // TODO MODAL USEDISCLOSURE

  // TODO SELECTED IMAGE URL STATE
  const [imgUrl, setImgUrl] = useState();

  // TODO FUNCTION HANDLE VIEW IMAGE

  const handlerViewImage = (url) => {
    setImgUrl(url);
    onOpen();
  }


  return (
    <>
      <SimpleGrid columns={3} spacing="40px">
        { cards.map(card => <Card key={card.id} data={card} viewImage={(url) => handlerViewImage(url)} />)}
      </SimpleGrid>

      { <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imgUrl} /> }
    </>
  );
}
