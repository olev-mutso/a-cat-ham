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
    {
      id: 'M1A-15',
      text: 'Ligikaudu mitu detsibelli on vaevaltmärgatav helitugevuse muutus?',
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
