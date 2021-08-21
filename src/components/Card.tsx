import React from 'react';
import { Link } from 'react-router-dom';

interface Props{
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  fun: React.Dispatch<React.SetStateAction<boolean>>
  edit: React.Dispatch<React.SetStateAction<boolean>>
}

export const Card = ({id, avatar, first_name,  last_name,  email, fun, edit}: Props) => {

    const handleEdit = () => {
      fun(true);
      edit(true);
    }
    return (
        <div className="col" key={id}>
          <div className="card">
            <Link to={ `./detail/${ id }` }>
              <img src={avatar} className="card-img-top" alt="..." height="200"/>
            </Link>
            <div className="card-body">
              <h5 className="card-title">{first_name + ' ' + last_name}</h5>
              <p className="card-text">{email}</p>
            </div>
            <div className="row align-items-start">
              <div className="col">
                <button 
                  className="btn"
                  onClick={handleEdit}
                >
                  <i className="fa fa-pencil"></i>
                </button>
                <button className="btn">
                  <i className="fa fa-close"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}
