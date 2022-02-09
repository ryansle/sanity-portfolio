const Input = {
  variants: {
    dark: () => ({
      bg: 'white',
      field: {
        color: 'black',
        _placeholder: {
          color: 'gray',
          boxShadow: 'rgb(0 0 0 / 9%) 0px 2px 3px 0px inset',
        }
      }
    })
  }
};

export default Input;
