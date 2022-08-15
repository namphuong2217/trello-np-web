export const initialData = {
  boards: [
    {
      id: 'board-1',
      columnOrder: ['column-1', 'column-2', 'column-3'],
      columns: [
        {
          id: 'column-1',
          boardId: 'board-1',
          title: '1. To do column',
          cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7'],
          cards: [
            {
              id: 'card-1',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 1',
              cover: 'https://scontent-dus1-1.xx.fbcdn.net/v/t1.6435-9/56255551_2155376377863462_1743916211491569664_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH25T7sqU4Vl0B6NfQO75xrQBdRZXpYvnRAF1Fleli-dIRTaDzodd6Wp4jG3zaXb3QqWV-Do4AdvZy3Ykc9cyYI&_nc_ohc=Qtyfazn4nG0AX_INrZt&_nc_ht=scontent-dus1-1.xx&oh=00_AT8Tctfr7xduLvFFcewiYOcCRzi7fndv71BkdExgxSg3oQ&oe=6315BB73'
            },
            {
              id: 'card-2',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 2',
              cover: null
            },
            {
              id: 'card-3',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 3',
              cover: null
            },
            {
              id: 'card-4',
              boardId: 'board-2',
              columnId: 'column-2',
              title: 'Title of card 3',
              cover: null
            },
            {
              id: 'card-5',
              boardId: 'board-2',
              columnId: 'column-2',
              title: 'Title of card 5',
              cover: null
            },
            {
              id: 'card-6',
              boardId: 'board-2',
              columnId: 'column-2',
              title: 'Title of card 6',
              cover: null
            },
            {
              id: 'card-7',
              boardId: 'board-2',
              columnId: 'column-2',
              title: 'Title of card 7',
              cover: null
            }
          ]
        },
        {
          id: 'column-2',
          boardId: 'board-1',
          title: '2. In progress column',
          cardOrder: ['card-8', 'card-9', 'card-10'],
          cards: [
            {
              id: 'card-8',
              boardId: 'board-1',
              columnId: 'column-2',
              title: 'Title of card 8',
              cover: null
            },
            {
              id: 'card-9',
              boardId: 'board-1',
              columnId: 'column-2',
              title: 'Title of card 9',
              cover: null
            },
            {
              id: 'card-10',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 10',
              cover: null
            }
          ]
        },
        {
          id: 'column-3',
          boardId: 'board-1',
          title: '3. Done column',
          cardOrder: ['card-11', 'card-12', 'card-12'],
          cards: [
            {
              id: 'card-11',
              boardId: 'board-1',
              columnId: 'column-3',
              title: 'Title of card 11',
              cover: null
            },
            {
              id: 'card-12',
              boardId: 'board-1',
              columnId: 'column-3',
              title: 'Title of card 12',
              cover: null
            },
            {
              id: 'card-13',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 13',
              cover: null
            }
          ]
        }
      ]
    }
  ]
}