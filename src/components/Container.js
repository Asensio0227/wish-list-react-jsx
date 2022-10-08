import Wrapper from '../assets/Wrappers/Container';
import { useEffect, useState,useReducer } from 'react';
import List from './List';
import { toast } from 'react-toastify'
import {reducer} from '../utils/reducer'
import {
  getLocalStorage, removeUserFromLocalStorage
} from '../utils/LocalStorage'


const initialState = {
  list: getLocalStorage(),
  editID:null,
  isEditing: false
}

const Container = () => {
  const [name, setName] = useState('');
  const show = toast();
  const [state, dispatch]=useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && !state.isEditing) {
      const newList = { id: new Date().getTime().toString(), title: name };
      dispatch({ type: 'ADD_ITEMS', payload: newList });
      setName('');
      toast.success('Persistence makes all the difference. ...')
    }
    else if (name && state.isEditing) { 
      const newList = state.list.map((item) => {
      if (item.id === state.editID) {
        item.title = name;
      }
      return item;
    })
      dispatch({ type: 'ITEM_EDITED', payload: newList });
      setName('')
      toast.success('goal modified successfully')
    }
    else {
      toast('Please enter your goals')
    }
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(state.list));
  }, [state]);

  const removeItem = (id) => { 
    toast('Do not fear mistakes. ...');
    dispatch({ type: "REMOVE_ITEMS", payload: id });
    removeUserFromLocalStorage(id); 
  }
  
  const clearItems = () => {
    toast(`Only those who dare to fail greatly can ever achieve greatly. — ...`);
    dispatch({ type: 'CLEAR_ITEMS' });
  }

  const editItems = (id) => {
    // toast
        const newItem = state.list.find((item) => item.id === id);

    dispatch({ type: 'EDIT_ITEM', payload:id });
    setName(newItem.title)
  }

  return (
    <Wrapper className='section-center'>
     <div className='page'>
        <form
      
          onSubmit={handleSubmit}
        >
          <h2>
            wish List
          </h2>
          
          <div className="form-row">
            <input
              
              type='text'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              type='submit'
              className="submit-btn">
              {state.isEditing ? 'edit' : 'submit'}
            </button>
          </div>
        </form>
      </div>
      {
        state.list.length > 0 &&
        (<section className="container">
          {state.list.map((item) => {
            return <List
              key={item.id}
              {...item}
              removeItem={removeItem}
              editItems={editItems}
            />
          })}
        
          <button
            type='button'
            className="btn btn-hipster"
            onClick={clearItems}
          >
            clear
          </button>
        </section>)
      }
    </Wrapper>
  )
};

export default Container
