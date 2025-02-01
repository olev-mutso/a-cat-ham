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
  }]
}
