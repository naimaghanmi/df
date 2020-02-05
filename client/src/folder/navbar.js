import React from 'react';

export default function Navbar() {

    return (
        <div >
<nav class="navbar navbar-expand-lg navbar-light bg-light" >
  <a class="navbar-brand" href="#">LOGO</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

      <li class="nav-item ">
        <a class="nav-link" href="#">Qui somme nous?<span class="sr-only"></span></a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Comment ça marche?</a>
      </li>
    </ul>
    <form className="LoginRegister">
    <button type="button" class="btn btn-danger" style={{marginRight:"5px"}}>Register</button>
    <button type="button" class="btn btn-secondary">Login</button>
    </form>
  </div>
</nav>
</div>
)
    
}