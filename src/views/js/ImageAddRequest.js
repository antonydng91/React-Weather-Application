
import {useDispatch} from 'react-redux';


export default function ImageAdditionRequest(){

    const dispatch = useDispatch();

    const onFormSubmit=(e)=>{
        const formData= new FormData(e);
        const finalData = Object.fromEntries(formData.entries());
        dispatch({action:"addImage",payload:finalData})
    }

 return(
 <>
<div className="container">
  <form  onSubmit={onFormSubmit}>
    <label htmlFor="imageName">Image  Name</label>
    <input type="text" id="imageName" name="name" placeholder=" name.."/>

    <label htmlFor="imageDescription">Image  Description</label>
    <input type="text" id="imageDescription" name="description" placeholder="Description"/>

    <label htmlFor="imageUrl">Image  Url</label>
    <input type="text" id="imageUrl" name="url" required placeholder="URL"/>
  
    <input type="submit" value="Submit"/>
  </form></div>
 </>)
}