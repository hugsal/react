import React from 'react'
import Modal from 'react-modal';
import { validateString } from '../helpers/stringValidate';
import { useForm } from '../hooks/useForm';
import { Usuario } from '../interfaces/reqRes';

interface Props {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  avatar?: string;
  open: boolean;
  fun: React.Dispatch<React.SetStateAction<boolean>>;
  edit: boolean;
  usuarios: Usuario[]
  setUsuarios: React.Dispatch<React.SetStateAction<Usuario[]>>
}

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');

export const ModalAdd = ({open, fun, edit, usuarios,setUsuarios,}: Props) => {

  const initValues = {
    id:15,
    first_name: '',
    last_name: '',
    email: '',
    avatar: ''
  }

  const { formulario, onChange, init } = useForm(initValues);

  let {first_name, last_name, email, avatar} = formulario;
  
  const closeModal = () => {
    fun(false);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (validateString(formulario.first_name)) {
      alert('First Name not valid');
      return
    }
    if (validateString(formulario.last_name)) {
      alert('Last Name not valid');
      return
    }
    if (!emailRegex.test(formulario.email)) {
      alert('email not valid');
      return
    }
    console.log(formulario);
    usuarios.push(formulario);
    setUsuarios(usuarios);
    fun(false);
    init(initValues);
  }

    return (
      <Modal
        isOpen={ open }
        onRequestClose={ closeModal }
        style={ customStyles }
        closeTimeoutMS={ 200 }
        className="modal"
        overlayClassName="modal-fondo"
      >
        <h1>{edit ? 'Edit Contact' : 'Add contact'}</h1>
        <hr />

        <form onSubmit={handleSubmit}>
        <div className="form-row mt-2 ml-2 mr-2">
            <div className="form-group col">
                <img src={ avatar ? avatar : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAYFBMVEVmZmb///9VVVVeXl5iYmJaWlpcXFzR0dFTU1NXV1dwcHD8/PysrKzf39/GxsZsbGzt7e2Ojo719fXn5+d+fn6VlZWlpaWEhITAwMDU1NS4uLjc3NyLi4udnZ1vb293d3f9txsgAAAEZUlEQVR4nO2b7ZqiMAyFsR9gAUFE1EFnvf+7XF1SZFxHKXa07Zz378g8CUlPQptGEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+DMFjqdgJJWMu3m2Nbbjize6jXs1OrOqPXcMlf7dN9hCybOvZFXVbyjDiKFizuPauY9GwAFxU1fK2e2eWlXq3fU/Cy2+i10ex9Hotss19985s2LutnI5MBo5kSV6lnDGeVnmSDf6QyHfbOREhBquv2M776neqiPNtMViJwkutEWLVBy+X8ZUPIpZ5H8aVlx5e/Nvxm0LC+e7i4autex6p83O1/naNybUO4tK7dci0viyuk3OIkLqKJJ5pKd+MNLx/ERu/6mGp/Zs/+uVce1i+wi5bKMq8xYjEY/q3HnVtoiJ9icf8Oia5rfyRUkYKuh5lsliTknqjM6Kh+jdS+yXVw8aXEJL2Z6N1kXflcO9LMSQJzcc7mHslpLztzDWIh+yeaP2ohbLbfylGSWhH3H1b1H7kKO/CsTWQDLHtnvEigqSh2cMeZsg880dH6SMoMcjQU44m9GH1U1ZZJP4w1NAzpKMfRm/lTZDGmDVe1Nx5oTKqay1Ts6fSrnn1oeFmkwSRpNeHdpRNMnXaU2/htzgYbooGLzLBl4ngC33wrVrwzXbwn0uRCv6DN/Qti+A3nSZvGy78yNBfsPEb/NZ9f/iSjQqhpGNejw5fgj8+C/8ANPwj7MEQwr2hSX+HEAZjJFmYYyThDwKFP8oV/DBeFPw4ZRT+QOyIkea93yPNkVDx/p5/i9TrwXvBqrvunVlulK8xFKy5c6PgQpYrL6Mo1//ddvnWxU//hEbExVcn6iKvjuX5clZ5POTFlfbUqWd5Kg/DSrfabaXklytnQnCp1l/vM+VGG8Xvhu0Gphdrdus6neCqbAevYeHPnTsRXxIwy/mdoW2uBjqUpZ54KMq+y561j2rASWovv956sRBF2hu8FyMsFqrtH2g8OD4b+NeM3EaK//R52jgfQ6G3m2bLaPSSEqqvKQfXPeR6RT3eTxui+s+Oo9tKozc5Z61hbxI3WkudDqE+ZZjlxru4fKvrocMVXxz66mD+MNcxNBtfeCkxNSbTNjljvQ4NR2xehyQtrCcmmdbS2tFvCz1JMJusg3Oqh59uKqk+FXziGOwPKamTB036XDd5wrq4dVhndACfso0m+VwMoT7Vfe7l6zTYuLcK5d7Ku6c8cPC83ng45jY6hOPmF16IPgp7+pxBdc1C4ZrMkDqYDKjdhgbBzIYVX8DR3sdO959MhhVfAL33lQVtoBEUxwbz6IjFhlX0rhwbXJt3eXWwkFd6ssspB60apRwsFOLTYlpRy+BUM0NV0E7x4oV7lZBuBdj5CBAO3qGgiSw7A5G0s+PUhDr1MUc7/61rGpy6x0QNpKWJSOrbXXLQ7u0/B+8SBu9gxP7h5n8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfh1/AXbGJ8hh8WY7AAAAAElFTkSuQmCC" } className="mx-auto d-block rounded-circle" alt="..." height="230" width="230"/>
            </div>
          </div>
          <div className="form-row mt-2 ml-2 mr-2">
            <div className="form-group col">
                <label htmlFor="first_name">First name:</label>
                <input value={first_name} type="text" className="form-control" placeholder="First name" autoComplete = "off" required
                onChange={ ({ target }) => onChange( target.value, 'first_name') }/> 
            </div>
            <div className="form-group col">
                <label htmlFor="last_name">Last name:</label>
                <input value={last_name} type="text" className="form-control" placeholder="Last name" autoComplete = "off" required onChange={ ({ target }) => onChange( target.value, 'last_name') }/>
            </div>
            <div className="form-group col">
                <label htmlFor="email">Email:</label>
                <input value={email} type="text" className="form-control" placeholder="email@mail.com" autoComplete = "off" required onChange={ ({ target }) => onChange( target.value, 'email') }/>
            </div>
            <div className="form-group col">
                <label htmlFor="avatar">Foto:</label>
                <input value={avatar} type="text" className="form-control" placeholder="Foto (url)" autoComplete = "off" required onChange={ ({ target }) => onChange( target.value, 'avatar') }/>
            </div>
            <div>
              <button type="submit" className="btn btn-primary mt-3">
                  Save
              </button>
            </div>
          </div>
        </form>
      </Modal>
    )
}
