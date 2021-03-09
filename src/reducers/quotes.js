export default (state = [], action) => {
  let i;
  let quote;

  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)

      case 'REMOVE_QUOTE':
        return state.filter(q => q.id !== action.quoteId)

        case 'UPVOTE_QUOTE':
          i = state.findIndex(q => q.id === action.quoteId)
          quote = state[i]
          return [...state.slice(0, i), Object.assign({}, quote, {votes: quote.votes += 1}), ...state.slice(i + 1)]
          // index = state.findIndex(quote => quote.id === action.quoteId);
          // quote = state[index];
    
          // return [
          //   ...state.slice(0, index),
          //   Object.assign({}, quote, { votes: quote.votes += 1 }),
          //   ...state.slice(index + 1)
          // ];
    
          case 'DOWNVOTE_QUOTE':
            i = state.findIndex(q => q.id === action.quoteId)
            quote = state[i]
            if (quote.votes > 0) {
              return [...state.slice(0, i), Object.assign({}, quote, {votes: quote.votes -= 1}), ...state.slice(i + 1)]
            }
              return state
            // index = state.findIndex(quote => quote.id === action.quoteId);
            // quote = state[index];
            // if (quote.votes > 0) {
            //   return [
            //     ...state.slice(0, index),
            //     Object.assign({}, quote, { votes: quote.votes -= 1 }),
            //     ...state.slice(index + 1)
            //   ];
            // }
            // return state;
    default:
      return state;
      
  }
  
}