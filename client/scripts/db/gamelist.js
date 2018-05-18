'use strict';

export { getAllNames, getByName };

const wpcGames = [
  {
    name: 'Hurricane',
    version: 'L-2',
    rom: {
      u06: 'https://s3-eu-west-1.amazonaws.com/foo-temp/hurcnl_2.rom',
      u14: 'https://s3-eu-west-1.amazonaws.com/foo-temp/U14.PP',
      u15: 'https://s3-eu-west-1.amazonaws.com/foo-temp/U15.PP',
      u18: 'https://s3-eu-west-1.amazonaws.com/foo-temp/U18.PP',
    },
    switchMapping: [
      { id: 11, name: 'RIGHT FLIPPER' },
      { id: 12, name: 'LEFT FLIPPER' },
      { id: 13, name: 'CREDIT BUTTON' },
      { id: 14, name: 'PLUMB BOB TILT' },
      { id: 15, name: 'OUTHOLE' },
      { id: 16, name: 'THROUGH 1' },
      { id: 17, name: 'THROUGH 2' },
      { id: 18, name: 'THROUGH 3' },
      { id: 21, name: 'SLAM TILT' },
      { id: 22, name: 'COIN DOOR CLOSED' },
      { id: 23, name: 'TICKED OPTQ' },
      { id: 25, name: 'RIGHT SLING' },
      { id: 26, name: 'RIGHT RETURN' },
      { id: 27, name: 'RIGHT OUTLANE' },
      { id: 28, name: 'BALL SHOOTER' },
      { id: 31, name: 'FERRIS WHEEL' },
      { id: 33, name: 'L DROP 1' },
      { id: 34, name: 'L DROP 2' },
      { id: 35, name: 'L DROP 3' },
      { id: 36, name: 'LEFT SLING' },
      { id: 37, name: 'LEFT RETURN' },
      { id: 38, name: 'LEFT OUTLANE' },
      { id: 42, name: 'RIGHT STANDUP 1' },
      { id: 43, name: 'RIGHT STANDUP 2' },
      { id: 44, name: 'RIGHT STANDUP 3' },
      { id: 45, name: 'RIGHT STANDUP 4' },
      { id: 51, name: 'LEFT JET' },
      { id: 53, name: 'RIGHT JET' },
      { id: 55, name: 'DUNK THE DUMMY' },
      { id: 56, name: 'LEFT JUGGLER' },
      { id: 57, name: 'RIGHT JUGGLER' },
      { id: 61, name: 'HURRICANE ENTRY' },
      { id: 62, name: 'HURRICANE EXIT' },
      { id: 63, name: 'COMET ENTRY' },
      { id: 64, name: 'COMET EXIT' },
    ],
    skipWmcRomCheck: true,
    initialise: {
      closedSwitches: [ 16, 17, 18 ],
      initialAction: [
        {
          delayMs: 1000,
          source: 'cabinetInput',
          value: 16
        }
      ],
    }
  },
  {
    name: 'Terminator 2',
    version: 'L-8',
    rom: {
      u06: 'https://s3-eu-west-1.amazonaws.com/foo-temp/t2_l8.rom',
      u14: 'https://s3-eu-west-1.amazonaws.com/foo-temp/t2_u14.l3',
      u15: 'https://s3-eu-west-1.amazonaws.com/foo-temp/t2_u15.l3',
      u18: 'https://s3-eu-west-1.amazonaws.com/foo-temp/t2_u18.l3',
    },
    switchMapping: [
      { id: 11, name: 'RIGHT FLIPPER' },
      { id: 12, name: 'LEFT FLIPPER' },
      { id: 13, name: 'START BUTTON' },
      { id: 14, name: 'PLUMB BOB TILT' },
      { id: 15, name: 'THROUGH LEFT' },
      { id: 16, name: 'THROUGH CENTER' },
      { id: 17, name: 'THROUGH RIGHT' },
      { id: 18, name: 'OUTHOLE' },
      { id: 21, name: 'SLAM TILT' },
      { id: 22, name: 'COIN DOOR CLOSED' },
      { id: 23, name: 'TICKED OPTQ' },
      { id: 25, name: 'LEFT OUT LANE' },
      { id: 26, name: 'LEFT RET. LANE' },
      { id: 27, name: 'RIGHT RET. LANE' },
      { id: 28, name: 'RIGHT OUT LANE' },
      { id: 31, name: 'GUN LOADED' },
      { id: 32, name: 'GUN MARK' },
      { id: 33, name: 'GUN HOME' },
      { id: 34, name: 'GRIP TRIGGER' },
      { id: 36, name: 'STAND MID LEFT' },
      { id: 37, name: 'STAND MID CENTER' },
      { id: 38, name: 'STAND MID RIGHT' },
      { id: 41, name: 'LEFT JET' },
      { id: 42, name: 'RIGHT JET' },
      { id: 43, name: 'BOTTOM JET' },
      { id: 44, name: 'LEFT SLING' },
      { id: 45, name: 'RIGHT SLING' },
      { id: 46, name: 'STAND RIGHT TOP' },
      { id: 47, name: 'STAND RIGHT MID' },
      { id: 48, name: 'STAND RIGHT BOT' },
      { id: 51, name: 'LEFT LOCK' },
      { id: 53, name: 'LO ESCAPE ROUTE' },
      { id: 54, name: 'HI ESCAPE ROUTE' },
      { id: 55, name: 'TOP LOCK' },
      { id: 56, name: 'TOP LANE LEFT' },
      { id: 57, name: 'TOP LANE CENTER' },
      { id: 58, name: 'TOP LANE RIGHT' },
      { id: 61, name: 'LEFT RAMP ENTRY' },
      { id: 62, name: 'LEFT RAMP MADE' },
      { id: 63, name: 'RIGHT RAMP ENTRY' },
      { id: 64, name: 'RIGHT RAMP MADE' },
      { id: 65, name: 'LO CHASE LOOP' },
      { id: 66, name: 'HI CHASE LOOP' },
      { id: 71, name: 'TARGET 1 HI' },
      { id: 72, name: 'TARGET 2' },
      { id: 73, name: 'TARGET 3' },
      { id: 74, name: 'TARGET 4' },
      { id: 75, name: 'TARGET 5 LOW' },
      { id: 76, name: 'BALL POPPER' },
      { id: 77, name: 'DROP TARGET' },
      { id: 78, name: 'SHOOTER' },
    ],
    skipWmcRomCheck: true,
    initialise: {
      closedSwitches: [ 15, 16, 17 ],
      initialAction: [
        {
          delayMs: 1000,
          source: 'cabinetInput',
          value: 16
        }
      ],
    }
  },
  {
    name: 'Indiana Jones: The Pinball Adventure',
    version: 'L-7',
    rom: {
      u06: 'https://s3-eu-west-1.amazonaws.com/foo-temp/ijone_l7.rom',
    },
    switchMapping: [
      { id: 11, name: 'SINGLE DROP' },
      { id: 12, name: 'BUY-IN BUTTON' },
      { id: 13, name: 'START BUTTON' },
      { id: 14, name: 'PLUMB BOB TILT' },
      { id: 15, name: 'LEFT OUTLANE' },
      { id: 16, name: 'LEFT RETURN LANE' },
      { id: 17, name: 'RGHT RETURN LANE' },
      { id: 18, name: 'RGHT OUTLANE TOP' },
      { id: 21, name: 'SLAM TILT' },
      { id: 22, name: 'COIN DOOR CLOSED' },
      { id: 23, name: 'TICKED OPTQ' },
      { id: 25, name: '(I)NDY LANE)' },
      { id: 26, name: 'I(N)DY LANE' },
      { id: 27, name: 'IN(D)Y LANE' },
      { id: 28, name: 'IND(Y) LANE' },
      { id: 31, name: 'LEFT EJECT' },
      { id: 32, name: 'EXIT IDOL' },
      { id: 33, name: 'LEFT SLINGSHOT' },
      { id: 34, name: 'GUN TRIGGER' },
      { id: 35, name: 'LEFT JET' },
      { id: 36, name: 'RIGHT JET' },
      { id: 37, name: 'BOTTOM JET' },
      { id: 38, name: 'CENTER STANDUP' },
      { id: 41, name: 'LEFT RAMP ENTER' },
      { id: 42, name: 'RIGHT RAMP ENTER' },
      { id: 43, name: 'TOP IDOL ENTER' },
      { id: 44, name: 'RIGHT POPPER' },
      { id: 45, name: 'CENTER ENTER' },
      { id: 46, name: 'TOP POST' },
      { id: 47, name: 'SUBWAY LOOPKUP' },
      { id: 48, name: 'RIGHT SLINGSHOT' },
      { id: 51, name: 'ADVENT(U)RE TRGT' },
      { id: 52, name: 'ADVENTU(R)E TRGT' },
      { id: 53, name: 'ADVENTUR(E) TRGT' },
      { id: 54, name: 'LEFT LOOP TOP' },
      { id: 55, name: 'LEFT LOOP BOTTOM' },
      { id: 56, name: 'RIGHT LOOP TOP' },
      { id: 57, name: 'RIGHT LOOP BOT.' },
      { id: 58, name: 'RGHT OUTLANE BOT' },
      { id: 61, name: '(A)DVENTURE TRGT' },
      { id: 62, name: 'A(D)VENTURE TRGT' },
      { id: 63, name: 'AD(V)ENTURE TRGT' },
      { id: 64, name: 'CAPTVE VALL BACK' },
      { id: 65, name: 'MINI TOP LEFT' },
      { id: 66, name: 'MINI MID TOP LFT' },
      { id: 67, name: 'MINI MID BOT LFT' },
      { id: 68, name: 'MINI COTTOM LEFT' },
      { id: 71, name: 'CAPTVE BALL FRNT' },
      { id: 72, name: 'MINI TOP HOLE' },
      { id: 73, name: 'MINI BOTTOM HOLE' },
      { id: 74, name: 'RIGHT RAMP MADE' },
      { id: 75, name: 'MINI TOP RIGHT' },
      { id: 76, name: 'MINI MID TOP RGT' },
      { id: 77, name: 'MINI MID BOT RGT' },
      { id: 78, name: 'MINI BOTTOM RGT' },
      { id: 81, name: 'TROUGH 6' },
      { id: 82, name: 'TROUGH 5' },
      { id: 83, name: 'TROUGH 4' },
      { id: 84, name: 'TROUGH 3' },
      { id: 85, name: 'TROUGH 2' },
      { id: 86, name: 'TROUGH 1' },
      { id: 87, name: 'TOP TROUGH' },
      { id: 88, name: 'SHOOTER' },
      //TODO support
      /*
      { id: F1, name: 'L FLIPPER EOS' },
      { id: F2, name: 'R FLIPPER BUTTON' },
      { id: F3, name: 'L FLIPPER EOS' },
      { id: F4, name: 'L FLIPPER BUTTON' },
      { id: F5, name: 'DROP ADV(E)NTURE' },
      { id: F6, name: 'DROP ADVE(N)TURE' },
      { id: F7, name: 'DROP ADVEN(T)URE' },
      { id: F8, name: 'LEFT RAMP MODE' },
      */
    ],
    skipWmcRomCheck: true,
    initialise: {
      closedSwitches: [ 81, 82, 83, 84, 85, 86 ],
      initialAction: [
        {
          delayMs: 1000,
          source: 'cabinetInput',
          value: 16
        }
      ],
    }
  },
  {
    name: 'Gilligan\'s Island',
    version: 'L-9',
    rom: {
      u06: 'https://s3-eu-west-1.amazonaws.com/foo-temp/gilli_l9.rom',
      u14: 'https://s3-eu-west-1.amazonaws.com/foo-temp/gi_u14.l2',
      u15: 'https://s3-eu-west-1.amazonaws.com/foo-temp/gi_u15.l2',
      u18: 'https://s3-eu-west-1.amazonaws.com/foo-temp/gi_u18.l2',
    },
    switchMapping: [
      { id: 11, name: 'RIGHT FLIPPER' },
      { id: 12, name: 'LEFT FLIPPER' },
      { id: 13, name: 'START BUTTON' },
      { id: 14, name: 'PLUMB BOB TILT' },
      { id: 16, name: 'THROUGH LEFT' },
      { id: 17, name: 'THROUGH RIGHT' },
      { id: 18, name: 'OUTHOLE' },
      { id: 21, name: 'SLAM TILT' },
      { id: 22, name: 'COIN DOOR CLOSED' },
      { id: 23, name: 'TICKED OPTQ' },
      { id: 25, name: 'LEFT OUT LANE' },
      { id: 26, name: 'LEFT RETURN LN' },
      { id: 27, name: 'RIGHT RETURN LN' },
      { id: 28, name: 'RIGHT OUT LANE' },
      { id: 31, name: 'PAYOFF MID LEFT' },
      { id: 32, name: 'RIGHT 10PT' },
      { id: 33, name: 'LEFT LOCK' },
      { id: 34, name: 'LEFT STAND UP' },
      { id: 36, name: 'LEFT BANK LEFT' },
      { id: 37, name: 'LEFT BANK MIDDLE' },
      { id: 38, name: 'LEFT BANK RIGHT' },
      { id: 41, name: 'LEFT JET' },
      { id: 42, name: 'RIGHT JET' },
      { id: 43, name: 'BOTTOM JET' },
      { id: 44, name: 'LEFT SLING' },
      { id: 45, name: 'RIGHT SLING' },
      { id: 46, name: 'RIGHT BANK LEFT' },
      { id: 47, name: 'RIGHT BANK MID' },
      { id: 48, name: 'RIGHT BANK RIGHT' },
      { id: 51, name: 'LAGOON - N' },
      { id: 52, name: 'LAGOON - O' },
      { id: 53, name: 'LAGOON - O' },
      { id: 54, name: 'LAGOON - G' },
      { id: 55, name: 'LAGOON - A' },
      { id: 56, name: 'LAGOON - L' },
      { id: 57, name: 'RAMP_SUP' },
      { id: 58, name: 'JET 10PTS' },
      { id: 61, name: 'ISLAND ENTRANCE' },
      { id: 62, name: 'RAMP STATUS' },
      { id: 63, name: 'LEFT LOOP' },
      { id: 64, name: 'RIGHT LOOP' },
      { id: 65, name: 'S_TURN' },
      { id: 66, name: 'BALL POPPER' },
      { id: 67, name: 'TOP EJECT' },
      { id: 68, name: 'TOP RIGHT' },
      { id: 71, name: 'PAYOFF TOP LEFT' },
      { id: 72, name: 'PAYOFF TOP RITE' },
      { id: 73, name: 'PAYOFF BOT RITE' },
      { id: 74, name: 'PAYOFF BOT LEFT' },
      { id: 75, name: 'LOCK LANE' },
      { id: 76, name: 'WHEEL LOCK' },
      { id: 77, name: 'WHEEL OPTO' },
      { id: 78, name: 'SHOOTER' },
      { id: 83, name: 'TOP LEFT LOOP' },
      { id: 84, name: 'TOP RIGHT LOOP' },
    ],
    skipWmcRomCheck: true,
    initialise: {
      closedSwitches: [ 16, 17 ],
      initialAction: [
        {
          delayMs: 1000,
          source: 'cabinetInput',
          value: 16
        }
      ],
    }
  },
  {
    name: 'FreeWPC T2',
    version: 'FreeWPC 1.00',
    rom: {
      u06: 'https://s3-eu-west-1.amazonaws.com/foo-temp/ft20_32.rom',
      u14: 'https://s3-eu-west-1.amazonaws.com/foo-temp/t2_u14.l3',
      u15: 'https://s3-eu-west-1.amazonaws.com/foo-temp/t2_u15.l3',
      u18: 'https://s3-eu-west-1.amazonaws.com/foo-temp/t2_u18.l3',
    },
    switchMapping: [
      { id: 11, name: 'RIGHT FLIPPER' },
      { id: 12, name: 'LEFT FLIPPER' },
      { id: 13, name: 'START BUTTON' },
      { id: 14, name: 'PLUMB BOB TILT' },
      { id: 15, name: 'TROUGH LEFT' },
      { id: 16, name: 'TROUGH CENTER' },
      { id: 17, name: 'TROUGH RIGHT' },
      { id: 18, name: 'OUTHOLE' },
      { id: 21, name: 'SLAM TILT' },
      { id: 23, name: 'TICKED OPTQ' },
      { id: 25, name: 'LEFT OUT LANE' },
      { id: 26, name: 'LEFT RET. LANE' },
      { id: 27, name: 'RIGHT RET. LANE' },
      { id: 28, name: 'RIGHT OUT LANE' },
      { id: 34, name: 'LAUNCH BUTTON' },
      { id: 36, name: 'STAND MID LEFT' },
      { id: 37, name: 'STAND MID CENTER' },
      { id: 38, name: 'STAND MID RIGHT' },
      { id: 41, name: 'LEFT JET' },
      { id: 42, name: 'RIGHT JET' },
      { id: 43, name: 'BOTTOM JET' },
      { id: 44, name: 'LEFT SLING' },
      { id: 45, name: 'RIGHT SLING' },
      { id: 46, name: 'STAND RIGHT TOP' },
      { id: 47, name: 'STAND RIGHT MID' },
      { id: 48, name: 'STAND RIGHT BOT' },
      { id: 51, name: 'LEFT LOCK' },
      { id: 53, name: 'LO ESCAPE ROUTE' },
      { id: 54, name: 'HI ESCAPE ROUTE' },
      { id: 55, name: 'TOP LOCK' },
      { id: 56, name: 'TOP LANE LEFT' },
      { id: 57, name: 'TOP LANE CENTER' },
      { id: 58, name: 'TOP LANE RIGHT' },
      { id: 61, name: 'LEFT RAMP ENTRY' },
      { id: 62, name: 'LEFT RAMP MADE' },
      { id: 63, name: 'RIGHT RAMP ENTRY' },
      { id: 64, name: 'RIGHT RAMP MADE' },
      { id: 65, name: 'LO CHASE LOOP' },
      { id: 66, name: 'HI CHASE LOOP' },
      { id: 71, name: 'TARGET 1 HI' },
      { id: 72, name: 'TARGET 2' },
      { id: 73, name: 'TARGET 3' },
      { id: 74, name: 'TARGET 4' },
      { id: 75, name: 'TARGET 5 LOW' },
      { id: 76, name: 'BALL POPPER' },
      { id: 77, name: 'DROP TARGET' },
      { id: 78, name: 'SHOOTER' },
    ],
    skipWmcRomCheck: false,
    initialise: {
      closedSwitches: [ 15, 16, 17, 22 ],
    }
  },
  {
    name: 'Fish Tales',
    version: 'P-4',
    rom: {
      u06: 'https://s3-eu-west-1.amazonaws.com/foo-temp/ft_p4.u6',
      u14: 'https://s3-eu-west-1.amazonaws.com/foo-temp/t2_u14.l3',
      u15: 'https://s3-eu-west-1.amazonaws.com/foo-temp/t2_u15.l3',
      u18: 'https://s3-eu-west-1.amazonaws.com/foo-temp/t2_u18.l3',
    },
    skipWmcRomCheck: true,
    initialise: {
      initialAction: [
        {
          delayMs: 1000,
          source: 'cabinetInput',
          value: 16
        }
      ],
    }
  },
  {
    name: 'High Speed II: The Getaway',
    version: 'P-C',
    rom: {
      u06: 'https://s3-eu-west-1.amazonaws.com/foo-temp/u6-p-c.rom',
      u18: 'https://s3-eu-west-1.amazonaws.com/foo-temp/u18-sp1.rom',
    },
    skipWmcRomCheck: true,
    initialise: {
      initialAction: [
        {
          delayMs: 1000,
          source: 'cabinetInput',
          value: 16
        }
      ],
    }
  },
  {
    name: 'The Addams Family Special',
    version: 'LA-3',
    rom: {
      u06: 'https://s3-eu-west-1.amazonaws.com/foo-temp/U6-LA3.ROM',
      u15: 'https://s3-eu-west-1.amazonaws.com/foo-temp/AG_U15_S.L1',
      u18: 'https://s3-eu-west-1.amazonaws.com/foo-temp/AG_U18_S.L1',
    },
    skipWmcRomCheck: true,
    initialise: {
      closedSwitches: [ 22, 53, 54, 55 ],
      initialAction: [
        {
          delayMs: 1000,
          source: 'cabinetInput',
          value: 16
        }
      ],
    }
  },
  {
    name: 'Twilight Zone',
    version: 'H-8',
    rom: {
      u06: 'https://s3-eu-west-1.amazonaws.com/foo-temp/tz_h8.u6',
      u14: 'https://s3-eu-west-1.amazonaws.com/foo-temp/Bally_1993_Twilight_Zone_TZ_Sound_P3_U14.rom',
      u15: 'https://s3-eu-west-1.amazonaws.com/foo-temp/Bally_1993_Twilight_Zone_TZ_Sound_P3_U15.rom',
      u18: 'https://s3-eu-west-1.amazonaws.com/foo-temp/Bally_1993_Twilight_Zone_TZ_Sound_P3_U18.rom',
    },
    skipWmcRomCheck: true,
    initialise: {
      initialAction: [
        {
          delayMs: 1000,
          source: 'cabinetInput',
          value: 16
        }
      ],
    }
  },
  {
    name: 'Hot Shot Basketball',
    version: 'P-8',
    rom: {
      u06: 'https://s3-eu-west-1.amazonaws.com/foo-temp/hshot_p8.u6',
      u14: 'https://s3-eu-west-1.amazonaws.com/foo-temp/hshot_l1.u14',
      u18: 'https://s3-eu-west-1.amazonaws.com/foo-temp/hshot_l1.u18',
    },
    skipWmcRomCheck: true,
    initialise: {
      initialAction: [
        {
          delayMs: 1000,
          source: 'cabinetInput',
          value: 16
        }
      ],
    }
  },
  {
    name: 'The Party Zone',
    version: 'L-2',
    rom: {
      u06: 'https://s3-eu-west-1.amazonaws.com/foo-temp/PZ_U6.L2',
      u14: 'https://s3-eu-west-1.amazonaws.com/foo-temp/pz_u14.l1',
      u15: 'https://s3-eu-west-1.amazonaws.com/foo-temp/pz_u15.l1',
      u18: 'https://s3-eu-west-1.amazonaws.com/foo-temp/pz_u18.l1',
    },
    skipWmcRomCheck: true,
    initialise: {
      initialAction: [
        {
          delayMs: 1000,
          source: 'cabinetInput',
          value: 16
        }
      ],
    }
  },

];

function getAllNames() {
  return wpcGames
    .filter((entry) => {
      return entry.rom && entry.rom.u06 && entry.rom.u18;
    })
    .map((entry) => entry.name);
}

function getByName(name) {
  return wpcGames.find((entry) => entry.name === name);
}

// HINT: make sure CORS is correct
