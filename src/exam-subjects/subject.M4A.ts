import { ExamApi } from '../exam-context';

//TODO CORRECT ANSWERS
export const M4A: ExamApi.ErauSubject = {
  id: 'M4A',
  title: 'Moodul M4A Raadiovastuvõtuseadmed.',
  questions: [{
    id: 'M4A-1',
    text: 'Mis on produkt detektor?',
    enText: 'What is a product detector?',
    info: '',
    answers: [{
      correct: false, text: 'Detektor, mis annab ostsillaatorsignaali seguastme sisendisse.',
    }, {
      correct: false, text: 'Võimendav detektor, mis kitsendab vastuvõtja võimenduskanali pääsuriba.',
    }, {
      correct: false, text: 'Detektor, mis kasutab segustusprotsessis vastuvõtjas genereeritud kandesagedust.',
    }, {
      correct: false, text: 'Detektor, mida kasutatakse ristmodulatsiooniproduktide detekteerimiseks.',
    }]
  }, {
    id: 'M4A-2',
    text: 'Millised on põhilised seguastme väljundis esinevad sagedused?',
    enText: 'What are the main frequencies present at the output of the mixer?',
    info: '',
    answers: [{
      correct: false, text: 'Sisendsignaali kahe- ja neljakordne sagedus.',
    }, {
      correct: false, text: 'Sisendsageduste summa, vahe ja ruutjuurkordne sagedus.',
    }, {
      correct: false, text: 'Sisendsagedused ning summaarne ja vahesagedus.',
    }, {
      correct: false, text: 'Sisendsageduste 1,414 ja 0,707 kordse sagedused.',
    }]
  }, {
    id: 'M4A-3',
    text: 'Mida nimetatakse detekteerimiseks?',
    enText: 'What is called detection?',
    info: '',
    answers: [{
      correct: false, text: 'Vastuvõetaval kandelainel oleva informatsiooni sumbutamist S-meetri tööleraken-damise eesmärgil.',
    }, {
      correct: false, text: 'Moduleeritud kõrgsagedussignaalilt informatsiooni eraldamine.',
    }, {
      correct: false, text: 'Kandelaine modulatsiooni.',
    }, {
      correct: false, text: 'Müra segustamine vastuvõetava signaaliga.',
    }]
  }, {
    id: 'M4A-4',
    text: 'Mis on sagedusdiskriminaator?',
    enText: 'What is a frequency discriminator?',
    info: '',
    answers: [{
      correct: false, text: 'FM signaalide detekteerimiseks kasutatav lülitus',
    }, {
      correct: false, text: 'Kahe kandelaine naabruses asuva parasiitsignaali filtreerimislülitus',
    }, {
      correct: false, text: 'Automaatne lainelülitus.',
    }, {
      correct: false, text: 'FM generaator.',
    }]
  }, {
    id: 'M4A-5',
    text: 'Mida kasutatakse FM signaali detekteerimiseks?',
    enText: 'What is used to detect an FM signal?',
    info: '',
    answers: [{
      correct: false, text: 'Balanssmodulaatorit.',
    }, {
      correct: false, text: 'Sagedusdiskriminaatorit.',
    }, {
      correct: false, text: 'Produkt detektorit.',
    }, {
      correct: false, text: 'Faasipöörajat.',
    }]
  }, {
    id: 'M4A-6',
    text: 'Mida nimetatakse segustusprotsessiks?',
    enText: 'What is the mixing process called?',
    info: '',
    answers: [{
      correct: false, text: 'Lairibavastuvõtjas müra kõrvaldamist faasivõrdluse teel.',
    }, {
      correct: false, text: 'Lairibavastuvõtjas müra kõrvaldamist faasinihke abil.',
    }, {
      correct: false, text: 'Kahe signaali liitmist summaarse- ja vahesageduse saamiseks.',
    }, {
      correct: false, text: 'Auroralevist põhjustatud moonutusi.',
    }]
  }, {
    id: 'M4A-7',
    text: 'Mis eelised on sagedusmuundusprotsessil?',
    enText: 'What are the advantages of the frequency conversion process?',
    info: '',
    answers: [{
      correct: false, text: 'Automaatselt toimiv müralukustus ja suurenenud selektiivsus.',
    }, {
      correct: false, text: 'Suurenenud selektiivsus ja optimaalne häälestatud võnkeringide konstruktsioon.',
    }, {
      correct: false, text: 'Automaatne signaali piiramine ja müralukustus.',
    }, {
      correct: false, text: 'Automaatne detekteerimine kõrgsagedusvõimendis ning suurenenud selektiivsus.',
    }]
  }, {
    id: 'M4A-8',
    text: 'Mis on vahesagedusvõimendi?',
    enText: 'What is an intermediate frequency amplifier?',
    info: '',
    answers: [{
      correct: false, text: 'Fikseeritult häälestatud pääsuribaga võimendi.',
    }, {
      correct: false, text: 'Vastuvõtja filter.',
    }, {
      correct: false, text: 'Vastuvõtja demodulaator.',
    }, {
      correct: false, text: 'Puhvervõimendi.',
    }]
  }, {
    id: 'M4A-9',
    text: 'Mis vastuvõtjas juhtub kui väga tugev signaal jõuab seguastmeni?',
    enText: 'What happens in a receiver when a very strong signal reaches the mixing stage?',
    info: '',
    answers: [{
      correct: false, text: 'Seguastmes genereeritakse parasiitsed segustusproduktid',
    }, {
      correct: false, text: 'Seguaste lakkab tüütamast.',
    }, {
      correct: false, text: 'Toimub automaatne signaali piiramine.',
    }, {
      correct: false, text: 'Geneeritakse tuikesagedus.',
    }]
  }, {
    id: 'M4A-10',
    text: 'Mis on vastuvõtja kõrgsagedusvõimendi esmane ülesanne?',
    enText: 'What is the primary function of a receivers high- frequency amplifier?',
    info: '',
    answers: [{
      correct: false, text: 'Kindlustada enamik vastuvõtja võimendusest.',
    }, {
      correct: false, text: 'Automaatse võimenduse reguleerimise süsteemi abil muuta parasiitsignaalide mahasurumise astet.',
    }, {
      correct: false, text: 'Parandada vastuvõtja mürategurit.',
    }, {
      correct: false, text: 'Tekitada automaatse võimendusregulatsiooni tööks vajalikku pinget.',
    }]
  }, {
    id: 'M4A-11',
    text: 'Millised kaks faktorit määratlevad vastuvõtja tundlikkuse?',
    enText: 'What two factors determine the sensitivity of a receiver?',
    info: '',
    answers: [{
      correct: false, text: 'Dünaamiline diapasoon ja kolmanda järgu lõikepunkt.',
    }, {
      correct: false, text: 'Hind ja kättesaadavus.',
    }, {
      correct: false, text: 'Ribalaius ja mürategur.',
    }, {
      correct: false, text: 'Intermodulatsioonimoonutused ja dünaamiline diapasoon.',
    }]
  }
  ]
}