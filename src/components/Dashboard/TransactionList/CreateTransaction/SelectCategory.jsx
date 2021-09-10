import React, {useEffect,useState} from 'react';
import CategoryService from "../../../../services/category.service";
import CreateCategory from "./CreateCategory";

const SelectCategory = ({selected,board_id, select}) => {

  const [categories, setCategories] = useState([])


  useEffect(() => {
   CategoryService.getCategories(board_id).then(result => {
     setCategories(result)
   })
  },[])

  return (
    selected !=='New' ?
      <select defaultValue={'default'} onChange={(e) => {
      select(e.target.value)
    }}>
      <option value="default" disabled hidden>Choose Category</option>
      {categories.map((category,index) => {
        return <option key={index} value={category.id}>{category.name}</option>
      })}
        <option value={'New'}>Create new</option>
    </select> :
      <CreateCategory board_id={board_id} categories={categories}  updateCategories={setCategories} select={select}/>
  );
};

export default SelectCategory;