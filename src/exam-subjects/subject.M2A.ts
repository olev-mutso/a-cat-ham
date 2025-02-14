import { ExamApi } from '../exam-context';

export const M2A: ExamApi.ErauSubject = {
  id: 'M2A',
  title: 'Moodul M2A Raadio- ja elektrotehnika kompoonendid.',
  questions: [{
    id: 'M2A-1',
    text: 'Kuidas mõjub ümbruskonna temperatuur süsiniktakisti takistusele?',
    enText: 'How does the ambient temperature affect the resistance of a carbon resistor?',
    info: '',
    answers: [{
      correct: false, text: 'Takistus suureneb 20% temperatuuri tõusmisel iga 10 kraadi võrra.',
    }, {
      correct: false, text: 'Takistuse suurus ei muutu.',
    }, {
      correct: true, text: 'Takistuse muutus sõltub takisti temperatuuritegurist sõltuvalt.',
    }, {
      correct: false, text: 'Takistuse suurus muutub ajast sõltuvaks.',
    }]
  },
  {
    id: 'M2A-2',
    text: 'Mis tüüpi kondensaatorit kasutatakse tihti võrgutoitealaldi silumisfiltris?',
    enText: 'What type of capacitor is often used in the smoothing filter of a mains power rectifier?',
    info: '',
    answers: [{
      correct: false, text: 'Keraamilist ketaskondensaatorit.',
    }, {
      correct: false, text: 'Muutuva mahtuvusega vaakumkondensaatorit.',
    }, {
      correct: true, text: 'Elektrolüütkondensaatorit.',
    }, {
      correct: false, text: 'Vilgukivikondensaatorit.',
    }]
  },
  {
    id: 'M2A-3',
    text: 'Millised kondensaatorid lülitatakse rööbiti transformaatori sekundaarmähisega pingeimpulsside vähendamiseks?',
    enText: 'What capacitors are connected in parallel with the secondary winding of a transformer to reduce voltage pulses?',
    info: '',
    answers: [{
      correct: false, text: 'Suure mahtuvusega kondensaatorid.',
    }, {
      correct: false, text: 'Muutuva mahtuvusega vaakumkondensaatorid.',
    }, {
      correct: true, text: 'Keraamilised kondensaatorid.',
    }, {
      correct: false, text: 'Trimmerid.',
    }]
  },
  {
    id: 'M2A-4',
    text: 'Mis tekitab poolide omaresonantsi?',
    enText: 'What causes the self-resonance of coils?',
    info: '',
    answers: [{
      correct: false, text: 'Hajutatud elektromagnetism.',
    }, {
      correct: false, text: 'Pöörisvoolud.',
    }, {
      correct: true, text: 'Keerdudevaheline mahtuvus.',
    }, {
      correct: false, text: 'Parasiithüsterees.',
    }]
  },
  {
    id: 'M2A-5',
    text: 'Milline vooluringi komponent võimaldab suurendada vahelduvvoolu pinget 100 voldilt 1000 voldini?',
    enText: 'Which circuit component allows you to increase the AC voltage from 100 volts to 1000 volts?',
    info: '',
    answers: [{
      correct: true, text: 'Transformaator.',
    }, {
      correct: false, text: 'Kondensaator.',
    }, {
      correct: false, text: 'Diood.',
    }, {
      correct: false, text: 'Filterdrossel.',
    }]
  }, {
    id: 'M2A-6',
    text: 'Kuidas nimetatakse transformaatori primaarmähises voolavat voolu kui Sekundaarmähise külge pole koormust lülitatud?’',
    enText: 'What is the name given to the current flowing in the primary winding of a transformer when there is no load connected to the secondary winding?',
    info: '',
    answers: [{
      correct: true, text: 'Magneetimisvooluks.',
    }, {
      correct: false, text: 'Alalisvooluks.',
    }, {
      correct: false, text: 'Ergutusvooluks.',
    }, {
      correct: false, text: 'Stabiliseerimisvooluks.',
    }]
  }, {
    id: 'M2A-7',
    text: 'Mis suurustega iseloomustatakse tavaliselt jõutransformaatori primaar- ja sekundaarmähiseid?',
    enText: 'What are the dimensions usually used to characterize the primary and secondary windings of a power transformer?',
    info: '',
    answers: [{
      correct: false, text: 'Džauli sekundis.',
    }, {
      correct: true, text: 'Volt või volt-amper.',
    }, {
      correct: false, text: 'Kulonit sekundis.',
    }, {
      correct: false, text: 'Vastupinge.',
    }]
  }, {
    id: 'M2A-8',
    text: 'Mis on toiteseadme alalduselemendi vastupinge?',
    enText: 'What is the reverse voltage of the rectifier element of a power supply?',
    info: '',
    answers: [{
      correct: false, text: 'Suurim siirdepinge, mida diood on võimeline taluma.',
    }, {
      correct: false, text: '1,4 korda elektrivõrgu sagedus.',
    }, {
      correct: true, text: 'Mittejuhtivas suunas dioodi klemmidele rakendatud maksimaalne pinge.',
    }, {
      correct: false, text: '2,8 korda elektrivõrgu sagedus',
    }]
  },
  {
    id: 'M2A-9',
    text: 'Millised on ränidioodide kaks parameetrit, mida ei või ületada?',
    enText: 'What are the two parameters of silicon diodes that cannot be exceeded?',
    info: '',
    answers: [{
      correct: false, text: 'Maksimaalne koormusimpedants, tipppinge.',
    }, {
      correct: false, text: 'Keskmine võimsus, keskmine pinge',
    }, {
      correct: true, text: 'Maksimaalne vastupinge, keskmine pärivool.',
    }, {
      correct: false, text: 'Mahtuvuslik takistus, laviinpinge.',
    }]
  },
  {
    id: 'M2A-10',
    text: 'Miks peavad alaldi dioodid olema termaalselt kaitstud?',
    enText: 'Why do rectifier diodes need to be thermally protected?',
    info: '',
    answers: [{
      correct: false, text: 'Nende läheduse tõttu transformaatorile.',
    }, {
      correct: true, text: 'Ülemäärase kuumenemise tõttu võivad rikneda.',
    }, {
      correct: false, text: 'Nende tundlikkuse tõttu siirdepingete mõjule.',
    }, {
      correct: false, text: 'Nende kasutamise tõttu kõrgepingeseadmetes.',
    }]
  },
  {
    id: 'M2A-11',
    text: 'Mis on Zener-dioodi (stabilitroni) peamine omadus?',
    enText: 'What is the main characteristic of a Zener diode?',
    info: '',
    answers: [{
      correct: false, text: 'Konstantne vool kõikuva pinge puhul.',
    }, {
      correct: true, text: 'Konstantne pinge muutliku voolu puhul.',
    }, {
      correct: false, text: 'Sisemahtuvus, mis muutub sõltuvalt rakendatud pingest.',
    }]
  },
  {
    id: 'M2A-12',
    text: 'Mis tüüpi diood on võimeline ostsilleerima ja ka võimendama?',
    enText: 'What type of diode is capable of oscillating and also amplifying?',
    info: '',
    answers: [{
      correct: false, text: 'Punktkontaktdiood.',
    }, {
      correct: true, text: 'Tunneldiood.',
    }, {
      correct: false, text: 'Ränialaldi.',
    }, {
      correct: false, text: 'Pinddiood.',
    }]
  },
  {
    id: 'M2A-13',
    text: 'Mis on varaktordioodi peamine omadus?',
    enText: 'What is the main characteristic of a varactor diode?',
    info: '',
    answers: [{
      correct: false, text: 'Hoiab stabiilset pinget läbiva muutliku voolu puhul.',
    }, {
      correct: true, text: 'Tema sisemahtuvus sõltub rakendatud pingest.',
    }, {
      correct: false, text: 'Omab negatiivse takistusega regiooni.',
    }, {
      correct: false, text: 'On väga kõrge vastupingega.',
    }]
  },
  {
    id: 'M2A-14',
    text: 'Milleks kasutatakse PIN dioodi?',
    enText: 'What is a PIN diode used for?',
    info: '',
    answers: [{
      correct: false, text: 'Stabiilse voolu allikas.',
    }, {
      correct: false, text: 'Stabiilse pinge allikas.',
    }, {
      correct: true, text: 'Kõrgsageduslik dioodlüliti.',
    }, {
      correct: false, text: ' Kõrgpinge alaldi.',
    }]
  },
  {
    id: 'M2A-15',
    text: 'Kui suur on SSB telefonitööks vajaliku hea kvartsfiltri pääsuriba laius?',
    enText: 'What is the passband width of a good quartz filter needed for SSB telephone work?',
    info: '',
    answers: [{
      correct: false, text: '.6kHz -6dB pääsuriba juures. ',
    }, {
      correct: true, text: '2,1kHz –6dB pääsuriba juures.',
    }, {
      correct: false, text: '500Hz --6dB pääsuriba juures.',
    }, {
      correct: false, text: ' 15kHz --6dB pääsuriba juures.',
    }]
  }
  ]
}