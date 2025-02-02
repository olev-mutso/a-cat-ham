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
      id: 'M1A-5',
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
  ]
}
