import { ExamApi } from '../exam-context';

export const M12A: ExamApi.ErauSubject = {
  id: 'M12A',
  title: 'Moodul M12A Amatöörraadioside siseriiklik ja rahvusvaheline õiguslik regulatsioon.',
  questions: [{
    id: 'M12A-1',
    text: 'Mida loetakse amatöörraadiojaamaks?',
    enText: 'What is considered an amateur radio station?',
    info: '',
    answers: [{
      correct: false, text: 'Tehases valmistatud raadiosideaparatuuri ja selle energiatoite seadmete kogumit.',
    }, {
      correct: true, text: 'Tehniliste seadmete kogumit, mida raadioamatöör võib kasutada amatöörraadiosideks Tehnilise Järelevalve Ameti poolt väljastatud tööloa alusel.',
    }, {
      correct: false, text: 'Tehniliste seadmete kogumit, mida raadioamatöör võiks kasutada amatöörraadiosideks ka ilma Tehnilise Järelevalve Ameti poolt väljastatavat tööluba omamata.',
    }, {
      correct: false, text: 'Raadiosideaparatuuri, mis on valmistatud amatööri enda poolt ja mõeldud kasutamiseks amatöörraadiosideks ka väljapoole Eesti territooriumi.',
    }]
  }, {
    id: 'M12A-2',
    text: 'Amatöörraadiojaama tehniliste seadmete kogumikku kuuluvad:',
    enText: 'The collection of technical equipment for an amateur radio station includes:',
    info: '',
    answers: [{
      correct: false, text: 'Saatja ja vastuvõtja.',
    }, {
      correct: false, text: 'Saatja, vastuvõtja ja energiatoite seade.',
    }, {
      correct: true, text: 'Saatja, vastuvõtja, lõppseade ja antenn(id).',
    }, {
      correct: false, text: 'Saatja ja selle lõppseade.',
    }]
  },{
    id: 'M12A-3',
    text: 'Amatöör-vahendusraadiojaamaks loetakse:',
    enText: 'An amateur radio station is considered to be:',
    info: '',
    answers: [{
      correct: true, text: 'Kindlal sagedusel või sagedustel toimivat amatöörraadiojaama, mille vahendusel teostatakse vastuvõetavate sõnaliste või digitaalsete saadete edastamist reaalajas või läbi vahemälu.',
    }, {
      correct: false, text: 'Avakosmoses paiknevat raadiojaama.',
    }, {
      correct: false, text: 'Amatöörraadiojaama, mille kaudu edastatakse ainult ringteateid.',
    }, {
      correct: false, text: 'Amatöörraadiojaama, mille poolt genereeritavat signaali kasutatakse ainult raadiolevi tingimuste hindamiseks.',
    }]
  },{
    id: 'M12A-4',
    text: 'Amatöörraadiomajakaks loetakse:',
    enText: 'An amateur radio beacon is considered to be:',
    info: '',
    answers: [{
      correct: false, text: 'Avakosmoses paiknevat amatöörraadiojaama, mille vahendusel teostatakse raadio-levi tingimuste võrdlust.',
    }, {
      correct: true, text: 'Automaatselt toimivat amatöörraadiojaama, mida kasutatakse väljatugevuse mõõt-misel, antennide häälestamisel ja raadiolevi tingimuste hindamisel.',
    }, {
      correct: false, text: 'Ühiskasutusega amatöörraadiojaama, mida võib sidepidamiseks kasutada mitu raadioamatööri.',
    }, {
      correct: false, text: 'Ainult amatöörraadiojaama, mis toimib majakana raadiospordi võistluste finišis.',
    }]
  },{
    id: 'M12A-5',
    text: 'Ühiskasutusega amatöörraadiojaamaks loetakse:',
    enText: 'A shared amateur radio station is considered to be:',
    info: '',
    answers: [{
      correct: false, text: 'Amatöörraadiojaama, mis toimib ainult teatud kindlal sagedusel ja kellaajal.',
    }, {
      correct: false, text: 'Amatöörraadiojaama, mida võivad kasutada ka raadioamatööri kvalifikatsiooni mitteomavad isikud.',
    }, {
      correct: true, text: 'Amatöörraadiojaama, mis kuulub juriidilisele isikule või ERAÜ juures registreeritud raadioamatööride kollektiivile.',
    }, {
      correct: false, text: 'Kõik amatöörraadiojaamad.',
    }]
  },{
    id: 'M12A-6',
    text: 'Amatöörraadiojaama registreeritud asukohaks loetakse:',
    enText: 'The registered location of an amateur radio station is considered to be:',
    info: '',
    answers: [{
      correct: false, text: 'Asukoht, kust konkreetne raadiojaam antud ajahetkel väljub eetrisse.',
    }, {
      correct: false, text: 'Amatöörraadiojaama valdaja elukoht.',
    }, {
      correct: true, text: 'Amatöörraadiojaama valdaja elukoht.',
    }, {
      correct: false, text: 'See asukoht, mille antud amatöörraadiojaama valdaja märgib päevikusse.',
    }]
  },{
    id: 'M12A-7',
    text: 'Amatöörraadiosideks loetakse:',
    enText: 'Amateur radio parts are considered to be:',
    info: '',
    answers: [{
      correct: true, text: 'Mittetulunduslikku raadiosidet, milles osalevad ainult raadioamatöörid.',
    }, {
      correct: false, text: 'Raadiosidet, milles korrespondentide valik on vaba.',
    }, {
      correct: false, text: 'Raadiosidet, kus osapooled vahetavad informatsiooni ainult morsekoodi abil.',
    }, {
      correct: false, text: 'Raadiosidet, milles lisaks raadioamatööridele võivad korrespondentideks olla ka ametkondlikud raadiojaamad.',
    }]
  },{
    id: 'M12A-8',
    text: 'Amatöörraadiosidet tohib kasutada:',
    enText: 'Amateur radio communications may be used:',
    info: '',
    answers: [{
      correct: false, text: 'Sagedusalades, mis vastavad IARU 2.regiooni sagedusplaanile.',
    }, {
      correct: true, text: 'Ainult sagedusalades, mis on eraldatud amatöörraadiosideks Eesti raadiosageduste plaaniga.',
    }, {
      correct: false, text: 'Ainult mitteavalike raadiosõnumite edastamiseks.',
    }, {
      correct: false, text: 'Ainult täiendavalt kodeeritud sõnumite edastamiseks.',
    }]
  },{
    id: 'M12A-9',
    text: 'Raadioamatööriks loetakse isikut:',
    enText: 'A radio amateur is considered to be a person:',
    info: '',
    answers: [{
      correct: false, text: 'Kes oma vanuse, raadiotehniliste teadmiste ja elukogemuste põhjal võib seda nimetust kanda',
    }, {
      correct: false, text: 'Kes kasutab tavalist ,headest tavadest lähtuvat kõnekeelt raadioside pidamisel.',
    }, {
      correct: true, text: 'Isikut, kes omab raadioamatööri kvalifikatsioonitunnistust.',
    }, {
      correct: false, text: 'Kes on ERAÜ tegevliige.',
    }]
  },{
    id: 'M12A-10',
    text: 'Amatöörraadiosides tohib edastada sihituseta või korrespondendita saateid:',
    enText: 'Amateur radio stations may transmit untargeted or uncorrespondent programs:',
    info: '',
    answers: [{
      correct: false, text: 'Amatöörtelevisiooni saatja video- ja helikanali edastamiseks.',
    }, {
      correct: true, text: 'Amatöörraadiomajakate poolt.',
    }, {
      correct: true, text: 'Kõikidele Eesti raadioamatööridele määratud infoteadete edastamiseks.',
    }, {
      correct: false, text: 'Ainult Morse koodis tähestiku õppe-treeningtekstide edastamiseks.',
    }]
  },{
    id: 'M12A-11',
    text: 'Eesti amatöörraadiojaamale eraldatav kutsung koosneb:',
    enText: 'The call sign assigned to an Estonian amateur radio station consists of:',
    info: '',
    answers: [{
      correct: false, text: 'Kolmetähelisest eesliitest, kahekohalisest numbrist ja kolmetähelisest järelliitest.',
    }, {
      correct: false, text: 'Ühetähelisest eesliitest, ühekohalisest numbrist ja neljatähelisest järelliitest.',
    }, {
      correct: true, text: 'Kahetähelisest eesliitest, numbrist ja kuni kolmetähelisest järelliitest.',
    }, {
      correct: false, text: 'Kahekohalisest numbrilisest eesliitest ja kuni kolmetähelisest järelliitest.',
    }]
  },{
    id: 'M12A-12',
    text: 'Haapsalus registreeritud amatöörraadiojaama kutsung algab:',
    enText: 'The callsign of the amateur radio station registered in Haapsalu begins:',
    info: '',
    answers: [{
      correct: false, text: 'ES1',
    }, {
      correct: false, text: 'ES2',
    }, {
      correct: true, text: 'ES3',
    }, {
      correct: false, text: 'ES0',
    }]
  },{
    id: 'M12A-13',
    text: 'Kutsung ES9Z kuulub piirkondlikult:',
    enText: 'The call ES9Z belongs regionally to:',
    info: '',
    answers: [{
      correct: false, text: 'Hiiumaale.',
    }, {
      correct: true, text: 'Üleriigiline, kasutamiseks ainult ERAÜ poolt.',
    }, {
      correct: false, text: 'Põlvamaale.',
    }, {
      correct: false, text: 'Üleriigiline, kasutamiseks ainult Punase Risti poolt.',
    }]
  },{
    id: 'M12A-14',
    text: 'Kutsung ES2XX võib kuuluda millise klassi Eesti amatöörraadiojaamale?',
    enText: 'The callsign ES2XX may belong to which class of Estonian amateur radio station?',
    info: '',
    answers: [{
      correct: false, text: 'C',
    }, {
      correct: false, text: 'B',
    }, {
      correct: true, text: 'A',
    }, {
      correct: false, text: 'On välja antud eriloa alusel.',
    }]
  },{
    id: 'M12A-15',
    text: 'Ühiskasutusega (raadioklubi) amatöörraadiojaamale omistatakse kutsung:',
    enText: 'A shared (radio club) amateur radio station is assigned the call sign:',
    info: '',
    answers: [{
      correct: false, text: 'AAA-CCC',
    }, {
      correct: true, text: 'A-ZZ',
    }, {
      correct: false, text: 'XAA-ZZZ',
    }, {
      correct: false, text: 'ABC-DZZ',
    }]
  },{
    id: 'M12A-16',
    text: 'Ühiskasutusega (raadioklubi) amatöörraadiojaama vastutavaks järelvaatajaks võib olla ainult:',
    enText: 'The responsible supervisor of a shared (radio club) amateur radio station may only be:',
    info: '',
    answers: [{
      correct: true, text: 'A-klassi kvalifikatsioonitunnistust omav raadioamatöör.',
    }, {
      correct: false, text: 'B-klassi kvalifikatsioonitunnistust omav raadioamatöör.',
    }, {
      correct: false, text: 'C-klassi kvalifikatsioonitunnistust omav raadioamatöör.',
    }, {
      correct: false, text: 'Riigiametnik.',
    }]
  },{
    id: 'M12A-17',
    text: 'Amatöörraadiojaama luba väljastatakse Tehnilise Järelevalve Ameti poolt kestvusega:',
    enText: 'An amateur radio station license is issued by the Technical Surveillance Authority for a period of:',
    info: '',
    answers: [{
      correct: false, text: 'Tähtajatu.',
    }, {
      correct: false, text: '1 aasta.',
    }, {
      correct: false, text: '3 aastat.',
    }, {
      correct: true, text: '5 aastat',
    }]
  },{
    id: 'M12A-18',
    text: 'Amatöörraadiojaama tohib kasutada:',
    enText: 'An amateur radio station may be used:',
    info: '',
    answers: [{
      correct: false, text: 'Ainult raadioamatööri harmoneeritud kvalifikatsioonitunnistuse alusel.',
    }, {
      correct: true, text: 'Ainult kehtiva amatöörraadiojaama tööloa alusel.',
    }, {
      correct: false, text: 'Ainult raadioamatööri kvalifikatsioonieksami sooritamise tunnistuse alusel.',
    }, {
      correct: false, text: 'Ainult ERAÜ poolt väljaantud vastava loa alusel.',
    }]
  },{
    id: 'M12A-19',
    text: 'Amatöörraadiojaama tööluba kuulub hoidmisele:',
    enText: 'An amateur radio station operating permit must be held by:',
    info: '',
    answers: [{
      correct: false, text: 'Raadiojaama valdaja elukohas.',
    }, {
      correct: false, text: 'Raadiojaama registreeritud asukohas.',
    }, {
      correct: false, text: 'Tehnilise Järelevalve Ametis.',
    }, {
      correct: false, text: 'Tehnilise Järelevalve Ameti lubade osakonnas.',
    }]
  },{
    id: 'M12A-20',
    text: 'Amatöörraadiojaama alaline (kohtpaikne) kasutamine väljaspool selle registreeritud asukohta ilma tööloa muutmiseta on lubatud:',
    enText: 'Permanent (local) use of an amateur radio station outside its registered location without changing the operating permit is permitted:',
    info: '',
    answers: [{
      correct: false, text: 'Kolm kuud.',
    }, {
      correct: false, text: 'Viis kuud.',
    }, {
      correct: false, text: 'Kuus kuud.',
    }, {
      correct: false, text: 'Üks aasta.',
    }]
  }]
}