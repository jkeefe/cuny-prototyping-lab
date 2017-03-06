


## John brings to class

- Blinky sets
- Liza fireflies
    - Extra batteries for 
- Mice

## Basics

- The blinky
- Liza fireflies
- Show design?

## Getting Started

- [Download](http://www.autodesk.com/products/eagle/free-download) and install Eagle 
- Download the sparkfun parts library: 
    - Go to the [Github page](https://github.com/sparkfun/SparkFun-Eagle-Libraries)
    - Click "Clone or Download"
    - Click "download zip"
    - Save to Downloads folder
    - Extract that .zip file
    - We'll use this in a bit
- Download [this](http://docs.oshpark.com/resources/oshpark-2layer.dru) DRU file.
- Download [this](http://docs.oshpark.com/resources/OSHPark-2layer-Eagle7.2.cam) CAM file.

## Schematic

My instructions are based on the great instructions from Sparkfun:

Eagle Schematic Design: https://learn.sparkfun.com/tutorials/using-eagle-schematic#wiring-up-the-schematic
Eagle Board Design: 

- Run Eagle
- Create free account
- Will add an "eagle" directory in your home directory
- File -> New Project
- Right-click the project -> New -> Schematic



### Getting the parts


- Download the sparkfun parts library: https://github.com/sparkfun/SparkFun-Eagle-Libraries
    - Click "Clone or Download"
    - Click "download zip"
    - Save to Downloads folder
    - Open that .zip file
    
- Add the library
    - Click "Use library" button
    - Navigate to "Sparkfun - batteries"
    - Select
    - Also navigate to "Sparkfun - switches"

- Click the "Add Part" button (little plug with a + sign)
    - Search for \*10mm\*
    - Pick the sparkfun one
    - Add it to the white space
    
    - Click "add part"
    - Search for \*holder\* (for battery holder)
    - Pick the 20mm one
    - Add it to the white space
    
    - Click "add part"
    - Search for \*dpdt\* (Stands for Double Pole Double Throw)
    - Add it to the white space

### Wiring up the parts

Use the `NET` tool NOT the `WIRE` tool. More details here: https://learn.sparkfun.com/tutorials/using-eagle-schematic#wiring-up-the-schematic

## Drawing the board

- Follow the Sparkfun guide [here](https://learn.sparkfun.com/tutorials/using-eagle-board-layout)
- Always open board and schematic together!
- Don't close one!

Notes:
- Lay out the parts
- Make the boundary 1.4" each side (or total of max 2-in square)
- put your name on it


## Design Rules

Page: http://docs.oshpark.com/design-tools/eagle/design-rules-files/

File: http://docs.oshpark.com/resources/oshpark-2layer.dru

## Cam job:

File: http://docs.oshpark.com/resources/OSHPark-2layer-Eagle7.2.cam


