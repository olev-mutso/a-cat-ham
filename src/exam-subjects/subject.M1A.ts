import { ExamApi } from '../exam-context';


export const M1A: ExamApi.ErauSubject = {
  id: 'M1A',
  title: 'Moodul M1A Raadio- ja elektrotehnika teooria.',
  questions: [{
    id: 'M1A-1',
    text: 'Mida tähendab termin impedants?',
    enText: 'What does the term impedance mean?',
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
    enText: 'What is the name given to the resistance offered to alternating current by a circuit containing capacitance and inductance?',
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
    enText: 'What is the name given to the resistance offered by an inductance to alternating current?',
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
    enText: 'What is the name given to the resistance offered by capacitance to alternating current?',
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
    enText: 'How does inductance respond to alternating current?',
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
    enText: 'How does capacitance respond to alternating current?',
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
      enText: 'When does a power supply provide maximum output power?',
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
      enText: 'What does the term impedance matching mean?',
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
      enText: 'What happens when the impedance of an electrical load is equal to the impedance of the power source?',
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
      enText: 'Why is impedance matching very important in radio engineering?',
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
      enText: 'What is the unit of measurement for reactance?',
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
      enText: 'What is the unit of measurement for impedance?',
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
      enText: 'What is a Bell?',
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
      enText: 'What is a decibel?',
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
    {
      id: 'M1A-15',
      text: 'Ligikaudu mitu detsibelli on vaevaltmärgatav helitugevuse muutus?',
      enText: 'Approximately how many decibels is a barely noticeable change in volume?',
      info: '',
      answers: [{
        correct: false, text: '12 dB.'
      }, {
        correct: false, text: '6 dB.'
      }, {
        correct: true, text: '1 dB.'
      }, {
        correct: false, text: '3 dB.'
      }]
    },
    {
      id: 'M1A-16',
      text: 'Võimsuse suurenemine kaks korda on detsibellides:',
      enText: 'The power increase by two times is in decibels:',
      info: '',
      answers: [{
        correct: false, text: '1 dB.'
      }, {
        correct: true, text: '3 dB.'
      }, {
        correct: false, text: '6 dB.'
      }, {
        correct: false, text: '12 dB.'
      }]
    },
    {
      id: 'M1A-17',
      text: 'Mitu korda suureneb võimsus 6 dB puhul?',
      enText: 'How many times does the power increase for a 6 dB increase?',
      info: '',
      answers: [{
        correct: false, text: '1,5 korda.'
      }, {
        correct: false, text: '2 korda.'
      }, {
        correct: true, text: '4 korda.'
      }, {
        correct: false, text: '0,5 korda.'
      }]
    },
    {
      id: 'M1A-18',
      text: 'Mitu korda suureneb võimsus 3 dB puhul?',
      enText: 'How many times does the power increase for 3 dB?',
      info: '',
      answers: [{
        correct: false, text: '1,5 korda.'
      }, {
        correct: true, text: '2 korda.'
      }, {
        correct: false, text: '4 korda.'
      }, {
        correct: false, text: '0,5 korda.'
      }]
    },
    {
      id: 'M1A-19',
      text: 'Signaali raport on ”10 dB üle S9”.Kui saatja võimsust vähendatakse 1500 vatilt 150 vatini kui suur on uus signaali tugevuse raport?',
      enText: 'The signal report is “10 dB above S9”. If the transmitter power is reduced from 1500 watts to 150 watts, what is the new signal strength report?',
      info: '',
      answers: [{
        correct: false, text: 'S5.'
      }, {
        correct: false, text: 'S7.'
      }, {
        correct: true, text: 'S9.'
      }, {
        correct: false, text: 'S3.'
      }]
    },
    {
      id: 'M1A-20',
      text: 'Signaali raport on “20 dB üle S9”.Kui saatja võimsust vähendatakse 1500 vatilt 15 vatini kui suur on uus signaali tugevuse raport?',
      enText: 'The signal report is “20 dB above S9”. If the transmitter power is reduced from 1500 watts to 15 watts, what is the new signal strength report?',
      info: '',
      answers: [{
        correct: false, text: 'S5.'
      }, {
        correct: false, text: 'S7.'
      }, {
        correct: true, text: 'S9.'
      }, {
        correct: false, text: 'S3.'
      }]
    },
    {
      id: 'M1A-21',
      text: 'Kui 1 amprilise vooluallikaga on ühendatud kaks paralleelselt lülitatud 10-oomist takistit kui suur vool läbib kumbagi takistit?',
      enText: 'If two 10-ohm resistors are connected in parallel to a 1-ampere current source, how much current will flow through each resistor?',
      info: '',
      answers: [{
        correct: false, text: '10 amprit.'
      }, {
        correct: false, text: '1 amper.'
      }, {
        correct: true, text: '0,5 amprit.'
      }, {
        correct: false, text: '0,25 amprit.'
      }]
    },
    {
      id: 'M1A-22',
      text: 'Kui suur on kasutatav võimsus kui 400V pingega vooluallikas ühendatakse 800 oomise koormusega?',
      enText: 'How much power is used when a 400V power source is connected to an 800 ohm load?',
      info: '',
      answers: [{
        correct: false, text: '0,5 vatti.'
      }, {
        correct: true, text: '200 vatti.'
      }, {
        correct: false, text: '400 vatti.'
      }, {
        correct: false, text: '800 vatti.'
      }]
    },
    {
      id: 'M1A-23',
      text: 'Kui suur on 12V 0.2A vooluga indikaatorlambi võimsus?',
      enText: 'What is the power of a 12V 0.2A indicator lamp?',
      info: '',
      answers: [{
        correct: false, text: '60 vatti.'
      }, {
        correct: false, text: '24 vatti.'
      }, {
        correct: true, text: '2,4 vatti.'
      }, {
        correct: false, text: '0,24 vatti.'
      }]
    },
    {
      id: 'M1A-24',
      text: 'Kui suur võimsus eraldub 0,25 kilo-oomisel takistil kui teda läbib vool tugevusega 7,0 milliamprit?',
      enText: 'How much power is dissipated in a 0.25 kilo-ohm resistor when a current of 7.0 milliamperes flows through it?',
      info: '',
      answers: [{
        correct: false, text: 'Ligikaudu 51 millivatti.'
      }, {
        correct: false, text: 'Ligikaudu 39 millivatti.'
      }, {
        correct: true, text: 'Ligikaudu 9 millivatti.'
      }, {
        correct: false, text: 'Ligikaudu 0,9 millivatti.'
      }]
    },
    {
      id: 'M1A-25',
      text: 'Kui suur on mitmest takistist koosneva jadalülituse kogutakistus?',
      enText: 'What is the total resistance of a series circuit consisting of several resistors?',
      info: '',
      answers: [{
        correct: true, text: 'Kogutakistus on võrdne kõikide takistite takistuste summaga.'
      }, {
        correct: false, text: 'Kogutakistus on väiksem kõige väiksema takisti takistuse väärtusest.'
      }, {
        correct: false, text: 'Kogutakistuse saame jagades takistite takistuste summa takistite arvuga.'
      }, {
        correct: false, text: 'Iga takisti tolerantsi tuleb suurendada proportsionaalselt takistite arvule.'
      }]
    },
    {
      id: 'M1A-26',
      text: 'Kui suur on kahe võrdse paralleelselt lülitatud takistist koosneva ahela kogutakistus?',
      enText: 'What is the total resistance of a circuit consisting of two equal resistors connected in parallel?',
      info: '',
      answers: [{
        correct: false, text: 'Kahekordne ühe takisti takistuse väärtus.'
      }, {
        correct: true, text: 'Pool kummagi takisti takistuse väärtusest.'
      }, {
        correct: false, text: 'Kahekordne kummagi takisti väärtus.'
      }, {
        correct: false, text: 'Ei saa määrata takistite täpset takistust teadmata.'
      }]
    },
    {
      id: 'M1A-27',
      text: 'Mis on detsibell?',
      enText: 'What is a decibel?',
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
    {
      id: 'M1A-28',
      text: 'Kui suur on kahe paralleelselt ühendatud induktiivsuse koguväärtus?',
      enText: 'What is the total value of two inductances connected in parallel?',
      info: '',
      answers: [{
        correct: false, text: 'Pool kummagi väärtusest vastastikust induktiivsust arvestamata.'
      }, {
        correct: false, text: 'Kahekordne kummagi induktiivsuse väärtus.'
      }, {
        correct: false, text: 'Kahekordne kummagi induktiivsuse väärtus.'
      }, {
        correct: true, text: 'Ei saa määrata induktiivsuste täpset suurust teadmata.'
      }]
    },
    {
      id: 'M1A-29',
      text: 'Kui suur on pinge transformaatori 500 keerust koosneva sekundaarmähise klemmidel, kui 2200 keerust koosnev primaarmähis on lülitatud 220V vahelduvvooluvõrku?',
      enText: 'What is the voltage at the terminals of the secondary winding of a transformer with 500 turns when the primary winding with 2200 turns is connected to a 220V AC network?',
      info: '',
      answers: [{
        correct: false, text: '526,5V.'
      }, {
        correct: true, text: '50V.'
      }, {
        correct: false, text: '26V.'
      }, {
        correct: false, text: '13V'
      }]
    },
    {
      id: 'M1A-30',
      text: 'Kui suur on 200 oomise väljundtakistusega helisagedusvõimendi sobitamiseks 10-oomise valjuhääldiga vajaliku transformaatori mähiste keerdude suhe?',
      enText: 'What is the turns ratio of the transformer windings required to match an audio frequency amplifier with an output impedance of 200 ohms to a 10 ohm loudspeaker?',
      info: '',
      answers: [{
        correct: true, text: '4.47 : 1.'
      }, {
        correct: false, text: '400: 1.'
      }, {
        correct: false, text: '20 : 1.'
      }, {
        correct: false, text: '10:1.'
      }]
    },
  ]
}
