import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Wrapper from '../assets/Wrappers/list';
import {toast} from 'react-toastify'

const List = ({ id, title, removeItem,editItems }) => {
  const [check, setCheck] = useState(true);

  const handleCheck = (e) => {
    setCheck(e.target.checked)
    setTimeout(() => {
      removeItem(id)
    }, 3000);
    toast.success('Well done on reaching your goal....')
  };

  return (
    <Wrapper>
      <article className='items'>
        <div>
          <input
            type="checkbox"
            name="check"
            id="check"
            className="check-btn"
            onClick={handleCheck}
          />
          <p className="title">{title}</p>
        </div>
        <div className="btn-container">
          <button
            type='button'
            onClick={() => removeItem(id)}
            className="delete-btn"
          >
            <FaTrash />
          </button>
          <button
            type='button'
            className="edit-btn"
            onClick={()=> editItems(id)}
          >
            <FaEdit />
          </button>
        </div>
      </article>
    </Wrapper>
  )
};

export default List