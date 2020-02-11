var iii=0;

var name;

var trigger='';

var numerotrigger='';




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


////////
//// income


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


////////////////
/////// school


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



///////////////
////// marital
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

////////
////// children




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



///////////
////ethnicity


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



///////////
///// religious affiliation



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



////////////
///// gender




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
{a:"Other",b:1},
{a:"Prefer Not To Answer",b:95}
];


////////////
///// sexual orientation


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


///////////
////// 2017 demographics
////////



var data_a=[{a:"18-25",b:1},{a:"26-30",b:8},{a:"31-35",b:24},{a:"36-40",b:18},{a:"41-45",b:13},{a:"46-50",b:15},{a:"51+",b:21}];

var dummydata_a=[{a:"18-25",b:1},{a:"26-30",b:1},{a:"31-35",b:1},{a:"36-40",b:1},{a:"41-45",b:90},{a:"46-50",b:1},{a:"51+",b:1}];


var data_b=[{a:"Male",b:86},{a:"Female",b:13},{a:"Trans./Gender Variant/Nonconforming",b:.5},{a:"Prefer Not To Answer",b:.5}];

var dummydata_b=[{a:"Male",b:1},{a:"Female",b:1},{a:"Trans./Gender Variant/Nonconforming",b:1},{a:"Prefer Not To Answer",b:95}];

var data_c=[{a:"White",b:69},{a:"Hisp / Latino",b:12},{a:"Black / Afr. Amer.",b:6},{a:"Asian",b:3},{a:"Amer. Indian / Alaska Native",b:2},{a:"Native Hawaiian / Pac. Islander",b:1},{a:"Other",b:3},{a:"Prefer Not to Answer",b:4}];

var dummydata_c=[{a:"White",b:1},{a:"Hisp / Latino",b:1},{a:"Black / Afr. Amer.",b:1},{a:"Asian",b:1},{a:"Amer. Indian / Alaska Native",b:90},{a:"Native Hawaiian / Pac. Islander",b:1},{a:"Other",b:1},{a:"Prefer Not to Answer",b:1}];

var dataset=[{a:"Married",b:66},{a:"Single",b:14},{a:"Divorced",b:14},{a:"Separated",b:3},{a:"Domestic Partnership",b:2},{a:"Widowed",b:1}];

var dummydataset=[{a:"Married",b:1},{a:"Single",b:1},{a:"Divorced",b:1},{a:"Separated",b:1},{a:"Domestic Partnership",b:1},{a:"Widowed",b:94}];

var data_e=[{a:"< $20K",b:6},{a:"$20K-$35K",b:11},{a:"$35K-$50K",b:14},{a:"$50K-$75K",b:22},{a:"$75K-$100K",b:16},{a:"$100K-$150K",b:18},{a:"$150K-$200K",b:6},{a:"$200K+",b:3},{a:"Prefer Not to Answer",b:4}];

var dummydata_e=[{a:"< $20K",b:91},{a:"$20K-$35",b:1},{a:"$35K-$50K",b:1},{a:"$50K-$75K",b:1},{a:"$75K-$100K",b:1},{a:"$100K-$150K",b:1},{a:"$150K-$200K",b:1},{a:"$200K+",b:1},{a:"Prefer Not to Answer",b:1}];

var data_f=[{a:"Full Time",b:54},{a:"Part Time",b:5},{a:"Self Employed",b:3},{a:"Unemployed*",b:8},{a:"Active Duty",b:5},{a:"Retired Disabled",b:19},{a:"Student",b:6}];

var dummydata_f=[{a:"Full Time",b:1},{a:"Part Time",b:90},{a:"Self Employed",b:1},{a:"Unemployed*",b:1},{a:"Active Duty",b:1},{a:"Retired Disabled",b:1},{a:"Student",b:1}];

var data_g=[{a:"Some college",b:22},{a:"Bachelors",b:29},{a:"Masters",b:22},{a:"Associates",b:14},{a:"HS grad. or equiv.",b:5},{a:"Trade, Tech. or Vocat.",b:4},{a:"Professional Degree",b:3},{a:"Doctoral",b:1}];

var dummydata_g=[{a:"Some college",b:1},{a:"Bachelors",b:1},{a:"Masters",b:1},{a:"Associates",b:91},{a:"HS grad. or equiv.",b:1},{a:"Trade, Tech. or Vocat.",b:1},{a:"Professional Degree",b:1},{a:"Doctoral",b:1}];

var data_h=[{a:"Suburban",b:49},{a:"Urban",b:24},{a:"Rural",b:23},{a:"Military Base CONUS",b:3},{a:"OCONUS",b:1}];

var dummydata_h=[{a:"Suburban",b:1},{a:"Urban",b:1},{a:"Rural",b:1},{a:"Military Base CONUS",b:95},{a:"OCONUS",b:1}];

////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////



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



/////////////////
//// officer or enlisted

var data_officer = [
{a:"Officer",b:75},
{a:"Enlisted",b:15},
{a:"Prior enlisted Officer",b:10}
];



var dummydata_officer = [
{a:"Officer",b:1},
{a:"Enlisted",b:1},
{a:"Prior enlisted Officer",b:1}
];



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



 
/////////////
//////////
/////////////
////// were you, or are you currently, a member of the National Guard or Reserves

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


/////////////////////////////////////////
//// served as reservist or nat guard
 
var numero_natg = [58];



/////////////////////
///// year separated

 
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

 

////////////////////////////////////////////////
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



var numero_member = [58];





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
//// How do you interact with other veterans and military service members
///////////
 
var data_interact_how = [
{a:"Social media",b:53},
{a:"In my daily life",b:48},
{a:"At work",b:44},
{a:"Meet-ups",b:28},
{a:"Calling on the phone",b:28},
{a:"Social clubs",b:18},
{a:"Video chats",b:2},
{a:"Other",b:12}
];

var dummydata_interact_how = [
{a:"Social media",b:16},
{a:"In my daily life",b:12},
{a:"At work",b:26},
{a:"Meet-ups",b:12},
{a:"Calling on the phone",b:12},
{a:"Social clubs",b:12},
{a:"Video chats",b:12},
{a:"Other",b:4}
];


///////////////////////////
////// recommend military service
///////


var data_milserve_recommend=[{a:"Yes",b:76},{a:"No",b:8},{a:"Unsure",b:16}];

var dummydata_milserve_recommend=[{a:"Yes",b:41},{a:"No",b:27},{a:"Unsure",b:18}];
 

////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////





//////
///number of deployments
////////
 



var data_m=[{a:"Zero Deployments",b:23},{a:"One Deployment",b:51},{a:"Two Deployments",b:18},{a:"Three Deployments",b:5},{a:"Four Deployments",b:1},{a:"Five+ Deployments",b:2}];

var dummydata_m=[{a:"Zero Deployments",b:18},{a:"One Deployment",b:55},{a:"Two Deployments",b:21},{a:"Three Deployments",b:6},{a:"Four Deployments",b:6},{a:"Five+ Deployments",b:6}];

var data_n=[{a:"Zero Deployments",b:12},{a:"One Deployment",b:57},{a:"Two Deployments",b:24},{a:"Three Deployments",b:5},{a:"Four Deployments",b:1},{a:"Five+ Deployments",b:1}];

var dummydata_n=[{a:"Zero Deployments",b:18},{a:"One Deployment",b:55},{a:"Two Deployments",b:21},{a:"Three Deployments",b:6},{a:"Four Deployments",b:6},{a:"Five+ Deployments",b:6}];

var data_o=[{a:"Zero Deployments",b:77},{a:"One Deployment",b:20},{a:"Two Deployments",b:1},{a:"Three Deployments",b:.3},{a:"Four Deployments",b:.2},{a:"Five+ Deployments",b:0}];

var dummydata_o=[{a:"Zero Deployments",b:18},{a:"One Deployment",b:55},{a:"Two Deployments",b:21},{a:"Three Deployments",b:6},{a:"Four Deployments",b:6},{a:"Five+ Deployments",b:6}];

var data_p=[{a:"Zero Deployments",b:95},{a:"One Deployment",b:4},{a:"Two Deployments",b:0},{a:"Three Deployments",b:0},{a:"Four Deployments",b:0},{a:"Five+ Deployments",b:0}];

var dummydata_p=[{a:"Zero Deployments",b:18},{a:"One Deployment",b:55},{a:"Two Deployments",b:21},{a:"Three Deployments",b:6},{a:"Four Deployments",b:6},{a:"Five+ Deployments",b:6}];

var data_pp=[{a:"Zero Deployments",b:90},{a:"One Deployment",b:8},{a:"Two Deployments",b:2},{a:"Three Deployments",b:.3},{a:"Four Deployments",b:.1},{a:"Five+ Deployments",b:0}];

var dummydata_pp=[{a:"Zero Deployments",b:18},{a:"One Deployment",b:55},{a:"Two Deployments",b:21},{a:"Three Deployments",b:6},{a:"Four Deployments",b:6},{a:"Five+ Deployments",b:6}];









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







///////////////////////////////////
//// 2017 service demographics
///////////////////////////////

var data_i=[{a:"Army",b:58},{a:"Marine Corps",b:15},{a:"Air Force",b:13},{a:"Navy",b:13},{a:"Coast Guard",b:1}];

var dummydata_i=[{a:"Army",b:1},{a:"Marine Corps",b:1},{a:"Air Force",b:1},{a:"Navy",b:95},{a:"Coast Guard",b:1}];

var data_j=[{a:"Officer",b:19},{a:"Enlisted",b:81}];

var dummydata_j=[{a:"Officer",b:1},{a:"Enlisted",b:1}];

var data_k=[{a:"Not separated",b:14},{a:"2015-2017",b:9},{a:"2013-2014",b:14},{a:"2011-2012",b:16},{a:"2009-2010",b:15},{a:"2007-2008",b:15},{a:"2005-2006",b:11},{a:"2003-2004",b:5},{a:"2002 or Earlier",b:1}];

var dummydata_k=[{a:"Not separated",b:1},{a:"2015-2017",b:1},{a:"2013-2014",b:1},{a:"2011-2012",b:1},{a:"2009-2010",b:1},{a:"2007-2008",b:1},{a:"2005-2006",b:1},{a:"2003-2004",b:88},{a:"2002 or Earlier",b:1}];

 




/////////////
////////////////
/////////////////////
//////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//////////// political engagement
/////////////////////////////////////////////////////




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


 

////
//////  
///
/// planning to vote in 2018 election


 
var data_planning = [89];

 
//////// var data_planning = [{a:"Definitely yes",b:89},{a:"Probably yes",b:5},{a:"Might or might not",b:3},{a:"Probably not",b:2},{a:"Definitely not",b:1}];



var dummydata_planning = [
{a:"Definitely yes",b:38},
{a:"Probably yes",b:17},
{a:"Might or might not",b:37},
{a:"Probably not",b:5},
{a:"Definitely not",b:3}
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
{a:"No affiliation/independent",b:37},
{a:"Other",b:2}

];



var dummydata_party = [
{a:"Democratic Party",b:38},
{a:"Republican Party",b:17},
{a:"Libertarian Party",b:37},
{a:"Green Party",b:5},
{a:"No affiliation/independent",b:3},
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




var numero_impact = [86];




////
//////  
///
/// considered running for office

var data_running = [
{a:"Yes",b:36},
{a:"No",b:64}

];



var dummydata_running = [
{a:"Yes",b:50},
{a:"No",b:28}

];



var numero_considered = [36];






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




/////////
/////
///////

/////
/// trump parade
 



var data_parade = [
{a:"Strongly Support",b:16},
{a:"Support",b:11},
{a:"Neutral",b:16},  
{a:"Oppose",b:9},
{a:"Strongly Oppose",b:48}  
];


 

var dummydata_parade = [
{a:"Strongly Support",b:16},
{a:"Support",b:36},
{a:"Neutral",b:31},  
{a:"Oppose",b:14},
{a:"Strongly Oppose",b:3}  
];


/////


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


////
///


/////
//////
/// nfl protests
///////////////

 

var data_nfl = [
{a:"Strongly agree",b:28},
{a:"Somewhat agree",b:8},
{a:"Neutral",b:13},
{a:"Somewhat disagree",b:6},
{a:"Disagree",b:43},
{a:"I have not heard about these protests",b:.2},
{a:"Prefer not to answer",b:2}
];



var dummydata_nfl = [
{a:"Strongly agree",b:50},
{a:"Somewhat agree",b:23},
{a:"Neutral",b:12},
{a:"Somewhat disagree",b:5},
{a:"Disagree",b:5},
{a:"I have not heard about these protests",b:5},
{a:"Prefer not to answer",b:10}
];

 
 
 

var data_nfl_plan = [
{a:"I will not watch NFL games because I disagree with the protests",b:24},
{a:"I will keep watching/attending NFL games and support their right to protest in this way",b:28},
{a:"I will not watch because Iâ€™m not a NFL fan, but in general object to any protest during our national anthem",b:10},
{a:"I will keep watching NFL games, but disagree with the protest",b:15},
{a:"I will keep watching/attending NFL games, and have no opinion about the protests",b:4},
{a:"I will not watch because Iâ€™m not a NFL fan, but in general support their right to protest in this way.",b:16},
{a:"I will not watch because Iâ€™m not a NFL fans, but in general have no opinion about the protests",b:3}
];



var dummydata_nfl_plan = [
{a:"I will not watch NFL games because I disagree with the protests",b:50},
{a:"I will keep watching/attending NFL games and support their right to protest in this way",b:23},
{a:"I will not watch because Iâ€™m not a NFL fan, but in general object to any protest during our national anthem",b:12},
{a:"I will keep watching NFL games, but disagree with the protest",b:5},
{a:"I will keep watching/attending NFL games, and have no opinion about the protests",b:5},
{a:"I will not watch because Iâ€™m not a NFL fan, but in general support their right to protest in this way.",b:5},
{a:"I will not watch because Iâ€™m not a NFL fans, but in general have no opinion about the protests",b:10}
];

 
 ///////////
 ///////
/////
///


 
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

  
  
  /////////////
 ///////////// 
  /////
  ///
  
  
  
  /////////
  ////////////////////////
  ///////////////////////
  //////// firearms
  ///////////////////////
  //////////////////
  
  
  

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
// //////////  
//////////////   
//////////////////////////////
 //////////////
 //////// Transition Experiences
 //////////



////
///////////////
/////// transition




var data_challenges = [
{a:"Many",b:39},
{a:"Some",b:39},
{a:"Few",b:15},
{a:"None",b:7}
];

var dummydata_challenges = [
{a:"Many",b:9},
{a:"Some",b:9},
{a:"Few",b:6},
{a:"None",b:7}
];


/////
 var data_finances = [
{a:"Yes",b:67},
{a:"No",b:33}
];

var dummydata_finances = [
{a:"Yes",b:37},
{a:"No",b:63}
];

/////

var data_bills = [
{a:"Yes",b:34},
{a:"No",b:66}
];

var dummydata_bills = [
{a:"Yes",b:67},
{a:"No",b:33}
];


 
/////

var data_lending = [
{a:"Yes",b:22},
{a:"Maybe",b:13},
{a:"No",b:65}
];

var dummydata_lending = [
{a:"Yes",b:27},
{a:"Maybe",b:17},
{a:"No",b:33}
];


var numero_lending = [35];

 
/////

 

var data_conditions = [
{a:"Car",b:34},
{a:"Home",b:20},
{a:"Advance Pay-Day",b:42},
{a:"Other",b:32}
];

var dummydata_conditions = [
{a:"Car",b:27},
{a:"Home",b:17},
{a:"Advance Pay-Day",b:17},
{a:"Other",b:33}
];


 

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

  
var numero_perm = [22];

 

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
///Which best describes your current living situation
////////  

 

var data_tran_current = [
{a:"Own home/have a mortgage",b:66},
{a:"Rent",b:24},
{a:"Couchsurfing",b:1},
{a:"Living with parents/ as a dependent",b:2},
{a:"With friends/family/significant other",b:10},
{a:"Base housing/barracks",b:.3},
{a:"Donâ€™t have place to live and canâ€™t afford one",b:.5},
{a:"Temporary or permanent housing",b:3},
{a:"Campus housing",b:.2},
{a:"Hospital/VA medical facility",b:.2},
{a:"Other",b:2}
];


var dummydata_tran_current = [
{a:"Own home/have a mortgage",b:11},
{a:"Rent",b:11},
{a:"Couchsurfing",b:11},
{a:"Living with parents/ as a dependent",b:11},
{a:"With friends/family/significant other",b:11},
{a:"Base housing/barracks",b:11},
{a:"Donâ€™t have place to live and canâ€™t afford one",b:31},
{a:"Temporary or permanent housing",b:11},
{a:"Campus housing",b:11},
{a:"Hospital/VA medical facility",b:11},
{a:"Other",b:19}
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


/////
///////
////////
//////////////
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


var numero_mental_care = [84];

////////
//////////////////////////////
////////seeking help why
//////////////////////////////

 


var data_mental_help_why = [
{a:"They have access but are not seeking care",b:51},
{a:"They do not have access to care",b:35},
{a:"They have access to care but not quality care",b:58},
{a:"The stigma of seeking help is too great",b:72},
{a:"The cost of care is too great",b:24},
{a:"The cost of care is not properly funded",b:42},
{a:"Other",b:13}
];

var dummydata_mental_help_why= [
{a:"They have access but are not seeking care",b:22},
{a:"They do not have access to care",b:71},
{a:"They have access to care but not quality care",b:15},
{a:"The stigma of seeking help is too great",b:17},
{a:"The cost of care is too great",b:7},
{a:"The cost of care is not properly funded",b:27},
{a:"Other",b:11}
];

///////////////






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
////////not seeking help 
//////////////////////////////

 


var data_mental_help_not= [
{a:"No VA hospital or clinic near me",b:7},
{a:"No mental health professionals near me",b:5},
{a:"Do not need it",b:18},
{a:"Do not think it will work",b:19},
{a:"Concerned it might affect my career",b:27},
{a:"It was hard to get time off work",b:25},
{a:"Rather talk to friends or family",b:25},
{a:"Do not want to be perceived differently",b:26},
{a:"Do not know where to go",b:6},
{a:"Had an initial visit but never went back",b:17},
{a:"Started treatment but decided to stop",b:33},
{a:"Unable to access care/never received appt",b:8},
{a:"Have not found a mental health professional that understands my needs",b:34},
{a:"The cost of care is too great",b:6}
];

var dummydata_mental_help_not= [
{a:"No VA hospital or clinic near me",b:22},
{a:"No mental health professionals near me",b:7},
{a:"Do not need it",b:15},
{a:"Do not think it will work",b:17},
{a:"Concerned it might affect my career",b:7},
{a:"It was hard to get time off work",b:27},
{a:"Rather talk to friends or family",b:3},
{a:"Do not want to be perceived differently",b:2},
{a:"Do not know where to go",b:2},
{a:"Had an initial visit but never went back",b:2},
{a:"Started treatment but decided to stop",b:2},
{a:"Unable to access care/never received appt",b:2},
{a:"Have not found a mental health professional that understands my needs",b:2},
{a:"The cost of care is too great",b:11}
];

///////////////

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

//////////////////////////////////////////////////
////////////////////////////////


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
   
   
/////////////////////////////////////////////////////////

 


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
{a:"Anti-depressant",b:75},
{a:"Opioid",b:29},
{a:"Sleeping Pills",b:52},
{a:"Anti-anxiety",b:50}
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
   

   


////////////
///////////
/////////////
//////////
///////////
/////////



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
   
/////////////////////////






 
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
   
   
 

  

/////
/////////
///cannabis cannabis
////


////
//// interest in cannabis 

var numero_cannabis = [75];




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





/////////
/////
///////




//////////
////////////
//////////
///////////// 
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
//// What form of tobacco products have you used?  

var data_tobacco_type = [
{a:"Cigarettes",b:78},
{a:"Vapes",b:12},
{a:"E-cigarettes",b:10},
{a:"Chewing tobacco",b:28},
{a:"Dip or snuff",b:32},
{a:"Cigars",b:43},
{a:"Pipe tobacco",b:12},
{a:"Other",b:1}
];

 
var dummydata_tobacco_type = [
{a:"Cigarettes",b:11},
{a:"Vapes",b:11},
{a:"E-cigarettes",b:11},
{a:"Chewing tobacco",b:11},
{a:"Dip or snuff",b:11},
{a:"Cigars",b:11},
{a:"Pipe tobacco",b:11},
{a:"Other",b:19}
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
//////////////
/////////////////



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



var numero_enrolled = [81];





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


var numero_other = [68];



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
 

var data_va_non_understand = [
{a:"Strongly agree",b:27},
{a:"Somewhat agree",b:39},
{a:"Neither agree nor disagree",b:25},
{a:"Somewhat disagree",b:6},
{a:"Strongly disagree",b:3}
];

var dummydata_va_non_understand = [
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
 

var data_va_non_quality = [
{a:"Strongly agree",b:11},
{a:"Somewhat agree",b:33},
{a:"Neither agree nor disagree",b:33},
{a:"Somewhat disagree",b:17},
{a:"Strongly disagree",b:6}
];

var dummydata_va_non_quality = [
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
 



var data_va_choose_non = [
{a:"Not eligible for VA healthcare",b:6},
{a:"I am not enrolled in VA healthcare",b:21},
{a:"Higher quality of care with non-VA provider",b:36},
{a:"More comfortable with non-VA provider",b:13},
{a:"Non-VA provider understands my military service",b:3},
{a:"Not satisfied with VA provider",b:13},
{a:"Non-VA provider more convenient",b:39}
];

var dummydata_va_choose_non = [
{a:"Not eligible for VA healthcare",b:43},
{a:"I am not enrolled in VA healthcare",b:37},
{a:"Higher quality of care with non-VA provider",b:13},
{a:"More comfortable with non-VA provider",b:4},
{a:"Non-VA provider understands my military service",b:4},
{a:"Not satisfied with VA provider",b:4},
{a:"Non-VA provider more convenient",b:3}
];


///////////////

 

var data_va_choose = [
{a:"The VA is my only source of healthcare",b:33},
{a:"VA healthcare is free",b:53},
{a:"Higher quality care with VA provider",b:8},
{a:"VA provider understands my military service",b:29},
{a:"The VA is more convenient (hours/location)",b:11},
{a:"Not satisfied with private provider",b:4}
];

var dummydata_va_choose = [
{a:"The VA is my only source of healthcare",b:6},
{a:"VA healthcare is free",b:21},
{a:"Higher quality care with VA provider",b:36},
{a:"VA provider understands my military service",b:13},
{a:"The VA is more convenient (hours/location)",b:3},
{a:"Not satisfied with private provider",b:39}
];



///////


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

 

var data_va_choice = [
{a:"Yes",b:39},
{a:"No",b:61}
];

var dummydata_va_choice = [
{a:"Yes",b:41},
{a:"No",b:27}
];




//////var numero_va_choice = [39];

////
//// support extensio of Choice Prog
var numero_va_exp = [91];
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

/////
/////


////
//// va mission act
var numero_va_mission = [84];
////



////////////////
////// confident that the implementation of the VA MISSION Act will be completed  
/////////
 
 

 
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


/////////////
/////////////
///////////
/////





////////////////
////// 
////////////////
////// va benefits  
/////////
 


////////
////// Do you have a service-connected disability rating from VA?	
 

var data_va_rating = [
{a:"Yes",b:75},
{a:"No",b:25} 
];


var dummydata_va_rating = [
{a:"Yes",b:8},
{a:"No",b:44} 
];
  
  
  
/////////
/////////
//// How long did it take for the VA to notify you of a decision on your claim?
 

var data_va_claim_long = [
{a:"125 days or less",b:24},
{a:"126-180 days",b:25},
{a:"181-365 days",b:23},
{a:"Over 365 days",b:25},
{a:"My claim is still pending",b:3} 
];


var dummydata_va_claim_long = [
{a:"125 days or less",b:23},
{a:"126-180 days",b:21},
{a:"181-365 days",b:26},
{a:"Over 365 days",b:13},
{a:"My claim is still pending",b:17} 
];




  
/////////
/////////
//// How long has your claim been pending?	 

var data_va_pending = [
{a:"125 days or less",b:20},
{a:"126-180 days",b:4},
{a:"181-365 days",b:14},
{a:"Over 365 days",b:62} 
];


var dummydata_va_pending = [
{a:"125 days or less",b:23},
{a:"126-180 days",b:21},
{a:"181-365 days",b:26},
{a:"Over 365 days",b:13}
];



  
/////////
/////////
//// Were you satisfied with the outcome of your claim? 
 
var data_va_outcome = [
{a:"Yes",b:62},
{a:"No",b:38} 
];


var dummydata_va_outcome = [
{a:"Yes",b:20},
{a:"No",b:62} 
];




  
/////////
/////////
//// Have you ever appealed a VA disability compensation claim decision? 
 
var data_va_appeal = [
{a:"Yes",b:32},
{a:"No",b:68} 
];


var dummydata_va_appeal = [
{a:"Yes",b:20},
{a:"No",b:62} 
];






  
/////////
/////////
//// How long did it take to receive a final decision on your appeal?	 
 

var data_va_decision = [
{a:"125 days or less",b:17},
{a:"126-180 days",b:18},
{a:"181-365 days",b:14},
{a:"Over 365 days",b:24},
{a:"My claim is still pending",b:27} 
];


var dummydata_va_decision = [
{a:"125 days or less",b:23},
{a:"126-180 days",b:21},
{a:"181-365 days",b:26},
{a:"Over 365 days",b:13},
{a:"My claim is still pending",b:17} 
];




  
/////////
/////////
//// How long has your appeal been pending?	 

var data_va_appeal_pending = [
{a:"125 days or less",b:18},
{a:"126-180 days",b:11},
{a:"181-365 days",b:14},
{a:"Over 365 days",b:57} 
];


var dummydata_va_appeal_pending = [
{a:"125 days or less",b:23},
{a:"126-180 days",b:21},
{a:"181-365 days",b:26},
{a:"Over 365 days",b:13}
];







  
/////////
/////////
//// When you have questions about VA benefits, who do you ask? 
 

var data_va_ask = [
{a:"Friends",b:30},
{a:"Family",b:7},
{a:"Veteran Service Organizations",b:61},
{a:"VA employees",b:41},
{a:"Elected Government Officials",b:4},
{a:"Other",b:23} 
];


var dummydata_va_ask = [
{a:"Friends",b:17},
{a:"Family",b:18},
{a:"Veteran Service Organizations",b:14},
{a:"VA employees",b:24},
{a:"Elected Government Officials",b:7},
{a:"Other",b:27} 
];


////////////////
///////Please rate your satisfaction with the following VA benefits:

 
 
var data_va_rate_dis = [
{a:"Extremely dissatisfied",b:12},
{a:"Extremely satisfied",b:28},
{a:"Somewhat dissatisfied",b:15},
{a:"Somewhat satisfied",b:44} 
];


var dummydata_va_rate_dis = [
{a:"Extremely dissatisfied",b:30},
{a:"Extremely satisfied",b:7},
{a:"Somewhat dissatisfied",b:21},
{a:"Somewhat satisfied",b:23} 
];

 ////////
var data_va_rate_pension = [
{a:"Extremely dissatisfied",b:15},
{a:"Extremely satisfied",b:24},
{a:"Somewhat dissatisfied",b:19},
{a:"Somewhat satisfied",b:42} 
];


var dummydata_va_rate_pension = [
{a:"Extremely dissatisfied",b:30},
{a:"Extremely satisfied",b:7},
{a:"Somewhat dissatisfied",b:21},
{a:"Somewhat satisfied",b:23} 
];



var data_va_rate_edu = [
{a:"Extremely dissatisfied",b:5},
{a:"Extremely satisfied",b:44},
{a:"Somewhat dissatisfied",b:10},
{a:"Somewhat satisfied",b:41} 
];


var dummydata_va_rate_edu = [
{a:"Extremely dissatisfied",b:30},
{a:"Extremely satisfied",b:7},
{a:"Somewhat dissatisfied",b:21},
{a:"Somewhat satisfied",b:23} 
];





var data_va_rate_home = [
{a:"Extremely dissatisfied",b:4},
{a:"Extremely satisfied",b:57},
{a:"Somewhat dissatisfied",b:6},
{a:"Somewhat satisfied",b:33} 
];


var dummydata_va_rate_home = [
{a:"Extremely dissatisfied",b:30},
{a:"Extremely satisfied",b:7},
{a:"Somewhat dissatisfied",b:21},
{a:"Somewhat satisfied",b:23} 
];



 
var data_va_rate_ins = [
{a:"Extremely dissatisfied",b:17},
{a:"Extremely satisfied",b:21},
{a:"Somewhat dissatisfied",b:22},
{a:"Somewhat satisfied",b:41} 
];


var dummydata_va_rate_ins = [
{a:"Extremely dissatisfied",b:30},
{a:"Extremely satisfied",b:7},
{a:"Somewhat dissatisfied",b:21},
{a:"Somewhat satisfied",b:23} 
];



var data_va_rate_voc = [
{a:"Extremely dissatisfied",b:25},
{a:"Extremely satisfied",b:21},
{a:"Somewhat dissatisfied",b:21},
{a:"Somewhat satisfied",b:33} 
];


var dummydata_va_rate_voc = [
{a:"Extremely dissatisfied",b:30},
{a:"Extremely satisfied",b:7},
{a:"Somewhat dissatisfied",b:21},
{a:"Somewhat satisfied",b:23} 
];



 ////////
 

var data_va_rate_care = [
{a:"Extremely dissatisfied",b:26},
{a:"Extremely satisfied",b:17},
{a:"Somewhat dissatisfied",b:22},
{a:"Somewhat satisfied",b:35} 
];


var dummydata_va_rate_care = [
{a:"Extremely dissatisfied",b:30},
{a:"Extremely satisfied",b:7},
{a:"Somewhat dissatisfied",b:21},
{a:"Somewhat satisfied",b:23} 
];


 

///
///

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
{a:"Yes",b:77},
{a:"Unsure",b:14},
{a:"No",b:9}
];



var dummydata_gi_eligible = [
{a:"Yes",b:77},
{a:"Unsure",b:14},
{a:"No",b:9}
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
////////
////////Q98 - How important is the Post-9/11 GI Bill for the following:			
 
  

var data_gi_imp_recruit = [
{a:"Extremely important",b:46},
{a:"Very important",b:32},
{a:"Moderately important",b:16},
{a:"Slightly important",b:3},
{a:"Not at all important",b:3}
];
 
var dummydata_gi_imp_recruit = [
{a:"Extremely important",b:43},
{a:"Very important",b:37},
{a:"Moderately important",b:14},
{a:"Slightly important",b:4},
{a:"Not at all important",b:2}
];




var data_gi_imp_retent = [
{a:"Extremely important",b:35},
{a:"Very important",b:27},
{a:"Moderately important",b:24},
{a:"Slightly important",b:7},
{a:"Not at all important",b:7}
];
 
var dummydata_gi_imp_retent = [
{a:"Extremely important",b:43},
{a:"Very important",b:37},
{a:"Moderately important",b:14},
{a:"Slightly important",b:4},
{a:"Not at all important",b:2}
];



var data_gi_imp_trans = [
{a:"Extremely important",b:62},
{a:"Very important",b:25},
{a:"Moderately important",b:9},
{a:"Slightly important",b:2},
{a:"Not at all important",b:2}
];
 
var dummydata_gi_imp_trans = [
{a:"Extremely important",b:43},
{a:"Very important",b:37},
{a:"Moderately important",b:14},
{a:"Slightly important",b:4},
{a:"Not at all important",b:2}
];

 

/////
///////
// education
//////



var numero_ed_a=[60];

var numero_ed_b=[17];

var numero_ed_c=[73];



var dummydata_ed_b=[{a:"State/public school",b:22},{a:"Not-for-profit private school",b:15},{a:"For-profit private school",b:13},{a:"Unsure",b:56}];

var data_ed_b=[{a:"State/public school",b:60},{a:"Not-for-profit private school",b:18},{a:"For-profit private school",b:23},{a:"Unsure",b:5}];



var dummydata_ed_c=[{a:"Extremely satisfied",b:34},{a:"Somewhat satisfied",b:45},{a:"Neither Satisfied or Dissatisfied",b:13},{a:"Somewhat dissatisfied",b:8},{a:"Extremely dissatisfied",b:8}];

var data_ed_c=[{a:"Extremely satisfied",b:44},{a:"Somewhat satisfied",b:38},{a:"Neither Satisfied or Dissatisfied",b:8},{a:"Somewhat dissatisfied",b:6},{a:"Extremely dissatisfied",b:4}];

 ////////
 //// To what level is/are your school(s) veteran friendly? 


var dummydata_ed_vetfriend=[{a:"Far above average",b:34},{a:"Somewhat above average",b:45},{a:"Average",b:13},{a:"Somewhat below average",b:8},{a:"Far below average",b:8}];

var data_ed_vetfriend=[{a:"Far above average",b:27},{a:"Somewhat above average",b:36},{a:"Average",b:29},{a:"Somewhat below average",b:5},{a:"Far below average",b:3}];





var dummydata_ed_a=[{a:"Post-9/11 GI Bill",b:77},{a:"Montgomery GI Bill",b:9},{a:"Reserve Education Assistance Program",b:3},{a:"Other",b:4}];

var data_ed_a=[{a:"Post-9/11 GI Bill",b:74},{a:"Montgomery GI Bill",b:29},{a:"Reserve Education Assistance Program",b:3},{a:"Other",b:13}];



var numero_ed_d=[41];



var dummydata_ed_d=[{a:"None",b:50},{a:"Under $1000",b:2},{a:"$1,001-$5,000",b:6},{a:"$5,001-$10,000",b:8},{a:"$10,001-$15,000",b:8},{a:"$15,001-$20,000",b:5},{a:"$20,001-$50,000",b:15},{a:"$50,001-$100,000",b:15},{a:"Above $100,000",b:4}];

var data_ed_d=[{a:"None",b:4},{a:"Under $1000",b:1},{a:"$1,001-$5,000",b:9},{a:"$5,001-$10,000",b:14},{a:"$10,001-$15,000",b:13},{a:"$15,001-$20,000",b:11},{a:"$20,001-$50,000",b:26},{a:"$50,001-$100,000",b:16},{a:"Above $100,000",b:6}];







////////////
/////////////
////////////////
/////////////
//////////
//////////

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




////
////
//////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//////////// 2017 political engagement
/////////////////////////////////////////////////////


var data_q=[{a:"Indep./No Affiliation",b:38},{a:"Dem. Party",b:17},{a:"Repub. Party",b:37},{a:"Libertarian",b:5},{a:"Other",b:3}];

var dummydata_q=[{a:"Indep./No Affiliation",b:18},{a:"Dem. Party",b:37},{a:"Repub. Party",b:7},{a:"Libertarian",b:35},{a:"Other",b:3}];

var data_r=[{a:"Trump",b:50},{a:"Clinton",b:28},{a:"Johnson",b:11},{a:"Stein",b:2},{a:"McMullin",b:1},{a:"Other",b:8}];

var dummydata_r=[{a:"Trump",b:1},{a:"Clinton",b:2},{a:"Johnson",b:1},{a:"Stein",b:90},{a:"McMullin",b:1},{a:"Other",b:1}];


/*
var data_reg=[{a:"Registered",b:96},{a:"Not Registerd",b:4}];

var dummydata_reg=[{a:"Registered",b:50},{a:"Not Registerd",b:28}];
*/


var data_s=[{a:"Strongly Support",b:23},{a:"Support",b:21},{a:"Neutral",b:26},{a:"Oppose",b:12},{a:"Strongly Oppose",b:18}];

var dummydata_s=[{a:"Strongly Support",b:2},{a:"Support",b:1},{a:"Neutral",b:2},{a:"Oppose",b:1},{a:"Strongly Oppose",b:88}];

var data_t=[{a:"Strongly Support",b:34},{a:"Support",b:29},{a:"Neutral",b:22},{a:"Oppose",b:6},{a:"Strongly Oppose",b:9}];

var dummydata_t=[{a:"Strongly Support",b:9},{a:"Support",b:6},{a:"Neutral",b:22},{a:"Oppose",b:29},{a:"Strongly Oppose",b:34}];

var data_u=[{a:"Strongly Support",b:5},{a:"Support",b:12},{a:"Neutral",b:34},{a:"Oppose",b:21},{a:"Strongly Oppose",b:28}];

var dummydata_u=[{a:"Strongly Support",b:5},{a:"Support",b:12},{a:"Neutral",b:34},{a:"Oppose",b:21},{a:"Strongly Oppose",b:28}];

var data_v=[{a:"Strongly Support",b:18},{a:"Support",b:39},{a:"Neutral",b:31},{a:"Oppose",b:6},{a:"Strongly Oppose",b:6}];

var dummydata_v=[{a:"Strongly Support",b:5},{a:"Support",b:12},{a:"Neutral",b:34},{a:"Oppose",b:21},{a:"Strongly Oppose",b:28}];

var data_w=[{a:"Strongly Support",b:46},{a:"Support",b:38},{a:"Neutral",b:9},{a:"Oppose",b:4},{a:"Strongly Oppose",b:3}];

var dummydata_w=[{a:"Strongly Support",b:5},{a:"Support",b:12},{a:"Neutral",b:34},{a:"Oppose",b:21},{a:"Strongly Oppose",b:28}];

var data_x=[{a:"Strongly Support",b:23},{a:"Support",b:27},{a:"Neutral",b:24},{a:"Oppose",b:13},{a:"Strongly Oppose",b:13}];

var dummydata_x=[{a:"Strongly Support",b:5},{a:"Support",b:12},{a:"Neutral",b:34},{a:"Oppose",b:21},{a:"Strongly Oppose",b:28}];

var data_y=[{a:"Strongly Support",b:41},{a:"Support",b:27},{a:"Neutral",b:18},{a:"Oppose",b:8},{a:"Strongly Oppose",b:6}];

var dummydata_y=[{a:"Strongly Support",b:25},{a:"Support",b:32},{a:"Neutral",b:14},{a:"Oppose",b:1},{a:"Strongly Oppose",b:28}];


///////////
//////////////
////////////////
///////////////////////
////////////////////
///////////////
////////////
/////////




  
var data_guns_own_aa=[{a:"Locked, Unloaded, Ammunition Stored Separately",b:29},{a:"Locked and Loaded",b:19},{a:"Unlocked, Unloaded, Ammunition Stored Separately",b:17},{a:"Would rather not say",b:15},{a:"Unlocked, Loaded",b:14},{a:"Other",b:4},{a:"Unlocked, Unloaded, No Ammunition in Home",b:1},{a:"Locked, Unloaded, No Ammunition in Home",b:1}];

var dummydata_guns_own_aa=[{a:"Locked, Unloaded, Ammunition Stored Separately",b:19},{a:"Locked and Loaded",b:1},{a:"Unlocked, Unloaded, Ammunition Stored Separately",b:27},{a:"Would rather not say",b:15},{a:"Unlocked, Loaded",b:14},{a:"Other",b:14},{a:"Unlocked, Unloaded, No Ammunition in Home",b:1},{a:"Locked, Unloaded, No Ammunition in Home",b:1}];

var data_guns_own_a=[{a:"Strongly Support",b:41},{a:"Support",b:27},{a:"Neutral",b:18},{a:"Oppose",b:8},{a:"Strongly Oppose",b:6}];

var dummydata_guns_own_a=[{a:"Strongly Support",b:25},{a:"Support",b:32},{a:"Neutral",b:14},{a:"Oppose",b:1},{a:"Strongly Oppose",b:28}];

var data_milserve_a=[{a:"Yes",b:92},{a:"No",b:8},{a:"Don't Know",b:0}];

var dummydata_milserve_a=[{a:"Yes",b:41},{a:"No",b:27},{a:"Don't Know",b:18}];

var data_milserve_b=[{a:"Yes",b:82},{a:"No",b:7},{a:"Don't Know",b:11}];

var dummydata_milserve_b=[{a:"Yes",b:41},{a:"No",b:27},{a:"Don't Know",b:18}];

var data_milserve_c=[{a:"Yes",b:58},{a:"No",b:32},{a:"Don't Know",b:10}];

var dummydata_milserve_c=[{a:"Yes",b:41},{a:"No",b:27},{a:"Don't Know",b:18}];

var data_milserve_d=[{a:"Strongly Support",b:5},{a:"Support",b:8},{a:"Neutral",b:25},{a:"Oppose",b:30},{a:"Strongly Oppose",b:32}];

var dummydata_milserve_d=[{a:"Strongly Support",b:25},{a:"Support",b:32},{a:"Neutral",b:14},{a:"Oppose",b:1},{a:"Strongly Oppose",b:28}];

var data_milserve_e=[{a:"Strongly Support",b:35},{a:"Support",b:35},{a:"Neutral",b:16},{a:"Oppose",b:7},{a:"Strongly Oppose",b:7}];

var dummydata_milserve_e=[{a:"Strongly Support",b:25},{a:"Support",b:35},{a:"Neutral",b:16},{a:"Oppose",b:7},{a:"Strongly Oppose",b:7}];

var data_equality_a=[{a:"Yes",b:48},{a:"No",b:30},{a:"No Opinion",b:22}];

var dummydata_equality_a=[{a:"Yes",b:41},{a:"No",b:27},{a:"No Opinion",b:18}];

var data_equality_b=[{a:"Yes",b:28},{a:"No",b:50},{a:"No Opinion",b:22}];

var dummydata_equality_b=[{a:"Yes",b:41},{a:"No",b:27},{a:"No Opinion",b:18}];

var data_equality_c=[{a:"Positive",b:16},{a:"Neutral",b:59},{a:"Negative",b:25}];

var dummydata_equality_c=[{a:"Positive",b:22},{a:"Neutral",b:50},{a:"Negative",b:28}];

var data_equality_d=[{a:"Positive",b:6},{a:"Neutral",b:28},{a:"Negative",b:45},{a:"Unsure",b:21}];

var dummydata_equality_d=[{a:"Positive",b:22},{a:"Neutral",b:50},{a:"Negative",b:20},{a:"Unsure",b:5}];

var numeroA=[12,1200000,7300];

var numeroB=[41];

var numeroC=[96];

var numeroD=[88];

var numeroE=[59];

////////var numeroGuns=[68];

var numeroSupport=[70];

var numeroUnderstand=[16];

var numeroHire=[39];

var numeroNat=[59];

var numeroReserve=[74];

var numeroVoted=[88];

var dummydata_p_obama=[{a:"Strongly Agree",b:5},{a:"Agree",b:12},{a:"No Opinion",b:34},{a:"Disagree",b:21},{a:"Strongly Disagree",b:28}];

var data_p_obama=[{a:"Strongly Agree",b:10},{a:"Agree",b:23},{a:"No Opinion",b:15},{a:"Disagree",b:23},{a:"Strongly Disagree",b:29}];

var dummydata_p_trump=[{a:"Strongly Agree",b:5},{a:"Agree",b:12},{a:"No Opinion",b:34},{a:"Disagree",b:21},{a:"Strongly Disagree",b:28}];

var data_p_trump=[{a:"Strongly Agree",b:22},{a:"Agree",b:31},{a:"No Opinion",b:19},{a:"Disagree",b:13},{a:"Strongly Disagree",b:15}];

var dummydata_p_congress=[{a:"Strongly Agree",b:5},{a:"Agree",b:12},{a:"No Opinion",b:34},{a:"Disagree",b:21},{a:"Strongly Disagree",b:28}];

var data_p_congress=[{a:"Strongly Agree",b:1},{a:"Agree",b:15},{a:"No Opinion",b:15},{a:"Disagree",b:45},{a:"Strongly Disagree",b:24}];

var dummydata_wom_a=[{a:"Very Important",b:9},{a:"Important",b:6},{a:"Moderate Importance",b:22},{a:"Little Importance",b:29},{a:"Not Important",b:34}];

var data_wom_a=[{a:"Very Important",b:41},{a:"Important",b:37},{a:"Moderate Importance",b:16},{a:"Little Importance",b:4},{a:"Not Important",b:2}];

var dummydata_wom_b=[{a:"Agree",b:6},{a:"Disagree",b:9},{a:"No Opinion",b:22}];

var data_wom_b=[{a:"Agree",b:75},{a:"Disagree",b:15},{a:"No Opinion",b:10}];

var data_wom_c=[{a:"Agree",b:50},{a:"Disagree",b:39},{a:"No Opinion",b:11}];

var dummydata_wom_c=[{a:"Agree",b:30},{a:"Disagree",b:62},{a:"No Opinion",b:8}];

var dummydata_wom_d=[{a:"Agree",b:6},{a:"Disagree",b:9},{a:"No Opinion",b:22}];

var data_wom_d=[{a:"Agree",b:62},{a:"Disagree",b:30},{a:"No Opinion",b:8}];

var dummydata_wom_e=[{a:"Agree",b:6},{a:"Disagree",b:9},{a:"No Opinion",b:22}];

var data_wom_e=[{a:"Agree",b:33},{a:"Disagree",b:56},{a:"No Opinion",b:11}];

var dummydata_wom_f=[{a:"Agree",b:6},{a:"Disagree",b:9},{a:"No Opinion",b:22}];

var data_wom_f=[{a:"Agree",b:53},{a:"Disagree",b:33},{a:"No Opinion",b:14}];

var dummydata_wom_g=[{a:"Agree",b:6},{a:"Disagree",b:9},{a:"No Opinion",b:22}];

var data_wom_g=[{a:"Agree",b:39},{a:"Disagree",b:46},{a:"No Opinion",b:15}];

var dummydata_wom_g_=[{a:"Strongly Agree",b:34},{a:"Agree",b:29},{a:"Neutral",b:22},{a:"Disagree",b:6},{a:"Strongly Disagree",b:9}];

var data_wom_g_=[{a:"Strongly Agree",b:3},{a:"Agree",b:24},{a:"Neutral",b:32},{a:"Disagree",b:31},{a:"Strongly Disagree",b:10}];

var dummydata_wom_h_=[{a:"Strongly Agree",b:34},{a:"Agree",b:29},{a:"Neutral",b:22},{a:"Disagree",b:6},{a:"Strongly Disagree",b:9}];

var data_wom_h_=[{a:"Strongly Agree",b:25},{a:"Agree",b:49},{a:"Neutral",b:12},{a:"Disagree",b:10},{a:"Strongly Disagree",b:4}];

var dummydata_wom_i_=[{a:"Strongly Agree",b:34},{a:"Agree",b:49},{a:"Neutral",b:2},{a:"Disagree",b:6},{a:"Strongly Disagree",b:9}];

var data_wom_i_=[{a:"Strongly Agree",b:7},{a:"Agree",b:36},{a:"Neutral",b:27},{a:"Disagree",b:23},{a:"Strongly Disagree",b:7}];

var dummydata_wom_j_=[{a:"Strongly Agree",b:34},{a:"Agree",b:29},{a:"Neutral",b:22},{a:"Disagree",b:6},{a:"Strongly Disagree",b:9}];

var data_wom_j_=[{a:"Strongly Agree",b:7},{a:"Agree",b:37},{a:"Neutral",b:35},{a:"Disagree",b:16},{a:"Strongly Disagree",b:5}];

var dummydata_wom_k_=[{a:"Strongly Agree",b:34},{a:"Agree",b:29},{a:"Neutral",b:22},{a:"Disagree",b:6},{a:"Strongly Disagree",b:9}];

var data_wom_k_=[{a:"Strongly Agree",b:36},{a:"Agree",b:23},{a:"Neutral",b:31},{a:"Disagree",b:5},{a:"Strongly Disagree",b:5}];

var dummydata_wom_k__=[{a:"Strongly Agree",b:34},{a:"Agree",b:29},{a:"Neutral",b:22},{a:"Disagree",b:6},{a:"Strongly Disagree",b:9}];

var data_wom_k__=[{a:"Strongly Agree",b:14},{a:"Agree",b:26},{a:"Neutral",b:40},{a:"Disagree",b:10},{a:"Strongly Disagree",b:10}];

var dummydata_wom_l_=[{a:"Strongly Disagree",b:9},{a:"Disagree",b:6},{a:"Neutral",b:22},{a:"Agree",b:29},{a:"Strongly Agree",b:34}];

var data_wom_l_=[{a:"Strongly Disagree",b:5},{a:"Disagree",b:5},{a:"Neutral",b:31},{a:"Agree",b:23},{a:"Strongly Agree",b:36}];

var dummydata_wom_m_=[{a:"Strongly Disagree",b:9},{a:"Disagree",b:6},{a:"Neutral",b:22},{a:"Agree",b:29},{a:"Strongly Agree",b:34}];

var data_wom_m_=[{a:"Strongly Disagree",b:5},{a:"Disagree",b:5},{a:"Neutral",b:31},{a:"Agree",b:23},{a:"Strongly Agree",b:36}];

var dummydata_wom_n_=[{a:"Strongly Disagree",b:9},{a:"Disagree",b:6},{a:"Neutral",b:22},{a:"Agree",b:29},{a:"Strongly Agree",b:34}];

var data_wom_n_=[{a:"Strongly Disagree",b:5},{a:"Disagree",b:5},{a:"Neutral",b:31},{a:"Agree",b:23},{a:"Strongly Agree",b:36}];

var dummydata_wom_o_=[{a:"Strongly Disagree",b:9},{a:"Disagree",b:6},{a:"Neutral",b:22},{a:"Agree",b:29},{a:"Strongly Agree",b:34}];

var data_wom_o_=[{a:"Strongly Disagree",b:5},{a:"Disagree",b:5},{a:"Neutral",b:31},{a:"Agree",b:23},{a:"Strongly Agree",b:36}];

var dummydata_wom_p_=[{a:"Strongly Disagree",b:9},{a:"Disagree",b:6},{a:"Neutral",b:22},{a:"Agree",b:29},{a:"Strongly Agree",b:34}];

var data_wom_p_=[{a:"Strongly Disagree",b:5},{a:"Disagree",b:5},{a:"Neutral",b:31},{a:"Agree",b:23},{a:"Strongly Agree",b:36}];

var dummydata_wom_q_=[{a:"Strongly Disagree",b:9},{a:"Disagree",b:6},{a:"Neutral",b:22},{a:"Agree",b:29},{a:"Strongly Agree",b:34}];

var data_wom_q_=[{a:"Strongly Disagree",b:5},{a:"Disagree",b:5},{a:"Neutral",b:31},{a:"Agree",b:23},{a:"Strongly Agree",b:36}];

var dummydata_wom_r_=[{a:"Strongly Disagree",b:9},{a:"Disagree",b:6},{a:"Neutral",b:22},{a:"Agree",b:29},{a:"Strongly Agree",b:34}];

var data_wom_r_=[{a:"Strongly Disagree",b:5},{a:"Disagree",b:5},{a:"Neutral",b:31},{a:"Agree",b:23},{a:"Strongly Agree",b:36}];

var dummydata_wom_h=[{a:"Strongly Disagree",b:9},{a:"Disagree",b:6},{a:"Neutral",b:22},{a:"Agree",b:29},{a:"Strongly Agree",b:34}];

var data_wom_h=[{a:"Strongly Disagree",b:9},{a:"Disagree",b:6},{a:"Neutral",b:22},{a:"Agree",b:29},{a:"Strongly Agree",b:34}];

var numero_wom_a=[97];

var numero_wom_b=[90];

var dummydata_wom_i=[{a:"Strongly Disagree",b:9},{a:"Disagree",b:6},{a:"Neutral",b:22},{a:"Agree",b:29},{a:"Strongly Agree",b:34}];

var data_wom_i=[{a:"Strongly Agree",b:49},{a:"Agree",b:25},{a:"Neutral",b:12},{a:"Disagree",b:10},{a:"Strongly Disagree",b:4}];

var dummydata_wom_j=[{a:"Strongly Disagree",b:9},{a:"Disagree",b:6},{a:"Neutral",b:22},{a:"Agree",b:29},{a:"Strongly Agree",b:34}];

var data_wom_j=[{a:"Strongly Disagree",b:7},{a:"Disagree",b:23},{a:"Neutral",b:27},{a:"Agree",b:7},{a:"Strongly Agree",b:36}];

var dummydata_wom_k=[{a:"Strongly Disagree",b:9},{a:"Disagree",b:6},{a:"Neutral",b:22},{a:"Agree",b:29},{a:"Strongly Agree",b:34}];

var data_wom_k=[{a:"Strongly Disagree",b:5},{a:"Disagree",b:16},{a:"Neutral",b:35},{a:"Agree",b:7},{a:"Strongly Agree",b:37}];

var dummydata_wom_l=[{a:"Strongly Disagree",b:9},{a:"Disagree",b:6},{a:"Neutral",b:22},{a:"Agree",b:29},{a:"Strongly Agree",b:34}];

var data_wom_l=[{a:"Strongly Disagree",b:5},{a:"Disagree",b:5},{a:"Neutral",b:31},{a:"Agree",b:23},{a:"Strongly Agree",b:36}];

var dummydata_wom_m=[{a:"Strongly Agree",b:34},{a:"Agree",b:29},{a:"Neutral",b:22},{a:"Disagree",b:6},{a:"Strongly Disagree",b:9}];

var data_wom_m=[{a:"Strongly Agree",b:14},{a:"Agree",b:26},{a:"Neutral",b:40},{a:"Disagree",b:10},{a:"Strongly Disagree",b:10}];

var dummydata_wom_n=[{a:"Yes",b:70},{a:"No",b:30}];

var data_wom_n=[{a:"Yes",b:30},{a:"No",b:70}];

var dummydata_wom_o=[{a:"Yes",b:73},{a:"No",b:27}];

var data_wom_o=[{a:"Yes",b:73},{a:"No",b:27}];

var dummydata_wom_p=[{a:"Yes",b:43},{a:"No",b:57}];

var data_wom_p=[{a:"Yes",b:52},{a:"No",b:48}];

var dummydata_wom_q=[{a:"Yes",b:40},{a:"No",b:60}];

var data_wom_q=[{a:"Yes",b:60},{a:"No",b:40}];

var dummydata_wom_r=[{a:"Yes",b:84},{a:"No",b:16}];

var data_wom_r=[{a:"Yes",b:14},{a:"No",b:86}];

var numero_wom_c=[83];

var numero_wom_d=[33];

var numero_wom_e=[57];

var numero_wom_f=[8];

var numero_wom_g=[50];

var dummydata_wom_s=[{a:"Very Good",b:3},{a:"Good",b:19},{a:"Fair",b:39},{a:"Poor",b:26},{a:"Very Poor",b:13}];

var data_wom_s=[{a:"Very Good",b:3},{a:"Good",b:19},{a:"Fair",b:39},{a:"Poor",b:26},{a:"Very Poor",b:13}];

var dummydata_wom_t=[{a:"Very Good",b:15},{a:"Good",b:33},{a:"Fair",b:27},{a:"Very Poor",b:9},{a:"Poor",b:16}];

var data_wom_t=[{a:"Very Good",b:15},{a:"Good",b:33},{a:"Fair",b:27},{a:"Poor",b:16},{a:"Very Poor",b:9}];

var dummydata_wom_u=[{a:"Very Good",b:22},{a:"Good",b:40},{a:"Fair",b:21},{a:"Poor",b:10},{a:"Very Poor",b:7}];

var data_wom_u=[{a:"Very Good",b:22},{a:"Good",b:40},{a:"Fair",b:21},{a:"Poor",b:10},{a:"Very Poor",b:7}];

var dummydata_wom_v=[{a:"Very Good",b:15},{a:"Good",b:39},{a:"Fair",b:29},{a:"Poor",b:11},{a:"Very Poor",b:6}];

var data_wom_v=[{a:"Very Good",b:15},{a:"Good",b:39},{a:"Fair",b:29},{a:"Poor",b:11},{a:"Very Poor",b:6}];

var dummydata_wom_w=[{a:"Strongly Agree",b:34},{a:"Agree",b:29},{a:"Neutral",b:22},{a:"Disagree",b:6},{a:"Strongly Disagree",b:9}];

var data_wom_w=[{a:"Strongly Agree",b:34},{a:"Agree",b:29},{a:"Neutral",b:22},{a:"Disagree",b:6},{a:"Strongly Disagree",b:9},];

var dummydata_wom_x=[{a:"Strongly Agree",b:34},{a:"Agree",b:29},{a:"Neutral",b:22},{a:"Disagree",b:6},{a:"Strongly Disagree",b:9}];

var data_wom_x=[{a:"Strongly Agree",b:34},{a:"Agree",b:29},{a:"Neutral",b:22},{a:"Disagree",b:6},{a:"Strongly Disagree",b:9}];

var dummydata_wom_y=[{a:"DoD Effectively Addressing",b:19},{a:"Not Effectively Addressing",b:81},{a:"No Opinion",b:1}];

var data_wom_y=[{a:"DoD Effectively Addressing",b:19},{a:"Not Effectively Addressing",b:68},{a:"No Opinion",b:13}];

var dummydata_wom_z=[{a:"DoD Effectively Addressing",b:33},{a:"Not Effectively Addressing",b:67},{a:"No Opinion",b:1}];

var data_wom_z=[{a:"DoD Effectively Addressing",b:33},{a:"Not Effectively Addressing",b:42},{a:"No Opinion",b:25}];

var dummydata_wom_aaa=[{a:"Women",b:45},{a:"Men",b:55}];

var data_wom_aaa=[{a:"Women",b:35},{a:"Men",b:15}];

var numero_sa_w=[35];

var numero_sa_m=[1];

var dummydata_wom_aa=[{a:"Survivor",b:45},{a:"N/A",b:55}];

var data_wom_aa=[{a:"Survivor",b:35},{a:"N/A",b:65}];

var dummydata_wom_bb=[{a:"Survivor",b:1},{a:"N/A",b:99}];

var data_wom_bb=[{a:"Survivor",b:1},{a:"N/A",b:99}];

var dummydata_wom_cc=[{a:"Reported the Crime",b:60},{a:"Did Not Report",b:40}];

var data_wom_cc=[{a:"Reported the Crime",b:40},{a:"Did Not Report",b:60}];

var dummydata_wom_dd=[{a:"Reported the Crime",b:78},{a:"Did Not Report",b:12}];

var data_wom_dd=[{a:"Reported the Crime",b:28},{a:"Did Not Report",b:72}];

var dummydata_wom_ee=[{a:"Experienced Retaliation",b:21},{a:"Did not experience retaliation",b:79},{a:"Prefer not to answer",b:79}];

var data_wom_ee=[{a:"Experienced Retaliation",b:71},{a:"Did not experience retaliation",b:22},{a:"Prefer not to answer",b:7}];

var dummydata_wom_ff=[{a:"Experienced Retaliation",b:14},{a:"Did not experience retaliation",b:76},{a:"Prefer not to answer",b:79}];

var data_wom_ff=[{a:"Experienced Retaliation",b:64},{a:"Did not experience retaliation",b:27},{a:"Prefer not to answer",b:9}];

var dummydata_wom_gg=[{a:"Less of an Authority Figure",b:9},{a:"Would Not Impact View",b:6},{a:"More of an Authority Figure",b:22}];

var data_wom_gg=[{a:"Less of an Authority Figure",b:10},{a:"Would Not Impact View",b:84},{a:"More of an Authority Figure",b:6}];

var dummydata_wom_hh=[{a:"Less of an Authority Figure",b:18},{a:"Would Not Impact View",b:77},{a:"More of an Authority Figure",b:5}];

var data_wom_hh=[{a:"Less of an Authority Figure",b:18},{a:"Would Not Impact View",b:77},{a:"More of an Authority Figure",b:5}];

var dummydata_wom_ii=[{a:"More likely to report",b:56},{a:"Less likely to report",b:44},{a:"No impact",b:44}];

var data_wom_ii=[{a:"More likely to report",b:46},{a:"Less likely to report",b:1},{a:"No impact",b:53}];

var dummydata_wom_jj=[{a:"More likely to report",b:65},{a:"Less likely to report",b:35},{a:"No impact",b:44}];

var data_wom_jj=[{a:"More likely to report",b:35},{a:"Less likely to report",b:2},{a:"No impact",b:63}];

var dummydata_wom_kk=[{a:"Strongly Disagree",b:9},{a:"Disagree",b:6},{a:"Neutral",b:22},{a:"Agree",b:29},{a:"Strongly Agree",b:34}];

var data_wom_kk=[{a:"Strongly Disagree",b:9},{a:"Disagree",b:6},{a:"Neutral",b:22},{a:"Agree",b:29},{a:"Strongly Agree",b:34}];

var data_gib_a=[{a:"Eligible",b:92},{a:"Ineligible",b:8}];

var dummydata_gib_a=[{a:"Eligible",b:2},{a:"Ineligible",b:98}];

var data_gib_b=[{a:"Have Used",b:55},{a:"Transfered to Dependent",b:11},{a:"Intend to Use",b:24},{a:"Plan not to use",b:10}];

var dummydata_gib_b=[{a:"Have Used",b:4},{a:"Transfered to Dependent",b:8},{a:"Intend to Use",b:78},{a:"Plan not to use",b:10}];

var numero_gib=[92];

var numero_gib_nocuts=[87];

var numero_gib_a=[55];

var numero_gib_b=[11];

var numero_gib_c=[24];

var data_gib_c=[{a:"Excellent",b:37},{a:"Good",b:37},{a:"Fair",b:11},{a:"Neutral",b:10},{a:"Poor",b:5}];

var dummydata_gib_c=[{a:"Excellent",b:25},{a:"Good",b:10},{a:"Fair",b:15},{a:"Neutral",b:25},{a:"Poor",b:25}];

var dummydata_gib_d=[{a:"Very Important",b:10},{a:"Important",b:20},{a:"Moderately Important",b:20},{a:"Slightly Important",b:30},{a:"Not Important",b:20}];

var data_gib_d=[{a:"Very Important",b:45},{a:"Important",b:31},{a:"Moderately Important",b:13},{a:"Slightly Important",b:8},{a:"Not Important",b:3}];

var dummydata_gib_e=[{a:"Very Important",b:9},{a:"Important",b:6},{a:"Moderately Important",b:22},{a:"Slightly Important",b:29},{a:"Not Important",b:34}];

var data_gib_e=[{a:"Very Important",b:30},{a:"Important",b:26},{a:"Moderately Important",b:19},{a:"Slightly Important",b:13},{a:"Not Important",b:12}];

var dummydata_gib_f=[{a:"Very Important",b:9},{a:"Important",b:6},{a:"Moderately Important",b:22},{a:"Slightly Important",b:29},{a:"Not Important",b:34}];

var data_gib_f=[{a:"Very Important",b:69},{a:"Important",b:19},{a:"Moderately Important",b:7},{a:"Slightly Important",b:3},{a:"Not Important",b:2}];





var dummydata_employ_a=[{a:"Full-time employment",b:60},{a:"Part-time employment",b:22},{a:"Unemployed and looking for work",b:15},{a:"Other",b:3}];

var data_employ_a=[{a:"Full-time employment",b:57},{a:"Part-time employment",b:5},{a:"Unemployed and looking for work",b:6},{a:"Other",b:32}];

var dummydata_employ_b=[{a:"Full-time employment",b:60},{a:"Part-time employment",b:22},{a:"Unemployed and looking for work",b:15},{a:"Other",b:3}];

var data_employ_b=[{a:"Full-time employment",b:53},{a:"Part-time employment",b:7},{a:"Unemployed and looking for work",b:8},{a:"Other",b:32}];

var dummydata_employ_c=[{a:"Full-time employment",b:60},{a:"Part-time employment",b:22},{a:"Unemployed and looking for work",b:15},{a:"Other",b:3}];

var data_employ_c=[{a:"Full-time employment",b:46},{a:"Part-time employment",b:7},{a:"Unemployed and looking for work",b:10},{a:"Other",b:37}];

var dummydata_employ_d=[{a:"Full-time employment",b:60},{a:"Part-time employment",b:22},{a:"Unemployed and looking for work",b:15},{a:"Other",b:3}];

var data_employ_d=[{a:"Full-time employment",b:37},{a:"Part-time employment",b:8},{a:"Unemployed and looking for work",b:10},{a:"Other",b:45}];

var numero_employ_a=[65];

var numero_employ_b=[37];

var numero_employ_c=[36];

var numero_employ_d=[24];

var dummydata_employ_e=[{a:"Government",b:28},{a:"Health Care",b:8},{a:"Telecommunications",b:10},{a:"Education",b:5},{a:"Manufacturing",b:45}];

var data_employ_e=[{a:"Government",b:32},{a:"Health Care",b:9},{a:"Telecommunications",b:5},{a:"Education",b:5},{a:"Manufacturing",b:4}];

var dummydata_va_a=[{a:"Support",b:36},{a:"Do Not Support",b:54},{a:"No Opinion",b:10}];

var data_va_a=[{a:"Support",b:26},{a:"Do Not Support",b:54},{a:"No Opinion",b:20}];

var dummydata_va_b=[{a:"Very Good",b:37},{a:"Good",b:33},{a:"Fair",b:10},{a:"Poor",b:10},{a:"Very Poor",b:10}];

var data_va_b=[{a:"Very Good",b:13},{a:"Good",b:29},{a:"Fair",b:33},{a:"Poor",b:15},{a:"Very Poor",b:10}];

var dummydata_va_c=[{a:"Enrolled",b:46},{a:"Not Enrolled",b:54}];

var data_va_c=[{a:"Enrolled",b:82},{a:"Not Enrolled",b:18}];

var dummydata_va_bars=[{a:"VA health care exclusively",b:5},{a:"TRICARE and VA health care",b:5},{a:"VA supplemented by private insurance",b:5},{a:"VA supplemented by Medicaid/Medicare",b:5},{a:"DOD and VA health care",b:5},{a:"Private insurance exclusively",b:5},{a:"TRICARE exclusively",b:5},{a:"DOD health care exclusively",b:5},{a:"Don’t have health insurance",b:5},{a:"DOD supplemented by private insurance",b:55},];

var data_va_bars=[{a:"VA health care exclusively",b:28},{a:"TRICARE and VA health care",b:17},{a:"VA supplemented by private insurance",b:15},{a:"VA supplemented by Medicaid/Medicare",b:4},{a:"DOD and VA health care",b:2},{a:"Private insurance exclusively",b:18},{a:"TRICARE exclusively",b:10},{a:"DOD health care exclusively",b:3},{a:"Don’t have health insurance",b:2},{a:"DOD supplemented by private insurance",b:1},];

var numero_va_a=[28];

var numero_va_b=[38];

var numero_va_c=[90];

var dummydata_va_d=[{a:"Strongly Agree",b:13},{a:"Agree",b:54},{a:"Neither Agree Nor Disagree",b:2},{a:"Disagree",b:2},{a:"Strongly Disagree",b:20},{a:"No Opinion",b:9}];

var data_va_d=[{a:"Strongly Agree",b:11},{a:"Agree",b:37},{a:"Neither Agree Nor Disagree",b:21},{a:"Disagree",b:18},{a:"Strongly Disagree",b:10},{a:"No Opinion",b:3}];

var dummydata_va_e=[{a:"Strongly Agree",b:13},{a:"Agree",b:54},{a:"Neither Agree Nor Disagree",b:2},{a:"Disagree",b:2},{a:"Strongly Disagree",b:20},{a:"No Opinion",b:9}];

var data_va_e=[{a:"Strongly Agree",b:14},{a:"Agree",b:48},{a:"Neither Agree Nor Disagree",b:23},{a:"Disagree",b:5},{a:"Strongly Disagree",b:2},{a:"No Opinion",b:8}];

var dummydata_va_f=[{a:"Strongly Agree",b:62},{a:"Agree",b:15},{a:"Neither Agree Nor Disagree",b:10},{a:"Disagree",b:2},{a:"Strongly Disagree",b:2},{a:"No Opinion",b:9}];

var data_va_f=[{a:"Strongly Agree",b:6},{a:"Agree",b:26},{a:"Neither Agree Nor Disagree",b:15},{a:"Disagree",b:31},{a:"Strongly Disagree",b:20},{a:"No Opinion",b:2}];

var dummydata_va_g=[{a:"Strongly Agree",b:2},{a:"Agree",b:54},{a:"Neither Agree Nor Disagree",b:20},{a:"Disagree",b:10},{a:"Strongly Disagree",b:10},{a:"No Opinion",b:2}];

var data_va_g=[{a:"Strongly Agree",b:15},{a:"Agree",b:45},{a:"Neither Agree Nor Disagree",b:22},{a:"Disagree",b:7},{a:"Strongly Disagree",b:3},{a:"No Opinion",b:8}];

var dummydata_va_h=[{a:"Strongly Agree",b:26},{a:"Agree",b:15},{a:"Neither Agree Nor Disagree",b:44},{a:"Disagree",b:2},{a:"Strongly Disagree",b:10},{a:"No Opinion",b:3}];

var data_va_h=[{a:"Strongly Agree",b:12},{a:"Agree",b:41},{a:"Neither Agree Nor Disagree",b:20},{a:"Disagree",b:16},{a:"Strongly Disagree",b:8},{a:"No Opinion",b:3}];

var dummydata_va_i=[{a:"Strongly Agree",b:16},{a:"Agree",b:54},{a:"Neither Agree Nor Disagree",b:3},{a:"Disagree",b:10},{a:"Strongly Disagree",b:10},{a:"No Opinion",b:7}];

var data_va_i=[{a:"Strongly Agree",b:4},{a:"Agree",b:24},{a:"Neither Agree Nor Disagree",b:36},{a:"Disagree",b:21},{a:"Strongly Disagree",b:6},{a:"No Opinion",b:9}];

var numero_va_d=[20];

var numero_va_e=[91];

var dummydata_va_j=[{a:"Excellent",b:24},{a:"Above Average",b:4},{a:"Average",b:6},{a:"Below Average",b:21},{a:"Very Poor",b:36}];

var data_va_j=[{a:"Excellent",b:15},{a:"Above Average",b:22},{a:"Average",b:35},{a:"Below Average",b:13},{a:"Very Poor",b:15}];

var numero_va_f=[76];

var dummydata_va_k=[{a:"Satisfied",b:40},{a:"Not Satisfied",b:24},{a:"Have Not Used",b:36}];

var data_va_k=[{a:"Satisfied",b:58},{a:"Not Satisfied",b:25},{a:"Have Not Used",b:17}];

var dummydata_va_l=[{a:"Satisfied",b:40},{a:"Not Satisfied",b:24},{a:"Have Not Used",b:36}];

var data_va_l=[{a:"Satisfied",b:14},{a:"Not Satisfied",b:8},{a:"Have Not Used",b:78}];

var dummydata_va_m=[{a:"Satisfied",b:40},{a:"Not Satisfied",b:24},{a:"Have Not Used",b:36}];

var data_va_m=[{a:"Satisfied",b:69},{a:"Not Satisfied",b:15},{a:"Have Not Used",b:16}];

var dummydata_va_n=[{a:"Satisfied",b:40},{a:"Not Satisfied",b:24},{a:"Have Not Used",b:36}];

var data_va_n=[{a:"Satisfied",b:53},{a:"Not Satisfied",b:5},{a:"Have Not Used",b:42}];

var dummydata_va_o=[{a:"Satisfied",b:40},{a:"Not Satisfied",b:24},{a:"Have Not Used",b:36}];

var data_va_o=[{a:"Satisfied",b:17},{a:"Not Satisfied",b:10},{a:"Have Not Used",b:73}];

var dummydata_va_p=[{a:"Satisfied",b:40},{a:"Not Satisfied",b:24},{a:"Have Not Used",b:36}];

var data_va_p=[{a:"Satisfied",b:17},{a:"Not Satisfied",b:14},{a:"Have Not Used",b:69}];

var dummydata_va_q=[{a:"Satisfied",b:40},{a:"Not Satisfied",b:24},{a:"Have Not Used",b:36}];

var data_va_q=[{a:"Satisfied",b:8},{a:"Not Satisfied",b:8},{a:"Have Not Used",b:84}];

var numero_va_comp=[82];

var numero_va_notify=[76];

var dummydata_va_claim=[{a:"2017",b:16},{a:"2015",b:57}];

var data_va_claim=[{a:"2017",b:29},{a:"2015",b:33}];

var dummydata_va_decision=[{a:"2017",b:16},{a:"2015",b:57},{a:"2014",b:2}];

var data_va_decision=[{a:"2017",b:36},{a:"2015",b:37},{a:"2014",b:32}];

var dummydata_va_appeal=[{a:"2017",b:16},{a:"2015",b:57}];

var data_va_appeal=[{a:"2017",b:27},{a:"2015",b:33}];

var dummydata_mental_a=[{a:"Yes",b:80},{a:"No",b:20}];

var data_mental_a=[{a:"Yes",b:57},{a:"No",b:43}];

var dummydata_mental_b=[{a:"Yes",b:80},{a:"No",b:20}];

var data_mental_b=[{a:"Yes",b:73},{a:"No",b:27}];


/*
var dummydata_mental_care=[{a:"VA Mental Health Professional",b:24},{a:"Vet Center Counselor",b:9},{a:"Peer Support Group",b:6},{a:"Civilian Mental Health Counselor",b:40},{a:"Religious/Spiritual Leader",b:6}];

var data_mental_care=[{a:"VA Mental Health Professional",b:24},{a:"Vet Center Counselor",b:9},{a:"Peer Support Group",b:6},{a:"Civilian Mental Health Counselor",b:6},{a:"Religious/Spiritual Leader",b:5}];
*/


var numero_mental_a=[16];

var numero_mental_b=[53];

var numero_mental_c=[80];

var numero_suicide_a=[24];

var dummydata_suicide_a=[{a:"Prior to joining the military",b:5},{a:"Since joining the military",b:37}];

var data_suicide_a=[{a:"Prior to joining the military",b:5},{a:"Since joining the military",b:37}];

var dummydata_suicide_aa=[{a:"2017 Prior to joining",b:5},{a:"2017 Since joining",b:37}];

var data_suicide_aa=[{a:"2017 Prior to joining",b:5},{a:"2017 Since joining",b:37}];

var dummydata_suicide_d=[{a:"2017-2016",b:5},{a:"2015",b:5},{a:"2014",b:5}];

var data_suicide_d=[{a:"2017-2016",b:65},{a:"2015",b:54},{a:"2014",b:47}];

var dummydata_suicide_e=[{a:"2017-2016",b:5},{a:"2015",b:5},{a:"2014",b:5}];

var data_suicide_e=[{a:"2017-2016",b:58},{a:"2015",b:45},{a:"2014",b:40}];


/*
var dummydata_health_a=[{a:"PTSD",b:6},{a:"Anxiety",b:5},{a:"Depression",b:2},{a:"Tinnitus/Hearing Loss",b:4},{a:"Musculoskeletal Injuries/ Chronic Pain",b:8},{a:"TBI",b:9},{a:"Pulmonary issues",b:9},{a:"Burns/Scarring",b:1},{a:"Vision Loss",b:7},{a:"Other",b:1}];

var data_health_a=[{a:"PTSD",b:46},{a:"Anxiety",b:45},{a:"Depression",b:42},{a:"Tinnitus/Hearing Loss",b:41},{a:"Musculoskeletal Injuries/ Chronic Pain",b:38},{a:"TBI",b:19},{a:"Pulmonary issues",b:19},{a:"Burns/Scarring",b:11},{a:"Vision Loss",b:7},{a:"Other",b:19}];

*/



var dummydata_health_b=[{a:"Chiropractic Care",b:46},{a:"Meditation",b:42},{a:"Yoga",b:41},{a:"Outdoor Adventure",b:38},{a:"Acupuncture",b:19},{a:"Music or Art Therapy",b:19},{a:"Animal-Assisted",b:11}];

var data_health_b=[{a:"Chiropractic Care",b:29},{a:"Meditation",b:25},{a:"Yoga",b:21},{a:"Outdoor Adventure",b:19},{a:"Acupuncture",b:17},{a:"Music or Art Therapy",b:14},{a:"Animal-Assisted",b:10}];

var numero_health_a=[80];

var numero_health_b=[63];

var numero_health_c=[35];

var numero_health_d=[6];

var numero_health_e=[23];

var numero_health_f=[80];

var dummydata_health_c=[{a:"Excellent",b:40},{a:"Good",b:5},{a:"Fair",b:55}];

var data_health_c=[{a:"Excellent",b:74},{a:"Good",b:23},{a:"Fair",b:3}];

var dummydata_health_d=[{a:"Excellent",b:5},{a:"Good",b:5},{a:"Fair",b:3},{a:"Poor",b:3}];

var data_health_d=[{a:"Excellent",b:7},{a:"Good",b:29},{a:"Fair",b:43},{a:"Poor",b:21}];

var dummydata_health_e=[{a:"Anti-depressant",b:3},{a:"Opioid",b:3},{a:"Sleeping Pills",b:5},{a:"Anti-anxiety",b:5}];

var data_health_e=[{a:"Anti-depressant",b:23},{a:"Opioid",b:23},{a:"Sleeping Pills",b:22},{a:"Anti-anxiety",b:20}];

var dummydata_tran_a=[{a:"None",b:23},{a:"Few",b:23},{a:"Some",b:25},{a:"Many",b:25}];

var data_tran_a=[{a:"None",b:10},{a:"Few",b:16},{a:"Some",b:42},{a:"Many",b:32}];

var numero_tran_a=[42];

var numero_tran_b=[66];

var numero_tran_c=[25];

var numero_tran_d=[63];

var numero_tran_e=[23];

var scrollVis=function(){var width=window.innerWidth,height=window.innerHeight;

var margin={top:10,left:20,bottom:80,right:10};

var countslides=0;

var lastIndex=-1;

var activeIndex=0;

var svg=null;

var g=null;

var activateFunctions=[];

var updateFunctions=[];

var chart=function(selection){selection.each(function(){setupSections();});};

setupVis=function(){};setupSections=function(){

activateFunctions[0]=showTitle0;

activateFunctions[1]=showTitle1;

activateFunctions[2]=showTitle2;

activateFunctions[3]=showTitle3;

activateFunctions[4]=showTitle4;

activateFunctions[5]=showTitle5;

activateFunctions[6]=showTitle6;

activateFunctions[7]=showTitle7;

activateFunctions[8]=showTitle8;

activateFunctions[9]=showTitle9;

activateFunctions[10]=showTitle10;

activateFunctions[11]=showTitle11;

activateFunctions[12]=showTitle12;

activateFunctions[13]=showTitle13;

activateFunctions[14]=showTitle14;

activateFunctions[15]=showTitle15;

activateFunctions[16]=showTitle16;

activateFunctions[17]=showTitle17;

activateFunctions[18]=showTitle18;

activateFunctions[19]=showTitle19;

activateFunctions[20]=showTitle20;

activateFunctions[21]=showTitle21;

activateFunctions[22]=showTitle22;

activateFunctions[23]=showTitle23;

activateFunctions[24]=showTitle24;

activateFunctions[25]=showTitle25;

activateFunctions[26]=showTitle26;

/////
/*
activateFunctions[27]=showTitle27;

*/
//////

for(var i=0;i<27+1;i++){updateFunctions[i]=function(){};}};



function showTitle0(){var vis=document.getElementById("vis");vis.setAttribute("style","display:inline-block; ");

var navbarmd=document.getElementById("navbar-md");navbarmd.setAttribute("style","visibility:hidden; ");

var logoOpener=document.getElementById("logoOpener");logoOpener.setAttribute("style","display:inline-block; ");

var bgvid0=document.getElementById("bgvid0");bgvid0.setAttribute("style","visibility:visible; ");

var stepper=document.getElementById("step-1");stepper.setAttribute("style","visibility:hidden; ");

var greenoverlay=document.getElementById("greenoverlay");greenoverlay.setAttribute("style","visibility:hidden; ");

var greenoverlay=document.getElementById("greenoverlaycover");greenoverlay.setAttribute("style","visibility:visible; ");

var containerA=document.getElementById("container-1");containerA.setAttribute("style","visibility:hidden; ");

if(!trigger){

drawPieChart(dummydata_age);

drawPieChart(dummydata_community);

drawHBarChart(dummydata_income);

drawHBarChart(data_school);

drawPieChart(dummydata_marital);

drawPieChart(data_children);

drawHBarChart(data_ethnicity);

drawHBarChart(data_religion);

drawStackChart(data_gender);

drawStackChart(data_orientation);

///////////
////////////

drawPieChart(dummydata_branch);

drawPieChart(dummydata_officer);


drawHBarChart(data_l);

drawStackChart(data_m);

drawStackChart(data_n);

drawStackChart(data_o);

drawStackChart(data_p);


drawStackChart(data_pp);

startnumerosA(numero_natg);

 
drawHBarChart(data_milserve_separate);

drawStackChart(data_discharge);


startnumerosA(numero_member);

drawStackChart(data_interact);

drawHBarChart(data_interact_how);

drawStackChart(data_milserve_recommend);




 

///////
//////
///////////

startnumerosB(data_planning);

 
drawStackChart(data_reg);


drawHBarChart(data_party);

startnumerosA(numero_impact);

startnumerosB(numero_considered);




/*

startnumerosA(numeroB);

startnumerosB(numeroVoted);

startsmallnumerosA(numeroE);

drawStackChart(data_s);
*/
drawStackChart(data_public_support);

drawStackChart(data_employer_support);

drawStackChart(data_congress_support);

drawStackChart(data_trump_support);

drawStackChart(data_public_understand);





////
///
////
////

drawStackChart(data_parade);

drawHBarChart(data_afghan_visa);

drawHBarChart(data_citizenship);

drawHBarChart(data_deport);

drawStackChart(data_deport_impacted);

drawStackChart(data_deport_know);

 drawHBarChart(data_iraq_worth);

drawHBarChart(data_afghan_worth);

 
 
 drawStackChart(data_selective_women);

drawStackChart(data_selective_end);


drawHBarChart(data_nfl);

drawHBarChart(data_nfl_plan);


 drawStackChart(data_transgender);

drawStackChart(data_dadt);
 
 ////
 
  ////
  //////
  
  
startnumerosA(numero_guns);
 drawHBarChart(data_guns_storage);

  drawStackChart(data_guns_lockers);
  drawStackChart(data_guns_concealed);
  drawStackChart(data_guns_assault);
  drawStackChart(data_guns_high);
  drawStackChart(data_guns_wait);
  drawStackChart(data_guns_trigger);
  drawStackChart(data_guns_background);

  
  

///
//////
////





  drawStackChart(data_challenges);
  drawStackChart(data_finances);
  drawStackChart(data_bills);
startnumerosA(numero_lending);
  drawStackChart(data_conditions);
startnumerosA(numero_perm);
  drawStackChart(data_tran_long);
    drawStackChart(data_tran_temp);

  
 drawHBarChart(data_tran_current);

  
  
    drawStackChart(data_tran_tap);
  drawStackChart(data_tran_rate);
  drawStackChart(data_tran_when);
  drawStackChart(data_tran_plan);

  drawHBarChart(data_tran_challenges);

  drawStackChart(data_tran_familiar);

  drawHBarChart(data_benefits_influential);

 
//////
////////

startsmallnumerosA(numero_suicide_progress);
startsmallnumerosA(numero_suicide_know_attempt);
startsmallnumerosA(numero_suicide_know_died);

  drawStackChart(data_mental_considered_before);
  drawStackChart(data_mental_considered);
  drawStackChart(data_mental_hotline);
  drawStackChart(data_mental_hotline_contact);

 
  

///////////////
////////////////////
////

  
startnumerosA(numero_mental_care);

  drawHBarChart(data_mental_help_why);

  drawStackChart(data_mental_injury);

  drawStackChart(data_mental_help);
  drawHBarChart(data_mental_help_where);
  drawHBarChart(data_mental_help_not);
  drawStackChart(data_mental_help_suggest);
  drawStackChart(data_mental_help_sought);

  
////////////////////
////







////
//

drawPieChart(dummydata_health_before);
drawPieChart(dummydata_health_after);
drawPieChart(dummydata_health_importance);

drawStackChart(data_health_injury);
drawHBarChart(dummydata_health_a);

drawStackChart(data_health_pain);
drawHBarChart(data_health_affect);

drawStackChart(data_health_sleep_trouble);
drawStackChart(data_health_sleep_diagnosed);

drawStackChart(data_health_exercise);

drawStackChart(data_health_exercise_often);

drawHBarChart(data_health_medication);

drawHBarChart(data_health_therapies);

drawStackChart(data_health_therapies_result);
drawStackChart(data_health_assisting);

drawHBarChart(data_health_assisting);
drawStackChart(data_health_activities);

  
////
////////
/// 
//// exposed to burn pits


drawStackChart(data_burn);
drawStackChart(data_burn_symptoms);
drawStackChart(data_burn_registry);
drawStackChart(data_burn_registered);
drawStackChart(data_burn_issues);

 
 
 
////


 
 
 
 
 startnumerosA(numero_cannabis);
 
 drawStackChart(data_mj_research);
drawStackChart(data_mj_va_research);
drawStackChart(data_mj_medicinal);
drawStackChart(data_mj_legal);

drawPieChart(dummydata_cannabis);
drawPieChart(dummydata_cannabis_comfort);
drawPieChart(dummydata_cannabis_discussed);


drawPieChart(dummydata_cannabis_recreational);
drawPieChart(dummydata_cannabis_legal_med);
drawPieChart(dummydata_cannabis_legal_rec);


 
 
 
 
 

 //////////////////////////
 //////////////
 //////// Tobacco alcohol use
 //      



drawStackChart(data_tobacco);
drawHBarChart(data_tobacco_type);
 
drawStackChart(data_tobacco_use);
drawHBarChart(data_tobacco_often);

drawHBarChart(data_alcohol);

drawHBarChart(data_alcohol_max);

drawHBarChart(data_alcohol_typical);

drawHBarChart(data_alcohol_twohour);

   
///
///////
//////////////




///////
////
 ////////////////
/// womens data
////////////////


drawStackChart(data_wom_iava);
drawHBarChart(data_wom_motto);
 
drawStackChart(data_wom_positions);

 drawPieChart(dummydata_wom_combat);
drawPieChart(dummydata_wom_recognition);


  
///
///////
////
 startnumerosB(numero_mst);
 
 drawStackChart(data_wom_prosecutor);

drawStackChart(data_wom_survivor);

 drawStackChart(data_wom_report);

drawHBarChart(data_wom_impact);
 drawStackChart(data_wom_retaliation);
  drawHBarChart(data_wom_not_report);

 
///
///////////
/////va health
////

 startnumerosB(numero_enrolled);
  drawHBarChart(data_wom_not_report);

 startnumerosB(numero_other);
  drawHBarChart(data_va_coverage);

 drawStackChart(data_va_primary);

  drawHBarChart(data_va_last);
 drawStackChart(data_va_experience);
  drawHBarChart(data_va_none);

 drawStackChart(data_va_understand);
 drawStackChart(data_va_quality);


 drawStackChart(data_va_non_understand);
 drawStackChart(data_va_non_quality);


 drawStackChart(data_va_scheduling_prim);
 drawStackChart(data_va_scheduling_mental);
 drawStackChart(data_va_scheduling_special);


 drawStackChart(data_va_satisfaction_prim);
 drawStackChart(data_va_satisfaction_special);
 drawStackChart(data_va_satisfaction_mental);

 drawStackChart(data_va_scheduling_non_prim);
 drawStackChart(data_va_scheduling_non_mental);
 drawStackChart(data_va_scheduling_non_spec);


  drawHBarChart(data_va_choose_non);
  drawHBarChart(data_va_choose);

 drawStackChart(data_va_familiar);
 drawStackChart(data_va_choice);
  drawStackChart(data_va_choice_exp);

  startnumerosB(numero_va_mission);

 drawStackChart(data_va_private);

  
 

////////
 
  drawStackChart(data_va_rating);
 
  drawHBarChart(data_va_claim_long);

  drawHBarChart(data_va_pending);
 
  drawStackChart(data_va_outcome);

  drawStackChart(data_va_appeal);
 
  drawHBarChart(data_va_decision);

  drawHBarChart(data_va_appeal_pending);
 
 
 
  drawStackChart(data_va_rate_dis);
  drawStackChart(data_va_rate_pension);
  drawStackChart(data_va_rate_edu);
  drawStackChart(data_va_rate_home);
  drawStackChart(data_va_rate_ins);
  drawStackChart(data_va_rate_voc);
  drawStackChart(data_va_rate_care);

 

  drawHBarChart(data_va_ask);
 

//////
///////

  drawStackChart(data_gi_eligible);
   drawHBarChart(data_gi_use);
   drawStackChart(data_gi_grad);
  drawStackChart(data_gi_exp);
  drawStackChart(data_gi_imp_recruit);
  drawStackChart(data_gi_imp_retent);
  drawStackChart(data_gi_imp_trans);

 
 ////
 ///
 
 
 startnumerosA(numero_ed_a);
startnumerosB(numero_ed_b);
startnumerosC(numero_ed_c);
 
  drawStackChart(data_ed_b);
  drawHBarChart(data_ed_c);
  drawStackChart(data_ed_vetfriend);
  drawStackChart(data_ed_a);
 
 startnumerosB(numero_ed_d);
 
   drawHBarChart(data_ed_d);



 
 
 ///
////
//////  
///
 //////
/////
/////////


trigger=1;iii='';}else{}}

function showTitle1(){var greenoverlaycover=document.getElementById("greenoverlaycover");greenoverlaycover.setAttribute("style","visibility:visible; ");

var scrollimg=document.getElementById("scrollimg");scrollimg.setAttribute("style","display:none; ");

var navbarmd=document.getElementById("navbar-md");navbarmd.setAttribute("style","visibility:visible; ");navbarmd.setAttribute("style","z-index:99999999; ");

var covermenu=document.getElementById("covermenu");covermenu.setAttribute("style","display:none; ");

var logoOpener=document.getElementById("logoOpener");logoOpener.setAttribute("style","display:none; ");

var bgvid0=document.getElementById("bgvid0");bgvid0.setAttribute("style","visibility:hidden; ");

var greenoverlay=document.getElementById("greenoverlay");greenoverlay.setAttribute("style","visibility:visible; ");

var containerA=document.getElementById("container-1");containerA.setAttribute("style","visibility:hidden; ");}

function showTitle2(){var containerA=document.getElementById("container-1");containerA.setAttribute("style","visibility:visible; ");

var greenoverlay=document.getElementById("greenoverlay");greenoverlay.setAttribute("style","visibility:visible; ");iii=0;


changePieChart(data_age,"svg0");

changePieChart(data_community,"svg1");

changeHBarChart(data_income,"svg2");

changeHBarChart(data_school,"svg3");

changePieChart(data_marital,"svg4");

changePieChart(data_children,"svg5");

changeHBarChart(data_ethnicity,"svg6");

changeHBarChart(data_religion,"svg7");

drawStackChart(data_gender,"svg8");

drawStackChart(data_orientation,"svg9");



}

function showTitle3(){var containerA=document.getElementById("container-1");containerA.setAttribute("style","visibility:hidden; ");

iii=10;

////////////
 

///////


changePieChart(data_branch,"svg10");

changePieChart(data_officer,"svg11");

changeHBarChart(data_l,"svg12");

drawStackChart(data_m,"svg13");

drawStackChart(data_n,"svg14");

drawStackChart(data_o,"svg15");

drawStackChart(data_p,"svg16");

drawStackChart(data_pp,"svg17");

startnumerosA(numero_natg,"svg18");


 

changeHBarChart(data_milserve_separate,"svg19");

drawStackChart(data_discharge,"svg20");

startnumerosA(numero_member,"svg21");

drawStackChart(data_interact,"svg22");

changeHBarChart(data_interact_how,"svg23");

drawStackChart(data_milserve_recommend,"svg24");

}

function showTitle4(){

iii=25;

 

startnumerosB(data_planning,"svg25");

changeStackChart(data_reg,"svg26");

changeHBarChart(data_party,"svg27");

startnumerosA(numero_impact,"svg28");

startnumerosB(numero_considered,"svg29");

}


function showTitle5(){
iii=30;

/*

startsmallnumerosA(numeroE,"svg23");

changeStackChart(data_s,"svg24");


*/

 

changeStackChart(data_public_support,"svg30");

changeStackChart(data_employer_support,"svg31");

changeStackChart(data_congress_support,"svg32");

changeStackChart(data_trump_support,"svg33");

changeStackChart(data_public_understand,"svg34");

}

function showTitle6(){

iii=35;

/*



changeStackChart(data_y,"svg30");

var greenoverlay=document.getElementById("greenoverlay");greenoverlay.setAttribute("style","visibility:visible; ");}

function showTitle6(){iii=31;

startsmallnumerosA(numero_guns,"svg31");

changeHBarChart(data_guns_own_aa,"svg32");
*/



drawStackChart(data_parade,"svg35");

changeHBarChart(data_afghan_visa,"svg36");

changeHBarChart(data_citizenship,"svg37");

changeHBarChart(data_deport,"svg38");

drawStackChart(data_deport_impacted,"svg39");

drawStackChart(data_deport_know,"svg40");

 changeHBarChart(data_iraq_worth,"svg41");

changeHBarChart(data_afghan_worth,"svg42");

 
 
 drawStackChart(data_selective_women,"svg43");

drawStackChart(data_selective_end,"svg44");


changeHBarChart(data_nfl,"svg45");

changeHBarChart(data_nfl_plan,"svg46");


 drawStackChart(data_transgender,"svg47");

drawStackChart(data_dadt,"svg48");
 
 
 
 
 
}

function showTitle7(){

iii=49;


  
  
startnumerosA(numero_guns,"svg49");
 changeHBarChart(data_guns_storage,"svg50");

  drawStackChart(data_guns_lockers,"svg51");
  drawStackChart(data_guns_concealed,"svg52");
  drawStackChart(data_guns_assault,"svg53");
  drawStackChart(data_guns_high,"svg54");
  drawStackChart(data_guns_wait,"svg55");
  drawStackChart(data_guns_trigger,"svg56");
  drawStackChart(data_guns_background,"svg57");

  
  




/*
 

*/

}



function showTitle8(){


/*

iii=38;
 

*/







  drawStackChart(data_challenges,"svg58");
  drawStackChart(data_finances,"svg59");
  drawStackChart(data_bills,"svg60");
startnumerosA(numero_lending,"svg61");
  drawStackChart(data_conditions,"svg62");
startnumerosA(numero_perm,"svg63");
   drawStackChart(data_tran_long,"svg64");
 drawStackChart(data_tran_temp,"svg65");
  
  
 drawHBarChart(data_tran_current,"svg66");

  
  
    drawStackChart(data_tran_tap,"svg67");
  drawStackChart(data_tran_rate,"svg68");
  drawStackChart(data_tran_when,"svg69");
  drawStackChart(data_tran_plan,"svg70");

  drawHBarChart(data_tran_challenges,"svg71");

  drawStackChart(data_tran_familiar,"svg72");

  drawHBarChart(data_benefits_influential,"svg73");

 





}

function showTitle9(){

/*

iii=40;
 

*/





startsmallnumerosA(numero_suicide_progress,"svg74");
startsmallnumerosA(numero_suicide_know_attempt,"svg75");
startsmallnumerosA(numero_suicide_know_died,"svg76");

  drawStackChart(data_mental_considered_before,"svg77");
  drawStackChart(data_mental_considered,"svg78");
  drawStackChart(data_mental_hotline,"svg79");
  drawStackChart(data_mental_hotline_contact,"svg80");

 
  



}



function showTitle10(){

/*

iii=46;

 
*/

startnumerosA(numero_mental_care,"svg81");

  drawHBarChart(data_mental_help_why,"svg82");

  drawStackChart(data_mental_injury,"svg83");

  drawStackChart(data_mental_help,"svg84");
  drawHBarChart(data_mental_help_where,"svg85");
  drawHBarChart(data_mental_help_not,"svg86");
  drawStackChart(data_mental_help_suggest,"svg87");
  drawStackChart(data_mental_help_sought,"svg88");

  
  
  

}

function showTitle11(){

/*

iii=53;
 


*/





changePieChart(data_health_before,"svg89");
changePieChart(data_health_after,"svg90");
changePieChart(data_health_importance,"svg91");

changeStackChart(data_health_injury,"svg92");
changeHBarChart(data_health_a,"svg93");

changeStackChart(data_health_pain,"svg94");
changeHBarChart(data_health_affect,"svg95");

changeStackChart(data_health_sleep_trouble,"svg96");
changeStackChart(data_health_sleep_diagnosed,"svg97");

changeStackChart(data_health_exercise,"svg98");

changeStackChart(data_health_exercise_often,"svg99");

changeHBarChart(data_health_medication,"svg100");

changeHBarChart(data_health_therapies,"svg101");

changeStackChart(data_health_therapies_result,"svg102");
changeStackChart(data_health_assisting,"svg103");

changeHBarChart(data_health_assisting,"svg104");
changeStackChart(data_health_activities,"svg105");

 

}

function showTitle12(){


/*

iii=66;
 
*/



changeStackChart(data_burn,"svg106");
changeStackChart(data_burn_symptoms,"svg107");
changeStackChart(data_burn_registry,"svg108");
changeStackChart(data_burn_registered,"svg109");
changeStackChart(data_burn_issues,"svg110");

  
}

function showTitle13(){
/*

iii=75;

 */
 
 
 
 
 startnumerosA(numero_cannabis,"svg111");
 
 changeStackChart(data_mj_research,"svg112");
changeStackChart(data_mj_va_research,"svg113");
changeStackChart(data_mj_medicinal,"svg114");
changeStackChart(data_mj_legal,"svg115");

changePieChart(data_cannabis,"svg116");
changePieChart(data_cannabis_comfort,"svg117");
changePieChart(data_cannabis_discussed,"svg118");


changePieChart(data_cannabis_recreational,"svg119");
changePieChart(data_cannabis_legal_med,"svg120");
changePieChart(data_cannabis_legal_rec,"svg121");


 
 
 
}

function showTitle14(){

iii=122;

/*

 

*/



changeStackChart(data_tobacco,"svg122");
changeHBarChart(data_tobacco_type,"svg123");
 
changeStackChart(data_tobacco_use,"svg124");
changeHBarChart(data_tobacco_often,"svg125");

changeHBarChart(data_alcohol,"svg126");

changeHBarChart(data_alcohol_max,"svg127");

changeHBarChart(data_alcohol_typical,"svg128");

changeHBarChart(data_alcohol_twohour,"svg129");







}

function showTitle15(){


/*

iii=94;

 
*/



changeStackChart(data_wom_iava,"svg130");
changeHBarChart(data_wom_motto,"svg131");
 
changeStackChart(data_wom_positions,"svg132");

 changePieChart(data_wom_combat,"svg133");
changePieChart(data_wom_recognition,"svg134");





}

function showTitle16(){


iii=135;


/*
 
*/


 startnumerosB(numero_mst,"svg135");
 
 changeStackChart(data_wom_prosecutor,"svg136");

changeStackChart(data_wom_survivor,"svg137");

 changeStackChart(data_wom_report,"svg138");

changeHBarChart(data_wom_impact,"svg139");
 changeStackChart(data_wom_retaliation,"svg140");
  changeHBarChart(data_wom_not_report,"svg141");


 
 
 

}

function showTitle17(){
/*
iii=110;
 
*/



 startnumerosB(numero_enrolled,"svg142");
  changeHBarChart(data_wom_not_report,"svg143");

 startnumerosB(numero_other,"svg144");
  changeHBarChart(data_va_coverage,"svg145");

 changeStackChart(data_va_primary,"svg146");

  changeHBarChart(data_va_last,"svg147");
 changeStackChart(data_va_experience,"svg148");
  changeHBarChart(data_va_none,"svg149");

 changeStackChart(data_va_understand,"svg150");
 changeStackChart(data_va_quality,"svg151");


 changeStackChart(data_va_non_understand,"svg152");
 changeStackChart(data_va_non_quality,"svg153");


 changeStackChart(data_va_scheduling_prim,"svg154");
 changeStackChart(data_va_scheduling_mental,"svg155");
 changeStackChart(data_va_scheduling_special,"svg156");


 changeStackChart(data_va_satisfaction_prim,"svg157");
 changeStackChart(data_va_satisfaction_special,"svg158");
 changeStackChart(data_va_satisfaction_mental,"svg159");

 changeStackChart(data_va_scheduling_non_prim,"svg160");
 changeStackChart(data_va_scheduling_non_mental,"svg161");
 changeStackChart(data_va_scheduling_non_spec,"svg162");


  changeHBarChart(data_va_choose_non,"svg163");
  changeHBarChart(data_va_choose,"svg164");

 changeStackChart(data_va_familiar,"svg165");
 changeStackChart(data_va_choice,"svg166");
  changeStackChart(data_va_choice_exp,"svg167");

  startnumerosB(numero_va_mission,"svg168");

 changeStackChart(data_va_private,"svg169");

 
 
 
 

}

function showTitle18(){

/*

iii=126;

 
*/


  changeStackChart(data_va_rating,"svg170");
 
  changeHBarChart(data_va_claim_long,"svg171");

  changeHBarChart(data_va_pending,"svg172");
 
  changeStackChart(data_va_outcome,"svg173");

  changeStackChart(data_va_appeal,"svg174");
 
  changeHBarChart(data_va_decision,"svg175");

  changeHBarChart(data_va_appeal_pending,"svg176");
 
 
 
  changeStackChart(data_va_rate_dis,"svg177");
  changeStackChart(data_va_rate_pension,"svg178");
  changeStackChart(data_va_rate_edu,"svg179");
  changeStackChart(data_va_rate_home,"svg180");
  changeStackChart(data_va_rate_ins,"svg181");
  changeStackChart(data_va_rate_voc,"svg182");
  changeStackChart(data_va_rate_care,"svg183");

 

  changeHBarChart(data_va_ask,"svg184");
 
 
 
 
}

function showTitle19(){
 
   changeStackChart(data_gi_eligible,"svg185");

  changeHBarChart(data_gi_use,"svg186");

  changeStackChart(data_gi_grad,"svg187");
  changeStackChart(data_gi_exp,"svg188");
 
 changeStackChart(data_gi_imp_recruit,"svg189");
  changeStackChart(data_gi_imp_retent,"svg190");
  changeStackChart(data_gi_imp_trans,"svg191");

  
   
}

function showTitle20(){

/*

iii=145;

*/


  
 startnumerosA(numero_ed_a,"svg192");
startnumerosB(numero_ed_b,"svg193");
startnumerosC(numero_ed_c,"svg194");
 
  changeStackChart(data_ed_b,"svg195");
  changeHBarChart(data_ed_c,"svg196");
  changeStackChart(data_ed_vetfriend,"svg197");
  changeStackChart(data_ed_a,"svg198");
 
 startnumerosB(numero_ed_d,"svg199");
 
   changeHBarChart(data_ed_d,"svg200");


 
 

}
 
function showTitle21(){

///////iii=160;




d3.select("#mapcontain").select("svg").remove();
d3.select("#mapcontain").select("g").remove();




d3.select("#legendcontain").select("svg").remove();
d3.select("#legendcontain").select("rect").remove();


    

d3.select("body").selectAll("toolTip").remove();

    
    
    
    

}


/*

function showTitle22(){iii=160;

changeStackChart(data_tran_a,"svg160");

startnumerosA(numero_tran_a,"svg161");

startnumerosB(numero_tran_b,"svg162");

startnumerosC(numero_tran_c,"svg163");

startnumerosA(numero_tran_d,"svg164");

startnumerosB(numero_tran_e,"svg165");

d3.select("#mapcontain").select("svg").remove();d3.select("#mapcontain").select("g").remove();d3.select("#legendcontain").select("svg").remove();d3.select("#legendcontain").select("rect").remove();d3.select("body").selectAll("toolTip").remove();}

*/

function showTitle22(){

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



function showTitle23(){

d3.select("body").selectAll("toolTip").remove();d3.select("#mapcontain").select("svg").remove();d3.select("#mapcontain").select("g").remove();d3.select("#legendcontain").select("svg").remove();d3.select("#legendcontain").select("rect").remove();}

function showTitle24(){}

function showTitle25(){

var titleCloser=document.getElementById("titleCloser");titleCloser.setAttribute("style","display:none; ");

}

function showTitle26(){

var titleCloser=document.getElementById("titleCloser");titleCloser.setAttribute("style","display:none; ");

}


chart.activate=function(index){

activeIndex=index;

var sign=activeIndex-lastIndex<0?-1:1;

var scrolledSections=d3.range(lastIndex+sign,activeIndex+sign,sign);scrolledSections.forEach(function(i){activateFunctions[i]();});lastIndex=activeIndex;};chart.update=function(index,progress){updateFunctions[index](progress);};return chart;};function display(){var plot=scrollVis();d3.select("#vis").call(plot);

var scroll=scroller().container(d3.select("#graphic"));scroll(d3.selectAll(".step"));scroll.on("active",function(index){for(var i=0;i<window.slides.length;i++){var slide=window.slides[i];if(i+1===index){slide.show();console.log("show");}else{slide.hide();console.log("hide");}}d3.selectAll("#step-"+index).style("visibility",function(d,i){return i==index?"none":"inline-block";});d3.selectAll("#step-"+(index-1)).style("visibility",function(d,i){return i==index?"inline-block":"none";});d3.selectAll("#step-"+(index+1)).style("visibility",function(d,i){return i==index?"inline-block":"none";});plot.activate(index);});scroll.on("progress",function(index,progress){plot.update(index,progress);});}

document.addEventListener("DOMContentLoaded",function(){display();});

window.addEventListener("resize",onResize);

function onResize(h){var height=window.windowHeight;

var width=window.windowWidth;resize();

iii=0;
changePieChart(data_age,"svg0");

changePieChart(data_community,"svg1");

changeHBarChart(data_income,"svg2");

changeHBarChart(data_school,"svg3");

changePieChart(data_marital,"svg4");

changePieChart(data_children,"svg5");

changeHBarChart(data_ethnicity,"svg6");

changeHBarChart(data_religion,"svg7");

drawStackChart(data_gender,"svg8");

drawStackChart(data_orientation,"svg9");
//////
//////

changePieChart(data_branch,"svg10");

changePieChart(data_officer,"svg11");

changeHBarChart(data_l,"svg12");

drawStackChart(data_m,"svg13");

drawStackChart(data_n,"svg14");

drawStackChart(data_o,"svg15");

drawStackChart(data_p,"svg16");

drawStackChart(data_pp,"svg17");

startnumerosA(numero_natg,"svg18");


changeHBarChart(data_milserve_separate,"svg19");

drawStackChart(data_discharge,"svg20");

startnumerosA(numero_member,"svg21");

drawStackChart(data_interact,"svg22");

changeHBarChart(data_interact_how,"svg23");

drawStackChart(data_milserve_recommend,"svg24");


////////////
/////////////////
//////////


iii=25;

startnumerosB(data_planning,"svg25");
changeStackChart(data_reg,"svg26");


changeHBarChart(data_party,"svg27");

startnumerosA(numero_impact,"svg28");

startnumerosB(numero_considered,"svg29");
 





 

changeStackChart(data_public_support,"svg30");

changeStackChart(data_employer_support,"svg31");

changeStackChart(data_congress_support,"svg32");

changeStackChart(data_trump_support,"svg33");

changeStackChart(data_public_understand,"svg34");





////
///




drawStackChart(data_parade,"svg35");

drawHBarChart(data_afghan_visa,"svg36");

drawHBarChart(data_citizenship,"svg37");

drawHBarChart(data_deport,"svg38");

drawStackChart(data_deport_impacted,"svg39");

drawStackChart(data_deport_know,"svg40");

 drawHBarChart(data_iraq_worth,"svg41");

drawHBarChart(data_afghan_worth,"svg42");

 
 
 drawStackChart(data_selective_women,"svg43");

drawStackChart(data_selective_end,"svg44");


drawHBarChart(data_nfl,"svg45");

drawHBarChart(data_nfl_plan,"svg46");


 drawStackChart(data_transgender,"svg47");

drawStackChart(data_dadt,"svg48");
 
 
 
 
 
 
 ///
 ////
 /////
 
 
startnumerosA(numero_guns,"svg49");
 changeHBarChart(data_guns_storage,"svg50");

  drawStackChart(data_guns_lockers,"svg51");
  drawStackChart(data_guns_concealed,"svg52");
  drawStackChart(data_guns_assault,"svg53");
  drawStackChart(data_guns_high,"svg54");
  drawStackChart(data_guns_wait,"svg55");
  drawStackChart(data_guns_trigger,"svg56");
  drawStackChart(data_guns_background,"svg57");

  
  
 



  drawStackChart(data_challenges,"svg58");
  drawStackChart(data_finances,"svg59");
  drawStackChart(data_bills,"svg60");
startnumerosA(numero_lending,"svg61");
  drawStackChart(data_conditions,"svg62");
startnumerosA(numero_perm,"svg63");
   drawStackChart(data_tran_long,"svg64");
 drawStackChart(data_tran_temp,"svg65");
  
  
 drawHBarChart(data_tran_current,"svg66");

  
  
    drawStackChart(data_tran_tap,"svg67");
  drawStackChart(data_tran_rate,"svg68");
  drawStackChart(data_tran_when,"svg69");
  drawStackChart(data_tran_plan,"svg70");

  drawHBarChart(data_tran_challenges,"svg71");

  drawStackChart(data_tran_familiar,"svg72");

  drawHBarChart(data_benefits_influential,"svg73");

 

 
 
 
startsmallnumerosA(numero_suicide_progress,"svg74");
startsmallnumerosA(numero_suicide_know_attempt,"svg75");
startsmallnumerosA(numero_suicide_know_died,"svg76");

  drawStackChart(data_mental_considered_before,"svg77");
  drawStackChart(data_mental_considered,"svg78");
  drawStackChart(data_mental_hotline,"svg79");
  drawStackChart(data_mental_hotline_contact,"svg80");

 
  
  
  
  
 startnumerosA(numero_mental_care,"svg81");

  drawHBarChart(data_mental_help_why,"svg82");

  drawStackChart(data_mental_injury,"svg83");

  drawStackChart(data_mental_help,"svg84");
  drawHBarChart(data_mental_help_where,"svg85");
  drawHBarChart(data_mental_help_not,"svg86");
  drawStackChart(data_mental_help_suggest,"svg87");
  drawStackChart(data_mental_help_sought,"svg88");

  
 
  
  
  
  

changePieChart(data_health_before,"svg89");
changePieChart(data_health_after,"svg90");
changePieChart(data_health_importance,"svg91");

changeStackChart(data_health_injury,"svg92");
changeHBarChart(data_health_a,"svg93");

changeStackChart(data_health_pain,"svg94");
changeHBarChart(data_health_affect,"svg95");

changeStackChart(data_health_sleep_trouble,"svg96");
changeStackChart(data_health_sleep_diagnosed,"svg97");

changeStackChart(data_health_exercise,"svg98");

changeStackChart(data_health_exercise_often,"svg99");

changeHBarChart(data_health_medication,"svg100");

changeHBarChart(data_health_therapies,"svg101");

changeStackChart(data_health_therapies_result,"svg102");
changeStackChart(data_health_assisting,"svg103");

changeHBarChart(data_health_assisting,"svg104");
changeStackChart(data_health_activities,"svg105");

 
 
 
 
changeStackChart(data_burn,"svg106");
changeStackChart(data_burn_symptoms,"svg107");
changeStackChart(data_burn_registry,"svg108");
changeStackChart(data_burn_registered,"svg109");
changeStackChart(data_burn_issues,"svg110");

  
  
  
  
  
  
  
 
 startnumerosA(numero_cannabis,"svg111");
 
 changeStackChart(data_mj_research,"svg112");
changeStackChart(data_mj_va_research,"svg113");
changeStackChart(data_mj_medicinal,"svg114");
changeStackChart(data_mj_legal,"svg115");

changePieChart(data_cannabis,"svg116");
changePieChart(data_cannabis_comfort,"svg117");
changePieChart(data_cannabis_discussed,"svg118");


changePieChart(data_cannabis_recreational,"svg119");
changePieChart(data_cannabis_legal_med,"svg120");
changePieChart(data_cannabis_legal_rec,"svg121");


 
 
 
 
 
 

changeStackChart(data_tobacco,"svg122");
changeHBarChart(data_tobacco_type,"svg123");
 
changeStackChart(data_tobacco_use,"svg124");
changeHBarChart(data_tobacco_often,"svg125");

changeHBarChart(data_alcohol,"svg126");

changeHBarChart(data_alcohol_max,"svg127");

changeHBarChart(data_alcohol_typical,"svg128");

changeHBarChart(data_alcohol_twohour,"svg129");





changeStackChart(data_wom_iava,"svg130");
changeHBarChart(data_wom_motto,"svg131");
 
changeStackChart(data_wom_positions,"svg132");

 changePieChart(data_wom_combat,"svg133");
changePieChart(data_wom_recognition,"svg134");


 
  
 
 startnumerosA(numero_mst,"svg135");
 
 changeStackChart(data_wom_prosecutor,"svg136");

changeStackChart(data_wom_survivor,"svg137");

 changeStackChart(data_wom_report,"svg138");

changeHBarChart(data_wom_impact,"svg139");
 changeStackChart(data_wom_retaliation,"svg140");
  changeHBarChart(data_wom_not_report,"svg141");





///








 startnumerosB(numero_enrolled,"svg142");
  changeHBarChart(data_wom_not_report,"svg143");

 startnumerosB(numero_other,"svg144");
  changeHBarChart(data_va_coverage,"svg145");

 changeStackChart(data_va_primary,"svg146");

  changeHBarChart(data_va_last,"svg147");
 changeStackChart(data_va_experience,"svg148");
  changeHBarChart(data_va_none,"svg149");

 changeStackChart(data_va_understand,"svg150");
 changeStackChart(data_va_quality,"svg151");


 changeStackChart(data_va_non_understand,"svg152");
 changeStackChart(data_va_non_quality,"svg153");


 changeStackChart(data_va_scheduling_prim,"svg154");
 changeStackChart(data_va_scheduling_mental,"svg155");
 changeStackChart(data_va_scheduling_special,"svg156");


 changeStackChart(data_va_satisfaction_prim,"svg157");
 changeStackChart(data_va_satisfaction_special,"svg158");
 changeStackChart(data_va_satisfaction_mental,"svg159");

 changeStackChart(data_va_scheduling_non_prim,"svg160");
 changeStackChart(data_va_scheduling_non_mental,"svg161");
 changeStackChart(data_va_scheduling_non_spec,"svg162");


  changeHBarChart(data_va_choose_non,"svg163");
  changeHBarChart(data_va_choose,"svg164");

 changeStackChart(data_va_familiar,"svg165");
 changeStackChart(data_va_choice,"svg166");
  changeStackChart(data_va_choice_exp,"svg167");

  startnumerosB(numero_va_mission,"svg168");

 changeStackChart(data_va_private,"svg169");

 
 
 
 
 ///
 ////
 //
 
 
  changeStackChart(data_va_rating,"svg170");
 
  changeHBarChart(data_va_claim_long,"svg171");

  changeHBarChart(data_va_pending,"svg172");
 
  changeStackChart(data_va_outcome,"svg173");

  changeStackChart(data_va_appeal,"svg174");
 
  changeHBarChart(data_va_decision,"svg175");

  changeHBarChart(data_va_appeal_pending,"svg176");
 
 
 
  changeStackChart(data_va_rate_dis,"svg177");
  changeStackChart(data_va_rate_pension,"svg178");
  changeStackChart(data_va_rate_edu,"svg179");
  changeStackChart(data_va_rate_home,"svg180");
  changeStackChart(data_va_rate_ins,"svg181");
  changeStackChart(data_va_rate_voc,"svg182");
  changeStackChart(data_va_rate_care,"svg183");

 

  changeHBarChart(data_va_ask,"svg184");
 
 
 
 
 //////
 
 
   changeStackChart(data_gi_eligible,"svg185");

  changeHBarChart(data_gi_use,"svg186");

  changeStackChart(data_gi_grad,"svg187");
  changeStackChart(data_gi_exp,"svg188");
 
 changeStackChart(data_gi_imp_recruit,"svg189");
  changeStackChart(data_gi_imp_retent,"svg190");
  changeStackChart(data_gi_imp_trans,"svg191");

  
  ///
  ////
  
  
  
  
 startnumerosA(numero_ed_a,"svg192");
startnumerosB(numero_ed_b,"svg193");
startnumerosC(numero_ed_c,"svg194");
 
  changeStackChart(data_ed_b,"svg195");
  changeHBarChart(data_ed_c,"svg196");
  changeStackChart(data_ed_vetfriend,"svg197");
  changeStackChart(data_ed_a,"svg198");
 
 startnumerosB(numero_ed_d,"svg199");
 
   changeHBarChart(data_ed_d,"svg200");






  
  
  

 

/////
////
/////////


}