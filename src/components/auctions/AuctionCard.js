import React, { useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useFirestore } from "../../hooks/useFirestore";

export const AuctionCard = ({ item }) => {
 
   const { currentUser, bidAuction} = useContext(AuthContext);  

  const { docs } = useFirestore("auctions");

    let payed = 0;
  /*   let seconds */
    let completed

    docs.map((el) => {
      el.id === item.id && (payed = el.curPrice);
    /*   el.id === item.id && (seconds = el.createdAt.seconds.toString()); */
      el.id === item.id && (completed = el.completed);
    });

  /*   let date = new Date(seconds*1000); */

    return (
      <div className="col mb-4">
        <div className="card shadow-sm">
           <div
            style={{
              height: '180px',
              backgroundImage: `url(${item.imgUrl})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="w-100 mt-4"
          /> 
  
          <div className="card-body p-4">
            <p className="h4"><span className="text-secondary">Nombre </span>{item.nombre}</p>
            <div className="d-flex jsutify-content-between align-item-center">
              <h5>
              <span className="text-secondary">Para: </span> {item.para}
              </h5>
            </div>
            <div>
              <p>{ /* date.slice(0, -38) */ }</p>
            </div>
            <h5 className="card-text"> Marca: {item.marca}</h5>

            <h5 className="card-text"> Talla: {item.talla}</h5>
            <h5 className="card-text"> Color: {item.color}</h5>
            <h5 className="card-text"> Tela: {item.tela}</h5>
            <h5 className="card-text"> Piezas: {item.piezas}</h5>

            <div className="d-flex justify-content-between align-item-center">
  {/* 
                {currentUser 
                &&<button onClick={() => bidAuction(item.id)} 
                className={completed ? 'btn btn-primary' : 'btn btn-secondary'}>
                         {completed ? 'Completado' : ' Sin Completar' }
                  </button>
                
                }  */}
  
             
              <p className="display-6">Precio ${payed}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

