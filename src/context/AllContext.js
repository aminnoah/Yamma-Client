import React from 'react';
import EventContext from './EventContext';
import UserContext from './UserContext';

const AllContext = React.createContext({
  eventContext: {},
  userContext: {},
});
export default AllContext;

// This is a reusable piece that could be used by any component that requires both contexts.
export const AllContextProvider = (props) => {
  return (
    <EventContext.Consumer>
      {(eventContext) => (
        <UserContext.Consumer>
          {(userContext) => {
            return (
              <AllContext.Provider value={{ eventContext, userContext }}>
                {props.children}
              </AllContext.Provider>
            );
          }}
        </UserContext.Consumer>
      )}
    </EventContext.Consumer>
  );
};
