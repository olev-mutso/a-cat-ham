import { ExamApi } from '../exam-context';


export const M2A: ExamApi.ErauSubject = {
  id: 'M2A',
  title: 'Moodul M2A Raadio- ja elektrotehnika kompoonendid.',
  questions: [{
    id: 'M2A-1',
    text: 'Kuidas mõjub ümbruskonna temperatuur süsiniktakisti takistusele?',
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
    text: 'MMis suurustega iseloomustatakse tavaliselt jõutransformaatori primaar- ja sekundaarmähiseid?',
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