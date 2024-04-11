import {createContext, useContext, useState} from 'react';
import posts from "../json/posts.json";

const SearchContext = createContext();
const ModalContext = createContext();
export const JsonContext = ({ children }) => {
  const [modal, setModal] = useState({
    prompt: "",
    isOpen: false,
    proceed: null,
    cancel: null,
    type: "alert"
  });


  const state = {
    posts,
  };
  return (
    <>
    <SearchContext.Provider value={state}>
      <ModalContext.Provider value={[modal, setModal]}>
        {children}
      </ModalContext.Provider>
    </SearchContext.Provider>

    </>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
export const useModalContext = () => {
  return useContext(ModalContext);
}
