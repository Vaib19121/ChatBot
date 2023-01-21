export function toggle_dark_mode(){
  return {
    type: 'TOGGLE_DARK_MODE',
  };
};

export function set_temperature(temp){
    return {
        type: 'SET_TEMPERATURE',
        payload: temp
    }
}

export function set_model(model){
    return {
        type: 'SET_MODEL',
        payload: model
    }
}