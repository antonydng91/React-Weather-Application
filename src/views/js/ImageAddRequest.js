



export default function ImageAdditionRequest(){




    const onFormSubmit=(e)=>{

        const formData= new FormData(e);

       console.log(formData)

    }



    return(
    
    <>

  <form  onSubmit={onFormSubmit}>
    <label htmlFor="fname">First Name</label>
    <input type="text" id="fname" name="firstname" required placeholder="Your name.."/>

    <label htmlFor="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" required placeholder="Your last name.."/>

    <label htmlFor="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
  
    <input type="submit" value="Submit"/>
  </form>
 </>)


}