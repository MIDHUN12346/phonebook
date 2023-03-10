import Controller from "./controller.js"

const controller= new Controller();
const form=document.getElementById('form')
const name= document.getElementById('name')
const description= document.getElementById('description')
const image= document.getElementById('image')
const rootDiv= document.getElementById('root')


form.addEventListener('submit',(e)=>{
    e.preventDefault()
 controller.setContact(name.value,description.value,image.value)
 render();
})


function render(){
   const contacts= controller.getContacts()
   console.log(contacts);
    rootDiv.innerHTML=''
    for(i=0;i<contacts.length;i++){

      const contact=document.createElement('div')  
      contact.classList.add("contact")
      
      //  const edit= document.createElement('button')
      //  contact.classList.add('edit')
      //  edit.innerHTML="Edit"
      
      //  edit.addEventListener('click',function(){
      //   controller.setContact(name.value,description.value,image.value),this.contentEditable=true
      //  })
      


      const contactDetails= document.createElement('div')
      contactDetails.classList.add('contact-details')

      console.log(contacts[i])
      const img= document.createElement("img")
      img.src=contacts[i].image
      contact.appendChild(img)


      const heading = document.createElement('h3')
      heading.innerHTML=contacts[i].name
      contactDetails.appendChild(heading)

      const p= document.createElement('p')
      p.innerHTML=contacts[i].description
      contactDetails.appendChild(p)

      const delbtn= document.createElement('button')
     delbtn.innerHTML="delete"
     delbtn.id=i
      
       delbtn.addEventListener('click',(e)=>{
        controller.deleteContact(Number(delbtn.id))
        render()
        
       })
       contactDetails.append(delbtn)
      //  contactDetails.append(edit)
      contact.append(contactDetails)
      rootDiv.append(contact)
    }
}
render();
