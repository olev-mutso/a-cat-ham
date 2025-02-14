import { ExamApi } from '../exam-context';

export const M10A: ExamApi.ErauSubject = {
  id: 'M10A',
  title: 'Moodul M10A Ohutustehnika',
  questions: [{
    id: 'M10A-1',
    text: 'Milline inimese keha organ on kõige tundlikum kõrgsagedusliku energia poolt põhjustatud kudede kuumenemise suhtes?',
    enText: 'Which organ in the human body is most sensitive to tissue heating caused by high-frequency energy?',
    info: '',
    answers: [{
      correct: true, text: 'Silmad.',
    }, {
      correct: false, text: 'Käed.',
    }, {
      correct: false, text: 'Süda.',
    }, {
      correct: false, text: 'Maks.',
    }]
  }, {
    id: 'M10A-2',
    text: 'Tugev kõrgsagedusenergia kiirgus võib olenevalt lainepikkusest , kõrgsagedus-välja intensiivsusest ja muudest teguritest rikkuda inimkeha kudesid. Kuidas mõjub kiirgus kehakudedele?',
    enText: 'Strong high-frequency energy radiation can damage human body tissues, depending on the wavelength, high-frequency field intensity, and other factors. How does radiation affect body tissues?',
    info: '',
    answers: [{
      correct: false, text: 'Kutsub esile kiiritushaiguse.',
    }, {
      correct: true, text: 'Kuumendab kudesid.',
    }, {
      correct: false, text: 'Jahutab kudesid.',
    }, {
      correct: false, text: 'Põhjustab kudedes geneetilisi muutusi.',
    }]
  },{
    id: 'M10A-3',
    text: 'Kui suur võib maksimaalselt olla inimkeha läbiv vahelduvvool, mis endast ei kujuta veel ohtu?',
    enText: 'What is the maximum alternating current that can pass through the human body without posing a danger?',
    info: '',
    answers: [{
      correct: false, text: '1000A',
    }, {
      correct: false, text: '0,1A',
    }, {
      correct: true, text: '10mA',
    }, {
      correct: false, text: '50uA',
    }]
  },{
    id: 'M10A-4',
    text: 'Mida tuleb teha kõigepealt kui näed voolujuhtmetesse kinnijäänud inimest?',
    enText: 'What should you do first if you see someone stuck in power lines?',
    info: '',
    answers: [{
      correct: true, text: 'Hakkad otsima telefoni, et abi kutsuda.',
    }, {
      correct: false, text: 'Mingi voolu mittejuhtiva eseme abil vabastad kannatanu juhtmetest ja alustad kohe südame kaudse massaaži ja kunstliku hingamise tegemist samaaegselt hüüdes abi järele.',
    }, {
      correct: false, text: 'Viskad elektrijuhtmetele mingi maandusjuhtme.',
    }, {
      correct: false, text: 'Otsid lülitit, et vool välja lülitada.',
    }]
  },{
    id: 'M10A-5',
    text: 'Kui tahad teha mõningaid häälestusoperatsioone oma VHF/UHF raadiojaama juures,mida peab tegema enne jaama sisselülitamist?',
    enText: 'If you want to perform some tuning operations on your VHF/UHF radio station, what should you do before turning on the station?',
    info: '',
    answers: [{
      correct: false, text: 'Tuleb maha võtta kõik varjestused-ekraanid maksimaalse jahutuse saamiseks.',
    }, {
      correct: false, text: 'Lülitada sisse mürasild interferentshäirete vähendamiseks.',
    }, {
      correct: true, text: 'Tuleb veenduda,et kõik varjestused on kinnitatud oma kohale.',
    }, {
      correct: false, text: 'Vaadata,et interferentshäirete vältimiseks ükski antenn ei oleks jaama külge ühendatud.',
    }]
  },{
    id: 'M10A-6',
    text: 'Mida peab silmas pidama kui taod antennimasti tõmmitsate kinnitusvaiu maasse?',
    enText: 'What should you keep in mind when driving an antenna mast into the ground?',
    info: '',
    answers: [{
      correct: false, text: 'Et vai ei asuks antennimastile liialt lähedal.',
    }, {
      correct: false, text: 'Et vai oleks küllaldase pikkusega.',
    }, {
      correct: true, text: 'Et löögisuuna pikendusel ei seisaks inimesi, keda varre otsast juhuslikult äralendav kirves või vasar võiks vigastada.',
    }, {
      correct: false, text: 'Kas löögiriista vars on küllaldase pikkusega.',
    }]
  },{
    id: 'M10A-7',
    text: 'Mida tuleb jälgida raiudes puid välipäeva või kokkutuleku lõkke jaoks?',
    enText: 'What should you keep in mind when cutting wood for a campfire or a gathering?',
    info: '',
    answers: [{
      correct: false, text: 'Kas puud on küllaldaselt kuivad.',
    }, {
      correct: true, text: 'Tuleb seista jalad harki, et juhuslikul puust möödalöömisel kirves ei tabaks jalgu.',
    }, {
      correct: false, text: 'Usaldada see töö kellelegi teisele.',
    }, {
      correct: false, text: 'Mõelda sellele, kas raieluba sai hangitud.',
    }]
  },{
    id: 'M10A-8',
    text: 'Mida tuleb silmas pidada antennimasti püstitamisel või antenni vedamisel majade vahele?',
    enText: 'What should be kept in mind when erecting an antenna mast or moving an antenna between houses?',
    info: '',
    answers: [{
      correct: false, text: 'Kas antenn maast vaadatuna jätab kena mulje.',
    }, {
      correct: false, text: 'Ega antenn mitte kuskil naabrimehe krundi nurgast üle ei käiks.',
    }, {
      correct: true, text: 'Et antenn püstitamisel, pööramisel või tuule käes kõikudes mitte kuskil ei puudutaks elektriülekandeliinide juhtmeid.',
    }, {
      correct: false, text: 'Et tõmmitsad ei oleks liialt pingule tõmmatud.',
    }]
  },{
    id: 'M10A-9',
    text: 'Tehes tööd kõrgel antennimasti otsas tuleb jälgida et....',
    enText: 'Tehes tööd kõrgel antennimasti otsas tuleb jälgida et....',
    info: '',
    answers: [{
      correct: false, text: 'Lähiajal ei oleks oodata piksevihma.',
    }, {
      correct: true, text: 'Kasutatavad tööriistad oleksid paigutatud ja kinnitatud selliselt, et nad ei saaks allolijatele pähe kukkuda.',
    }, {
      correct: false, text: 'Kas kõik vajalik on kaasas, et ei peaks mitu korda üles - alla ronima.',
    }, {
      correct: false, text: 'Et jalanõude tallad ei oleks libedad.',
    }]
  },{
    id: 'M10A-10',
    text: 'Kui oled autoga sõitnud välipäevale peab silmas pidama.',
    enText: 'If you are driving to a field trip, keep this in mind.',
    info: '',
    answers: [{
      correct: false, text: 'Kas tagasisõiduks bensiini jätkub.',
    }, {
      correct: false, text: 'Et mitte mingisugust auto osa ei oleks kasutatud antenni, antenni- või jõukaablite kinnituspunktidena, mis auto suvalisel ärasõidul viib kaasa pool laagrit koos kallite aparaatidega ja võib põhjustada õnnetusi inimestega.',
    }, {
      correct: true, text: 'Et auto ei saaks iseenesest liikuma hakata.',
    }, {
      correct: false, text: 'Et autoraadio liigse kuulamise tulemusel jääks auto akusse veel energiat mootori käivitamiseks.',
    }]
  }]
}