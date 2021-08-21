import React, { useEffect, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { Card } from '../components/Card';
import { Fab } from '../components/Fab';
import { ReqResListado, Usuario } from '../interfaces/reqRes';
import { ModalAdd } from './ModalAdd';

export const ContactListScreen = () => {

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false)

    useEffect(() => {
        // llamado al API
        cargarUsuarios();
    }, [])


    const cargarUsuarios = async() => {
        
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: 1
            }
        })

        if( resp.data.data.length > 0 ){ 
            setUsuarios( resp.data.data );
        } else {
            alert('No hay registros');
        }

    }

    return (
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-5 mt-5">
          {
            usuarios.map(({id, avatar, first_name, last_name, email}) => (
              <Card
                id={id}
                avatar={avatar}
                first_name={first_name}
                last_name={last_name}
                email={email}
                fun={setModal}
                edit={setEdit}
              />
            ))
          }
        </div>
        <Fab 
          fun={setModal}
          edit={setEdit}
        />
        <ModalAdd 
          open={modal}
          fun={setModal}
          edit={edit}
          usuarios={usuarios}
          setUsuarios={setUsuarios}
        />
      </div>
    )
}
