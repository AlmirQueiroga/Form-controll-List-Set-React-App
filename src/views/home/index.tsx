import React from "react";
import { Background } from "./home.styles";

export default function Home(): JSX.Element{


	return(
		<Background>
      <div className="container-login">
			  <div className="wrap-login">
          <form className="form">

            <div className="wrap-input">
              <input type="RG"/> 
              <span className="color-input" data-placeholder="RG"></span>
            </div>

            <div className="wrap-input">
              <input type="Data de emissão"/> 
              <span className="color-input" data-placeholder="Data de emissão"></span>
            </div>

            <div className="wrap-input">
              <input type="Orgão Expeditor"/> 
              <span className="color-input" data-placeholder="Orgão Expeditor"></span>
            </div>

            <div className="wrap-input">
              <input type="Sexo"/> 
              <span className="color-input" data-placeholder="Sexo"></span>
            </div>

            <div className="container-form-btn">
              <button className="add-form-button" >Adicionar</button>
            </div>

          </form>
		    </div>
      </div>
		</Background>
	)
}