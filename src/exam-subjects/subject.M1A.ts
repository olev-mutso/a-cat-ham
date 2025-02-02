import { ExamApi } from '../exam-context';


export const M1A: ExamApi.ErauSubject = {
  id: 'M1A',
  title: 'Moodul M1A Raadio- ja elektrotehnika teooria.',
  questions: [{
    id: 'M1A-1',
    text: 'Mida tähendab termin impedants?',
    info: '',
    answers: [{
      correct: false, text: 'Kondensaatoris salvestatavat elektrilaengut.',
    }, {
      correct: true, text: 'Vooluringi poolt vahelduvvoolule osutatavat takistust.',
    }, {
      correct: false, text: 'Mahtuvust sisaldava vooluringi poolt vahelduvvoolule osutatavat takistust.',
    }, {
      correct: false, text: 'Juhtivust',
    }]
  }, {
      id: 'M1A-2',
      text: 'Kuidas nimetatakse mahtuvust ja induktiivsust sisaldava vooluringi poolt vahelduvvoole osutatavat takistust?',
      info: '',
      answers: [{
        correct: false, text: 'Oom.'
      }, {
        correct: false, text: 'Dzhaul.'
      }, {
        correct: true, text: 'Impedants.'
      }, {
        correct: false, text: 'Juhtivuseks.'
      }]
    }, {
      id: 'M1A-3',
      text: 'Kuidas nimetatatkse induktiivsuse poolt vahelduvvoolule osutatavat takistust?',
      info: '',
      answers: [{
        correct: false, text: 'Takistus.'
      }, {
        correct: true, text: 'Reaktiivtakistus.'
      }, {
        correct: false, text: 'Näivjuhtivus.'
      }, {
        correct: false, text: 'Impedants.'
      }]
    }, {
      id: 'M1A-4',
      text: 'Kuidas nimetatatkse mahtuvuse poolt vahelduvvoolule osutatavat takistust',
      info: '',
      answers: [{
        correct: false, text: 'Takistus.'
      }, {
          correct: true, text: 'Reaktiivtakistus.'
        }, {
          correct: false, text: 'Näivjuhtivus.'
        }, {
          correct: false, text: 'Impedants.'
        }]
    }, {
      id: 'M1A-5',
      text: 'Kuidas reageerib induktiivsus vahelduvvoolule?',
      info: '',
      answers: [{
        correct: false, text: 'Vahelduvvoolu sageduse suurenedes reaktiivtakustus väheneb.'
      }, {
        correct: false, text: 'Vahelduvvoolu amplituude suurenedes suureneb ka reaktiivtakistus.'
      }, {
        correct: true, text: 'Vahelduvvoolu sageduse suurenedes reaktiivsus suureneb.'
      }, {
        correct: false, text: 'Vahelduvvoolu amplituude suurenedes väheneb reaktiivtakistus.'
      }]
    }, {
    id: 'M1A-6',
      text: 'Kuidas reageerib mahtuvus vahelduvvoolule?',
      info: '',
      answers: [{
        correct: true, text: 'Vahelduvvoolu sageduse suurenedes reaktiivtakustus väheneb.'
      }, {
        correct: false, text: 'Vahelduvvoolu amplituude suurenedes suureneb ka reaktiivtakistus.'
      }, {
        correct: false, text: 'Vahelduvvoolu sageduse suurenedes reaktiivsus suureneb.'
      }, {
        correct: false, text: 'Vahelduvvoolu amplituude suurenedes reaktiivtakistus väheneb.'
      }]
    },
    {
      id: 'M1A-7',
      text: 'Millal annab toiteallikas maksimaalse väljundenergia?',
      info: '',
      answers: [{
        correct: true, text: 'Juhul kui koormusimpedants on võrdne vooluallika impedantsiga.'
      }, {
        correct: false, text: 'Kui seisulainetegur on saavutanud maksimaalväärtuse.'
      }, {
        correct: false, text: 'Kui raudsüdamikuga transformaatori asemel kasutatakse õhksüdamikuga transformaatorit.'
      }, {
        correct: false, text: 'Kui kasutatakse toroidtransformaatorit.'
      }]
    },
    {
      id: 'M1A-8',
      text: 'Mida tähendab termin impedantside sobitamine?',
      info: '',
      answers: [{
        correct: false, text: 'Koormusimpedantsi toiteallika impedantsist palju suuremaks tegemine.'
      }, {
        correct: true, text: 'Koormusimpedantsi võrdsustamine toiteallika impedantsiga.'
      }, {
        correct: false, text: 'Baluni kasutamine antenni toitepunktis.'
      }, {
        correct: false, text: 'Saatja väljundimpedantsiga võrdse takistusega toitekaabli kasutamine.'
      }]
    },
    {
      id: 'M1A-9',
      text: 'Mis juhtub kui elektrilise koormuse impedants on võrdne toiteallika impedantsiga?',
      info: '',
      answers: [{
        correct: false, text: 'Toiteallikas juhib koormusesse minimaalse võimsuse.'
      }, {
        correct: false, text: 'Vool katkeb vooluahelas.'
      }, {
        correct: true, text: 'Toiteallikas juhib koormusesse maksimaalse võimsuse.'
      }, {
        correct: false, text: 'Väljundvõimsus langeb poole võrra.'
      }]
    },
    {
      id: 'M1A-10',
      text: 'Miks on impedantside sobitamine raadiotehnikas väga oluline?',
      info: '',
      answers: [{
        correct: true, text: 'Võimaldab toiteallikast juhtida koormusesse maksimaalse võimsuse.'
      }, {
        correct: false, text: 'Kindlustab vooluringi aktiiv- ja reaktiivtakistuse võrdsuse.'
      }, {
        correct: false, text: 'Kindlustab minimaalse võimsuse saamise toitallikast.'
      }, {
        correct: false, text: 'Vähendab elektrivõrgust tarbitavat võimsust.'
      }]
    },
    {
      id: 'M1A-11',
      text: 'Milline on reaktiivtakistuse mõõtühik?',
      info: '',
      answers: [{
        correct: true, text: 'Oom.'
      }, {
        correct: false, text: 'Volt.'
      }, {
        correct: false, text: 'Amper.'
      }, {
        correct: false, text: 'Siimens.'
      }]
    },
    {
      id: 'M1A-12',
      text: 'Milline on impedantsi mõõtühik?',
      info: '',
      answers: [{
        correct: true, text: 'Oom.'
      }, {
        correct: false, text: 'Volt.'
      }, {
        correct: false, text: 'Amper.'
      }, {
        correct: false, text: 'Siimens.'
      }]
    },
    {
      id: 'M1A-13',
      text: 'Mis on Bell?',
      info: '',
      answers: [{
        correct: false, text: 'Mahtuvuse muutumise mõõtühik.'
      }, {
        correct: false, text: 'Induktiivsuse muutumise mõõtühik.'
      }, {
        correct: true, text: 'Erinevate võimsuste suhte suurust väljendav ühik.'
      }, {
        correct: false, text: 'Seisulaine suhte mõõtühik.'
      }]
    },
    {
      id: 'M1A-14',
      text: 'Mis on detsibell?',
      info: '',
      answers: [{
        correct: true, text: 'Võimsusnivoode suhte muutumine 0,1 Belli võrra.'
      }, {
        correct: false, text: 'Võimsusnivoode suhte muutumine 0,01 Belli võrra.'
      }, {
        correct: false, text: 'Võimsusnivoode suhte muutumine 10 Belli võrra.'
      }, {
        correct: false, text: 'Võimsusnivoode suhte muutumine 0;001 Belli võrra.'
      }]
    },
  ]
}
