import { Todo } from "/components/Todo"
import { TallyCounter } from "../components/TallyCounter"
import { Random } from "@/components/Random"
export default function Home () {
  return (
    <div className="h-screen flex justify-center items-center bg-white" >
      <div className="h-full w-[400px] border border-gray-300 p-4">
        {/* /* <Todo bg='blue' border='green'> */}
        {/* <span>call dad</span>      */}
        {/* <span>14:20</span> */}
        {/* </Todo> */}
        {/* // <TallyCounter/> */ }
        <Random/>
      </div>
    </div>
  )
}