import { ExamApi } from '../exam-context';

export const M6A: ExamApi.ErauSubject = {
  id: 'M6A',
  title: 'Moodul M6A Antennid ja fiidrid.',
  questions: [{
    id: 'M6A-1',
    text: 'Miks kasutatakse sagedasti Yagi antenni 50 MHz sagedusalal?',
    enText: 'Why is a Yagi antenna often used in the 50 MHz frequency band?',
    info: '',
    answers: [{
      correct: false, text: 'Annab horisontaaltasapinnas hea ringkiirguse.',
    }, {
      correct: false, text: 'On väiksem, odavam ja kergem üles panna kui dipoolantenn.',
    }, {
      correct: true, text: 'Vähendab teiste jaamade poolt tekitatavaid interferentshäireid nii külg- kui tagasuunas.',
    }, {
      correct: false, text: 'Ei võta niipalju ruumi kui teised antennid.',
    }]
  }, {
    id: 'M6A-2',
    text: 'Milline meetod on parim ebasümmeetrilise koaksiaalkaabli sobitamiseks Yagi antenniga?',
    enText: 'What is the best method for matching an unbalanced coaxial cable to a Yagi antenna?',
    info: '',
    answers: [{
      correct: false, text: '“T” -sobitus.',
    }, {
      correct: false, text: 'Delta sobitus.',
    }, {
      correct: true, text: 'Gamma sobitus.',
    }, {
      correct: false, text: 'Hairpin – sobitus.',
    }]
  }, {
    id: 'M6A-3',
    text: 'Kuidas saab suurendada parasiitelementidega suundantenni sagedusriba laiust?',
    enText: 'How can the bandwidth of a directional antenna be increased with parasitic elements?',
    info: '',
    answers: [{
      correct: true, text: 'Kasutada suurema läbimõõduga elemente.',
    }, {
      correct: false, text: 'Vähendada elementide vahet.',
    }, {
      correct: false, text: 'Kasutada teleskoopelemente.',
    }, {
      correct: false, text: 'Suurendada elementide arvu.',
    }]
  }, {
    id: 'M6A-4',
    text: 'Kui suur on poollaine dipoolantenni toitepunkti impedants vabas ruumis?',
    enText: 'What is the impedance of the feed point of a half-wave dipole antenna in free space?',
    info: '',
    answers: [{
      correct: false, text: 'Ligikaudu 50 oomi, takistuslik.',
    }, {
      correct: false, text: 'Ligikaudu 73 oomi, takistuslik ja induktiivne.',
    }, {
      correct: true, text: 'Ligikaudu 73 oomi, takistuslik.',
    }, {
      correct: false, text: '300 oomi, takistslik.',
    }]
  }, {
    id: 'M6A-5',
    text: 'Kui suur on dipoolantenni võimendus võrreldes isotroopse kiirgajaga?',
    enText: 'How much is the gain of a dipole antenna compared to an isotropic radiator?',
    info: '',
    answers: [{
      correct: false, text: 'On võrdse võimendusega.',
    }, {
      correct: true, text: 'Dipoolantenni võimendus on ligikaudu 2,3dB suurem.',
    }, {
      correct: false, text: 'Dipoolantenni võimendus on 5,6dB.',
    }, {
      correct: false, text: 'Dipoolantenni võimendus on 4,3dB.',
    }]
  }, {
    id: 'M6A-6',
    text: 'Mida tähendab termin ette-taha suhe?',
    enText: 'What does the term front-to-back ratio mean?',
    info: '',
    answers: [{
      correct: false, text: 'Direktorite ja reflektorite arvu suhet.',
    }, {
      correct: true, text: 'Antenni peakiire suunas kiiratava võimsuse ja täpselt vastassuunalise kiirgusvõimsuse suhet.',
    }, {
      correct: false, text: 'Aktiivse vibraatori asendit reflektori ja direktorite suhtes.',
    }, {
      correct: false, text: 'Reflektori ja vibraatoritepoolse poomipikkuse suhet.',
    }]
  }, {
    id: 'M6A-7',
    text: 'Miks kasutatakse silikoonõli või autovaha TV-tüüpi lapikkaabli pinna katteks?',
    enText: 'Why is silicone oil or car wax used to coat the surface of TV-type flat cable?',
    info: '',
    answers: [{
      correct: false, text: 'Skin- efekti vähendamiseks.',
    }, {
      correct: true, text: 'Mustuse ja niiskuse sadestumise vähendamiseks juhtmel.',
    }, {
      correct: false, text: 'Soojuse ärajuhtimiseks töötades kõrge seisulainega liinis.',
    }, {
      correct: false, text: 'Lindude eemalepeletamiseks antenni juurest.',
    }]
  }, {
    id: 'M6A-8',
    text: 'Mis ühikutes väljendatakse kõrgsagedusliku toiteliini kadusid?',
    enText: 'In what units are high-frequency power line losses expressed?',
    info: '',
    answers: [{
      correct: false, text: 'dB/km.',
    }, {
      correct: false, text: 'Bell/100m.',
    }, {
      correct: true, text: 'dB/100m.',
    }, {
      correct: false, text: 'Neper meetrile.',
    }]
  }, {
    id: 'M6A-9',
    text: 'Mis juhtub dielektrikuskadudega toiteliinis töösageduse suurenemisel?',
    enText: 'What happens to dielectric losses in a power line as the operating frequency increases?',
    info: '',
    answers: [{
      correct: false, text: 'Kaod vähenevad.',
    }, {
      correct: true, text: 'Kaod suurenevad.',
    }, {
      correct: false, text: 'Kaod jäävad samaks.',
    }, {
      correct: false, text: 'Kadude tõttu hakkab toitekaabel kuumenema.',
    }]
  }, {
    id: 'M6A-10',
    text: 'Kuidas mõjutab koaksiaalkaabli impedants teda läbiva signaali sumbuvust?',
    enText: 'How does the impedance of a coaxial cable affect the attenuation of a signal passing through it?',
    info: '',
    answers: [{
      correct: true, text: 'Sumbuvus on suurem sagedustel üle 144 MHz.',
    }, {
      correct: false, text: 'Sumbuvus on väiksem sagedustel üle 144 MHz.',
    }, {
      correct: false, text: 'Sumbuvus on sagedustel kuni 1,5GHz enamvähem ühtlane',
    }, {
      correct: false, text: 'Sumbuvus on enamvähem ühtlane sagedustel kuni 200 GHz.',
    }]
  }
  ]
}