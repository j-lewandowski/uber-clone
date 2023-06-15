import { ReactNode, useState } from 'react';

interface Props {
  text: string;
  image: ReactNode;
  menuOption: number;
  index: number;
  changeMenuOption: React.Dispatch<React.SetStateAction<number>>;
}

function HeaderItem({
  text,
  image,
  menuOption,
  index,
  changeMenuOption,
}: Props) {
  return (
    <div
      className={`flex text-2xl items-center space-x-1 hover:cursor-pointer px-2 relative ${
        menuOption === index ? 'text-black' : 'text-gray-500'
      }`}
      onClick={() => changeMenuOption(index)}
    >
      <i>{image}</i>
      <p>{text}</p>
      <div
        className={`w-full h-[3px] bg-black absolute -bottom-2 rounded-3xl left-0 ${
          menuOption !== index && 'hidden'
        }`}
      />
    </div>
  );
}

export default HeaderItem;
