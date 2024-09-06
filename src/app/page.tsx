import Image from "next/image";
import Board from "./containers/Board";
import Square from './components/Square';
export default function Home() {
  return (
    <div><main >
      <head>
      tic tac toe        
      </head>
     
      <Board />
    </main>
    </div>
  );
}
