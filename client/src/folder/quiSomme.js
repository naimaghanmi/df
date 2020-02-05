import React from 'react'
import './quiSomme.css'
export default function Propos() {
    return (
  <div >

      <div className='title'>
          <h2> Qui Sommes Nous??</h2>
      </div>
  <div className="service">
  <div className='text-description'>

         <p >
          Nous sommes une société de service à domicile.
          Nous participons d’une manière très active au dépannage à domicile 
          dans divers domaine(réparation électrique, blomberie, jardinnage, 
          climatisation, ... ).
          la saticfaction clientéle et la rapidité sont nos principaux 
          objectifs.
          </p>
          </div>
     
           <div className='text-description'>
          <p >Notre société a mis en place le service 
          <b> Rapido services </b>
          .C’est une plate-forme spécialisée dans le 
        <b> dépannage d’urgence </b>
          . En effet, si vous avez un problème au niveau de l’installation 
          (plomberie, chauffage, climatisation, électricité,…) de votre maison, Rapido Services se charge de vous dépêcher un spécialiste pour intervenir dans les meilleurs délais avec la garantie de l’efficacité,
           la qualité et la transparence.
          </p>
          </div>
      </div>
      <div className="Sections">
            <h3>Dépannage à Domicile</h3> 
            <img width="200px" src='https://i.pinimg.com/564x/fb/2d/c9/fb2dc9ddccf2eb3ac4f09eac64fb6024.jpg'></img>
            <img width="200px" src='https://i.pinimg.com/564x/3a/e3/15/3ae315cd5c4326c3b05c37e656363d92.jpg'></img>
            <img width='200px'src="https://i.pinimg.com/564x/30/69/82/306982017f7e6e61f4c85060fd9dafff.jpg"></img>

      </div>

  </div>
    );
}
