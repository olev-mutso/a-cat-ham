import { ExamApi } from '../exam-context';

//TODO CORRECT ANSWERS
export const M3A: ExamApi.ErauSubject = {
  id: 'M3A',
  title: 'Moodul M3A Raadio- ja elektrotehnika ahelad.',
  questions: [{
    id: 'M3A-1',
    text: 'Miks ühendatakse toitealaldi dioodidega paralleelselt kondensaator ja takisti?',
    enText: 'Why are a capacitor and a resistor connected in parallel with the diodes in a power rectifier?',
    info: '',
    answers: [{
      correct: false, text: 'Väljundpinge lainesuse silumiseks',
    }, {
      correct: false, text: 'Väljundpinge suurendamiseks.',
    }, {
      correct: false, text: 'Pingelangude võrdsustamiseks dioodidel ja pingeimpulsside kahjuliku mõju vähendamiseks.',
    }, {
      correct: false, text: 'Raadiohäirete vähendamiseks.',
    }]
  },
  {
    id: 'M3A-2',
    text: 'Milline on täislaine alaldi väljundpinge filtreerimata kuju?',
    enText: 'What is the unfiltered shape of the output voltage of a full-wave rectifier?',
    info: '',
    answers: [{
      correct: false, text: 'Sile alalispinge.',
    }, {
      correct: false, text: 'Sisendpinge sagedusega võrdne impulsside jada.',
    }, {
      correct: false, text: 'Sisendpinge kahekordse sagedusega võrdne impulsside jada.',
    }, {
      correct: false, text: 'Kolmnurkimpulsside jada.',
    }]
  },
  {
    id: 'M3A-3',
    text: 'Millised komponendid moodustavad toitealaldi filtri',
    enText: 'What components make up a power rectifier filter?',
    info: '',
    answers: [{
      correct: false, text: 'Dioodid.',
    }, {
      correct: false, text: 'Trafod ja transistorid.',
    }, {
      correct: false, text: 'Kondensaatorid ja drosselid.',
    }, {
      correct: false, text: 'Transistorid ja drosselid.',
    }]
  },
  {
    id: 'M3A-4',
    text: 'Milline peab olema täisperioodalaldi alalduselemendi vastupinge suurus?',
    enText: 'What should be the magnitude of the reverse voltage of the rectifier element of a full-wave rectifier?',
    info: '',
    answers: [{
      correct: false, text: 'Veerand alaldi nominaalsest väljundpingest.',
    }, {
      correct: false, text: 'Võrdne alaldi väljundpingega.',
    }, {
      correct: false, text: 'Võrdne alaldi nominaalse väljundpinge kahekordse väärtusega.',
    }, {
      correct: false, text: 'Võrdne alaldi nominaalse väljundpinge neljakordse väärtusega.',
    }]
  },
  {
    id: 'M3A-5',
    text: 'Milline peab olema transmissiooniliiniga ühendatud madalpääsfiltri impedants liini impedantsiga võrreldes? ',
    enText: 'What should be the impedance of a low-pass filter connected to a transmission line compared to the line impedance?',
    info: '',
    answers: [{
      correct: false, text: 'Märgatavalt kõrgem.',
    }, {
      correct: false, text: 'Enamvähem sama.',
    }, {
      correct: false, text: 'Võrdne liini kahekordse impedantsiga.',
    }, {
      correct: false, text: 'Võrdne liini impedantsi poole väärtusega.',
    }]
  },
  {
    id: 'M3A-6',
    text: 'Milline peab olema poolperioodalaldi alalduselemendi vastupinge suurus?',
    enText: 'What should be the magnitude of the reverse voltage of the rectifier element of a half-wave rectifier?',
    info: '',
    answers: [{
      correct: false, text: 'Pool alaldi nominaalsest väljundpingest.',
    }, {
      correct: false, text: 'Alaldi nominaalse tipppinge ühe või kahekordne väärtus.',
    }, {
      correct: false, text: 'Võrdne alaldi väljundpingega.',
    }, {
      correct: false, text: 'Võrdne alaldi neljakordse väljundpingega.',
    }]
  },
  {
    id: 'M3A-7',
    text: 'Kuhu ühendatakse toitealaldi šunttakisti?',
    enText: 'Where is the shunt resistor of the power rectifier connected?',
    info: '',
    answers: [{
      correct: false, text: 'Paralleelselt filterkondensaatoriga.',
    }, {
      correct: false, text: 'Paralleelselt alaldi sisendiga.',
    }, {
      correct: false, text: 'Paralleelselt väljundfiltri drosseliga.',
    }, {
      correct: false, text: 'Paralleelselt trafo primaarmähisega.',
    }]
  },
  {
    id: 'M3A-8',
    text: 'Mitu kraadi siinuslainest kasutab poolperioodalaldi?',
    enText: 'How many degrees of a sine wave does a half-wave rectifier use?',
    info: '',
    answers: [{
      correct: false, text: '90 kraadi.',
    }, {
      correct: false, text: '180 kraadi.',
    }, {
      correct: false, text: '360 kraadi',
    }, {
      correct: false, text: '270 kraadi ',
    }]
  },
  {
    id: 'M3A-9',
    text: 'Mitu kraadi siinuslainest kasutab täisperioodalaldi?',
    enText: 'How many degrees of a sine wave does a full-wave rectifier use?',
    info: '',
    answers: [{
      correct: false, text: '90 kraadi.',
    }, {
      correct: false, text: '180 kraadi.',
    }, {
      correct: false, text: '360 kraadi',
    }, {
      correct: false, text: '270 kraadi ',
    }]
  },
  {
    id: 'M3A-10',
    text: 'Mis funktsiooni täidavad kõrgepingealaldis dioodidega paralleelselt lülitatud kondensaatorid ja takistid? ',
    enText: 'What function do capacitors and resistors connected in parallel with high-voltage diodes perform?',
    info: '',
    answers: [{
      correct: false, text: 'Kahe- või kolmekordistavad väljundpinget.',
    }, {
      correct: false, text: 'Kaitsevad teistest dioodidest kiiremini vastutakistust taastavaid dioode.',
    }, {
      correct: false, text: 'Reguleerivad väljundpinget.',
    }, {
      correct: false, text: 'Vähendavad raadiohäireid.',
    }]
  },
  ]
}