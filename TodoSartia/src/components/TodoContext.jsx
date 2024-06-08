import { createContext, useState } from 'react';

const TodoContext = createContext();

// Custom hook to handle localStorage
function useLocalStorage(key, initialValue) {
    const storedValue = localStorage.getItem(key);
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;
  
    const [value, setValue] = useState(initial);
  
    const updateValue = (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
      setValue(newValue);
    };
  
    return [value, updateValue];
  }


const TodoProvider = ({ children }) => {
//   const [formData, setFormData] = useState([]);
const [formData, setFormData] = useLocalStorage('formData', []);

  return (
    <TodoContext.Provider value={{ formData, setFormData }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };