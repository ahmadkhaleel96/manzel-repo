import React from "react";
import "./team.css";
import Hadeel from '../../assets/hadeel.jpeg';
import Ahmad from '../../assets/Ahmad.jpg';
import Samer from '../../assets/samer.jpeg';

const Team = () => {
  return (
    <div className="team-container" id='team'>
      <div className="meet-the-team">
        <strong>Meet the Team</strong>
      </div>

      <div className="item clean">
        <img src={Hadeel} alt="image" />
        <div class="overlay">
          <span>"</span>
          <span>Hadeel M. Al-Balasmeh <br/> Founder <br/> <br/> Architect, Filmmaker, Gamer and absulote Boss Lady</span>
          <span></span>
        </div>
      </div>

      <div className="item uncover">
        <img src={Ahmad} alt="image" />
        <div class="overlay">
          <span>"</span>
          <span>Ahmad K. Al-Mahasneh <br/>Developer<br/>Electrical Engineer, Filmmakek, Photographer and Film Lover</span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="item explode">
        <img src={Samer} alt="image" />
        <div class="overlay">
          <span>"</span>
          <span>Samer 'Sam' Rahmeh <br/>CTO <br/> Architect, ML Engineer <br/> Alajou Group - SQL DB Dev.<br/>
Flux.io - Computational Analyst <br/>
IDDA - V.S Expert Elite <br/>
Unreal Engine - Dev. Supporter<br/>
MDFT Europe - ML Specialist</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Team;
