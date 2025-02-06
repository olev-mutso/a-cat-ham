import { ExamApi } from '../exam-context';

//TODO CORRECT ANSWERS
export const M5A: ExamApi.ErauSubject = {
  id: 'M5A',
  title: 'Moodul M5A Raadiosaateseadmed.',
  questions: [{
    id: 'M5A-1',
    text: 'Mis tüüpi sisendsignaali kasutatakse SSB saatja lineaarsuse kontrollimiseks?',
    enText: 'What type of input signal is used to check the linearity of an SSB transmitter?',
    info: '',
    answers: [{
      correct: false, text: 'Tavalist kõnet.',
    }, {
      correct: false, text: 'Helisageduslikku siinuslainet',
    }, {
      correct: false, text: 'Kaht helisageduslikku siinuslainet',
    }, {
      correct: false, text: 'Helisageduslikku kantlainet.',
    }]
  }, {
    id: 'M5A-2',
    text: 'Miks kasutatakse raadiosaatja kõrgepingealaldis šunttakistit?',
    enText: 'Why is a high-voltage shunt resistor used in a radio transmitter?',
    info: '',
    answers: [{
      correct: false, text: 'Parandab pingeregulatsiooni.',
    }, {
      correct: false, text: 'Laadib filterkondensaatori tühjaks.',
    }, {
      correct: false, text: 'Kõrvaldab poolidelt elektrilöögi saamise ohu.',
    }, {
      correct: false, text: 'Elimineerib maaühenduse voolud.',
    }]
  }, {
    id: 'M5A-3',
    text: 'Mida saab kontrollida kahe tooni testi abil?',
    enText: 'What can be checked with the two-tone test?',
    info: '',
    answers: [{
      correct: false, text: 'Sagedusmodulatsiooni protsenti.',
    }, {
      correct: false, text: 'Kandesageduse faasinihet.',
    }, {
      correct: false, text: 'Kõrgsagedusvõimendi lineaarsust.',
    }, {
      correct: false, text: 'Sagedusdeviatsiooni',
    }]
  }, {
    id: 'M5A-4',
    text: 'Miks on mõningates lampvõimendites vajalik neutralisatsioon?',
    enText: 'Why is neutralization necessary in some tube amplifiers?',
    info: '',
    answers: [{
      correct: false, text: 'Häälestatud võnkeringides koormatud Q vähendamiseks.',
    }, {
      correct: false, text: 'Võre ja katoodi vahelise lekkevoolu vähendamiseks.',
    }, {
      correct: false, text: 'Elektroodidevahelise mahtuvuse tõttu tekkida võiva ostsilleerimise vältimiseks.',
    }, {
      correct: false, text: 'Tooriumoksiidi mõjul lambis tekkiva happe likvideerimiseks.',
    }]
  }, {
    id: 'M5A-5',
    text: 'Milliseid kaht helisagedust võib kasutada SSB telefonisaatja lineaarsuse kontrollimiseks?',
    enText: 'What two audio frequencies can be used to check the linearity of an SSB telephone transmitter?',
    info: '',
    answers: [{
      correct: false, text: 'Tuleb kasutada signaale sagedusega 20Hz ja 20000Hz.',
    }, {
      correct: false, text: 'Võib kasutada suvalisi helisagedusi, mis paiknevad saatja helisagedustrakti pääsuribas tingimusel, et nad ei ole teineteisega harmoonilises suhtes.',
    }, {
      correct: false, text: 'Tuleb kasutada sagedusi 1200Hz ja 2400hz.',
    }, {
      correct: false, text: 'Tuleb kasutada saatja helisagedustraktis paiknevat ja teineteisega harmoonilises suhtes olevat helisagedust.',
    }]
  }, {
    id: 'M5A-6',
    text: 'Mis tüüpi filter tuleb installeerida amatöörsaatjasse harmooniliste sageduste kiirguse vältimiseks?',
    enText: 'What type of filter should be installed in an amateur transmitter to prevent the emission of harmonic frequencies?',
    info: '',
    answers: [{
      correct: false, text: 'Võtmeklõpsu filter.',
    }, {
      correct: false, text: 'Madalpääsfilter.',
    }, {
      correct: false, text: 'Kõrgpääsfilter.',
    }, {
      correct: false, text: 'CW filter.',
    }]
  }, {
    id: 'M5A-7',
    text: 'Mida on vaja omada telefonitööks ettenähtud amatöörraadiojaamas?',
    enText: 'What is needed for an amateur radio station intended for telephone work?',
    info: '',
    answers: [{
      correct: false, text: 'Splatteri filter.',
    }, {
      correct: false, text: 'Mikrofon.',
    }, {
      correct: false, text: 'Vastuvõtja helisagedusfilter.',
    }, {
      correct: false, text: 'Väljakutseautomaat.',
    }]
  }, {
    id: 'M5A-8',
    text: 'Monteerisite oma autosse VHF või UHF FM raadiojaama. Milline on antenni jaoks parim koht ,vältimaks juhi ja reisijate ülikõrgsagedusliku kiirituse ohtu?',
    enText: 'You have installed a VHF or UHF FM radio station in your car. What is the best location for the antenna to avoid the risk of VHF radiation to the driver and passengers?',
    info: '',
    answers: [{
      correct: false, text: 'Katuse keskkoht.',
    }, {
      correct: false, text: 'Tuuleklaasi ülemine äär.',
    }, {
      correct: false, text: 'Ükskõik kummal esimesel poritiival.',
    }, {
      correct: false, text: 'Pagasiruumi luugil.',
    }]
  }, {
    id: 'M5A-9',
    text: 'Mis on saatjas kasutatavate ekraanide otstarve?',
    enText: 'What is the purpose of the screens used in the transmitter?',
    info: '',
    answers: [{
      correct: false, text: 'Moodustab strukturaalse madalpääsfiltri.',
    }, {
      correct: false, text: 'Likvideerib ebasoovitava kõrgsagedusliku kiirguse.',
    }, {
      correct: false, text: 'Takistab helisagedusliku tagasiside tekkimist saatjas.',
    }, {
      correct: false, text: 'Aitab säilitada saatjas paraja kõrgusega töötemperatuuri.',
    }]
  }, {
    id: 'M5A-10',
    text: 'Miks kasutatakse nn. pii-filtrit saatja väljundis?',
    enText: 'Why is a so-called pi filter used at the transmitter output?',
    info: '',
    answers: [{
      correct: false, text: 'Saatja väljundimpedantsi sobitamiseks antenni toiteliiniga ja parasiitkiirguse vähendamiseks.',
    }, {
      correct: false, text: 'Antenni poolt vastuvõetud mürasignaalide mahajuhtimiseks.',
    }, {
      correct: false, text: 'Antennis tekkinud staatiliste pingete saatjasse pääsu takistamiseks.',
    }, {
      correct: false, text: 'Saatja lõpplambi kõrgepinge pääsu takistamiseks antenni.',
    }]
  }]
}