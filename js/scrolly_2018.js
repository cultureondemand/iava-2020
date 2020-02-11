/**
 * scrollVis - encapsulates
 * all the code for the visualization
 * using reusable charts pattern:
 * http://bost.ocks.org/mike/chart/
 */
var iii=0;
var name;
var trigger='';
var numerotrigger='';





/////////
//// currently a veteran
///////////
var dummydata_currently = [
{a:"Veteran",b:4},
{a:"Active Duty",b:18},
{a:"Guard",b:22},
{a:"Reserve",b:4}
];

 
var data_currently = [
{a:"Veteran",b:90},
{a:"Active Duty",b:5},
{a:"Guard",b:4},
{a:"Reserve",b:5}
];

/////
//////
///////







/////////
//// Post-9/11 veteran
///////////
var dummydata_post = [
{a:"Yes",b:86},
{a:"No",b:14}
];

 
var data_post = [
{a:"Yes",b:95},
{a:"No",b:5}
];

/////
//////
///////







/////////
//// member of any other veteran organization
///////////
var dummydata_member = [
{a:"Yes",b:41},
{a:"No",b:54}
];

 
var data_member = [
{a:"Yes",b:66},
{a:"No",b:34}
];

/////
//////
///////




/////////
//// important to interact regularly with other veterans
///////////
var dummydata_interact = [
{a:"Extremely important",b:4},
{a:"Very important",b:18},
{a:"Moderately important",b:22},
{a:"Slightly important",b:15},
{a:"Not at all important",b:4}
];

 
var data_interact = [
{a:"Extremely important",b:26},
{a:"Very important",b:32},
{a:"Moderately important",b:26},
{a:"Slightly important",b:12},
{a:"Not at all important",b:4}
];

/////
//////
///////




/////////
//// age
///////////
var data_age = [
{a:"18 - 30",b:4},
{a:"31 - 35",b:18},
{a:"36 - 40",b:22},
{a:"41 - 45",b:15},
{a:"46 - 50",b:13},
{a:"51 - 65",b:24},
{a:"65+",b:4}
];

 
var dummydata_age = [
{a:"18 - 30",b:4},
{a:"31 - 35",b:10},
{a:"36 - 40",b:30},
{a:"41 - 45",b:27},
{a:"46 - 50",b:1},
{a:"51 - 65",b:4},
{a:"65+",b:24}
];

/////
//////
///////


var data_marital = [
 {a:"Married",b:69},
{a:"Widowed",b:1},
{a:"Divorced",b:13},
{a:"Separated",b:2},
{a:"Single, never married",b:12},
{a:"Domestic Partnership",b:3}
];



var dummydata_marital = [
 {a:"Married",b:4},
{a:"Widowed",b:31},
{a:"Divorced",b:43},
{a:"Separated",b:12},
{a:"Single, never married",b:2},
{a:"Domestic Partnership",b:8}
];










var data_children = [
{a:"0",b:27},
{a:"1",b:16},
{a:"2",b:28},
{a:"3",b:17},
{a:"4+",b:12}
];



var dummydata_children = [
{a:"0",b:27},
{a:"1",b:16},
{a:"2",b:28},
{a:"3",b:17},
{a:"4+",b:12}
];









var data_ethnicity = [
{a:"White",b:73},
{a:"Black or African American",b:6},
{a:"Hispanic or Latino",b:11},
{a:"American Indian or Alaska Native",b:1},
{a:"Asian",b:2},
{a:"Native Hawaiian or Pacific Islander",b:1},
{a:"Other",b:6} 
];



var dummydata_ethnicity= [
{a:"White",b:73},
{a:"Black or African American",b:6},
{a:"Hispanic or Latino",b:11},
{a:"American Indian or Alaska Native",b:1},
{a:"Asian",b:2},
{a:"Native Hawaiian or Pacific Islander",b:1},
{a:"Other",b:6} 
];














var data_religion = [
{a:"Christian",b:61},
{a:"Jewish",b:2},
{a:"Muslim",b:0.5},
{a:"Hindu",b:0.5},
{a:"Atheist",b:9},
{a:"Agnostic",b:11},
{a:"Other",b:16} 
];



var dummydata_religion = [
{a:"Christian",b:58},
{a:"Jewish",b:15},
{a:"Muslim",b:13},
{a:"Hindu",b:13},
{a:"Atheist",b:1},
{a:"Agnostic",b:1},
{a:"Other",b:1} 
];






var data_gender = [
{a:"Male",b:86},
{a:"Female",b:11},
{a:"Gender Variant/Nonconforming/Transgender",b:1},
{a:"Other",b:1},
{a:"Prefer Not To Answer",b:1}
];



var dummydata_gender = [
{a:"Male",b:1},
{a:"Female",b:1},
{a:"Gender Variant/Nonconforming/Transgender",b:1},
{a:"Other",b:.5},
{a:"Prefer Not To Answer",b:95}
];









var data_orientation = [
{a:"Heterosexual",b:92},
{a:"Homosexual",b:2},
{a:"Bisexual",b:2},
{a:"Other",b:1},
{a:"Prefer Not To Answer",b:4}
];



var dummydata_orientation = [
{a:"Heterosexual",b:6},
{a:"Homosexual",b:1},
{a:"Bisexual",b:11},
{a:"Other",b:5},
{a:"Prefer Not To Answer",b:75}
];














var data_employment = [
{a:"Full Time",b:54},
{a:"Part Time",b:5},
{a:"Self Employed",b:3},
{a:"Unemployed*",b:8},
{a:"Active Duty",b:5},
{a:"Retired Disabled",b:19},
{a:"Student",b:6}

];



var dummydata_employment = [
{a:"Full Time",b:1},
{a:"Part Time",b:90},
{a:"Self Employed",b:1},
{a:"Unemployed*",b:1},
{a:"Active Duty",b:1},
{a:"Retired Disabled",b:1},
{a:"Student",b:1}
];







var data_income = [
{a:"< $10,000",b:1},
{a:"$10,000 - $19,999",b:2},
{a:"$20,000 - $29,999",b:4},
{a:"$30,000 - $39,999",b:6},
{a:"$40,000 - $49,999",b:7},
{a:"$50,000 - $59,999",b:7},
{a:"$60,000 - $69,999",b:7},
{a:"$70,000 - $79,999",b:7},
{a:"$80,000 - $89,999",b:7},
{a:"$90,000 - $99,999",b:6},
{a:"$100,000 - $149,999",b:20},
{a:"> $150,000",b:14},
{a:"Prefer Not to Answer",b:12}
];



var dummydata_income = [
{a:"< $10,000",b:1},
{a:"$10,000 - $19,999",b:5},
{a:"$20,000 - $29,999",b:6},
{a:"$30,000 - $39,999",b:7},
{a:"$40,000 - $49,999",b:6},
{a:"$50,000 - $59,999",b:2},
{a:"$60,000 - $69,999",b:13},
{a:"$70,000 - $79,999",b:2},
{a:"$80,000 - $89,999",b:13},
{a:"$90,000 - $99,999",b:20},
{a:"$100,000 - $149,999",b:6},
{a:"> $150,000",b:10},
{a:"Prefer Not to Answer",b:16}
];







var data_school = [
{a:"Some high school, no degree",b:.1},
{a:"High school graduate or equivalent (GED)",b:3},
{a:"Some college credit, no degree",b:16},
{a:"Trade/technical/vocational training",b:5},
{a:"Associate's degree",b:12},
{a:"Bachelor's Degree",b:30},
{a:"Master's Degree",b:27},
{a:"Doctoral Degree (PhD)",b:2},
{a:"Professional Degree (JD, DVM, MD, etc)",b:4}
];



var dummydata_school = [
{a:"Some high school, no degree",b:.6},
{a:"High school graduate or equivalent (GED)",b:3},
{a:"Some college credit, no degree",b:6},
{a:"Trade/technical/vocational training",b:15},
{a:"Associate's degree",b:12},
{a:"Bachelor's Degree",b:30},
{a:"Master's Degree",b:2},
{a:"Doctoral Degree (PhD)",b:27},
{a:"Professional Degree (JD, DVM, MD, etc)",b:14}
];







var data_community = [
{a:"Suburban",b:52},
{a:"Urban",b:21},
{a:"Rural",b:22},
{a:"Active Duty Military Base CONUS",b:2},
{a:"Active Duty Military Base OCONUS",b:1},
{a:"I currently live outside the US",b:2} 
];



var dummydata_community = [
{a:"Suburban",b:52},
{a:"Urban",b:21},
{a:"Rural",b:22},
{a:"Active Duty Military Base CONUS",b:2},
{a:"Active Duty Military Base OCONUS",b:1},
{a:"I currently live outside the US",b:2} 
];









////
///////////////
///////
///
/////////
///// milserve


var data_branch = [
{a:"Army",b:62},
{a:"Navy",b:13},
{a:"Marine Corps",b:17},
{a:"Air Force",b:16},
{a:"Coast Guard",b:1} 
];



var dummydata_branch = [
{a:"Army",b:1},
{a:"Navy",b:95},
{a:"Marine Corps",b:1},
{a:"Air Force",b:1},
{a:"Coast Guard",b:1} 
];








var data_officer = [
{a:"Officer",b:75},
{a:"Enlisted",b:15},
{a:"Officer who was prior enlisted",b:10}
];



var dummydata_officer = [
{a:"Officer",b:1},
{a:"Enlisted",b:1},
{a:"Officer who was prior enlisted",b:1}
];









var numero_natg = [58];



var data_natg = [
{a:"Currently in Reserve or National Guard Component",b:10},
{a:"Previously in Reserve or National Guard Component",b:48},
{a:"Never in Reserve or National Guard Component",b:42}
];



var dummydata_natg = [
{a:"Currently in Reserve or National Guard Component",b:75},
{a:"Previously in Reserve or National Guard Component",b:15},
{a:"Never in Reserve or National Guard Component",b:10}
];




var data_milserve_a = [
{a:"Yes",b:76},
{a:"No",b:8},
{a:"Unsure",b:16}
];



var dummydata_milserve_a = [
{a:"Yes",b:6},
{a:"No",b:78},
{a:"Unsure",b:18}
];


////
/////

var data_iraq_worth = [
{a:"Worth it",b:22},
{a:"Somewhat worth it",b:25},
{a:"Neither worth it nor not worth it",b:10},
{a:"Somewhat not worth it",b:11},
{a:"Not worth it",b:32}
];



var dummydata_iraq_worth = [
{a:"Worth it",b:82},
{a:"Somewhat worth it",b:7},
{a:"Neither worth it nor not worth it",b:11},
{a:"Somewhat not worth it",b:11},
{a:"Not worth it",b:11}
];


///
////////

var data_afghan_worth = [
{a:"Worth it",b:30},
{a:"Somewhat worth it",b:32},
{a:"Neither worth it nor not worth it",b:10},
{a:"Somewhat not worth it",b:11},
{a:"Not worth it",b:17}
];



var dummydata_afghan_worth = [
{a:"Worth it",b:22},
{a:"Somewhat worth it",b:25},
{a:"Neither worth it nor not worth it",b:10},
{a:"Somewhat not worth it",b:11},
{a:"Not worth it",b:32}
];



//////
//////

///
//// where did you serve



var data_l = [
{a:"Iraq",b:75},
{a:"CONUS",b:59},
{a:"Afghanistan",b:39},
{a:"Kuwait",b:44},
{a:"Central Command AOR",b:10},
{a:"Qatar",b:14},
{a:"Bahrain",b:9},
{a:"Guantanamo Bay",b:4},
{a:"Syria",b:1},
{a:"Other",b:25}  
];



var dummydata_l = [
{a:"Iraq",b:66},
{a:"CONUS",b:41},
{a:"Afghanistan",b:33},
{a:"Kuwait",b:32},
{a:"Central Command AOR",b:10},
{a:"Qatar",b:9},
{a:"Bahrain",b:7},
{a:"Guantanamo Bay",b:3},
{a:"Syria",b:3},
{a:"Other",b:23}  
];




//////
///number of deployments
////////

var data_m = [
{a:"Zero Deployments",b:18},
{a:"One Deployment",b:55},
{a:"Two Deployments",b:21},
{a:"Three+ Deployments",b:6}

];



var dummydata_m = [
{a:"Zero Deployments",b:1},
{a:"One Deployment",b:1},
{a:"Two Deployments",b:90},
{a:"Three+ Deployments",b:1}
];




var data_n = [
{a:"Zero Deployments",b:39},
{a:"One Deployment",b:44},
{a:"Two Deployments",b:12},
{a:"Three+ Deployments",b:5}

];



var dummydata_n = [
{a:"Zero Deployments",b:1},
{a:"One Deployment",b:1},
{a:"Two Deployments",b:12},
{a:"Three+ Deployments",b:1}
];



var data_o = [
{a:"Zero Deployments",b:90},
{a:"One Deployment",b:9},
{a:"Two Deployments",b:.5},
{a:"Three+ Deployments",b:.5}

];



var dummydata_o = [
{a:"Zero Deployments",b:1},
{a:"One Deployment",b:1},
{a:"Two Deployments",b:3},
{a:"Three+ Deployments",b:90}
];



var data_p = [
{a:"Zero Deployments",b:98},
{a:"One Deployment",b:2},
{a:"Two Deployments",b:0},
{a:"Three+ Deployments",b:0}

];



var dummydata_p = [
{a:"Zero Deployments",b:1},
{a:"One Deployment",b:1},
{a:"Two Deployments",b:90},
{a:"Three+ Deployments",b:1}
];





/////////////







var data_milserve_separate = [
{a:"Not separated",b:12},
{a:"2018",b:2},
{a:"2017",b:3},
{a:"2016",b:4},
{a:"2015",b:4},
{a:"2014",b:6},
{a:"2013",b:6},
{a:"2012",b:7},
{a:"2011",b:7},
{a:"2010",b:8},
{a:"2009",b:7},
{a:"2008",b:7},
{a:"2007",b:7},
{a:"2006",b:6},
{a:"2005",b:5},
{a:"2004",b:4},
{a:"2003",b:2},
{a:"2001-2002",b:1},
{a:"2000 or Earlier",b:2} 
];



var dummydata_milserve_separate = [
{a:"Not separated",b:14},
{a:"2018",b:9},
{a:"2017",b:14},
{a:"2016",b:16},
{a:"2015",b:15},
{a:"2014",b:15},
{a:"2013",b:11},
{a:"2012",b:5},
{a:"2011",b:9},
{a:"2010",b:14},
{a:"2009",b:16},
{a:"2008",b:15},
{a:"2007",b:15},
{a:"2006",b:11},
{a:"2005",b:5},
{a:"2004",b:5},
{a:"2003",b:5},
{a:"2002",b:5},
{a:"2001",b:5},
{a:"2000 or Earlier",b:1}  
];

 

 




var data_discharge = [
{a:"Honorable discharge",b:98},
{a:"General discharge",b:1},
{a:"Other than Honorable Discharge",b:0.5},
{a:"Dishonorable Discharge",b:0.05}
];



var dummydata_discharge = [
{a:"Honorable discharge",b:75},
{a:"General discharge",b:15},
{a:"Other than Honorable Discharge",b:15},
{a:"Dishonorable Discharge",b:10}
];




////
//////  
///
/// voter registration

var data_reg = [
{a:"Registered",b:97},
{a:"Not Registerd",b:3}

];



var dummydata_reg = [
{a:"Registered",b:50},
{a:"Not Registerd",b:28}

];



var numero_vote_reg = [97];




var data_running = [
{a:"Yes",b:36},
{a:"No",b:64}

];



var dummydata_running = [
{a:"Yes",b:50},
{a:"No",b:28}

];









////
//////  
///
/// political party




var data_party = [
{a:"Democratic Party",b:23},
{a:"Republican Party",b:33},
{a:"Libertarian Party",b:5},
{a:"Green Party",b:.5},
{a:"No political affiliation/independent",b:37},
{a:"Other",b:2}

];



var dummydata_party = [
{a:"Democratic Party",b:38},
{a:"Republican Party",b:17},
{a:"Libertarian Party",b:37},
{a:"Green Party",b:5},
{a:"No political affiliation/independent",b:3},
{a:"Other",b:3}
];





////
//////  
///
/// veteran candidate impact

var data_vet_impact = [
{a:"Positive impact",b:86},
{a:"Neutral impact",b:13},
{a:"Negative impact",b:1}  
];



var dummydata_vet_impact = [
{a:"Positive impact",b:2},
{a:"Neutral impact",b:1},
{a:"Negative impact",b:2} 
];




////
//////  
///
/// veteran  support

var data_public_support = [
{a:"Somewhat agree",b:86},
{a:"Somewhat disagree",b:13},
{a:"Strongly disagree",b:1},  
{a:"Neither agree nor disagree",b:86},
{a:"Strongly agree",b:13}  
];


 

var dummydata_public_support = [
{a:"Somewhat agree",b:86},
{a:"Somewhat disagree",b:13},
{a:"Strongly disagree",b:1},  
{a:"Neither agree nor disagree",b:86},
{a:"Strongly agree",b:13}  
];




var data_employer_support = [
{a:"Somewhat agree",b:38},
{a:"Somewhat disagree",b:21},
{a:"Strongly disagree",b:9},  
{a:"Neither agree nor disagree",b:24},
{a:"Strongly agree",b:8}  
];


 

var dummydata_employer_support = [
{a:"Somewhat agree",b:86},
{a:"Somewhat disagree",b:13},
{a:"Strongly disagree",b:1},  
{a:"Neither agree nor disagree",b:86},
{a:"Strongly agree",b:13}  
];








var data_congress_support = [
{a:"Somewhat agree",b:23},
{a:"Somewhat disagree",b:31},
{a:"Strongly disagree",b:22},  
{a:"Neither agree nor disagree",b:22},
{a:"Strongly agree",b:2}  
];


 

var dummydata_congress_support = [
{a:"Somewhat agree",b:86},
{a:"Somewhat disagree",b:13},
{a:"Strongly disagree",b:1},  
{a:"Neither agree nor disagree",b:86},
{a:"Strongly agree",b:13}  
];








var data_trump_support = [
{a:"Somewhat agree",b:20},
{a:"Somewhat disagree",b:11},
{a:"Strongly disagree",b:31},  
{a:"Neither agree nor disagree",b:12},
{a:"Strongly agree",b:26}  
];


 

var dummydata_trump_support = [
{a:"Somewhat agree",b:86},
{a:"Somewhat disagree",b:13},
{a:"Strongly disagree",b:1},  
{a:"Neither agree nor disagree",b:86},
{a:"Strongly agree",b:13}  
];










var data_public_understand = [
{a:"Somewhat agree",b:16},
{a:"Somewhat disagree",b:36},
{a:"Strongly disagree",b:31},  
{a:"Neither agree nor disagree",b:14},
{a:"Strongly agree",b:3}  
];


 

var dummydata_public_understand = [
{a:"Somewhat agree",b:86},
{a:"Somewhat disagree",b:13},
{a:"Strongly disagree",b:1},  
{a:"Neither agree nor disagree",b:86},
{a:"Strongly agree",b:13}  
];











////
//////  
///
/// improving lives of veterans

var data_vet_affairs = [
{a:"Average",b:45},
{a:"Good",b:17},
{a:"Terrible",b:13},  
{a:"Poor",b:22},
{a:"Excellent",b:3}  
];


 

var dummydata_vet_affairs = [
{a:"Average",b:86},
{a:"Good",b:13},
{a:"Terrible",b:1},  
{a:"Poor",b:86},
{a:"Excellent",b:13}  
];






var data_mayor = [
{a:"Average",b:37},
{a:"Good",b:16},
{a:"Terrible",b:20},  
{a:"Poor",b:22},
{a:"Excellent",b:5}  
];


 

var dummydata_mayor = [
{a:"Average",b:86},
{a:"Good",b:13},
{a:"Terrible",b:1},  
{a:"Poor",b:86},
{a:"Excellent",b:13}  
];







var data_gov = [
{a:"Average",b:33},
{a:"Good",b:21},
{a:"Terrible",b:19},  
{a:"Poor",b:20},
{a:"Excellent",b:7}  
];


 

var dummydata_gov = [
{a:"Average",b:86},
{a:"Good",b:13},
{a:"Terrible",b:1},  
{a:"Poor",b:86},
{a:"Excellent",b:13}  
];









var data_sec_def= [
{a:"Average",b:24},
{a:"Good",b:29},
{a:"Terrible",b:5},  
{a:"Poor",b:9},
{a:"Excellent",b:33}  
];


 

var dummydata_sec_def = [
{a:"Average",b:86},
{a:"Good",b:13},
{a:"Terrible",b:1},  
{a:"Poor",b:86},
{a:"Excellent",b:13}  
];









var data_trump_improve = [
{a:"Average",b:19},
{a:"Good",b:22},
{a:"Terrible",b:29},  
{a:"Poor",b:14},
{a:"Excellent",b:16}  
];


 

var dummydata_trump_improve = [
{a:"Average",b:86},
{a:"Good",b:13},
{a:"Terrible",b:1},  
{a:"Poor",b:86},
{a:"Excellent",b:13}  
];



/////
//////
/// selective service
///////////////





var data_selective_women = [
{a:"Strongly Support",b:50},
{a:"Support",b:23},
{a:"Neutral",b:12},
{a:"Oppose",b:5},
{a:"Strongly Oppose",b:10}

];



var dummydata_selective_women = [
{a:"Strongly Support",b:25},
{a:"Support",b:32},
{a:"Neutral",b:14},
{a:"Oppose",b:1},
{a:"Strongly Oppose",b:28}
];








var data_selective_end = [
{a:"Strongly Support",b:12},
{a:"Support",b:9},
{a:"Neutral",b:17},
{a:"Oppose",b:19},
{a:"Strongly Oppose",b:43}

];



var dummydata_selective_end = [
{a:"Strongly Support",b:25},
{a:"Support",b:32},
{a:"Neutral",b:14},
{a:"Oppose",b:1},
{a:"Strongly Oppose",b:28}
];













/////
/////////
///mj legal
////





var data_mj_research = [
{a:"Strongly agree",b:72},
{a:"Somewhat agree",b:18},
{a:"Neutral",b:6},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:3}

];



var dummydata_mj_research = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];







var data_mj_va_research = [
{a:"Strongly agree",b:68},
{a:"Somewhat agree",b:17},
{a:"Neutral",b:8},
{a:"Somewhat disagree",b:3},
{a:"Strongly disagree",b:4}

];



var dummydata_mj_va_research = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];








var data_mj_medicinal = [
{a:"Strongly agree",b:63},
{a:"Somewhat agree",b:20},
{a:"Neutral",b:10},
{a:"Somewhat disagree",b:3},
{a:"Strongly disagree",b:4}

];



var dummydata_mj_medicinal = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];










var data_mj_legal = [
{a:"Strongly agree",b:35},
{a:"Somewhat agree",b:20},
{a:"Neutral",b:19},
{a:"Somewhat disagree",b:9},
{a:"Strongly disagree",b:17}

];



var dummydata_mj_legal = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];




/////
////
/////// afghan visa
//////



var data_afghan_visa = [
{a:"Strongly agree",b:52},
{a:"Somewhat agree",b:29},
{a:"Neutral",b:11},
{a:"Somewhat disagree",b:4},
{a:"Strongly disagree",b:4}

];



var dummydata_afghan_visa = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];



///////
////
/////
////////// fire arms




///////////////
/////////////


var numero_guns = [68];





var data_guns_storage = [
{a:"Unlocked, Loaded",b:10},
{a:"Unlocked, Unloaded, Ammunition Stored Separately",b:13},
{a:"Unlocked, Unloaded, No Ammunition in Home",b:1},
{a:"Locked and Loaded",b:20},
{a:"Locked, Unloaded, Ammunition Stored Separately",b:30},
{a:"Locked, Unloaded, No Ammunition in Home",b:2},
{a:"Would rather not say",b:20},
{a:"Other",b:4}


];



var dummydata_guns_storage = [
{a:"Unlocked, Loaded",b:14},
{a:"Unlocked, Unloaded, Ammunition Stored Separately",b:17},
{a:"Unlocked, Unloaded, No Ammunition in Home",b:1},
{a:"Locked and Loaded",b:19},
{a:"Locked, Unloaded, Ammunition Stored Separately",b:29},
{a:"Locked, Unloaded, No Ammunition in Home",b:1},
{a:"Would rather not say",b:15},
{a:"Other",b:4}
];







var data_guns_lockers = [
{a:"Strongly agree",b:8},
{a:"Somewhat agree",b:12},
{a:"Neutral",b:22},
{a:"Somewhat disagree",b:13},
{a:"Strongly disagree",b:44}

];



var dummydata_guns_lockers = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];







var data_guns_concealed = [
{a:"Strongly agree",b:21},
{a:"Somewhat agree",b:11},
{a:"Neutral",b:9},
{a:"Somewhat disagree",b:17},
{a:"Strongly disagree",b:42}

];



var dummydata_guns_concealed = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];




var data_guns_assault = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:10},
{a:"Neutral",b:12},
{a:"Somewhat disagree",b:12},
{a:"Strongly disagree",b:42}

];



var dummydata_guns_assault = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];






var data_guns_high = [
{a:"Strongly agree",b:29},
{a:"Somewhat agree",b:11},
{a:"Neutral",b:11},
{a:"Somewhat disagree",b:11},
{a:"Strongly disagree",b:38}

];



var dummydata_guns_high = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];







var data_guns_wait = [
{a:"Strongly agree",b:19},
{a:"Somewhat agree",b:11},
{a:"Neutral",b:19},
{a:"Somewhat disagree",b:17},
{a:"Strongly disagree",b:34}

];



var dummydata_guns_wait = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];









var data_guns_trigger = [
{a:"Strongly agree",b:37},
{a:"Somewhat agree",b:28},
{a:"Neutral",b:21},
{a:"Somewhat disagree",b:4},
{a:"Strongly disagree",b:10}

];



var dummydata_guns_trigger = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];







var data_guns_background = [
{a:"Strongly agree",b:70},
{a:"Somewhat agree",b:16},
{a:"Neutral",b:7},
{a:"Somewhat disagree",b:2},
{a:"Strongly disagree",b:5}

];



var dummydata_guns_background = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];



////
///////////////



///////
/////
//////
//////// immigration
/////





var data_citizenship = [
{a:"Strongly agree",b:72},
{a:"Somewhat agree",b:21},
{a:"Neutral",b:4},
{a:"Somewhat disagree",b:2},
{a:"Strongly disagree",b:1}

];



var dummydata_citizenship = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];







var data_deport = [
{a:"Strongly agree",b:72},
{a:"Somewhat agree",b:21},
{a:"Neutral",b:4},
{a:"Somewhat disagree",b:2},
{a:"Strongly disagree",b:1}

];



var dummydata_deport = [
{a:"Strongly agree",b:23},
{a:"Somewhat agree",b:21},
{a:"Neutral",b:12},
{a:"Somewhat disagree",b:24},
{a:"Strongly disagree",b:20}
];




 
var data_deport_impacted = [
{a:"Yes",b:4},
{a:"No",b:96} 
];



var dummydata_deport_impacted = [
{a:"Yes",b:76},
{a:"No",b:8} 
];



var data_deport_know = [
{a:"Yes",b:11},
{a:"No",b:89} 
];



var dummydata_deport_know = [
{a:"Yes",b:76},
{a:"No",b:8} 
];




////
////
////
///

///////
////
/// women
////////
////////////////
/// womens data
////////////////

 

var data_wom_iava = [
{a:"Extremely important",b:48},
{a:"Very important",b:30},
{a:"Moderately important",b:15},
{a:"Slightly important",b:4},
{a:"Not at all important",b:3}
];




var dummydata_wom_iava = [
{a:"Extremely important",b:9},
{a:"Very important",b:6},
{a:"Moderately important",b:22},
{a:"Slightly important",b:29},
{a:"Not at all important",b:34}
];






var data_wom_motto = [
{a:"Strongly agree the motto should be changed",b:28},
{a:"Somewhat agree the motto should be changed",b:18},
{a:"Neither agree nor disagree the motto should be changed",b:24},
{a:"Somewhat disagree the motto should be changed",b:9},
{a:"Strongly disagree the motto should be changed",b:21}

];



var dummydata_wom_motto = [
{a:"Strongly agree the motto should be changed",b:72},
{a:"Somewhat agree the motto should be changed",b:21},
{a:"Neither agree nor disagree the motto should be changed",b:4},
{a:"Somewhat disagree the motto should be changed",b:2},
{a:"Strongly disagree the motto should be changed",b:1}
];









var data_wom_positions = [
{a:"Strongly agree",b:34},
{a:"Somewhat agree",b:25},
{a:"Neutral",b:13},
{a:"Somewhat disagree",b:13},
{a:"Strongly disagree",b:15}

];



var dummydata_wom_positions = [
{a:"Strongly agree",b:23},
{a:"Somewhat agree",b:21},
{a:"Neutral",b:12},
{a:"Somewhat disagree",b:24},
{a:"Strongly disagree",b:20}
];







var data_wom_combat = [
{a:"Yes",b:40},
{a:"Maybe",b:31}, 
{a:"No",b:29}
];




var dummydata_wom_combat = [
{a:"Yes",b:75},
{a:"Maybe",b:10}, 
{a:"No",b:15}
];









var data_wom_recognition = [
{a:"Yes",b:29},
{a:"Maybe",b:36}, 
{a:"No",b:35}
];




var dummydata_wom_recognition = [
{a:"Yes",b:75},
{a:"Maybe",b:10}, 
{a:"No",b:15}
];


 



///
///////
////




var dummydata_wom_b = [
{a:"Agree",b:6},
{a:"Disagree",b:9},
{a:"No Opinion",b:22}
];

var data_wom_b = [
{a:"Agree",b:75},
{a:"Disagree",b:15},
{a:"No Opinion",b:10} 
];


 

////
//////
/////////






//// 
////////
/////////////////////////
/// making progress in combating military/veteran suicide
//////////////////////////////



var data_mental_prog  = [
{a:"Yes",b:23},
{a:"No",b:77}
];


var dummydata_mental_prog = [
{a:"Yes",b:80},
{a:"No",b:20}

];




/*

var dummydata_mental_prog = [
{a:"Yes",b:80},
{a:"No",b:20}

];

var data_mental_prog  = [
{a:"Yes",b:23},
{a:"No",b:77}
];

*/



///////
////////
//// 





//// 
////////
/////////////////////////
///  getting the care they need for mental health injuries
//////////////////////////////
var data_mental_care  = [
{a:"Yes",b:16},
{a:"No",b:84}
];

var dummydata_mental_care = [
{a:"Yes",b:80},
{a:"No",b:20}

];

///////
////////
//// 




//// 
////////
/////////////////////////
/// have a service mental health injury
//////////////////////////////

var data_mental_injury  = [
{a:"Yes",b:55},
{a:"No",b:45}
];


var dummydata_mental_injury = [
{a:"Yes",b:80},
{a:"No",b:20}

];
///////
////////
//// 


////////
//////////////////////////////
////////seeking help
//////////////////////////////

var data_mental_help = [
{a:"Yes",b:75},
{a:"No",b:25}
];

var dummydata_mental_help= [
{a:"Yes",b:80},
{a:"No",b:20}
];
///////////////
////////////////////
////
////  
var numero_mental_a = [16];

////
////  
var numero_mental_b = [53];
////
////  
var numero_mental_c = [80];


////////
/////////////////////


////////
//////////////////////////////
////////seeking help where
//////////////////////////////

var data_mental_help_where = [
{a:"Vet Center counselor",b:22},
{a:"VA Mental Health Professional",b:71},
{a:"Religious/spiritual leaders",b:15},
{a:"Peer support group",b:17},
{a:"Veterans Crisis Line",b:7},
{a:"Civilian (non-VA) mental health professional",b:27},
{a:"Civilian DOD counselor",b:3},
{a:"Uniformed DOD counselor",b:2},
{a:"Other",b:11}
];

var dummydata_mental_help_where= [
{a:"Vet Center counselor",b:5},
{a:"VA Mental Health Professional",b:5},
{a:"Religious/spiritual leaders",b:5},
{a:"Peer support group",b:5},
{a:"Veterans Crisis Line",b:5},
{a:"Civilian (non-VA) mental health professional",b:5},
{a:"Civilian DOD counselor",b:25},
{a:"Uniformed DOD counselor",b:15},
{a:"Other",b:5}
];

///////////////
////////////////////
////






////////
//////////////////////////////
////////anyone suggested help
//////////////////////////////

var data_mental_help_suggest  = [
{a:"Yes",b:47},
{a:"No",b:53}
];

var dummydata_mental_help_suggest = [
{a:"Yes",b:80},
{a:"No",b:20}
];
///////////////
////////////////////
////




////////
//////////////////////////////
////////sought help because suggested 
//////////////////////////////

var data_mental_help_sought  = [
{a:"Yes",b:71},
{a:"No",b:29}
];

var dummydata_mental_help_sought = [
{a:"Yes",b:80},
{a:"No",b:20}
];
///////////////
////////////////////
////


////////////////////
////// suicide
///

////
////  
var numero_suicide_progress = [77];

var numero_suicide_know_attempt = [65];

var numero_suicide_know_died = [59];


////////
//////////////////////////////
////////considered suicide before 
//////////////////////////////

var data_mental_considered_before  = [
{a:"Yes",b:9},
{a:"No",b:91}
];

var dummydata_mental_considered_before = [
{a:"Yes",b:80},
{a:"No",b:20}
];
///////////////
////////////////////
////



////////
//////////////////////////////
////////considered suicide since joining 
//////////////////////////////

var data_mental_considered  = [
{a:"Yes",b:43},
{a:"No",b:57}
];

var dummydata_mental_considered = [
{a:"Yes",b:80},
{a:"No",b:20}
];
///////////////
////////////////////
////





////////
//////////////////////////////
////////aware of hotline
//////////////////////////////

var data_mental_hotline  = [
{a:"Yes",b:95},
{a:"No",b:4},
{a:"Unsure",b:1}
];

var dummydata_mental_hotline = [
{a:"Yes",b:40},
{a:"No",b:10},
{a:"Unsure",b:50}
];
///////////////
////////////////////
////





////////
//////////////////////////////
////////contacted hotline 
//////////////////////////////

var data_mental_hotline_contact  = [
{a:"Yes",b:26},
{a:"No",b:74}
];

var dummydata_mental_hotline_contact = [
{a:"Yes",b:40},
{a:"No",b:10}
];
///////////////
////////////////////
////








////////
//////////////////////////////
////////personally know attempted suicide 
//////////////////////////////

var data_mental_know_attempted = [
{a:"Yes",b:65},
{a:"No",b:35}
];

var dummydata_mental_know_attempted = [
{a:"Yes",b:80},
{a:"No",b:20}
];

///////////////
////////////////////
////





////////
//////////////////////////////
////////personally know  suicide 
//////////////////////////////

var data_mental_know  = [
{a:"Yes",b:59},
{a:"No",b:41}
];

var dummydata_mental_know = [
{a:"Yes",b:80},
{a:"No",b:20}
];
///////////////
////////////////////
////


////////////////
/////////
///////////////



///
////////////////////////
////////
//////// When asked whether they had ever considered taking their own lives
//
////////// 2017
////
var dummydata_suicide_a = [
{a:"Prior to joining the military",b:5},
{a:"Since joining the military",b:37}
];

var data_suicide_a = [
{a:"Prior to joining the military",b:5},
{a:"Since joining the military",b:37}
];
//
////////// 2016
////


var dummydata_suicide_aa = [
{a:"2017 Prior to joining",b:5},
{a:"2017 Since joining",b:37},
 {a:"2015 Prior to joining",b:6},
{a:"2015 Since joining",b:40},
 {a:"2014 Prior to joining",b:6},
{a:"2014 Since joining",b:31} 
];

var data_suicide_aa = [
{a:"2017 Prior to joining",b:5},
{a:"2017 Since joining",b:37},
 {a:"2015 Prior to joining",b:6},
{a:"2015 Since joining",b:40},
 {a:"2014 Prior to joining",b:6},
{a:"2014 Since joining",b:31} 
];


//
//
////////// When asked whether they had ever considered taking their own lives...
////

//
////////// Know a post-9/11 veteran who has attempted suicide
////
//
 ////

var dummydata_suicide_d = [
{a:"2017-2016",b:5},
{a:"2015",b:5},
{a:"2014",b:5}
];

var data_suicide_d = [
{a:"2017-2016",b:65},
{a:"2015",b:54},
{a:"2014",b:47}
];
////
//

//
////////// Know a post-9/11 veteran that has died by suicide
////
//
 ////

var dummydata_suicide_e = [
{a:"2017-2016",b:5},
{a:"2015",b:5},
{a:"2014",b:5}
];

var data_suicide_e = [
{a:"2017-2016",b:58},
{a:"2015",b:45},
{a:"2014",b:40}
];
////
//
//////////  

/////////
///////
////////
///////////
//////
//////////
/////////////////

////////
/////
/////// new sexual assault 2018
//////////


///
//// dod addressing sexual assault
////  
var numero_mst = [61];


var data_mst = [
{a:"Yes",b:39},
{a:"No",b:61} 
];



var dummydata_mst = [
{a:"Yes",b:76},
{a:"No",b:8} 
];

 
//////////////////
/////////////////////
// more authority figure

var data_wom_prosecutor = [
{a:"Less of an Authority Figure",b:15},
{a:"Would Not Impact View",b:77},
{a:"More of an Authority Figure",b:8} 
];


var dummydata_wom_prosecutor = [
{a:"Less of an Authority Figure",b:9},
{a:"Would Not Impact View",b:6},
{a:"More of an Authority Figure",b:22} 
];



////
///
///
//// survivor of sexual assault

var data_wom_survivor = [
{a:"Yes",b:8},
{a:"No",b:92} 
];

var dummydata_wom_survivor = [
{a:"Yes",b:76},
{a:"No",b:8} 
];


////
///
///
//// survivor of sexual assault report crime

var data_wom_report = [
{a:"Yes",b:29},
{a:"No",b:71} 
];

var dummydata_wom_report = [
{a:"Yes",b:76},
{a:"No",b:8} 
];




////
///
///
//// survivor of sexual assault report crime

var data_wom_impact = [
{a:"I would have been more likely to report",b:51},
{a:"I would have been less likely to report",b:3}, 
{a:"It would not have made a difference in my decision",b:46} 
];

var dummydata_wom_impact = [
{a:"I would have been more likely to report",b:29},
{a:"I would have been less likely to report",b:71}, 
{a:"It would not have made a difference in my decision",b:71} 
];


////
///
///
//// survivor of sexual assault retaliation

var data_wom_retaliation = [
{a:"Yes",b:66},
{a:"No",b:34} 
];

var dummydata_wom_retaliation = [
{a:"Yes",b:76},
{a:"No",b:8} 
];




////
///////////////
///
//// survivor of sexual assault 
///// Why did you not report the crime

 

var data_wom_not_report = [
{a:"Concerned that my peers would treat me differently",b:53},
{a:"Worried that people would think I was weak",b:43},
{a:"Doubted that my Commander would believe me",b:41},
{a:"Worried I was less valued than person who committed assault",b:28},
{a:"Concerned about impact on my career",b:60},
{a:"Did not think anything would be done",b:67},
{a:"Worried family/friends would treat me differently",b:28},
{a:"Fear of retaliation by my peers or Commander",b:51},
{a:"Did not want to be involved in an investigation",b:50},
{a:"Other",b:24} 
];

var dummydata_wom_not_report = [
{a:"Concerned that my peers would treat me differently",b:16},
{a:"Worried that people would think I was weak",b:16},
{a:"Doubted that my Commander would believe me",b:6},
{a:"Worried I was less valued than person who committed assault",b:16},
{a:"Concerned about impact on my career",b:11},
{a:"Did not think anything would be done",b:1},
{a:"Worried family/friends would treat me differently",b:11},
{a:"Fear of retaliation by my peers or Commander",b:2},
{a:"Did not want to be involved in an investigation",b:2},
{a:"Other",b:3} 
];


/////////////////
////////////




/////////////////
////////////
////// one number charts
///// sexual assault
var dummydata_wom_y = [
{a:"DoD Effectively Addressing",b:19}, 
{a:"Not Effectively Addressing",b:81},
{a:"No Opinion",b:1} 
];

var data_wom_y = [
{a:"DoD Effectively Addressing",b:19}, 
{a:"Not Effectively Addressing",b:68},
{a:"No Opinion",b:13} 

];



var dummydata_wom_z = [
{a:"DoD Effectively Addressing",b:33}, 
{a:"Not Effectively Addressing",b:67},
{a:"No Opinion",b:1} 

];

var data_wom_z = [
{a:"DoD Effectively Addressing",b:33}, 
{a:"Not Effectively Addressing",b:42},
{a:"No Opinion",b:25} 

];







var dummydata_wom_aaa = [
{a:"Women",b:45},
{a:"Men",b:55}
];

var data_wom_aaa = [
{a:"Women",b:35},
{a:"Men",b:15}
];







var dummydata_wom_aa = [
{a:"Survivor",b:45},
{a:"N/A",b:55}
];

var data_wom_aa = [
{a:"Survivor",b:35},
{a:"N/A",b:65}
];




var dummydata_wom_bb = [
{a:"Survivor",b:1},
{a:"N/A",b:99}
];

var data_wom_bb = [
{a:"Survivor",b:1},
{a:"N/A",b:99}
];



var dummydata_wom_cc= [
{a:"Reported the Crime",b:60},
{a:"Did Not Report",b:40}
];

var data_wom_cc = [
{a:"Reported the Crime",b:40},
{a:"Did Not Report",b:60}
];


var dummydata_wom_dd= [
{a:"Reported the Crime",b:78},
{a:"Did Not Report",b:12}
];

var data_wom_dd = [
{a:"Reported the Crime",b:28},
{a:"Did Not Report",b:72}
];



var dummydata_wom_ee = [
{a:"Experienced Retaliation",b:21},
{a:"Did not experience retaliation",b:79},
{a:"Prefer not to answer",b:79}
];

var data_wom_ee = [
{a:"Experienced Retaliation",b:71},
{a:"Did not experience retaliation",b:22},
{a:"Prefer not to answer",b:7}
];


var dummydata_wom_ff = [
{a:"Experienced Retaliation",b:14},
{a:"Did not experience retaliation",b:76},
{a:"Prefer not to answer",b:79}
];

var data_wom_ff = [
{a:"Experienced Retaliation",b:64},
{a:"Did not experience retaliation",b:27},
{a:"Prefer not to answer",b:9}
];

///////////
////////////


 

var dummydata_wom_hh = [
{a:"Less of an Authority Figure",b:18},
{a:"Would Not Impact View",b:77},
{a:"More of an Authority Figure",b:5} 
];

var data_wom_hh = [
{a:"Less of an Authority Figure",b:18},
{a:"Would Not Impact View",b:77},
{a:"More of an Authority Figure",b:5} 
];

 ///////////
 /////
 ////bottom 2
 /////////////

var dummydata_wom_ii = [
{a:"More likely to report",b:56},
{a:"Less likely to report",b:44},
{a:"No impact",b:44}
];

var data_wom_ii = [
{a:"More likely to report",b:46},
{a:"Less likely to report",b:1},
{a:"No impact",b:53}
];

 


var dummydata_wom_jj = [
{a:"More likely to report",b:65},
{a:"Less likely to report",b:35},
{a:"No impact",b:44}
];

var data_wom_jj = [
{a:"More likely to report",b:35},
{a:"Less likely to report",b:2},
{a:"No impact",b:63}
];



////////
///////////
////



//////////////


////////
///////////
////

/////////
/////////
////////////


var dummydata_wom_kk = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_kk = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

 



//////
/////
////////




var data_u = [
{a:"Strongly Support",b:5},
{a:"Support",b:12},
{a:"Neutral",b:34},
{a:"Oppose",b:21},
{a:"Strongly Oppose",b:28}

];



var dummydata_u = [
{a:"Strongly Support",b:5},
{a:"Support",b:12},
{a:"Neutral",b:34},
{a:"Oppose",b:21},
{a:"Strongly Oppose",b:28}
];






var data_v = [
{a:"Strongly Support",b:18},
{a:"Support",b:39},
{a:"Neutral",b:31},
{a:"Oppose",b:6},
{a:"Strongly Oppose",b:6}

];



var dummydata_v = [
{a:"Strongly Support",b:5},
{a:"Support",b:12},
{a:"Neutral",b:34},
{a:"Oppose",b:21},
{a:"Strongly Oppose",b:28}
];






var data_w = [
{a:"Strongly Support",b:46},
{a:"Support",b:38},
{a:"Neutral",b:9},
{a:"Oppose",b:4},
{a:"Strongly Oppose",b:3}

];



var dummydata_w = [
{a:"Strongly Support",b:5},
{a:"Support",b:12},
{a:"Neutral",b:34},
{a:"Oppose",b:21},
{a:"Strongly Oppose",b:28}
];






var data_x = [
{a:"Strongly Support",b:23},
{a:"Support",b:27},
{a:"Neutral",b:24},
{a:"Oppose",b:13},
{a:"Strongly Oppose",b:13}

];



var dummydata_x = [
{a:"Strongly Support",b:5},
{a:"Support",b:12},
{a:"Neutral",b:34},
{a:"Oppose",b:21},
{a:"Strongly Oppose",b:28}
];






var data_y = [
{a:"Strongly Support",b:41},
{a:"Support",b:27},
{a:"Neutral",b:18},
{a:"Oppose",b:8},
{a:"Strongly Oppose",b:6}

];



var dummydata_y = [
{a:"Strongly Support",b:25},
{a:"Support",b:32},
{a:"Neutral",b:14},
{a:"Oppose",b:1},
{a:"Strongly Oppose",b:28}
];

//////////
////////////////








////
///////
////








/////
///// ******
//// 2017 data
//////

var data_s = [
{a:"Strongly Support",b:23},
{a:"Support",b:21},
{a:"Neutral",b:26},
{a:"Oppose",b:12},
{a:"Strongly Oppose",b:18}

];



var dummydata_s = [
{a:"Strongly Support",b:2},
{a:"Support",b:1},
{a:"Neutral",b:2},
{a:"Oppose",b:1},
{a:"Strongly Oppose",b:88}

];








var data_t = [
{a:"Strongly Support",b:34},
{a:"Support",b:29},
{a:"Neutral",b:22},
{a:"Oppose",b:6},
{a:"Strongly Oppose",b:9}

];




var dummydata_t = [
{a:"Strongly Support",b:9},
{a:"Support",b:6},
{a:"Neutral",b:22},
{a:"Oppose",b:29},
{a:"Strongly Oppose",b:34}
];


///
/////
///





////
///////////////
///////
///
/////////
///// milserve

/*

var data_milserve_a = [
{a:"Yes",b:76},
{a:"No",b:8},
{a:"Unsure",b:16}
];



var dummydata_milserve_a = [
{a:"Yes",b:6},
{a:"No",b:78},
{a:"Unsure",b:18}
];


////
/////

var data_milserve_b = [
{a:"Worth it",b:22},
{a:"Somewhat worth it",b:25},
{a:"Neither worth it nor not worth it",b:10},
{a:"Somewhat not worth it",b:11},
{a:"Not worth it",b:32}
];



var dummydata_milserve_b = [
{a:"Worth it",b:82},
{a:"Somewhat worth it",b:7},
{a:"Neither worth it nor not worth it",b:11},
{a:"Somewhat not worth it",b:11},
{a:"Not worth it",b:11}
];


///
////////

var data_milserve_c = [
{a:"Worth it",b:30},
{a:"Somewhat worth it",b:32},
{a:"Neither worth it nor not worth it",b:10},
{a:"Somewhat not worth it",b:11},
{a:"Not worth it",b:17}
];



var dummydata_milserve_c = [
{a:"Worth it",b:22},
{a:"Somewhat worth it",b:25},
{a:"Neither worth it nor not worth it",b:10},
{a:"Somewhat not worth it",b:11},
{a:"Not worth it",b:32}
];

*/

//////
//////


var data_milserve_d = [
{a:"Strongly Support",b:5},
{a:"Support",b:8},
{a:"Neutral",b:25},
{a:"Oppose",b:30},
{a:"Strongly Oppose",b:32}

];



var dummydata_milserve_d = [
{a:"Strongly Support",b:25},
{a:"Support",b:32},
{a:"Neutral",b:14},
{a:"Oppose",b:1},
{a:"Strongly Oppose",b:28}
];



var data_milserve_e = [
{a:"Strongly Support",b:35},
{a:"Support",b:35},
{a:"Neutral",b:16},
{a:"Oppose",b:7},
{a:"Strongly Oppose",b:7}

];



var dummydata_milserve_e = [
{a:"Strongly Support",b:25},
{a:"Support",b:35},
{a:"Neutral",b:16},
{a:"Oppose",b:7},
{a:"Strongly Oppose",b:7}
];

//////////
////////////////
///////////////////////
///////////////////
////// equality
 /////////


var data_equality_a = [
{a:"Yes",b:48},
{a:"No",b:30},
{a:"No Opinion",b:22}
];

var dummydata_equality_a = [
{a:"Yes",b:41},
{a:"No",b:27},
{a:"No Opinion",b:18}
];




var data_equality_b = [
{a:"Yes",b:28},
{a:"No",b:50},
{a:"No Opinion",b:22}
];

var dummydata_equality_b = [
{a:"Yes",b:41},
{a:"No",b:27},
{a:"No Opinion",b:18}
];




var data_equality_c = [
{a:"Positive",b:16},
{a:"Neutral",b:59},
{a:"Negative",b:25}
];

var dummydata_equality_c = [
{a:"Positive",b:22},
{a:"Neutral",b:50},
{a:"Negative",b:28}
];




var data_equality_d = [
{a:"Positive",b:6},
{a:"Neutral",b:28},
{a:"Negative",b:45},
{a:"Unsure",b:21}
];

var dummydata_equality_d = [
{a:"Positive",b:22},
{a:"Neutral",b:50},
{a:"Negative",b:20},
{a:"Unsure",b:5}
];



 /////////////
 //////////////

var numeroA = [12, 1200000, 7300];

var numeroB = [41];

var numeroC = [96];

var numeroD = [88];

var numeroE = [59];

var numeroGuns = [58];


var numeroSupport = [70];


var numeroUnderstand = [16];


var numeroHire = [39];

/////////
//////////
///// perceptions

var dummydata_p_obama = [

{a:"Strongly Agree",b:5},
{a:"Agree",b:12},
{a:"No Opinion",b:34},
{a:"Disagree",b:21},
{a:"Strongly Disagree",b:28}
];

var data_p_obama = [
{a:"Strongly Agree",b:10},
{a:"Agree",b:23},
{a:"No Opinion",b:15},
{a:"Disagree",b:23},
{a:"Strongly Disagree",b:29}
];



var dummydata_p_trump = [

{a:"Strongly Agree",b:5},
{a:"Agree",b:12},
{a:"No Opinion",b:34},
{a:"Disagree",b:21},
{a:"Strongly Disagree",b:28}
];

var data_p_trump = [

{a:"Strongly Agree",b:22},
{a:"Agree",b:31},
{a:"No Opinion",b:19},
{a:"Disagree",b:13},
{a:"Strongly Disagree",b:15}
];




var dummydata_p_congress = [

{a:"Strongly Agree",b:5},
{a:"Agree",b:12},
{a:"No Opinion",b:34},
{a:"Disagree",b:21},
{a:"Strongly Disagree",b:28}
];

var data_p_congress = [

{a:"Strongly Agree",b:1},
{a:"Agree",b:15},
{a:"No Opinion",b:15},
{a:"Disagree",b:45},
{a:"Strongly Disagree",b:24}
];



///////
//////
 

////////////////
/// womens data
////////////////

 



var dummydata_wom_a = [
{a:"Very Important",b:9},
{a:"Important",b:6},
{a:"Moderate Importance",b:22},
{a:"Little Importance",b:29},
{a:"Not Important",b:34}
];

var data_wom_a = [
{a:"Very Important",b:41},
{a:"Important",b:37},
{a:"Moderate Importance",b:16},
{a:"Little Importance",b:4},
{a:"Not Important",b:2}
];



///
///




var dummydata_wom_b = [
{a:"Agree",b:6},
{a:"Disagree",b:9},
{a:"No Opinion",b:22}
];

var data_wom_b = [
{a:"Agree",b:75},
{a:"Disagree",b:15},
{a:"No Opinion",b:10} 
];


var data_wom_c = [
{a:"Agree",b:50},
{a:"Disagree",b:39},
{a:"No Opinion",b:11} 
];

var dummydata_wom_c = [
{a:"Agree",b:30},
{a:"Disagree",b:62},
{a:"No Opinion",b:8} 
];




var dummydata_wom_d = [
{a:"Agree",b:6},
{a:"Disagree",b:9},
{a:"No Opinion",b:22} 
];

var data_wom_d = [
{a:"Agree",b:62},
{a:"Disagree",b:30},
{a:"No Opinion",b:8} 
];




var dummydata_wom_e = [
{a:"Agree",b:6},
{a:"Disagree",b:9},
{a:"No Opinion",b:22} 
];

var data_wom_e = [
{a:"Agree",b:33},
{a:"Disagree",b:56},
{a:"No Opinion",b:11} 
];




var dummydata_wom_f = [
{a:"Agree",b:6},
{a:"Disagree",b:9},
{a:"No Opinion",b:22} 
];

var data_wom_f = [
{a:"Agree",b:53},
{a:"Disagree",b:33},
{a:"No Opinion",b:14} 
];



///
/// Lifting restrictions on women in combat will improve the public recognition of their contributions
var dummydata_wom_g = [
{a:"Agree",b:6},
{a:"Disagree",b:9},
{a:"No Opinion",b:22} 
];

var data_wom_g = [
{a:"Agree",b:39},
{a:"Disagree",b:46},
{a:"No Opinion",b:15} 
];



////
////


////////
////The civilian public treats women veterans with respect

var dummydata_wom_g_ = [
{a:"Strongly Agree",b:34},
{a:"Agree",b:29},
{a:"Neutral",b:22},
{a:"Disagree",b:6},
{a:"Strongly Disagree",b:9}
];

var data_wom_g_ = [
{a:"Strongly Agree",b:3},
{a:"Agree",b:24},
{a:"Neutral",b:32},
{a:"Disagree",b:31},
{a:"Strongly Disagree",b:10}
];

/////////////////////
//////// Fellow service members treat women service members with respect


var dummydata_wom_h_ = [
{a:"Strongly Agree",b:34},
{a:"Agree",b:29},
{a:"Neutral",b:22},
{a:"Disagree",b:6},
{a:"Strongly Disagree",b:9}
];

var data_wom_h_ = [
{a:"Strongly Agree",b:25},
{a:"Agree",b:49},
{a:"Neutral",b:12},
{a:"Disagree",b:10},
{a:"Strongly Disagree",b:4}
];


//////////
//////////////
////// Male military service members treat women service members with respect

var dummydata_wom_i_ = [
{a:"Strongly Agree",b:34},
{a:"Agree",b:49},
{a:"Neutral",b:2},
{a:"Disagree",b:6},
{a:"Strongly Disagree",b:9}
];

var data_wom_i_ = [
{a:"Strongly Agree",b:7},
{a:"Agree",b:36},
{a:"Neutral",b:27},
{a:"Disagree",b:23},
{a:"Strongly Disagree",b:7}
];



//////////
///////////////
//// VA employees treat women veterans with respect

var dummydata_wom_j_ = [
{a:"Strongly Agree",b:34},
{a:"Agree",b:29},
{a:"Neutral",b:22},
{a:"Disagree",b:6},
{a:"Strongly Disagree",b:9}
];

var data_wom_j_ = [
{a:"Strongly Agree",b:7},
{a:"Agree",b:37},
{a:"Neutral",b:35},
{a:"Disagree",b:16},
{a:"Strongly Disagree",b:5}
];



/////////
///////////
/////When asked whether the VA motto should be changed to be more inclusive of all who have served

var dummydata_wom_k_ = [
{a:"Strongly Agree",b:34},
{a:"Agree",b:29},
{a:"Neutral",b:22},
{a:"Disagree",b:6},
{a:"Strongly Disagree",b:9}
];

var data_wom_k_ = [
{a:"Strongly Agree",b:36},
{a:"Agree",b:23},
{a:"Neutral",b:31},
{a:"Disagree",b:5},
{a:"Strongly Disagree",b:5}
];





var dummydata_wom_k__ = [
{a:"Strongly Agree",b:34},
{a:"Agree",b:29},
{a:"Neutral",b:22},
{a:"Disagree",b:6},
{a:"Strongly Disagree",b:9}
];

var data_wom_k__ = [
{a:"Strongly Agree",b:14},
{a:"Agree",b:26},
{a:"Neutral",b:40},
{a:"Disagree",b:10},
{a:"Strongly Disagree",b:10}
];



///////
///////
////
 

var dummydata_wom_l_ = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_l_ = [
{a:"Strongly Disagree",b:5},
{a:"Disagree",b:5},
{a:"Neutral",b:31},
{a:"Agree",b:23},
{a:"Strongly Agree",b:36}
];



var dummydata_wom_m_ = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_m_ = [
{a:"Strongly Disagree",b:5},
{a:"Disagree",b:5},
{a:"Neutral",b:31},
{a:"Agree",b:23},
{a:"Strongly Agree",b:36}
];



var dummydata_wom_n_ = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_n_ = [
{a:"Strongly Disagree",b:5},
{a:"Disagree",b:5},
{a:"Neutral",b:31},
{a:"Agree",b:23},
{a:"Strongly Agree",b:36}
];



var dummydata_wom_o_ = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_o_ = [
{a:"Strongly Disagree",b:5},
{a:"Disagree",b:5},
{a:"Neutral",b:31},
{a:"Agree",b:23},
{a:"Strongly Agree",b:36}
];



var dummydata_wom_p_ = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_p_ = [
{a:"Strongly Disagree",b:5},
{a:"Disagree",b:5},
{a:"Neutral",b:31},
{a:"Agree",b:23},
{a:"Strongly Agree",b:36}
];



var dummydata_wom_q_ = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_q_ = [
{a:"Strongly Disagree",b:5},
{a:"Disagree",b:5},
{a:"Neutral",b:31},
{a:"Agree",b:23},
{a:"Strongly Agree",b:36}
];



var dummydata_wom_r_ = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_r_ = [
{a:"Strongly Disagree",b:5},
{a:"Disagree",b:5},
{a:"Neutral",b:31},
{a:"Agree",b:23},
{a:"Strongly Agree",b:36}
];



///
//////













var dummydata_wom_h = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_h = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];


/////
///////

var numero_wom_a = [97];

var numero_wom_b = [90];


///
//////




var dummydata_wom_i = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_i = [
{a:"Strongly Agree",b:49},
{a:"Agree",b:25},
{a:"Neutral",b:12},
{a:"Disagree",b:10},
{a:"Strongly Disagree",b:4}
];



var dummydata_wom_j = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_j = [
{a:"Strongly Disagree",b:7},
{a:"Disagree",b:23},
{a:"Neutral",b:27},
{a:"Agree",b:7},
{a:"Strongly Agree",b:36}
];



var dummydata_wom_k = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_k = [
{a:"Strongly Disagree",b:5},
{a:"Disagree",b:16},
{a:"Neutral",b:35},
{a:"Agree",b:7},
{a:"Strongly Agree",b:37}
];



var dummydata_wom_l = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_l = [
{a:"Strongly Disagree",b:5},
{a:"Disagree",b:5},
{a:"Neutral",b:31},
{a:"Agree",b:23},
{a:"Strongly Agree",b:36}
];



var dummydata_wom_m = [
{a:"Strongly Agree",b:34},
{a:"Agree",b:29},
{a:"Neutral",b:22},
{a:"Disagree",b:6},
{a:"Strongly Disagree",b:9}
];

var data_wom_m = [
{a:"Strongly Agree",b:14},
{a:"Agree",b:26},
{a:"Neutral",b:40},
{a:"Disagree",b:10},
{a:"Strongly Disagree",b:10}
];

////////
///////////
////


///
//////


///////// When asked whether VA adequately provides
//// Women Veterans Program Managers/Coordinators
var dummydata_wom_n = [
{a:"Yes",b:70},
{a:"No",b:30}
];

var data_wom_n = [
{a:"Yes",b:30},
{a:"No",b:70}
];



var dummydata_wom_o = [
{a:"Yes",b:73},
{a:"No",b:27}
];

var data_wom_o = [
{a:"Yes",b:73},
{a:"No",b:27}
];



var dummydata_wom_p= [
{a:"Yes",b:43},
{a:"No",b:57}
];

var data_wom_p = [
{a:"Yes",b:52},
{a:"No",b:48}
];



var dummydata_wom_q = [
{a:"Yes",b:40},
{a:"No",b:60}
];

var data_wom_q = [
{a:"Yes",b:60},
{a:"No",b:40}
];



var dummydata_wom_r = [
{a:"Yes",b:84},
{a:"No",b:16}
];

var data_wom_r = [
{a:"Yes",b:14},
{a:"No",b:86}
];

////////
///////////
////


/////
///////

var numero_wom_c = [83];

var numero_wom_d = [33];

var numero_wom_e = [57];

var numero_wom_f = [8];

var numero_wom_g = [50];

 
///
//////

 

///
//////
 




var dummydata_wom_s = [
{a:"Very Good",b:3},
{a:"Good",b:19},
{a:"Fair",b:39},
{a:"Poor",b:26},
{a:"Very Poor",b:13}
];

var data_wom_s = [
{a:"Very Good",b:3},
{a:"Good",b:19},
{a:"Fair",b:39},
{a:"Poor",b:26},
{a:"Very Poor",b:13}
];



var dummydata_wom_t= [
{a:"Very Good",b:15},
{a:"Good",b:33},
{a:"Fair",b:27},
{a:"Very Poor",b:9},
{a:"Poor",b:16}
];

var data_wom_t = [
{a:"Very Good",b:15},
{a:"Good",b:33},
{a:"Fair",b:27},
{a:"Poor",b:16},
{a:"Very Poor",b:9}
];



var dummydata_wom_u = [
{a:"Very Good",b:22},
{a:"Good",b:40},
{a:"Fair",b:21},
{a:"Poor",b:10},
{a:"Very Poor",b:7}
];

var data_wom_u = [
{a:"Very Good",b:22},
{a:"Good",b:40},
{a:"Fair",b:21},
{a:"Poor",b:10},
{a:"Very Poor",b:7}
];



var dummydata_wom_v = [
{a:"Very Good",b:15},
{a:"Good",b:39},
{a:"Fair",b:29},
{a:"Poor",b:11},
{a:"Very Poor",b:6}

];

var data_wom_v = [
{a:"Very Good",b:15},
{a:"Good",b:39},
{a:"Fair",b:29},
{a:"Poor",b:11},
{a:"Very Poor",b:6}
];

//////////
////////////// 


var dummydata_wom_w = [
{a:"Strongly Agree",b:34},
{a:"Agree",b:29},
{a:"Neutral",b:22},
{a:"Disagree",b:6},
{a:"Strongly Disagree",b:9}
];

var data_wom_w = [
{a:"Strongly Agree",b:34},
{a:"Agree",b:29},
{a:"Neutral",b:22},
{a:"Disagree",b:6},
{a:"Strongly Disagree",b:9},
];



var dummydata_wom_x= [
{a:"Strongly Agree",b:34},
{a:"Agree",b:29},
{a:"Neutral",b:22},
{a:"Disagree",b:6},
{a:"Strongly Disagree",b:9}
];

var data_wom_x = [
{a:"Strongly Agree",b:34},
{a:"Agree",b:29},
{a:"Neutral",b:22},
{a:"Disagree",b:6},
{a:"Strongly Disagree",b:9}
];


/////////////////
////////////
////// one number charts
///// sexual assault
var dummydata_wom_y = [
{a:"DoD Effectively Addressing",b:19}, 
{a:"Not Effectively Addressing",b:81},
{a:"No Opinion",b:1} 
];

var data_wom_y = [
{a:"DoD Effectively Addressing",b:19}, 
{a:"Not Effectively Addressing",b:68},
{a:"No Opinion",b:13} 

];



var dummydata_wom_z = [
{a:"DoD Effectively Addressing",b:33}, 
{a:"Not Effectively Addressing",b:67},
{a:"No Opinion",b:1} 

];

var data_wom_z = [
{a:"DoD Effectively Addressing",b:33}, 
{a:"Not Effectively Addressing",b:42},
{a:"No Opinion",b:25} 

];







var dummydata_wom_aaa = [
{a:"Women",b:45},
{a:"Men",b:55}
];

var data_wom_aaa = [
{a:"Women",b:35},
{a:"Men",b:15}
];







var dummydata_wom_aa = [
{a:"Survivor",b:45},
{a:"N/A",b:55}
];

var data_wom_aa = [
{a:"Survivor",b:35},
{a:"N/A",b:65}
];




var dummydata_wom_bb = [
{a:"Survivor",b:1},
{a:"N/A",b:99}
];

var data_wom_bb = [
{a:"Survivor",b:1},
{a:"N/A",b:99}
];



var dummydata_wom_cc= [
{a:"Reported the Crime",b:60},
{a:"Did Not Report",b:40}
];

var data_wom_cc = [
{a:"Reported the Crime",b:40},
{a:"Did Not Report",b:60}
];


var dummydata_wom_dd= [
{a:"Reported the Crime",b:78},
{a:"Did Not Report",b:12}
];

var data_wom_dd = [
{a:"Reported the Crime",b:28},
{a:"Did Not Report",b:72}
];



var dummydata_wom_ee = [
{a:"Experienced Retaliation",b:21},
{a:"Did not experience retaliation",b:79},
{a:"Prefer not to answer",b:79}
];

var data_wom_ee = [
{a:"Experienced Retaliation",b:71},
{a:"Did not experience retaliation",b:22},
{a:"Prefer not to answer",b:7}
];


var dummydata_wom_ff = [
{a:"Experienced Retaliation",b:14},
{a:"Did not experience retaliation",b:76},
{a:"Prefer not to answer",b:79}
];

var data_wom_ff = [
{a:"Experienced Retaliation",b:64},
{a:"Did not experience retaliation",b:27},
{a:"Prefer not to answer",b:9}
];

///////////
////////////

//////////////////
/////////////////////
// more authority figufe

var dummydata_wom_gg = [
{a:"Less of an Authority Figure",b:9},
{a:"Would Not Impact View",b:6},
{a:"More of an Authority Figure",b:22} 
];

var data_wom_gg = [
{a:"Less of an Authority Figure",b:10},
{a:"Would Not Impact View",b:84},
{a:"More of an Authority Figure",b:6} 
];



 

var dummydata_wom_hh = [
{a:"Less of an Authority Figure",b:18},
{a:"Would Not Impact View",b:77},
{a:"More of an Authority Figure",b:5} 
];

var data_wom_hh = [
{a:"Less of an Authority Figure",b:18},
{a:"Would Not Impact View",b:77},
{a:"More of an Authority Figure",b:5} 
];

 ///////////
 /////
 ////bottom 2
 /////////////

var dummydata_wom_ii = [
{a:"More likely to report",b:56},
{a:"Less likely to report",b:44},
{a:"No impact",b:44}
];

var data_wom_ii = [
{a:"More likely to report",b:46},
{a:"Less likely to report",b:1},
{a:"No impact",b:53}
];

 


var dummydata_wom_jj = [
{a:"More likely to report",b:65},
{a:"Less likely to report",b:35},
{a:"No impact",b:44}
];

var data_wom_jj = [
{a:"More likely to report",b:35},
{a:"Less likely to report",b:2},
{a:"No impact",b:63}
];



////////
///////////
////



//////////////


////////
///////////
////

/////////
/////////
////////////


var dummydata_wom_kk = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

var data_wom_kk = [
{a:"Strongly Disagree",b:9},
{a:"Disagree",b:6},
{a:"Neutral",b:22},
{a:"Agree",b:29},
{a:"Strongly Agree",b:34}
];

 

////////
///////////
////
//////////

/////
/////// post-9/11 GI Bill



var data_gib_a = [
{a:"Eligible",b:92},
{a:"Ineligible",b:8}
];



var dummydata_gib_a = [
{a:"Eligible",b:2},
{a:"Ineligible",b:98}
];




var data_gib_b = [
{a:"Have Used",b:55},
{a:"Transfered to Dependent",b:11},
{a:"Intend to Use",b:24},
{a:"Plan not to use",b:10}
];



var dummydata_gib_b = [
{a:"Have Used",b:4},
{a:"Transfered to Dependent",b:8},
{a:"Intend to Use",b:78},
{a:"Plan not to use",b:10}
];





/////
///////
var numero_gib = [92];

var numero_gib_nocuts = [87];

var numero_gib_a = [55];
var numero_gib_b = [11];
var numero_gib_c = [24];




var data_gib_c = [
{a:"Excellent",b:37},
{a:"Good",b:37},
{a:"Fair",b:11},
{a:"Neutral",b:10},
{a:"Poor",b:5}
];



var dummydata_gib_c = [
{a:"Excellent",b:25},
{a:"Good",b:10},
{a:"Fair",b:15},
{a:"Neutral",b:25},
{a:"Poor",b:25}
];






var dummydata_gib_d = [
{a:"Very Important",b:10},
{a:"Important",b:20},
{a:"Moderately Important",b:20},
{a:"Slightly Important",b:30},
{a:"Not Important",b:20}
];

var data_gib_d = [
{a:"Very Important",b:45},
{a:"Important",b:31},
{a:"Moderately Important",b:13},
{a:"Slightly Important",b:8},
{a:"Not Important",b:3}
];

 




var dummydata_gib_e = [
{a:"Very Important",b:9},
{a:"Important",b:6},
{a:"Moderately Important",b:22},
{a:"Slightly Important",b:29},
{a:"Not Important",b:34}
];

var data_gib_e = [
{a:"Very Important",b:30},
{a:"Important",b:26},
{a:"Moderately Important",b:19},
{a:"Slightly Important",b:13},
{a:"Not Important",b:12}
];

 




var dummydata_gib_f = [
{a:"Very Important",b:9},
{a:"Important",b:6},
{a:"Moderately Important",b:22},
{a:"Slightly Important",b:29},
{a:"Not Important",b:34}
];

var data_gib_f = [
{a:"Very Important",b:69},
{a:"Important",b:19},
{a:"Moderately Important",b:7},
{a:"Slightly Important",b:3},
{a:"Not Important",b:2}
];

 ///////////////////////////////////////////
 ////////////////////////////////
 ///////////////
 ///////////
/////// education
//////////////

var numero_ed_a = [61];
var numero_ed_b = [35];
////
//// loans number
var numero_ed_c = [46];


/// ed benefits used
var dummydata_ed_a = [
{a:"Post-9/11 GI Bill",b:77},
{a:"Montgomery GI Bill",b:9},
{a:"Vocational Rehabilitation",b:7},
{a:"Reserve Education Assistance Program",b:3},
{a:"Other",b:4}
];

var data_ed_a = [
{a:"Post-9/11 GI Bill",b:56},
{a:"Montgomery GI Bill",b:22},
{a:"Vocational Rehabilitation",b:15},
{a:"Reserve Education Assistance Program",b:3},
{a:"Other",b:4}
];

/// type of school
var dummydata_ed_b = [
{a:"Community College",b:56},
{a:"State School",b:22},
{a:"For Profit",b:15},
{a:"Technical, Vocational, Trade",b:13} 
];

var data_ed_b = [
{a:"Community College",b:20},
{a:"State School",b:47},
{a:"For Profit",b:25},
{a:"Technical, Vocational, Trade",b:8} 
];

/// satisfaction with ed program
var dummydata_ed_c = [
{a:"Very Satisfied",b:34},
{a:"Satisfied",b:45},
{a:"Neither Satisfied or Dissatisfied",b:13},
{a:"Dissatisfied",b:8}
];

var data_ed_c = [
{a:"Very Satisfied",b:34},
{a:"Satisfied",b:45},
{a:"Neither Satisfied or Dissatisfied",b:13}, 
{a:"Dissatisfied",b:8}
];

/// amount of debt
var dummydata_ed_d = [
{a:"None",b:50},
{a:"Under $1000",b:2},
{a:"$1,001-$5,000",b:6},
{a:"$5,001-$10,000",b:8},
{a:"$10,001-$15,000",b:8},
{a:"$15,001-$20,000",b:5},
{a:"$20,001-$50,000",b:15},
{a:"$50,001-$100,000",b:15},
 {a:"Above $100,000",b:4}
];

var data_ed_d = [
{a:"None",b:50},
{a:"Under $1000",b:2},
{a:"$1,001-$5,000",b:6},
{a:"$5,001-$10,000",b:8},
{a:"$10,001-$15,000",b:8},
{a:"$15,001-$20,000",b:5},
{a:"$20,001-$50,000",b:13},
{a:"$50,001-$100,000",b:5},
 {a:"Above $100,000",b:3}
];



///////////
 //////////////
 /////////////////
 ///////////////
/// employment
//
/// empl status
/// 2017
var dummydata_employ_a = [
{a:"Full-time employment",b:60},
{a:"Part-time employment",b:22},
{a:"Unemployed and looking for work",b:15},
{a:"Other",b:3} 
];

var data_employ_a = [
{a:"Full-time employment",b:57},
{a:"Part-time employment",b:5},
{a:"Unemployed and looking for work",b:6},
{a:"Other",b:32} 
];

/// 2016
var dummydata_employ_b = [
{a:"Full-time employment",b:60},
{a:"Part-time employment",b:22},
{a:"Unemployed and looking for work",b:15},
{a:"Other",b:3} 
];

var data_employ_b = [
{a:"Full-time employment",b:53},
{a:"Part-time employment",b:7},
{a:"Unemployed and looking for work",b:8},
{a:"Other",b:32} 
];


/// 2015
var dummydata_employ_c = [
{a:"Full-time employment",b:60},
{a:"Part-time employment",b:22},
{a:"Unemployed and looking for work",b:15},
{a:"Other",b:3} 
];

var data_employ_c = [
{a:"Full-time employment",b:46},
{a:"Part-time employment",b:7},
{a:"Unemployed and looking for work",b:10},
{a:"Other",b:37} 
];

/// 2014
var dummydata_employ_d = [
{a:"Full-time employment",b:60},
{a:"Part-time employment",b:22},
{a:"Unemployed and looking for work",b:15},
{a:"Other",b:3} 
];

var data_employ_d = [
{a:"Full-time employment",b:37},
{a:"Part-time employment",b:8},
{a:"Unemployed and looking for work",b:10},
{a:"Other",b:45} 
];



////
//// loans number
var numero_employ_a = [65];

////
//// loans number
var numero_employ_b = [37];
////
//// loans number
var numero_employ_c = [36];
////
//// loans number
var numero_employ_d = [24];



/// Top 5 Industries of Employment
var dummydata_employ_e = [
{a:"Government",b:28},
{a:"Health Care",b:8},
{a:"Telecommunications",b:10},
{a:"Education",b:5},
{a:"Manufacturing",b:45} 
];

var data_employ_e = [
{a:"Government",b:32},
{a:"Health Care",b:9},
{a:"Telecommunications",b:5},
{a:"Education",b:5},
{a:"Manufacturing",b:4} 
];
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////






////
 //////////////////////////
 //////////////
 //////// General Health
 //
 ////////
//
 ////Service Related Injuries


var dummydata_health_a = [
{a:"PTSD",b:6},
{a:"Anxiety",b:5},
{a:"Depression",b:2},
{a:"Tinnitus/Hearing Loss",b:4},
{a:"Musculoskeletal Injuries/ Chronic Pain",b:8},
{a:"TBI",b:9},
{a:"Pulmonary issues",b:9},
{a:"Burns/Scarring",b:1},
{a:"Vision Loss",b:7},
{a:"Other",b:1}
];

var data_health_a = [
{a:"PTSD",b:46},
{a:"Anxiety",b:45},
{a:"Depression",b:42},
{a:"Tinnitus/Hearing Loss",b:41},
{a:"Musculoskeletal Injuries/ Chronic Pain",b:38},
{a:"TBI",b:19},
{a:"Pulmonary issues",b:19},
{a:"Burns/Scarring",b:11},
{a:"Vision Loss",b:7},
{a:"Other",b:19}
];


 /////////////
///////////////
/////////////
////////



////
////  
var numero_health_a = [80];

var numero_health_b = [63];

var numero_health_c = [35];

var numero_health_d = [6];

var numero_health_e = [23];

var numero_health_f = [80];

///
////////////////////////
////////


////////// When asked to rate their overall health before joining the military and now
////
//
 //// before

var data_health_before = [
{a:"Excellent",b:68},
{a:"Good",b:26},
{a:"Average",b:5},
{a:"Poor or Terrible",b:1},
{a:"Terrible",b:0.1}
];


var dummydata_health_before = [
{a:"Excellent",b:74},
{a:"Good",b:23},
{a:"Average",b:3},
{a:"Poor or Terrible",b:3},
{a:"Terrible",b:3}
];

////
//
//
 //// after

var data_health_after = [
{a:"Excellent",b:7},
{a:"Good",b:28},
{a:"Average",b:35},
{a:"Poor or Terrible",b:26},
{a:"Terrible",b:4}
];


var dummydata_health_after = [
{a:"Excellent",b:74},
{a:"Good",b:23},
{a:"Average",b:3},
{a:"Poor or Terrible",b:3},
{a:"Terrible",b:3}
];



////
//
//////////  
////
//
//
 //// importance

var data_health_importance = [
{a:"Extremely important",b:51},
{a:"Very important",b:37},
{a:"Moderately important",b:10},
{a:"Slightly important",b:1},
{a:"Not at all important",b:1}
];


var dummydata_health_importance = [
{a:"Extremely important",b:7},
{a:"Very important",b:28},
{a:"Moderately important",b:35},
{a:"Slightly important",b:26},
{a:"Not at all important",b:26}
];
   

////
////
//
//////////  
    
////
//
//////////  
////
//
//
 //// injury?

var data_health_injury = [
{a:"Yes",b:86},
{a:"No",b:14}
];


var dummydata_health_injury = [
{a:"Yes",b:51},
{a:"No",b:1}
];
   


 //// chronic pain

var data_health_pain = [
{a:"Yes",b:72},
{a:"No",b:28}
];


var dummydata_health_pain = [
{a:"Yes",b:51},
{a:"No",b:1}
];
   
   



 //// how often injuries affect

 

var data_health_affect = [
{a:"Always",b:42},
{a:"Most of the time",b:28},
{a:"About half the time",b:11},
{a:"Sometimes",b:18},
{a:"Never",b:1}
];


var dummydata_health_affect = [
{a:"Always",b:2},
{a:"Most of the time",b:2},
{a:"About half the time",b:22},
{a:"Sometimes",b:12},
{a:"Never",b:28}
];
   
   




 //// hours of sleep

 
var data_health_sleep = [
{a:"0 to 4 hours",b:42},
{a:"5 to 6 hours",b:28},
{a:"7 to 8 hours",b:11},
{a:"9 or more hours",b:18}
];


var dummydata_health_sleep = [
{a:"0 to 4 hours",b:42},
{a:"5 to 6 hours",b:28},
{a:"7 to 8 hours",b:11},
{a:"9 or more hours",b:18}
];
   



 //// trouble sleeping

  
var data_health_sleep_trouble = [
{a:"Always",b:27},
{a:"Most of the time",b:28},
{a:"About half the time",b:13},
{a:"Sometimes",b:26},
{a:"Never",b:6}
];


var dummydata_health_sleep_trouble = [
{a:"Always",b:2},
{a:"Most of the time",b:2},
{a:"About half the time",b:22},
{a:"Sometimes",b:12},
{a:"Never",b:28}
];
   


 
 //// diagnosed sleep condition

var data_health_sleep_diagnosed = [
{a:"Yes",b:39},
{a:"No",b:61}
];


var dummydata_health_sleep_diagnosed = [
{a:"Yes",b:51},
{a:"No",b:1}
];
   
   

 //// exercise regularly

var data_health_exercise = [
{a:"Yes",b:61},
{a:"No",b:39}
];


var dummydata_health_exercise = [
{a:"Yes",b:51},
{a:"No",b:1}
];
   
   



 //// how many times a week exercise

  

var data_health_exercise_often = [
{a:"1 time per week",b:3},
{a:"2 to 3 times per week",b:49},
{a:"4 to 5 times per week",b:39},
{a:"6 or more times per week",b:9}
];


var dummydata_health_exercise_often = [
{a:"1 time per week",b:42},
{a:"2 to 3 times per week",b:28},
{a:"4 to 5 times per week",b:11},
{a:"6 or more times per week",b:18}
];
   


 
 
 
    
////
////
//
//////////  
////
 //// Medications

var data_health_medication = [
{a:"Anti-depressant",b:74},
{a:"Opioid",b:28},
{a:"Sleeping Pills",b:51},
{a:"Anti-anxiety",b:49}
];


var dummydata_health_medication = [
{a:"Anti-depressant",b:3},
{a:"Opioid",b:3},
{a:"Sleeping Pills",b:5},
{a:"Anti-anxiety",b:5}
];

////////
////////
//////
 ////Service Related therapies

var data_health_therapies = [
{a:"Acupuncture",b:15},
{a:"Chiropractic Care",b:25},
{a:"Meditation",b:26},
{a:"Yoga",b:18},
{a:"Music or Art Therapy",b:13},
{a:"Nature/outdoor adventure therapies",b:18},
{a:"Animal-assisted therapy",b:6},
{a:"Service animal",b:6}, 
{a:"Cannabis",b:14}, 
{a:"Natural products (i.e., dietary supplements, vitamins, probiotics)",b:37}, 
{a:"Special diets",b:13}, 
{a:"Other",b:9}
];


var dummydata_health_therapies = [
{a:"Acupuncture",b:19},
{a:"Chiropractic Care",b:46},
{a:"Meditation",b:42},
{a:"Yoga",b:41},
{a:"Music or Art Therapy",b:19},
{a:"Nature/outdoor adventure therapies",b:38},
{a:"Animal-assisted therapy",b:11},
{a:"Service animal",b:11}, 
{a:"Cannabis",b:11}, 
{a:"Natural products (i.e., dietary supplements, vitamins, probiotics)",b:11}, 
{a:"Special diets",b:11}, 
{a:"Other",b:11}
];
////
//
//////////  
////
 
 
 
 
 
//// therapies to treat injury you received as a result of service

var data_health_therapies_result = [
{a:"Yes",b:63},
{a:"No",b:37}
];


var dummydata_health_therapies_result = [
{a:"Yes",b:51},
{a:"No",b:1}
];
   
   
   
   
 
//// someone assisting health needs

var data_health_assisting = [
{a:"Yes",b:20},
{a:"No",b:80}
];


var dummydata_health_assisting = [
{a:"Yes",b:51},
{a:"No",b:1}
];
   
   
 
 
 
 
//// who is person assisting

 
var data_health_assisting = [
{a:"Spouse",b:79},
{a:"Parent",b:7},
{a:"Friend",b:10},
{a:"Grandparents",b:.1},
{a:"Extended Family",b:2},
{a:"Paid caregiver or aide",b:4},
{a:"Other",b:12}
];


var dummydata_health_assisting = [
{a:"Spouse",b:11},
{a:"Parent",b:11},
{a:"Friend",b:11},
{a:"Grandparents",b:11},
{a:"Extended Family",b:11},
{a:"Paid caregiver or aide",b:11},
{a:"Other",b:11}
];
   
 
 
 
 
//// How many daily activities do you need assistance with?

var data_health_activities = [
{a:"1",b:20},
{a:"2",b:20},
{a:"3",b:20},
{a:"4 or more",b:20}
];


var dummydata_health_activities = [
{a:"1",b:20},
{a:"2",b:20},
{a:"3",b:20},
{a:"4 or more",b:20}
];
   

   
 
 ////
//   
//////////  
////
//////////  burn pits
/////////   
 
 

/// 
//// exposed to burn pits

var data_burn = [
{a:"Yes",b:82},
{a:"No",b:18}
];


var dummydata_burn = [
{a:"Yes",b:51},
{a:"No",b:1}
];
   
   
   
   

/// 
//// have symptoms because exposed to burn pits

var data_burn_symptoms = [
{a:"Yes",b:39},
{a:"Maybe",b:45},
{a:"No",b:16}
];


var dummydata_burn_symptoms = [
{a:"Yes",b:51},
{a:"Maybe",b:41},
{a:"No",b:1}
];
   
   
  
  
  

/// 
//// aware of burn pits registry

var data_burn_registry= [
{a:"Yes",b:70},
{a:"No",b:30}
];


var dummydata_burn_registry = [
{a:"Yes",b:51},
{a:"No",b:21}
];
   
   
  

/// 
//// registered to burn pits registry

var data_burn_registered= [
{a:"Yes",b:68},
{a:"No",b:32}
];


var dummydata_burn_registered = [
{a:"Yes",b:51},
{a:"No",b:41}
];
   
   
     
    
 

/// 
//// have any issues with burn pits registry

var data_burn_issues = [
{a:"None",b:64},
{a:"Few",b:19},
{a:"Some",b:12},
{a:"Many",b:5}
];


var dummydata_burn_issues = [
{a:"None",b:28},
{a:"Few",b:28},
{a:"Some",b:18},
{a:"Many",b:12}
];
   
   

 ////
//   
//////////  
////
//////////  
////
 //////////////////////////
 //////////////
 //////// Tobacco alcohol use
 //      
  
 
 

/// 
//// Q183 - Have you ever used tobacco products?

var data_tobacco = [
{a:"Yes",b:61},
{a:"No",b:39}
];


var dummydata_tobacco = [
{a:"Yes",b:64},
{a:"No",b:19}
];
   
     
 

/// 
//// currently use tobacco products?

var data_tobacco_use = [
{a:"Yes",b:34},
{a:"No",b:66}
];


var dummydata_tobacco_use = [
{a:"Yes",b:64},
{a:"No",b:19}
];
   
       





/// 
//// how often use tobacco products?

var data_tobacco_often = [
{a:"Daily",b:77},
{a:"4-6 times a week",b:6},
{a:"2-3 times a week",b:5},
{a:"Once a week",b:2},
{a:"Less than once a week",b:10}
];


var dummydata_tobacco_often = [
{a:"Daily",b:34},
{a:"4-6 times a week",b:34},
{a:"2-3 times a week",b:14},
{a:"Once a week",b:14},
{a:"Less than once a week",b:16}
];









/// 
//// how often use alcohol
 


var data_alcohol = [
{a:"Every day",b:8},
{a:"3 to 6 times a week",b:19},
{a:"Once or twice a week",b:21},
{a:"2 to 3 times a month",b:14},
{a:"Once a month",b:8},
{a:"Less than 10 times in the past year",b:10},
{a:"1 or 2 times in the past year",b:6},
{a:"I did not drink any alcohol in the past year, but I did drink in the past",b:11},
{a:"I never drank any alcohol in my life",b:3}
];


var dummydata_alcohol = [
{a:"Every day",b:18},
{a:"3 to 6 times a week",b:7},
{a:"Once or twice a week",b:6},
{a:"2 to 3 times a month",b:5},
{a:"Once a month",b:2},
{a:"Less than 10 times in the past year",b:2},
{a:"1 or 2 times in the past year",b:2},
{a:"I did not drink any alcohol in the past year, but I did drink in the past",b:2},
{a:"I never drank any alcohol in my life",b:10}
];







/// 
//// max alcohol drinks
 /////


var data_alcohol_max = [
{a:"36 drinks or more a week",b:11},
{a:"24 to 35 drinks",b:11},
{a:"18 to 23 drinks",b:11},
{a:"12 to 17 drinks",b:11},
{a:"8 to 11 drinks",b:12},
{a:"5 to 7 drinks",b:14},
{a:"4 drinks",b:9},
{a:"3 drinks",b:10},
{a:"2 drinks",b:5},
{a:"1 drink",b:6}
];


var dummydata_alcohol_max = [
{a:"36 drinks or more a week",b:19},
{a:"24 to 35 drinks",b:1},
{a:"18 to 23 drinks",b:4},
{a:"12 to 17 drinks",b:8},
{a:"8 to 11 drinks",b:10},
{a:"5 to 7 drinks",b:6},
{a:"4 drinks",b:11},
{a:"3 drinks",b:11},
{a:"2 drinks",b:11},
{a:"1 drink",b:3}
];









/// 
//// how many alcoholic drinks did you have on a typical day
 /////


 

var data_alcohol_typical = [
{a:"16 or more",b:2},
{a:"12 to 15 drinks",b:1},
{a:"9 to 11 drinks",b:2},
{a:"7 to 8 drinks",b:4},
{a:"5 to 6 drinks",b:9},
{a:"3 to 4 drinks",b:26},
{a:"2 drinks",b:32},
{a:"1 drink",b:24}
];


var dummydata_alcohol_typical = [
{a:"16 or more",b:11},
{a:"12 to 15 drinks",b:11},
{a:"9 to 11 drinks",b:11},
{a:"7 to 8 drinks",b:11},
{a:"5 to 6 drinks",b:12},
{a:"3 to 4 drinks",b:14},
{a:"2 drinks",b:9},
{a:"1 drink",b:10}
];






/// 
//// 5 (males) or 4 or more (females) drinks of alcohol in a two-hour period
 /////

 

var data_alcohol_twohour = [
{a:"Every day",b:1},
{a:"3 to 6 days a week",b:4},
{a:"One or two days a week",b:7},
{a:"2 to 3 days a month",b:8},
{a:"One day a month",b:7},
{a:"3 to 11 days in the past year",b:11},
{a:"1 or 2 days in the past year",b:21},
{a:"Never in the last 12 months",b:41}
];


var dummydata_alcohol_twohour = [
{a:"Every day",b:8},
{a:"3 to 6 days a week",b:19},
{a:"One or two days a week",b:21},
{a:"2 to 3 days a month",b:14},
{a:"One day a month",b:8},
{a:"3 to 11 days in the past year",b:10},
{a:"1 or 2 days in the past year",b:6},
{a:"Never in the last 12 months",b:11}
];


///
///////
//////////////


//////////
////////////
//////////
///////////// cannabis
 /////

 
//
///// use cannabis medicinal

var data_cannabis = [
{a:"Yes",b:20},
{a:"No",b:76},
{a:"Unsure",b:1},
{a:"Prefer Not to Answer",b:3}
];


var dummydata_cannabis = [
{a:"Yes",b:1},
{a:"No",b:4},
{a:"Unsure",b:7},
{a:"Prefer Not to Answer",b:8}
];




////
//// interest in cannabis 

var numero_cannabis = [75];



//
///// comfortable discussing cannabis with primary care

 

var data_cannabis_comfort = [
{a:"Very comfortable",b:51},
{a:"Comfortable",b:13},
{a:"Somewhat comfortable",b:12},
{a:"A little comfortable",b:6},
{a:"Not at all comfortable",b:18}
];


var dummydata_cannabis_comfort = [
{a:"Very comfortable",b:20},
{a:"Comfortable",b:76},
{a:"Somewhat comfortable",b:1},
{a:"A little comfortable",b:1},
{a:"Not at all comfortable",b:3}
];




//
///// have discussed cannabis with primary care

var data_cannabis_discussed = [
{a:"Yes",b:31},
{a:"No",b:67},
{a:"Prefer Not to Answer",b:2}
];


var dummydata_cannabis_discussed = [
{a:"Yes",b:21},
{a:"No",b:24},
{a:"Prefer Not to Answer",b:28}
];



 
//
///// use cannabis recreational

var data_cannabis_recreational = [
{a:"Yes",b:66},
{a:"No",b:20},
{a:"Unsure",b:1},
{a:"Prefer Not to Answer",b:13}
];


var dummydata_cannabis_recreational = [
{a:"Yes",b:1},
{a:"No",b:4},
{a:"Unsure",b:7},
{a:"Prefer Not to Answer",b:8}
];



 
//
///// in state where cannabis legal medicinal

var data_cannabis_legal_med = [
{a:"Yes",b:52},
{a:"No",b:35},
{a:"Unsure",b:12},
{a:"Prefer Not to Answer",b:1}
];


var dummydata_cannabis_legal_med = [
{a:"Yes",b:1},
{a:"No",b:4},
{a:"Unsure",b:7},
{a:"Prefer Not to Answer",b:8}
];


//
///// in state where cannabis legal recreational

var data_cannabis_legal_rec = [
{a:"Yes",b:26},
{a:"No",b:67},
{a:"Unsure",b:6},
{a:"Prefer Not to Answer",b:1}
];


var dummydata_cannabis_legal_rec = [
{a:"Yes",b:1},
{a:"No",b:4},
{a:"Unsure",b:7},
{a:"Prefer Not to Answer",b:8}
];


 
 
 ////
//   
//////////  
////
//////////  
////
 //////////////////////////
 //////////////
 //////// openly transgender
 //
 
 
 
var data_transgender = [
{a:"Strongly Agree",b:23},
{a:"Agree",b:14},
{a:"Neither Agree Nor Disagree",b:26},
{a:"Disagree",b:14},
{a:"Strongly Disagree",b:23} 
];



var dummydata_transgender = [
{a:"Strongly Agree",b:2},
{a:"Agree",b:54},
{a:"Neither Agree Nor Disagree",b:20},
{a:"Disagree",b:10},
{a:"Strongly Disagree",b:10} 
];


 //////////////
 //////// dont ask dont tell
 //
 
var data_dadt = [
{a:"Yes",b:51},
{a:"No",b:29},
{a:"No opinion",b:20}
];


var dummydata_dadt = [
{a:"Yes",b:21},
{a:"No",b:24},
{a:"No opinion",b:13}
];

  


////////
////////////
////////////
///////////////
////////////
///////////////   

 
 ////
// //////////  
//////////////   
//////////////////////////////
 //////////////
 //////// Transition Experiences
 //////////




 //////////////
////// Did you have a permanent place to live when you transitioned out 
 ////////////
 
var data_tran_perm = [
{a:"Yes",b:78},
{a:"No",b:22} 
];


var dummydata_tran_perm = [
{a:"Yes",b:21},
{a:"No",b:24}
];

  

 //////////////
////// couchsurf, or stay with family or friends temporarily, when you transitioned 
 ////////////
 
var data_tran_temp = [
{a:"Yes",b:84},
{a:"No",b:16} 
];


var dummydata_tran_temp = [
{a:"Yes",b:21},
{a:"No",b:24}
];

  

 //////////////
////// How long were you without a permanent place to live 
 ////////////
 
  

var data_tran_long = [
{a:"A few days",b:8},
{a:"A few weeks",b:18},
{a:"A few months",b:27},
{a:"Six months to a year",b:25},
{a:"Longer than a year",b:22} 
];


var dummydata_tran_long = [
{a:"A few days",b:14},
{a:"A few weeks",b:14},
{a:"A few months",b:14},
{a:"Six months to a year",b:14},
{a:"Longer than a year",b:16} 
];

    
  
  
  
  

 ///////
///Q145 - When do you plan to transition out of the military?
////////  
var data_tran_when = [
{a:"Within the next 6 months",b:8},
{a:"Within the next 6-12 months",b:8},
{a:"Within the next 2 years",b:13},
{a:"Over 2 years",b:49},
{a:"Unsure",b:22}
];


var dummydata_tran_when = [
{a:"Within the next 6 months",b:10},
{a:"Within the next 6-12 months",b:16},
{a:"Within the next 2 years",b:12},
{a:"Over 2 years",b:22},
{a:"Unsure",b:32}
];








 ///////
///Q146 - Have you planned for your transition out of the military?
////////  
var data_tran_plan = [
{a:"Yes",b:60},
{a:"No",b:40}
];


var dummydata_tran_plan = [
{a:"Yes",b:48},
{a:"No",b:22}
];





 ///////
///currently participating in the Transition Assistance Program
////////  
var data_tran_tap = [
{a:"Yes",b:31},
{a:"No",b:69}
];


var dummydata_tran_tap = [
{a:"Yes",b:48},
{a:"No",b:22}
];




   



 ///////
///rate your experience in the Transition Assistance Program
////////  
 
var data_tran_rate = [
{a:"Very good",b:14},
{a:"Good",b:30},
{a:"Fair",b:35},
{a:"Poor",b:13},
{a:"Very poor",b:8}
];


var dummydata_tran_rate = [
{a:"Very good",b:11},
{a:"Good",b:11},
{a:"Fair",b:21},
{a:"Poor",b:21},
{a:"Very poor",b:19}
];





 ///////
///challenges, if any, do you expect to face as you transition
////////  
 
 

var data_tran_challenges = [
{a:"Finding/keeping employment as a civilian",b:31},
{a:"Isolation from unit/service members",b:26},
{a:"Health Concerns (Mental or Physical",b:34},
{a:"Reconnecting with family",b:12},
{a:"Relating to non-veteran civilians/Reintegrating with community",b:32},
{a:"Readjusting to social life",b:24},
{a:"Loss of identity/purpose",b:36},
{a:"Managing finances",b:21},
{a:"Difficulty navigating VA benefits",b:45},
{a:"Finding housing",b:8},
{a:"I do not expect to face any challenges",b:20}
];


var dummydata_tran_challenges = [
{a:"Finding/keeping employment as a civilian",b:14},
{a:"Isolation from unit/service members",b:3},
{a:"Health Concerns (Mental or Physical",b:5},
{a:"Reconnecting with family",b:3},
{a:"Relating to non-veteran civilians/Reintegrating with community",b:13},
{a:"Readjusting to social life",b:3},
{a:"Loss of identity/purpose",b:3},
{a:"Managing finances",b:3},
{a:"Difficulty navigating VA benefits",b:3},
{a:"Finding housing",b:3},
{a:"I do not expect to face any challenges",b:8}
];







 ///////
///How familiar are you with the public benefits available
////////  
 
 
var data_tran_familiar = [
{a:"Extremely familiar",b:14},
{a:"Very familiar",b:30},
{a:"Moderately familiar",b:35},
{a:"Slightly familiar",b:13},
{a:"Not familiar at all",b:8}
];


var dummydata_tran_familiar = [
{a:"Extremely familiar",b:14},
{a:"Very familiar",b:30},
{a:"Moderately familiar",b:35},
{a:"Slightly familiar",b:13},
{a:"Not familiar at all",b:8}
];







////////
///////////
////////

   
   


////////
////////////
////////////
///////////////
////////////
///////////////
////////////
///////////////
////////////
//// va health care utilization
///////////////
///////////////
///////////////


///////////////
/// any of the following benefits influential
///////////////

 

var data_benefits_influential = [
{a:"Health Care",b:58},
{a:"Education benefits",b:83},
{a:"Housing assistance",b:18},
{a:"Pay",b:59},
{a:"Life Insurance",b:25}
];


var dummydata_benefits_influential = [
{a:"Health Care",b:16},
{a:"Education benefits",b:26},
{a:"Housing assistance",b:16},
{a:"Pay",b:16},
{a:"Life Insurance",b:10}
];




///////////
/////va
////
///////////////
/// enrolled in care
///////////////
var dummydata_va_enrolled= [
{a:"Yes",b:36},
{a:"No",b:10}

];

var data_va_enrolled = [
{a:"Yes",b:81},
{a:"No",b:19}
];

///////////////
///////////////
/// percentage support full privatization
var dummydata_va_reforms= [
{a:"Infrastructure updates for building improvements",b:7},
{a:"Updates to technology",b:3},
{a:"Consolidate programs that allow community providers to provide care for veterans through VA (including Choice) into one streamlined program.",b:10},
{a:"Reform hiring and firing practices to improve accountability of bad actors and rewarding good actors.",b:10},
{a:"Expand telemedicine programs and other programs supporting rural populations",b:10},
{a:"More Post-9/11 vets working at VA",b:10},
{a:"Reduce paperwork and bureaucracy to access care",b:10},
{a:"Expansion of specialized care",b:10},
{a:"Other",b:10}
];

var data_va_reforms = [
{a:"Infrastructure updates for building improvements",b:13},
{a:"Updates to technology",b:25},
{a:"Consolidate programs that allow community providers to provide care for veterans through VA (including Choice) into one streamlined program.",b:47},
{a:"Reform hiring and firing practices to improve accountability of bad actors and rewarding good actors.",b:50},
{a:"Expand telemedicine programs and other programs supporting rural populations",b:16},
{a:"More Post-9/11 vets working at VA",b:25},
{a:"Reduce paperwork and bureaucracy to access care",b:52},
{a:"Expansion of specialized care",b:30},
{a:"Other",b:5}
];

///////////////
///////////////
///////////////
/// receiving VA benefits other than healthcare
var dummydata_va_other= [
{a:"Yes",b:46},
{a:"No",b:54}
];

var data_va_other = [
{a:"Yes",b:68},
{a:"No",b:32}
];

///////////////
/// forms of coverage
var dummydata_va_coverage = [
{a:"DOD healthcare exclusively",b:5},
{a:"VA healthcare exclusively",b:5},
{a:"Private insurance exclusively",b:5},
{a:"TRICARE exclusively",b:5},
{a:"TRICARE and VA healthcare",b:5},
{a:"DOD and VA healthcare",b:5},
{a:"VA supplemented by private insurance",b:5},
{a:"VA supplemented by Medicaid/Medicare",b:5},
{a:"DOD supplemented by private insurance",b:5},
{a:"Do not have health insurance",b:55}
];

var data_va_coverage = [
{a:"DOD healthcare exclusively",b:1},
{a:"VA healthcare exclusively",b:27},
{a:"Private insurance exclusively",b:25},
{a:"TRICARE exclusively",b:8},
{a:"TRICARE and VA healthcare",b:17},
{a:"DOD and VA healthcare",b:1},
{a:"VA supplemented by private insurance",b:15},
{a:"VA supplemented by Medicaid/Medicare",b:3},
{a:"DOD supplemented by private insurance",b:1},
{a:"Do not have health insurance",b:2}
];
///////////////
///////////////





///////////////
///////////////
///////////////
/// primary source of care
///////////////

var dummydata_va_primary = [
{a:"VA Provider",b:18},
{a:"Non-VA Provider",b:82}
];

var data_va_primary = [
{a:"VA Provider",b:50},
{a:"Non-VA Provider",b:50}
];
////
////  







///////////////
///////////////
///////////////
/// last time you sought healthcare from the VA?
///////////////
///////////////
var dummydata_va_last= [
{a:"Less than 1 month",b:6},
{a:"1 - 3 months",b:6},
{a:"3- 6 months",b:6},
{a:"6 - 12 months",b:6},
{a:"1 - 2 years",b:6},
{a:"2 - 5 years",b:6},
{a:"Longer than 5 years",b:5}
];

var data_va_last = [
{a:"Less than 1 month",b:43},
{a:"1 - 3 months",b:19},
{a:"3- 6 months",b:9},
{a:"6 - 12 months",b:9},
{a:"1 - 2 years",b:7},
{a:"2 - 5 years",b:5},
{a:"Longer than 5 years",b:8}
];
////
////  




///////////////
///////////////
///////////////
/// overall experience with VA healthcare
///////////////

var dummydata_va_experience = [
{a:"Excellent",b:10},
{a:"Good",b:56},
{a:"Average",b:7},
{a:"Poor",b:2},
{a:"Terrible",b:17}
];

var data_va_experience = [
{a:"Excellent",b:18},
{a:"Good",b:36},
{a:"Average",b:27},
{a:"Poor",b:12},
{a:"Terrible",b:7}
];
////
////  






///////////////
///////////////
///////////////
/// why not involved with VA healthcare
///////////////

 
var data_va_none = [
{a:"I have other health benefits and I don't need VA care",b:35},
{a:"Other veterans need the benefits more",b:29},
{a:"I do not think that I have a condition that warrants it",b:19},
{a:"I am not eligible for VA care",b:11},
{a:"I do not trust the care that VA has to offer",b:20},
{a:"I have not gotten around to it yet",b:10},
{a:"I do not know how to apply",b:10},
{a:"There is no VA located close to me",b:4},
{a:"The paperwork is too much",b:13},
{a:"I do not want government help",b:4},
{a:"I am not sure if I am eligible",b:22},
{a:"I prefer my private sector provider",b:24},
{a:"Other",b:7}
];

var dummydata_va_none = [
{a:"I have other health benefits and I don't need VA care",b:8},
{a:"Other veterans need the benefits more",b:6},
{a:"I do not think that I have a condition that warrants it",b:7},
{a:"I am not eligible for VA care",b:2},
{a:"I do not trust the care that VA has to offer",b:2},
{a:"I have not gotten around to it yet",b:2},
{a:"I do not know how to apply",b:2},
{a:"There is no VA located close to me",b:2},
{a:"The paperwork is too much",b:2},
{a:"I do not want government help",b:2},
{a:"I am not sure if I am eligible",b:2},
{a:"I prefer my private sector provider",b:7},
{a:"Other",b:5}
];
////
////  





///////////////
/// va Clinicians understand the medical needs of veterans
/////////
 

var data_va_understand = [
{a:"Strongly agree",b:26},
{a:"Somewhat agree",b:44},
{a:"Neither agree nor disagree",b:12},
{a:"Somewhat disagree",b:12},
{a:"Strongly disagree",b:6}
];

var dummydata_va_understand = [
{a:"Strongly agree",b:6},
{a:"Somewhat agree",b:26},
{a:"Neither agree nor disagree",b:15},
{a:"Somewhat disagree",b:31},
{a:"Strongly disagree",b:2}
];


///////////////





///////////////
/// va Clinicians provide quality care to veterans
/////////
 

var data_va_quality = [
{a:"Strongly agree",b:19},
{a:"Somewhat agree",b:39},
{a:"Neither agree nor disagree",b:14},
{a:"Somewhat disagree",b:17},
{a:"Strongly disagree",b:11}
];

var dummydata_va_quality = [
{a:"Strongly agree",b:6},
{a:"Somewhat agree",b:26},
{a:"Neither agree nor disagree",b:15},
{a:"Somewhat disagree",b:31},
{a:"Strongly disagree",b:2}
];


///////////////







///////////////
/// non va Clinicians understand the medical needs of veterans
/////////
 

var data_va_understand = [
{a:"Strongly agree",b:27},
{a:"Somewhat agree",b:39},
{a:"Neither agree nor disagree",b:25},
{a:"Somewhat disagree",b:6},
{a:"Strongly disagree",b:3}
];

var dummydata_va_understand = [
{a:"Strongly agree",b:6},
{a:"Somewhat agree",b:26},
{a:"Neither agree nor disagree",b:15},
{a:"Somewhat disagree",b:31},
{a:"Strongly disagree",b:2}
];


///////////////





///////////////
/// non va Clinicians provide quality care to veterans
/////////
 

var data_va_quality = [
{a:"Strongly agree",b:11},
{a:"Somewhat agree",b:33},
{a:"Neither agree nor disagree",b:33},
{a:"Somewhat disagree",b:17},
{a:"Strongly disagree",b:6}
];

var dummydata_va_quality = [
{a:"Strongly agree",b:6},
{a:"Somewhat agree",b:26},
{a:"Neither agree nor disagree",b:15},
{a:"Somewhat disagree",b:31},
{a:"Strongly disagree",b:2}
];


///////////////










///////////////
/// best describes your experience scheduling appointments with the following
/////////
 


var data_va_scheduling_prim = [
{a:"Extremely easy",b:34},
{a:"Somewhat easy",b:21},
{a:"Neither easy nor difficult",b:20},
{a:"Somewhat difficult",b:11},
{a:"Extremely difficult",b:14}
];

var dummydata_va_scheduling_prim = [
{a:"Extremely easy",b:11},
{a:"Somewhat easy",b:25},
{a:"Neither easy nor difficult",b:11},
{a:"Somewhat difficult",b:22},
{a:"Extremely difficult",b:16}
];


///////////////


  

var data_va_scheduling_mental = [
{a:"Extremely easy",b:31},
{a:"Somewhat easy",b:20},
{a:"Neither easy nor difficult",b:21},
{a:"Somewhat difficult",b:13},
{a:"Extremely difficult",b:15}
];

var dummydata_va_scheduling_mental = [
{a:"Extremely easy",b:11},
{a:"Somewhat easy",b:25},
{a:"Neither easy nor difficult",b:11},
{a:"Somewhat difficult",b:22},
{a:"Extremely difficult",b:16}
];


///////////////



var data_va_scheduling_special = [
{a:"Extremely easy",b:26},
{a:"Somewhat easy",b:25},
{a:"Neither easy nor difficult",b:11},
{a:"Somewhat difficult",b:22},
{a:"Extremely difficult",b:16}
];

var dummydata_va_scheduling_special = [
{a:"Extremely easy",b:11},
{a:"Somewhat easy",b:25},
{a:"Neither easy nor difficult",b:11},
{a:"Somewhat difficult",b:22},
{a:"Extremely difficult",b:16}
];


///////////////





////////////
///////////////
/// Rate your level of satisfaction with the following providers
/////////
 
  

var data_va_satisfaction_prim = [
{a:"Extremely easy",b:28},
{a:"Somewhat easy",b:29},
{a:"Neither easy nor difficult",b:14},
{a:"Somewhat difficult",b:14},
{a:"Extremely difficult",b:15}
];

var dummydata_va_satisfaction_prim = [
{a:"Extremely easy",b:26},
{a:"Somewhat easy",b:25},
{a:"Neither easy nor difficult",b:11},
{a:"Somewhat difficult",b:22},
{a:"Extremely difficult",b:16}
];


///////////////



var data_va_satisfaction_special = [
{a:"Extremely easy",b:20},
{a:"Somewhat easy",b:33},
{a:"Neither easy nor difficult",b:19},
{a:"Somewhat difficult",b:15},
{a:"Extremely difficult",b:13}
];

var dummydata_va_satisfaction_special = [
{a:"Extremely easy",b:26},
{a:"Somewhat easy",b:25},
{a:"Neither easy nor difficult",b:11},
{a:"Somewhat difficult",b:22},
{a:"Extremely difficult",b:16}
];


///////////////



var data_va_satisfaction_mental = [
{a:"Extremely easy",b:28},
{a:"Somewhat easy",b:29},
{a:"Neither easy nor difficult",b:14},
{a:"Somewhat difficult",b:14},
{a:"Extremely difficult",b:15}
];

var dummydata_va_satisfaction_mental = [
{a:"Extremely easy",b:26},
{a:"Somewhat easy",b:25},
{a:"Neither easy nor difficult",b:11},
{a:"Somewhat difficult",b:22},
{a:"Extremely difficult",b:16}
];


///////////////










///////////////
/// Rate your level of satisfaction with the non va following providers
/////////
 
  

var data_va_scheduling_non_prim = [
{a:"Extremely easy",b:50},
{a:"Somewhat easy",b:34},
{a:"Neither easy nor difficult",b:10},
{a:"Somewhat difficult",b:4},
{a:"Extremely difficult",b:2}
];

var dummydata_va_scheduling_non_prim = [
{a:"Extremely easy",b:26},
{a:"Somewhat easy",b:25},
{a:"Neither easy nor difficult",b:11},
{a:"Somewhat difficult",b:22},
{a:"Extremely difficult",b:16}
];


///////////////



  

var data_va_scheduling_non_mental = [
{a:"Extremely easy",b:44},
{a:"Somewhat easy",b:32},
{a:"Neither easy nor difficult",b:14},
{a:"Somewhat difficult",b:6},
{a:"Extremely difficult",b:4}
];

var dummydata_va_scheduling_non_mental = [
{a:"Extremely easy",b:26},
{a:"Somewhat easy",b:25},
{a:"Neither easy nor difficult",b:11},
{a:"Somewhat difficult",b:22},
{a:"Extremely difficult",b:16}
];


///////////////




  

var data_va_scheduling_non_spec = [
{a:"Extremely easy",b:43},
{a:"Somewhat easy",b:37},
{a:"Neither easy nor difficult",b:13},
{a:"Somewhat difficult",b:4},
{a:"Extremely difficult",b:3}
];

var dummydata_va_scheduling_non_spec = [
{a:"Extremely easy",b:26},
{a:"Somewhat easy",b:25},
{a:"Neither easy nor difficult",b:11},
{a:"Somewhat difficult",b:22},
{a:"Extremely difficult",b:16}
];


///////////////











/*


////////
////////////
//// va health care continued
///////////////
/// Clinicians provide quality care to veterans
var dummydata_va_d = [
{a:"Strongly Agree",b:13},
{a:"Agree",b:54},
{a:"Neither Agree Nor Disagree",b:2},
{a:"Disagree",b:2},
{a:"Strongly Disagree",b:20},
{a:"No Opinion",b:9}
];

var data_va_d = [
{a:"Strongly Agree",b:11},
{a:"Agree",b:37},
{a:"Neither Agree Nor Disagree",b:21},
{a:"Disagree",b:18},
{a:"Strongly Disagree",b:10},
{a:"No Opinion",b:3}
];
///////////////



*/







////
//// loans number
var numero_va_a = [28];

////
//// loans number
var numero_va_b = [38];
////
//// loans number
var numero_va_c = [90];


/*


var dummydata_va_e = [
{a:"Strongly Agree",b:13},
{a:"Agree",b:54},
{a:"Neither Agree Nor Disagree",b:2},
{a:"Disagree",b:2},
{a:"Strongly Disagree",b:20},
{a:"No Opinion",b:9}

];

var data_va_e = [
{a:"Strongly Agree",b:14},
{a:"Agree",b:48},
{a:"Neither Agree Nor Disagree",b:23},
{a:"Disagree",b:5},
{a:"Strongly Disagree",b:2},
{a:"No Opinion",b:8}
];



var dummydata_va_g = [
{a:"Strongly Agree",b:2},
{a:"Agree",b:54},
{a:"Neither Agree Nor Disagree",b:20},
{a:"Disagree",b:10},
{a:"Strongly Disagree",b:10},
{a:"No Opinion",b:2}

];

var data_va_g = [
{a:"Strongly Agree",b:15},
{a:"Agree",b:45},
{a:"Neither Agree Nor Disagree",b:22},
{a:"Disagree",b:7},
{a:"Strongly Disagree",b:3},
{a:"No Opinion",b:8}
];





///////////////
/// Clinicians provide timely care to veterans
var dummydata_va_h = [
{a:"Strongly Agree",b:26},
{a:"Agree",b:15},
{a:"Neither Agree Nor Disagree",b:44},
{a:"Disagree",b:2},
{a:"Strongly Disagree",b:10},
{a:"No Opinion",b:3}

];

var data_va_h = [
{a:"Strongly Agree",b:12},
{a:"Agree",b:41},
{a:"Neither Agree Nor Disagree",b:20},
{a:"Disagree",b:16},
{a:"Strongly Disagree",b:8},
{a:"No Opinion",b:3}
];
////////////////////
////////////
//// Clinicians understand the medical needs of veterans
var dummydata_va_i = [
{a:"Strongly Agree",b:16},
{a:"Agree",b:54},
{a:"Neither Agree Nor Disagree",b:3},
{a:"Disagree",b:10},
{a:"Strongly Disagree",b:10},
{a:"No Opinion",b:7}

];

var data_va_i = [
{a:"Strongly Agree",b:4},
{a:"Agree",b:24},
{a:"Neither Agree Nor Disagree",b:36},
{a:"Disagree",b:21},
{a:"Strongly Disagree",b:6},
{a:"No Opinion",b:9}

];



*/


/////////
//// familiar with choice program
//// 


var data_va_familiar = [
{a:"Yes",b:28},
{a:"No",b:50},
{a:"No Opinion",b:22}
];

var dummydata_va_familiar = [
{a:"Yes",b:41},
{a:"No",b:27},
{a:"No Opinion",b:18}
];


//////////
//////have used choice program
//// 

var numero_va_choice = [39];

////
//// support extensio of Choice Prog
var numero_va_e = [91];
////

////////////////////
////////////
//// Experience with Choice Program

var data_va_choice_exp = [
{a:"Excellent",b:19},
{a:"Good",b:31},
{a:"Average",b:21},
{a:"Poor",b:15},
{a:"Terrible",b:14}
 ];


var dummydata_va_choice_exp = [
{a:"Excellent",b:15},
{a:"Good",b:22},
{a:"Average",b:35},
{a:"Poor",b:13},
{a:"Terrible",b:15}
];


////
//// va mission act
var numero_va_mission = [84];
////


 
////////////////
////// support privatization of va  
/////////
 

var data_va_private = [
{a:"Definitely yes",b:23},
{a:"Probably yes",b:21},
{a:"Might or might not",b:26},
{a:"Probably not",b:13},
{a:"Definitely not",b:17} 
];


var dummydata_va_private = [
{a:"Definitely yes",b:8},
{a:"Probably yes",b:8},
{a:"Might or might not",b:8},
{a:"Probably not",b:8},
{a:"Definitely not",b:44} 
];


////
//// loans number
var numero_va_f = [76];
////


////////////////////
////////////
//// Satisfaction with Bene


var dummydata_va_k = [
{a:"Satisfied",b:40},
{a:"Not Satisfied",b:24},
{a:"Have Not Used",b:36} 

];

var data_va_k = [
{a:"Satisfied",b:58},
{a:"Not Satisfied",b:25},
{a:"Have Not Used",b:17} 
];


//

var dummydata_va_l = [
{a:"Satisfied",b:40},
{a:"Not Satisfied",b:24},
{a:"Have Not Used",b:36} 

];

var data_va_l = [
{a:"Satisfied",b:14},
{a:"Not Satisfied",b:8},
{a:"Have Not Used",b:78} 
];

//

var dummydata_va_m = [
{a:"Satisfied",b:40},
{a:"Not Satisfied",b:24},
{a:"Have Not Used",b:36} 

];

var data_va_m = [
{a:"Satisfied",b:69},
{a:"Not Satisfied",b:15},
{a:"Have Not Used",b:16} 
];

//

var dummydata_va_n = [
{a:"Satisfied",b:40},
{a:"Not Satisfied",b:24},
{a:"Have Not Used",b:36} 

];

var data_va_n = [
{a:"Satisfied",b:53},
{a:"Not Satisfied",b:5},
{a:"Have Not Used",b:42} 
];

//
 //

var dummydata_va_o = [
{a:"Satisfied",b:40},
{a:"Not Satisfied",b:24},
{a:"Have Not Used",b:36} 

];

var data_va_o = [
{a:"Satisfied",b:17},
{a:"Not Satisfied",b:10},
{a:"Have Not Used",b:73} 
];

//

var dummydata_va_p = [
{a:"Satisfied",b:40},
{a:"Not Satisfied",b:24},
{a:"Have Not Used",b:36} 

];

var data_va_p = [
{a:"Satisfied",b:17},
{a:"Not Satisfied",b:14},
{a:"Have Not Used",b:69} 
];

 
//

var dummydata_va_q = [
{a:"Satisfied",b:40},
{a:"Not Satisfied",b:24},
{a:"Have Not Used",b:36} 

];

var data_va_q = [
{a:"Satisfied",b:8},
{a:"Not Satisfied",b:8},
{a:"Have Not Used",b:84} 
];

 
//////////////////////////////
 ////have used choice program
//// 
 //////////////////////////////
 

////////
//////////////////////////////
//// va health care utilization
//////////////////////////////




//////////////////////////////
//////////////////////////////
//////////////////////////////
/////
/////// post-9/11 GI Bill
//////////////////////////////
//////////////////////////////
//////////////////////////////

/////
/////// post-9/11 GI Bill eligibility


var data_gi_eligible = [
{a:"Eligible",b:77},
{a:"Unsure",b:14},
{a:"Ineligible",b:9}
];



var dummydata_gi_eligible = [
{a:"Eligible",b:2},
{a:"Unsure",b:14},
{a:"Ineligible",b:98}
];




/////
/////// post-9/11 GI Bill used

 

var data_gi_use = [
{a:"Am Using",b:14},
{a:"Have Used",b:50},
{a:"Transfered to Dependent",b:11},
{a:"Intend to Use",b:18},
{a:"Plan not to use",b:7}
];



var dummydata_gi_use = [
{a:"Am Using",b:4},
{a:"Have Used",b:4},
{a:"Transfered to Dependent",b:8},
{a:"Intend to Use",b:78},
{a:"Plan not to use",b:10}
];



 
 ////
//   
////////// 


/////
/////// post-9/11 GI Bill graduated

 
var data_gi_grad = [
{a:"Yes",b:61},
{a:"No",b:18},
{a:"Still in school",b:21}
];



var dummydata_gi_grad = [
{a:"Yes",b:14},
{a:"No",b:50},
{a:"Still in school",b:7}
];



 
 ////
//   
////////// 


/////
/////// post-9/11 GI Bill rate exp

 
 
var data_gi_exp = [
{a:"Excellent",b:43},
{a:"Good",b:37},
{a:"Average",b:14},
{a:"Poor",b:4},
{a:"Terrible",b:2}
];



var dummydata_gi_exp = [
{a:"Excellent",b:11},
{a:"Good",b:11},
{a:"Average",b:11},
{a:"Poor",b:18},
{a:"Terrible",b:21}
];

////////
///////////



/////
/////// How important is the Post-9/11 GI Bill for the following

 ///// transition
 
var data_gi_imp_trans = [
{a:"Extremely important",b:62},
{a:"Very important",b:25},
{a:"Moderately important",b:9},
{a:"Slightly important",b:2},
{a:"Not at all important",b:2}
];



var dummydata_gi_imp_trans = [
{a:"Extremely important",b:23},
{a:"Very important",b:37},
{a:"Moderately important",b:14},
{a:"Slightly important",b:4},
{a:"Not at all important",b:2}
];


 ///// recruitment
 
var data_gi_imp_recruit = [
{a:"Extremely important",b:46},
{a:"Very important",b:32},
{a:"Moderately important",b:16},
{a:"Slightly important",b:3},
{a:"Not at all important",b:3}
];



var dummydata_gi_imp_recruit = [
{a:"Extremely important",b:23},
{a:"Very important",b:37},
{a:"Moderately important",b:14},
{a:"Slightly important",b:4},
{a:"Not at all important",b:2}
];



 ///// retention
 
var data_gi_imp_retention = [
{a:"Extremely important",b:35},
{a:"Very important",b:27},
{a:"Moderately important",b:24},
{a:"Slightly important",b:7},
{a:"Not at all important",b:7}
];



var dummydata_gi_imp_retention = [
{a:"Extremely important",b:23},
{a:"Very important",b:37},
{a:"Moderately important",b:14},
{a:"Slightly important",b:4},
{a:"Not at all important",b:2}
];



 
 ////
//   
//////////  
////
//////////   
////





 //////////////////////////
 //////////////
 //////// Transition Experiences
 //
 ////////
///When asked if they experienced challenges when transitioning out of the military
 ////  

var dummydata_tran_a = [
{a:"None",b:23},
{a:"Few",b:23},
{a:"Some",b:25},
{a:"Many",b:25}
];

var data_tran_a = [
{a:"None",b:10},
{a:"Few",b:16},
{a:"Some",b:42},
{a:"Many",b:32}
];
////
//

////
////  
var numero_tran_a = [42];

var numero_tran_b = [66];

var numero_tran_c = [25];

var numero_tran_d = [63];

var numero_tran_e = [23];

 
///
////////////////////////
////////

////
///////////////
///////////
///////////


var scrollVis = function() {
  // constants to define the size
  // and margins of the vis area.

  var width = window.innerWidth,
    height = window.innerHeight;

  var margin = {
    top: 10,
    left: 20,
    bottom: 80,
    right: 10
  };

  /////
  var countslides = 0;
  // Keep track of which visualization
  // we are on and which was the last
  // index activated. When user scrolls
  // quickly, we want to call all the
  // activate functions that they pass.
  var lastIndex = -1;
  var activeIndex = 0;

  // main svg used for visualization
  var svg = null;

  // d3 selection that will be used
  // for displaying visualizations
  var g = null;

  // When scrolling to a new section
  // the activation function for that
  // section is called.
  var activateFunctions = [];
  // If a section has an update function
  // then it is called while scrolling
  // through the section with the current
  // progress through the section.
  var updateFunctions = [];




  /**
   * chart
   *
   * @param selection - the current d3 selection(s)
   *  to draw the visualization in. For this
   *  example, we will be drawing it in #vis
   */
  var chart = function(selection) {
    selection.each(function() {
      setupSections();
    });
  };

  /**
   * setupVis - creates initial elements for all
   * sections of a visualization.
   */
  setupVis = function() {};

  /**
   * setupSections - each section is activated
   * by a separate function. Here we associate
   * these functions to the sections based on
   * the section's index.
   *
   */
  setupSections = function() {
    // activateFunctions are called each
    // time the active section changes

    activateFunctions[0] = showTitle0;
    activateFunctions[1] = showTitle1;
    activateFunctions[2] = showTitle2;
    activateFunctions[3] = showTitle3;
    activateFunctions[4] = showTitle4;
    activateFunctions[5] = showTitle5;
    activateFunctions[6] = showTitle6;
    activateFunctions[7] = showTitle7;
    activateFunctions[8] = showTitle8;
    activateFunctions[9] = showTitle9;
    activateFunctions[10] = showTitle10;
    activateFunctions[11] = showTitle11;
    activateFunctions[12] = showTitle12;
    activateFunctions[13] = showTitle13;

    activateFunctions[14] = showTitle14;
    activateFunctions[15] = showTitle15;
    activateFunctions[16] = showTitle16;
    activateFunctions[17] = showTitle17;
    activateFunctions[18] = showTitle18;

    activateFunctions[19] = showTitle19;
    activateFunctions[20] = showTitle20;
    activateFunctions[21] = showTitle21;
    activateFunctions[22] = showTitle22;
    activateFunctions[23] = showTitle23;
    activateFunctions[24] = showTitle24;
    activateFunctions[25] = showTitle25;
    activateFunctions[26] = showTitle26;
    activateFunctions[27] = showTitle27;

    // updateFunctions are called while
    // in a particular section to update
    // the scroll progress in that section.
    // Most sections do not need to be updated
    // for all scrolling and so are set to
    // no-op functions.
    for (var i = 0; i < 28 + 1; i++) {
 //////   for (var i = 0; i < window.slides.length + 1; i++) {
      updateFunctions[i] = function() {};
    }

      };

  /**
   * ACTIVATE FUNCTIONS
   *
   * These will be called their
   * section is scrolled to.
   *
   * General pattern is to ensure
   * all content for the current section
   * is transitioned in, while hiding
   * the content for the previous section
   * as well as the next section (as the
   * user may be scrolling up or down).
   *
   */

  /**
   *
   */
   function showTitle0() {
    //////////////
    ////////////
    /////////

    ////////////////////////////////////////////
    ///////// SET INITIAL CONTAINER VISIBILITY
    ////////////////////////////////////////////

    var vis = document.getElementById("vis");
    vis.setAttribute("style", "display:inline-block; ");
    
    var navbarmd = document.getElementById("navbar-md");
    navbarmd.setAttribute("style", "visibility:hidden; ");

 
    var logoOpener = document.getElementById("logoOpener");
    logoOpener.setAttribute("style", "display:inline-block; ");


    

    var bgvid0 = document.getElementById("bgvid0");
    bgvid0.setAttribute("style", "visibility:visible; ");

    

    var stepper = document.getElementById("step-1");
    stepper.setAttribute("style", "visibility:hidden; ");

 


    var greenoverlay = document.getElementById("greenoverlay");
    greenoverlay.setAttribute("style", "visibility:hidden; ");


    var greenoverlay = document.getElementById("greenoverlaycover");
    greenoverlay.setAttribute("style", "visibility:visible; ");

 
    var containerA = document.getElementById("container-1");
    containerA.setAttribute("style", "visibility:hidden; ");

 
 
    ////////////////////////////////////////////
    ////////////////////////////////////////////
    /////////////////////////////
  
 


///////////
///////////
/////////
/*  if (!numerotrigger) {

  
var start_val = 0,
    duration = 8000,
    end_val = [12, 1200000, 7300];

var qSVG = d3.select("#covernumeros").append("svg").attr("width", width).attr("height", height);

qSVG.selectAll(".txttxt")
    .data(end_val)
    .enter()
    .append("text")
    .text(start_val)
    .attr("class", "txttxt")
    .attr("x", 26)
    .attr("y", function(d, i) {
        return 100 + i * 72
    })
    .transition()
    .duration(3000)
        .tween("text", function(d) {
            var i = d3.interpolate(this.textContent, d),
                prec = (d + "").split("."),
                round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;

            return function(t) {
                this.textContent = Math.round(i(t) * round) / round;
            };
        });

        ////////
        ///////
        ////////
        ////////////
        ////////
        


 numerotrigger=1;

} */


///////////
//////////////
//////////////////

      if (!trigger) {

  
  
  
  
  
  
  
  
  
//data_age
drawPieChart(dummydata_age);
 
  
  //data_community
drawPieChart(dummydata_community);

//data_marital
drawPieChart(dummydata_marital);

  
//data_income
drawHBarChart(dummydata_income);


//data_school
drawHBarChartsm(dummydata_school);
 
 //data_ethnicity
drawStackChart(dummydata_ethnicity);
    
    
//data_gender
drawHBarChart(dummydata_gender);


//////////////////////////////////////////////
//////////////////////////////////////////
///////////data_age
//////////drawHBarChart(dummydata_age,"svg4");
//////////////////////////////////////////////////
//////////////data_community
//////////////drawHBarChart(dummydata_community,"svg5");
////////////////////////////////////////////////////

 
    
//data_orientation
drawStackChart(dummydata_orientation);

 
//data_children
drawStackChart(dummydata_children);
    

    
//data_religion
drawHBarChart(dummydata_religion);





 
 ///////////
 /////////
 /////////

 
//data_currently
 drawPieChart(dummydata_currently);

 
  //data_post
drawPieChart(dummydata_post);

 

  // data_member
drawPieChart(dummydata_member);






    
//data_branch
 drawPieChart(dummydata_branch);

 
  //data_officer
drawPieChart(dummydata_officer);

 

  // data_recommend
drawPieChart(dummydata_milserve_a);






 //data_interact
drawStackChart(dummydata_interact);


//data_milserve_a
drawStackChart(dummydata_milserve_a);

    
// data_milserve_b
drawStackChart(dummydata_milserve_b);

//data_milserve_c
drawStackChart(dummydata_milserve_c);

    
    
    
// data_milserve_separate
drawHBarChart(dummydata_milserve_separate);
    
    
    
    
// data_discharge
drawStackChart(dummydata_discharge);


// data_milserve_separate
/////////drawStackChart(dummydata_milserve_separate);


   startnumerosA(numero_natg);



////////
/////////////
///////




//ideology
drawPieChart(dummydata_q);

    
//candidate support
drawPieChart(dummydata_r);

//candidate support
drawPieChart(dummydata_reg);

 
   startsmallnumerosA(numeroB);

 ///////////////////////////////////// startsmallnumerosB(numeroC);



  ////// startnumerosB(numeroD);



    startsmallnumerosA(numeroE);

//////


//////




  //mj  
drawStackChart(data_s);
//mh
drawStackChart(data_t);


  //fa  
drawStackChart(data_u);
//fa
drawStackChart(data_v);





  //fa  
drawStackChart(data_w);
//fa
drawStackChart(data_x);
//fa
drawStackChart(data_y);

 ////////

 //////
 //////
 //////
 //////////


//////////////////////////////
////////// 
//////////////////////////////
////////// Gun Ownership & Storage
 /////////////////////////////
 /////////////////////////////

startsmallnumerosA(numero_guns);

drawHBarChart(data_guns_own_aa);


//////////
///////////////////
//////////////////////////////
////////// military service
 /////////////////////////////
//   
drawStackChart(data_milserve_a);
//   
drawStackChart(data_milserve_b);
//   
drawStackChart(data_milserve_c);
//    
drawStackChart(data_milserve_d);
//    
drawStackChart(data_milserve_e);



////////////////////
////////// equality
 ////////////////
//   
drawStackChart(data_equality_a);
//   
drawStackChart(data_equality_c);
//   
//////////////////drawStackChart(data_equality_b);
// impact  
/////////////drawStackChart(data_equality_d);




////
///// perceptions
///////perceptions numbers
  

   startnumerosA(numeroSupport);

   startnumerosB(numeroUnderstand);

   startnumerosC(numeroHire);


/////////////
//////////
 ////////////////
//obama  
drawStackChart(data_p_obama);
//trump  
drawStackChart(data_p_trump);
//congress  
drawStackChart(data_p_congress);





/////



/////////////
///////womens
/////////////////
  //issues  
drawStackChart(data_wom_a);
//////////
/////////////
//women in military questions  
drawStackChart(data_wom_b);
//womens  
drawStackChart(data_wom_c);
//womens  
drawStackChart(data_wom_d);

//womens  
drawStackChart(data_wom_e);
//womens  
drawStackChart(data_wom_f);
//womens  
drawStackChart(data_wom_g);
//womens
//////
/////

///////////////
 
startnumerosA(numero_wom_a);
///
startnumerosB(numero_wom_b);
 /////////////////
//////////////////////////////////////////////////////////////////

 /////////////
 /////////////////
//When asked their level of agreement with the following statement  
//womens  
/// The civilian public treats women veterans with respect
drawStackChart(data_wom_g_);
//womens  
//// Fellow service members treat women service members with respect
drawStackChart(data_wom_h_);
//womens  
drawStackChart(data_wom_i_);
//womens  
drawStackChart(data_wom_j_);
//womens  
drawStackChart(data_wom_k_);
//womens  
drawStackChart(data_wom_k__);
//womens

 /////////////
 /////////////////
 ////////////////
 ///// When asked whether VA adequately provides
 //////////////////////
//womens  
drawStackChart(data_wom_n);
//womens  
drawStackChart(data_wom_o);
//womens  
drawStackChart(data_wom_p);
//womens  
drawStackChart(data_wom_q);
//womens  
drawStackChart(data_wom_r);
//womens
///////////////////
///////////////


startnumerosA(numero_wom_c);
///
startnumerosB(numero_wom_d);
///
startnumerosC(numero_wom_e);
/////////////
 /////////////////

///////////////////
//// rate the following
/// 
 /////////////
 /////////////////
//womens  
///// va support for women
drawStackChart(data_wom_s);
//womens  
drawStackChart(data_wom_t);
//womens  
drawStackChart(data_wom_u);
//womens  
//// Quality of VA Benefits
drawStackChart(data_wom_v);
/////
///
startsmallnumerosA(numero_wom_f);
///
startsmallnumerosA(numero_wom_g);
////
//////////////////////////////////


 /////////////
 ///// sexuak assault
 /////////////////
//womens  
drawStackChart(data_wom_y);
//womens  
drawStackChart(data_wom_z);
//womens  
drawStackChart(data_wom_aa);
//womens  
drawStackChart(data_wom_bb);

//womens  
drawStackChart(data_wom_cc);
//womens  
drawStackChart(data_wom_dd);
//womens 
/// Survivors who experienced retaliation after reporting 
drawStackChart(data_wom_ee);
//womens  
// Survivors who experienced retaliation after reporting
drawStackChart(data_wom_ff);
/////////
//////
drawStackChart(data_wom_gg);
//////////
/////
drawStackChart(data_wom_hh);
//////////
/////
drawStackChart(data_wom_ii);
//////////
/////
drawStackChart(data_wom_jj);
//////////
/////


///////////////////
//// post 9/11 gi bill
/////

drawPieChart(dummydata_gib_a);

drawPieChart(dummydata_gib_b);

drawPieChart(dummydata_gib_c);

//////////
startsmallnumerosA(numero_gib_nocuts);

/////
drawStackChart(data_gib_d);


drawStackChart(data_gib_e);


drawStackChart(data_gib_f);


 //////////
/////
////// education
///
 //////////
startnumerosA(numero_ed_a);

startnumerosB(numero_ed_b);

startnumerosC(numero_ed_c);


drawStackChart(data_ed_a);

drawStackChart(data_ed_b);

drawStackChart(data_ed_c);




drawHBarChart(data_ed_d);

 //////////
/////
//////////
//// employment

drawStackChart(data_employ_a);

drawStackChart(data_employ_b);

drawStackChart(data_employ_c);

drawStackChart(data_employ_d);

drawHBarChart(data_employ_e);

startnumerosA(numero_employ_a);

startnumerosB(numero_employ_b);

startnumerosC(numero_employ_c);

startnumerosA(numero_employ_d);



////////
/// va health care utilization
///////

  //age  
drawPieChart(dummydata_va_a);
//gender
drawPieChart(dummydata_va_b);

//?
drawPieChart(dummydata_va_c);


drawHBarChart(data_va_bars);


startnumerosA(numero_va_a);

startnumerosB(numero_va_b);

startnumerosC(numero_va_c);


//////////
////
//// va health care utilization

drawStackChart(data_va_d);

drawStackChart(data_va_e);

drawStackChart(data_va_f);

drawStackChart(data_va_g);

drawStackChart(data_va_h);

drawStackChart(data_va_i);


drawStackChart(data_va_j);



startnumerosA(numero_va_d);

startnumerosB(numero_va_e);

startnumerosA(numero_va_f);



drawStackChart(data_va_k);


drawStackChart(data_va_l);


drawStackChart(data_va_m);


drawStackChart(data_va_n);


drawStackChart(data_va_o);


drawStackChart(data_va_p);


drawStackChart(data_va_q);

/////
///////
//// mental health
startnumerosA(numero_mental_a);

 
startnumerosB(numero_mental_b);

startnumerosC(numero_mental_c);

drawStackChart(data_mental_a);


drawStackChart(data_mental_b);




/////
///////
//// suicide 
startnumerosA(numero_suicide_a);

 
drawHBarChart(data_suicide_aa);

///////////drawHBarChartsm(data_suicide_b);
///////drawHBarChartsm(data_suicide_c);
drawHBarChartsm(data_suicide_d);
drawHBarChartsm(data_suicide_e);


/////
//// general health
// 
/// service related injuries
///
drawHBarChart(data_health_a);


drawHBarChart(data_health_b);


startnumerosA(numero_health_a);
startnumerosB(numero_health_b);
startnumerosC(numero_health_c);
startnumerosA(numero_health_d);
startnumerosB(numero_health_e);
startnumerosC(numero_health_f);


drawStackChart(data_health_c);
drawStackChart(data_health_d);


drawHBarChartsm(data_health_e);

///
//////
///////////////
/// transition experiences
///////////

drawStackChart(data_tran_a);
startnumerosA(numero_tran_a);
startnumerosB(numero_tran_b);
startnumerosC(numero_tran_c);
startnumerosA(numero_tran_d);
startnumerosB(numero_tran_e);





///
/////
/*

*/

 
////////////
///////////////
//////////////////
 trigger=1;
iii='';
} else {



/*
  //gender
changePieChart(dummydata_a,"svg0");


  //gender
changePieChart(dummydata_b,"svg1");

//?
changePieChart(dummydata_c,"svg2");

    
//donut
changePieChart(dummydataset,"svg3");




  //gender
changePieChart(dummydata_e,"svg4");


  //gender
changePieChart(dummydata_f,"svg5");

//?
changePieChart(dummydata_g,"svg6");

    
//donut
changePieChart(dummydata_h,"svg7");






////////////
////
///////
///////
//////////




  //gender
changePieChart(dummydata_i,"svg8");


  //gender
changePieChart(dummydata_j,"svg9");

//?
changePieChart(dummydata_k,"svg10");

    
//donut
changePieChart(dummydata_l,"svg11");



//?
changePieChart(dummydata_q,"svg16");

    
//donut
changePieChart(dummydata_r,"svg17");

 




/////////////
/////////////////
  //womens  
drawStackChart(dummydata_wom_a,"svg8");
//////////
/////////////
//womens///////////////////
//womens  
drawStackChart(dummydata_wom_b,"svg9");
//womens  
drawStackChart(dummydata_wom_c,"svg10");
//womens  
drawStackChart(dummydata_wom_d,"svg11");
//womens  
drawStackChart(dummydata_wom_e,"svg12");
//womens  
drawStackChart(dummydata_wom_f,"svg13");
//womens  
drawStackChart(dummydata_wom_g,"svg14");
//womens

 
 /////////////



///////////////
startnumerosA(numero_wom_a);
///
startnumerosB(numero_wom_b);
/////////////
 /////////////////




 /////////////////
//womens  
drawStackChart(dummydata_wom_g_,"svg17");
//womens  
drawStackChart(dummydata_wom_h_,"svg18");
//womens  
drawStackChart(dummydata_wom_i_,"svg19");
//womens  
drawStackChart(dummydata_wom_j_,"svg20");
//womens  
drawStackChart(dummydata_wom_k_,"svg21");
//womens  
drawStackChart(dummydata_wom_k__,"svg22");
//womens
///////////////////


 /////////////
 /////////////////
//womens  
drawStackChart(dummydata_wom_n,"svg23");
//womens  
drawStackChart(dummydata_wom_o,"svg24");
//womens  
drawStackChart(dummydata_wom_p,"svg25");
//womens  
drawStackChart(dummydata_wom_q,"svg26");
//womens  
drawStackChart(dummydata_wom_r,"svg27");
//womens
///////////////////
///////////////
 
///////////////////
///////////////
startnumerosA(numero_wom_c);
///
startnumerosB(numero_wom_d);
///
startnumerosC(numero_wom_e);
///
startsmallnumerosA(numero_wom_f);
///
startsmallnumerosB(numero_wom_g);
/////////////
 /////////////////



 /////////////
 /////////////////
//womens  
drawStackChart(dummydata_wom_s,"svg33");
//womens  
drawStackChart(dummydata_wom_t,"svg34");
//womens  
drawStackChart(dummydata_wom_u,"svg35");
//womens  
drawStackChart(dummydata_wom_v,"svg36");
//womens  




 /////////////
 /////////////////
//womens  
drawStackChart(dummydata_wom_y,"svg37");
//womens  
drawStackChart(dummydata_wom_z,"svg38");
//womens  
drawStackChart(dummydata_wom_aa,"svg39");
//womens  
drawStackChart(dummydata_wom_bb,"svg40");

//womens  
drawStackChart(dummydata_wom_cc,"svg41");
//womens  
drawStackChart(dummydata_wom_dd,"svg42");
//womens  
drawStackChart(dummydata_wom_ee,"svg43");
//womens  
drawStackChart(dummydata_wom_ff,"svg44");
//womens  







 /////////////
 /////////////////
//womens  
drawStackChart(dummydata_wom_gg,"svg45");
//womens  
drawStackChart(dummydata_wom_hh,"svg46");
//womens  
drawStackChart(dummydata_wom_ii,"svg47");
//womens  
drawStackChart(dummydata_wom_jj,"svg48");

/////////
////////

 



*/

 

}
    
    ///////////
    ///////////
  }

  /**
   *
   */
  function showTitle1() {
    ////////////////////////////////////////////
    ////////// Video item to turn off
    //////////
    ///////// var videoplay = document.getElementById('bgvid0');
    ///////// videoplay.setAttribute("style", "display:none; ");
    ///////////////////////////////////////////

    var greenoverlaycover = document.getElementById("greenoverlaycover");
    greenoverlaycover.setAttribute("style", "visibility:visible; ");

 
    ////////////////////////////////////////////
    ////////// Scroll prompt image turned off
    var scrollimg = document.getElementById("scrollimg");
    scrollimg.setAttribute("style", "display:none; ");


    var navbarmd = document.getElementById("navbar-md");
    navbarmd.setAttribute("style", "visibility:visible; ");
    navbarmd.setAttribute("style", "z-index:99999999; ");

 var covermenu = document.getElementById("covermenu");
    covermenu.setAttribute("style", "display:none; ");

 


    var logoOpener = document.getElementById("logoOpener");
    logoOpener.setAttribute("style", "display:none; ");



    var bgvid0 = document.getElementById("bgvid0");
    bgvid0.setAttribute("style", "visibility:hidden; ");



    var greenoverlay = document.getElementById("greenoverlay");
    greenoverlay.setAttribute("style", "visibility:visible; ");


    var containerA = document.getElementById("container-1");
    containerA.setAttribute("style", "visibility:hidden; ");


  }

  /**
   *
   *
   */
   
   
  function showTitle2() {
    
      

    var containerA = document.getElementById("container-1");
    containerA.setAttribute("style", "visibility:visible; ");



    var greenoverlay = document.getElementById("greenoverlay");
    greenoverlay.setAttribute("style", "visibility:visible; ");


//////////////
/// demographic pie charts
///////////////////


iii=0;

//data_age
changePieChart(data_age,"svg0");
 
  
  //data_community
changePieChart(data_community,"svg1");

//data_marital
changePieChart(data_marital,"svg2");

  
//data_income
changeHBarChart(data_income,"svg3");


//data_school
changeHBarChartsm(data_school,"svg4");
 
 //data_ethnicity
changeStackChart(data_ethnicity,"svg5");
    
    
//data_gender
changeHBarChart(data_gender,"svg6");


//////////////////////////////////////////////
//////////////////////////////////////////
///////////data_age
//////////changeHBarChart(data_age,"svg4");
//////////////////////////////////////////////////
//////////////data_community
//////////////changeHBarChart(data_community,"svg5");
////////////////////////////////////////////////////

 
    
//data_orientation
changeStackChart(data_orientation,"svg7");

 
//data_children
changeStackChart(data_children,"svg8");
    

    
//data_religion
changeHBarChart(data_religion,"svg9");



/**/

////////
//////////
///////////////

  }

  /////////////
  //////////

  /**
   *
   */
  function showTitle3() {
  
    var containerA = document.getElementById("container-1");
    containerA.setAttribute("style", "visibility:hidden; ");

 
  //////  var greenoverlay = document.getElementById("greenoverlay");
  ///////////  greenoverlay.setAttribute("style", "visibility:hidden; ");

iii=10;
 


/////////////
 ////  charts now


//data_currently
 changePieChart(data_currently,"svg10");

 
  //data_post
changePieChart(data_post,"svg11");

 

  // data_member
changePieChart(data_member,"svg12");






    
//data_branch
 changePieChart(data_branch,"svg13");

 
  //data_officer
changePieChart(data_officer,"svg14");

 

  // data_recommend
changePieChart(data_milserve_a,"svg15");






 //data_interact
changeStackChart(data_interact,"svg16");


//data_milserve_a
changeStackChart(data_milserve_a,"svg17");

    
// data_milserve_b
changeStackChart(data_milserve_b,"svg18");

//data_milserve_c
changeStackChart(data_milserve_c,"svg19");

    
    
    
// data_milserve_separate
changeHBarChart(data_milserve_separate,"svg20");
    
    
    
    
// data_discharge
changeStackChart(data_discharge,"svg21");


// data_milserve_separate
/////////changeStackChart(data_milserve_separate,"svg19");


   startnumerosA(numero_natg,"svg22");




 /**/
//////////




/////////////
/////////////////
  //womens  

 ///////////////////////

  }

  ///////
  ///////

  /**
   *
   *
   */
  function showTitle4() {

    iii=20;

  
// data_reg
changePieChart(data_reg,"svg20");
    
// data_running
changePieChart(data_running,"svg21");
    
// data_party
changePieChart(data_party,"svg22");

 /* 
startsmallnumerosA(numeroB,"svg23");
*/

  
  }

  /////
  ////////

  /**
   *
   */
  function showTitle5() {
 //////////////////
 // THE ISSUES
/// flag burning

iii=24;

 ///////////   startsmallnumerosA(numeroE,"svg20");


   
// 
////changeStackChart(data_s,"svg21");
  
// 
////changeStackChart(data_t,"svg22");
  
// 
//////changeStackChart(data_u,"svg23");
  
// 
changeStackChart(data_v,"svg24");
  
// 
changeStackChart(data_w,"svg25");
  
// 
changeStackChart(data_x,"svg26");
  
// 
changeStackChart(data_y,"svg27");

 

    var greenoverlay = document.getElementById("greenoverlay");
    greenoverlay.setAttribute("style", "visibility:visible; ");


  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle6() {


iii=28;



//// guns

startsmallnumerosA(numero_guns,"svg28");

changeHBarChart(data_guns_own_aa,"svg29");





  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle7() {


iii=30;

//////////
///////////////////
//////////////////////////////
////////// military service
 /////////////////////////////
//   
changeStackChart(data_milserve_a,"svg30");
//   
changeStackChart(data_milserve_b,"svg31");
//   
changeStackChart(data_milserve_c,"svg32");
//    
changeStackChart(data_milserve_d,"svg33");
//    
changeStackChart(data_milserve_e,"svg34");




  }


  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle8() {

iii=35;

    ////////////////////
////////// equality
 ////////////////
//   
changeStackChart(data_equality_a,"svg35");
//   
changeStackChart(data_equality_c,"svg36");
//   
///////////////changeStackChart(data_equality_b,"svg37");
// impact  
///////////////////changeStackChart(data_equality_d,"svg38");





  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle9() {
iii=37;



////
///// perceptions
///////perceptions numbers
  

   startnumerosA(numeroSupport,"svg37");

   startnumerosB(numeroUnderstand,"svg38");

   startnumerosC(numeroHire,"svg39");

/////////////
//////////
 ////////////////
//obama  
changeStackChart(data_p_obama,"svg40");
//trump  
changeStackChart(data_p_trump,"svg41");
//congress  
changeStackChart(data_p_congress,"svg42");



  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle10() {


iii=43;



/////////////
///////womens
/////////////////
  //issues  
changeStackChart(data_wom_a,"svg43");
//////////
/////////////
//women in military questions  
changeStackChart(data_wom_b,"svg44");
//womens  
changeStackChart(data_wom_c,"svg45");
//womens  
changeStackChart(data_wom_d,"svg46");

//womens  
changeStackChart(data_wom_e,"svg47");
//womens  
changeStackChart(data_wom_f,"svg48");
//womens  
changeStackChart(data_wom_g,"svg49");
//womens
//////
/////



  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle11() {

iii=50;

    //womens
//////
/////

///////////////
 
startnumerosA(numero_wom_a,"svg50");
///
startnumerosB(numero_wom_b,"svg51");
 /////////////////
//////////////////////////////////////////////////////////////////

 /////////////
 /////////////////
//When asked their level of agreement with the following statement  
//womens  
/// The civilian public treats women veterans with respect
changeStackChart(data_wom_g_,"svg52");
//womens  
//// Fellow service members treat women service members with respect
changeStackChart(data_wom_h_,"svg53");
//womens  
changeStackChart(data_wom_i_,"svg54");
//womens  
changeStackChart(data_wom_j_,"svg55");
//womens  
changeStackChart(data_wom_k_,"svg56");
//womens  
changeStackChart(data_wom_k__,"svg57");
//womens

 /////////////
 /////////////////
 ////////////////
 ///// When asked whether VA adequately provides
 //////////////////////
//womens  
changeStackChart(data_wom_n,"svg58");
//womens  
changeStackChart(data_wom_o,"svg59");
//womens  
changeStackChart(data_wom_p,"svg60");
//womens  
changeStackChart(data_wom_q,"svg61");
//womens  
changeStackChart(data_wom_r,"svg62");
//womens
///////////////////
///////////////



  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle12() {

iii=63;

    //womens
///////////////////
///////////////


startnumerosA(numero_wom_c,"svg63");
///
startnumerosB(numero_wom_d,"svg64");
///
startnumerosC(numero_wom_e,"svg65");
/////////////
 /////////////////

///////////////////
//// rate the following
/// 
 /////////////
 /////////////////
//womens  
///// va support for women
changeStackChart(data_wom_s,"svg66");
//womens  
changeStackChart(data_wom_t,"svg67");
//womens  
changeStackChart(data_wom_u,"svg68");
//womens  
//// Quality of VA Benefits
changeStackChart(data_wom_v,"svg69");
/////
///
startsmallnumerosA(numero_wom_f,"svg70");
///
startsmallnumerosA(numero_wom_g,"svg71");
////
//////////////////////////////////





  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle13() {


iii=72;


 /////////////
 ///// sexuak assault
 /////////////////
//womens  
changeStackChart(data_wom_y,"svg72");
//womens  
changeStackChart(data_wom_z,"svg73");
//womens  
changeStackChart(data_wom_aa,"svg74");
//womens  
changeStackChart(data_wom_bb,"svg75");

//womens  
changeStackChart(data_wom_cc,"svg76");
//womens  
changeStackChart(data_wom_dd,"svg77");
//womens 
/// Survivors who experienced retaliation after reporting 
changeStackChart(data_wom_ee,"svg78");
//womens  
// Survivors who experienced retaliation after reporting
changeStackChart(data_wom_ff,"svg79");
/////////
//////
changeStackChart(data_wom_gg,"svg80");
//////////
/////
changeStackChart(data_wom_hh,"svg81");
//////////
/////
changeStackChart(data_wom_ii,"svg82");
//////////
/////
changeStackChart(data_wom_jj,"svg83");
//////////
/////



  }

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle14() {


   ///// var greenoverlay = document.getElementById("greenoverlay");
   ///// greenoverlay.setAttribute("style", "visibility:hidden; ");

iii=84;




///////////////////
//// post 9/11 gi bill
/////

changePieChart(data_gib_a,"svg84");

changePieChart(data_gib_b,"svg85");

changePieChart(data_gib_c,"svg86");

//////////
startsmallnumerosA(numero_gib_nocuts,"svg87");

/////
changeStackChart(data_gib_d,"svg88");


changeStackChart(data_gib_e,"svg89");


changeStackChart(data_gib_f,"svg90");


 //////////



  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle15() {

iii=91;

    //////////
/////
////// education
///
 //////////
startnumerosA(numero_ed_a,"svg91");

startnumerosB(numero_ed_b,"svg92");

startnumerosC(numero_ed_c,"svg93");


changeStackChart(data_ed_a,"svg94");

changeStackChart(data_ed_b,"svg95");

changeStackChart(data_ed_c,"svg96");




changeHBarChart(data_ed_d,"svg97");

 //////////
/////


  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle16() {

iii=98;


 //////////
/////
//////////
//// employment

changeStackChart(data_employ_a,"svg98");

changeStackChart(data_employ_b,"svg99");

changeStackChart(data_employ_c,"svg100");




 changeStackChart(data_employ_d,"svg101");


changeHBarChart(data_employ_e,"svg102");

startnumerosA(numero_employ_a,"svg103");

startnumerosB(numero_employ_b,"svg104");

startnumerosA(numero_employ_d,"svg105");

startnumerosC(numero_employ_c,"svg106");



////////


  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle17() {


iii=107;


////////
/// va health care utilization
///////

  //age  
changePieChart(data_va_a,"svg107");
//gender
changePieChart(data_va_b,"svg108");

//?
changePieChart(data_va_c,"svg109");


/// bar chart
changeHBarChart(data_va_bars,"svg110");


startnumerosA(numero_va_a,"svg111");



startnumerosB(numero_va_b,"svg112");

startnumerosC(numero_va_c,"svg113");


//////////
////
//// va health care utilization

changeStackChart(data_va_d,"svg114");

changeStackChart(data_va_e,"svg115");

changeStackChart(data_va_f,"svg116");

changeStackChart(data_va_g,"svg117");

changeStackChart(data_va_h,"svg118");

changeStackChart(data_va_i,"svg119");
changeStackChart(data_va_j,"svg120");

startsmallnumerosA(numero_va_d,"svg121");

startsmallnumerosA(numero_va_e,"svg122");

////




  }

  ////////////////
  /////////////////////////
  ///////////////////////

  function showTitle18() {

    ////
////
iii=123;


startnumerosA(numero_va_f,"svg123");



changeStackChart(data_va_k,"svg124");


changeStackChart(data_va_l,"svg125");


changeStackChart(data_va_m,"svg126");


changeStackChart(data_va_n,"svg127");


changeStackChart(data_va_o,"svg128");


changeStackChart(data_va_p,"svg129");


changeStackChart(data_va_q,"svg130");

/////
///////


  }

  ////////////////
  /////////////////////////
  ///////////////////////



  function showTitle19() {

iii=131;

    /////
///////
//// mental health
startnumerosA(numero_mental_a,"svg131");

startnumerosB(numero_mental_b,"svg132");

startnumerosC(numero_mental_c,"svg133");

 
changeStackChart(data_mental_a,"svg134");


changeStackChart(data_mental_b,"svg135");




  }

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle20() {

iii=136;

    startnumerosA(numero_suicide_a,"svg136");

 
changeHBarChart(data_suicide_aa,"svg137");

/////////////// changeHBarChartsm(data_suicide_b,"svg140");
/////////////// changeHBarChartsm(data_suicide_c,"svg141");
changeHBarChartsm(data_suicide_d,"svg138");
changeHBarChartsm(data_suicide_e,"svg139");



  }

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle21() {

iii=140;

    changeHBarChart(data_health_a,"svg140");


changeHBarChart(data_health_b,"svg141");


startnumerosA(numero_health_a,"svg142");
startnumerosB(numero_health_b,"svg143");
startnumerosC(numero_health_c,"svg144");
startnumerosA(numero_health_d,"svg145");
startnumerosB(numero_health_e,"svg146");
startnumerosC(numero_health_f,"svg147");



changeStackChart(data_health_c,"svg148");
changeStackChart(data_health_d,"svg149");
 
    changeHBarChartsm(data_health_e,"svg150");

  }

  ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle22() {

      
iii=151;


///
//////
///////////////
/// transition experiences
///////////

changeStackChart(data_tran_a,"svg151");
startnumerosA(numero_tran_a,"svg152");
startnumerosB(numero_tran_b,"svg153");
startnumerosC(numero_tran_c,"svg154");
startnumerosA(numero_tran_d,"svg155");
startnumerosB(numero_tran_e,"svg156");


d3.select("#mapcontain").select("svg").remove();
d3.select("#mapcontain").select("g").remove();




d3.select("#legendcontain").select("svg").remove();
d3.select("#legendcontain").select("rect").remove();


    

d3.select("body").selectAll("toolTip").remove();

    

  }

 ////////////////
  /////////////////////////
  ///////////////////////


  function showTitle23() {
 
 // media query event handler
if (window.matchMedia("(max-width: 400px)").matches) {

  //Width and height
      var w = (window.innerWidth/1.3);
 /////////////////////////     var h = (window.innerHeight/1.3);
      var h = 300;

      //Define map projection
      var projection = d3.geo.albersUsa()
                   .translate([w/2, h/2])
                   .scale([400]);
    //Define path generator
      var path = d3.geo.path()
               .projection(projection); 

  /* the viewport is at least 400 pixels wide */
} 


else if (window.matchMedia("(min-width: 401px) and (max-width: 960px)").matches) {

  //Width and height
      var w = window.innerWidth;
 /////////////////////////     var h = (window.innerHeight/1.3);
      var h = 400;

      //Define map projection
      var projection = d3.geo.albersUsa()
                   .translate([w/2, h/2])
                   .scale([700]);
    //Define path generator
      var path = d3.geo.path()
               .projection(projection); 

  /* the viewport is at least 400 pixels wide */
} 


else  {



  //Width and height
      var w = (window.innerWidth/1.3);
 //////////////////////     var h = (window.innerHeight/1.3);
      var h = 600;

      //Define map projection
      var projection = d3.geo.albersUsa()
                   .translate([w/2, h/2])
                   .scale([1080]);

    //Define path generator
      var path = d3.geo.path()
               .projection(projection); 

}
 

 

/*
  //Width and height
      var w = (window.innerWidth/1.3);
      var h = (window.innerHeight/1.3);

      //Define map projection
      var projection = d3.geo.albersUsa()
                   .translate([w/2, h/2])
                   .scale([960]);

      //Define path generator
      var path = d3.geo.path()
               .projection(projection); */

      //Define quantize scale to sort data values into buckets of color
      var color = d3.scale.quantize()

      ///      .range(["#9aada6", "#c2cec9","#efefef","#888888","#333333","#294636", "#3a634d", "#000000", "#e2d497", "#417a4f", "#cddeb7", "#78933f", "#284635"]);
    .range(["#294636","#2f513e", "#39634c","#416250","#4a705b","#5b836d", "#afb48b", "#ced49e", "#deea81", "#d0e05a", "#dcf428"]);
 
              //////////  .range(["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"]);
                 //Colors taken from colorbrewer.js, included in the D3 download




      //Create SVG element
      var legsvg = d3.select("#legendcontain")
            .append("svg")
            .attr("width", (window.innerWidth/1.3)+"px")
            .attr("height", "40px");

//Append a defs (for definition) element to your SVG
var defs = legsvg.append("defs");

//Append a linearGradient element to the defs and give it a unique id
var linearGradient = defs.append("linearGradient")
    .attr("id", "linear-gradient");



//Draw the rectangle and fill with gradient
legsvg.append("rect")
  .attr("width", (window.innerWidth/1.3))
  .attr("height", 40)
  .style("fill", "url(#linear-gradient)");





//A color scale
var colorScale = d3.scale.linear()
    .range(["#294636","#2f513e", "#39634c","#416250","#4a705b","#5b836d", "#afb48b", "#ced49e", "#deea81", "#d0e05a", "#dcf428"]);

//Append multiple color stops by using D3's data/enter step
linearGradient.selectAll("stop") 
    .data( colorScale.range() )                  
    .enter().append("stop")
    .attr("offset", function(d,i) { return i/(colorScale.range().length-1); })
    .attr("stop-color", function(d) { return d; });



    






      //Create SVG element
      var svg = d3.select("#mapcontain")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

      //Load in agriculture data
      d3.csv("states.csv", function(data) {

        //Set input domain for color scale
        color.domain([
          d3.min(data, function(d) { return d.ValidPercent; }),
          d3.max(data, function(d) { return d.ValidPercent; })
        ]);

        //Load in GeoJSON data
        d3.json("us_states.json", function(json) {

          //Merge the ag. data and GeoJSON
          //Loop through once for each ag. data value
          for (var i = 0; i < data.length; i++) {

            //Grab state name
            var dataState = data[i].Name;

            //Grab data value, and convert from string to float
            var dataValue = parseFloat(data[i].ValidPercent);

            //Find the corresponding state inside the GeoJSON
            for (var j = 0; j < json.features.length; j++) {

              var jsonState = json.features[j].properties.name;

              if (dataState == jsonState) {

                //Copy the data value into the JSON
                json.features[j].properties.value = dataValue;

                //Stop looking through the JSON
                break;

              }
            }
          }

          //Bind data and create one path per GeoJSON feature
          svg.selectAll("path")
             .data(json.features)
             .enter()
             .append("path")
             .attr("d", path)
             .attr("class","stateouts")



        .on("mousemove", function(d){
            div.style("left", d3.event.pageX-60+"px");
            div.style("top", (d3.event.pageY)-136+"px");
            div.style("display", "inline-block");
            div.style("position", "absolute");
            div.html((d.properties.name)+"<h4>"+(d.properties.value)+"%</h4>");
         })

        .on("mouseout", function(d){
            div.style("display", "none");
        })




             .style("fill", function(d) {
                //Get data value
                var value = d.properties.value;

                if (value) {
                  //If value exists…
                  return color(value);
                } else {
                  //If value is undefined…
                  return "#ccc";
                }




             });







        });

      });


var div = d3.select("body").append("div").attr("class", "toolTip");












  }

  ////////////////
  /////////////////////////
  ///////////////////////





  function showTitle24() {
 

d3.select("body").selectAll("toolTip").remove();


d3.select("#mapcontain").select("svg").remove();
d3.select("#mapcontain").select("g").remove();


 


d3.select("#legendcontain").select("svg").remove();
d3.select("#legendcontain").select("rect").remove();




  }


  function showTitle25() {
 

 


  }


  function showTitle26() {
 

        var titleCloser = document.getElementById("titleCloser");
    titleCloser.setAttribute("style", "display:none; ");



  }


  function showTitle27() {
 

        var titleCloser = document.getElementById("titleCloser");
    titleCloser.setAttribute("style", "display:inline-block; ");



  }





  ////////////////
  /////////////////////////
  ///////////////////////
  /**
   * UPDATE FUNCTIONS
   *
   * These will be called within a section
   * as the user scrolls through it.
   *
   * We use an immediate transition to
   * update visual elements based on
   * how far the user has scrolled
   *
   */

  /**



  /**
   * DATA FUNCTIONS
   *
   * Used to coerce the data into the
   * formats we need to visualize
   *
   */

  /**
   * activate -
   *
   * @param index - index of the activated section
   */
  chart.activate = function(index) {
    activeIndex = index;
    var sign = activeIndex - lastIndex < 0 ? -1 : 1;
    var scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
    scrolledSections.forEach(function(i) {
      activateFunctions[i]();
    });
    lastIndex = activeIndex;
  };

  /**
   * update
   *
   * @param index
   * @param progress
   */
  chart.update = function(index, progress) {
    updateFunctions[index](progress);
  };

  // return chart function
  return chart;
};

/**
 * display - called once data
 * has been loaded.
 * sets up the scroller and
 * displays the visualization.
 *
 * @param data - loaded tsv data
 */
function display() {
  // create a new plot and
  // display it
  var plot = scrollVis();
  d3.select("#vis")
    ////  .datum(data)
    .call(plot);

  // setup scroll functionality
  var scroll = scroller().container(d3.select("#graphic"));

  // pass in .step selection as the steps
  scroll(d3.selectAll(".step"));

  // setup event handling
  scroll.on("active", function(index) {
    // highlight current step text
    for (var i = 0; i < window.slides.length; i++) {
      var slide = window.slides[i];
      if (i + 1 === index) {
        slide.show();
        console.log("show");
      } else {
        slide.hide();
        console.log("hide");
      }
    }

    ////////////////document.body.style.backgroundImage = "url("+index+".jpg)";

    d3.selectAll("#step-" + index).style("visibility", function(d, i) {
      return i == index ? "none" : "inline-block";
    });

    d3.selectAll("#step-" + (index - 1)).style("visibility", function(d, i) {
      return i == index ? "inline-block" : "none";
    });

    d3.selectAll("#step-" + (index + 1)).style("visibility", function(d, i) {
      return i == index ? "inline-block" : "none";
    });

    ///////////var getBG = document.getElementById( 'container'+index );
    ///////    getBG.setAttribute("style", "background-image:url("+index+".jpg); "  );

    ///////// console.log(index);

    // activate current section
    plot.activate(index);
  });

  scroll.on("progress", function(index, progress) {
    plot.update(index, progress);
  });
}

// load data and display
document.addEventListener("DOMContentLoaded", function() {
  display();
});

window.addEventListener("resize", onResize);

function onResize(h) {
  var height = window.windowHeight;
  var width = window.windowWidth;

  //////var eBG = document.getElementById("bg" + h);
  /////eBG.style.height = eBG.parentElement.clientHeight;


    // sectionPositions will be each sections
    // starting position relative to the top
    // of the first section.
    

   resize();

 




  /////////





//////////////
 ///////////////////


iii=0;

//donut refresh
changePieChart(data_a,"svg0");
 
  
//donut refresh
changePieChart(dataset,"svg1");

  //gender
changePieChart(data_h,"svg2");

  

  //gender
changeHBarChart(data_f,"svg3");


//donut refresh
changeHBarChart(data_c,"svg4");


//donut refresh
changeHBarChartsm(data_b,"svg5");
 
//?
changeHBarChart(data_g,"svg6");

    
//donut
changeHBarChart(data_e,"svg7");

/**/

////////
//////////
///////////////
 

 
  //////  var greenoverlay = document.getElementById("greenoverlay");
  ///////////  greenoverlay.setAttribute("style", "visibility:hidden; ");

iii=8;

  //gender
changePieChart(data_i,"svg8");


  //gender
changePieChart(data_j,"svg9");

//?
changePieChart(data_k,"svg10");

 /*
 */


/////////////
 //// bar charts now

    
//Where did you serve
 changeHBarChart(data_l,"svg11");

 
  //number of deployments
changeStackChart(data_m,"svg12");


  // 
changeStackChart(data_n,"svg13");

//
changeStackChart(data_o,"svg14");

    
// 
changeStackChart(data_p,"svg15");

 /**/
//////////




 

    iii=16;

  
// political ideology
changePieChart(data_q,"svg16");
    
// supportcandidates
changePieChart(data_r,"svg17");
    
// voter reg
changePieChart(data_reg,"svg18");

 /* 
*/
startsmallnumerosA(numeroB,"svg19");

  
  
 //////////////////
 // THE ISSUES
/// flag burning

iii=20;

    startsmallnumerosA(numeroE,"svg20");


   
// 
changeStackChart(data_s,"svg21");
  
// 
changeStackChart(data_t,"svg22");
  
// 
changeStackChart(data_u,"svg23");
  
// 
changeStackChart(data_v,"svg24");
  
// 
changeStackChart(data_w,"svg25");
  
// 
changeStackChart(data_x,"svg26");
  
// 
changeStackChart(data_y,"svg27");

 
 
 


iii=28;



//// guns

startsmallnumerosA(numero_guns,"svg28");

changeHBarChart(data_guns_own_aa,"svg29");


 


iii=30;

//////////
///////////////////
//////////////////////////////
////////// military service
 /////////////////////////////
//   
changeStackChart(data_milserve_a,"svg30");
//   
changeStackChart(data_milserve_b,"svg31");
//   
changeStackChart(data_milserve_c,"svg32");
//    
changeStackChart(data_milserve_d,"svg33");
//    
changeStackChart(data_milserve_e,"svg34");



 

iii=35;

    ////////////////////
////////// equality
 ////////////////
//   
changeStackChart(data_equality_a,"svg35");
//   
changeStackChart(data_equality_c,"svg36");
//   
///////////////changeStackChart(data_equality_b,"svg37");
// impact  
///////////////////changeStackChart(data_equality_d,"svg38");



 
iii=37;



////
///// perceptions
///////perceptions numbers
  

   startnumerosA(numeroSupport,"svg37");

   startnumerosB(numeroUnderstand,"svg38");

   startnumerosC(numeroHire,"svg39");

/////////////
//////////
 ////////////////
//obama  
changeStackChart(data_p_obama,"svg40");
//trump  
changeStackChart(data_p_trump,"svg41");
//congress  
changeStackChart(data_p_congress,"svg42");


 


iii=43;



/////////////
///////womens
/////////////////
  //issues  
changeStackChart(data_wom_a,"svg43");
//////////
/////////////
//women in military questions  
changeStackChart(data_wom_b,"svg44");
//womens  
changeStackChart(data_wom_c,"svg45");
//womens  
changeStackChart(data_wom_d,"svg46");

//womens  
changeStackChart(data_wom_e,"svg47");
//womens  
changeStackChart(data_wom_f,"svg48");
//womens  
changeStackChart(data_wom_g,"svg49");
//womens
//////
/////


 

iii=50;

    //womens
//////
/////

///////////////
 
startnumerosA(numero_wom_a,"svg50");
///
startnumerosB(numero_wom_b,"svg51");
 /////////////////
//////////////////////////////////////////////////////////////////

 /////////////
 /////////////////
//When asked their level of agreement with the following statement  
//womens  
/// The civilian public treats women veterans with respect
changeStackChart(data_wom_g_,"svg52");
//womens  
//// Fellow service members treat women service members with respect
changeStackChart(data_wom_h_,"svg53");
//womens  
changeStackChart(data_wom_i_,"svg54");
//womens  
changeStackChart(data_wom_j_,"svg55");
//womens  
changeStackChart(data_wom_k_,"svg56");
//womens  
changeStackChart(data_wom_k__,"svg57");
//womens

 /////////////
 /////////////////
 ////////////////
 ///// When asked whether VA adequately provides
 //////////////////////
//womens  
changeStackChart(data_wom_n,"svg58");
//womens  
changeStackChart(data_wom_o,"svg59");
//womens  
changeStackChart(data_wom_p,"svg60");
//womens  
changeStackChart(data_wom_q,"svg61");
//womens  
changeStackChart(data_wom_r,"svg62");
//womens
///////////////////
///////////////

 

iii=63;

    //womens
///////////////////
///////////////


startnumerosA(numero_wom_c,"svg63");
///
startnumerosB(numero_wom_d,"svg64");
///
startnumerosC(numero_wom_e,"svg65");
/////////////
 /////////////////

///////////////////
//// rate the following
/// 
 /////////////
 /////////////////
//womens  
///// va support for women
changeStackChart(data_wom_s,"svg66");
//womens  
changeStackChart(data_wom_t,"svg67");
//womens  
changeStackChart(data_wom_u,"svg68");
//womens  
//// Quality of VA Benefits
changeStackChart(data_wom_v,"svg69");
/////
///
startsmallnumerosA(numero_wom_f,"svg70");
///
startsmallnumerosA(numero_wom_g,"svg71");
////
//////////////////////////////////




 


iii=72;


 /////////////
 ///// sexuak assault
 /////////////////
//womens  
changeStackChart(data_wom_y,"svg72");
//womens  
changeStackChart(data_wom_z,"svg73");
//womens  
changeStackChart(data_wom_aa,"svg74");
//womens  
changeStackChart(data_wom_bb,"svg75");

//womens  
changeStackChart(data_wom_cc,"svg76");
//womens  
changeStackChart(data_wom_dd,"svg77");
//womens 
/// Survivors who experienced retaliation after reporting 
changeStackChart(data_wom_ee,"svg78");
//womens  
// Survivors who experienced retaliation after reporting
changeStackChart(data_wom_ff,"svg79");
/////////
//////
changeStackChart(data_wom_gg,"svg80");
//////////
/////
changeStackChart(data_wom_hh,"svg81");
//////////
/////
changeStackChart(data_wom_ii,"svg82");
//////////
/////
changeStackChart(data_wom_jj,"svg83");
//////////
/////


 


   ///// var greenoverlay = document.getElementById("greenoverlay");
   ///// greenoverlay.setAttribute("style", "visibility:hidden; ");

iii=84;




///////////////////
//// post 9/11 gi bill
/////

changePieChart(data_gib_a,"svg84");

changePieChart(data_gib_b,"svg85");

changePieChart(data_gib_c,"svg86");

//////////
startsmallnumerosA(numero_gib_nocuts,"svg87");

/////
changeStackChart(data_gib_d,"svg88");


changeStackChart(data_gib_e,"svg89");


changeStackChart(data_gib_f,"svg90");


 //////////


 

iii=91;

    //////////
/////
////// education
///
 //////////
startnumerosA(numero_ed_a,"svg91");

startnumerosB(numero_ed_b,"svg92");

startnumerosC(numero_ed_c,"svg93");


changeStackChart(data_ed_a,"svg94");

changeStackChart(data_ed_b,"svg95");

changeStackChart(data_ed_c,"svg96");




changeHBarChart(data_ed_d,"svg97");

 //////////
/////

 

iii=98;


 //////////
/////
//////////
//// employment

changeStackChart(data_employ_a,"svg98");

changeStackChart(data_employ_b,"svg99");

changeStackChart(data_employ_c,"svg100");




 changeStackChart(data_employ_d,"svg101");


changeHBarChart(data_employ_e,"svg102");

startnumerosA(numero_employ_a,"svg103");

startnumerosB(numero_employ_b,"svg104");

startnumerosA(numero_employ_d,"svg105");

startnumerosC(numero_employ_c,"svg106");



////////


 


iii=107;


////////
/// va health care utilization
///////

  //age  
changePieChart(data_va_a,"svg107");
//gender
changePieChart(data_va_b,"svg108");

//?
changePieChart(data_va_c,"svg109");


/// bar chart
changeHBarChart(data_va_bars,"svg110");


startnumerosA(numero_va_a,"svg111");



startnumerosB(numero_va_b,"svg112");

startnumerosC(numero_va_c,"svg113");


//////////
////
//// va health care utilization

changeStackChart(data_va_d,"svg114");

changeStackChart(data_va_e,"svg115");

changeStackChart(data_va_f,"svg116");

changeStackChart(data_va_g,"svg117");

changeStackChart(data_va_h,"svg118");

changeStackChart(data_va_i,"svg119");
changeStackChart(data_va_j,"svg120");

startsmallnumerosA(numero_va_d,"svg121");

startsmallnumerosA(numero_va_e,"svg122");

////




 

    ////
////
iii=123;


startnumerosA(numero_va_f,"svg123");



changeStackChart(data_va_k,"svg124");


changeStackChart(data_va_l,"svg125");


changeStackChart(data_va_m,"svg126");


changeStackChart(data_va_n,"svg127");


changeStackChart(data_va_o,"svg128");


changeStackChart(data_va_p,"svg129");


changeStackChart(data_va_q,"svg130");

/////
///////


  

iii=131;

    /////
///////
//// mental health
startnumerosA(numero_mental_a,"svg131");

startnumerosB(numero_mental_b,"svg132");

startnumerosC(numero_mental_c,"svg133");

 
changeStackChart(data_mental_a,"svg134");


changeStackChart(data_mental_b,"svg135");




  

iii=136;

    startnumerosA(numero_suicide_a,"svg136");

 
changeHBarChart(data_suicide_aa,"svg137");

/////////////// changeHBarChartsm(data_suicide_b,"svg140");
/////////////// changeHBarChartsm(data_suicide_c,"svg141");
changeHBarChartsm(data_suicide_d,"svg138");
changeHBarChartsm(data_suicide_e,"svg139");


 

iii=140;

    changeHBarChart(data_health_a,"svg140");


changeHBarChart(data_health_b,"svg141");


startnumerosA(numero_health_a,"svg142");
startnumerosB(numero_health_b,"svg143");
startnumerosC(numero_health_c,"svg144");
startnumerosA(numero_health_d,"svg145");
startnumerosB(numero_health_e,"svg146");
startnumerosC(numero_health_f,"svg147");



changeStackChart(data_health_c,"svg148");
changeStackChart(data_health_d,"svg149");
 
    changeHBarChartsm(data_health_e,"svg150");

  
      
iii=151;


///
//////
///////////////
/// transition experiences
///////////

changeStackChart(data_tran_a,"svg151");
startnumerosA(numero_tran_a,"svg152");
startnumerosB(numero_tran_b,"svg153");
startnumerosC(numero_tran_c,"svg154");
startnumerosA(numero_tran_d,"svg155");
startnumerosB(numero_tran_e,"svg156");









///
/////
/*

*/
 
////////////
///////////////
//////////////////
  


}


 






