/* ============================================================
   DATA/NOTES.JS  —  THIS is the only file you edit for notes.
   ------------------------------------------------------------
   1. ADD A NEW SUBJECT (a new tile on the Notes page):

        registerNotesSubject("id-no-spaces", "Display Name");

   2. ADD A NOTE INSIDE A SUBJECT:

        registerNotesTopic("id-no-spaces", "Note Title", `

          Plain text becomes a paragraph.

          Leave a BLANK LINE between paragraphs.

          - a line starting with "- " becomes a bullet
          - another bullet

          ## A Subheading
          More text under the subheading.

          [image: filename.png]
          (drop the actual file into the /images folder)

        `);

   That's it — no HTML anywhere below. To add more notes, copy a
   registerNotesTopic(...) block, change the subject id / title /
   text, save, refresh. To add a whole new subject, copy a
   registerNotesSubject(...) line and give it a new id.
   ============================================================ */

registerNotesSubject("navigation", "Navigation");

registerNotesTopic("navigation", "Navigations", `

## Shape of Earth:
## Equator:
## Great Circle:
## Rhumbline
## Prime Meridian/Greenwich Meridian:
## Latitude
## Graticule
## Small circle
## Meridian
## Longitude
## Spatial Small Circle
## Earth rotates :
## Dev. of Earth from normal axis
## Division of degree:
## Change in Longitude:
## Nautical mile:
## Kilometer
## Map
## Chart
## Types of Charts
## Classification of projections:
## Properties of ideal projection
## Mercator Chart
## Point of Projection
## Units conversio
## Pressure Instrument
## ASI
## Altimeter
## VSI
## Gyro Instrument
## Properties of Gyro
## Types of Gyro
## DGI
## AH
## TSI
## Endurance
## Q-codes
## VOR

`);

registerNotesSubject("meteorology", "Aviation Meteorology - SPL");
registerNotesTopic("meteorology", "SPL ORAL ", `

## What is Aviation Meteorology?
- It is the study of atmosphere, composition, structure, properties and behaviour\n\n

## What is Atmosphere?
- It is a layer of gases surrounding the Earth and extending up to 500kms

## What is weather?
- It is the change in atmoshpere due to change in temperature

## What is season?
- It is the certain type of weather repeates a certain time of year

## Climate?
- It is a type of season which repeats every year for longer duration approx 30 years

## What are the compositon of atmoshere?
- Atmpsphere is mainly composed of mainly 3 things:\n
1. Air - 78% Nitrogen, 21% Oxygen, 0.93% Argon, 0.03% of CO2 and remaining other gases.\n 
2. Moisture - 3 to 4 % of moisture\n
3. Solid particles - Dust, salt, pollen grains\n

## Layers of atmosphere:
- 4 Layers:\n
1. Troposphere\n
2. Stratosphere\n
3. Mesosphere\n
4. Thermosphere\n

## What is Troposphere?
## What is Tropopause?
## What is Lapse rate, Inversion & Isothermal?
## ISA condition:
## Atmospheric Pressure:
## MSL, Height, Altitude, Elevation:
## Q-Codes:
## Instrument used to measure Px:
## Temperature & Heat
## Methods of Heat transfer:
Conduction:\n
Convection:
Radiation:
## Sensible heat & Latent heat:
## Diurnal Variation of Temperature and Pressure:
## True altitude and Indicated Altitude:
## Pressure altitude:
## Density altitude:
## Humidity
## Dry bulb temperature
## Wet bulb temperature
## Dew point temperature
## Wind
## PFG
## Coriolis Force
## Sea & Land Breeze
## Anabatic & Katabatic wind
## Fohn wind
## Factors reducing visibility
## RVR
## CAVOK
## Clouds
## Classification of clouds:
## Precipitation
## Special types of clouds:
## Life cycle of CB:
## Units and Instruments to measure
## Optical Phenomena
## Airmass
## Frontal Surface:
## Front:
## Cold Front
## Warm Front
## Occluded Front
## Stationary Front 





`);

registerNotesSubject("regulation", "Air Regulation");

registerNotesTopic("regulation", "Definitions — Aircraft, Aerodrome & Airspace", `

## Aircraft, Aeroplane & Aerodrome
Aircraft: Any machine which can derive support in the atmosphere from the reactions of the air other than reactions of the air against the earth's surface, and includes balloons, kites, airships and gliders, whether fixed or free.

Aeroplane: A power-driven, heavier-than-air aircraft deriving its lift in flight chiefly from aerodynamic reactions on surfaces which remain fixed under given conditions of flight.

Aerodrome: A defined area on land or water (including any buildings, installations and equipment) intended to be used either wholly or in part for the arrival, departure and surface movement of aircraft.

Aerodrome Beacon: An aeronautical beacon used to indicate the location of an aerodrome from the air.

## Air Traffic Services
Air Traffic Service Reporting Office: A unit established for the purpose of receiving reports concerning air traffic services and flight plans submitted before departure.

Air Traffic Control Service: A service provided for the purpose of:
- Preventing collisions between aircraft, and on the manoeuvring area between aircraft and obstructions; and
- Expediting and maintaining an orderly flow of air traffic.

## Altitude, Height & Airspace
Altitude: The vertical distance of a level, a point or an object considered as a point, measured from mean sea level.

Height: The vertical distance of a level, a point or an object considered as a point, measured from a specified datum.

Controlled Airspace: The airspace of defined dimensions within which Air Traffic Control service is provided in accordance with the airspace classification.

Prohibited Area: The area over which navigation of aircraft is prohibited.

Restricted Area: Airspace of defined dimensions above the land area or territorial water of a state within which flight of aircraft is restricted in accordance with certain specified conditions.

Danger Area: Airspace of defined dimensions within which activities dangerous to the flight of aircraft may exist at a specified time.

## Balloon & Crew
Balloon: A non-power-driven, lighter-than-air aircraft.

Co-Pilot: A licensed pilot serving in any piloting capacity other than as pilot-in-command, but excluding a pilot who is on board the aircraft for the sole purpose of receiving flight instruction.

Flight Crew Member: A licensed crew member charged with duties essential to the operation of an aircraft during flight time.

## Flight Time
Flight Time: The total flight time from the moment the aircraft first moves under its own power for the purpose of taking off, until the moment it comes to rest at the end of the flight.

Solo Flight Time: The flight time during which the pilot is the sole occupant of an aircraft.

Dual Flight Time: The flight time during which a person is receiving flight instruction from a pilot on board the aircraft.

## Records & Plans
Log Book: A book in the prescribed format for logging flight time.

Flight Plan: Specified information provided to air traffic services units, relative to an intended flight or portion of a flight of an aircraft.

`);

registerNotesTopic("regulation", "Definitions — Movement Area, Taxiways & Visibility", `

## Take-off & Landing Area
Take-off: Includes all the successive positions of an aerodyne from the moment it moves from rest until the moment of starting normal flight.

Landing Area: That part of a movement area intended for the landing or take-off of aircraft.

## Manoeuvring, Movement Area & Apron
Manoeuvring Area: That part of an aerodrome to be used for the take-off, landing and taxiing of aircraft. This excludes aprons.

Movement Area: That part of an aerodrome to be used for the take-off, landing and taxiing of aircraft, consisting of the manoeuvring area and the apron(s).

Apron: A defined area on a land aerodrome, intended to accommodate aircraft for the purposes of loading or unloading passengers, mail or cargo, fuelling, parking or maintenance.

Emergency Frequency: 121.5 MHz

## Runway & Taxiways
Runway: A defined rectangular area on a land aerodrome prepared for the landing and take-off of aircraft.

Taxiway: A defined path on a land aerodrome established for the taxiing of aircraft, intended to provide a link between one part of the aerodrome and another, including:
- Aircraft Stand Taxi Lane: A portion of an apron designated as a taxiway and intended to provide access to aircraft stands only.
- Apron Taxiway: A portion of a taxiway system located on an apron and intended to provide a through taxi route across the apron.
- Rapid Exit Taxiway: A taxiway that lets aircraft leave the runway at higher speeds so they vacate it quicker, letting another aircraft land or take off in a shorter interval. Busy airports typically build these.

## Visibility
Ground Visibility: The visibility at an aerodrome, as reported by an accredited observer or by a suitable automatic system.

Flight Visibility: The visibility forward from the cockpit of an aircraft in flight.

`);

registerNotesTopic("regulation", "Visual & Instrument Flight Rules (VFR / IFR)", `

## Flight Rules
Visual Flight Rules (VFR): Rules that govern flights conducted under Visual Meteorological Conditions (VMC).

VFR Flights: Flights conducted in accordance with Visual Flight Rules.

VFR flights can be categorised as:
- Day VFR Flight
- Night VFR Flight
- Special VFR Flight

Day VFR Flight: Flights conducted in accordance with Visual Flight Rules during the hours of daylight.

Night VFR Flight: Flights conducted in accordance with Visual Flight Rules during the hours of nighttime, by a flying club or institute's aircraft operated locally.

Special VFR Flight: A VFR flight cleared by Air Traffic Control to operate within a control zone in meteorological conditions below VMC.

## VFR Restrictions
Except when operating as a special VFR flight, VFR flights shall be conducted so that the aircraft is flown in conditions of visibility and distance from clouds equal to or greater than those specified in the VMC minima table.

VFR flights shall not be operated between sunset and sunrise, except as local flying of a flying club's or institute's aircraft for training purposes, within the vicinity of the aerodrome.

VFR flights shall not be operated:
- Above Flight Level 150 (FL150), and
- At transonic or supersonic speeds.

Except when necessary for take-off or landing, or except by permission from the appropriate authority, a VFR flight shall not be flown:
- Over congested areas of cities, towns or settlements, or over an open-air assembly of persons, at a height less than 300 m (1000 ft) above the highest obstacle within a radius of 600 m from the aircraft; or
- At a height less than 150 m (500 ft) above the ground or water.

VMC (Visual Meteorological Conditions): Meteorological conditions expressed in terms of visibility, distance from clouds and ceiling, equal to or better than specified minima.

## Instrument Flight Rules
Instrument Flight Rules (IFR): Rules that govern flights conducted under Instrument Meteorological Conditions (IMC).

IFR Flights: Flights conducted in accordance with Instrument Flight Rules.

IMC (Instrument Meteorological Conditions): Meteorological conditions expressed in terms of visibility, distance from clouds and ceiling, less than the specified minima.

## Visibility & Ceiling — Formal Definitions
Visibility: Ability, as determined by atmospheric conditions and expressed in units of distance, to see and identify prominent unlighted objects by day and lighted objects by night.

As per Civil Aviation Requirements (CAR), visibility for aeronautical purposes is:
- The greatest distance at which a black object of suitable dimensions, situated near the ground, can be seen and recognised when observed against a bright background; or
- The greatest distance at which lights in the vicinity of 1000 candelas can be seen and identified against an unlit background.

Ceiling: The height above ground or water of the base of the lowest layer of cloud, below 6000 m (20,000 ft), covering more than half the sky.

## Day Light & Night Light
Day Light: The period of time when the centre of the sun's disc is less than 6 degrees below the horizon, or the period commencing one half hour before sunrise and ending one half hour after sunset, in any place where the sun sets and rises daily.

Night Light: The period of time when the centre of the sun's disc is more than 6 degrees below the horizon, or the period commencing one half hour after sunset and ending one half hour before sunrise, in any place where the sun sets and rises daily.

`);

registerNotesTopic("regulation", "VMC Minima Table", `

Altitude Band / Airspace Class / Flight Visibility / Distance from Cloud:

- At and above 3050 m (10,000 ft) AMSL — Class A***, B, C, D, E, F, G — Flight visibility 8 km — Distance from cloud: 1500 m horizontally, 300 m (1000 ft) vertically.
- Below 3050 m (10,000 ft) AMSL and above 900 m (3000 ft) AMSL, or above 300 m (1000 ft) above terrain (whichever is higher) — Class A***, B, C, D, E, F, G — Flight visibility 5 km — Distance from cloud: 1500 m horizontally, 300 m (1000 ft) vertically.
- At and below 900 m (3000 ft) AMSL, or 300 m (1000 ft) above terrain (whichever is higher), Class A***, B, C, D, E — Flight visibility 5 km — Distance from cloud: 1500 m horizontally, 300 m (1000 ft) vertically.
- Same altitude band, Class F, G — Flight visibility 5 km** — Clear of cloud and with the surface in sight.

*   When the height of the transition altitude is lower than 3050 m (10,000 ft) AMSL, FL 100 should be used in lieu of 10,000 ft.

**  When so prescribed by the appropriate ATS authority, flight visibilities reduced to not less than 3000 m may be permitted for flights operating:
- At speeds that, in the prevailing visibility, will give adequate opportunity to observe other traffic or any obstacles in time to avoid collision; or
- In circumstances where the probability of encounters with other traffic would normally be low, e.g. areas of low-volume traffic and aerial work at low levels.
- Helicopters may be permitted to operate down to 1000 m flight visibility, if manoeuvred at a speed that gives adequate opportunity to observe other traffic or obstacles in time to avoid collision.

*** The VMC minima in Class A airspace are included for guidance to pilots only, and do not imply acceptance of VFR flights in Class A airspace.

`);

registerNotesTopic("regulation", "Visual & Light Signals, and Air Traffic Services", `

## Urgency & Safety Signals
Urgency: A situation in which an aircraft has a very urgent message to transmit concerning the safety of a ship, an aircraft or other vehicle, or of some person on board or within sight.

Urgency signals:
- A signal by W/T or by any other signalling method, consisting of the group XXX.
- A signal sent by R/T, consisting of the spoken word "PAN PAN".

Safety Signals: The following signals, used either together or separately, mean that an aircraft is about to transmit a message concerning the safety of navigation or giving important meteorological warnings:
- A signal by Wireless Telegraphy or by any other signalling method, consisting of the group TTT.
- A signal sent by R/T, consisting of the spoken word "SECURITE" (pronounced "say-cure-i-tay").

## Light Signals for Aerodrome Traffic (from Aerodrome Control Tower)
- Steady green — Aircraft in flight: clear to land. Aircraft on ground: clear for take-off.
- Steady red — Aircraft in flight: give way to other aircraft and continue circling. Aircraft on ground: stop.
- Series of green flashes — Aircraft in flight: return for landing*. Aircraft on ground: clear to taxi.
- Series of red flashes — Aircraft in flight: aerodrome unsafe, do not land. Aircraft on ground: taxi clear of the landing area in use.
- Series of white flashes — Aircraft in flight: land at this aerodrome and proceed to apron. Aircraft on ground: return to starting point on aerodrome.
- Red pyrotechnic lights — Notwithstanding any previous instruction, do not land for the time being.

* Clearance to land and taxi clearance will be given in due course.

## Acknowledgement by an Aircraft
When in flight:
- During hours of daylight: by rocking the aircraft's wings (not expected in the base leg or final approach).
- During hours of darkness: by flashing the aircraft's landing lights ON and OFF twice. If not equipped, switch the navigation lights ON and OFF twice.

When on the ground:
- During day: by moving ailerons or rudder.
- During night: by flashing the aircraft's landing lights ON and OFF twice. If not equipped, switch the navigation lights ON and OFF twice.

## Visual Signals — Restricted / Prohibited / Danger Areas
Visual signals are used to warn an aircraft that it is flying in the vicinity of a restricted, prohibited or danger area.

By day and by night, a series of projectiles is discharged at intervals of 10 seconds, each showing on bursting red and green lights or stars. This indicates to the aircraft that it is flying in the vicinity of a restricted, prohibited or danger area, and that the aircraft is to take such remedial action as may be necessary.

Note: These signals may be emitted either from the ground or from another aircraft.

## Air Traffic Services and the Units Providing Them
- Flight Information Service — provided by the Flight Information Centre & ATC Units.
- Alerting Service — provided by Alerting Posts (Flight Information Centre & ATC Units).
- Air Traffic Control Service:
  - Area Control Service — provided by the Area Control Centre.
  - Approach Control Service — provided by the Approach Control Office.
  - Aerodrome Control Service — provided by the Aerodrome Control Tower.

Objectives of ATC:
- To prevent collisions between aircraft, and on the manoeuvring area between aircraft and obstructions.
- To expedite and maintain an orderly flow of air traffic.

Objective of Flight Information Service: To provide advice and information useful for the safe and efficient conduct of flights.

Alerting Service: Notify the appropriate organisation regarding an aircraft in need of search and rescue aid, and assist such organisation as required.

Note: All controlled aerodromes (civil and defence) act as alerting posts.

`);

registerNotesTopic("regulation", "Student Pilot Licence (SPL) — Requirements & Privileges", `

## Categories of Pilot Licences
- Student Pilot Licence (SPL)
- Private Pilot Licence (PPL)
- Commercial Pilot Licence (CPL)
- Airline Transport Pilot Licence (ATPL)

## SPL Requirements (Aircraft Rules 1937, Schedule II, Section B)
Age: Not less than 16 years.

Educational qualification: Applicant should have passed Class Ten or its equivalent examination from a recognised board.

Medical fitness: From a registered medical practitioner approved by DGCA, on the prescribed form.

Knowledge: Shall pass an oral examination in the following subjects:
- Air Regulation
- Aircraft and Engine
- Air Navigation
- Aviation Meteorology

## Validity
Validity of licence: 5 years from the date of issue of the licence. The licence shall lapse on the holder obtaining a pilot's licence of a higher order on the same category of aircraft.

Validity of medical: 12 months from the date of medical examination for Class I; 24 months for Class II.

Aircraft Rating: The licence shall indicate the class and types of aircraft the holder is entitled to fly. Only those types of aircraft for which the candidate has passed the examination in Aircraft and Engines may be entered in the licence.

## Privileges of an SPL Holder
Subject to the validity of aircraft ratings in the licence and compliance with the relevant provisions of the Rules, the privileges of the holder of a Student Pilot's Licence shall be to fly within Indian territory only, as pilot-in-command of any aeroplane, helicopter or glider entered in the aircraft rating of the licence, provided that:
- He shall fly at all times under the authority and supervision of a Flight Instructor (FI) or an Approved Examiner.
- He shall fly under VFR only.
- He shall not exercise the privileges of the SPL when the holder's FRTOL(R) is not valid.
- He shall not carry passengers, animals or goods, or fly for hire, reward or remuneration of any kind.
- He shall not undertake cross-country flights unless he has a minimum of ten hours of solo flight time and has passed the examinations in Air Navigation and Aviation Meteorology.

## Notes
- The Student Pilot's Licence shall be issued by a Flying Club or Government Flying Training School specifically authorised in this regard, subject to the conditions laid down by the Director-General.
- The oral examination shall be conducted by the Chief Flight Instructor (CFI) of the approved flying training institute, in association with an officer of DGCA. Minimum pass marks: 50%.
- The FRTOL(R) oral and written examination is conducted by the CFI of the approved flying training institute. Minimum pass marks: 50%.
- A provisional SPL can be issued to a trainee who has passed the oral examination in Air Regulation and Aircraft and Engine. The holder of such an SPL shall be restricted to local flying only.
- Cross-country flight shall be undertaken only after completion of 10 hours of solo flying and after qualifying in the Air Navigation and Aviation Meteorology papers.

`);

registerNotesSubject("technical-general", "Technical General");

registerNotesTopic("technical-general", "PA-28-181 Archer III — Key Numbers", `

- Engine: Lycoming O-360-A4M, 180 BHP @ 2700 RPM
- Propeller: Sensenich fixed-pitch, two-blade
- Fuel: 100LL, 48 US gal total / 48 usable (two 24 gal tanks)
- Oil: 8 qt capacity, 6 qt minimum for flight
- Electrical: 28 V DC, 60 A alternator, 12 V battery

`);

/* ---------------- ADD YOUR NEXT SUBJECT HERE ----------------
registerNotesSubject("performance", "Aircraft Performance");
registerNotesTopic("performance", "Note Title", `

Your text here.

`);
------------------------------------------------------------- */