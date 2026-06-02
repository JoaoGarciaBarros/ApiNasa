import JsonBlock from "../../components/ui/JsonBlock";
import { useNavigate } from 'react-router-dom'

const sampleCME = [
  {
    "activityID": "2017-01-03T03:12:00-CME-001",
    "catalog": "M2M_CATALOG",
    "startTime": "2017-01-03T03:12Z",
    "instruments": [
      {
        "displayName": "SOHO: LASCO/C2"
      },
      {
        "displayName": "SOHO: LASCO/C3"
      }
    ],
    "sourceLocation": "",
    "activeRegionNum": null,
    "note": "The CME has two stages, the first starting at 03:12Z and the second at 06:00Z. The second stage merges with the first stage and that is what is measured. The source is a small off limb eruption in the SE of SDO AIA 171 between 01:55Z and 02:43Z.",
    "submissionTime": "2017-01-03T19:40Z",
    "versionId": 2,
    "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CME/12056/-1",
    "cmeAnalyses": [
      {
        "isMostAccurate": true,
        "time21_5": "2017-01-03T13:08Z",
        "latitude": -10,
        "longitude": -105,
        "halfAngle": 20,
        "speed": 645,
        "type": "C",
        "featureCode": "null",
        "imageType": null,
        "measurementTechnique": "null",
        "note": "Measured using SOHO LASCO C3 imagery.",
        "levelOfData": 0,
        "tilt": null,
        "minorHalfWidth": null,
        "speedMeasuredAtHeight": null,
        "submissionTime": "2017-01-03T18:49Z",
        "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/12059/-1",
        "enlilList": [
          {
            "modelCompletionTime": "2017-01-03T21:57Z",
            "au": 2,
            "estimatedShockArrivalTime": null,
            "estimatedDuration": null,
            "rmin_re": null,
            "kp_18": null,
            "kp_90": null,
            "kp_135": null,
            "kp_180": null,
            "isEarthGB": false,
            "isEarthMinorImpact": false,
            "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/WSA-ENLIL/12061/-1",
            "impactList": [
              {
                "isGlancingBlow": false,
                "isMinorImpact": false,
                "location": "Spitzer",
                "arrivalTime": "2017-01-06T07:31Z"
              },
              {
                "isGlancingBlow": true,
                "isMinorImpact": false,
                "location": "Mars",
                "arrivalTime": "2017-01-07T06:00Z"
              },
              {
                "isGlancingBlow": true,
                "isMinorImpact": false,
                "location": "STEREO A",
                "arrivalTime": "2017-01-06T00:00Z"
              }
            ],
            "cmeIDs": [
              "2017-01-03T03:12:00-CME-001"
            ]
          }
        ]
      },
      {
        "isMostAccurate": false,
        "time21_5": "2017-01-03T18:39Z",
        "latitude": -12,
        "longitude": -110,
        "halfAngle": 13,
        "speed": 270,
        "type": "S",
        "featureCode": "null",
        "imageType": null,
        "measurementTechnique": "null",
        "note": "",
        "levelOfData": 0,
        "tilt": null,
        "minorHalfWidth": null,
        "speedMeasuredAtHeight": null,
        "submissionTime": "2017-01-03T12:34Z",
        "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/12057/-1",
        "enlilList": []
      }
    ],
    "linkedEvents": null,
    "sentNotifications": [
      {
        "messageID": "20170103-AL-001",
        "messageIssueTime": "2017-01-03T23:31Z",
        "messageURL": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/12062/1"
      }
    ]
  }
];

const sampleCMEAnalysis = [
[
  {
    "time21_5": "2016-09-06T14:18Z",
    "latitude": -20,
    "longitude": 120,
    "halfAngle": 31,
    "speed": 674,
    "type": "C",
    "isMostAccurate": true,
    "associatedCMEID": "2016-09-06T08:54:00-CME-001",
    "associatedCMEstartTime": "2016-09-06T08:54Z",
    "note": "",
    "associatedCMELink": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CME/11226/-1",
    "catalog": "M2M_CATALOG",
    "featureCode": "null",
    "dataLevel": "1",
    "measurementTechnique": "null",
    "imageType": "null",
    "tilt": null,
    "minorHalfWidth": null,
    "speedMeasuredAtHeight": null,
    "submissionTime": "2016-09-06T15:43Z",
    "versionId": 1,
    "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/11233/-1"
  },
  {
    "time21_5": "2016-09-15T04:24Z",
    "latitude": -18,
    "longitude": -122,
    "halfAngle": 43,
    "speed": 722,
    "type": "C",
    "isMostAccurate": true,
    "associatedCMEID": "2016-09-14T23:36:00-CME-001",
    "associatedCMEstartTime": "2016-09-14T23:36Z",
    "note": "Measured with swpc_cat using C3 and STA Cor2 imagery.",
    "associatedCMELink": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CME/11255/-1",
    "catalog": "M2M_CATALOG",
    "featureCode": "null",
    "dataLevel": "1",
    "measurementTechnique": "null",
    "imageType": "null",
    "tilt": null,
    "minorHalfWidth": null,
    "speedMeasuredAtHeight": null,
    "submissionTime": "2016-09-15T13:22Z",
    "versionId": 1,
    "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/CMEAnalysis/11256/-1"
  }
]
];

const sampleGST = [
[
  {
    "gstID": "2016-01-21T03:00:00-GST-001",
    "startTime": "2016-01-21T03:00Z",
    "allKpIndex": [
      {
        "observedTime": "2016-01-21T06:00Z",
        "kpIndex": 6,
        "source": "NOAA"
      }
    ],
    "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/GST/10074/-1",
    "linkedEvents": [
      {
        "activityID": "2016-01-15T00:00:00-CME-001"
      },
      {
        "activityID": "2016-01-21T10:00:00-HSS-001"
      }
    ],
    "submissionTime": "2016-01-21T06:28Z",
    "versionId": 1,
    "sentNotifications": [
      {
        "messageID": "20160121-AL-001",
        "messageIssueTime": "2016-01-21T06:28Z",
        "messageURL": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/10075/1"
      },
      {
        "messageID": "20160121-AL-002",
        "messageIssueTime": "2016-01-21T13:16Z",
        "messageURL": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/10077/1"
      }
    ]
  }
]
];

const sampleIPS = [
[
  {
    "catalog": "M2M_CATALOG",
    "activityID": "2016-01-09T18:00:00-IPS-001",
    "location": "STEREO A",
    "eventTime": "2016-01-09T18:00Z",
    "submissionTime": "2016-01-11T21:18Z",
    "versionId": 2,
    "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/IPS/10028/-1",
    "instruments": [
      {
        "displayName": "STEREO A: IMPACT"
      },
      {
        "displayName": "STEREO A: PLASTIC"
      }
    ],
    "linkedEvents": [
      {
        "activityID": "2016-01-06T14:24:00-CME-001"
      }
    ],
    "sentNotifications": null
  },
  {
    "catalog": "M2M_CATALOG",
    "activityID": "2016-01-18T21:00:00-IPS-001",
    "location": "Earth",
    "eventTime": "2016-01-18T21:00Z",
    "submissionTime": "2016-01-19T05:31Z",
    "versionId": 2,
    "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/IPS/10067/-1",
    "instruments": [
      {
        "displayName": "ACE: MAG"
      },
      {
        "displayName": "ACE: SWEPAM"
      }
    ],
    "linkedEvents": [
      {
        "activityID": "2016-01-15T00:00:00-CME-001"
      }
    ],
    "sentNotifications": null
  },
  {
    "catalog": "M2M_CATALOG",
    "activityID": "2016-01-21T00:48:00-IPS-001",
    "location": "Earth",
    "eventTime": "2016-01-21T00:48Z",
    "submissionTime": "2016-01-21T00:52Z",
    "versionId": 1,
    "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/IPS/10072/-1",
    "instruments": [
      {
        "displayName": "ACE: MAG"
      },
      {
        "displayName": "ACE: SWEPAM"
      }
    ],
    "linkedEvents": null,
    "sentNotifications": null
  }
]
];

const sampleFLR = [
[
  {
    "flrID": "2016-01-01T23:10:00-FLR-001",
    "catalog": "M2M_CATALOG",
    "instruments": [
      {
        "displayName": "GOES-P: EXIS 1.0-8.0"
      }
    ],
    "beginTime": "2016-01-01T23:10Z",
    "peakTime": "2016-01-02T00:11Z",
    "endTime": "2016-01-02T01:01Z",
    "classType": "M2.3",
    "sourceLocation": "S21W73",
    "activeRegionNum": 12473,
    "note": "Associated eruption visible in SDO AIA 171. 193, and 304 with opening field lines and filament liftoff.",
    "submissionTime": "2025-09-09T19:05Z",
    "versionId": 5,
    "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/9963/-1",
    "linkedEvents": [
      {
        "activityID": "2016-01-01T23:12:00-CME-001"
      },
      {
        "activityID": "2016-01-02T02:48:00-SEP-001"
      },
      {
        "activityID": "2016-01-02T04:30:00-SEP-001"
      }
    ],
    "sentNotifications": null
  },
  {
    "flrID": "2016-01-28T11:48:00-FLR-001",
    "catalog": "M2M_CATALOG",
    "instruments": [
      {
        "displayName": "GOES15: SEM/XRS 1.0-8.0"
      }
    ],
    "beginTime": "2016-01-28T11:48Z",
    "peakTime": "2016-01-28T12:02Z",
    "endTime": "2016-01-28T12:56Z",
    "classType": "C9.6",
    "sourceLocation": "N03W47",
    "activeRegionNum": 12488,
    "note": "",
    "submissionTime": "2016-01-28T22:31Z",
    "versionId": 1,
    "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/FLR/10122/-1",
    "linkedEvents": [
      {
        "activityID": "2016-01-28T12:24:00-CME-001"
      }
    ],
    "sentNotifications": null
  }
]
];

const sampleSEP = [
[
  {
    "sepID": "2016-01-02T02:48:00-SEP-001",
    "eventTime": "2016-01-02T02:48Z",
    "instruments": [
      {
        "displayName": "SOHO: COSTEP 15.8-39.8 MeV"
      }
    ],
    "submissionTime": "2016-01-02T04:45Z",
    "versionId": 1,
    "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/SEP/9966/-1",
    "linkedEvents": [
      {
        "activityID": "2016-01-01T23:10:00-FLR-001"
      },
      {
        "activityID": "2016-01-01T23:12:00-CME-001"
      }
    ],
    "sentNotifications": [
      {
        "messageID": "20160102-AL-002",
        "messageIssueTime": "2016-01-02T04:51Z",
        "messageURL": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/9967/1"
      }
    ]
  },
  {
    "sepID": "2016-01-02T04:30:00-SEP-001",
    "eventTime": "2016-01-02T04:30Z",
    "instruments": [
      {
        "displayName": "GOES13: SEM/EPS \u003E10 MeV"
      }
    ],
    "submissionTime": "2016-01-02T04:41Z",
    "versionId": 1,
    "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/SEP/9964/-1",
    "linkedEvents": [
      {
        "activityID": "2016-01-01T23:10:00-FLR-001"
      },
      {
        "activityID": "2016-01-01T23:12:00-CME-001"
      }
    ],
    "sentNotifications": [
      {
        "messageID": "20160102-AL-001",
        "messageIssueTime": "2016-01-02T04:41Z",
        "messageURL": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/9965/1"
      }
    ]
  }
]
];

const sampleMPC = [
[
  {
    "mpcID": "2016-03-06T16:32:00-MPC-001",
    "eventTime": "2016-03-06T16:32Z",
    "instruments": [
      {
        "displayName": "MODEL: SWMF"
      }
    ],
    "submissionTime": "2016-03-06T16:26Z",
    "versionId": 1,
    "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/MPC/10300/-1",
    "linkedEvents": [
      {
        "activityID": "2016-03-06T04:30:00-IPS-001"
      },
      {
        "activityID": "2016-03-06T09:00:00-HSS-001"
      },
      {
        "activityID": "2016-03-06T18:00:00-GST-001"
      }
    ],
    "sentNotifications": [
      {
        "messageID": "20160306-AL-001",
        "messageIssueTime": "2016-03-06T16:59Z",
        "messageURL": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/10301/1"
      }
    ]
  },
  {
    "mpcID": "2016-03-11T13:00:00-MPC-001",
    "eventTime": "2016-03-11T13:00Z",
    "instruments": [
      {
        "displayName": "MODEL: SWMF"
      }
    ],
    "submissionTime": "2016-03-11T13:53Z",
    "versionId": 1,
    "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/MPC/10323/-1",
    "linkedEvents": [
      {
        "activityID": "2016-03-11T04:21:00-IPS-001"
      },
      {
        "activityID": "2016-03-11T12:00:00-GST-001"
      }
    ],
    "sentNotifications": [
      {
        "messageID": "20160311-AL-001",
        "messageIssueTime": "2016-03-11T13:55Z",
        "messageURL": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/10324/1"
      }
    ]
  }
]
];

const sampleRBE = [
[
  {
    "rbeID": "2016-01-02T12:25:00-RBE-001",
    "eventTime": "2016-01-02T12:25Z",
    "instruments": [
      {
        "displayName": "GOES13: SEM/EPS \u003E0.8 MeV"
      }
    ],
    "submissionTime": "2016-01-02T13:25Z",
    "versionId": 2,
    "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/RBE/9969/-1",
    "linkedEvents": [
      {
        "activityID": "2015-12-28T12:39:00-CME-001"
      }
    ],
    "sentNotifications": [
      {
        "messageID": "20160102-AL-003",
        "messageIssueTime": "2016-01-02T12:39Z",
        "messageURL": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/9970/1"
      },
      {
        "messageID": "20160102-AL-004",
        "messageIssueTime": "2016-01-02T13:30Z",
        "messageURL": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/9971/1"
      }
    ]
  },
  {
    "rbeID": "2016-01-24T15:05:00-RBE-001",
    "eventTime": "2016-01-24T15:05Z",
    "instruments": [
      {
        "displayName": "GOES13: SEM/EPS \u003E0.8 MeV"
      }
    ],
    "submissionTime": "2016-01-24T16:26Z",
    "versionId": 3,
    "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/RBE/10088/-1",
    "linkedEvents": [
      {
        "activityID": "2016-01-21T10:00:00-HSS-001"
      }
    ],
    "sentNotifications": [
      {
        "messageID": "20160124-AL-001",
        "messageIssueTime": "2016-01-24T15:22Z",
        "messageURL": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/10089/1"
      },
      {
        "messageID": "20160124-AL-002",
        "messageIssueTime": "2016-01-24T16:23Z",
        "messageURL": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/Alert/10090/1"
      }
    ]
  }
]
];

const sampleHSS = [
[
  {
    "hssID": "2016-01-11T12:00:00-HSS-001",
    "eventTime": "2016-01-11T12:00Z",
    "instruments": [
      {
        "displayName": "ACE: SWEPAM"
      },
      {
        "displayName": "ACE: MAG"
      }
    ],
    "submissionTime": "2016-01-11T21:08Z",
    "versionId": 1,
    "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/HSS/10029/-1",
    "linkedEvents": null,
    "sentNotifications": null
  },
  {
    "hssID": "2016-01-21T10:00:00-HSS-001",
    "eventTime": "2016-01-21T10:00Z",
    "instruments": [
      {
        "displayName": "ACE: SWEPAM"
      },
      {
        "displayName": "ACE: MAG"
      }
    ],
    "submissionTime": "2016-01-21T13:13Z",
    "versionId": 2,
    "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/HSS/10076/-1",
    "linkedEvents": [
      {
        "activityID": "2016-01-21T03:00:00-GST-001"
      },
      {
        "activityID": "2016-01-24T15:05:00-RBE-001"
      }
    ],
    "sentNotifications": null
  }
]
];

const sampleWSA = [
  {
    "simulationID": "WSA-ENLIL/46261/1",
    "modelCompletionTime": "2026-05-19T15:07Z",
    "au": 2.0,
    "cmeInputs": [
      {
        "cmeStartTime": "2026-05-19T11:01Z",
        "latitude": 32.0,
        "longitude": -26.0,
        "speed": 564.0,
        "halfAngle": 20.0,
        "time21_5": "2026-05-19T16:58Z",
        "featureCode": "LE",
        "isMostAccurate": true,
        "levelOfData": 0,
        "ipsList": [],
        "cmeid": "2026-05-19T11:01:00-CME-001"
      }
    ],
    "estimatedShockArrivalTime": null,
    "estimatedDuration": null,
    "rmin_re": null,
    "kp_18": null,
    "kp_90": null,
    "kp_135": null,
    "kp_180": null,
    "isEarthGB": false,
    "isEarthMinorImpact": false,
    "impactList": null,
    "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/WSA-ENLIL/46261/-1"
  },
  {
    "simulationID": "WSA-ENLIL/46282/1",
    "modelCompletionTime": "2026-05-20T23:29Z",
    "au": 2.0,
    "cmeInputs": [
      {
        "cmeStartTime": "2026-05-20T17:15Z",
        "latitude": 20.0,
        "longitude": 48.0,
        "speed": 574.0,
        "halfAngle": 18.0,
        "time21_5": "2026-05-20T22:30Z",
        "featureCode": "LE",
        "isMostAccurate": false,
        "levelOfData": 0,
        "ipsList": [],
        "cmeid": "2026-05-20T17:15:00-CME-001"
      }
    ],
    "estimatedShockArrivalTime": null,
    "estimatedDuration": null,
    "rmin_re": null,
    "kp_18": null,
    "kp_90": null,
    "kp_135": null,
    "kp_180": null,
    "isEarthGB": false,
    "isEarthMinorImpact": false,
    "impactList": [
      {
        "isGlancingBlow": false,
        "isMinorImpact": true,
        "location": "Juice",
        "arrivalTime": "2026-05-24T15:00Z"
      },
      {
        "isGlancingBlow": true,
        "isMinorImpact": false,
        "location": "STEREO A",
        "arrivalTime": "2026-05-23T02:00Z"
      }
    ],
    "link": "https://webtools.ccmc.gsfc.nasa.gov/DONKI/view/WSA-ENLIL/46282/-1"
  }
];

const sampleNotifications = [
{
    "messageType": "CME",
    "messageID": "20260526-AL-008",
    "messageURL": "https://kauai.ccmc.gsfc.nasa.gov/DONKI/view/Alert/46410/1",
    "messageIssueTime": "2026-05-26T17:56Z",
    "messageBody": "## Community Coordinated Modeling Center Database Of Notifications, Knowledge, Information ( CCMC DONKI )\n## Message Type: Space Weather Notification - CME (Parker Solar Probe, Mars, Psyche)\n##\n## Message Issue Date: 2026-05-26T17:56:24Z\n## Message ID: 20260526-AL-008\n##\n## Disclaimer: NOAA's Space Weather Prediction Center is the United States Government official source for space weather forecasts. This \"Experimental Research Information\" consists of preliminary NASA research products and should be interpreted and used accordingly.\n\n\n## Summary:\n\nC-type CME detected by STEREO A / GOES / SOHO. \n\nStart time of the event: 2026-05-26T02:12Z.\n\nEstimated speed: ~820 km/s.\n\nEstimated opening half-angle: 24 deg.\n\nDirection (lon./lat.): 119/33 in Heliocentric Earth Equatorial coordinates.\n\nActivity ID: 2026-05-26T02:12:00-CME-001\n\nBased on preliminary analysis by the Moon to Mars Space Weather Analysis Office and heliospheric modeling carried out at NASA Community Coordinated Modeling Center, it is estimated that the CME may impact Parker Solar Probe, Mars (minor impact), and Psyche (minor impact).  The leading edge of the CME will reach Parker Solar Probe at 2026-05-27T02:24Z, Mars at 2026-05-29T08:00Z, and Psyche at 2026-05-29T06:00Z (plus minus 7 hours). \n\nLinks to the movies of the modeled event (includes CME: 2026-05-26T02:12:00-CME-001):\n\nhttps://iswa.gsfc.nasa.gov/api/redirect?filename=20260526_064500_2.0_anim.tim-den.gif\nhttps://iswa.gsfc.nasa.gov/api/redirect?filename=20260526_064500_2.0_anim.tim-vel.gif\nhttps://iswa.gsfc.nasa.gov/api/redirect?filename=20260526_064500_2.0_ENLIL_CONE_timeline.gif\nhttps://iswa.gsfc.nasa.gov/api/redirect?filename=20260526_064500_2.0_ENLIL_CONE_PSP_timeline.gif\nhttps://iswa.gsfc.nasa.gov/api/redirect?filename=20260526_064500_2.0_ENLIL_CONE_Mars_timeline.gif\nhttps://iswa.gsfc.nasa.gov/api/redirect?filename=20260526_064500_2.0_ENLIL_CONE_Psyche_timeline.gif\n\n\n## Notes: \n\n\nSCORE CME typification system:\nS-type: CMEs with speeds less than 500 km/s\nC-type: Common 500-999 km/s\nO-type: Occasional 1000-1999 km/s\nR-type: Rare 2000-2999 km/s\nER-type: Extremely Rare >3000 km/s\n\n\n"
  },
  {
    "messageType": "CME",
    "messageID": "20260526-AL-007",
    "messageURL": "https://kauai.ccmc.gsfc.nasa.gov/DONKI/view/Alert/46408/1",
    "messageIssueTime": "2026-05-26T17:49Z",
    "messageBody": "## Community Coordinated Modeling Center Database Of Notifications, Knowledge, Information ( CCMC DONKI )\n## Message Type: Space Weather Notification - CMEs (Mars, Parker Solar Probe, Psyche)\n##\n## Message Issue Date: 2026-05-26T17:49:51Z\n## Message ID: 20260526-AL-007\n##\n## Disclaimer: NOAA's Space Weather Prediction Center is the United States Government official source for space weather forecasts. This \"Experimental Research Information\" consists of preliminary NASA research products and should be interpreted and used accordingly.\n\n\n## Summary:\n\nMultiple CMEs have been detected as follows:\n1: O-type CME detected by GOES / SOHO. \n\nStart time of the event: 2026-05-25T23:24Z.\n\nEstimated speed: ~1096 km/s.\n\nEstimated opening half-angle: 38 deg.\n\nDirection (lon./lat.): 150/20 in Heliocentric Earth Equatorial coordinates.\n\nActivity ID: 2026-05-25T23:24:00-CME-001\n\n2: C-type CME detected by GOES / SOHO. \n\nStart time of the event: 2026-05-26T00:48Z.\n\nEstimated speed: ~606 km/s.\n\nEstimated opening half-angle: 29 deg.\n\nDirection (lon./lat.): 139/21 in Heliocentric Earth Equatorial coordinates.\n\nActivity ID: 2026-05-26T00:48:00-CME-001\n\nBased on preliminary analysis by the Moon to Mars Space Weather Analysis Office and heliospheric modeling carried out at NASA Community Coordinated Modeling Center, it is estimated that the CMEs may impact Mars, Parker Solar Probe, and Psyche.  The combined leading edge of the CMEs will reach Mars at 2026-05-28T13:05Z, Parker Solar Probe at 2026-05-26T20:56Z, and Psyche at 2026-05-28T11:51Z (plus minus 7 hours). \n\n\nLinks to the movies of the modeled event (includes CMEs: 2026-05-25T23:24:00-CME-001, 2026-05-26T00:48:00-CME-001):\n\nhttps://iswa.gsfc.nasa.gov/api/redirect?filename=20260526_022300_2.0_anim.tim-den.gif\nhttps://iswa.gsfc.nasa.gov/api/redirect?filename=20260526_022300_2.0_anim.tim-vel.gif\nhttps://iswa.gsfc.nasa.gov/api/redirect?filename=20260526_022300_2.0_ENLIL_CONE_timeline.gif\nhttps://iswa.gsfc.nasa.gov/api/redirect?filename=20260526_022300_2.0_ENLIL_CONE_PSP_timeline.gif\nhttps://iswa.gsfc.nasa.gov/api/redirect?filename=20260526_022300_2.0_ENLIL_CONE_Mars_timeline.gif\nhttps://iswa.gsfc.nasa.gov/api/redirect?filename=20260526_022300_2.0_ENLIL_CONE_Psyche_timeline.gif\n\n\n## Notes: \n\n\nSCORE CME typification system:\nS-type: CMEs with speeds less than 500 km/s\nC-type: Common 500-999 km/s\nO-type: Occasional 1000-1999 km/s\nR-type: Rare 2000-2999 km/s\nER-type: Extremely Rare >3000 km/s\n\n\n"
  },
  {
    "messageType": "CME",
    "messageID": "20260526-AL-006",
    "messageURL": "https://kauai.ccmc.gsfc.nasa.gov/DONKI/view/Alert/46385/1",
    "messageIssueTime": "2026-05-26T13:31Z",
    "messageBody": "## Community Coordinated Modeling Center Database Of Notifications, Knowledge, Information ( CCMC DONKI )\n## Message Type: Space Weather Notification - CME update (Mars, Parker Solar Probe, Psyche)\n##\n## Message Issue Date: 2026-05-26T13:31:52Z\n## Message ID: 20260526-AL-006\n##\n## Disclaimer: NOAA's Space Weather Prediction Center is the United States Government official source for space weather forecasts. This \"Experimental Research Information\" consists of preliminary NASA research products and should be interpreted and used accordingly.\n\n\n## Summary:\n\nUpdate on CME with ID 2026-05-25T22:12:00-CME-001 (see previous notification 20260526-AL-002). Based on preliminary analysis by the Moon to Mars Space Weather Analysis Office and heliospheric modeling carried out at NASA Community Coordinated Modeling Center, it is estimated that the CME may impact Mars, Parker Solar Probe, and Psyche.  The leading edge of the CME will reach Mars at 2026-05-28T10:09Z, Parker Solar Probe at 2026-05-26T19:34Z, and Psyche at 2026-05-28T09:01Z (plus minus 7 hours). \n\n\nUpdated CME parameters are (O-type):\n\nStart time of the event: 2026-05-25T22:12Z.\n\nEstimated speed: ~1174 km/s.\n\nEstimated opening half-angle: 37 deg.\n\nDirection (lon./lat.): 149/21 in Heliocentric Earth Equatorial coordinates.\n\nActivity ID: 2026-05-25T22:12:00-CME-001\n\n\nLinks to the movies of the modeled event (includes CME: 2026-05-25T22:12:00-CME-001):\n\nhttps://iswa.gsfc.nasa.gov/api/redirect?filename=20260526_012700_2.0_anim.tim-den.gif\nhttps://iswa.gsfc.nasa.gov/api/redirect?filename=20260526_012700_2.0_anim.tim-vel.gif\nhttps://iswa.gsfc.nasa.gov/api/redirect?filename=20260526_012700_2.0_ENLIL_CONE_timeline.gif\nhttps://iswa.gsfc.nasa.gov/api/redirect?filename=20260526_012700_2.0_ENLIL_CONE_PSP_timeline.gif\nhttps://iswa.gsfc.nasa.gov/api/redirect?filename=20260526_012700_2.0_ENLIL_CONE_Mars_timeline.gif\nhttps://iswa.gsfc.nasa.gov/api/redirect?filename=20260526_012700_2.0_ENLIL_CONE_Psyche_timeline.gif\n\n\n## Notes: \n\n\nSCORE CME typification system:\nS-type: CMEs with speeds less than 500 km/s\nC-type: Common 500-999 km/s\nO-type: Occasional 1000-1999 km/s\nR-type: Rare 2000-2999 km/s\nER-type: Extremely Rare >3000 km/s\n\n\n"
  },
  {
    "messageType": "SEP",
    "messageID": "20260526-AL-005",
    "messageURL": "https://kauai.ccmc.gsfc.nasa.gov/DONKI/view/Alert/46381/1",
    "messageIssueTime": "2026-05-26T11:35Z",
    "messageBody": "## Community Coordinated Modeling Center Database Of Notifications, Knowledge, Information ( CCMC DONKI )\n## Message Type: Space Weather Notification - SEP (STEREO A)\n##\n## Message Issue Date: 2026-05-26T11:35:49Z\n## Message ID: 20260526-AL-005\n##\n## Disclaimer: NOAA's Space Weather Prediction Center is the United States Government official source for space weather forecasts. This \"Experimental Research Information\" consists of preliminary NASA research products and should be interpreted and used accordingly.\n\n\n## Summary:\n\nSolar energetic particle event detected by STEREO A. The flux of 13-100 MeV protons exceeded 10^(-1) pfu/MeV starting at 2026-05-26T04:07Z.\n\nNASA spacecraft at orbits near STEREO A can be impacted.\n\nActivity ID: 2026-05-26T04:07:00-SEP-001.\n\n## Notes: \n\nThis SEP event (2026-05-26T04:07:00-SEP-001) is associated with O-type CME with ID 2026-05-25T22:12:00-CME-001 (see notification 20260526-AL-002).\n\n\n"
  }
];

export default function DONKIpage() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-10">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">DONKI — Space Weather Database Of Notifications, Knowledge, Information</h1>
      <h2 className="text-center text-xl font-medium text-white shrink-0 flex-1">A DONKI é a plataforma da NASA dedicada ao clima espacial, reunindo informações sobre atividades solares que podem afetar satélites, comunicações e infraestrutura tecnológica. Ela centraliza registros de fenômenos como explosões solares, ejeções de massa coronal e tempestades geomagnéticas, transformando observações científicas em dados acessíveis. O sistema surgiu porque a atividade do Sol influencia diretamente tecnologias modernas e missões espaciais, tornando o monitoramento espacial uma necessidade operacional e científica.</h2>
      <div className="w-full max-w-4xl flex items-center gap-4 mt-12 mb-4">
        <div className="flex-1 h-px bg-white/15"></div>
        
        <h2 className="text-xl font-medium text-white shrink-0">
          Coronal Mass Ejection (CME)
        </h2>
        
        <div className="flex-1 h-px bg-white/15"></div>
      </div>
        
      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">A CME registra ejeções de massa coronal, grandes explosões de plasma e campo magnético liberadas pelo Sol. Esses eventos podem viajar pelo espaço e afetar o ambiente terrestre, causando perturbações em satélites e comunicações. O sistema existe para monitorar e documentar essas ocorrências de forma organizada.</p>
          <button onClick={() => navigate('/donki/test')} className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar DONKI
          </button>
        </div>
        
        <div className="flex-1 rounded-xl object-cover border border-white/50">
          <JsonBlock data={sampleCME} />
        </div>

      </div>
      <div className="w-full max-w-4xl flex items-center gap-4 mt-12 mb-4">
        <div className="flex-1 h-px bg-white/15"></div>
        
        <h2 className="text-xl font-medium text-white shrink-0">
          Coronal Mass Ejection (CME) Analysis
        </h2>
        
        <div className="flex-1 h-px bg-white/15"></div>
      </div>
        
      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1 rounded-xl object-cover border border-white/50">
          <JsonBlock data={sampleCMEAnalysis} />
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">O CME Analysis complementa os registros de CME trazendo análises calculadas sobre direção, velocidade e possível trajetória das ejeções solares. Seu objetivo é transformar observações brutas em previsões mais úteis para pesquisadores e operações espaciais, ajudando a estimar impactos no espaço próximo da Terra.</p>
          <button onClick={() => navigate('/donki/test')} className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar DONKI
          </button>
        </div>
        
      </div>
      <div className="w-full max-w-4xl flex items-center gap-4 mt-12 mb-4">
        <div className="flex-1 h-px bg-white/15"></div>
        
        <h2 className="text-xl font-medium text-white shrink-0">
          Geomagnetic Storm (GST)
        </h2>
        
        <div className="flex-1 h-px bg-white/15"></div>
      </div>
        
      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">O GST monitora tempestades geomagnéticas, fenômenos causados pela interação entre atividade solar e o campo magnético terrestre. Essas tempestades podem interferir em redes elétricas, GPS e satélites. O serviço organiza eventos históricos e atuais para estudo e monitoramento operacional.</p>
          <button onClick={() => navigate('/donki/test')} className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar DONKI
          </button>
        </div>
        
        <div className="flex-1 rounded-xl object-cover border border-white/50">
          <JsonBlock data={sampleGST} />
        </div>

      </div>
      <div className="w-full max-w-4xl flex items-center gap-4 mt-12 mb-4">
        <div className="flex-1 h-px bg-white/15"></div>
        
        <h2 className="text-xl font-medium text-white shrink-0">
          Interplanetary Shock (IPS)
        </h2>
        
        <div className="flex-1 h-px bg-white/15"></div>
      </div>
        
      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1 rounded-xl object-cover border border-white/50">
          <JsonBlock data={sampleIPS} />
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">O IPS registra ondas de choque interplanetárias geradas por atividade solar intensa. Essas perturbações viajam pelo Sistema Solar e podem alterar o ambiente espacial ao redor da Terra e de espaçonaves. A sub-API existe para acompanhar eventos que ajudam a entender a propagação da energia solar pelo espaço.</p>
          <button onClick={() => navigate('/donki/test')} className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar DONKI
          </button>
        </div>
        
      </div>
      <div className="w-full max-w-4xl flex items-center gap-4 mt-12 mb-4">
        <div className="flex-1 h-px bg-white/15"></div>
        
        <h2 className="text-xl font-medium text-white shrink-0">
          Solar Flare (FLR)
        </h2>
        
        <div className="flex-1 h-px bg-white/15"></div>
      </div>
        
      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">O FLR é dedicado às explosões solares conhecidas como flares. Esses eventos liberam grandes quantidades de radiação e podem impactar comunicações e operações espaciais. O sistema documenta intensidade, duração e classificação das explosões solares observadas.</p>
          <button onClick={() => navigate('/donki/test')} className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar DONKI
          </button>
        </div>
        
        <div className="flex-1 rounded-xl object-cover border border-white/50">
          <JsonBlock data={sampleFLR} />
        </div>

      </div>
      <div className="w-full max-w-4xl flex items-center gap-4 mt-12 mb-4">
        <div className="flex-1 h-px bg-white/15"></div>
        
        <h2 className="text-xl font-medium text-white shrink-0">
          Solar Energetic Particle (SEP)
        </h2>
        
        <div className="flex-1 h-px bg-white/15"></div>
      </div>
        
      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1 rounded-xl object-cover border border-white/50">
          <JsonBlock data={sampleSEP} />
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">O SEP acompanha partículas altamente energéticas liberadas pelo Sol durante eventos intensos. Essas partículas representam risco para astronautas, satélites e equipamentos espaciais sensíveis. O serviço existe para registrar e estudar episódios de radiação solar elevada.</p>
          <button onClick={() => navigate('/donki/test')} className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar DONKI
          </button>
        </div>
        
      </div>
      <div className="w-full max-w-4xl flex items-center gap-4 mt-12 mb-4">
        <div className="flex-1 h-px bg-white/15"></div>
        
        <h2 className="text-xl font-medium text-white shrink-0">
          Magnetopause Crossing (MPC)
        </h2>
        
        <div className="flex-1 h-px bg-white/15"></div>
      </div>
        
      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">O MPC monitora cruzamentos da magnetopausa, a fronteira entre o campo magnético terrestre e o vento solar. Alterações nessa região ajudam pesquisadores a entender como a Terra reage à atividade solar e como energia externa influencia o ambiente espacial próximo.</p>
          <button onClick={() => navigate('/donki/test')} className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar DONKI
          </button>
        </div>
        
        <div className="flex-1 rounded-xl object-cover border border-white/50">
          <JsonBlock data={sampleMPC} />
        </div>

      </div>
      <div className="w-full max-w-4xl flex items-center gap-4 mt-12 mb-4">
        <div className="flex-1 h-px bg-white/15"></div>
        
        <h2 className="text-xl font-medium text-white shrink-0">
          Radiation Belt Enhancement (RBE)
        </h2>
        
        <div className="flex-1 h-px bg-white/15"></div>
      </div>
        
      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1 rounded-xl object-cover border border-white/50">
          <JsonBlock data={sampleRBE} />
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">O RBE registra intensificações nos cinturões de radiação da Terra. Esses aumentos podem elevar o risco para satélites e sistemas eletrônicos em órbita. A sub-API foi criada para acompanhar mudanças no ambiente de radiação espacial e apoiar estudos de segurança orbital.</p>
          <button onClick={() => navigate('/donki/test')} className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar DONKI
          </button>
        </div>
        
      </div>
      <div className="w-full max-w-4xl flex items-center gap-4 mt-12 mb-4">
        <div className="flex-1 h-px bg-white/15"></div>
        
        <h2 className="text-xl font-medium text-white shrink-0">
          High Speed Stream (HSS)
        </h2>
        
        <div className="flex-1 h-px bg-white/15"></div>
      </div>
        
      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">O HSS documenta correntes rápidas de vento solar originadas em regiões específicas do Sol. Essas correntes podem desencadear perturbações geomagnéticas e alterar o clima espacial. O sistema permite acompanhar sua origem e influência sobre a Terra.</p>
          <button onClick={() => navigate('/donki/test')} className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar DONKI
          </button>
        </div>
        
        <div className="flex-1 rounded-xl object-cover border border-white/50">
          <JsonBlock data={sampleHSS} />
        </div>

      </div>
      <div className="w-full max-w-4xl flex items-center gap-4 mt-12 mb-4">
        <div className="flex-1 h-px bg-white/15"></div>
        
        <h2 className="text-xl font-medium text-white shrink-0">
          WSA + Enlil Simulation
        </h2>
        
        <div className="flex-1 h-px bg-white/15"></div>
      </div>
        
      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1 rounded-xl object-cover border border-white/50">
          <JsonBlock data={sampleWSA} />
        </div>

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">Essa sub-API reúne simulações produzidas pelos modelos WSA e Enlil, usados para prever propagação do vento solar e eventos solares pelo espaço. Em vez de apenas registrar observações, ela fornece projeções computacionais utilizadas em previsão de clima espacial.</p>
          <button onClick={() => navigate('/donki/test')} className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar DONKI
          </button>
        </div>
        
      </div>
      <div className="w-full max-w-4xl flex items-center gap-4 mt-12 mb-4">
        <div className="flex-1 h-px bg-white/15"></div>
        
        <h2 className="text-xl font-medium text-white shrink-0">
          Notifications
        </h2>
        
        <div className="flex-1 h-px bg-white/15"></div>
      </div>
        
      <div className="flex flex-row gap-8 w-full max-w-4xl items-start">

        <div className="flex-1 flex flex-col">
          <p className="text-white/40 text-lg">O Notifications centraliza alertas e notificações emitidos pela DONKI sobre eventos espaciais relevantes. Seu objetivo é facilitar o acompanhamento rápido de atividades importantes sem exigir análise manual de múltiplos registros.</p>
          <button onClick={() => navigate('/donki/test')} className="self-center bg-black text-white font-bold py-2 px-4 rounded border border-white/50 mt-4 hover:bg-white/10 transition-colors duration-100">
            Testar DONKI
          </button>
        </div>
        
        <div className="flex-1 rounded-xl object-cover border border-white/50">
          <JsonBlock data={sampleNotifications} />
        </div>

      </div>
    </div>
  )
}
