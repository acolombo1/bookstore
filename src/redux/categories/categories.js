const CHK_STATUS = 'CHK_STATUS';

export function checkStatus() {
  return { type: CHK_STATUS };
}

const catReducer = (state = [], action) => {
  switch (action.type) {
    case CHK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default catReducer;
