import React , {useState, useEffect} from "react";
import { isEmpty } from "lodash";

import "./BoardContent.scss";

import Column from "components/Column/Column";
import { mapOrder } from "utilities/sort";

import { initialData } from "actions/initialData";

function BoardContent() {

  const [board, setBoard] = useState({})
  const [columns, setColumns] = useState([])

  // run only once with []
  useEffect(() => {
    // query from db
    const boardFromDB = initialData.boards.find(board => board.id === 'board-1')
    if (boardFromDB){
      setBoard(boardFromDB);

      setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'));
    }
  }, [])

  if (isEmpty(board)){
    return <div className="not-found">
      Board not found
    </div>
  }

  return (
    <div className="board-content">
      {columns.map((column, index) => <Column key={index} column={column}/>)}
      
    </div>
  );
}

export default BoardContent;
