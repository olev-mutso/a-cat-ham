import { ExamApi } from '../exam-context';

//TODO CORRECT ANSWERS
export const M11A: ExamApi.ErauSubject = {
  id: 'M11A',
  title: 'Moodul M11A Amatöörraadiojaama opereerimise reeglid ja protseduurid',
  questions: [{
    id: 'M11A-1',
    text: 'Mis on kõige olulisem tegur töösageduse valikul teil kasutada lubatud sagedusalal?',
    enText: 'What is the most important factor in choosing the operating frequency within the frequency range you are allowed to use?',
    info: '',
    answers: [{
      correct: true, text: 'Sagedus ei tohi olla hõivatud teiste amatööride poolt.',
    }, {
      correct: false, text: 'Peate kuulma sel sagedusel mõnd jaama veendumaks et teid võidaks kuulda.',
    }, {
      correct: false, text: 'Teie antenn peab olema resonantsis antud sagedusel.',
    }, {
      correct: false, text: 'Peate veenduma,et seisulainetegur antenni toitejuhtmes oleks piisavalt kõrge.',
    }]
  }, {
    id: 'M11A-2',
    text: 'Soovite suvise päeva õhtupoolikul sidet saada amatööriga, kes asub teist ligikaudu 2000km eemal. Milline band sobiks edukaks sidepidamiseks kõige rohkem?',
    enText: 'You want to communicate with an amateur who is approximately 2000km away from you on a summer afternoon. Which band would be most suitable for successful communication?',
    info: '',
    answers: [{
      correct: false, text: '80 või 40 m band.',
    }, {
      correct: true, text: '40 või 15 m band.',
    }, {
      correct: false, text: '15 või 10 m band.',
    }, {
      correct: false, text: '2m või 23 cm band.',
    }]
  }, {
    id: 'M11A-3',
    text: 'Kuidas saab raadiojaama häälestamisel eetrisoleku aega viia miinimumini?',
    enText: 'How can you minimize the time spent on air when tuning a radio station?',
    info: '',
    answers: [{
      correct: false, text: 'Kasutades suvalise pikkusega antenni.',
    }, {
      correct: false, text: 'Häälestades jaama esmalt 40m bandil siis minna üle teistele bandidele.',
    }, {
      correct: true, text: 'Kasutades jaama häälestamiseks antenni ekvivalenti (dummy load).',
    }, {
      correct: false, text: 'Kasutades koaksiaalkaabli asemel lapikjuhet.',
    }]
  }, {
    id: 'M11A-4',
    text: 'Peate sidet oma sõbraga Tartust ja äkki kuulete oma sagedusel hädaabikutset. Mida teete?',
    enText: 'You are in touch with your friend in Tartu and suddenly you hear an emergency call on your frequency. What do you do?',
    info: '',
    answers: [{
      correct: false, text: 'Teatate jaamale, et sagedus on hõivatud.',
    }, {
      correct: true, text: 'Hakkate otsekohe hädaabikutse infovahetust kirja panema.',
    }, {
      correct: false, text: 'Helistate Päästeametisse.',
    }, {
      correct: false, text: 'Helistate Tehnilise Järelevalve Ametisse.',
    }]
  }, {
    id: 'M11A-5',
    text: 'Milline on Morsekoodis antud standardse väljakutse "CQ" formaat?',
    enText: 'What is the format of a standard "CQ" call in Morse code?',
    info: '',
    answers: [{
      correct: true, text: 'Saadate kolm korda "CQ", millele järgneb protseduurisignaal "DE" ja kolm korda oma kutsungi.',
    }, {
      correct: false, text: 'Saadate "CQ" kolm korda,"DE" üks kord ja oma kutsungi ka üks kord.',
    }, {
      correct: false, text: 'Saadate "CQ" kümme korda, "DE" üks kord ja oma kutsung üks kord.',
    }, {
      correct: false, text: 'Saadate pidevalt "CQ" kuni keegi kutsub teid.',
    }]
  }, {
    id: 'M11A-6',
    text: 'Kuidas te vastate "CQ" väljakutsele?',
    enText: 'How do you respond to the "CQ" challenge?',
    info: '',
    answers: [{
      correct: false, text: 'Saadate oma kutsungit neli korda.',
    }, {
      correct: true, text: 'Saadate teise jaama kutsungi kaks korda, "DE" ja oma kutsungi kaks korda.',
    }, {
      correct: false, text: 'Saadate teise jaama kutsungi üks kord,"DE" ja oma kutsungi neli korda.',
    }, {
      correct: false, text: 'Saadate oma kutsungi, nime, jaama asukoha ja signaali rapordi.',
    }]
  }, {
    id: 'M11A-7',
    text: 'Millise kiirusega tuleb saata "CQ"?',
    enText: 'At what speed should "CQ" be sent?',
    info: '',
    answers: [{
      correct: false, text: 'Aeglasemalt kui 25 märki minutis.',
    }, {
      correct: false, text: 'Suurima kiirusega, mida teie võti on võimeline arendama.',
    }, {
      correct: true, text: 'Kiirusega, millist olete ise võimeline korralikult vastu võtma.',
    }, {
      correct: false, text: 'Suurima kiirusegamillega olete võimeline oma võtit manipuleerima.',
    }]
  }, {
    id: 'M11A-8',
    text: 'Mis tähendus on Morsekoodi liittähtedel AR ?',
    enText: 'What is the meaning of the Morse code letters AR?',
    info: '',
    answers: [{
      correct: false, text: 'Vastaku ainult kutsutud jaam.',
    }, {
      correct: false, text: 'Kõik on korralikult vastu võetud.',
    }, {
      correct: true, text: 'Saate lõpp.',
    }, {
      correct: false, text: 'Parimad tervitused.',
    }]
  }, {
    id: 'M11A-9',
    text: 'Mida tähendavad Morsekoodis saadetud liittähed SK ?',
    enText: 'What do the compound letters SK sent in Morse code mean?',
    info: '',
    answers: [{
      correct: false, text: 'Enam-vähem korralikult vastu võetud.',
    }, {
      correct: false, text: 'Parimad tevitused.',
    }, {
      correct: true, text: 'Side lõpp.',
    }, {
      correct: false, text: 'Oodake.',
    }]
  }, {
    id: 'M11A-10',
    text: 'Mida tähendavad Morsekoodis saadetud liittähed KN ?',
    enText: 'What do the compound letters KN sent in Morse code mean?',
    info: '',
    answers: [{
      correct: false, text: 'Murrujoon.',
    }, {
      correct: false, text: 'Side lõpp.',
    }, {
      correct: true, text: 'Vastaku ainult kutsutud jaam.',
    }, {
      correct: false, text: 'Saatke nüüd.',
    }]
  }, {
    id: 'M11A-11',
    text: 'Milleks kasutatakse signaali "CQ" ?',
    enText: 'What is the "CQ" signal used for?',
    info: '',
    answers: [{
      correct: false, text: 'Teisele jaamale märguandmiseks, et kutsute teda veerand tunni pärast.',
    }, {
      correct: false, text: 'Märguandmiseks,et proovite uut antenni ja väljakutsetele ei vasta.',
    }, {
      correct: true, text: 'Üldväljakutse märkimaks,et üritate kellegagi ühendust luua.',
    }, {
      correct: false, text: 'Ainult kutsutud jaam tohib vastata.',
    }]
  }, {
    id: 'M11A-12',
    text: 'Mida tähendab lühend QRS ?',
    enText: 'What does the abbreviation QRS mean?',
    info: '',
    answers: [{
      correct: false, text: 'Mind segavad staatilised häired.',
    }, {
      correct: true, text: 'Saatke aeglasemalt.',
    }, {
      correct: false, text: 'Saatke RST raport.',
    }, {
      correct: false, text: 'Raadiojaama asukoht on ...',
    }]
  }, {
    id: 'M11A-13',
    text: 'Mida tähendab lühend QTH ?',
    enText: 'What does the abbreviation QTH mean?',
    info: '',
    answers: [{
      correct: false, text: 'Kellaaeg on ...',
    }, {
      correct: false, text: 'Minu nimi on ...',
    }, {
      correct: true, text: 'Minu asukoht on ...',
    }, {
      correct: false, text: 'Lõpetage saatmine.',
    }]
  }, {
    id: 'M11A-14',
    text: 'Milline on standardse telefoniväljakutse formaat?',
    enText: 'What is the format of a standard telephone call?',
    info: '',
    answers: [{
      correct: false, text: 'Saadate teise jaama kutsungi vähemalt kümme korda, siis sõnad "this is", seejärel oma kutsung vähemalt kaks korda.',
    }, {
      correct: false, text: 'Saadate fraasi "CQ" vähemalt viis korda, siis "this is" ja oma kutsung üks kord.',
    }, {
      correct: true, text: 'Saadate fraasi "CQ" kolm korda, "this is" ja oma kutsungi kolm korda.',
    }, {
      correct: false, text: 'Saadate fraasi "CQ" vähemalt kümme korda, "this is" ja oma kutsungi ühe korra.',
    }]
  }, {
    id: 'M11A-15',
    text: 'Kuidas te vastate raadiotelefoni väljakutsele?',
    enText: 'How do you respond to the radiotelephone challenge?',
    info: '',
    answers: [{
      correct: false, text: 'Saadate teise jaama kutsungit kümme korda ,siis "this is" ja oma kutsungit vähe-malt kaks korda.',
    }, {
      correct: false, text: 'Saadate teise jaama kutsungit veerimistabelit kasutades vähemalt viis korda, "this is" ja oma kutsungit vähemalt üks kord.',
    }, {
      correct: true, text: 'Saadate teise jaama kutsungit ühe korra,"this is" ja oma kutsungit veerimista-belit kasutades ühe korra.',
    }, {
      correct: false, text: 'Saadate teise jaama kutsungit kolm korda, "this is" ja oma kutsungit veerimistabelit kasutades vähemalt viis korda.',
    }]
  }, {
    id: 'M11A-16',
    text: 'Kuidas tuleb veerimistabeli abil saata kutsung ES9A ?',
    enText: 'How should the call sign ES9A be sent using the scrolling table?',
    info: '',
    answers: [{
      correct: false, text: 'Eemeli Sagari Nine Aarne.',
    }, {
      correct: true, text: 'Echo Sierra Nine Alfa.',
    }, {
      correct: false, text: 'Edward Santiago Nine Alabama.',
    }, {
      correct: false, text: 'Echo Sugar Nine America.',
    }]
  }, {
    id: 'M11A-17',
    text: 'Kuidas veeritakse kutsungit AE0LQY ?',
    enText: 'How is the call sign AE0LQY spelled?',
    info: '',
    answers: [{
      correct: false, text: 'Able Easy Zero Lima Quebec Yankee.',
    }, {
      correct: false, text: 'Arizona Equador Zero London Queen Yesterday.',
    }, {
      correct: true, text: 'Alfa Echo Zero Lima Quebec Yankee.',
    }, {
      correct: false, text: 'Able Easy Zero Love Queen Yoke.',
    }]
  }, {
    id: 'M11A-18',
    text: 'Mida tähendab lühend AS ?',
    enText: 'What does the abbreviation AS mean?',
    info: '',
    answers: [{
      correct: false, text: 'Aktsiaselts.',
    }, {
      correct: false, text: 'Asu saatele.',
    }, {
      correct: true, text: 'Oodake.',
    }, {
      correct: false, text: 'Mis on teie nimi?',
    }]
  }, {
    id: 'M11A-19',
    text: 'Mida tähendab R RST signaali raportis?',
    enText: 'What does R mean in the RST signal report?',
    info: '',
    answers: [{
      correct: false, text: 'Signaali taastumist.',
    }, {
      correct: false, text: 'CW tooni resonantsi.',
    }, {
      correct: true, text: 'Signaali loetavust.',
    }, {
      correct: false, text: 'Signaalitugevuse värelemise astet.',
    }]
  }, {
    id: 'M11A-20',
    text: 'Mida tähendab lühend QSL?',
    enText: 'What does the abbreviation QSL mean?',
    info: '',
    answers: [{
      correct: false, text: 'Kas pean saatma teile oma jaamapäeviku?',
    }, {
      correct: true, text: 'Kas võite kinnitada minu saadetud teate kättesaamist?',
    }, {
      correct: false, text: 'Kas pean saatma aeglasemalt?',
    }, {
      correct: false, text: 'Kes mind kutsub?',
    }]
  }]
}