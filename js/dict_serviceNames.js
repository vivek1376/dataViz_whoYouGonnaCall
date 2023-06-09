const dict_serviceNames = {
    "6 month inspection": 9,
    "ADA Compliant, City of Cinti": 9,
    "Animal bite/scratch, wild": 0,
    "Animal bite/scratch-dog ": 0,
    "Animal, waste in a building": 0,
    "Animal, waste in the yard": 0,
    "Animal, waste problem": 0,
    "Annual - c annual insp": 9,
    "Attenuator, repair": 9,
    "Awning": 9,
    "B&B, req for insp- existing": 9,
    "Barricade, setup/remove haz": 9,
    "Barricade, setup/remve": 9,
    "Beautification Request": 8,
    "Bed bugs, hotel/motel": "hotel",
    "Bed bugs, req for info only": 11,
    "Benches": 8,
    "Benches, repair/remove ROW": 8,
    "Bicycle, abandoned": 12,
    "Bicyclist Incident Report": 11,
    "Bike Rack Damage": 12,
    "Bike rack, new": 12,
    "Bikeway Maintenance/Obstructio": 8,
    "Bridge, repair": 8,
    "Build, permit vio dur const ER": 12,
    "Building, Barricade Case ": "building",
    "Building, Condemnation -res": "building",
    "Building, collapsing ": "building",
    "Building, collapsing": "building",
    "Building, com concntrtd code e": "building",
    "Building, commercial CBHCODEC": "building",
    "Building, concentratd code enf": "building",
    "Building, condemn request-com": "building",
    "Building, demo city owned-res": "building",
    "Building, disaster res.vacant": "building",
    "Building, facade insp": "building",
    "Building, facade/fire escape": "building",
    "Building, fire escape insp": "building",
    "Building, fire req insp-com": "building",
    "Building, fire req insp-res": "building",
    "Building, illegal use com prop": "building",
    "Building, illegal use res prop": "building",
    "Building, litter on priv prop": "building",
    "Building, ovrcrowding resident": "building",
    "Building, plmb haz during cons": "building",
    "Building, plmb permit violatn": "building",
    "Building, prmt cnflct w/ con R": "building",
    "Building, request cert of insp": "building",
    "Building, residential": "building",
    "Building, tall grass priv prop": "building",
    "Building, vacant and open Com": "building",
    "Building, vacant and open res ": "building",
    "Building, vacant and open res": "building",
    "Building,storage of mtl  FIRE": "building",
    "Bus Stop Free Standing Structu": "streets",
    "Business, operating fm res": "others",
    "CAGIS permits plus, dev work": "others",
    "CAGIS, csr application mod": "others",
    "COVID-19 Const/Manuf Viol Mask": "others",
    "Carbon monoxide test, req  ": "others",
    "Colored Concrete ": "others",
    "Constituent Affairs Inquiry": "others",
    "Construction Signage": "construction",
    "Construction, Alternate Path": "construction",
    "Construction, damage claim": "construction",
    "Construction, status": "construction",
    "Constructn, build w/o permit ": "construction",
    "Constructn, build w/o permit": "construction",
    "Contractor, complaint": "construction",
    "Contruct/Contract Complnt ROW": "construction",
    "Corner can, dmg/liner/other": "trash",
    "Corner can, new": "trash",
    "Corner can, overflowing": "trash",
    "Curb Ramp, New/Enhance": "streets",
    "Curbs, curbs new": "streets",
    "Curbs, repair": "streets",
    "Damage Claim - NOD": "others",
    "Damage Claim - TROD": "others",
    "Dead animal": "animal",
    "Dead animal, private property": "animal",
    "Default, Accessibility": "public_amenities",
    "Default, CWW": "public_amenities",
    "Default, City": "public_amenities",
    "Default, dote": "public_amenities",
    "Default, msd stormwater": "public_amenities",
    "Default, msd": "public_amenities",
    "Default, parking": "public_amenities",
    "Default, parks": "public_amenities",
    "Default, police (and junk veh)": "public_amenities",
    "Default, police": "public_amenities",
    "Default, recreation": "public_amenities",
    "Drinking Fountain Problem": "public_amenities",
    "Driveway in Paper Street": "public_amenities",
    "Dumping, prv prop <2500 sq ft": "public_amenities",
    "Dumpster, overflow ROW haz": "public_amenities",
    "Electric, no power": "public_amenities",
    "Elevator, HAZARD": "building",
    "Elevator, hazard": "building",
    "Elevator, permit violation": "building",
    "Elevator, unsafe door": "building",
    "Encroachment, object in ROW": 0,
    "Exit, blocked ": 0,
    "Extinguishers, defectv/ missng": 0,
    "Fence Free Standing or Temp St": 0,
    "Fence, built ovr prop line res": 0,
    "Fence, height or material com": 0,
    "Fence, height or material res": 0,
    "Fence, row": 0,
    "Fire door, locked or blocked": 0,
    "Fire door, missing /defective": 0,
    "Fire hydrant, repair cww": 0,
    "Fire hydrant, repair": 0,
    "Fire prevention inspec request": 0,
    "Fleas, in an apartment or bldg": 0,
    "Food borne complaint 1person": "food",
    "Food borne illness 2+persons": "food",
    "Food operation, ill employee": "food",
    "Food operation, insects ": "food",
    "Food operation, request gen": "food",
    "Food operation, rodents": "food",
    "Food operation, unsanitry cond": "food",
    "Food service, unlicensed oper": "food",
    "Gateway, Community Entrance": 0,
    "General Accessibility": 0,
    "General repair, street": 0,
    "Graffiti, haz": 0,
    "Graffiti, removal": 0,
    "Guardrail, DOTE new": 0,
    "Guardrail, repair": 0,
    "Handrails, repair": 0,
    "Healthy Homes, inspection": 0,
    "Heat, no heat hazard": 0,
    "Hiking Trail Issue": 0,
    "Historic Marker Free Standing": 0,
    "Hole, open foundatn priv prop": 0,
    "Home Ownership Survey, FINAL": 0,
    "Home Ownership Survey, Initial": 0,
    "Housing, rehab survey-INITL": 0,
    "Illegal Homeless Encampment": 0,
    "Information Request": 0,
    "Inlets, clogged ": 0,
    "Inlets, clogged raining/pondng": 0,
    "Inlets, clogged": 0,
    "Inlets, ps collpsd or dmgd": 0,
    "Institution, rats in  bldg": 0,
    "Institution, unsanitary cond": 0,
    "Land/use, non-permttd use com ": 0,
    "Land/use, non-permttd use com": 0,
    "Land/use, non-permttd use res": 0,
    "Landslide, inspect for struct": 0,
    "Landslide, private prop stndrd": 0,
    "Lick Run, Light Repair": 0,
    "Life safety 6month inspection": 0,
    "Light Removable Attached": 0,
    "Light, EDS street light new": 0,
    "Light, new/change": 0,
    "Light, pedestal repair": 0,
    "Light, repair": 0,
    "Light, shining into bldg com": 0,
    "Light, shining into bldg res": 0,
    "Litter, Bldg dept property": "trash",
    "Litter, Commun Dev property": "trash",
    "Litter, Park Dept Property": "trash",
    "Litter, Police property": "trash",
    "Litter, Recreation property": "trash",
    "Litter, health dept prop": "trash",
    "Litter, parking fac prop": "trash",
    "Litter, private property": "trash",
    "Litter, request for amnesty": "trash",
    "Litter, restaurant property": "trash",
    "Litter, steps/walkway no haz": "trash",
    "Litter/tall grass/weeds, DOTE ": "trash",
    "Litter/tall grass/weeds, DOTE": "trash",
    "Lot vacant, enclose vacant lot": 0,
    "Manhole cvr/sewer lid, missing": 0,
    "Media advis, winter operations": 0,
    "Media advisory": 0,
    "Metal Furniture, Spec Collectn": 0,
    "Metal Furniture, Streetcar Rte": 0,
    "Mice, building has mice": 0,
    "Misc traffc study cnt/accident": 0,
    "Missing property, collections": 0,
    "Mold, building or apartment": 0,
    "Mold, childrens hosp referral": 0,
    "Mold, hotel/motel": 0,
    "Mosquitoes, ponding water": 0,
    "Mud, tracking of mud": 0,
    "Mudslide/landslide, in row": 0,
    "Notice/sign, posted on a pole": 0,
    "ODOT": 0,
    "Open Burning, garbage, tires": 0,
    "Other RSP Permit Request": 0,
    "Outdoor Cafe Seating": 0,
    "Park Facility Problem": "parks",
    "Park Graffiti": "parks",
    "Park Light Issues": "parks",
    "Park Pothole Repair": "parks",
    "Park Trash Can Overflowing": "parks",
    "Park Trees": "parks",
    "Parking meter, DOTE new/change": "parking",
    "Parking meter, repair": "parking",
    "Parking, grass front yd res": 0,
    "Parking, prob at com facility": 0,
    "Pavement markings, faded": 0,
    "Pavement markings, new/change": 0,
    "Pavement, priv w/ no drainage": 0,
    "Planter Free Standing or Temp": 0,
    "Playground Equipment Problem": 0,
    "Plumbing, defective": 0,
    "Pool, priv pool enclosure haz": 0,
    "Pothole, repair": 0,
    "Private Utility Abutting Owner": 0,
    "ROW furniture/trash dumping": 0,
    "ROW tire dumping": 0,
    "Racoon/bats, rem in bldg/outsd": 0,
    "Railroads, complaints": 0,
    "Rats in sewer, rem req": "pest",
    "Rats, childrens hosp referral": "pest",
    "Rats, in a building": "pest",
    "Rats, outside a building": "pest",
    "Rats, problem/infestation": "pest",
    "Recycle, bin improper set out": "trash",
    "Recycling, cart missing 18": "trash",
    "Recycling, cart missing 35": "trash",
    "Recycling, cart missing 64": "trash",
    "Recycling, cart missing 96": "trash",
    "Recycling, collect green cart": "trash",
    "Recycling, contaminated cart": "trash",
    "Recycling, information request": "trash",
    "Recycling, new 18 gallon bin": "trash",
    "Recycling, new 35 gallon cart": "trash",
    "Recycling, new 64 gallon cart": "trash",
    "Recycling, new 96 gallon cart": "trash",
    "Recycling, new/swap/missing cart": "trash",
    "Recycling, remove cart vacant": "trash",
    "Recycling, remove cart": "trash",
    "Recycling, repair 35": "trash",
    "Recycling, repair 64": "trash",
    "Recycling, repair 96": "trash",
    "Recycling, request to collect": "trash",
    "Recycling, swap bin 18": "trash",
    "Recycling, swap cart 35": "trash",
    "Recycling, swap cart 64": "trash",
    "Recycling, swap cart 96": "trash",
    "Relocation request": 0,
    "Relocation survey request": 0,
    "Request an Accomodation, COC": 0,
    "Restaurant consult, new lic": 0,
    "Restoration, repair cww": 0,
    "Roaches - bldg or apartment": 0,
    "Roaches, childrns hos referral": 0,
    "Rodent/insect infest, hotel/mt": 0,
    "School, annual inspection": "school",
    "School, bathroom stalls, soap ": "school",
    "School, cafeteria complaints": "school",
    "School, general complaint": "school",
    "School, registration Elementry": "school",
    "School, registration high": "school",
    "School, registration interm": "school",
    "School, registration middle": "school",
    "School, roaches in or around ": "school",
    "Septic system, problems": 0,
    "Service complaint, Rumpke Recycling": 0,
    "Service complaint, cascade": 0,
    "Service complaint, cust serv": 0,
    "Service complaint, dote": 0,
    "Service complaint, gcww": 0,
    "Service complaint, greenspace": 0,
    "Service complaint, recreation": 0,
    "Service complaint, rumpke": 0,
    "Service complaint, str clean": 0,
    "Service complaint, trash": 0,
    "Service complaint, trod": 0,
    "Service complaint, yardwaste": 0,
    "Service compliment, cust serv": 0,
    "Service compliment, greenspace": 0,
    "Service compliment, rumpke": 0,
    "Service compliment, str clean": 0,
    "Service compliment, trash": 0,
    "Service compliment, trod": 0,
    "Service compliment, yardwaste": 0,
    "Service recognition, cust serv": 0,
    "Service recognition, rumpke": 0,
    "Service recognition, trash": 0,
    "Sewage, in building": 0,
    "Sewage, surfacing priv prop": 0,
    "Sewer, cave in": 0,
    "Short term rental, inapp behav": 0,
    "Short term rental, noisy": 0,
    "Short term rental, overcrowdng": 0,
    "Short term rental, parking": 0,
    "Short term rental, prop damage": 0,
    "Short term rental, unregisterd": 0,
    "Short term rental, unsafe bldg": 0,
    "Short term rental, unsanitary": 0,
    "Sidewalk Pavers": "streets",
    "Sidewalk repair, asphalt": "streets",
    "Sidewalk, Obstructions": "streets",
    "Sidewalk, new": "streets",
    "Sidewalk, repair haz": "streets",
    "Sidewalk, repairs inspection": "streets",
    "Sign Free Standing or Temporar": "streets",
    "Sign Removable Attached": "streets",
    "Sign Shop,External New Request": "streets",
    "Sign Shop,Internal New Request": "streets",
    "Sign, TOS new/change": "streets",
    "Sign, down/missing ": "streets",
    "Sign, down/missing stop sign": "streets",
    "Sign, down/missing": "streets",
    "Sign, grnd mnted new/chang/rem": "streets",
    "Sign, handicap parking signs": "streets",
    "Sign, overhead new/change": "streets",
    "Sign, overhead repair": "streets",
    "Sign, street sign faded": "streets",
    "Sign, street sign name missing": "streets",
    "Signage, problem comm property": "streets",
    "Signage, problem res property": "streets",
    "Signal, audible signal repair": "streets",
    "Signal, change request traffic": "streets",
    "Signal, new traffic ": "streets",
    "Signal, traf/ped/school repair": "streets",
    "Signal, traffic new": "streets",
    "Signal, veh progess/sig timing": "streets",
    "Slippery streets, request haz": "streets",
    "Slippery streets, request": "streets",
    "Smoke detector, missing/damagd": 0,
    "Special collections, rtc": 0,
    "Special fire inspection": 0,
    "Speed humps, new": 0,
    "Speed humps, repair/removed": 0,
    "Spill, non toxic": 0,
    "Steps, repair haz": 0,
    "Steps, repair": 0,
    "Street cleaning": 0,
    "Street plates, DOTE plates haz": 0,
    "Street plates, place/remove": 0,
    "Street plates, slippery street": 0,
    "Street sweeping": 0,
    "Street, heaved area": 0,
    "Street, repaved\resurfaced": 0,
    "Streetcar, accessibility issue": 0,
    "Streetcar, criminal activity": 0,
    "Streetcar, poor customer servc": 0,
    "Streetcar, station unlcean": 0,
    "Sunken area, repair": 0,
    "TPA, maintenance and repair": 0,
    "Tall grass/ weeds, rec prop": "parks",
    "Tall grass/weeds, CDP prop": "parks",
    "Tall grass/weeds, PS property": "parks",
    "Tall grass/weeds, Park prop": "parks",
    "Tall grass/weeds, bld dpt prop": "parks",
    "Tall grass/weeds, private prop": "parks",
    "Tall grass/weeds, prop health": "parks",
    "Tires, Special Collection rtc": 0,
    "Tires, Special Collection": 0,
    "Traffic island repair,landscap": 0,
    "Traffic island repair,non land": 0,
    "Trash can, condemned": "trash",
    "Trash cart, exemption": "trash",
    "Trash cart, missing 65 gallon": "trash",
    "Trash cart, new 65 gallon": "trash",
    "Trash cart, registration": "trash",
    "Trash cart, remove": "trash",
    "Trash cart, repair 65 gallon": "trash",
    "Trash cart, repair 95 gallon": "trash",
    "Trash cart, repair": "trash",
    "Trash, can damaged": "trash",
    "Trash, citation issued": "trash",
    "Trash, early set out": "trash",
    "Trash, empty cans left out ": "trash",
    "Trash, empty cans left out": "trash",
    "Trash, improper set out": "trash",
    "Trash, late set out ": "trash",
    "Trash, late set out": "trash",
    "Trash, no trash at location": "trash",
    "Trash, on arrival": "trash",
    "Trash, request for collection": "trash",
    "Trash, request for new service": "trash",
    "Trash, set out service": "trash",
    "Trash, tagged collections": "trash",
    "Tree, after hrs no storm": "parks",
    "Tree, blocking visbility-priv": "parks",
    "Tree, blocking visibility-pub": "parks",
    "Tree, dead on priv prop stndrd": "parks",
    "Tree, limbs, down  ROW ": "parks",
    "Tree, limbs, down  ROW": "parks",
    "Tree, planting request": "parks",
    "Tree, removal request-pub tree": "parks",
    "Tree, remove hornet nests-ROW": "parks",
    "Tree, split or hanging": "parks",
    "Tree, stump removal in ROW": "parks",
    "Tree, trim requird private ": "parks",
    "Tree, trim requird private": "parks",
    "Tree, trim required public": "parks",
    "Unsanitary condtn, hotel/motel": 0,
    "Unsanitary living conditions": 0,
    "Utility repairs, DOTE": 0,
    "Vehicle, abandon priv p access": "vehicle",
    "Vehicle, abandon priv p no acc": "vehicle",
    "Vehicle, abandoned in street": "vehicle",
    "Void, DOTE in street": 0,
    "Void, flashfill": 0,
    "Void, repair": 0,
    "Wall, repair problem near str": 0,
    "Wasp, Bee Hive Removal": 0,
    "Waste Franchise, complaint": 0,
    "Water ponding": 0,
    "Water, leaks/breaks": 0,
    "Water, no water haz": 0,
    "Weeds, alley/row/steps": 0,
    "Wire, gym shoes/objects": 0,
    "Yard waste, late set out": 0,
    "Yard waste, tagged collections": 0,
    "Yard waste,rtc": 0,
    "Zoning, cncntrtd code enf com ": 0,
    "Zoning, cncntrtd code enf res": 0
};
