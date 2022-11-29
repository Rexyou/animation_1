import { AiOutlineClose } from "react-icons/ai";

const header = () => {

  const menuItem = "m-10 text-xl";

  return (
    <header className='absolute w-full h-screen bg-gradient-to-br from-blue-500 to-purple-400 text-white overflow-hidden'>
        <ul className='h-screen flex flex-col justify-center items-center'>
          <li className={ menuItem }><button>Sample</button></li>
          <li className={ menuItem }><button>Sample</button></li>
          <li className={ menuItem }><button>Sample</button></li>
        </ul>
        <div className="absolute text-3xl -right-14 -bottom-20 h-40 w-40 border-white border rounded-full">
          <span className="text-white absolute top-8 left-12">
            <AiOutlineClose />
          </span>
        </div>
    </header>
  )
}

export default header