/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [

        // Example 2: Marker with text
		
	{
            x: 0,
            z: -9500,
            text: "Карта мира",
            textColor: "white", 
            offsetX: 0,
            offsetY: 0,
            font: "75px Calibri,sans serif",
			textBackgroundColor: "#00000088",
            textPadding: [2, 6, 2, 6],
    },
		
	{
            x: 0,
            z: -8375,
            text: "Телеграм админа: @DEV_KFC",
            textColor: "white", 
            offsetX: 0,
            offsetY: 0,
            font: "25px Calibri,sans serif",
			textBackgroundColor: "#00000088",
            textPadding: [2, 6, 2, 6],
    },
		
	{
            x: 432,
            z: -240,
            image: "red-pin.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Спавн",
            textColor: "white", 
            offsetX: 0,
            offsetY: 15,
            font: "15px Calibri,sans serif",
			textBackgroundColor: "#00000088",
            textPadding: [2, 6, 2, 6],
    },
		
    {
            x: 1867,
            z: 7610,
            image: "red-house.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Нора 4ubrila",
            textColor: "white", 
            offsetX: 0,
            offsetY: 15,
            font: "15px Calibri,sans serif",
			textBackgroundColor: "#00000088",
            textPadding: [2, 6, 2, 6],
    },
		
	{
            x: 3016,
            z: 5731,
            image: "red-house.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Нора denny4_user",
            textColor: "white", 
            offsetX: 0,
            offsetY: 15,
            font: "15px Calibri,sans serif",
			textBackgroundColor: "#00000088",
            textPadding: [2, 6, 2, 6],
    },
		
	{
            x: -6706,
            z: 6710,
            image: "grey-house.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Старая нора denny4_user",
            textColor: "white", 
            offsetX: 0,
            offsetY: 15,
            font: "15px Calibri,sans serif",
			textBackgroundColor: "#00000088",
            textPadding: [2, 6, 2, 6],
    },
		
	{
            x: -6666,
            z: 6014,
            image: "pink-industry.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.2,
            text: "Ферма железа",
            textColor: "white", 
            offsetX: 0,
            offsetY: 13,
            font: "13px Calibri,sans serif",
			textBackgroundColor: "#00000088",
            textPadding: [2, 6, 2, 6],
    },
		
	{
            x: 2792,
            z: 8230,
            image: "pink-gears.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Авто-печь\nМоб-свитчер",
            textColor: "white", 
            offsetX: 0,
            offsetY: 22,
            font: "13px Calibri,sans serif",
			textBackgroundColor: "#00000088",
            textPadding: [2, 6, 2, 6],
    },
		
	{
            x: 1885,
            z: 6612,
            image: "pink-gears.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Ферма пороха",
            textColor: "white", 
            offsetX: 0,
            offsetY: 13,
            font: "13px Calibri,sans serif",
			textBackgroundColor: "#00000088",
            textPadding: [2, 6, 2, 6],
    },
		
	{
            x: 12349,
            z: 3179,
            image: "pink-gears.svg",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Ферма слизи",
            textColor: "white", 
            offsetX: 0,
            offsetY: 13,
            font: "13px Calibri,sans serif",
			textBackgroundColor: "#00000088",
            textPadding: [2, 6, 2, 6],
    },

        // do not delete the following two closing brackets
    ]
}
