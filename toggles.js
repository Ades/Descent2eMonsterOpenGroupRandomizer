/* (C) Copyrigt 2014 Anders Ive */

// add class to element
function addClass( classname, element )
{
    var cn = element.className;
    if( cn.indexOf( classname ) != -1 )
    {
        return;
    }
    //add a space if the element already has class
    if( cn != '' )
    {
        classname = ' '+classname;
    }
    element.className = cn+classname;
}

function removeClass( classname, element )
{
    var cn = element.className;
    var rxp = new RegExp( "\\s?\\b"+classname+"\\b", "g" );
    cn = cn.replace( rxp, '' );
    element.className = cn;
}

function hasClass(classNameToTestFor, element)
{
    var classNames = element.className.split(' ');
    for (var i = 0; i < classNames.length; i++)
    {
        if (classNames[i].toLowerCase() == classNameToTestFor.toLowerCase())
        {
            return true;
        }
    }
    return false;
}

function randomInteger(from, to)
{
    var selectableElements = $(".selectable.selected");
    var length = selectableElements.length;
    from = 1;
    to = length;
    var randomnumber = Math.floor(Math.random()*(to+1-from)+from);
    $(".chosen").parent().removeClass("chosenrow");
    $(".chosen").removeClass("chosen");
    if (from > to)
    {
        randomnumber = 0
    }
    else if (randomnumber >= 0)
    {
        if (document.getElementsByClassName("chosen").length > 0)
        {
            removeClass("chosen", document.getElementsByClassName("chosen")[0]);
        }
        //var chosen = $("td.selected")[randomnumber - 1];
        var chosen = selectableElements[randomnumber - 1];
        addClass("chosen", chosen);
        //$(".chosen").parent().children()[0].innerText
        $(".chosen").parent().addClass("chosenrow");
        $("#monsterSelected").text($(".chosen").parent().children()[0].innerText);
    }
    return randomnumber;
}

var expansionSet = {
    'Lava Beetle':'CK',
    'Blood Ape':'CK',
    'Deep Elf':'CK',
    'Shadow Dragon':'D2e',
    'Bane Spider':'CK',
    'Naga':'CK',
    'Ferrox':'CK',
    'Kobold':'CK',
    'Goblin Archer':'D2e',
    'Ogre':'CK',
    'Ettin':'D2e',
    'Troll':'CK',
    'Wendigo':'CK',
    'Ice Wyrm':'D2e',
    'Cave Spider':'CK',
    'Razorwing':'CK',
    'Merriod':'D2e',
    'Beastman':'CK',
    'Giant':'CK',
    'Manticore':'CK',
    'Barghest':'D2e',
    'Chaos Beast':'CK',
    'Crypt Dragon':'D2e',
    'Flesh Moulder':'D2e',
    'Skeleton Archer':'CK',
    'Dark Priest':'CK',
    'Demon Lord':'D2e',
    'Hellhound':'CK',
    'Medusa':'CK',
    'Zombie':'D2e',
    'Sorcerer':'CK',
    'Golem':'CK',
    'Elemental':'D2e',
    'Fire Imps':'LotW',
    'Hybrid Sentinals':'LotW',
    'Goblin Witchers':'LoR',
    'Volucrix Reavers':'LoR',
    'Carrion Drakes':'LoR',
    'Arachyura':'LoR',
    'Harpy':'TT',
    'Plague Worm':'TT',
    'Test':'SoN'
};
//var monsterTraits = {"Civilized":["Manticore","Flesh Moulder","Skeleton Archer","Dark Priest","Sorcerer"],"Hot":["Lava Beetle","Blood Ape","Demon Lord","Hellhound","Golem","Elemental"],"Dark":["Deep Elf","Shadow Dragon","Bane Spider","Manticore","Barghest","Chaos Beast","Crypt Dragon"],"Water":["Naga","Ferrox","Merriod"],"Building":["Kobold","Goblin Archer","Ogre","Medusa","Zombie","Sorcerer","Golem"],"Mountain":["Ettin","Troll","Beastman","Giant","Golem"],"Cold":["Wendigo","Icw Wyrm","Elemental"],"Cursed":["Manticore","Chaos Beast","Crypt Dragon","Flesh Moulder","Skeleton Archer","Dark Priest","Demon Lord","Hellhound","Medusa","Zombie"],"Wilderness":["Cave Spider","Razorwing","Merriod","Beastman","Giant","Manticore","Barghest"],"Cave":["Lava Beetle","Blood Ape","Deep Elf","Shadow Dragon","Bane Spider","Naga","Ferrox","Kobold","Goblin Archer","Ogre","Ettin","Troll","Wendigo","Icw Wyrm","Cave Spider","Razorwing"]};
var monsterTraits = {};
//var openGroups = {"title":["Civilized","Hot","Dark","Water","Building","Mountain","Cold","Cursed","Wilderness","Cave"],"Lava Beetle":["Hot","Cave"],"Blood Ape":["Hot","Cave"],"Deep Elf":["Dark","Cave"],"Shadow Dragon":["Dark","Cave"],"Bane Spider":["Dark","Cave"],"Naga":["Water","Cave"],"Ferrox":["Water","Cave"],"Kobold":["Building","Cave"],"Goblin Archer":["Building","Cave"],"Ogre":["Building","Cave"],"Ettin":["Mountain","Cave"],"Troll":["Mountain","Cave"],"Wendigo":["Cold","Cave"],"Icw Wyrm":["Cold","Cave"],"Cave Spider":["Wilderness","Cave"],"Razorwing":["Wilderness","Cave"],"Merriod":["Water","Wilderness"],"Beastman":["Mountain","Wilderness"],"Giant":["Mountain","Wilderness"],"Manticore":["Civilized","Dark","Cursed","Wilderness"],"Barghest":["Dark","Wilderness"],"Chaos Beast":["Dark","Cursed"],"Crypt Dragon":["Dark","Cursed"],"Flesh Moulder":["Civilized","Cursed"],"Skeleton Archer":["Civilized","Cursed"],"Dark Priest":["Civilized","Cursed"],"Demon Lord":["Hot","Cursed"],"Hellhound":["Hot","Cursed"],"Medusa":["Building","Cursed"],"Zombie":["Building","Cursed"],"Sorcerer":["Civilized","Building"],"Golem":["Hot","Building","Mountain"],"Elemental":["Hot","Cold"]};

var openGroups = {
    'title':["Civilized","Hot","Dark","Water","Building","Mountain","Cold","Cursed","Wilderness","Cave"],
    'Lava Beetle':[		'Hot',								'Cave',	],
    'Blood Ape':[		'Hot',								'Cave',	],
    'Deep Elf':[			'Dark',							'Cave',	],
    'Shadow Dragon':[			'Dark',							'Cave',	],
    'Bane Spider':[			'Dark',							'Cave',	],
    'Naga':[				'Water',						'Cave',	],
    'Ferrox':[				'Water',						'Cave',	],
    'Kobold':[					'Building',					'Cave',	],
    'Goblin Archer':[					'Building',					'Cave',	],
    'Ogre':[					'Building',					'Cave',	],
    'Ettin':[						'Mountain',				'Cave',	],
    'Troll':[						'Mountain',				'Cave',	],
    'Wendigo':[							'Cold',			'Cave',	],
    'Ice Wyrm':[							'Cold',			'Cave',	],
    'Cave Spider':[									'Wilderness',	'Cave',	],
    'Razorwing':[									'Wilderness',	'Cave',	],
    'Merriod':[				'Water',					'Wilderness',		],
    'Beastman':[						'Mountain',			'Wilderness',		],
    'Giant':[						'Mountain',			'Wilderness',		],
    'Manticore':[	'Civilized',		'Dark',					'Cursed',	'Wilderness',		],
    'Barghest':[			'Dark',						'Wilderness',		],
    'Chaos Beast':[			'Dark',					'Cursed',			],
    'Crypt Dragon':[			'Dark',					'Cursed',			],
    'Flesh Moulder':[	'Civilized',							'Cursed',			],
    'Skeleton Archer':[	'Civilized',							'Cursed',			],
    'Dark Priest':[	'Civilized',							'Cursed',			],
    'Demon Lord':[		'Hot',						'Cursed',			],
    'Hellhound':[		'Hot',						'Cursed',			],
    'Medusa':[					'Building',			'Cursed',			],
    'Zombie':[					'Building',			'Cursed',			],
    'Sorcerer':[	'Civilized',				'Building',						],
    'Golem':[		'Hot',			'Building',	'Mountain',					],
    'Elemental':[		'Hot',					'Cold',				],
    'Fire Imps':[		'Hot',						'Cursed',			],
    'Hybrid Sentinals':[						'Mountain',				'Cave',	],
    'Goblin Witchers':[					'Building',			'Cursed',			],
    'Volucrix Reavers':[					'Building',	'Mountain',					],
    'Carrion Drakes':[			'Dark',	'Water',							],
    'Arachyura':[								'Cursed',	'Wilderness',		],
    'Harpy':[						'Mountain',			'Wilderness',		],
    'Plague Worm':[				'Water',						'Cave',	],
}

function setup()
{
    for (var r in openGroups)
    {
        if (r == "title")
        {
            continue;
        }
        else for (var e in openGroups[r])
        {
            var el = openGroups[r][e];
            if (typeof monsterTraits[el] == 'undefined')
            {
                monsterTraits[el] = new Array();
            }
            monsterTraits[el].push(r);
            console.log("monsterTraits["+el+"].push("+r);
        }
    }
    //$(monsterTraits.Building).each(function (i,e){});
    //$(randomNumber).innerText = "hej";
    for (var z in expansionSet)
    {

    }
    var tr, td;
    for (var r in openGroups)
    {
        tr = document.createElement("tr");
        if (r == "title")
        {
            var gtable = document.createElement("table");
            gtable.style = "border-spacing: 0.5px;font-weight: normal;vertical-align:bottom";
            var sets = {};
            for (var z in expansionSet)
            {
                sets[expansionSet[z]] = new Boolean();
            }
            var x = 0;
            var gtr;
            for (var z in sets)
            {
                if (x % 3 == 0)
                {
                    gtr = document.createElement("tr");
                    gtable.appendChild(gtr);
                }
                var gtd = document.createElement("td");
                addClass(z, gtd);
                gtd.innerText = z;
                gtr.appendChild(gtd);
                x++;
            }

            td = document.createElement("th");
            td.appendChild(document.createTextNode('Generate'));
            td.appendChild(document.createElement("hr"));
            td.appendChild(gtable);
            //td.addEventListener('click', function(){ document.getElementById('randomNumber').innerText = randomInteger(1,parseInt(document.getElementById('selectedAmount').innerText));}, false);
            td.addEventListener('click', function(){ document.getElementById('randomNumber').innerText = randomInteger();}, false);

            tr.appendChild(td);
            for (var e in openGroups["title"])
            {
                td = document.createElement("th");
                var newSpan=null;
                newSpan = document.createElement('span');
                newSpan.setAttribute('class',openGroups["title"][e].toLowerCase()+' sprite-monster-traits');
                newSpan.addEventListener('click', function(){ $(this).toggleClass("trait-selected");}, false);
                td.appendChild(newSpan);
                var newP = document.createElement('p');
                newP.appendChild(document.createTextNode(openGroups["title"][e]));
                td.appendChild(newP);
                //td.appendChild(document.createTextNode(openGroups["title"][e]));
                //addClass(document.createTextNode(openGroups["title"][e]), td);
                td.addEventListener('click', function(){ switchSelected(this);}, false);
                addClass(openGroups["title"][e], td);
                tr.appendChild(td);
            }
        }
        else
        {
            var rowClassName = r.replace(/\s/g, '').toLowerCase();
            td = document.createElement("td");
            td.appendChild(document.createTextNode(r));
            tr.appendChild(td);
            addClass(rowClassName, td);
            addClass(expansionSet[r], td);
            td.addEventListener('click', function(){ switchSelected(this);}, false);
            for (var e in openGroups["title"])
            {
                var text = "";
                td = document.createElement("td");
                for (var trait in openGroups[r])
                {
                    if (openGroups[r][trait] == openGroups["title"][e])
                    {
                        text = "X";
                        addClass(rowClassName, td);
                        addClass(openGroups[r][trait], td);
                        addClass("selectable", td);
                        break;
                    }
                }
                td.appendChild(document.createTextNode(text));
                tr.appendChild(td);
            }
        }
        document.getElementById("monsterTraits").appendChild(tr);
    }
}
function switchSelected(element)
{
    var classElements = document.getElementsByClassName(element.className.split(" ",1)[0]);
    var turnOff = hasClass("selected", element);
    $(".chosen").parent().removeClass("chosenrow");
    $(".chosen").removeClass("chosen");
    for (var i = 0 ; i < classElements.length; i++)
    {
        if (turnOff)
        {
            removeClass("selected", classElements[i]);
        }
        else
        {
            addClass("selected", classElements[i]);
        }
    }
    /*var nbrSelected = parseInt(document.getElementById("selectedAmount").innerText);
    if (turnOff)
    {
        nbrSelected -= classElements.length - 1;
    }
    else
    {
        nbrSelected += classElements.length - 1;
    }
    document.getElementById("selectedAmount").innerText = nbrSelected;*/
}
