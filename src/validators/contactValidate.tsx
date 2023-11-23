export const validateName = (value) => {
  
    if (!value) return 'required field';
    if (value.length < 3) return 'name is too short';
  };
export const validateNumber = (value) => {
    if (!value) return 'required field';
    if (value.length != 10) return 'numbber is not valid';
    if (!isFinite(+value) ) return 'number should consist only numbers';
  };