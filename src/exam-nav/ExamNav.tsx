import React from 'react';


export const ExamNav: React.FC<{}> = ({ }) => {
 

  return (
    <div>
        <div className="header">
          <a href="./" className="home"><i className="fas fa-broadcast-tower"></i></a><h1>RAADIOAMATÖÖRI „A” KATEGOORIA EKSAMI KÜSIMUSED JA VASTUSED</h1>
        </div>
        <hr />
        <a href="#" id="show_random" className="filter selected"><i className="fas fa-sync"></i>Juhuslikud <span className="count">40</span></a>
        <a href="#" id="show_all" className="filter"><i className="fas fa-sync"></i>Kõik küsimused <span className="count">166</span></a>
        <a href="#" id="show_problem" className="filter"><i className="fas fa-sync"></i>Probleemsed <span className="count"></span></a>
        <a href="#" id="show_wrong_answers" className="filter" style={{display: 'none'}}><i className="fas fa-sync"></i>Valesti vastatud <span className="count"></span></a>
        <a href="#" id="clear_memory" className="filter" style={{ display: 'none' }} title="Unusta valesti vastatud küsimused"><i className="fas fa-trash-alt"></i></a>
        
        <label htmlFor="autoscroll" className="filter" style={{whiteSpace: 'nowrap'}}>
          <input type="checkbox" checked={true} id="autoscroll" className="filter" />Automaatkerimine
        </label>

        <hr style={{marginTop:'0em'}} />


    </div>);
}



