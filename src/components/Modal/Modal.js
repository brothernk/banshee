import react from 'react';


const Modal = () => (
<section className='add-item'>
<form>
  <input type="text" name="name" placeholder="Young Bill" />
  <input type="text" name="email" placeholder="HadToBeYou@gmail.com" />
  <button>Submit</button>
</form>
</section>
)

export default Modal;