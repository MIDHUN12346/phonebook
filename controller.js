import Model from "./model.js";

class Controller{
    constructor(){
        this.model=new Model();
    }
    getContacts(){
        return this.model.getContacts();
    }
    setContact (name,description,image){
        let isValid=true
    if(name.length<=0){
        isValid=false
        console.log("Name is required")
    }
    if(name.length>15){
        isValid=false
        console.log("Enter a valid Name")
    }
    if(description.length<=6){
        isValid=false
  console.log('Description must be larger')
    }
    if(image.length<0){
        isValid=false
        console.log("Enter a image link")
    }
if(isValid){
    let contact= {
        name:name,
        description:description,
        image:image
    }

  
    
    this.model.setContact(contact)
  
}

    }
    deleteContact (index){
      return this.model.deleteContact(index);
    }
}
export default Controller;