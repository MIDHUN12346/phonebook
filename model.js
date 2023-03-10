class Model{
    constructor(){
        this.contacts=[]

    }

getContacts(){
    return this.contacts;
  }
  setContact(contact){
    this.contacts.push(contact)
  } 
  deleteContact(index){
    this.contacts= this.contacts.filter((contact,i)=>{
      if(i!==index){
        return contact;
      }
    })
  }
         
      
}
export default Model;