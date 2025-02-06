import { ExamApi } from '../exam-context';

//TODO CORRECT ANSWERS
export const M8A: ExamApi.ErauSubject = {
  id: 'M8A',
  title: 'Moodul M6A Mõõtetehnika ja selle kasutamine.',
  questions: [{
    id: 'M8A-1',
    text: 'Milline mõõteriist sisaldab horisontaal- ja vertikaalkanali võimendi?',
    enText: 'Which measuring instrument contains a horizontal and vertical channel amplifier?',
    info: '',
    answers: [{
      correct: false, text: 'Oommeeter.',
    }, {
      correct: false, text: 'Signaalgeneraator.',
    }, {
      correct: false, text: 'Ostsillograaf.',
    }, {
      correct: false, text: 'Ampermeeter.',
    }]
  }, {
    id: 'M8A-2',
    text: 'Mis tüüpi signaale on võimalik ostsillograafi abil vaadelda?',
    enText: 'What types of signals can be observed using an oscilloscope?',
    info: '',
    answers: [{
      correct: false, text: 'Suvalisi ajast sõltuvaid signaale instrumendi sagedusriba piires.',
    }, {
      correct: false, text: 'Rahvusvahelisi laevade lipusignaale.',
    }, {
      correct: false, text: 'Ookeanilaevade blinkersignaale.',
    }, {
      correct: false, text: 'Ioniseeritud atmosfäärikihtide poolt genereeritavaid signaale.',
    }]
  }, {
    id: 'M8A-3',
    text: 'Mis seade on ostsillograaf?',
    enText: 'What device is an oscillograph?',
    info: '',
    answers: [{
      correct: false, text: 'Seade,mis näitab antenni kiirgustakistust.',
    }, {
      correct: false, text: 'Seade,mis näitab antenni toiteliini seisulaine tegurit.',
    }, {
      correct: false, text: 'Seade, mis võimaldab uurida kuvaril signaalide lainekuju.',
    }, {
      correct: false, text: 'Vooluringi takistust mõõtev seade.',
    }]
  }, {
    id: 'M8A-4',
    text: 'Mis võib põhjustada ostsillograafi kineskoobi luminofoori riknemise?',
    enText: 'What can cause the phosphor in an oscilloscopes kinescope to fail?',
    info: '',
    answers: [{
      correct: false, text: 'Vertikaalkanali võimendi ületüürimine.',
    }, {
      correct: false, text: 'Liig suur heleduse säting.',
    }, {
      correct: false, text: 'Kiire ebaõige fokuseerimine.',
    }, {
      correct: false, text: 'Kineskoobi kallutuselektroodide vahetu ühendamine skeemi.',
    }]
  }, {
    id: 'M8A-5',
    text: 'Mis seade on antenni mürasild?',
    enText: 'What device is an antenna noise bridge?',
    info: '',
    answers: [{
      correct: false, text: 'Seade antenni või muu elektrilise lülituse mürateguri mõõtmiseks.',
    }, {
      correct: false, text: 'Seade antenni või muu elektrilise lülituse impedantsi mõõtmiseks.',
    }, {
      correct: false, text: 'Seade vastuvõtjas esineva müra hävitamiseks.',
    }, {
      correct: false, text: 'Seade Päikese raadiokiirguse mõõtmiseks.',
    }]
  }, {
    id: 'M8A-6',
    text: 'Kuhu ühendatakse antenni mürasild?',
    enText: 'Where is the antenna noise bridge connected?',
    info: '',
    answers: [{
      correct: false, text: 'Seade ühendatakse antenni toitepunkti ja müra suurus loetakse seadme skaalalt.',
    }, {
      correct: false, text: 'Seade ühendatakse saatja ja antenni vahele ning häälestatakse minimaalse seisulaine teguri saavutamiseni.',
    }, {
      correct: false, text: 'Seade ühendatakse vastuvõtja ja tundmatu impedantsiga lülituse vahele ning häälestatakse minimaalse müra saavutamiseni.',
    }, {
      correct: false, text: 'Seade ühendatakse antenni ja antenni sobituslülituse vahele ning häälestatakse minimaalse seisulaine teguri saavutamiseni.',
    }]
  }, {
    id: 'M8A-7',
    text: 'Mis seade on väljatugevuse mõõtja?',
    enText: 'What device is a field strength meter?',
    info: '',
    answers: [{
      correct: false, text: 'Seade, mis mõõdab seisulaine tegurit antenni toiteliinis.',
    }, {
      correct: false, text: 'Seade modulatsioonisügavuse määramiseks saatja väljundis.',
    }, {
      correct: false, text: 'Seade kõrgsagedussignaali suhtelise võimsuse mõõtmiseks.',
    }, {
      correct: false, text: 'Seade saatja keskmise väljundvõimsuse suurendamiseks.',
    }]
  }, {
    id: 'M8A-8',
    text: 'Kui palju tuleb suurendada saatja väljundvõimsusust,et saatja läheduses asuva vastuvõtja S-meetri näit suureneks S8-lt S9-ni ?',
    enText: 'How much must the transmitter output power be increased so that the S-meter reading of the receiver located near the transmitter increases from S8 to S9?',
    info: '',
    answers: [{
      correct: false, text: 'Ligikaudu kaks korda',
    }, {
      correct: false, text: 'Ligikaudu kolm korda',
    }, {
      correct: false, text: 'Ligikaudu neli korda.',
    }, {
      correct: false, text: 'Ligikaudu viis korda',
    }]
  }, {
    id: 'M8A-9',
    text: 'Milline on kõige sobivam lihtne instrument antenni kiirguse suunadiagrammi määramiseks horisontaaltasapinnas?',
    enText: 'What is the most suitable simple instrument for determining the radiation pattern of an antenna in the horizontal plane?',
    info: '',
    answers: [{
      correct: false, text: 'Väljatugevuse mõõtja.',
    }, {
      correct: false, text: 'Antenni mürasild.',
    }, {
      correct: false, text: 'Tester.',
    }, {
      correct: false, text: 'Transmatch.',
    }]
  }, {
    id: 'M8A-10',
    text: 'Millist seadet saab kasutada saatja väljundsignaalis esinevate intermodulatsiooni-moonutustes tekitatud parasiitsignaalide uurimiseks?',
    enText: 'What device can be used to study parasitic signals caused by intermodulation distortion in the transmitter output signal?',
    info: '',
    answers: [{
      correct: false, text: 'Vattmeeter.',
    }, {
      correct: false, text: 'Spektrianalüsaator.',
    }, {
      correct: false, text: 'Loogikaskeemide analüsaator.',
    }, {
      correct: false, text: 'Mäluga reflektomeeter.',
    }]
  }]
}