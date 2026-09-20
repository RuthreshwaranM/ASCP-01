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

registerNotesTopic("navigation", "Navigationss", `

This is a normal paragraph. Just type. Leave a blank line
before the next paragraph, like this one.

- This is a bullet point
- So is this
- Bullets stay bullets until a blank line

## This is a subheading
Text under a subheading works exactly like any other paragraph.

`);

registerNotesSubject("meteorology", "Aviation Meteorology - SPL");
registerNotesTopic("meteorology", "SPL ORAL ", `

## What is Aviation Meteorology?
- It is the study of atmosphere, composition, structure, properties and behaviour\n\n

## What is Atmosphere?
- It is a layer of gases surrounding the Earth and extending up to 500kms
\n\n
## What is weather?
It is the change in atmoshpere due to change in temperature

## What is season?
It is the certain type of weather repeates a certain time of year

## Climate?
## What are the compositon of atmoshere?
## Layers of atmosphere:
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
