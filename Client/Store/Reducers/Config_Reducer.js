const initialState = {
    darkMode: false,
    Temperature: 0.5,
    Model: 'text-davinci-003',
  };
  const Config_Reducer = (state = initialState, action) => {
      switch (action.type) {
        case "TOGGLE_DARK_MODE":
            return {
                ...state,
                darkMode: !state.darkMode,
            }
        case "SET_TEMPERATURE":
            return {
                ...state,
                Temperature: action.payload,
            }
        case "SET_MODEL":
            return {
                ...state,
                Model: action.payload,
            }
        default:
            return state;
        }  
  };

  export default Config_Reducer;