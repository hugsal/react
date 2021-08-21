import React from 'react'

export const ContactDetailScreen = () => {
    return (
      <div className="container">
        <div className="card mb-3 mt-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://reqres.in/img/faces/12-image.jpg" alt="..." height="250"/>
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <h5 className="card-title">Hugo Salazar</h5>
                <p className="card-text">email: hugs.salazar@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
