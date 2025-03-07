export default {
  "id": "M3A",
  "title": {
    "ee": "Moodul M3A Raadio- ja elektrotehnika ahelad."
  },
  "questions": [
    {
      "id": "M3A-Q1",
      "text": {
        "ee": "Miks ühendatakse toitealaldi dioodidega paralleelselt kondensaator ja takisti?",
        "en": "Why are a capacitor and a resistor connected in parallel with the diodes in a power rectifier?"
      },
      "answers": [
        {
          "correct": false,
          "text": {
            "ee": "Väljundpinge lainesuse silumiseks",
            "en": "To smooth the output voltage ripple"
          }
        },
        {
          "correct": false,
          "text": {
            "ee": "Väljundpinge suurendamiseks.",
            "en": "To increase the output voltage"
          }
        },
        {
          "correct": true,
          "text": {
            "ee": "Pingelangude võrdsustamiseks dioodidel ja pingeimpulsside kahjuliku mõju vähendamiseks.",
            "en": "To equalize voltage drops across diodes and reduce the harmful effects of voltage pulses"
          }
        },
        {
          "correct": false,
          "text": {
            "ee": "Raadiohäirete vähendamiseks.",
            "en": "To reduce radio interference"
          }
        }
      ],
      "info": []
    },
    {
      "id": "M3A-Q2",
      "text": {
        "ee": "Milline on täislaine alaldi väljundpinge filtreerimata kuju?",
        "en": "What is the unfiltered shape of the output voltage of a full-wave rectifier?"
      },
      "answers": [
        {
          "correct": false,
          "text": {
            "ee": "Sile alalispinge.",
            "en": "Smooth DC voltage"
          }
        },
        {
          "correct": false,
          "text": {
            "ee": "Sisendpinge sagedusega võrdne impulsside jada.",
            "en": "A sequence of pulses equal to the frequency of the input voltage"
          }
        },
        {
          "correct": true,
          "text": {
            "ee": "Sisendpinge kahekordse sagedusega võrdne impulsside jada.",
            "en": "A sequence of pulses equal to twice the frequency of the input voltage"
          }
        },
        {
          "correct": false,
          "text": {
            "ee": "Kolmnurkimpulsside jada.",
            "en": "A sequence of triangular pulses"
          }
        }
      ],
      "info": []
    },
    {
      "id": "M3A-Q3",
      "text": {
        "ee": "Millised komponendid moodustavad toitealaldi filtri",
        "en": "What components make up a power rectifier filter?"
      },
      "answers": [
        {
          "correct": false,
          "text": {
            "ee": "Dioodid.",
            "en": "Diodes"
          }
        },
        {
          "correct": false,
          "text": {
            "ee": "Trafod ja transistorid.",
            "en": "Transformers and transistors"
          }
        },
        {
          "correct": true,
          "text": {
            "ee": "Kondensaatorid ja drosselid.",
            "en": "Capacitors and chokes"
          }
        },
        {
          "correct": false,
          "text": {
            "ee": "Transistorid ja drosselid.",
            "en": "Transistors and chokes"
          }
        }
      ],
      "info": []
    },
    {
      "id": "M3A-Q4",
      "text": {
        "ee": "Milline peab olema täisperioodalaldi alalduselemendi vastupinge suurus?",
        "en": "What should be the magnitude of the reverse voltage of the rectifier element of a full-wave rectifier?"
      },
      "answers": [
        {
          "correct": false,
          "text": {
            "ee": "Veerand alaldi nominaalsest väljundpingest.",
            "en": "A quarter of the rectifier's nominal output voltage"
          }
        },
        {
          "correct": false,
          "text": {
            "ee": "Võrdne alaldi väljundpingega.",
            "en": "Equal to the rectifier output voltage"
          }
        },
        {
          "correct": true,
          "text": {
            "ee": "Võrdne alaldi nominaalse väljundpinge kahekordse väärtusega.",
            "en": "Equivalent to twice the nominal output voltage of the rectifier"
          }
        },
        {
          "correct": false,
          "text": {
            "ee": "Võrdne alaldi nominaalse väljundpinge neljakordse väärtusega.",
            "en": "Equal to four times the nominal output voltage of the rectifier"
          }
        }
      ],
      "info": []
    },
    {
      "id": "M3A-Q5",
      "text": {
        "ee": "Milline peab olema transmissiooniliiniga ühendatud madalpääsfiltri impedants liini impedantsiga võrreldes?",
        "en": "What should be the impedance of a low-pass filter connected to a transmission line compared to the line impedance?"
      },
      "answers": [
        {
          "correct": false,
          "text": {
            "ee": "Märgatavalt kõrgem.",
            "en": "Noticeably higher"
          }
        },
        {
          "correct": true,
          "text": {
            "ee": "Enamvähem sama.",
            "en": "More or less the same"
          }
        },
        {
          "correct": false,
          "text": {
            "ee": "Võrdne liini kahekordse impedantsiga.",
            "en": "Equal to twice the line impedance"
          }
        },
        {
          "correct": false,
          "text": {
            "ee": "Võrdne liini impedantsi poole väärtusega.",
            "en": "Equal to half the line impedance"
          }
        }
      ],
      "info": []
    },
    {
      "id": "M3A-Q6",
      "text": {
        "ee": "Milline peab olema poolperioodalaldi alalduselemendi vastupinge suurus?",
        "en": "What should be the magnitude of the reverse voltage of the rectifier element of a half-wave rectifier?"
      },
      "answers": [
        {
          "correct": false,
          "text": {
            "ee": "Pool alaldi nominaalsest väljundpingest.",
            "en": "Half of the rectifier's nominal output voltage"
          }
        },
        {
          "correct": true,
          "text": {
            "ee": "Alaldi nominaalse tipppinge ühe või kahekordne väärtus.",
            "en": "One or two times the nominal peak voltage of the rectifier"
          }
        },
        {
          "correct": false,
          "text": {
            "ee": "Võrdne alaldi väljundpingega.",
            "en": "Equal to the rectifier output voltage"
          }
        },
        {
          "correct": false,
          "text": {
            "ee": "Võrdne alaldi neljakordse väljundpingega.",
            "en": "Equal rectifier with four times the output voltage"
          }
        }
      ],
      "info": []
    },
    {
      "id": "M3A-Q7",
      "text": {
        "ee": "Kuhu ühendatakse toitealaldi šunttakisti?",
        "en": "Where is the shunt resistor of the power rectifier connected?"
      },
      "answers": [
        {
          "correct": false,
          "text": {
            "ee": "Paralleelselt filterkondensaatoriga.",
            "en": "In parallel with the filter capacitor"
          }
        },
        {
          "correct": false,
          "text": {
            "ee": "Paralleelselt alaldi sisendiga.",
            "en": "In parallel with the rectifier input"
          }
        },
        {
          "correct": true,
          "text": {
            "ee": "Paralleelselt väljundfiltri drosseliga.",
            "en": "In parallel with the output filter choke"
          }
        },
        {
          "correct": false,
          "text": {
            "ee": "Paralleelselt trafo primaarmähisega.",
            "en": "In parallel with the primary winding of the transformer"
          }
        }
      ],
      "info": []
    },
    {
      "id": "M3A-Q8",
      "text": {
        "ee": "Mitu kraadi siinuslainest kasutab poolperioodalaldi?",
        "en": "How many degrees of a sine wave does a half-wave rectifier use?"
      },
      "answers": [
        {
          "correct": false,
          "text": {
            "ee": "90 kraadi.",
            "en": "90 degrees"
          }
        },
        {
          "correct": true,
          "text": {
            "ee": "180 kraadi.",
            "en": "180 degrees"
          }
        },
        {
          "correct": false,
          "text": {
            "ee": "360 kraadi",
            "en": "360 degrees"
          }
        },
        {
          "correct": false,
          "text": {
            "ee": "270 kraadi",
            "en": "270 degrees"
          }
        }
      ],
      "info": []
    },
    {
      "id": "M3A-Q9",
      "text": {
        "ee": "Mitu kraadi siinuslainest kasutab täisperioodalaldi?",
        "en": "How many degrees of a sine wave does a full-wave rectifier use?"
      },
      "answers": [
        {
          "correct": false,
          "text": {
            "ee": "90 kraadi.",
            "en": "90 degrees"
          }
        },
        {
          "correct": false,
          "text": {
            "ee": "180 kraadi.",
            "en": "180 degrees"
          }
        },
        {
          "correct": true,
          "text": {
            "ee": "360 kraadi",
            "en": "360 degrees"
          }
        },
        {
          "correct": false,
          "text": {
            "ee": "270 kraadi",
            "en": "270 degrees"
          }
        }
      ],
      "info": []
    },
    {
      "id": "M3A-Q10",
      "text": {
        "ee": "Mis funktsiooni täidavad kõrgepingealaldis dioodidega paralleelselt lülitatud kondensaatorid ja takistid?",
        "en": "What function do capacitors and resistors connected in parallel with high-voltage diodes perform?"
      },
      "answers": [
        {
          "correct": false,
          "text": {
            "ee": "Kahe- või kolmekordistavad väljundpinget.",
            "en": "Double or triple the output voltage"
          }
        },
        {
          "correct": true,
          "text": {
            "ee": "Kaitsevad teistest dioodidest kiiremini vastutakistust taastavaid dioode.",
            "en": "Protects diodes that recover resistance faster than other diodes"
          }
        },
        {
          "correct": false,
          "text": {
            "ee": "Reguleerivad väljundpinget.",
            "en": "Regulates output voltage"
          }
        },
        {
          "correct": false,
          "text": {
            "ee": "Vähendavad raadiohäireid.",
            "en": "Reduces radio interference"
          }
        }
      ],
      "info": []
    }
  ]
}