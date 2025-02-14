import { ExamApi } from '../exam-context';

export const M9A: ExamApi.ErauSubject = {
  id: 'M9A',
  title: 'Moodul M9A Raadiohäired ja elektromagnetiline ühildatavus (EMC).',
  questions: [{
    id: 'M9A-1',
    text: 'Mis on atmosfääriliste raadiohäirete peamine tekkepõhjus?',
    enText: 'What is the main cause of atmospheric radio interference?',
    info: '',
    answers: [{
      correct: false, text: 'Päikeseplekid.',
    }, {
      correct: true, text: 'Äikesetormid.',
    }, {
      correct: false, text: 'Lennukid.',
    }, {
      correct: false, text: 'Ioniseeritud meteoorijäljed.',
    }]
  }, {
    id: 'M9A-2',
    text: 'Kuidas on võimalik kindlaks teha, kas raadiohäireid tekitav elektriliin asub teiemajas?',
    enText: 'How can you determine if a power line causing radio interference is located in your house?',
    info: '',
    answers: [{
      correct: false, text: 'Kontrolli elektriliini pinget graafilise reflektomeetriga.',
    }, {
      correct: false, text: 'Kontrolli vahelduvvoolu lainekuju ostsillograafi abil.',
    }, {
      correct: true, text: 'Lülita välja maja elektrivõrgu pealüliti ja kuula patareitoitega raadiot.',
    }, {
      correct: false, text: 'Uuri elektrivõrgu pinget spektrianalüsaatoriga.',
    }]
  }, {
    id: 'M9A-3',
    text: 'Kuidas on võimalik vähendada auto elektrigeneraatori poolt tekitatavaid raadiohäireid?',
    enText: 'How can I reduce the radio interference caused by a cars generator?',
    info: '',
    answers: [{
      correct: false, text: 'Ühendada raadio toitejuhtmed akuga nii pikka teed mööda kui vähegi võimalik.',
    }, {
      correct: true, text: 'Ühendades raadio toitejuhtmed akuga lühimat võimalikku teed kaudu.',
    }, {
      correct: false, text: 'Ühendades kõrgpääsfiltri järjestikku raadiojaama auto pardavõrguga ühendavasse juhtmesse.',
    }, {
      correct: false, text: ' Lülitades filterkondensaatorid järjestikku alalisvoolu toitejuhtmesse.',
    }]
  }, {
    id: 'M9A-4',
    text: 'Kuidas saab vähendada väga tugeva signaali toimel vastuvõtjas tekkivaid intermodulatsioonihäireid?',
    enText: 'How can intermodulation interference caused by very strong signals in a receiver be reduced?',
    info: '',
    answers: [{
      correct: false, text: 'Vähendades vastuvõtja toitepinget.',
    }, {
      correct: true, text: 'Lülitades vastuvõtja sisendisse attenuaatori.',
    }, {
      correct: false, text: 'Kasutada vastuvõtja kõige kitsama pääsuribaga filtrit.',
    }, {
      correct: false, text: 'Kasutada vastuvõtja kõige laiema pääsuribaga filtrit.',
    }]
  }, {
    id: 'M9A-5',
    text: 'Miks on kasulik omada vastuvõtja sisendis attenuaatorit?',
    enText: 'Why is it useful to have an attenuator at the receiver input?',
    info: '',
    answers: [{
      correct: false, text: 'Vähendab vastuvõetava signaali ribalaiust.',
    }, {
      correct: false, text: 'Elimineerib isotroopilise kiirguse põhjustatud efekte.',
    }, {
      correct: true, text: 'Kaitseb vastuvõtja ülekoormamist erakordselt tugeva signaali poolt.',
    }, {
      correct: false, text: 'Vähendab antenni kiirgusdiagrammi nullide põhjustatud signaali nõrgenemise mõju.',
    }]
  }, {
    id: 'M9A-6',
    text: 'Teie naaber teatab,et tekitate häireid televisioonivastuvõtule.Teie olete aga kindel, et teie aparatuur töötab korralikult.Mida peate tegema?',
    enText: 'Your neighbor reports that he is causing interference with your television reception. However, you are sure that your equipment is working properly. What should you do?',
    info: '',
    answers: [{
      correct: false, text: 'Lülitate kohe oma saatja välja ja pöördute Tehnilise Järelevalve Ameti poole abi saamiseks.',
    }, {
      correct: true, text: 'Kontakteerudes naabriga proovite välja selgitada, kas tõepoolest teie töö eetris on TV-häirete tekkepõhjuseks.',
    }, {
      correct: false, text: 'Monteerite saatja väljundisse kõrgpääsfiltri ja televiisori sisendisse madal-pääsfiltri',
    }, {
      correct: false, text: 'Jätkate tööd tavalisel moel, kuna teil ei ole mingit legaalset põhjust interferents-häirete vähendamiseks või elimineerimiseks.',
    }]
  }, {
    id: 'M9A-7',
    text: 'Mis tüüpi filter tuleb kõigepealt paigaldada amatöörraadiojaama harmooniliste sageduste kiirguse vältimiseks?',
    enText: 'What type of filter should be installed first to prevent the emission of harmonic frequencies from an amateur radio station?',
    info: '',
    answers: [{
      correct: false, text: 'Võtmeklõpsu filter.',
    }, {
      correct: true, text: 'Madalpääsfilter.',
    }, {
      correct: false, text: 'Kõrgpääsfilter.',
    }, {
      correct: false, text: 'CW filter.',
    }]
  }, {
    id: 'M9A-8',
    text: 'Mis tüüpi interferentshäireid võib kiirata mitmebandi antenn,mis on ühendatud valesti häälestatud raadiojaama väljundisse?',
    enText: 'What type of interference can be emitted by a multiband antenna connected to the output of a mistuned radio station?',
    info: '',
    answers: [{
      correct: true, text: 'Harmoonilisi sagedusi.',
    }, {
      correct: false, text: 'Aurora taolisi signaale.',
    }, {
      correct: false, text: 'Parasiitsignaale.',
    }, {
      correct: false, text: 'Intermodulatsioonihäireid.',
    }]
  }, {
    id: 'M9A-9',
    text: 'Mida tähendab väljend "harmooniliste kiirgus"?',
    enText: 'What does the expression "harmonic radiation" mean?',
    info: '',
    answers: [{
      correct: true, text: 'Töösageduse täiskordsete sageduste kiirgus eetrisse.',
    }, {
      correct: false, text: '50 Hz brummsagedusega moduleeritud signaalide kiirgus.',
    }, {
      correct: false, text: 'Lähedal paiknevates teistes saatjates võib tekkida liitmodulatsioon teie saatja töö tõttu.',
    }, {
      correct: false, text: 'Signaalide saatmine F kihis raadiosignaale peegeldava sektori tekitamiseks.',
    }]
  }, {
    id: 'M9A-10',
    text: 'Milline filter tuleb paigutada televiisori sisendisse esmase abinõuna amatöörraadiojaama poolt tekitatud kõrgsagedusliku ülekoormuse vähendamiseks?',
    enText: 'What filter should be placed at the television input as a first step to reduce high-frequency overload caused by an amateur radio station?',
    info: '',
    answers: [{
      correct: true, text: 'Kõrgpääsfilter.',
    }, {
      correct: false, text: 'Madalpääsfilter.',
    }, {
      correct: false, text: 'Ribafilter.',
    }, {
      correct: false, text: 'Režektorfilter.',
    }]
  }]
}