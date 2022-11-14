import { createContext, ReactNode, useContext, useState } from "react";
import { Bag } from "../components/bag";

interface MainProviderProps {
  children: ReactNode;
}

interface BagItem {
  id: number;
  amount: number;
}

interface MainContext {
  openBag: () => void;
  closeBag: () => void;
  bagTotalAmount: number;
  bagItems: BagItem[];
  isOpen: Boolean;
  getItemAmount: (id: number) => number;
  increaseBagAmount: (id: number) => void;
  decreaseBagAmount: (id: number) => void;
  removeFromBag: (id: number) => void;
}

const MainContext = createContext({} as MainContext);

export function useMainContext() {
  return useContext(MainContext);
}

export function MainProvider({ children }: MainProviderProps) {
  const [bagItems, setBagItems] = useState<BagItem[]>([]);
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  function getItemAmount(id: number) {
    return bagItems.find((item) => item.id === id)?.amount || 0;
  }

  const openBag = () => setIsOpen(true);

  const closeBag = () => setIsOpen(false);

  const bagTotalAmount = bagItems.reduce(
    (amount, item) => amount + item.amount,
    0
  );

  function increaseBagAmount(id: number) {
    setBagItems((currentItems) => {
      if (!currentItems.find((item) => item.id === id))
        return [...currentItems, { id, amount: 1 }];
      else
        return currentItems.map((item) => {
          if (item.id === id) return { ...item, amount: item.amount + 1 };
          else return { ...item };
        });
    });
  }

  function decreaseBagAmount(id: number) {
    setBagItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.amount === 1)
        return currentItems.filter((item) => item.id !== id);
      else
        return currentItems.map((item) => {
          if (item.id === id) return { ...item, amount: item.amount - 1 };
          else return { ...item };
        });
    });
  }

  function removeFromBag(id: number) {
    setBagItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  return (
    <MainContext.Provider
      value={{
        openBag,
        closeBag,
        bagTotalAmount,
        bagItems,
        isOpen,
        getItemAmount,
        increaseBagAmount,
        decreaseBagAmount,
        removeFromBag,
      }}
    >
      {children}
      <Bag />
    </MainContext.Provider>
  );
}
