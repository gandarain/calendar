import React, { useContext } from "react";
import Image from 'next/image'

import plusImg from '../assets/plus.svg'
import GlobalContext from '../context/GlobalContext'

const CreateEventButton = () => {
  const { setShowEventModal } = useContext(GlobalContext);
  
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
      <Image
        src={plusImg}
        alt="create_event"
        className="w-7 h-7"
      />
      <span className="pl-3 pr-7"> Create</span>
    </button>
  );
}

export default CreateEventButton