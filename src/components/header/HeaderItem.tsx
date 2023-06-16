import { ReactNode, useContext } from 'react';
import HomePageContext from '../../context/HomePageContext';

interface Props {
  text: string;
  image: ReactNode;
  index: number;
}

interface contextTypes {
  menuOption: number;
  changeMenuOption: (index: number) => void;
}

function HeaderItem({ text, image, index }: Props) {
  const { menuOption, changeMenuOption } = useContext(
    HomePageContext
  ) as contextTypes;

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
