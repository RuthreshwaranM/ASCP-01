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


/* ------------------------------------------------------------
   1. INTRODUCTION
   ------------------------------------------------------------ */
registerNotesTopic("navigation", "Introduction to Air Navigation", `

## Navigation
- Navigation is the monitoring and controlling of the movement of an aircraft or vehicle from one place to another.
- All navigational techniques involve locating the navigator's position compared to known locations or patterns.

## Methods of Navigation
- Pilotage - navigation by reference only to landmarks.
- Dead Reckoning - technique based on mathematical calculations of time, speed, distance and direction to predict the movement of the aircraft.
- Radio Navigation - navigation by use of radio aids, i.e. signals broadcast by radio stations on the ground or from satellites.
- Celestial Navigation - navigation by measuring angles to heavenly bodies to determine position on the Earth.
- Inertial Navigation - navigation by self-contained airborne gyroscopic equipment or electronic computers that provide a continuous display of position.

`);


/* ------------------------------------------------------------
   2. THE EARTH
   ------------------------------------------------------------ */
registerNotesTopic("navigation", "The Earth - Shape, Rotation & Directions", `

## Shape of Earth
- The Earth is not a true sphere but an oblate spheroid.
- An oblate spheroid is the solid traced out by rotating an ellipse about its smaller (minor) axis.
- For the Earth the minor axis is the polar axis: polar diameter = 12,705.6 km.
- The major axis is the equatorial diameter = 12,748.6 km.
- Compression = (12,748.6 - 12,705.6) / 12,748.6 = 1/296.
- Compression is the ratio of the difference between the two diameters to the larger diameter.
- Different agencies have measured and modelled the Earth, each optimising for its own needs. ICAO has adopted WGS84 (World Geodetic Survey 1984) as the world standard.

## Poles
- The Poles are the extremities of the axis about which the Earth spins.

## Earth Rotates
- The Earth rotates about its own axis; the direction of spin is defined as EAST. West is the opposite of East.
- Viewed from above the North Pole, the Earth appears to rotate anti-clockwise (West to East).
- Facing East, the pole on the left is the North Pole and the pole on the right is the South Pole.
- One rotation = 360 degrees in 24 hours.

## Dev. of Earth from Normal Axis
- The Earth's axis is tilted at 23.5 degrees (23 1/2).
- The Plane of the Ecliptic and the Plane of the Equator are inclined to each other at 23.5 degrees.
- The Earth also revolves in an elliptical orbit around the Sun.

## Directions
- Cardinal Points: N, E, S, W.
- Quadrantal Points: the midway directions NE, SE, SW, NW.
- Direction is measured in degrees clockwise from North - the Sexagesimal System (circle of 360).
- North = 000, East = 090, South = 180, West = 270.
- A 3-figure group is always used (090, 064 - not 64) to avoid ambiguity, particularly when transmitting by RT.

`);


/* ------------------------------------------------------------
   3. CIRCLES & POSITION REFERENCE
   ------------------------------------------------------------ */
registerNotesTopic("navigation", "Circles on the Earth & Position Reference", `

## Great Circle
- A circle on the Earth's surface whose plane passes through the centre of the Earth. Its radius equals the radius of the Earth.
- Divides the sphere into two equal halves.
- An infinite number of great circles can be drawn through two diametrically opposite points.
- Only ONE great circle can pass through two points that are not diametrically opposite.
- The smaller arc of a great circle between two points is the shortest distance between them.
- Radio signals follow great circle paths.
- A great circle does not cross all meridians at the same angle, so heading must be changed at frequent intervals to follow a great circle route.

## Small Circle
- A circle on the Earth's surface whose plane does NOT pass through the centre of the Earth.
- Example: Parallels of Latitude.

## Rhumbline
- A curved line on the surface of the Earth which crosses all the meridians at the same angle (also called a Loxodromic route).
- Since the course is constant, it is easier to follow; on a Mercator chart it appears as a straight line.

## Equator
- A great circle whose plane is at 90 degrees to the axis of rotation of the Earth.
- Divides the Earth into the Northern and Southern Hemispheres.

## Meridian
- Meridians of Longitude are semi-great circles joining the poles.

## Prime Meridian / Greenwich Meridian
- The meridian that divides the Earth into the Eastern and Western Hemispheres.
- It is the reference (0 degree) for longitude.

## Latitude
- Parallels of Latitude are small circles whose planes are parallel to the plane of the Equator.
- Latitude of a place = the arc along the meridian through the place, from the Equator to the place.
- Maximum value 90 degrees N/S of the Equator.

## Longitude
- Longitude = the shorter arc along the Equator, from the Prime Meridian to the meridian passing through the place.
- Maximum value 180 degrees E/W of the Prime Meridian.
- A 3-figure group is used for longitude to avoid ambiguity.
- Example: 21 deg 28' N 080 deg 29' E can be written 2128N08029E.

## Graticule
- The network of parallels of latitude and meridians of longitude imagined to cover the Earth's surface.
- The Equator and Prime Meridian are the axes of this position reference system.

## Division of Degree
- 1 degree = 60 minutes (60')
- 1 minute = 60 seconds (60")
- 1 minute of arc along a great circle = 1 nautical mile.
- Equator to either Pole = 90 degrees = 90 x 60 = 5,400 nm.

`);


/* ------------------------------------------------------------
   4. DISTANCES & UNIT CONVERSIONS
   ------------------------------------------------------------ */
registerNotesTopic("navigation", "Distances & Units Conversion", `

## Nautical Mile
- 1 minute of arc subtended along a great circle.
- 1 nm = 6080 ft = 1852 m. ICAO has adopted 1 nm = 1852 m as the global standard.
- Since a nautical mile is really an angle, its length varies with distance from the centre of the Earth - it is longer at altitude than on the ground.
- Because of flattening at the poles, the nautical mile is longer at the poles than at the Equator.

## Kilometer
- 1/10,000th of the distance from the Equator to either Pole.
- So Equator to Pole = 10,000 km and the circumference of the Earth = 40,000 km.

## Units conversion - Distance
- 1 nautical mile (nm) = 6080 ft
- 1 statute mile (sm) = 5280 ft
- 1 kilometer (km) = 3280 ft
- 1 nm = 1.15 sm = 1.852 km
- 1 inch = 2.54 cm
- 1 metre = 3.28 ft
- 1 foot = 12 inches

## Units conversion - Fuel
- Litres to US Gallons: divide by 3.8 (US Gal to Litres: x 3.8)
- US Gallons to Imperial Gallons: divide by 1.2 (Imp Gal to US Gal: x 1.2)
- Imperial Gallons to Litres: x 4.5
- Litres to LBS: x 1.76 (when density is 0.8 kg/L, i.e. Litres x 0.8 = KGS)
- Litres to KGS: x 0.8
- US Gallons to LBS: x 6.7
- US Gallons to KGS: x 3.0
- Imperial Gallons to LBS: x 8.0
- Imperial Gallons to KGS: x 3.6
- KGS to LBS: x 2.2

## Units conversion - Temperature
- Fahrenheit to Celsius: C = 5/9 x (F - 32)
- Celsius to Fahrenheit: F = (9/5 x C) + 32

## Units conversion - Time
- 1 hour = 60 minutes = 3600 seconds
- 1 second = 10^3 milliseconds (ms) = 10^6 microseconds (us)

`);


/* ------------------------------------------------------------
   5. MAPS, CHARTS & PROJECTIONS
   ------------------------------------------------------------ */
registerNotesTopic("navigation", "Maps, Charts & Projections", `

## Chart
- A graphic representation of the Earth's surface produced specifically for navigation.
- When a projection contains only a graticule (with perhaps very few geographical features) it is called a chart.

## Map
- Contains both the graticule and an abundance of ground features and other information.

## Projection
- The transfer of information from the globe onto a flat paper chart is achieved by projection.
- Reduced Earth = a scale model of the Earth on which the projection of a chart is based.
- Perspective (geometric) projection: chart produced directly from a projection.
- Non-perspective projection: a projection that has been mathematically modified to suit navigation.

## Four Basic Elements in Map Construction
- Areas
- Shapes
- Bearings
- Distances
- According to the purpose of the map, one or more elements are preserved as correctly as possible, with unavoidable distortion in the rest.

## Properties of Ideal Projection
- Bearings / directions measured off the chart must be correct - such a chart is ORTHOMORPHIC.
- Conditions for orthomorphism: (1) meridians and parallels must intersect at right angles; (2) at any point, scale must be the same in all directions (or change at the same rate in all directions).
- ICAO also recommends that the chart should represent great circles as straight lines - such a chart is CONFORMAL.

## Classification of Projections
- Cylindrical: wrapping a cylinder of paper around the reduced earth.
- Conical: placing a cone of paper over the reduced earth and projecting the graticule on the cone.
- Azimuthal / Stereographic: placing a flat sheet of paper against a point on the Earth.
- The above three are perspective projections (not mathematically modified). Cylindrical and conical are not orthomorphic, so they must be modified for navigation.

## Point of Projection
- The position of the light source from which the graticule is projected onto the paper.
- (Not explained further in the PDF - the diagrams show a light source at the centre of the globe projecting onto a cylinder or cone.)

## Types of Charts
- Mercator chart - modified cylindrical projection.
- Lambert's Conformal Conic - modified conical projection.
- Polar Stereographic - from the azimuthal projection, used for polar areas.

## Mercator Chart
- A mathematically modified cylindrical projection, modified to make it orthomorphic.
- In the plain cylindrical projection the E-W scale expands at a different rate to the N-S scale.
- The latitude spacing is therefore adjusted to give equal expansion.

## Lambert's Conformal Conic Chart
- A mathematically modified conical projection, made orthomorphic.
- Also represents great circles as approximate straight lines - hence "Conformal".
- This is the chart primarily used for most navigation purposes.

## Polar Stereographic Chart
- Produced from the azimuthal projection; basically used for polar areas.

`);


/* ------------------------------------------------------------
   6. TERRESTRIAL MAGNETISM & COMPASS
   ------------------------------------------------------------ */
registerNotesTopic("navigation", "Terrestrial Magnetism & Magnetic Compass", `

## Terrestrial Magnetism
- The Earth is itself a magnet with a Blue pole in the vicinity of the True North Pole.
- A freely suspended compass needle aligns with its Red (north-seeking) pole pointing to the Earth's North Magnetic Pole.
- Magnetic North = the horizontal direction indicated by a freely suspended magnet influenced only by the Earth's magnetic field.
- Magnetic direction is measured clockwise from Magnetic North through 360 degrees and suffixed M, e.g. 043(M), 270(M).

## Direction Reference Systems
- True North: direction from the observer to the geographical North Pole.
- Magnetic North: direction of the Earth's magnetic field (north magnetic pole).
- Compass North: direction north as indicated by the compass.

## Variation
- The angle between True North and Magnetic North, measured in degrees East or West from True North.
- Variation West - Magnetic Best; Variation East - Magnetic Least.
- Isogonal line: joins places of equal variation.
- Agonic line: joins places of zero variation.
- Maximum possible variation = 180 degrees.

## Deviation
- The difference between Magnetic North and Compass North.
- Westerly if Compass North lies west of Magnetic North; Easterly if Compass North lies east of Magnetic North.
- Deviation West - Compass Best; Deviation East - Compass Least.

## Angle of Dip
- The angle made by a freely suspended compass needle with the local horizontal.
- Magnetic Equator: line along which dip is zero.
- At the magnetic pole dip = 90 degrees (maximum value).
- Isoclinal: line joining places of equal dip.
- Aclinic line: line joining places of zero dip.

## Magnetic Force Components
- Total magnetic force (T) divides into two components:
- Horizontal force (H) - also called the directive force. The line along which H acts is the magnetic meridian.
- Vertical force (Z).

## Magnetic Compass
- One of the oldest and simplest direction-indicating instruments.
- Every magnet has two poles, north and south.
- An aircraft magnetic compass has two small magnets attached to a metal float, sealed inside a bowl of clear compass fluid similar to kerosene.
- A graduated compass card is wrapped around the float and viewed through a glass window with a lubber line across it.
- The card shows N, E, S, W and a number for each 30 degrees (the final zero is omitted: 3 = 30, 6 = 60, 33 = 330).
- Long marks = 10 degrees each; short marks = 5 degrees each.
- The housing is entirely full of fluid. The rear of the case is sealed with a flexible diaphragm (or metal bellows) to cope with fluid expansion/contraction due to temperature.
- The pilot reads direction on the scale opposite the lubber line.

## Compass Errors
- Because of Dip, the magnetic compass is prone to Acceleration and Turning errors.
- Acceleration error: indicates a turn towards the NEARER pole on acceleration and towards the FARTHER pole on deceleration.
- Compass errors are numerous, making straight flight and precision turns difficult, especially in turbulence - this is why the heading indicator is used with it.

`);


/* ------------------------------------------------------------
   7. TIME
   ------------------------------------------------------------ */
registerNotesTopic("navigation", "Time & Change in Longitude", `

## Day
- A 'day' = the time taken for the Earth to rotate once about its axis, measured against a celestial body.
- Measured against a star = sidereal day; against the Sun = solar day.

## Change in Longitude (Arc to Time)
- 24 hrs = 360 degrees of longitude
- 1 hr = 15 degrees of longitude
- 4 minutes = 1 degree of longitude
- 1 minute of time = 15' (minutes) of longitude

## Local Mean Time (LMT)
- Mean time on any particular meridian.
- Time varies on different meridians at any instant.

## UTC (Zulu Time)
- Coordinated Universal Time - the universal standard time reference, based on measurements from many places.
- Replaced GMT, which was the accepted standard until December 1985.
- UTC is the local mean time for the Prime Meridian.

## LMT vs UTC
- LMT of any place EAST of the prime meridian is AHEAD of UTC. Example: New Delhi 1400 = 0830 Z.
- LMT of any place WEST of the prime meridian is BEHIND UTC. Example: 1200 Z = Toronto 0700 LMT.

## Time Zones
- The world is divided into 24 time zones, each 15 degrees of longitude wide, keeping the time of the mid-meridian of the zone.
- Zones are numbered 1 to 12 east of the prime meridian (minus) and 1 to 12 west (plus).
- If the zone number or mid-meridian longitude is known, zone time can be converted to UTC.

`);


/* ------------------------------------------------------------
   8. DEAD RECKONING
   ------------------------------------------------------------ */
registerNotesTopic("navigation", "Dead Reckoning Basics & The Wind Triangle", `

## Wind Triangle Terms
- TT = True Track: the track to be flown over the ground, measured clockwise from True North. Apply variation to get magnetic track.
- Required Track: the track the aircraft is expected to fly.
- Track Made Good: the track actually flown.
- Track Error: the difference between required track and track made good.
- The track flown may be a great circle track or a rhumb line track.
- TH = True Heading: the direction in which the nose points. It is not the same as track because of wind; it lies left or right of track depending on wind direction, and by how much depends on wind strength.
- TAS = True Airspeed: speed of the aircraft through the air.
- GS = Groundspeed: TAS adjusted for the wind component (head or tail).

## Heading Conversions
- True Heading +/- Variation = Magnetic Heading.
- Magnetic Heading +/- Deviation = Compass Heading.

## Drift
- The angle between heading and track.
- Heading + Drift = Track.
- Starboard (right) drift is positive (+); port (left) drift is negative (-).

## Wind Components
- Track Wind Component (TWC): component of wind parallel to track (headwind or tailwind). TWC = WV cos(a)
- Cross Wind Component (CWC): component of wind perpendicular to track. CWC = WV sin(a)
- (WV = wind velocity, a = angle between wind direction and track.)
- Equivalent Wind Component: the difference between TAS and GS.
- Given TAS, desired track and wind direction/velocity, a flight computer (manual or electronic) gives heading and groundspeed - the starting point for all flight-planning calculations.

## The 1 in 60 Rule
- If you travel 60 miles, an error of 1 mile off track is approximately a 1 degree error.
- To calculate range or height from a runway: for an x degree glideslope, height is about x hundred feet at 1 nm. Example: 3 degree glideslope at 3 nm = 900 ft.
- Rate of descent for a 3 degree glideslope = Groundspeed x 5. Example: GS 100 kt = ROD 500 ft/min.
- Used to correct errors in the flight path by opening angles and closing angles.
- Used to calculate time, distance or fuel required to reach a station.

## Endurance
- Endurance = the total time an aircraft can keep flying on the fuel on board (usable fuel / fuel consumption rate).
- (Not covered in the PDF - standard definition added.)

`);


/* ------------------------------------------------------------
   9. RADIO AIDS
   ------------------------------------------------------------ */
registerNotesTopic("navigation", "Radio Aids to Navigation", `

## Radio Waves
- A radio wave is a combination of magnetic and electric fields radiating from an aerial as an electromagnetic wave.
- EM waves travel at the speed of light (c) = 162,000 nm/s = 3 x 10^8 m/s (constant).
- One cycle = time for one complete revolution of point P.
- Frequency (f) = number of cycles per second, in Hertz (Hz). 1 cycle per second = 1 Hz.
- Wavelength = distance covered by a wave in one cycle (usually in metres).

## Frequency and Wavelength Relation
- Wavelength = Speed of light / Frequency  (lambda = c / f)

## Phase and Phase Difference
- Two waves of the SAME frequency can be compared by amplitude or by their cycle starting positions.
- If one reaches the start position 90 degrees after the first, it is 90 degrees out of phase.
- This forms the principle of many radio navigation aids.

## Radio Frequency Spectrum
- VLF: 3-30 kHz (100-10 km)
- LF: 30-300 kHz (10-1 km)
- MF: 300 kHz - 3 MHz (1 km - 100 m)
- HF: 3-30 MHz (100-10 m)
- VHF: 30-300 MHz (10-1 m)
- UHF: 300 MHz - 3 GHz (1 m - 100 mm)
- SHF: 3-30 GHz (100-10 mm)
- EHF: 30-300 GHz (10-1 mm)

## ADF / NDB (Automatic Direction Finder / Non-Directional Beacon)
- The pilot tunes the ADF receiver to a ground station called a Non-Directional Beacon (NDB).
- NDBs operate in the low/medium frequency band of 200 to 415 kHz.
- ADF/NDB gives the RELATIVE bearing of the station.

## VOR (VHF Omni Range)
- Provides MAGNETIC bearing information to and from the station.
- VOR ground stations transmit in the VHF band 108.0 - 117.95 MHz.
- Course Deviation Indicator (CDI) with an Omni-Bearing Selector (OBS) is used to select the radial.
- Radials are lines of bearing radiating out from the station (e.g. 090 radial).

## ILS (Instrument Landing System)
- The primary precision approach facility for civil aviation.
- Precision approach = an approach where BOTH glideslope and track guidance are provided.
- Components:
- Localizer - azimuth guidance along the extended runway centreline.
- Glide path - approach guidance in the vertical plane (about 3 degrees).
- Marker Beacons - up to three separate beacons along the approach path giving range check points (outer, middle, inner).

## DME (Distance Measuring Equipment)
- Provides SLANT range (distance from aircraft to station).

## Other Radio Aids
- RMI, GPS (listed under radio aids in the PDF).

`);


/* ------------------------------------------------------------
   10. PRESSURE INSTRUMENTS
   ------------------------------------------------------------ */
registerNotesTopic("navigation", "Pressure Instruments - Pitot Static, ASI, Altimeter, VSI", `

## Air Data Instruments
- Height and speed are the two most important pieces of information for safe flight.
- They are provided by instruments that use ambient atmospheric pressure through a pitot-static system.
- The six basic instruments ("Six Pack"): Pitot-static - ASI, Altimeter, VSI. Gyroscopic - Attitude Indicator, Heading Indicator, Turn Coordinator.

## Static Pressure
- The ambient atmospheric pressure at any location.
- In a standard atmosphere it decreases by 1 hPa for each 27 ft increase in altitude at mean sea level (usually approximated to 1 hPa per 30 ft).
- Sensed through small holes (the static source) at a point unaffected by turbulence - typically on the side of the fuselage.
- An alternate static source is also provided.

## Pitot (Dynamic) Pressure
- As the aircraft moves forward it compresses the air, giving a pressure increase on forward-facing parts - dynamic pressure.
- Think of a forward-facing cup: stationary = static pressure only; moving = static + dynamic pressure.
- The faster the aircraft, the greater the dynamic pressure.
- Static Pressure + Dynamic Pressure = Pitot Pressure.
- The pitot tube has heaters to prevent icing.

## ASI (Airspeed Indicator)
- A sensitive differential pressure gauge measuring the difference between pitot (impact/dynamic) pressure and static pressure.
- The two are equal when parked on the ground in calm air.
- In flight pitot pressure exceeds static pressure; the difference moves the pointer.
- Calibrated in knots or mph.

## Types of Airspeed
- IAS (Indicated): ASI reading corrected for instrument error only.
- CAS (Calibrated) = IAS + PEC (Pressure Error Correction).
- EAS (Equivalent) = CAS + CEC (Compressibility Error Correction).
- TAS (True) = EAS + DEC (Density Error Correction).

## ASI Markings
- Vne: Never Exceed speed (red radial line) - structural damage beyond this.
- Vno: maximum speed under normal operating conditions, aircraft clean (flaps and gear up).
- Vs (Vs1): stalling speed, aircraft clean. Green arc from Vs1 to Vno.
- Vso: stalling speed with flaps and landing gear fully extended.
- Vfe: maximum speed with flaps extended. White arc from Vso to Vfe.
- Yellow arc: caution range (above Vno up to Vne).

## Altimeter
- Measures the height of the aircraft above a given pressure level; the only instrument that indicates altitude.
- QNH: pressure at Mean Sea Level. Set on the subscale, the altimeter reads runway elevation on the ground and ALTITUDE in the air.
- QFE: pressure at the airfield. Set on the subscale, the altimeter reads 0 on the ground and HEIGHT in the air.
- QNE: standard pressure setting 1013.25 hPa. Indications in the air are Flight Levels (FL) / Pressure Altitude.
- Density Altitude: pressure altitude corrected for non-standard temperature; determines aircraft performance ("the altitude the airplane thinks it's at").
- True Altitude: the exact vertical separation from a given reference or from MSL.

## VSI (Vertical Speed Indicator)
- Vertical speed = rate of altitude change in ft/min.
- A very sensitive differential pressure gauge that indicates rate of altitude change from the change of STATIC pressure alone.
- More sensitive to altitude change than an altimeter.

## Q-codes (as used in these notes)
- QNH - altimeter setting giving altitude above mean sea level.
- QFE - altimeter setting giving height above the airfield.
- QNE - standard setting 1013.25 hPa (flight levels).

`);


/* ------------------------------------------------------------
   11. GYRO INSTRUMENTS
   ------------------------------------------------------------ */
registerNotesTopic("navigation", "Gyro Instruments - DGI, AH, TSI", `

## Gyro
- A wheel/disc (rotor) mounted so it can spin rapidly about an axis that is itself free to alter in any direction.
- The orientation of the axis is not affected by tilting of the mounting.
- So a gyroscope can provide stability or maintain a reference direction in a navigation system.
- Parts: rotor, spin axis, gimbal(s), gyroscope frame.

## Properties of Gyro
- Rigidity (gyroscopic inertia): the spin axis tends to stay pointing in a fixed direction in space.
- Precession: when a force is applied to the rim, the effect appears 90 degrees ahead in the direction of rotation.
- (These two properties are shown in the PDF's diagrams but not explicitly written - standard definitions added.)

## Types of Gyro
- Free gyro (space gyro) - e.g. directional gyro, artificial horizon.
- Rate gyro - e.g. turn and slip / turn coordinator.
- (Classification added from standard theory; the PDF shows only the instruments.)

## DGI (Directional Gyro / Heading Indicator)
- Indicates the direction in which the aircraft is flying, in degrees.
- Fundamentally a gyroscopic instrument designed to facilitate the use of the magnetic compass.
- Not affected by the forces that make the magnetic compass difficult to interpret.

## AH (Artificial Horizon / Attitude Indicator)
- Indicates the attitude of the aircraft with respect to the horizon.
- The miniature aircraft and horizon bar show the same relationship as the real aircraft to the actual horizon.
- Gives an instantaneous indication of even the smallest attitude changes.

## TSI (Turn & Slip Indicator) and Turn Coordinator
- Turn & Slip Indicator: indicates RATE of turn and QUALITY of turn (skidding or slipping).
- Turn Coordinator (TC): in addition indicates rate of ROLL.
- Both show turn direction and coordination, and are a backup source of bank information if the attitude indicator fails.

## Power Source
- In the AI and HI, the engine-driven vacuum system provides the suction to operate them.
- The Turn Coordinator is electrically driven.

## Other Instruments
- Engine Instruments: Tachometer, Oil Temperature, Oil Pressure Gauge, EGT, CHT.
- Outside Air Temperature (OAT) gauge.



`);

registerNotesSubject("meteorology", "Aviation Meteorology - SPL");

registerNotesTopic("meteorology", "Introduction & The Atmosphere", `

## Aviation Meteorology
- Meteorology is the study of the atmosphere and the weather processes that occur in it.
- An aircraft is flown through the medium of the atmosphere, so an aviator must have adequate knowledge of meteorology and an appreciation of the effect of weather on all aspects of flying.

## The Atmosphere
- The invisible and odourless gas which we breathe, which sustains life and produces an infinite variety of phenomena, is what we call air.
- The envelope of air surrounding the earth and extending to great heights is the atmosphere, where vast physical processes occur, giving rise to ever-changing weather phenomena.

## Properties of Atmosphere
- The atmosphere is never completely dry.
- Water vapour is always present in varying amounts, and it also behaves as a gas.
- It is the change in the amount and state of water vapour (solid, liquid and gas) which is important in the physics of weather processes.
- Apart from water vapour, suspended particles like dust, smoke and other impurities affect the transparency of the atmosphere.
- In the higher layers there is a concentration of ozone between 30 and 50 km.
- Above 70 km the effect of molecular diffusion becomes significant, and the effect of gravitational separation can be noticed in the case of lighter gases, which finally escape into space.

`);

registerNotesTopic("meteorology", "Composition of Atmosphere", `

## Composition of Air
- Air is a mechanical mixture of a variety of gases.
- The main constituents are nitrogen and oxygen, accounting for almost 99% of the whole, with roughly three parts of nitrogen to one part of oxygen.
- There are small amounts or traces of other gases.
- The composition is more or less the same up to about 60 - 80 km.

## Percentage Composition of Dry Air (by volume)
- Nitrogen - 78%
- Oxygen - 21%
- Argon - 0.93%
- Carbon dioxide - 0.03%
- Remaining - other gases

## Trace Gases
- Neon, Ozone, Krypton, Sulphur dioxide, Helium, Nitrogen dioxide, Xenon, Ammonia, Hydrogen, Carbon monoxide, Methane, Iodine and Nitrous oxide.

## Moisture
- Water vapour is present in small, varying amounts (about 3 to 4%).

## Solid Particles
- Apart from water, solid particles are present in varied size, shape and composition.
- In size they range from sub-microscopic to large elements that can be detected by the naked eye.
- Organic: seeds, pollen, spores or bacteria.
- Inorganic: soil, industrial pollutants, smoke or salt from ocean spray.
- These particles reduce visibility through the air.
- Even when air is cooled below saturation temperature, condensation and sublimation will not take place unless it contacts a small particle called a condensation or sublimation nucleus.
- Concentration of these particles changes with location: the number per unit volume is much higher near cities and industrial areas than in rural areas or over the sea.

`);

registerNotesTopic("meteorology", "Structure & Layers of Atmosphere", `

## Structure
- Conditions below about 25 km have been well explored with the aid of balloons and instrumented aircraft.
- Higher layers are not so well known, but studies using rockets, sound and radio waves, aurorae, meteors etc. have given fairly reliable information up to almost 100 km.

## Layers of the Atmosphere (4 layers)
1. Troposphere
2. Stratosphere
3. Mesosphere
4. Thermosphere

## Troposphere
- Lowest layer of the atmosphere, nearest to the earth (the first layer).
- Extends 8 to 9 km at the poles and 16 to 18 km at the equator (average height of the tropopause is taken as 11 km).
- All weather occurs in this region due to the presence of water vapour and large-scale vertical currents of air.
- About 75% of the air mass is concentrated here.
- Majority of aviation activities take place here.
- Pressure falls at about 1 hPa per 27 feet with height.
- Temperature decreases with increase in height at a more or less constant rate.
- The rate of fall of temperature is known as the lapse rate (γ).

## Tropopause
- The top of the troposphere is called the tropopause.
- Average height is 16 - 18 km at the equator and 8 - 10 km at the poles.
- Equatorial tropopause is colder than the polar tropopause, being about twice as high.
- Height varies with latitude and from season to season.
- In winter the tropopause comes down to very low heights; in summer it goes up.
- It is higher in warm latitudes than in cold latitudes (highest over the equator and lowest over the poles).
- Sometimes breaks occur in middle latitudes with overlapping tropopauses.
- In these breaks, high velocity winds (complex in structure due to narrow bands and rapid movement) called Jet Streams are found.
- Winds with speed of more than 60 knots are termed jet streams and can reach maximum speeds of 200 knots in the upper cold portion of the tropopause.

## Stratosphere
- Extends from the tropopause up to 50 km from the surface of the earth.
- Temperature remains steady between the tropopause and about 20 km; beyond that it increases with height (about 0°C at the stratopause).
- Ozone concentration is found from 15 km up to 35 km; above this, temperature rises due to absorption of solar ultraviolet radiation by the ozone layer.
- If UV radiation reached the earth's surface it would kill all life on earth. This layer of ozone is called the Ozonosphere.
- Stratosphere is a stable region of very low humidity, excellent visibility, no turbulence and no weather.
- Rarely, a cloud type called 'nacreous' (mother of pearl) occurs at about 20 to 30 km in winter and is thought to consist of ice crystals.
- Ozone causes sickness in human beings and corrodes metals. Precaution must be taken while flying within the Ozonosphere.

## Mesosphere
- Extends from 50 to 85 km from the surface of the earth.
- Temperature decreases with height.
- At the mesopause temperature is of the order of -90°C (the lowest temperature of the atmosphere).
- Pressure is very low, decreasing from about 1 hPa at 50 km to 0.01 hPa at 90 km.
- Mesopause is situated at about 90 km from the surface.

## Thermosphere
- Extends from 85 km from the surface of the earth upwards; the upper limit is not specified.
- Above 90 km temperature again increases dramatically to thousands of degrees Celsius.
- Atmospheric density is very low. Due to the thinness of the air, the temperature is not felt by the human body; it is only a kinetic temperature which governs the speed of the molecules.
- The aurora is found in this layer, caused by particles from the sun making molecules of oxygen, hydrogen and nitrogen fluoresce.
- At about 700 km the gravitational pull of the earth is practically absent and particles can escape from the atmosphere into space.

`);

registerNotesTopic("meteorology", "International Standard Atmosphere (ISA)", `

## Why ISA?
- A standard average atmosphere has to be specified for various purposes like design and testing of aircraft, evaluation of aircraft performance, calibration of pressure altimeters, etc.
- The most widely used one is defined by ICAO, known as the International Standard Atmosphere (ISA).

## ISA Specifications
- Mean sea level temperature: 15°C (288.15 K)
- Mean sea level pressure: 1013.25 mb (hPa)
- Surface density: 1225 g/m3
- Acceleration due to gravity: 980.665 cm/sec2
- Temperature lapse rate up to 11 km: 6.5°C/km or 1.98°C/1000 ft
- Temperature is assumed constant at -56.5°C (216.65 K) in the isothermal lower stratosphere from 11 km up to 20 km.
- From 20 km up to 30 km there is a rise in temperature at the rate of 1°C/km, reaching -44.5°C (228.65 K) at 32 km.

`);

registerNotesTopic("meteorology", "Temperature", `

## Temperature
- Temperature is a measure of the degree of warmth of a substance.
- It is measured by a thermometer, which works on the property of expansion of a liquid when temperature increases.

## Thermometers
- May be alcohol-in-glass, spirit-in-glass or mercury-in-glass type.
- Mercury-in-glass thermometers are more accurate because mercury responds more quickly to changes in temperature than alcohol.
- Thermometers commonly used for meteorological purposes: Dry bulb, Wet bulb, Maximum and Minimum thermometer.
- The names indicate the type of readings registered by them.
- The minimum thermometer is alcohol-in-glass type, while the others are mercury-in-glass.

## Scales of Measurement
- Fahrenheit: melting point of ice is 32°F and boiling point of water is 212°F.
- Celsius (Centigrade): melting point of ice is 0°C and boiling point of water is 100°C.
- Absolute (Kelvin): melting point of ice is 273 K and boiling point of water is 373 K.
- In meteorology the Celsius scale is used.
- The absolute scale is used in theoretical calculations, such as the behaviour of air under different conditions of temperature and pressure.

## Conversion of Celsius, Fahrenheit & Kelvin
- Fahrenheit to Celsius: C = (F - 32) x 5/9
- Celsius to Fahrenheit: F = (C x 9/5) + 32
- Kelvin to Celsius: C = K - 273.15
- Kelvin to Fahrenheit: F = (K - 273.15) x 9/5 + 32

## Diurnal Variation of Temperature
- Maximum temperature is reached about 2 hours after midday.
- At night the ground cools because the earth emits long wave radiation.
- At the time of minimum temperature, the ground is colder than the air close to it, sometimes by about 5°C when the sky is clear and radiation effect is at its maximum.
- Minimum temperature is reached near about sunrise time.

`);

registerNotesTopic("meteorology", "Atmospheric Pressure", `

## Atmospheric Pressure
- The weight of a vertical column of air standing on unit area and extending to the uppermost levels of the atmosphere is known as atmospheric pressure.
- It can be expressed in different units like pounds per square inch, grams per square centimetre etc.
- Pressure in the atmosphere decreases with height.

## Instruments to Measure Pressure
- Barometer. Two types:
1. Mercury Barometer
2. Aneroid Barometer

## Units of Measurement
- Although for many purposes pressure continues to be expressed in inches or millimetres of mercury, the unit commonly used in meteorology is the millibar (mb).
- Inches of Mercury - "Hg
- Hectopascal - hPa
- Millibar - mb

## Diurnal Variation of Pressure
- Superimposed on irregular changes in pressure due to movement of pressure systems is a rhythmic oscillation of pressure, giving two maxima and two minima every day.
- Maxima are at about 1000 and 2200 hours local time.
- Minima are at about 0400 and 1600 hours local time.
- The range between maxima and minima is highest at the equator (about 3 - 4 mb) and negligible at the poles.

`);

registerNotesTopic("meteorology", "Q-Codes (Altimeter Settings)", `

## QNH
- The most convenient setting of the sub-scale while in the vicinity of an airfield is QNH, or altimeter setting.
- QNH is defined as the pressure over the airfield reduced to mean sea level under ISA conditions.

## QFE
- Another setting which may be used in the vicinity of the airfield.
- It is the current value of the pressure reduced to the level of the airfield (i.e. the airfield reference point).
- An altimeter set to QFE will read zero height while on the ground.

## QFF
- The value of pressure reduced to mean sea level according to standard meteorological practice.
- This value is used only in the preparation of surface charts.

## QNE
- The height (in feet) indicated by an aircraft altimeter on the ground when the sub-scale of the altimeter is set to 1013.25 hPa.

`);

registerNotesTopic("meteorology", "Air Density & Density Altitude", `

## Air Density
- Density is defined as mass per unit volume.
- The density of air in the atmosphere is not measured directly; it is calculated from the gas equation: P / ρ = RT
- Where P is pressure, ρ is density, T is temperature in absolute degrees (K) and R is the gas constant for air.

## Density Altitude
- Defined as the altitude in the ISA at which air density is the same as the observed density.
- A higher density altitude means lower air density.
- In aircraft manuals, density altitude (instead of density itself) is used as a parameter in nomograms for computation of permissible take-off loads.
- Formula: DA = PA + 120 (ISA - Actual)

## Variation of Density with Height
- Pressure decreases with height much more rapidly than temperature.
- Density decreases with height at all levels.
- Air density at about 6.0 km is about 50%, at 12.0 km about 25%, and at 20.0 km about 10% of the standard density at sea level.

## Relationship between Temperature, Pressure and Density
- Temperature and pressure (at a given level): if temperature is higher, pressure will be lower because warm air expands and there is less weight of air at a particular area, and vice versa.
- Temperature and density are inversely proportional: cooler air is denser; warmer air has lower density.
- Pressure and density are directly proportional: higher density means higher pressure, lower density means lower atmospheric pressure.

`);

registerNotesTopic("meteorology", "Wind", `

## Wind
- Air in horizontal motion is called wind.
- Wind is the flow of gases on a large scale. On Earth, wind consists of the bulk movement of air.
- In meteorology, winds are referred to according to their strength and the direction from which the wind is blowing.

## Wind Direction
- Southerly: South to North
- Northerly: North to South
- Westerly: West to East
- Easterly: East to West

## Instruments to Measure Wind Speed and Direction
- Anemometer: gives wind speed in km/h and knots.
- Wind vane: gives direction of wind in 360° of compass (direction of wind is the direction from which the wind is coming or blowing).

## Buys Ballot's Law
- With the observer's back to the wind, low pressure lies to the left and high pressure lies to the right in the northern hemisphere, and vice versa in the southern hemisphere.

## Veering and Backing
- Veering: wind direction changes in a clockwise sense.
- Backing: wind direction changes in an anti-clockwise sense.

`);

registerNotesTopic("meteorology", "Local Winds", `

## Types of Local Winds
- Land and Sea Breeze
- Katabatic Wind
- Anabatic Wind
- Fohn Wind
- Valley Wind

## Land and Sea Breeze
- Large change in wind direction occurs during the day and night near coastal areas, even when no major synoptic situation or steep pressure gradient exists.
- Wind blows from sea to land during the day and land to sea during the night, irrespective of prevailing pressure pattern.
- The diurnal difference of temperature between land and sea is the reason for these breezes.

## Sea Breeze
- During the day, air rises from the land due to increasing temperature and decreasing pressure.
- The cool, heavy air of the sea starts moving from sea to land in the lower levels, establishing the sea breeze.
- A counter current at higher levels from land to sea, with rising air over land subsiding over sea, completes the circulation.

## Land Breeze
- During the night the process is reversed: the land cools faster while the sea remains warmer.
- Offshore wind blows from land to sea at ground level, with the counter current from sea to land aloft.
- In both cases the upper air flow is spread over considerable depth.

## Sea Breeze vs Land Breeze
- Sea breeze is more prominent than the land breeze.
- Its onset is sudden and is accompanied by a sharp fall in temperature and a sharp rise in humidity.
- Sea breeze generally sets in before noon.
- Where a steep pressure gradient exists, the sea breeze may be delayed considerably, and on rare occasions may not set in at all.
- Sea breeze penetrates inland 25 miles or more.
- The land breeze is weaker than the sea breeze.

## Katabatic Wind
- At night, the slope of a hill cools more rapidly than the air; the air close to the slope is cooler and hence denser than the free air at the corresponding level.
- The denser air close to the slope slides down and blows as the "Katabatic wind".
- Characteristic of hilly areas and of great importance in the Himalayan areas and NE India.
- Causes early morning thundershowers in the valleys.

## Anabatic Wind
- During the day, the hill slope gets heated more quickly than the free air, and the air close to the slope becomes warmer than the air at the corresponding level.
- This results in an upslope wind, termed the "Anabatic wind".

## Fohn Wind
- On meeting a mountain barrier, a fairly steady and strong wind containing moisture surmounts the barrier and descends on the lee side.
- While ascending to the top, the air cools and cloud formation takes place, resulting in rain.
- While descending on the leeward side, the air is dry and warms at a greater rate than it cooled during ascent on the windward side.
- This results in warm dry air on the lee side of a mountain, known as the "Fohn wind".

`);

registerNotesTopic("meteorology", "Clouds: Formation & Classification", `

## Definition of Cloud
- A cloud is a visible aggregate of minute particles of water or ice or both, in the free air.
- Two fundamental characteristics: their infinite variety of form, and their continual change in appearance.
- Clouds form in the sky, develop, take different shapes and dissolve. Each process is an indication of some physical state or process in the atmosphere.

## Formation of Cloud: Mechanisms Causing Ascent of Air
1. Turbulence
2. Orographic lifting
3. Convection
4. Convergence
5. Frontal lift
- Either singly or in combination, they can cause cloud formation if the ascending air reaches the condensation level.
- Further build-up depends on humidity and lapse rate aloft.
- Instability and a high degree of humidity can cause build-up of clouds to great heights; stable lapse rate and low humidity aloft restrict further growth.

## Classification of Clouds: Nomenclature
- Clouds are given descriptive names depending mainly on their appearance, based on the classification proposed by Luke Howard in 1803.
- Three fundamental forms:
1. Stratus: stratiform clouds, sheet or layer type
2. Cumulus: cumuliform clouds, like a heap of cotton or cauliflower
3. Cirrus: fibrous or cirriform clouds, like threads
- Ten basic types (genera) of clouds are defined for worldwide occurrence.
- Most genera possess several species, and many of these occur in a number of varieties, sometimes accompanied by supplementary features and accessory clouds.

## High Clouds
- Cirrus (Ci): Detached clouds in the form of white, delicate filaments or white or mostly white patches or narrow bands. Fibrous (hair-like) appearance or a silky sheen or both.
- Cirrocumulus (Cc): Thin white patch, sheet or layer of cloud without shading, composed of very small elements in the form of grains, ripples etc., merged or separate and more or less regularly arranged; most elements have an apparent width of less than one degree.
- Cirrostratus (Cs): Transparent whitish cloud veil of fibrous or smooth appearance, totally or partly covering the sky and generally producing halo phenomena.

## Medium Clouds
- Altocumulus (Ac): White or grey or both, patch, sheet or layer of cloud, generally with shading, composed of laminae, rounded masses, rolls etc., which are sometimes partly fibrous or diffused and may or may not be merged; most regularly arranged small elements usually have an apparent width between 1 and 5 degrees.
- Altostratus (As): Greyish or bluish cloud sheet or layer of striated, fibrous or uniform appearance, totally or partly covering the sky.

## Low Clouds
- Nimbostratus (Ns): Grey cloud layer, often dark, the appearance of which is rendered diffuse by more or less continually falling rain or snow which in most cases reaches the ground. Thick throughout, enough to blot out the sun. Low ragged clouds frequently occur below the layer, with which they may or may not merge. Ns often merges with As.
- Stratocumulus (Sc): Grey or whitish, or both, patch, sheet or layer of cloud which almost always has dark parts, composed of tessellations, rounded masses etc., which are non-fibrous and may or may not be merged; most regularly arranged small elements have an apparent width of more than five degrees.
- Stratus (St): Generally grey cloud layer with a fairly uniform base, which may give drizzle, ice prisms or snow grains. When the sun is visible through the cloud, its outline is clearly discernible.

## Clouds of Vertical Development
- Cumulus (Cu): Detached clouds, generally dense with sharp outline, developing vertically in the form of rising mounds, domes or towers, of which the bulging upper parts often resemble a cauliflower. The sunlit part is mostly brilliant white; the base is relatively dark and nearly horizontal.
- Cumulonimbus (Cb): Heavy and dense cloud with considerable vertical extent, in the form of a mountain or huge tower. At least part of its upper portion is usually smooth, fibrous or striated and nearly always flattened, often spreading out in the shape of an anvil or vast plume. Under the base, which is often very dark, there are frequently low ragged clouds, merged with it or not, and precipitation.

`);

registerNotesTopic("meteorology", "Special Types of Clouds & Flying in Clouds", `

## Special Types of Clouds
- Apart from the ten fundamental types, some clouds form due to peculiarities of topography or special meteorological situations.
- Fracto Cloud: The prefix Fracto is used for a cloud broken into ragged fragments. Fracto Stratus and Fracto Cumulus indicate turbulence at the base of the cloud leading to fragmentation of the lower portions.
- Castellanus: When an Altocumulus or Stratocumulus cloud has a turreted shape. Indicates instability at higher levels.
- Lenticular Cloud: Lens-shaped clouds, seen at times near mountain tops, on the lee side; indicative of the crest of the waves.
- Line Squall Cloud: Roll clouds of dark colour in the shape of an arc, slightly ahead of a long line of Cumulonimbus cloud. Their approach indicates an impending severe squall/thunderstorm.
- Rotor Cloud: Roll-type cloud which sometimes forms on the leeward side of a mountain in a zone of severe turbulence.

## Flying in Clouds
- Flying in clouds has to be done under Instrument Flight Rules unless the clouds are thin or of patchy nature.
- Before entering any cloud, aircrew must be thoroughly sure of the kind of cloud, its approximate thickness and horizontal coverage.

## Hazards of Flying through Cloud
- Poor Visibility: vertical as well as horizontal visibility is poor. Horizontal visibility ranges from about 1 km in cirrus clouds to less than 10 m in well-developed cumulus or cumulonimbus. In general, rain-giving clouds, which have a concentration of larger water drops, are associated with much less visibility than non-precipitating types.
- Turbulence: all clouds are associated with vertical motion of air, a pre-requisite for their formation. When the size of eddies is comparable to the dimensions of an aircraft they cause bumpiness; turbulence may range from slight to severe. In general, cumuliform clouds give more turbulence than stratiform clouds. Clouds associated with instability give rise to severe turbulence.
- Ice accretion: ice may form on the aircraft surface, disturbing aerodynamic properties, control surfaces and in the carburettor.

`);

registerNotesTopic("meteorology", "Precipitation", `

## Precipitation
- Precipitation is the general term used for the fall of liquid water drops or ice crystals to the ground from clouds.
- It covers drizzle, rain, shower, hail, sleet and snow.

## Theories of Precipitation
- The exact process by which minute cloud particles attain sizes large enough to overcome the vertical current is not yet fully known. Two theories have been put forward.

## Ice Crystal Theory (Bergeron Theory)
- Proposed by Bergeron in 1935.
- Precipitation occurs from clouds which grow beyond the freezing level.
- In such clouds, supercooled water drops and ice crystals co-exist above the freezing level.
- Due to difference in vapour pressure over water and ice, the supercooled water droplets evaporate and condense on the ice crystals.
- The ice crystals grow at the expense of water drops and soon attain sufficient size to fall out of the cloud.
- When they pass through temperature above 0°C they melt and fall as rain.

## Coalescence Theory (Langmuir)
- Bergeron theory assumes precipitation starts with ice crystals, but in tropical regions precipitation occurs from clouds which do not grow beyond the freezing level and so contain no ice crystals.
- To explain this, Irving Langmuir proposed the Coalescence theory.
- Cloud drops initially grow due to condensation and subsequently grow by collision and coalescence with other smaller droplets.
- A comparatively larger cloud drop, while falling through the cloud, overtakes, collides and fuses with smaller droplets on its path and grows large.
- Due to air resistance these drops break up and again grow by coalescence and break up. A chain reaction is thus set in, and cloud drops grow in size till they fall as precipitation.

## Types of Precipitation
- Drizzle: Liquid precipitation in the form of water drops with diameter less than 0.5 mm, usually reaching the ground from clouds such as Stratus and Stratocumulus. Falling drops are very close to one another.
- Rain: Liquid precipitation in the form of drops of appreciable size (more than 0.5 mm in diameter) reaching the ground from As, Ns, Cu and Cb clouds.
- Shower: Large water drops with a diameter of 5 mm or more, usually from vertical type clouds, for short duration.
- Sleet: Partly melted snow flakes, or rain and snow falling together.
- Hail: Small balls or pieces of ice with diameter 5 - 50 mm, sometimes more, falling either separately or conglomerated into lumps.
- Snow: White opaque pellets (2 - 5 mm in diameter) or very small white opaque grains of ice (less than 1 mm). May be spherical, conical, flat or elongated. Occurs from Ns, As, Sc and Cb clouds.
- Freezing Precipitation: Rain or water drops which freeze on impact with the ground.
- ThunderShowers: Thunderstorm with precipitation, occurring from Cb clouds.

## Nature of Clouds and Precipitation
- The type of precipitation from a cloud depends on the strength of the vertical current it has to overcome, which in turn depends on the mechanism by which the cloud is formed.
- Stratus: formed due to frictional eddies near ground level. Vertical currents are weak, so even minute droplets can overcome them and fall as drizzle.
- Altostratus and Nimbostratus: formed by frontal ascent or ascent of air in its own zone of convergence. Vertical currents are of moderate strength, so medium-size drops fall as rain.
- Cumulus of great vertical development or Cumulonimbus: form due to rigorous convection coupled with instability. Vertical currents are strong, so precipitation is in the form of large shower drops or even hail.

`);

registerNotesTopic("meteorology", "Thunderstorms", `

## Thunderstorm
- Cumulonimbus is a cumulus cloud which develops up to great heights due to instability and a high degree of humidity in a deep layer of air.
- The release of energy due to overturning of air in the unstable layers gives rise to a storm.
- Electrical charges developed in the cloud give rise to lightning and thunder.
- Thunderstorms are one or more convective cells in which electrical discharges are seen as lightning or heard as thunder.

## Conditions Favourable for Cb Formation
1. A lapse rate steeper than the SALR throughout a layer at least 5 to 6 km in depth, permitting development of clouds to heights at which the temperature is below 0°C.
2. An adequate supply of moisture from below.
3. A process which produces saturation in the region of the steep lapse rate, i.e. a triggering mechanism.
- As the unstable cloud grows upwards, some of the surrounding unsaturated air is entrained into the cloud mass, so some cloud droplets evaporate.
- If humidity of the surrounding air is very low, evaporation becomes dominant and arrests further growth. Well-developed Cb are thus possible only when humidity aloft is sufficiently high.

## Triggering Mechanisms
- Local convection (insolation)
- Orographic lifting
- Convergence
- Frontal lifting
- Radiational or katabatic cooling

## Stages of a Thunderstorm (3 stages)
1. Formative
2. Mature
3. Dissipating

## Formative (Developing / Cumulus) Stage
- First stage, when one or more cumulus clouds begin to grow into a large Cumulus.
- Throughout the cloud only updraughts prevail.
- Extreme updraught velocity can reach 100 ft/sec; they increase with height and are stronger in the middle than near the edges.
- The strongest updraughts are found near the top part of the cloud.

## Mature Stage
- Begins with the fall of rain from the cloud.
- The fall of rain causes a viscous drag on the surrounding air, initiating the onset of downdraughts, which once started maintain themselves due to descending air being colder than surroundings.
- Rain falls and the first gust or squall reaches the ground.
- Downdraughts are strongest; updraughts are also as strong as in the formative stage. Maximum up and down draught velocities are encountered in the middle of the cloud.
- Extreme downdraught velocities can reach 40 ft/sec.
- After rain starts to fall, the anvil extends in the direction of movement of the cloud.
- Between up and down draughts there is severe turbulence. Downdraughts produce squall on the ground.
- Lightning and thunder occur in this stage.
- Hail forms above the freezing level and its size depends on the strength of updraughts; bigger hail is found in stronger updraughts.
- Lightning: due to splitting of water droplets, negative and positive charges accumulate in the cloud.
- Thunder: air in the path of lightning gets heated up and expands, then is contracted by the cooler surrounding air. This sudden expansion and contraction produces sound waves heard on the ground as thunder.

## Dissipating Stage
- Gradually, downdraughts spread across the lower level of the cloud, and updraughts restricted to the upper part become of secondary importance.
- The lower part of the cloud descends with the downdraughts and ultimately dissipates, sometimes leaving behind a stratified layer of clouds at higher level.
- This may continue for some time to give rain after the lower part of the cloud has dissipated.

## Life Cycle of a CB Cell
- Usual life cycle of a Cb cell is 2 to 3 hours.
- The most active period, comprising the first and second stages, lasts 30 to 40 minutes.

## Flying Hazards in Thunderstorms
- Squall
- Heavy showers
- Poor in-flight visibility
- Draughts
- Gusts
- Ice accretion
- Hail
- Lightning

`);

registerNotesTopic("meteorology", "Visibility", `

## Visibility
- A measure of the degree of transparency of the atmosphere.
- Expressed as the distance in metres/kilometres up to which objects are visible to the naked eye and can be recognised as such.
- During daytime, visibility is estimated with reference to landmarks at known distances.
- At night, the method adopted is to estimate the equivalent day-time visibility by installing lights of standard candle power (100 CP) at different specified distances. Equivalent day-time visibilities have been computed from careful experiments.
- If such lights are not available, visibility is estimated using existing lights and their distances.

## Reduced Visibility Phenomena
- Haze: Atmospheric obscurity due to moisture, dust or smoke, wherein visibility is reduced to 5 km or below.
- Mist: Moist haze wherein visibility ranges from 1 to 5 km.
- Fog: Moist haze so thick that visibility is less than 1 km.
- Smog: Moist haze so thick that visibility is less than 1 km, with smoke and dust.

`);

registerNotesTopic("meteorology", "Q Codes (Weather Reports)", `

## Q Codes
- Weather reports may also be passed on R/T in the International Q code. A few important Q codes in common use:
- QAN: Surface wind
- QNT: Maximum speed of gust
- QBA: Visibility
- QBB: Cloud type, amount and height of base
- QAM: Weather
- QAO: Upper wind at specified level
- QFE: Pressure at airfield level
- QNH: Altimeter setting
- QNE: Altimeter setting, Mean Sea Level (ICAO Atmosphere)

`);

registerNotesTopic("meteorology", "METAR, SPECI & CAVOK", `

## METAR
- Aviation routine weather reports use the symbolic form METAR.
- Issued hourly or half hourly.
- Format: METAR GGgg CCCC dddff/fmfm VVVV w'w' (NsCC hshshs) or CAVOK (T'T'/Td'Td') (PHPHPHPH)

## SPECI
- Special weather reports are issued when there is sudden deterioration or improvement of weather (in relation to certain laid down criteria) at an airfield.
- Called Aviation selected special weather reports and use the symbolic form SPECI.
- The code form is the same as METAR, except that temperature and pressure groups are omitted.

## Significant Cloud Layer
- Lowest cloud layer
- Next higher layer if amount is 3 oktas or more
- Next higher layer if amount is 5 oktas or more
- Cb cloud, irrespective of amount and height, if not reported already
- Cloud groups may have to be repeated depending on the number of significant cloud layers. On no occasion can there be more than 4 cloud groups in the message.
- In Air Force practice, all layers of cloud are reported so as to give a realistic picture of the sky condition, and the total amount of clouds is indicated by an additional group TTL (total amount).

## CAVOK (Cloud And Visibility OK)
- In civil practice, whenever visibility is 10 km or more and there is no significant cloud layer below 3 km, the group CAVOK is included.
- Used when the following conditions occur simultaneously at the time of observation:
1. Visibility 10 km or more
2. No cloud below 1500 m (5000 ft) or below the highest minimum sector altitude, whichever is greater, and no cumulonimbus
3. No weather of significance to aviation
- Information on visibility, runway visual range, present weather and cloud amount, type and height is then replaced in all meteorological reports by the term "CAVOK".

`);

registerNotesTopic("meteorology", "Aerodrome Warnings & SPECI Criteria", `

## Aerodrome Warnings
- A warning message is a notification of the occurrence or expected occurrence, not previously notified, of specified meteorological conditions which may affect the safety of aircraft.
- Any meteorological phenomenon which presents a potential hazard to flight safety forms the subject of a warning.
- Warnings for the protection of parked and moored aircraft are issued for: gale, squall, thunderstorm, sand storm, rising sand or dust devil, frost, rime, snow, freezing precipitation, rough sea and swell.
- These warning messages are normally not passed outside the aerodrome of issue or the aerodrome for which issued (in case the meteorological service is provided by a Met Office not located at the concerned aerodrome).

## Criteria for Issuance of Local Special Reports and SPECI
- Issued whenever changes occur in accordance with the following criteria.

## Surface Wind
- When the mean surface wind direction has changed by 60° or more from that given in the latest report, the mean wind speed before and/or after the change being 10 knots or more.
- When the mean surface wind speed has changed by 10 knots or more from that given in the latest report.
- When the variation from the mean surface wind speed (gusts) has increased by 10 knots or more from that given in the latest report, the mean speed before and/or after the change being 15 knots or more.

## Visibility
- When visibility is improving and changes to or passes through one or more of the following values, or when deteriorating and changes to or passes through one or more of them: 800, 1500, 3000 or 5000 metres.

## Runway Visual Range (RVR)
- When RVR is improving and changes to or passes through one or more of the following values, or when deteriorating and passes through one or more of them: 150, 350, 600 or 800 metres.
- These SPECIs are to be issued by all offices equipped with instrumental recording facilities of RVR.

## Present Weather
- When the onset, cessation or change in intensity of any of the following weather phenomena or combinations thereof occurs:
- Freezing precipitation, freezing fog, moderate or heavy precipitation (including showers thereof), low drifting dust, sand or snow, blowing dust, sand or snow (including snowstorm), dust storm, sandstorm, ice crystals, thunderstorms (with or without precipitation), squall, funnel cloud (tornado or waterspout).

## Cloud
- When the height of the base of the lowest cloud layer of BKN or OVC extent is lifting and changes to or passes through one or more of the following values, or lowering and changes to or passes through them: 30, 60, 150, 300 or 450 m (100, 200, 500, 1000 or 1500 ft).
- When the amount of a cloud layer below 450 m (1500 ft) changes from SKC, FEW or SCT to BKN or OVC; or from BKN or OVC to SKC, FEW or SCT.

## Vertical Visibility
- When the sky is obscured and the vertical visibility changes to or passes through one or more of the following values: 30, 60, 150 or 300 m (100, 200, 500 or 1000 ft).

## Air Temperature
- When air temperature has increased by 2°C or more from that given in the latest report.





`);

registerNotesSubject("regulation", "Air Regulation");

registerNotesTopic("regulation", "Key Definitions", `

- Aircraft: Any machine which can derive support in the atmosphere from the reactions of the air other than reactions of the air against the earth's surface, and includes balloons (fixed or free), kites, airships, gliders, etc.
- Aeroplane: A power-driven, heavier-than-air aircraft deriving its lift in flight chiefly from aerodynamic reactions on surfaces which remain fixed under given conditions of flight.
- Aerodrome: A defined area on land or water (including any buildings, installations and equipment) intended to be used either wholly or in part for the arrival, departure and surface movement of aircraft.
- Aerodrome Beacon: An aeronautical beacon used to indicate the location of an aerodrome from the air.
- Air Traffic Service Reporting Office: A unit established for the purpose of receiving reports concerning air traffic services and flight plans submitted before departure.
- Air Traffic Control Service: A service provided for the purpose of (a) preventing collisions between aircraft, and on the maneuvering area between aircraft and obstructions; and (b) expediting and maintaining an orderly flow of air traffic.
- Altitude: The vertical distance of a level, a point or an object considered as a point, measured from mean sea level.
- Balloon: A non-power-driven, lighter-than-air aircraft.
- Controlled Airspace: Airspace of defined dimensions within which Air Traffic Control service is provided in accordance with the airspace classification.
- Co-Pilot: A licensed pilot serving in any piloting capacity other than as pilot-in-command, but excluding a pilot who is on board the aircraft for the sole purpose of receiving flight instruction.
- Flight Time: The total flight time from the moment the aircraft first moves under its own power for the purpose of taking off, until the moment it comes to rest at the end of the flight.
- Solo Flight Time: The flight time during which the pilot is the sole occupant of an aircraft.
- Dual Flight Time: The flight time during which a person is receiving flight instruction from a pilot on board the aircraft.
- Danger Area: Airspace of defined dimensions within which activities dangerous to the flight of aircraft may exist at a specified time.
- Log Book: A book in a prescribed format for logging flight time.
- Flight Crew Member: A licensed crew member charged with duties essential to the operation of an aircraft during flight time.
- Flight Plan: Specified information provided to air traffic services units, relative to an intended flight or portion of a flight of an aircraft.
- Height: The vertical distance of a level, a point or an object considered as a point, measured from a specified datum.
- Prohibited Area: The area over which navigation of aircraft is prohibited.
- Restricted Area: Airspace of defined dimensions above the land area or territorial water of the State within which flight of aircraft is restricted in accordance with certain specified conditions.
- Take-off: Includes all the successive positions of an aerodyne from the moment it moves from rest until the moment it starts normal flight.
- Landing Area: That part of a movement area intended for the landing or take-off of aircraft.
- Maneuvering Area: That part of an aerodrome to be used for the take-off, landing and taxiing of aircraft; this excludes aprons.
- Movement Area: That part of an aerodrome to be used for the take-off, landing and taxiing of aircraft, consisting of the maneuvering area and the apron(s).
- Apron: A defined area on a land aerodrome, intended to accommodate aircraft for the purposes of loading or unloading passengers, mail or cargo, fuelling, parking or maintenance.
- Emergency Frequency: 121.5 MHz.
- Runway: A defined rectangular area on a land aerodrome prepared for the landing and take-off of aircraft.
- Taxiway: A defined path on a land aerodrome established for the taxiing of aircraft, and intended to provide a link between one part of the aerodrome and another, including:
- Aircraft Stand Taxi Lane: A portion of an apron designated as a taxiway, intended to provide access to aircraft stands only.
- Apron Taxiway: A portion of a taxiway system located on an apron, intended to provide a through taxi route across the apron.
- Rapid Exit Taxiway: A high-speed taxiway built at busy airports to let aircraft leave the runway at higher speed, vacating the runway quicker so another aircraft can land or take off sooner.
- Ground Visibility: The visibility at an aerodrome, as reported by an accredited observer or by a suitable automatic system.
- Flight Visibility: The visibility forward from the cockpit of an aircraft in flight.

`);

registerNotesTopic("regulation", "Flight Rules — VFR, IFR, VMC & IMC", `

## Flight Rules
- Visual Flight Rules (VFR): Rules that govern flights conducted under Visual Meteorological Conditions (VMC).
- VFR Flights: Flights conducted in accordance with Visual Flight Rules.
- Instrument Flight Rules (IFR): Rules that govern flights conducted under Instrument Meteorological Conditions (IMC).
- IFR Flights: Flights conducted in accordance with Instrument Flight Rules.

## Categories of VFR Flight
- Day VFR Flight: Flights conducted in accordance with Visual Flight Rules during the hours of daylight.
- Night VFR Flight: Flights conducted in accordance with Visual Flight Rules during the hours of nighttime, by a flying club or institute's aircraft operated locally.
- Special VFR Flight: A VFR flight cleared by Air Traffic Control to operate within a control zone in meteorological conditions below VMC.

## VMC and IMC
- VMC (Visual Meteorological Conditions): Meteorological conditions, expressed in terms of visibility, distance from clouds and ceiling, equal to or better than specified minima.
- IMC (Instrument Meteorological Conditions): Meteorological conditions, expressed in terms of visibility, distance from clouds and ceiling, less than specified minima.

## Visibility and Ceiling
- Visibility: The ability, as determined by atmospheric conditions, expressed in units of distance, to see and identify prominent unlighted objects by day and lighted objects by night.
- As per Civil Aviation Requirements (CAR), visibility for aeronautical purposes is the greater of: the greatest distance at which a black object of suitable dimensions near the ground can be seen and recognized against a bright background; or the greatest distance at which lights in the vicinity of 1000 candela can be seen and identified against an unlit background.
- Ceiling: The height above ground or water of the base of the lowest layer of cloud, below 6000 m (20,000 ft), covering more than half the sky.

## Day Light and Night Light
- Day Light: The period of time when the centre of the sun's disc is less than 6 degrees below the horizon, or the period commencing one half hour before sunrise and ending one half hour after sunset, in any place where the sun sets and rises daily.
- Night Light: The period of time when the centre of the sun's disc is more than 6 degrees below the horizon, or the period commencing one half hour after sunset and ending one half hour before sunrise, in any place where the sun sets and rises daily.

`);

registerNotesTopic("regulation", "VFR Operating Restrictions", `

Except when operating as a Special VFR flight, VFR flights shall be conducted so that the aircraft is flown in conditions of visibility and distance from cloud equal to or greater than those specified in the VMC minima table.

VFR flights shall not be operated between sunset and sunrise, except for local flying of a flying club's or institute's aircraft for training purposes, within the vicinity of the aerodrome.

VFR flights shall not be operated:
- Above Flight Level 150 (FL150); and
- At transonic or supersonic speeds.

Except when necessary for take-off or landing, or except by permission from the appropriate authority, a VFR flight shall not be flown:
- Over the congested areas of cities, towns or settlements, or over an open-air assembly of persons, at a height less than 300 m (1000 ft) above the highest obstacle within a radius of 600 m from the aircraft; or
- At a height less than 150 m (500 ft) above the ground or water.

`);

registerNotesTopic("regulation", "Distress Signals", `

Distress: A situation in which an aircraft is threatened by grave and imminent danger, and requires immediate assistance.

The following signals, used either together or separately, indicate distress:
- A signal made by Wireless Telegraphy, or by any other signalling method, consisting of the group SOS (in Morse code).
- A signal sent by radio-telephony, consisting of the spoken word "MAYDAY".
- Rockets or shells throwing red lights, fired one at a time at short intervals.
- A parachute flare showing a red light.

(See the separate notes on Urgency and Safety signals for the "PAN PAN" and "SECURITE" calls, and on light signals from the Aerodrome Control Tower.)

`);

registerNotesTopic("regulation", "Airworthiness & Registration", `

## Certificate of Airworthiness (C of A)
A conditional certificate of fitness for flight issued in respect of a particular aircraft. It is issued by the DGCA.

In order to ensure the validity of the aircraft's airworthiness certificate, M.A.901 requires periodically performing an airworthiness review of the aircraft and its continuing airworthiness records, which results in the issuance of an Airworthiness Review Certificate (ARC) valid for one year.

## Suspension of C of A
The Certificate of Airworthiness of an aircraft shall be deemed to be suspended when an aircraft ceases, or fails, to conform with the conditions stipulated in the Type Certificate or C of A, or the airworthiness requirements in respect of operation, maintenance, modification, repair, replacement, overhaul, process or inspection applicable to that aircraft, or:
- The Airworthiness Review Certificate is not valid.
- "Life" components, when due, are not replaced, or CMR items are not complied with.
- Mandatory modifications or inspections are not carried out, as and when due.
- Unapproved repairs or modifications are carried out.

## Certificate of Registration
A certificate issued to the owner of an aircraft with respect to the registration and registration marking for that aircraft. It is issued by the Central Government, and the Register is kept and maintained by the DGCA.

The Aircraft Rules require that no person shall fly, or assist in flying, any aircraft unless it has been registered and bears its nationality and registration marks, and the name and residence of the owner affixed or painted thereon in accordance with the Rules.

- Nationality or Common Mark: A group of characters affixed on the aircraft surface to identify the country to which the aircraft belongs.
- Registration Mark: A group of characters affixed on the aircraft surface, following the nationality mark, to identify a particular aircraft.

## Procedure for Registration of Aircraft
An aircraft may be registered in either of the following two categories:

Category 'A', where the aircraft is wholly owned either:
- By citizens of India; or
- By a company or corporation registered and having its principal place of business within India, and the Chairman and at least two-thirds of the Directors of which are citizens of India; or
- By the Central Government, any State Government, or any company or corporation owned or controlled by either of the said Governments; or
- By a company or corporation registered elsewhere than in India, provided such company or corporation has given the said aircraft on lease to any person mentioned in (i), (ii) or (iii) above.

Category 'B', where the aircraft is wholly owned either:
- By persons resident in, or carrying on business in, India who are not citizens of India; or
- By a company or corporation registered elsewhere than in India, and carrying on business in India.

`);

registerNotesTopic("regulation", "DGCA, ICAO & Civil Aviation Requirements (CAR)", `

## DGCA
The Directorate General of Civil Aviation (DGCA) is the principal regulatory body in the field of civil aviation. It is responsible for the regulation of air transport services to, from and within India, for the formulation and enforcement of civil air regulations, air safety and airworthiness standards, and also co-ordinates all regulatory functions with the International Civil Aviation Organization (ICAO).

The DGCA has its headquarters in New Delhi. The organisation is headed by the Director General of Civil Aviation, who is assisted by a Joint Director General and a Deputy Director General. The Director General has the following Directorates under him:

- Directorate of Regulation & Information
- Directorate of Air Transport
- Directorate of Airworthiness
- Directorate of Air Safety
- Directorate of Training & Licensing
- Directorate of Aerodrome Standards
- Directorate of Flying Training
- Directorate of Flight Inspection
- Directorate of Research & Development
- Directorate of Administration

## ICAO
The DGCA/AAI in India executes the rules and regulations prescribed by the International Civil Aviation Organization (ICAO), whose main functions are to see to the development of techniques of air navigation and the safe and orderly growth of international civil aviation throughout the world. ICAO sets the rules, which are to be maintained and followed by the regulatory authorities of each country — i.e. by the DGCA, in India.

DGCA is the regulatory body for civil aviation in India, for the purpose of fulfilling the objectives of Article 44 of ICAO.

Note: Rule 29C and Rule 133A of the Aircraft Rules 1937 empower the DGCA to publish Civil Aviation Requirements (CAR) in India.

## Civil Aviation Requirements (CAR)
There are 11 sections in total:
- Section 1: General (general policy and procedure adopted by the DGCA)
- Section 2: Airworthiness
- Section 3: Air Transport
- Section 4: Aerodrome Standard & Air Traffic Services
- Section 5: Air Safety
- Section 6: Design Standard & Type Certification
- Section 7: Flight Crew Standard, Training & Licensing
- Section 8: Aircraft Operations
- Section 9: Air Space and Air Traffic Management
- Section 10: Aviation Environment Protection
- Section 11: Safe Transport of Dangerous Goods by Air

## Other Aeronautical Documents
- AIP (Aeronautical Information Publication): Two volumes, issued by the AAI; the colour of the book is deep navy blue. AIP supplements are printed on yellow pages.
- AIC (Aeronautical Information Circular): Issued by the DGCA.
- NOTAM (Notice to Airmen): A notice filed with an aviation authority to alert aircraft pilots of potential hazards along a flight route, or at a location that could affect the safety of the flight. There are three types: NOTAM N, NOTAM R and NOTAM C, plus Series A, B, C, D, G.
- AIS (Aeronautical Information Service): Provided by the AAI.

`);

registerNotesTopic("regulation", "Documents to be Carried on Board (CAR Sec 2, Series X, Part VII)", `

No pilot-in-command of any aircraft shall allow that aircraft to be flown unless the following valid documents, as applicable (in original or attested copies), are carried on board the aircraft:

- Certificate of Registration
- Certificate of Airworthiness
- Airworthiness Review Certificate (ARC)
- A document attesting Noise Certification of the aeroplane/helicopter
- Air Operator's Permit
- Appropriate licences for each member of the flight crew
- Aeromobile Radio Operator's Licence, for radio communication apparatus
- Journey Log Book, or equivalent documents approved by the DGCA
- Operations Manual
- Minimum Equipment List
- Flight Manual
- Cabin Crew Manual
- Cockpit and Emergency Check List, unless these form part of the Flight Manual, carried on board

Note: Checklists for the take-off, cruise and landing phases shall be displayed in the cockpit, unless the lists form part of the Flight Manual, carried on board.

- Aeroplane/Helicopter search procedure checklist
- Maintenance Release / Certificate to Release to Service
- LOPA (Layout of Passenger Arrangement)
- Emergency and Safety Equipment Layout
- Route guides
- Current and suitable navigation charts/maps for the planned flight route, and all other routes along which it is reasonable to expect the flight may be diverted
- Weight Schedule
- Load and Trim Sheet
- If carrying passengers, a list of their names and places of embarkation and destination
- If carrying cargo, a manifest and detailed declarations of the cargo
- If carrying dangerous goods, a list of such goods; this list must be specifically brought to the notice of the Pilot-in-Command before the flight

`);

registerNotesTopic("regulation", "Time — UTC & IST", `

- UTC (Coordinated Universal Time): Previously known as GMT (Greenwich Mean Time). UTC is the time maintained in aviation throughout the world; it is the Local Mean Time (LMT) of the Prime Meridian.
- IST (Indian Standard Time): The Local Mean Time of 82° 30' E longitude, which passes through Allahabad.

Note: IST is 5 hours 30 minutes ahead of UTC.

`);

registerNotesTopic("regulation", "Aerodrome Markings & Visual/Non-Visual Aids", `

## Runway Markings (colour: white)
- Runway Designation Markings
- Runway Threshold Marking
- Runway Centre Line Marking
- Runway Edge Marking
- Runway Aiming Point Marking

## Taxiway Markings (colour: yellow)
- Taxiway Centre Line Markings (continuous line)
- Taxiway Edge Markings
- Taxiway Holding Position Markings

## Visual Ground Aids for Navigation
- ICAO Day Wind Direction Indicator (wind sock)
- Landing Direction Indicator (Landing 'T')
- Signal Panel / Signal Area — ground signals
- Signalling Lamp (from the Control Tower) — Aldis Lamp
- Runway markings, taxiway markings
- Runway / taxiway / approach lights
- Aeronautical Beacon — Aerodrome Beacon / Identification Beacon
- Visual Approach Slope Indicator System (VASIS) / Precision Approach Path Indicator (PAPI)

## Non-Visual Navigational Aids on the Ground
- VOR: VHF Omni-directional Radio Range
- NDB: Non-Directional Beacon
- DME: Distance Measuring Equipment
- ILS: Instrument Landing System
- VDF: VHF Direction Finder

## Notes
- Runway designation markings (orientation of the runway) are according to magnetic bearings; these are marked/painted on the quadrant opposite to the actual bearing.
- An aircraft mainly takes off and lands into the wind, i.e. against the wind.

`);
registerNotesSubject("technical-general", "Technical General");


registerNotesTopic("technical-general", "Aircraft Structures — Fuselage Construction", `

## Introduction to Aircraft Structures
Aircraft are one of the most remarkable achievements of modern engineering. Their ability to safely transport passengers and cargo through the atmosphere relies on the careful integration of aerodynamics, structural mechanics, propulsion systems and flight control technologies. Although aircraft vary greatly in size and mission — from small training aeroplanes and business jets to large commercial airliners and military fighters — they all share a common set of structural components and operating principles.

The primary objective of an aircraft structure is to provide a rigid yet lightweight framework capable of supporting all loads encountered during operation. These loads include aerodynamic forces generated during flight, landing impacts, engine vibrations, pressurisation loads, gust loads, and stresses caused by manoeuvring. The structure must be strong enough to withstand these forces repeatedly throughout the aircraft's service life while remaining as light as possible. Excessive structural weight directly reduces payload capacity, fuel efficiency and overall performance.

Regardless of their specific purpose, most aircraft consist of five major structural assemblies:
- Fuselage
- Wings
- Empennage
- Landing gear
- Power plant

Each of these components performs a unique function while simultaneously interacting with the others to ensure safe and efficient flight.

## Fuselage Design and Construction
The fuselage forms the central body of an aircraft and serves as the primary structural backbone connecting all major assemblies. It houses the flight crew, passengers, cargo compartments, avionics systems, control cables, fuel systems, environmental control equipment, and numerous other sub-systems essential for flight operations.

The shape of the fuselage is carefully selected to minimise aerodynamic drag. A streamlined body allows air to flow smoothly around the aircraft, reducing resistance and improving fuel efficiency. Consequently, the fuselage must also function as a pressure vessel capable of withstanding thousands of pressurisation cycles over its service life without developing fatigue cracks or structural weaknesses.

## Truss-Type Fuselage
The earliest aircraft used truss-type fuselage construction. In this design, a network of interconnected structural members forms a rigid framework. The members are arranged in triangular patterns because triangles provide exceptional geometric stability and efficiently distribute loads.

One of the greatest advantages of truss construction is its simplicity — damaged members can often be repaired or replaced without affecting the rest of the structure. The main disadvantage is that the members occupy valuable internal space, limiting payload capacity.

Warren Truss Construction: In aircraft applications, Warren truss structures typically consist of longerons, diagonal braces, and cross-members.
- Longerons provide longitudinal strength.
- Diagonal members resist bending and torsional loads.
- The resulting framework exhibits excellent stiffness and durability.

## Monocoque Construction
"Monocoque" comes from a French word meaning "single shell." In a monocoque structure, the outer skin bears most or all of the structural loads — similar to an eggshell, which derives much of its strength from its shape despite being relatively thin.

Monocoque designs have important limitations: since the skin carries most of the structural loads, dents, cracks or other damage can significantly reduce structural integrity, and localised damage may compromise the strength of a large portion of the structure.

## Semi-Monocoque Construction
A semi-monocoque fuselage consists of an outer stressed skin reinforced by an internal framework of bulkheads, frames, stringers and longerons. These structural members work together to distribute loads throughout the aircraft.

Because both the skin and the internal framework share structural responsibilities, semi-monocoque construction provides exceptional strength-to-weight characteristics. Damage to one structural component can often be tolerated because loads can be redistributed through other members — this significantly enhances safety and durability. It is the most common construction method on modern aircraft.

`);

registerNotesTopic("technical-general", "Wings, Empennage & Power Plant", `

## Wings and Lift Generation
The wing is the most important aerodynamic component of an aircraft because it is primarily responsible for generating the lift required to overcome the aircraft's weight. Without wings, sustained flight would not be possible.

A wing functions by accelerating airflow around an aerofoil-shaped cross-section. As the aircraft moves through the atmosphere, air flows both above and below the wing. The shape of the aerofoil causes the airflow over the upper surface to move faster than the airflow beneath the wing. This difference in velocity creates a pressure differential that contributes to lift generation — the faster-moving air above generates lower pressure compared with the slower-moving air beneath, and the resultant reaction is the force of lift, which acts opposite to the force of gravity. This explanation is commonly known as the "Longer Path" or "Equal Transit" theory.

## Empennage and Aircraft Stability
The empennage (tail assembly) plays a crucial role in maintaining aircraft stability and controllability. While the wings generate lift, the empennage ensures that the aircraft remains balanced and responds predictably to pilot inputs.

The empennage consists of both fixed and movable surfaces:
- Fixed surfaces: horizontal stabiliser and vertical stabiliser.
- Movable surfaces: elevator and rudder.

Some aircraft replace the traditional horizontal stabiliser and elevator combination with a stabilator — a fully movable horizontal tail surface that pivots as a single unit. This arrangement provides greater control authority and is particularly useful on high-speed aircraft, where conventional elevators may become less effective.

## Aircraft Power Plant — Engines
The power plant is the source of energy that enables flight. Its purpose is to convert the chemical energy stored in fuel into thrust. In propeller-driven aircraft, this is done by converting fuel energy into mechanical power that turns the propeller, which then accelerates air rearward to generate thrust. The efficiency and reliability of the power plant are critical factors in determining aircraft performance, range and operational safety.

The most common power plant is the four-stroke reciprocating engine. It operates by repeatedly converting the energy released during fuel combustion into rotational motion. The engine consists of cylinders, pistons, connecting rods and a crankshaft that transforms the pistons' reciprocating motion into continuous rotary motion.

The four-stroke cycle:
1. Intake — the piston moves downward while the intake valve opens, allowing a fuel-air mixture to enter the cylinder.
2. Compression — the piston moves upward and compresses the mixture into a smaller volume, increasing both pressure and temperature. Near the end of compression, the spark plug ignites the mixture.
3. Power — the combustion rapidly expands the gases and forces the piston downward.
4. Exhaust — the piston moves upward again, expelling burned gases from the cylinder.

This cycle repeats continuously while the engine operates. In multi-cylinder engines, different cylinders perform different strokes simultaneously, ensuring smooth power delivery and continuous crankshaft rotation. The timing of the intake and exhaust valves is carefully controlled by the camshaft, to ensure efficient cylinder filling and exhaust gas removal. The coordinated operation of all cylinders minimises power fluctuations and vibration, allowing the engine to deliver a steady output to the propeller. As engine speed increases, the four-stroke cycle occurs more frequently, giving greater power production and improved aircraft performance.

`);

registerNotesTopic("technical-general", "Propeller & Landing Gear", `

## Propeller
The propeller converts engine power into thrust. It is a highly efficient rotating aerofoil designed to accelerate large quantities of air rearward.

Each propeller consists of a central hub and blades that function similarly to a wing. As the blade rotates, airflow around its aerofoil-shaped cross-section generates aerodynamic force. A component of this force acts in the forward direction, producing thrust, which overcomes drag and propels the aircraft through the atmosphere.

The effectiveness of a propeller depends on several factors, including blade shape, diameter, rotational speed, pitch angle, and atmospheric conditions. The angle at which the blade meets the airflow is particularly important, because it determines the blade's angle of attack.

Propeller pitch: the theoretical distance a propeller would advance during one complete revolution if no slippage occurred.
- Low-pitch propellers: excellent acceleration and climb performance.
- High-pitch propellers: superior cruising efficiency.

Types of propeller:
- Fixed-pitch — maintains a constant blade angle; commonly used on training aircraft for its simplicity and low maintenance.
- Adjustable-pitch / constant-speed — allows blade angle variation, enabling more efficient operation across a wider range of flight conditions.
- Constant-speed systems automatically adjust blade pitch to maintain a selected engine speed, significantly improving aircraft performance, fuel efficiency and engine longevity.

## Landing Gear
The landing gear supports the aircraft whenever it is not airborne. It enables taxiing, take-off, landing and ground manoeuvring, while absorbing the substantial loads generated during landing impacts.

Two primary landing gear configurations:
- Conventional (tailwheel) landing gear — commonly found on older aircraft and certain bush planes.
- Tricycle landing gear (nosewheel) — provides superior ground handling characteristics, and is the preferred configuration for modern aircraft.

`);

registerNotesTopic("technical-general", "Forces on an Aircraft, Axes & Flight Controls", `

## Forces Acting on an Aircraft
The motion of an aircraft through the atmosphere is governed by four fundamental aerodynamic forces: lift, weight, thrust and drag.

- Weight: the force generated by gravity acting on the mass of the aircraft. It acts vertically downward through the aircraft's centre of gravity and is constantly present, whether the aircraft is on the ground or in flight.
- Lift: the aerodynamic force that opposes weight, generated primarily by the wings as air flows around them. The amount of lift produced depends on air density, wing area, airspeed and angle of attack. In straight-and-level flight, lift must equal weight to maintain a constant altitude — if lift exceeds weight the aircraft climbs, if lift is less than weight the aircraft descends.
- Thrust: the forward force produced by the power plant. In propeller-driven aircraft, thrust is generated by the propeller accelerating air backward; in jet aircraft, by expelling high-speed exhaust gases. Thrust must overcome drag to allow the aircraft to accelerate and maintain forward motion.
- Drag: the aerodynamic resistance encountered as the aircraft moves through the atmosphere. It acts opposite to the direction of motion and continuously opposes thrust. Drag is unavoidable and increases significantly with airspeed.

In steady level flight, lift equals weight and thrust equals drag. Any imbalance between these forces creates acceleration or a change in flight path.

## Aircraft Axes and Motions
An aircraft operates in a three-dimensional environment and can move about three mutually perpendicular axes, which intersect at the aircraft's centre of gravity:

- Longitudinal axis — extends from the nose to the tail. Movement about this axis is roll, controlled by the ailerons, and allows the aircraft to bank during turns.
- Lateral axis — extends from one wingtip to the other. Movement about this axis is pitch, controlled by the elevator or stabilator, changing the aircraft's nose attitude relative to the horizon and directly influencing climb and descent.
- Vertical axis — passes vertically through the centre of gravity. Movement about this axis is yaw, controlled by the rudder, which changes the aircraft's heading without necessarily changing its bank angle.

## Primary Flight Control Systems
Flight control systems let pilots manoeuvre the aircraft and maintain desired flight attitudes. The primary flight controls are the ailerons, elevators and rudder. These surfaces alter airflow around the aircraft, generating aerodynamic forces and moments that produce motion about the three principal axes.

- Ailerons: located near the trailing edge of each wing, usually toward the wingtips. They operate in opposite directions — when one aileron moves upward, the other moves downward. The upward-deflected aileron reduces lift on one wing, while the downward-deflected aileron increases lift on the opposite wing, creating a rolling moment that banks the aircraft.
- Elevator: mounted on the trailing edge of the horizontal stabiliser. Deflecting the elevator changes the aerodynamic force acting on the tail, causing the aircraft to pitch up or down.
- Rudder: attached to the trailing edge of the vertical stabiliser. Its primary purpose is yaw control — when deflected it creates a side force on the tail, causing the nose to move left or right.

## Secondary Flight Controls and High-Lift Devices
Secondary flight controls become particularly important during take-off and landing, when the aircraft operates at relatively low speeds.

Flaps are the most commonly used high-lift device. Located along the trailing edge of the wing, flaps increase both wing camber and, in some cases, wing area. When deployed, they increase lift generation at lower airspeeds, allowing the aircraft to take off and land safely on shorter runways.

Flap designs:
- Plain flaps — simply hinge downward from the trailing edge.
- Split flaps — deflect only the lower surface of the wing.
- Slotted flaps — incorporate gaps that allow high-energy airflow to pass through and delay flow separation.
- Fowler flaps — move rearward as well as downward, increasing both wing area and camber, producing significantly higher lift coefficients.

Leading-edge devices such as slats and Krueger flaps further enhance low-speed performance. Slats create slots that energise airflow over the wing's upper surface, delaying stall and allowing higher angles of attack. They are widely used on commercial transport aircraft to improve take-off and landing performance.

Spoilers are another secondary control surface. They disrupt airflow over the wing, reducing lift and increasing drag. Pilots use spoilers to assist descent, improve roll control, and enhance braking effectiveness after landing.

`);

registerNotesTopic("technical-general", "Atmosphere, Density Altitude & Newton's Laws of Motion", `

## Earth's Atmosphere and Aircraft Performance
The atmosphere is the medium through which aircraft operate. It consists primarily of nitrogen and oxygen, with smaller quantities of argon, carbon dioxide and other gases. It is divided into several layers, each with distinct temperature and pressure characteristics.

Atmospheric pressure decreases with altitude because of the gravitational force acting on the air mass; air density decreases as altitude increases in the same way. These reductions significantly affect aircraft performance — lower density means fewer air molecules are available to generate lift, reduce drag, and support engine combustion.

Temperature also plays a critical role. Warm air expands and becomes less dense, while cold air contracts and becomes denser — aircraft generally perform better in colder conditions because denser air improves lift generation and engine efficiency.

Humidity influences performance too. Water vapour is lighter than dry air, so humid air is less dense; high humidity therefore reduces lift and engine power, particularly during hot-weather operations.

The combined effects of pressure, temperature and humidity are expressed through density altitude — the altitude at which the aircraft "feels" it is operating. High density altitude conditions can significantly reduce climb performance, increase take-off distance, and limit aircraft capability.

## Newton's First Law of Motion (Law of Inertia)
An object at rest remains at rest, and an object in motion remains in motion, unless acted upon by an external force. This principle is known as inertia.

Inertia plays a significant role in aircraft operations:
- During take-off, an aircraft initially resists movement because of its inertia — the engines must generate sufficient thrust to overcome this resistance and accelerate the aircraft along the runway.
- Once airborne, an aircraft tends to maintain its existing speed and direction. To climb, descend, turn or change speed, additional unbalanced forces must be created by adjusting the controls, engine power, or aircraft configuration.

Passenger effects of inertia:
- During take-off, passengers feel pushed back into their seats as their bodies resist the change from rest to motion.
- During landing/braking, passengers tend to move forward as their bodies attempt to continue moving at the original speed.
- During sharp turns, passengers feel themselves leaning opposite to the direction of the turn, because their bodies tend to maintain their original direction of motion.
- Seat belts provide the restraining force necessary to keep passengers safely secured during acceleration, deceleration and manoeuvring.

Example — aircraft cruising in a straight line at constant speed and altitude: the forces acting on it are balanced (lift = weight, thrust = drag), so by Newton's First Law it continues in the same state of motion unless an unbalanced force acts on it. An aircraft at rest on the runway with engines off (or brakes applied) remains at rest until an unbalanced force — such as engine thrust — acts on it.

## Newton's Second Law of Motion
Force = Mass x Acceleration (F = M x A).

Greater forces produce greater accelerations, while larger masses require more force to achieve the same acceleration. Aircraft designers must consider this relationship when determining engine power requirements and performance characteristics.

Example — take-off run: as the engines produce thrust, a net force acts on the aircraft, causing it to accelerate along the runway. The acceleration produced is directly proportional to the net force acting on the aircraft and inversely proportional to its mass:
- If engine thrust is increased while aircraft mass stays constant, the aircraft accelerates more rapidly.
- If the aircraft is heavily loaded with passengers, cargo or fuel, a greater force is required to achieve the same rate of acceleration.
- Worked example: an aircraft of mass 60,000 kg with a net forward force (thrust − drag) of 120,000 N has an acceleration of 120,000 ÷ 60,000 = 2 m/s².
- Modern jet aircraft require longer runways when operating at higher weights, because their greater mass reduces acceleration for a given amount of thrust.

## Newton's Third Law of Motion
For every action there is an equal and opposite reaction. This is particularly important in aviation:
- Propellers generate thrust by accelerating air backward, causing an equal forward reaction on the aircraft.
- Jet engines produce thrust by expelling exhaust gases at high velocity, resulting in an opposite forward force that propels the aircraft.

Example: during flight, the engine accelerates a large mass of air backward at high speed (the action force). In response, the air exerts an equal and opposite force on the aircraft (the reaction force), which pushes the aircraft forward and produces thrust. These two forces are equal in magnitude and opposite in direction, but act on different objects — the engine acts on the air, while the air acts on the aircraft. The same principle applies to both jet engines and propeller-driven aircraft, and is the fundamental principle behind aircraft propulsion.

`);

registerNotesTopic("technical-general", "Bernoulli's Principle, Aerofoils, Angle of Attack & Stall", `

## Bernoulli's Principle and Lift Theory
Bernoulli's Principle states that within a moving fluid, an increase in velocity is accompanied by a decrease in pressure.

A Venturi tube is a device used to measure the flow rate of a fluid based on Bernoulli's Principle. It consists of a converging section, a narrow throat, and a diverging section:
- As the fluid flows from the wide section into the constricted throat, the cross-sectional area decreases, causing the fluid velocity to increase and the pressure to drop.
- At the throat, velocity reaches its maximum value while pressure is at its minimum.
- As the fluid moves into the wider section beyond the throat, the velocity decreases and part of the pressure is recovered.
- Measuring the pressure difference between these sections lets the flow rate be accurately determined.

This relationship helps explain how pressure differences contribute to lift generation on aircraft wings. As air flows around an aerofoil, the curved upper surface influences the airflow pattern. Under appropriate flight conditions, air moving over the upper surface accelerates relative to the airflow beneath the wing. The resulting reduction in pressure above the wing contributes to an upward aerodynamic force.

## Aerofoils
An aerofoil is a specially designed shape intended to generate aerodynamic forces when moving through air. Aerofoils are used not only for wings but also for propeller blades, rotor blades, and many control surfaces.

Geometric features of an aerofoil:
- Leading edge — the front portion that first encounters airflow.
- Trailing edge — the rear section where airflow leaves the surface.
- Chord line — an imaginary straight line connecting the leading and trailing edges.
- Camber — the curvature of the aerofoil, which significantly influences lift production.

## Angle of Attack, Flow Separation & Stall
Angle of attack: the angle between the chord line and the relative wind. This is one of the most important aerodynamic parameters.

Increasing angle of attack generally increases lift, but only up to the critical angle of attack. As angle of attack increases, the aerofoil generates a greater pressure differential between its upper and lower surfaces, resulting in increased lift — but this is only effective while airflow remains attached to the wing surface.

As the critical angle of attack is approached, airflow over the upper surface becomes increasingly unstable. Beyond this limit, the airflow can no longer follow the contour of the aerofoil and separates from the upper surface — this is called flow separation, and it substantially disrupts the wing's lift-producing capability. When flow separation occurs, lift decreases significantly and drag increases sharply; this aerodynamic condition is a stall.

During a stall, the wing is no longer operating efficiently, resulting in degraded aircraft performance, reduced control effectiveness, and an increased rate of descent. Depending on the severity of the stall and the aircraft's configuration, aerodynamic buffet and changes in pitch attitude may also be experienced. If uncorrected, a stall can lead to a significant loss of altitude and, under certain conditions, may develop into a spin.

Important point: a stall is not caused directly by low airspeed. A stall occurs whenever the wing exceeds its critical angle of attack, regardless of the aircraft's speed. Stalls frequently occur at lower airspeeds because a higher angle of attack is required to generate sufficient lift at low speed, but they can also occur at relatively high airspeeds during manoeuvres such as steep turns, abrupt pitch-up inputs, or any situation that imposes excessive aerodynamic loading on the wing. Angle of attack is the primary factor governing stall occurrence; airspeed is only an indirect contributing factor.

## Centre of Gravity and Centre of Pressure
Centre of gravity (CG): the point at which the aircraft's weight is considered to be concentrated. Proper CG positioning is essential for stability, controllability and overall flight safety.
- CG too far forward — greater control forces may be required to manoeuvre the aircraft, particularly during take-off and landing.
- CG too far aft — longitudinal stability may be reduced, resulting in increased sensitivity to control inputs and potentially more challenging stall recovery characteristics.

Centre of pressure (CoP): the point through which the resultant aerodynamic force acts on the wing. Unlike the centre of gravity, the centre of pressure is not fixed — it shifts as flight conditions change, particularly with variations in angle of attack. Its movement influences the pitching moments acting on the aircraft and therefore has a direct effect on stability and control. When the centre of pressure sits behind the centre of gravity, the resulting moment pitches the nose down.

Aircraft designers carefully consider the relationship between the centre of gravity and the centre of pressure to ensure stable, predictable and controllable flight characteristics throughout the aircraft's operating envelope. Understanding aerofoils, angle of attack, centre of gravity, centre of pressure and stall characteristics is fundamental to safe aircraft operation.

`);

/* ---------------- ADD YOUR NEXT SUBJECT HERE ----------------
registerNotesSubject("performance", "Aircraft Performance");
registerNotesTopic("performance", "Note Title", `

Your text here.

`);
------------------------------------------------------------- */

/* ---------------- ADD YOUR NEXT SUBJECT HERE ----------------
registerNotesSubject("performance", "Aircraft Performance");
registerNotesTopic("performance", "Note Title", `

Your text here.

`);
------------------------------------------------------------- */
registerNotesSubject("frtol", "FRTOL");

registerNotesTopic("frtol", "Radio Telephony - Introduction & Alphabet", `

## Introduction
Radiotelephony (RTF) provides the means by which pilots and ground personnel communicate with each other. Used properly, the information and the instructions transmitted are of vital importance in assisting the safe and expeditious operation of aircraft. On the other hand, the use of non-standard procedures and phraseology can cause misunderstanding. Incidents and accidents have occurred in which a contributing factor has been the misunderstanding caused by the use of poor phraseology. The importance of using correct and precise standard phraseology cannot, therefore, be over-emphasized.

## Alphabet

| Letter | Word | Pronunciation |
|---|---|---|
| A | Alpha | AL FAH |
| B | Bravo | BRAH VOH |
| C | Charlie | CHAR LEE or SHAR LEE |
| D | Delta | DELL TAH |
| E | Echo | ECK OH |
| F | Foxtrot | FOKS TROT |
| G | Golf | GOLF |
| H | Hotel | HO TELL |
| I | India | IN DEE AH |
| J | Juliet | JEW LEE ETT |
| K | Kilo | KEY LOH |
| L | Lima | LEE MAH |
| M | Mike | MAIK |
| N | November | NO VEM BER |
| O | Oscar | OSS CAH |
| P | Papa | PAH PAH |
| Q | Quebec | KEH BECK |
| R | Romeo | ROW ME OH |
| S | Sierra | SEE AIR RAH |
| T | Tango | TAN GO |
| U | Uniform | YOU NEE FORM or OO NEE FORM |
| V | Victor | VIK TAH |
| W | Whiskey | WISS KEY |
| X | X-ray | ECKS RAY |
| Y | Yankee | YANG KEY |
| Z | Zulu | ZOO LOO |

`);

registerNotesTopic("frtol", "Numbers & Transmission of Figures", `

## Numbers

| Number | Pronunciation |
|---|---|
| 0 | ZE-RO |
| 1 | WUN |
| 2 | TOO |
| 3 | TREE |
| 4 | FOW-er |
| 5 | FIFE |
| 6 | SIX |
| 7 | SEV-en |
| 8 | AIT |
| 9 | NIN-er |

## Transmission of Numbers in Messages
Numbers in messages containing aircraft call sign, altimeter setting, flight level (except FL 195, FL 090, FL 350 etc.), heading, wind direction/speed, pressure setting, transponder code and frequencies — each digit is transmitted separately.

| Message type | Numbers in the message | Transmitted as | Pronounced as |
|---|---|---|---|
| Call sign | 6E238 | I Fly two three eight | I FLY TOO TREE AIT |
| Call sign | 9W242 | Jet Airways two four two | JET AIRWAYS TOO FOW-er TOO |
| Flight level | FL 110 | Flight level one one zero | FLIGHT LEVEL WUN WUN ZERO |
| Flight level | FL 200 | Flight level two hundred | FLIGHT LEVEL TOO ZERO ZERO |
| Heading | 230 deg | Heading two three zero degrees | HEADING TOO TREE ZERO DEGREES |
| Wind direction | 295 deg | Wind direction two nine five degrees | WIND DIRECTION TOO NINER FIFE DEGREES |
| Wind speed | 25 kt | Wind speed two five knots | WIND SPEED TOO FIFE KNOTS |
| Wind direction/speed | 190 deg/10 kt gusting 35 kt | Wind one nine zero degrees one zero knots gusting to three five knots | WIND WUN NINER ZERO DEGREES WUN ZERO KNOTS GUSTING TO TREE FIFE KNOTS |
| Altimeter setting | QNH 1013.25 hPa | QNH one zero one three decimal two five hectopascal | QNH WUN ZERO WUN TREE DAY SEE MAL TOO FIFE |
| Transponder code | 3274 | Three two seven four | SQUAWK TREE TOO SEV-en FOW-er |

## Frequencies
All six figures shall be used when identifying frequencies, irrespective of whether they are 25 kHz or 8.33 kHz spaced. When the last two digits of the frequency are both zero, only the first four digits need be given.

| Frequency | Transmitted as | Pronounced as |
|---|---|---|
| 118.110 | One one eight decimal one one zero | WUN WUN AIT DAY SEE MAL WUN WUN ZERO |
| 119.600 | One one nine decimal six zero zero | WUN WUN NINER DAY SEE MAL SIX ZERO |
| 119.800 | One one nine decimal eight zero zero | WUN WUN NINER DAY SEE MAL AIT ZERO |
| 122.625 | One two two decimal six two five | WUN TOO TOO DAY SEE MAL SIX TOO FIFE |

## Altitude, Height, Cloud Height, Visibility & RVR
Numbers in messages containing altitude, height, cloud height, visibility and RVR which contain whole hundreds and whole thousands shall be transmitted by pronouncing each digit in the number of hundreds or thousands followed by the word HUNDRED or THOUSAND as appropriate. Combination of thousands and whole hundreds is transmitted by pronouncing each digit in the number of thousands followed by the word THOUSAND and the number of hundreds followed by word HUNDRED.

| Numbers in the message | Transmitted as | Pronounced as |
|---|---|---|
| 10 | One zero | WUN ZERO |
| 100 | One hundred | WUN HUNDRED |
| 2500 | Two thousand five hundred | TOO TOUSAND FIFE HUNDRED |
| 12000 | One two thousand | WUN TOO TOUSAND |
| 25000 | Two five thousand | TOO FIFE TOUSAND |

When it is necessary to verify the accuracy of reception of numbers, the person transmitting the message shall request the person receiving the message to read back the numbers.

`);

registerNotesTopic("frtol", "Standard Words & Phrases", `

The following words and phrases shall be used in radiotelephony communication as appropriate, and shall have the meaning given below:

- **AFFIRM** - Yes
- **APPROVED** - Permission for proposed action granted
- **CLEARED** - Authorized to proceed under the conditions specified
- **GO AHEAD** - Proceed with your message
- **HOW DO YOU READ** - What is the readability of my transmission?
- **NEGATIVE** - "No" or "Permission not granted" or "That is not correct" or "Not capable"
- **OVER** - "My transmission is ended and I expect a response is expected" (Note: not normally used in VHF communication)
- **OUT** - "This exchange of transmission is ended and no response is expected" (Note: not normally used in VHF communication)
- **ROGER** - I have received all of your last transmission
- **READ BACK** - "Repeat all, or the specified part, of this message back to me exactly as received"
- **SAY AGAIN** - "Repeat all or the following part, of your last transmission"
- **STANDBY** - "Wait and I will call you" (Note: the caller would normally re-establish contact if delay is lengthy. STANDBY is not an approval or denial)
- **WILCO** - (abbreviation for "will comply") Understand your message and will comply with it

Note: GO AHEAD is not used whenever the possibility exists of misconstruing "GO AHEAD" as authorization for an aircraft to proceed.

## Readability Check (Read You)
- 1 = Unreadable
- 2 = Readable now & then
- 3 = Readable but with difficulty
- 4 = Readable
- 5 = Perfectly readable

`);

registerNotesTopic("frtol", "Call Signs of Aircraft & R/T Units", `

## Call Signs of Aircraft
- No abbreviated code — full registration marking, e.g. VT-RDG (V D G).
- 6E 275 (no abbreviated code).
- Five letter call sign corresponding to the Registration marking of the aircraft.
- Five letter call sign preceded by the Radio Telephony designator of aircraft operating agency.
- Five letter call sign preceded by the type of aircraft.

## R/T Call Signs of the Various Units

| Unit | R/T Call Sign |
|---|---|
| Aerodrome Control | Tower |
| Approach Control | Approach |
| Area Control Center | Control |
| Apron Control | Apron |
| Aeronautical Station | Radio |
| Radar | Radar |
| Surface Movement Control | Ground |

`);

registerNotesTopic("frtol", "Radio Frequency Bands, Propagation & Q-Codes", `

## Radio Frequencies and Their Primary Mode of Propagation

| Band | Name | Frequency | Wavelength | Propagation via |
|---|---|---|---|---|
| VLF | Very Low Frequency | 3-30 kHz | 100-10 km | Guided between the earth and the ionosphere. |
| LF | Low Frequency | 30-300 kHz | 10-1 km | Guided between the earth and the D layer of the ionosphere. Surface waves. |
| MF | Medium Frequency | 300-3000 kHz | 1000-100 m | Surface waves. E, F layer ionospheric refraction at night, when D layer absorption weakens. |
| HF | High Frequency (Short wave) | 3-30 MHz | 100-10 m | E layer ionospheric refraction. F1, F2 layer ionospheric refraction. |
| VHF | Very High Frequency | 30-300 MHz | 10-1 m | Infrequent E ionospheric refraction. Extremely rare F1, F2 layer ionospheric refraction during high sunspot activity, up to 80 MHz. Generally direct wave, sometimes tropospheric ducting. |
| UHF | Ultra High Frequency | 300-3000 MHz | 100-10 cm | Direct wave. Sometimes tropospheric ducting. |
| SHF | Super High Frequency | 3-30 GHz | 10-1 cm | Direct wave. |
| EHF | Extremely High Frequency | 30-300 GHz | 10-1 mm | Direct wave limited by absorption. |

## Other Q-Codes (Bearings)
- **QTE** - True bearing of the aircraft from station (towards aircraft).
- **QDR** - Magnetic bearing of the aircraft from station (towards aircraft).
- **QUJ** - True bearing of station from the aircraft (towards station).
- **QDM** - Magnetic bearing of station from the aircraft (towards station).

## Elevation
Vertical distance of a point (can be an aerodrome) on the surface of the earth, measured from Mean Sea Level.

## METAR / SPECI
- **METAR** - Routine weather report
- **SPECI** - Special weather report

`);

registerNotesTopic("frtol", "ICAO, DGCA, AAI & ITU/WPC", `

## ICAO
International Civil Aviation Organization.

**HQ:** Montreal, Canada — came into existence on 4 April 1947 as per the Chicago Convention on 7 Dec. 1944. Its function is to see the development of techniques of air navigation to achieve safe and orderly growth of international civil aviation throughout the world. The South East Asian Region office of ICAO is at Bangkok. India is also a member of ICAO.

## DGCA
Directorate General of Civil Aviation. HQ: New Delhi — is the regulatory body for civil aviation in India. It is for the purpose of fulfillment of objectives of ICAO. DGCA India executes the Rules & Regulations prescribed by Article 44; it is also conducts examination for pilots and also conducts FRTOL examinations.

## AAI
Airports Authority of India. HQ: Rajiv Gandhi Bhavan, New Delhi. They are responsible for providing Air Traffic services, Communication Surveillance & ATM, Maintenance of Government Aerodromes, Airport Security as per International standard prescribed by ICAO.

## Division of Services
The International Telecommunication service is divided into four parts:
- Aeronautical Mobile services (Any Aircraft)
- Aeronautical Broadcasting service (ATIS/VOLMET)
- Aeronautical Radio Navigation service (VOR/NDB etc.)
- Aeronautical Fixed Service (ATC/RADIO)

## ITU
International Telecommunication Union.

**HQ:** Geneva, founded on 17.5.1865, constituted under UNO. Oldest Organization (International). It coordinates all matters regarding telecommunication at the international level. India is also a member of ITU.

**Function:** To promote the development of technical facilities; to allot frequency band to different services; frame Rules & Regulations.

## WPC
Wireless Planning and Coordination Wing. HQ: New Delhi. Under Ministry of Communication, to promote objectives of ITU in India. WPC is the national Regulatory Authority in the Country. It was formed in 1952.

**Functions:** Frequency management for the usage of frequencies in India; Coordination with ITU for all matters relating to the use of Radio frequency spectrum; conduct different types of Examinations of operation of Radio equipment, e.g. COP 1 (Certificate of Proficiency), COP 2, COP RTR(A).

`);

registerNotesTopic("frtol", "SQUAWK Codes & Location Indicators", `

## SQUAWK (Transponder Code on SSR)
- **7500** - Unlawful interference (Hijack)
- **7600** - Radio Communication failure
- **7700** - Emergency conditions
- **2000** - Aircraft who has not been allotted a transponder code

## Location Indicators

| FIR | Code |
|---|---|
| Delhi FIR (Northern Region) | VI |
| Mumbai FIR (Western Region) | VA |
| Chennai FIR (Southern) | VO |
| Kolkatta/Guwahati FIR (East/North Eastern) | VE |

## Frequencies for Emergency
121.5 / 406 MHz — International VHF Distress Frequency.

`);

registerNotesTopic("frtol", "Priority of Messages & Distress Communication", `

## Priority of Messages
1. Distress Messages
2. Urgency Messages
3. Direction Finding Messages
4. Flight Safety Messages
5. Flight Regulatory Messages

## Distress Communication
When an aircraft is threatened by serious and imminent danger and requires immediate assistance, the aircraft will take distress action.

## Conditions Which Call for MAYDAY
- Engine Failure
- Engine on Fire
- A forced Landing
- Being lost & very low fuel on board
- Weather conditions deteriorating (for VFR flights)
- Darkness & you are not qualified for night flying

`);

registerNotesTopic("frtol", "AIP, NOTAM, AIC & Related Publications", `

## Services / Publications by AAI/DGCA

**Aeronautical Information Services (AIS):**
- AIP (Aeronautical Information Publication): Vol I (GEN; ENR), Vol II (AD)

## AIP Supplements / Amendments
**AIRAC** (Aeronautical Information Regulation & Control).

**NOTAM:** Notice to Airman — temporary in nature and of short duration, or operationally significant permanent/temporary changes of long duration made of short notice.
- **NOTAM N** - NOTAM containing new NOTAM
- **NOTAM R** - NOTAM replacing previous NOTAM
- **NOTAM C** - NOTAM cancelling NOTAM

NOTAM codes are a five letter code; first letter is always Q, 2nd and 3rd letters indicate the facility, and 4th and 5th letters indicate status of the facilities. Example: Q L B A S, where LB stands for Aerodrome Beacon and AS stands for Un-serviceable. Facilities related to aerodrome operational area, like Runway, Taxiway, Apron etc., are given in plain English language.

**AERADIO:** The publication contains detailed information on the location indicator, communication, navigation and surveillance stations available at airports and aeronautical communication stations in India.

**PIB:** A presentation of current NOTAM information of operational significance, prepared prior to flight. Validity 14 days.

## Preflight Briefing Services
Available at all controlled aerodromes. Prior to departures, to get:
- Meteorological briefing
- Communication briefing
- ATC briefing (ADC & FIC No.)

All concerned briefing officers also sign on the Flight Plan Form. ADC number is valid for half an hour from the ETD.

**AIC:** Aeronautical Information Circular (published by DGCA).

**CAR:** Civil Aviation Requirement.

**Aircraft Manual (India)**

`);

registerNotesTopic("frtol", "SELCAL, ISA & Altimeter Settings", `

## SELCAL
Voice calling replaced by transmission of coded letters over R/T channel. 4 selected audio tones, 4 letter code with different frequencies; the letters used in the code are from A to S of the alphabet, except I, N, O. It relieves the pilot from maintaining continuous listening watch on HF Frequencies.

## ISA (International Standard Atmosphere)
- Standard pressure: 1013.2 hPa or 29.92 inches of Hg (mercury column) at sea level
- Standard temperature: +15 deg Celsius
- Temperature Lapse rate: 6.5 deg C/km
- Pressure lapse rate: 1 hPa/27 feet (approximately 30 feet per 1 hPa)

## Altimeter
An aneroid barometer, where 1 hPa = 30 feet approx. The calibration of the altimeter is in reference to the ISA conditions.

## QNH
If you set QNH (hPa or inches) in the sub-scale of your altimeter, the instrument reads elevation when on the ground, while flying it reads vertical position in feet above mean sea level, called altitude.

## QFE
If set in the subscale of your altimeter, to read the instrument would indicate its height above aerodrome elevation.

## QNE
It is 1013.2 hPa or 29.92 inches of Hg, also called standard altimeter setting, and when set, the altimeter gives vertical position (pressure altitude or flight level) from standard mean sea level.

## ATIS
Automatic Terminal Information Service. Continuous broadcast every half hour of Aerodrome Meteorological information and other significant operational information for the safety of aircraft operation to and from the aerodrome, on VHF frequency, at major aerodromes (also DATIS).

| Airport | ATIS Broadcast Frequency |
|---|---|
| Mumbai / Delhi / Kolkata / Chennai | 126.4 MHz |
| Jaipur / Thiruvananthapuram | 126.6 MHz |
| Ahmedabad / Hyderabad / Lucknow | 126.8 MHz |
| Bangalore | 128.2 MHz |
| Calicut | 127.0 MHz |

`);

registerNotesTopic("frtol", "Transition Altitude & Transition Level", `

## Transition Layer
In between transition altitude and transition level is called the transition layer.

## Transition Altitude
Altitude at or below which aircraft fly in respect to QNH. It is a fixed altitude/height for an aerodrome, minimum 1000 feet above the highest obstacle within 25 NM. Minimum transition altitude in India is 4000 ft. While climbing higher, altitude, change QNH to QNE.

## Transition Level
Lowest flight level available above transition altitude. Normally 1500 feet (1000 feet to 1499 feet) above transition altitude. Changes according to pressure/atmosphere at aerodrome level.

`);