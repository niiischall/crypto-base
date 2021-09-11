import React from 'react';

//Page Values
export const pages = {
  home: 'home',
  search: 'search',
  profile: 'profile',
};

//Page context
const pageContext = React.createContext({
  page: '',
  switchPage: (event: any, value: string) => {},
});

//Page Provider
export const PageProvider = pageContext.Provider;

//Default pageContext Export
export default pageContext;
