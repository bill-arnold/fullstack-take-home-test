import React, { createContext, useContext, useState } from 'react';

const ReadingListContext = createContext();

export const useReadingList = () => useContext(ReadingListContext);

export const ReadingListProvider = ({ children }) => {
  const [readingList, setReadingList] = useState([]);

  return (
    <ReadingListContext.Provider value={{ readingList, setReadingList }}>
      {children}
    </ReadingListContext.Provider>
  );
};
