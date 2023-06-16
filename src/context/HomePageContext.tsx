import { useState, createContext, ReactNode } from 'react';

interface contextTypes {
  menuOption: number;
  searchValue: string;
  changeMenuOption: (index: number) => void;
  setSearchValue: (index: string) => void;
}

const HomePageContext = createContext<null | object | contextTypes>({});

export const HomePageProvider = ({ children }: { children: ReactNode }) => {
  const [menuOption, setMenuOption] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>('');
  const changeMenuOption = (index: number) => setMenuOption(index);

  return (
    <HomePageContext.Provider
      value={{ menuOption, searchValue, changeMenuOption, setSearchValue }}
    >
      {children}
    </HomePageContext.Provider>
  );
};

export default HomePageContext;
