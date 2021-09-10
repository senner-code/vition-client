import React, {useState} from 'react';
import CategoryService from "../../../../services/category.service";

const CreateCategory = ({categories, updateCategories, board_id, select}) => {
  const [name, setName] = useState('')

  return (
    <div className='CreateWidget'>
      <input type="text"
             onChange={e => setName(e.target.value)}
             value={name}
             placeholder='Enter name widget'
      />
      <button onClick={() => {
        CategoryService.createCategory(board_id, name).then(category => {
          updateCategories([...categories, category])
        })
        setName('')
        select('')
      }}> Create Category
      </button>
    </div>
  );
};

export default CreateCategory;