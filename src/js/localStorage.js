export const loadState = () => {
    try{
        const serializedState = localStorage.getItem('productsState');
        if(serializedState===null)
            return undefined;
        return JSON.parse(serializedState);
    }catch (err){
        return undefined;
    }
};

export const saveState = (state) => {

  try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('productsState',serializedState);
  }catch(err){
      //Ignore or log error..
      console.log(err);
  }
};