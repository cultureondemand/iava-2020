var iii=0;

var name;

var trigger='';

var numerotrigger='';

var mapdrawn='';


/////////
//// age
///////////
var data_age = [
{a:"18 - 30",b:1},
{a:"31 - 35",b:13},
{a:"36 - 40",b:23},
{a:"41 - 45",b:15},
{a:"46 - 50",b:14},
{a:"51 - 65",b:31},
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
{a:"Prefer Not to Answer",b:13},
{a:"More than $150,000",b:16},
{a:"$100,000 - $149,999",b:21},
{a:"$90,000 - $99,999",b:7},
{a:"$80,000 - $89,999",b:5},
{a:"$70,000 - $79,999",b:8},
{a:"$60,000 - $69,999",b:7},
{a:"$50,000 - $59,999",b:6},
{a:"$40,000 - $49,999",b:6},
{a:"$30,000 - $39,999",b:4},
{a:"$20,000 - $29,999",b:3},
{a:"$10,000 - $19,999",b:2},
{a:"Less than $10,000",b:3}
];



var dummydata_income = [
{a:"Prefer Not to Answer",b:12},
{a:"More than $150,000",b:14},
{a:"$100,000 - $149,999",b:20},
{a:"$90,000 - $99,999",b:6},
{a:"$80,000 - $89,999",b:7},
{a:"$70,000 - $79,999",b:7},
{a:"$60,000 - $69,999",b:7},
{a:"$50,000 - $59,999",b:7},
{a:"$40,000 - $49,999",b:7},
{a:"$30,000 - $39,999",b:6},
{a:"$20,000 - $29,999",b:4},
{a:"$10,000 - $19,999",b:2},
{a:"Less than $10,000",b:1}
];


////////////////
/////// school


var data_school = [
{a:"Bachelor's Degree",b:30},
{a:"Master's Degree",b:28},
{a:"Some college credit, no degree",b:15},
{a:"Associate's degree",b:13},
{a:"Trade/technical/vocational training",b:5},
{a:"Professional Degree (JD, DVM, MD, etc)",b:4},
{a:"High school graduate or equivalent (GED)",b:3},
{a:"Doctoral Degree (PhD)",b:1},
{a:"Some high school, no degree",b:.1}
];



var dummydata_school = [
{a:"Bachelor's Degree",b:30},
{a:"Master's Degree",b:27},
{a:"Some college credit, no degree",b:16},
{a:"Associate's degree",b:12},
{a:"Trade/technical/vocational training",b:5},
{a:"Professional Degree (JD, DVM, MD, etc)",b:4},
{a:"High school graduate or equivalent (GED)",b:3},
{a:"Doctoral Degree (PhD)",b:2},
{a:"Some high school, no degree",b:.1}
];



///////////////
////// marital
///////


var data_marital = [
 {a:"Married",b:71},
{a:"Widowed",b:1},
{a:"Divorced",b:14},
{a:"Separated",b:2},
{a:"Single, never married",b:10},
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
{a:"0",b:25},
{a:"1",b:17},
{a:"2",b:28},
{a:"3",b:17},
{a:"4+",b:13}
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
{a:"White",b:81},
{a:"Hispanic or Latino",b:11},
{a:"Black or African American",b:6},
{a:"American Indian or Alaska Native",b:4},
{a:"Asian",b:3},
{a:"Native Hawaiian or Pacific Islander",b:1},
{a:"Other",b:4} 
];



var dummydata_ethnicity= [
{a:"White",b:73},
{a:"Hispanic or Latino",b:11},
{a:"Black or African American",b:6},
{a:"American Indian or Alaska Native",b:1},
{a:"Asian",b:2},
{a:"Native Hawaiian or Pacific Islander",b:1},
{a:"Other",b:6} 
];



///////////
///// religious affiliation



var data_religion = [
{a:"Christian",b:68},
{a:"Agnostic",b:9},
{a:"Atheist",b:8},
{a:"Jewish",b:2},
{a:"Buddhist",b:1},
{a:"Muslim",b:0.5},
{a:"Hindu",b:0.5},
{a:"Other",b:13} 
];



var dummydata_religion = [
{a:"Christian",b:58},
{a:"Agnostic",b:1},
{a:"Atheist",b:1},
{a:"Jewish",b:15},
{a:"Buddhist",b:1},
{a:"Muslim",b:13},
{a:"Hindu",b:13},
{a:"Other",b:1} 
];



////////////
///// gender




var data_gender = [
{a:"Male",b:86},
{a:"Female",b:13},
{a:"Non-Binary",b:.5},
{a:"Prefer Not To Answer",b:.5}
];



var dummydata_gender = [
{a:"Male",b:1},
{a:"Female",b:1},
{a:"Non-Binary",b:1},
{a:"Prefer Not To Answer",b:95}
];


////////////
///// sexual orientation


var data_orientation = [
{a:"Heterosexual",b:92},
{a:"Homosexual",b:2},
{a:"Bisexual",b:2},
{a:"Other",b:1},
{a:"Prefer Not To Answer",b:3}
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
{a:"Army",b:63},
{a:"Navy",b:14},
{a:"Marine Corps",b:14},
{a:"Air Force",b:18},
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
{a:"Enlisted",b:76},
{a:"Officer",b:14},
{a:"Prior enlisted Officer",b:10}
];



var dummydata_officer = [
{a:"Enlisted",b:9},
{a:"Officer",b:1},
{a:"Prior enlisted Officer",b:1}
];



///
//// where did you serve

var data_l = [
{a:"Iraq",b:75},
{a:"Afghanistan",b:39},
{a:"Other combat areas",b:25}  
];

var dummydata_l = [
{a:"Iraq",b:75},
{a:"Afghanistan",b:39},
{a:"Other combat areas",b:25}  
];


///////////
///////
/*

var data_l = [
{a:"Iraq",b:75},
{a:"CONUS",b:59},
{a:"Kuwait",b:44},
{a:"Afghanistan",b:39},
{a:"Qatar",b:14},
{a:"Central Command AOR",b:21},
{a:"Bahrain",b:9},
{a:"Guantanamo Bay",b:4},
{a:"Syria",b:1},
{a:"Other",b:25}  
];

var dummydata_l = [
{a:"Iraq",b:75},
{a:"CONUS",b:59},
{a:"Kuwait",b:44},
{a:"Afghanistan",b:39},
{a:"Qatar",b:14},
{a:"Central Command AOR",b:21},
{a:"Bahrain",b:9},
{a:"Guantanamo Bay",b:4},
{a:"Syria",b:1},
{a:"Other",b:25}  
];

*/
/////////
///////

 
/////////////
//////////
/////////////
////// were you, or are you currently, a member of the National Guard or Reserves

var data_natg = [
{a:"Currently in Reserve or National Guard Component",b:8},
{a:"Previously in Reserve or National Guard Component",b:53},
{a:"Never in Reserve or National Guard Component",b:39}
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
{a:"Not separated",b:10},
{a:"2018",b:4},
{a:"2017",b:2},
{a:"2016",b:3},
{a:"2015",b:5},
{a:"2014",b:6},
{a:"2013",b:8},
{a:"2012",b:8},
{a:"2011",b:7},
{a:"2010",b:8},
{a:"2009",b:8},
{a:"2008",b:6},
{a:"2007",b:6},
{a:"2006",b:6},
{a:"2005",b:5},
{a:"2004",b:4},
{a:"2003 or Earlier",b:5}
];

var dummydata_milserve_separate = [
{a:"Not separated",b:12},
{a:"2018",b:12},
{a:"2017",b:13},
{a:"2016",b:14},
{a:"2015",b:14},
{a:"2014",b:6},
{a:"2013",b:6},
{a:"2012",b:8},
{a:"2011",b:7},
{a:"2010",b:8},
{a:"2009",b:8},
{a:"2008",b:6},
{a:"2007",b:6},
{a:"2006",b:6},
{a:"2005",b:5},
{a:"2004",b:4},
{a:"2003 or Earlier",b:5}
];

/*
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
*/
 

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



var numero_member = [66];





/////
//////
///////
 



/////////
//// important to interact regularly with other veterans
///////////

var dummydata_interact = [
{a:"Very important",b:45},
{a:"Moderately important",b:45},
{a:"Not important",b:10}
];

 
var data_interact = [
{a:"Very important",b:45},
{a:"Moderately important",b:45},
{a:"Not important",b:10}
];




/////////
//// reco sevice to fam or friend
///////////

var dummydata_reco_service = [
{a:"Yes",b:45},
{a:"No",b:45},
{a:"Unsure",b:10}
];

 
var data_reco_service = [
{a:"Yes",b:77},
{a:"No",b:8},
{a:"Unsure",b:15}
];



///////////
//////// 2018nnumbers
///////////
/*
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
*/
/////
//////
///////






/////////
//// How do you interact with other veterans and military service members
///////////
 
var data_interact_how = [
{a:"Social media",b:61},
{a:"In my daily life",b:47},
{a:"At work",b:47},
{a:"Meet-ups",b:30},
{a:"Calling on the phone",b:28},
{a:"Social clubs or VSOs",b:25},
{a:"Service Projects",b:18}
];

var dummydata_interact_how = [
{a:"Social media",b:16},
{a:"In my daily life",b:12},
{a:"At work",b:26},
{a:"Meet-ups",b:12},
{a:"Calling on the phone",b:12},
{a:"Social clubs or VSOs",b:12},
{a:"Service Projects",b:12}
];


///////////////////////////
////// recommend military service
///////


var data_milserve_recommend=[{a:"Yes",b:77},{a:"No",b:8},{a:"Unsure",b:15}];

var dummydata_milserve_recommend=[{a:"Yes",b:41},{a:"No",b:27},{a:"Unsure",b:18}];
 

////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////





//////
///number of deployments
////////
 


 





var data_m=[{a:"One Deployment",b:29},{a:"Two Deployments",b:8},{a:"Three Deployments",b:2},{a:"Four Deployments",b:.5},{a:"Five+ Deployments",b:1}];

var dummydata_m=[{a:"One Deployment",b:55},{a:"Two Deployments",b:21},{a:"Three Deployments",b:6},{a:"Four Deployments",b:6},{a:"Five+ Deployments",b:6}];


var data_n=[{a:"One Deployment",b:52},{a:"Two Deployments",b:23},{a:"Three Deployments",b:6},{a:"Four Deployments",b:2},{a:"Five+ Deployments",b:1}];

var dummydata_n=[{a:"One Deployment",b:55},{a:"Two Deployments",b:21},{a:"Three Deployments",b:6},{a:"Four Deployments",b:6},{a:"Five+ Deployments",b:6}];




var data_o=[{a:"One Deployment",b:24},{a:"Two Deployments",b:9},{a:"Three Deployments",b:4},{a:"Four Deployments",b:1},{a:"Five+ Deployments",b:2}];

var dummydata_o=[{a:"One Deployment",b:55},{a:"Two Deployments",b:21},{a:"Three Deployments",b:6},{a:"Four Deployments",b:6},{a:"Five+ Deployments",b:6}];


 


var data_p=[{a:"Zero Deployments",b:95},{a:"One Deployment",b:4},{a:"Two+ Deployments",b:1}];

var dummydata_p=[{a:"Zero Deployments",b:18},{a:"One Deployment",b:55},{a:"Two+ Deployments",b:6}];


var data_pp=[{a:"Zero Deployments",b:90},{a:"One Deployment",b:8},{a:"Two+ Deployments",b:2}];

var dummydata_pp=[{a:"Zero Deployments",b:18},{a:"One Deployment",b:55},{a:"Two+ Deployments",b:6}];





/*






var data_m=[{a:"Zero Deployments",b:23},{a:"One Deployment",b:51},{a:"Two Deployments",b:18},{a:"Three Deployments",b:5},{a:"Four Deployments",b:1},{a:"Five+ Deployments",b:2}];

var dummydata_m=[{a:"Zero Deployments",b:18},{a:"One Deployment",b:55},{a:"Two Deployments",b:21},{a:"Three Deployments",b:6},{a:"Four Deployments",b:6},{a:"Five+ Deployments",b:6}];


var data_n=[{a:"Zero Deployments",b:12},{a:"One Deployment",b:57},{a:"Two Deployments",b:24},{a:"Three Deployments",b:5},{a:"Four Deployments",b:1},{a:"Five+ Deployments",b:1}];

var dummydata_n=[{a:"Zero Deployments",b:18},{a:"One Deployment",b:55},{a:"Two Deployments",b:21},{a:"Three Deployments",b:6},{a:"Four Deployments",b:6},{a:"Five+ Deployments",b:6}];







var data_o=[{a:"Zero Deployments",b:78},{a:"One Deployment",b:20},{a:"Two+ Deployments",b:2}];

var dummydata_o=[{a:"Zero Deployments",b:18},{a:"One Deployment",b:55},{a:"Two+ Deployments",b:6}];



var data_p=[{a:"Zero Deployments",b:95},{a:"One Deployment",b:4},{a:"Two+ Deployments",b:1}];

var dummydata_p=[{a:"Zero Deployments",b:18},{a:"One Deployment",b:55},{a:"Two+ Deployments",b:6}];


var data_pp=[{a:"Zero Deployments",b:90},{a:"One Deployment",b:8},{a:"Two+ Deployments",b:2}];

var dummydata_pp=[{a:"Zero Deployments",b:18},{a:"One Deployment",b:55},{a:"Two+ Deployments",b:6}];




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

 
*/
 




var data_discharge = [
{a:"Honorable ",b:99},
{a:"General",b:1},
{a:"Other than Honorable",b:0.5}
////////{a:"Dishonorable Discharge",b:0.5}
];



var dummydata_discharge = [
{a:"Honorable",b:75},
{a:"General",b:15},
{a:"Other than Honorable",b:15}
/////////{a:"Dishonorable Discharge",b:10}
];




////
//////  



var numeros_milserve_recommend = [77];




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
//////////// civic engagement
/////////////////////////////////////////////////////


////
////// volunteering on a regular basis
var numeros_civic_volunteer = [50];

//////
/////// volunteering more than 5 hours per month
var numeros_civic_vol_more = [28];


//////
///////
/////////
//// issues do you focus your volunteer work on
/////////
var data_civic_issues = [
{a:"Serving veterans, active duty servicemembers and their families",b:52},
{a:"Youth",b:38},
{a:"Helping older people",b:22},
{a:"Addressing poverty and homelessness",b:20},
{a:"Environmental conservation",b:11},
{a:"Disaster relief",b:11},
{a:"Other",b:24}
];


var dummydata_civic_issues = [
{a:"Serving veterans, active duty servicemembers and their families",b:37},
{a:"Youth",b:33},
{a:"Helping older people",b:23},
{a:"Addressing poverty and homelessness",b:5},
{a:"Environmental conservation",b:.5},
{a:"Disaster relief",b:.5},
{a:"Other",b:2}
];




////
//////  
///
/// support or oppose the impeachment of President Trump

var data_civic_oppose_trump = [
{a:"Support",b:37},
{a:"Unsure",b:13},
{a:"Oppose",b:50}  
];



var dummydata_civic_oppose_trump = [
{a:"Support",b:2},
{a:"Unsure",b:1},
{a:"Oppose",b:2} 
];



////
//////  
///






////
//////  
///
/// What is your opinion on the deployment of U.S. servicemembers to the border



var data_civic_border = [
{a:"Strongly agree",b:31},
{a:"Somewhat agree",b:19},
{a:"Neutral",b:9},
{a:"Somewhat disagree",b:10},
{a:"Strongly disagree",b:31}
];



var dummydata_civic_border = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];





////
//////  
///
/// military construction funds were diverted to pay for the U.S./Mexico border wall



var data_civic_wall = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:15},
{a:"Neutral",b:7},
{a:"Somewhat disagree",b:8},
{a:"Strongly disagree",b:45}
];



var dummydata_civic_wall = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];





////
//////  
///
///  (Parole in Place) that temporarily protects non-citizen immediate family members of active-duty troops from being deported in one-year increments


var data_civic_paroleinplace = [
{a:"Strongly agree",b:24},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:34},
{a:"Somewhat disagree",b:5},
{a:"Strongly disagree",b:5}
];



var dummydata_civic_paroleinplace = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];


       


////
//////  
///
///  policy withholds automatic citizenship for children born overseas to non-citizen U.S. servicemembers


var data_civic_citizenship = [
{a:"Strongly agree",b:13},
{a:"Somewhat agree",b:15},
{a:"Neutral",b:25},
{a:"Somewhat disagree",b:18},
{a:"Strongly disagree",b:30}
];



var dummydata_civic_citizenship = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];




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

var numero_vote_reg_testA = [7];

var numero_vote_reg_testB = [9];



 

////
//////  
///
/// planning to vote in 2018 election


 
var data_planning = [95];

 
//////// var data_planning = [{a:"Definitely yes",b:89},{a:"Probably yes",b:5},{a:"Might or might not",b:3},{a:"Probably not",b:2},{a:"Definitely not",b:1}];

/*

var data_planning = [
{a:"Definitely yes",b:38},
{a:"Probably yes",b:17},
{a:"Might or might not",b:37},
{a:"Probably not",b:5},
{a:"Definitely not",b:3}
];

 

var dummydata_planning = [
{a:"Definitely yes",b:38},
{a:"Probably yes",b:17},
{a:"Might or might not",b:37},
{a:"Probably not",b:5},
{a:"Definitely not",b:3}
];

 */

////
//////  
///
/// political party




var data_party = [
{a:"No affiliation/independent",b:36},
{a:"Republican Party",b:35},
{a:"Democratic Party",b:22},
{a:"Libertarian Party",b:5},
{a:"Green Party",b:.5}
////////{a:"Other",b:2}

];



var dummydata_party = [
{a:"No affiliation/independent",b:37},
{a:"Republican Party",b:33},
{a:"Democratic Party",b:23},
{a:"Libertarian Party",b:5},
{a:"Green Party",b:.5}
////////////////{a:"Other",b:2}
];





////
//////  
///
/// veteran candidate impact

var data_vet_impact = [
{a:"Positive impact",b:87},
{a:"Neutral impact",b:13},
{a:"Negative impact",b:.5}  
];



var dummydata_vet_impact = [
{a:"Positive impact",b:2},
{a:"Neutral impact",b:1},
{a:"Negative impact",b:2} 
];




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




var numero_impact = [97];



var numero_considered = [34];




/////////
/////////
///////



var numero_trump_supports = [46];
var numero_congress_supports = [25];
var numero_public_supports = [68];

 

////
//////  
///
/// veteran  support

var data_public_support = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:50},
{a:"Neither agree nor disagree",b:15},
{a:"Somewhat disagree",b:8},
{a:"Strongly disagree",b:2} 
];


 

var dummydata_public_support = [
{a:"Strongly agree",b:13},
{a:"Somewhat agree",b:86},
{a:"Neither agree nor disagree",b:86},
{a:"Somewhat disagree",b:13},
{a:"Strongly disagree",b:1} 
];




var data_employer_support = [
{a:"Strongly agree",b:9},  
{a:"Somewhat agree",b:37},
{a:"Neither agree nor disagree",b:24},
{a:"Somewhat disagree",b:22},
{a:"Strongly disagree",b:8} 
];


 

var dummydata_employer_support = [
{a:"Strongly agree",b:13},  
{a:"Somewhat agree",b:86},
{a:"Neither agree nor disagree",b:86},
{a:"Somewhat disagree",b:13},
{a:"Strongly disagree",b:1} 
];


///
////





var data_employer_retain = [
{a:"Strongly agree",b:6},  
{a:"Somewhat agree",b:26},
{a:"Neither agree nor disagree",b:35},
{a:"Somewhat disagree",b:23},
{a:"Strongly disagree",b:10} 
];


 

var dummydata_employer_retain = [
{a:"Strongly agree",b:13},  
{a:"Somewhat agree",b:86},
{a:"Neither agree nor disagree",b:86},
{a:"Somewhat disagree",b:13},
{a:"Strongly disagree",b:1} 
];





///
////





var data_employer_junk = [
{a:"Strongly agree",b:6},  
{a:"Somewhat agree",b:26},
{a:"Neither agree nor disagree",b:35},
{a:"Somewhat disagree",b:23},
{a:"Strongly disagree",b:10} 
];


 

var dummydata_employer_junk = [
{a:"Strongly agree",b:13},  
{a:"Somewhat agree",b:86},
{a:"Neither agree nor disagree",b:86},
{a:"Somewhat disagree",b:13},
{a:"Strongly disagree",b:1} 
];









////
////





var data_congress_support = [
{a:"Strongly agree",b:3},
{a:"Somewhat agree",b:26},
{a:"Neither agree nor disagree",b:25},
{a:"Somewhat disagree",b:28},
{a:"Strongly disagree",b:18} 
];


 

var dummydata_congress_support = [
{a:"Strongly agree",b:13}, 
{a:"Somewhat agree",b:86},
{a:"Neither agree nor disagree",b:86},
{a:"Somewhat disagree",b:13},
{a:"Strongly disagree",b:1}
];








var data_trump_support = [
{a:"Strongly agree",b:35},
{a:"Somewhat agree",b:19},
{a:"Neither agree nor disagree",b:12},
{a:"Somewhat disagree",b:9},
{a:"Strongly disagree",b:25}
];


 

var dummydata_trump_support = [
{a:"Strongly agree",b:16},
{a:"Somewhat agree",b:20},
{a:"Neither agree nor disagree",b:12},
{a:"Somewhat disagree",b:11},
{a:"Strongly disagree",b:11}
];










var data_public_understand = [
{a:"Strongly agree",b:4},
{a:"Somewhat agree",b:19},
{a:"Neither agree nor disagree",b:14},
{a:"Somewhat disagree",b:37},
{a:"Strongly disagree",b:26}
];


 

var dummydata_public_understand = [
{a:"Strongly agree",b:3},
{a:"Somewhat agree",b:16},
{a:"Neither agree nor disagree",b:14},
{a:"Somewhat disagree",b:36},
{a:"Strongly disagree",b:31}
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


var numero_afghan_visa = [81];

 

///////
////


///////
/////
//////
//////// immigration
/////





var data_citizenship = [
{a:"Strongly agree",b:26},
{a:"Somewhat agree",b:24},
{a:"Neutral",b:11},
{a:"Somewhat disagree",b:24},
{a:"Strongly disagree",b:19}

];



var dummydata_citizenship = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];







var dummydata_deport = [
{a:"Strongly agree",b:72},
{a:"Somewhat agree",b:21},
{a:"Neutral",b:4},
{a:"Somewhat disagree",b:2},
{a:"Strongly disagree",b:1}
];



var data_deport = [
{a:"Strongly agree",b:26},
{a:"Somewhat agree",b:22},
{a:"Neutral",b:11},
{a:"Somewhat disagree",b:24},
{a:"Strongly disagree",b:19}
];


 
var numero_deport_impacted = [4];
var numero_deport_know = [13];

 
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
{a:"Not worth it",b:21},
{a:"Somewhat not worth it",b:28},
{a:"Neither worth it nor not worth it",b:13},
{a:"Somewhat worth it",b:11},
{a:"Worth it",b:27}
];



var dummydata_iraq_worth = [
{a:"Not worth it",b:32},
{a:"Somewhat not worth it",b:11},
{a:"Neither worth it nor not worth it",b:10},
{a:"Somewhat worth it",b:25},
{a:"Worth it",b:22}
];


///
////////

var data_afghan_worth = [
{a:"Worth it",b:28},
{a:"Somewhat worth it",b:34},
{a:"Neither worth it nor not worth it",b:12},
{a:"Somewhat not worth it",b:10},
{a:"Not worth it",b:16}
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
{a:"Strongly agree",b:50},
{a:"Somewhat agree",b:23},
{a:"Neither agree nor disagree",b:12},
{a:"Somewhat disagree",b:4},
{a:"Strongly disagree",b:10}
];



var dummydata_selective_women = [
{a:"Strongly agree",b:50},
{a:"Somewhat agree",b:23},
{a:"Neither agree nor disagree",b:12},
{a:"Somewhat disagree",b:5},
{a:"Strongly disagree",b:10}
];








var data_selective_end = [
{a:"Strongly agree",b:17},
{a:"Somewhat agree",b:12},
{a:"Neither agree nor disagree",b:20},
{a:"Somewhat disagree",b:18},
{a:"Strongly disagree",b:33}
];



var dummydata_selective_end = [
{a:"Strongly agree",b:12},
{a:"Somewhat agree",b:9},
{a:"Neither agree nor disagree",b:17},
{a:"Somewhat disagree",b:19},
{a:"Strongly disagree",b:43}
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
{a:"Prefer not to answer",b:2}
];



var dummydata_nfl = [
{a:"Strongly agree",b:50},
{a:"Somewhat agree",b:23},
{a:"Neutral",b:12},
{a:"Somewhat disagree",b:5},
{a:"Disagree",b:5},
{a:"Prefer not to answer",b:10}
];

 
 
 
 
 

var data_nfl_plan = [
{a:"Support protests, continue watching NFL",b:28},
{a:"Disagree with protests, won’t watch NFL",b:24},
{a:"Support protests, not a fan of NFL",b:16},
{a:"Disagree with protests, continue watching NFL",b:15},
{a:"Object to protests, not a fan of NFL",b:10},
{a:"No opinion on protests, continue watching NFL",b:4},
{a:"No opinion on protests, not a fan of NFL",b:3}
];



var dummydata_nfl_plan = [
{a:"Support protests, continue watching NFL",b:28},
{a:"Disagree with protests, won’t watch NFL",b:24},
{a:"Support protests, not a fan of NFL",b:16},
{a:"Disagree with protests, continue watching NFL",b:15},
{a:"Object to protests, not a fan of NFL",b:10},
{a:"No opinion on protests, continue watching NFL",b:4},
{a:"No opinion on protests, not a fan of NFL",b:3}
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
  /////// gun ownership
  ///////////////////////
  //////////////////
  
  
  

///////////////
/////////////

////
///// own a personal firearm
////////
var numero_guns = [67];
/////
//// select your primary method of storage for your firearm
///////
var data_guns_storage = [
{a:"Locked, Unloaded, Ammunition Stored Separately",b:20},
{a:"Would rather not say",b:20},
{a:"Locked, Loaded",b:19},
{a:"Unlocked, Unloaded, Ammunition Stored Separately",b:14},
{a:"Locked, Unloaded",b:13},
{a:"Unlocked, Loaded",b:9},
{a:"Locked, Unloaded, No Ammunition in Home",b:1},
{a:"Other",b:2}
];



var dummydata_guns_storage = [
{a:"Locked, Unloaded, Ammunition Stored Separately",b:30},
{a:"Would rather not say",b:20},
{a:"Locked, Loaded",b:20},
{a:"Unlocked, Unloaded, Ammunition Stored Separately",b:13},
{a:"Locked, Unloaded",b:1},
{a:"Unlocked, Loaded",b:10},
{a:"Locked, Unloaded, No Ammunition in Home",b:2},
{a:"Other",b:4}
];










var data_guns_lockers = [
{a:"Strongly agree",b:8},
{a:"Somewhat agree",b:12},
{a:"Neutral",b:22},
{a:"Somewhat disagree",b:13},
{a:"Strongly disagree",b:46}

];



var dummydata_guns_lockers = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];







var data_guns_concealed = [
{a:"Strongly agree",b:26},
{a:"Somewhat agree",b:12},
{a:"Neutral",b:12},
{a:"Somewhat disagree",b:16},
{a:"Strongly disagree",b:34}

];



var dummydata_guns_concealed = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];




var data_guns_assault = [
{a:"Strongly agree",b:22},
{a:"Somewhat agree",b:10},
{a:"Neutral",b:12},
{a:"Somewhat disagree",b:13},
{a:"Strongly disagree",b:43}

];



var dummydata_guns_assault = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];






var data_guns_high = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:11},
{a:"Neutral",b:12},
{a:"Somewhat disagree",b:12},
{a:"Strongly disagree",b:40}

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
{a:"Somewhat agree",b:12},
{a:"Neutral",b:22},
{a:"Somewhat disagree",b:18},
{a:"Strongly disagree",b:29}

];



var dummydata_guns_wait = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];









var data_guns_trigger = [
{a:"Strongly agree",b:35},
{a:"Somewhat agree",b:29},
{a:"Neutral",b:22},
{a:"Somewhat disagree",b:5},
{a:"Strongly disagree",b:9}

];



var dummydata_guns_trigger = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];







var data_guns_background = [
{a:"Strongly agree",b:62},
{a:"Somewhat agree",b:20},
{a:"Neutral",b:9},
{a:"Somewhat disagree",b:3},
{a:"Strongly disagree",b:6}

];



var dummydata_guns_background = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];



 ////
////////////  
//////////////  
/////////////////////////////////////// 
//////////////////////////////
 //////////////
 //////// Transition Experiences
 //////////
///////////////////////////////////
///////////////////////////////
/////////////////////
////
///////////////
/////// transition


//
/// Did you experience challenges when transitioning out of the military

var data_challenges = [
{a:"Many",b:40},
{a:"Some",b:39},
{a:"Few",b:15},
{a:"None",b:5}
];

var dummydata_challenges = [
{a:"Many",b:9},
{a:"Some",b:9},
{a:"Few",b:6},
{a:"None",b:7}
];

////
//// experience any challenges related to your military service

var data_challenges_current = [
{a:"Many",b:22},
{a:"Some",b:41},
{a:"Few",b:23},
{a:"None",b:15}
];

var dummydata_challenges_current = [
{a:"Many",b:9},
{a:"Some",b:9},
{a:"Few",b:6},
{a:"None",b:7}
];


/////////
/////////////
/////
///
//// had a successful transition


var data_challenges_success = [
{a:"Strongly agree",b:21},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:16},
{a:"Somewhat disagree",b:17},
{a:"Strongly disagree",b:15}

];



var dummydata_challenges_success = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];

/////
///
//// had a successful transition


var data_challenges_overcome = [
{a:"Strongly agree",b:26},
{a:"Somewhat agree",b:40},
{a:"Neutral",b:15},
{a:"Somewhat disagree",b:11},
{a:"Strongly disagree",b:8}

];



var dummydata_challenges_overcome = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];


/////
///
//// had a successful transition


var data_challenges_valued = [
{a:"Strongly agree",b:23},
{a:"Somewhat agree",b:31},
{a:"Neutral",b:22},
{a:"Somewhat disagree",b:14},
{a:"Strongly disagree",b:9}

];



var dummydata_challenges_valued = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];



/////
///
//// had a successful transition


var data_challenges_belonging = [
{a:"Strongly agree",b:20},
{a:"Somewhat agree",b:29},
{a:"Neutral",b:23},
{a:"Somewhat disagree",b:16},
{a:"Strongly disagree",b:12}

];



var dummydata_challenges_belonging = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];



//////
/////
 var data_finances = [
{a:"Yes",b:62},
{a:"No",b:38}
];

var dummydata_finances = [
{a:"Yes",b:37},
{a:"No",b:63}
];

/////

var data_bills = [
{a:"Yes",b:35},
{a:"No",b:65}
];

var dummydata_bills = [
{a:"Yes",b:67},
{a:"No",b:33}
];


 
/////
////// 

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


var numero_lending = [36];

 
/////
// Predatory Loan Type

var data_conditions = [
{a:"Advance Pay-Day",b:41},
{a:"Car",b:37},
{a:"Home",b:23},
{a:"Other",b:26}
];

var dummydata_conditions = [
{a:"Advance Pay-Day",b:42},
{a:"Car",b:34},
{a:"Home",b:20},
{a:"Other",b:32}
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

  var numero_tran_temp = [81];

 

 //////////////
////// How long were you without a permanent place to live 
 ////////////
 
  

var data_tran_long = [
{a:"A few days",b:8},
{a:"A few weeks",b:16},
{a:"A few months",b:31},
{a:"Six months to a year",b:21},
{a:"Longer than a year",b:24} 
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
{a:"Yes",b:37},
{a:"No",b:45},
{a:"TAP was not available to me",b:18}
];


var dummydata_tran_tap = [
{a:"Yes",b:28},
{a:"No",b:62},
{a:"TAP was not available to me",b:2}
];




  

 ///////
///Which best describes your current living situation
////////  

 

var data_tran_current = [
{a:"Own home/have a mortgage",b:71},
{a:"Rent",b:21},
{a:"With friends/family/significant other",b:9},
{a:"Temporary or permanent housing",b:1},
{a:"Living with parents/ as a dependent",b:1},
{a:"Couchsurfing",b:1},
{a:"Don't have place to live and can't afford one",b:.5},
{a:"Base housing/barracks",b:.3},
{a:"Campus housing",b:.2},
{a:"Hospital/VA medical facility",b:.2},
{a:"Other",b:2}
];


var dummydata_tran_current = [
{a:"Own home/have a mortgage",b:66},
{a:"Rent",b:24},
{a:"With friends/family/significant other",b:10},
{a:"Temporary or permanent housing",b:3},
{a:"Living with parents/ as a dependent",b:2},
{a:"Couchsurfing",b:1},
{a:"Don't have place to live and can't afford one",b:.5},
{a:"Base housing/barracks",b:.3},
{a:"Campus housing",b:.2},
{a:"Hospital/VA medical facility",b:.2},
{a:"Other",b:2}
];



 



 ///////
///rate your experience in the Transition Assistance Program
////////  
 
var data_tran_rate = [
{a:"Very good",b:11},
{a:"Good",b:28},
{a:"Fair",b:36},
{a:"Poor",b:17},
{a:"Very poor",b:11}
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
{a:"Difficulty navigating VA benefits",b:45},
{a:"Loss of identity/purpose",b:36},
{a:"Health Concerns (Mental or Physical)",b:34},
{a:"Relating to non-veteran civilians/Reintegrating with community",b:32},
{a:"Finding/keeping employment as a civilian",b:31},
{a:"Isolation from unit/service members",b:26},
{a:"Readjusting to social life",b:24},
{a:"Managing finances",b:21},
{a:"I do not expect to face any challenges",b:20},
{a:"Reconnecting with family",b:12},
{a:"Finding housing",b:8}
];


var dummydata_tran_challenges = [
{a:"Difficulty navigating VA benefits",b:45},
{a:"Loss of identity/purpose",b:36},
{a:"Health Concerns (Mental or Physical)",b:34},
{a:"Relating to non-veteran civilians/Reintegrating with community",b:32},
{a:"Finding/keeping employment as a civilian",b:31},
{a:"Isolation from unit/service members",b:26},
{a:"Readjusting to social life",b:24},
{a:"Managing finances",b:21},
{a:"I do not expect to face any challenges",b:20},
{a:"Reconnecting with family",b:12},
{a:"Finding housing",b:8}
];







 ///////
///How familiar are you with the public benefits available
////////  
 
 
var data_tran_familiar = [
{a:"Extremely familiar",b:7},
{a:"Very familiar",b:14},
{a:"Moderately familiar",b:40},
{a:"Slightly familiar",b:20},
{a:"Not familiar at all",b:19}
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
{a:"Education benefits",b:83},
{a:"Pay",b:59},
{a:"Health Care",b:58},
{a:"Life Insurance",b:25},
{a:"Housing assistance",b:18}
];


var dummydata_benefits_influential = [
{a:"Education benefits",b:83},
{a:"Pay",b:59},
{a:"Health Care",b:58},
{a:"Life Insurance",b:25},
{a:"Housing assistance",b:18}
];


/////
///////
////////
//////////////
var numero_suicide_progress = [15];

var numero_suicide_care = [11];

var numero_suicide_know_attempt = [67];

var numero_suicide_know_died = [62];


////////
//////////////////////////////
////////considered suicide before 
//////////////////////////////

var data_mental_considered  = [
{a:"Yes",b:44},
{a:"No",b:56}
];

var dummydata_mental_considered = [
{a:"Yes",b:10},
{a:"No",b:90}
];



/*


var data_mental_considered  = [
{a:"2018",b:43},
////{a:"2017",b:37},
////{a:"2015",b:40},
{a:"2014",b:31}
];

var dummydata_mental_considered = [
{a:"2018",b:43},
////{a:"2017",b:37},
/////{a:"2015",b:33},
{a:"2014",b:22}
];



*/


///////////////
////////////////////
////



////////
//////////////////////////////
////////considered suicide since joining 
//////////////////////////////

var data_mental_considered_before  = [
{a:"Yes",b:10},
{a:"No",b:90}
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
////////aware of hotline
//////////////////////////////

var data_mental_hotline  = [
{a:"Yes",b:96},
{a:"No",b:3},
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
//////// rate hotline 
//////////////////////////////

var data_mental_hotline_rate  = [
{a:"Excellent",b:29},
{a:"Good",b:32},
{a:"Average",b:19},
{a:"Poor",b:11},
{a:"Terrible",b:10}
];

var dummydata_mental_hotline_rate = [
{a:"Excellent",b:20},
{a:"Good",b:20},
{a:"Average",b:20},
{a:"Poor",b:20},
{a:"Terrible",b:20}
];
///////////////
////////////////////
////








////////
//////////////////////////////
////////personally know attempted suicide 
//////////////////////////////

var data_mental_know_attempted = [
{a:"Yes",b:67},
{a:"No",b:33}
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
{a:"Yes",b:62},
{a:"No",b:38}
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
{a:"The stigma of seeking help is too great",b:72},
{a:"They have access to care but not quality care",b:58},
{a:"They have access but are not seeking care",b:51},
{a:"The cost of care is not properly funded",b:42},
{a:"They do not have access to care",b:35},
{a:"The cost of care is too great",b:24},
{a:"Other",b:13}
];

var dummydata_mental_help_why= [
{a:"The stigma of seeking help is too great",b:72},
{a:"They have access to care but not quality care",b:58},
{a:"They have access but are not seeking care",b:51},
{a:"The cost of care is not properly funded",b:42},
{a:"They do not have access to care",b:35},
{a:"The cost of care is too great",b:24},
{a:"Other",b:13}
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

var numero_mental_injury = [61];


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

var numero_mental_seek = [75];


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
{a:"Have not found a mental health professional that understands my needs",b:34},
{a:"Started treatment but decided to stop",b:33},
{a:"Concerned it might affect my career",b:27},
{a:"Do not want to be perceived differently",b:26},
{a:"It was hard to get time off work",b:25},
{a:"Rather talk to friends or family",b:25},
{a:"Do not think it will work",b:19},
{a:"Do not need it",b:18},
{a:"Had an initial visit but never went back",b:17},
{a:"Unable to access care/never received appt",b:8},
{a:"No VA hospital or clinic near me",b:7},
{a:"Do not know where to go",b:6},
{a:"The cost of care is too great",b:6},
{a:"No mental health professionals near me",b:5}
];

var dummydata_mental_help_not= [
{a:"Have not found a mental health professional that understands my needs",b:34},
{a:"Started treatment but decided to stop",b:33},
{a:"Concerned it might affect my career",b:27},
{a:"Do not want to be perceived differently",b:26},
{a:"It was hard to get time off work",b:25},
{a:"Rather talk to friends or family",b:25},
{a:"Do not think it will work",b:19},
{a:"Do not need it",b:18},
{a:"Had an initial visit but never went back",b:17},
{a:"Unable to access care/never received appt",b:8},
{a:"No VA hospital or clinic near me",b:7},
{a:"Do not know where to go",b:6},
{a:"The cost of care is too great",b:6},
{a:"No mental health professionals near me",b:5}
];

///////////////

////////
//////////////////////////////
////////seeking help where
//////////////////////////////

var data_mental_help_where = [
{a:"VA Mental Health Professional",b:72},
{a:"Civilian (non-VA) mental health professional",b:25},
{a:"Vet Center counselor",b:21},
{a:"Peer support group",b:14},
{a:"Religious/spiritual leaders",b:14},
{a:"Civilian DOD counselor",b:3},
{a:"Uniformed DOD counselor",b:3},
{a:"Other",b:9}
];

var dummydata_mental_help_where= [
{a:"VA Mental Health Professional",b:71},
{a:"Civilian (non-VA) mental health professional",b:27},
{a:"Vet Center counselor",b:22},
{a:"Peer support group",b:17},
{a:"Religious/spiritual leaders",b:15},
{a:"Civilian DOD counselor",b:3},
{a:"Uniformed DOD counselor",b:2},
{a:"Other",b:11}
];

///////////////
////////////////////
////



////////
//////////////////////////////
////////anyone suggested help
//////////////////////////////

var data_mental_help_suggest  = [
{a:"Yes",b:49},
{a:"No",b:51}
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
{a:"Yes",b:77},
{a:"No",b:23}
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

////////////
////// General Health
////        
//
 //// before
////////
///// How would you rate your overall health before joining the military
/////
var data_health_before = [
{a:"Excellent",b:65},
{a:"Good",b:27},
{a:"Average",b:7},
{a:"Poor",b:1},
{a:"Terrible",b:0.1}
];


var dummydata_health_before = [
{a:"Excellent",b:24},
{a:"Good",b:63},
{a:"Average",b:3},
{a:"Poor",b:3},
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
{a:"Excellent",b:5},
{a:"Good",b:26},
{a:"Average",b:38},
{a:"Poor",b:28},
{a:"Terrible",b:3}
];


var dummydata_health_after = [
{a:"Excellent",b:74},
{a:"Good",b:23},
{a:"Average",b:3},
{a:"Poor",b:3},
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
{a:"Extremely important",b:48},
{a:"Very important",b:38},
{a:"Moderately important",b:12},
{a:"Slightly important",b:2},
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
   
var numero_health_injury = [90];


//
 ////////
//
 ////Service Related Injuries


var dummydata_health_a = [
{a:"Musculoskeletal/joint injuries",b:10},
{a:"Tinnitus",b:16},
{a:"PTSD",b:11},
{a:"Anxiety",b:56},
{a:"Depression",b:53},
{a:"Hearing Loss",b:50},
{a:"Traumatic Brain Injury (TBI)",b:25},
{a:"Pulmonary issues",b:18},
{a:"Scarring or burns",b:15},
{a:"Vision Loss",b:8},
{a:"Paralysis",b:2},
{a:"Loss of limb",b:1},
{a:"Other",b:29}
];

var data_health_a = [
{a:"Musculoskeletal/joint injuries",b:70},
{a:"Tinnitus",b:66},
{a:"PTSD",b:65},
{a:"Anxiety",b:58},
{a:"Depression",b:56},
{a:"Hearing Loss",b:56},
{a:"Traumatic Brain Injury (TBI)",b:26},
{a:"Pulmonary issues",b:19},
{a:"Scarring or burns",b:16},
{a:"Vision Loss",b:9},
{a:"Paralysis",b:2},
{a:"Loss of limb",b:1},
{a:"Other",b:25}
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
   
   


var numero_health_pain = [74];





 //// how often injuries affect

 

var data_health_affect = [
{a:"Always",b:41},
{a:"Most of the time",b:30},
{a:"About half the time",b:11},
{a:"Sometimes",b:16},
{a:"Never",b:2}
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
{a:"About half the time",b:15},
{a:"Sometimes",b:26},
{a:"Never",b:5}
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
   

var numero_health_sleep = [44];



   
/////////////////////////////////////////////////////////

 

/////////////////
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
{a:"I do not exercise",b:12},
{a:"Less than weekly",b:18},
{a:"1 time per week",b:8},
{a:"2 to 3 times per week",b:38},
{a:"4 to 5 times per week",b:18},
{a:"6 or more times per week",b:5}
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
//// current
 //// Medications

var data_health_medication = [
{a:"Antidepressant",b:32},
{a:"Sleeping Pills",b:16},
{a:"Anti-anxiety",b:20},
{a:"Opioid",b:6}
];


var dummydata_health_medication = [
{a:"Antidepressant",b:75},
{a:"Sleeping Pills",b:52},
{a:"Anti-anxiety",b:50},
{a:"Opioid",b:29}
];

 
//////////
 ////////////
///// 
    
////
////
//
//////////  
////
 //// In the past, have you been prescribed any of the following drugs for a service-related injury

var data_health_medication_past = [
{a:"Antidepressant",b:46},
{a:"Sleeping Pills",b:36},
{a:"Anti-anxiety",b:35},
{a:"Opioid",b:32}
];


var dummydata_health_medication_past = [
{a:"Antidepressant",b:75},
{a:"Sleeping Pills",b:52},
{a:"Anti-anxiety",b:50},
{a:"Opioid",b:29}
];

 

 


var numero_health_taking = [6];







////////
////////
//////
 ////Service Related therapies

var data_health_therapies = [
{a:"Natural products*",b:56}, 
{a:"Chiropractic Care",b:39},
{a:"Meditation",b:37},
{a:"Nature/outdoor adventure therapies",b:27},
{a:"Yoga",b:25},
{a:"Acupuncture",b:23},
{a:"Cannabis",b:21}, 
{a:"Special diets",b:20}, 
{a:"Music or Art Therapy",b:18},
{a:"Other",b:15},
{a:"Animal-assisted therapy",b:9},
{a:"Service animal",b:9}
];


var dummydata_health_therapies = [
{a:"Natural products*",b:37}, 
{a:"Chiropractic Care",b:25},
{a:"Meditation",b:26},
{a:"Nature/outdoor adventure therapies",b:18},
{a:"Yoga",b:18},
{a:"Acupuncture",b:15},
{a:"Cannabis",b:14}, 
{a:"Special diets",b:13}, 
{a:"Music or Art Therapy",b:13},
{a:"Other",b:9},
{a:"Animal-assisted therapy",b:6},
{a:"Service animal",b:6}
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
   
   
     var numero_health_therapies = [71];

   
 
//// someone assisting health needs

var data_health_assisting = [
{a:"Yes",b:20},
{a:"No",b:80}
];


var dummydata_health_assisting = [
{a:"Yes",b:51},
{a:"No",b:1}
];
   
   
 
 
     var numero_health_assist = [21];

 
 
//// who is person assisting

 
var data_health_assisting_who = [
{a:"Spouse",b:83},
{a:"Parent",b:4},
{a:"Friend",b:8},
///////{a:"Grandparents",b:.1},
{a:"Extended Family",b:1},
{a:"Paid caregiver or aide",b:5},
{a:"Other",b:6}
];


var dummydata_health_assisting_who = [
{a:"Spouse",b:11},
{a:"Parent",b:11},
{a:"Friend",b:11},
//////{a:"Grandparents",b:11},
{a:"Extended Family",b:11},
{a:"Paid caregiver or aide",b:11},
{a:"Other",b:11}
];
   
 
 
 
 
//// How many daily activities do you need assistance with?

var data_health_activities = [
{a:"One",b:27},
{a:"Two",b:31},
{a:"Three",b:13},
{a:"Four or more",b:29}
];


var dummydata_health_activities = [
{a:"One",b:20},
{a:"Two",b:20},
{a:"Three",b:20},
{a:"Four or more",b:20}
];
   

   


////////////
///////////
/////////////
//////////
///////////
/////////



 //// hours of sleep

 
var data_health_sleep = [
{a:"0 to 4 hours",b:22},
{a:"5 to 6 hours",b:55},
{a:"7 to 8 hours",b:23},
{a:"9 or more hours",b:.5}
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
//////////////////////////////
/////////////////////////////////////
/////////////
//////////  burn pits
////////////
////////////////////////////
 ////////////////////////////////////
 

/// 
//// exposed to burn pits

var data_burn = [
{a:"Yes",b:86},
{a:"No",b:14}
];


var dummydata_burn = [
{a:"Yes",b:51},
{a:"No",b:1}
];
   
   
   var numero_burn_pit = [86];


   

/// 
//// have symptoms because exposed to burn pits

var data_burn_symptoms = [
{a:"Yes",b:43},
{a:"Unsure",b:46},
{a:"No",b:12}
];


var dummydata_burn_symptoms = [
{a:"Yes",b:51},
{a:"Unsure",b:41},
{a:"No",b:1}
];
   
   


/// 
//// burn pits documented

var data_burn_discuss = [
{a:"Yes",b:29},
{a:"No",b:59},
{a:"Unsure",b:12}
];


var dummydata_burn_discuss = [
{a:"Yes",b:51},
{a:"No",b:21},
{a:"Unsure",b:12}
];
   
   
   
  
  
 

/// 
//// burn pits documented

var data_burn_documented = [
{a:"Yes",b:49},
{a:"No",b:51}
];


var dummydata_burn_documented = [
{a:"Yes",b:51},
{a:"No",b:21}
];
   
   
   
  

/// 
//// aware of burn pits registry

var data_burn_registry= [
{a:"Yes",b:75},
{a:"No",b:25}
];


var dummydata_burn_registry = [
{a:"Yes",b:51},
{a:"No",b:21}
];
   
   
  

/// 
//// registered to burn pits registry




var data_burn_registered = [
{a:"Yes",b:72},
{a:"No",b:28}
];


var dummydata_burn_registered = [
{a:"Yes",b:51},
{a:"No",b:21}
];
   
   
/*


var data_burn_registered= [
{a:"2018",b:47},
{a:"2017",b:35},
////////{a:"2015",b:36},
{a:"2014",b:10}
];


 

var dummydata_burn_registered = [
{a:"2018",b:47},
{a:"2017",b:35},
//////////////{a:"2015",b:36},
{a:"2014",b:10}
];
   
   
*/    
 

/// 
//// have any issues with burn pits registry

var data_burn_issues = [
{a:"None",b:65},
{a:"Few",b:21},
{a:"Some",b:11},
{a:"Many",b:3}
];


var dummydata_burn_issues = [
{a:"None",b:28},
{a:"Few",b:28},
{a:"Some",b:18},
{a:"Many",b:12}
];
   
   
 
/// 
//// cpmpleted burn pits evaluation




var data_burn_evaluation = [
{a:"Yes",b:19},
{a:"No",b:63},
{a:"Unsure",b:18}
];


var dummydata_burn_evaluation = [
{a:"Yes",b:51},
{a:"No",b:21},
{a:"Unsure",b:21}
];
   
   

  
//////////////////////////////
///////////////////////////////
//////////////////
/////
/////////
///cannabis cannabis
////
/////////////////////////////////
///////////////////////////////////
////
//// interest in cannabis 

var numero_cannabis = [75];

var numero_cannabis_rec = [37];
var numero_cannabis_med = [22];



////


var data_mj_research = [
{a:"Strongly agree",b:73},
{a:"Somewhat agree",b:15},
{a:"Neutral",b:8},
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
{a:"Somewhat agree",b:16},
{a:"Neutral",b:10},
{a:"Somewhat disagree",b:2},
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
{a:"Strongly agree",b:62},
{a:"Somewhat agree",b:20},
{a:"Neutral",b:12},
{a:"Somewhat disagree",b:3},
{a:"Strongly disagree",b:3}
];



var dummydata_mj_medicinal = [
{a:"Strongly agree",b:25},
{a:"Somewhat agree",b:32},
{a:"Neutral",b:14},
{a:"Somewhat disagree",b:1},
{a:"Strongly disagree",b:28}
];










var data_mj_legal = [
{a:"Strongly agree",b:36},
{a:"Somewhat agree",b:19},
{a:"Neutral",b:21},
{a:"Somewhat disagree",b:9},
{a:"Strongly disagree",b:16}
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
/////
//////// Do you live in a state where cannabis or other cannabinoid products are legal for recreational

var data_cannabis = [
{a:"Yes",b:29},
{a:"No",b:61},
{a:"Not sure",b:10}
];


var dummydata_cannabis = [
{a:"Yes",b:1},
{a:"No",b:4},
{a:"Not sure",b:7}
];

 
//
/////
//////// Do you live in a state where cannabis or other cannabinoid products are legal for recreational

var data_cannabis_state_med = [
{a:"Yes",b:60},
{a:"No",b:25},
{a:"Not sure",b:15}
];


var dummydata_cannabis_state_med = [
{a:"Yes",b:1},
{a:"No",b:4},
{a:"Not sure",b:7}
];

//// old version
///// use cannabis medicinal
/*
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
*/

 
 ///
 ///// interested in using cannabis or cannabinoid products as a treatment option if it were available to you?	 

var data_mj_treatment = [
{a:"Very interested",b:32},
{a:"Interested",b:13},
{a:"Somewhat interested",b:19},
{a:"Not interested",b:34},
{a:"Prefer not to answer",b:3}
];



var dummydata_mj_treatment = [
{a:"Very interested",b:35},
{a:"Interested",b:20},
{a:"Somewhat interested",b:19},
{a:"Not interested",b:9},
{a:"Prefer not to answer",b:17}
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
{a:"Yes",b:60},
{a:"No",b:40}
];

 
var dummydata_tobacco = [
{a:"Yes",b:64},
{a:"No",b:19}
];
   
  
  
  /// 
//// What form of tobacco products have you used?  

var data_tobacco_type = [
{a:"Cigarettes",b:72},
{a:"Cigars",b:44},
{a:"Dip or snuff",b:31},
{a:"Chewing tobacco",b:27},
{a:"Vapes",b:13},
{a:"Pipe tobacco",b:9},
{a:"E-cigarettes",b:8},
{a:"Other",b:1}
];

 
var dummydata_tobacco_type = [
{a:"Cigarettes",b:78},
{a:"Cigars",b:43},
{a:"Dip or snuff",b:32},
{a:"Chewing tobacco",b:28},
{a:"Vapes",b:12},
{a:"Pipe tobacco",b:12},
{a:"E-cigarettes",b:10},
{a:"Other",b:1}
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
{a:"Daily",b:78},
{a:"4-6 times a week",b:3},
{a:"2-3 times a week",b:3},
{a:"Once a week",b:3},
{a:"Less than once a week",b:13}
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
{a:"3 to 6 times a week",b:17},
{a:"Once or twice a week",b:19},
{a:"2 to 3 times a month",b:14},
{a:"Once a month",b:9},
{a:"Less than 10 times in the past year",b:11},
{a:"1 or 2 times in the past year",b:7},
{a:"I did not drink any alcohol in the past year, but I did drink in the past",b:12},
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




var numero_data_alcohol = [27];





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
{a:"16 or more",b:1},
{a:"12 to 15 drinks",b:2},
{a:"9 to 11 drinks",b:3},
{a:"7 to 8 drinks",b:4},
{a:"5 to 6 drinks",b:10},
{a:"3 to 4 drinks",b:22},
{a:"2 drinks",b:34},
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
{a:"Every day",b:2},
{a:"3 to 6 days a week",b:5},
{a:"One or two days a week",b:7},
{a:"2 to 3 days a month",b:8},
{a:"One day a month",b:8},
{a:"Less than 10 days in the past year",b:27},
{a:"Never in the last 12 months",b:43}
];


var dummydata_alcohol_twohour = [
{a:"Every day",b:8},
{a:"3 to 6 days a week",b:19},
{a:"One or two days a week",b:21},
{a:"2 to 3 days a month",b:14},
{a:"One day a month",b:8},
{a:"Less than 10 days in the past year",b:7},
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
{a:"Extremely important",b:54},
{a:"Very important",b:29},
{a:"Moderately important",b:12},
{a:"Slightly important",b:3},
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
{a:"Strongly agree the motto should be changed",b:25},
{a:"Somewhat agree the motto should be changed",b:18},
{a:"Neither agree nor disagree the motto should be changed",b:25},
{a:"Somewhat disagree the motto should be changed",b:10},
{a:"Strongly disagree the motto should be changed",b:22}

];



var dummydata_wom_motto = [
{a:"Strongly agree the motto should be changed",b:72},
{a:"Somewhat agree the motto should be changed",b:21},
{a:"Neither agree nor disagree the motto should be changed",b:4},
{a:"Somewhat disagree the motto should be changed",b:2},
{a:"Strongly disagree the motto should be changed",b:1}
];





var data_wom_motto_f = [
{a:"Strongly agree the motto should be changed",b:41},
{a:"Somewhat agree the motto should be changed",b:16},
{a:"Neither agree nor disagree the motto should be changed",b:23},
{a:"Somewhat disagree the motto should be changed",b:6},
{a:"Strongly disagree the motto should be changed",b:14}

];



var dummydata_wom_motto_f = [
{a:"Strongly agree the motto should be changed",b:72},
{a:"Somewhat agree the motto should be changed",b:21},
{a:"Neither agree nor disagree the motto should be changed",b:4},
{a:"Somewhat disagree the motto should be changed",b:2},
{a:"Strongly disagree the motto should be changed",b:1}
];





var data_wom_motto_m = [
{a:"Strongly agree the motto should be changed",b:23},
{a:"Somewhat agree the motto should be changed",b:18},
{a:"Neither agree nor disagree the motto should be changed",b:25},
{a:"Somewhat disagree the motto should be changed",b:10},
{a:"Strongly disagree the motto should be changed",b:24}

];



var dummydata_wom_motto_m = [
{a:"Strongly agree the motto should be changed",b:72},
{a:"Somewhat agree the motto should be changed",b:21},
{a:"Neither agree nor disagree the motto should be changed",b:4},
{a:"Somewhat disagree the motto should be changed",b:2},
{a:"Strongly disagree the motto should be changed",b:1}
];




//////////
/////////



var data_wom_positions = [
{a:"Strongly agree",b:36},
{a:"Somewhat agree",b:26},
{a:"Neutral",b:13},
{a:"Somewhat disagree",b:13},
{a:"Strongly disagree",b:13}

];



var dummydata_wom_positions = [
{a:"Strongly agree",b:23},
{a:"Somewhat agree",b:21},
{a:"Neutral",b:12},
{a:"Somewhat disagree",b:24},
{a:"Strongly disagree",b:20}
];











var data_wom_positions_m = [
{a:"Strongly agree",b:32},
{a:"Somewhat agree",b:26},
{a:"Neutral",b:12},
{a:"Somewhat disagree",b:14},
{a:"Strongly disagree",b:15}

];



var dummydata_wom_positions_m = [
{a:"Strongly agree",b:23},
{a:"Somewhat agree",b:21},
{a:"Neutral",b:12},
{a:"Somewhat disagree",b:24},
{a:"Strongly disagree",b:20}
];











var data_wom_positions_f = [
{a:"Strongly agree",b:58},
{a:"Somewhat agree",b:20},
{a:"Neutral",b:13},
{a:"Somewhat disagree",b:7},
{a:"Strongly disagree",b:4}

];



var dummydata_wom_positions_f = [
{a:"Strongly agree",b:23},
{a:"Somewhat agree",b:21},
{a:"Neutral",b:12},
{a:"Somewhat disagree",b:24},
{a:"Strongly disagree",b:20}
];



 
//////Report suicidal ideation since joining the military
///////

var data_wom_suicidal = [
{a:"Males",b:43},
{a:"Females",b:48}
];


var dummydata_wom_suicidal = [
{a:"Males",b:43},
{a:"Females",b:48}
];

 


//////service-connected mental health injury
///////

var data_wom_injury = [
{a:"Males",b:59},
{a:"Females",b:68}
];


var dummydata_wom_injury = [
{a:"Males",b:59},
{a:"Females",b:68}
];

 


//////difficulty covering expenses in a typical month
///////

var data_wom_expenses = [
{a:"Males",b:35},
{a:"Females",b:38}
];


var dummydata_wom_expenses = [
{a:"Males",b:40},
{a:"Females",b:31}
];

 




//////Report not feeling safe in VA healthcare facilities
///////

var data_wom_safe = [
{a:"Males",b:10},
{a:"Females",b:14}
];


var dummydata_wom_safe = [
{a:"Males",b:40},
{a:"Females",b:31}
];

 



//////Report not feeling respected by VA employees
///////

var data_wom_respected = [
{a:"Males",b:15},
{a:"Females",b:11}
];


var dummydata_wom_respected = [
{a:"Males",b:15},
{a:"Females",b:11}
];

 







//////////
/////////////
//////////////
/// limited by past restrictions on women in combat
////////////////////

var data_wom_combat = [
{a:"Yes",b:46},
{a:"Maybe",b:24}, 
{a:"No",b:30}
];



var dummydata_wom_combat = [
{a:"Yes",b:75},
{a:"Maybe",b:10}, 
{a:"No",b:15}
];

  
 //// 

var data_wom_combat_m = [
{a:"Yes",b:41},
{a:"Maybe",b:26}, 
{a:"No",b:33}
];



var dummydata_wom_combat_m = [
{a:"Yes",b:75},
{a:"Maybe",b:10}, 
{a:"No",b:15}
];


/////



var data_wom_combat_f = [
{a:"Yes",b:75},
{a:"Maybe",b:13}, 
{a:"No",b:12}
];




var dummydata_wom_combat_f = [
{a:"Yes",b:75},
{a:"Maybe",b:10}, 
{a:"No",b:15}
];

 
 ///////
 
 
 
 
 
 
 ////////
 /////////
 ///////////
 //// lifting restrictions improved recognition?
 //////////
 ////////
 
 

var data_wom_recognition = [
{a:"Yes",b:35},
{a:"Maybe",b:33}, 
{a:"No",b:32}
];


var dummydata_wom_recognition = [
{a:"Yes",b:75},
{a:"Maybe",b:10}, 
{a:"No",b:15}
];



  
var data_wom_recognition_m = [
{a:"Yes",b:34},
{a:"Maybe",b:34}, 
{a:"No",b:32}
];




var dummydata_wom_recognition_m = [
{a:"Yes",b:75},
{a:"Maybe",b:10}, 
{a:"No",b:15}
];


 
 
var data_wom_recognition_f = [
{a:"Yes",b:41},
{a:"Maybe",b:29}, 
{a:"No",b:31}
];




var dummydata_wom_recognition_f = [
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

////////////////
/////////////
/////////////////


var numero_data_wom_survivor=[9];
var numero_data_wom_survivor_f=[43];
var numero_data_wom_survivor_m=[3];
var numero_data_wom_report=[31];
var numero_data_wom_retaliation=[73];

 

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
{a:"I would have been more likely to report",b:44},
{a:"It would not have made a difference in my decision",b:49}, 
{a:"I would have been less likely to report",b:7} 
];

var dummydata_wom_impact = [
{a:"I would have been more likely to report",b:44},
{a:"It would not have made a difference in my decision",b:49}, 
{a:"I would have been less likely to report",b:7} 
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



var numero_enrolled = [84];

////

var numero_va_primary = [53];



////////

var numero_2019_care_good = [54];
var numero_2017_care_good = [42];





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


var data_va_coverage = [
{a:"VA healthcare",b:61},
{a:"DOD healthcare/TRICARE",b:31},
{a:"Private insurance",b:40},
{a:"Medicaid/Medicare",b:10},
{a:"TRICARE Reserve",b:4},
{a:"Do not have health insurance",b:2}
];

var dummydata_va_coverage = [
{a:"VA healthcare",b:21},
{a:"DOD healthcare/TRICARE",b:21},
{a:"Private insurance",b:20},
{a:"Medicaid/Medicare",b:20},
{a:"TRICARE Reserve",b:9},
{a:"Do not have health insurance",b:9}
];



/*

var dummydata_va_coverage = [
{a:"VA health care exclusively",b:27},
{a:"Private insurance exclusively",b:25},
{a:"TRICARE and VA health care",b:17},
{a:"VA supplemented by private insurance",b:15},
{a:"TRICARE exclusively",b:8},
{a:"VA supplemented by Medicaid/Medicare",b:3},
{a:"Do not have health insurance",b:2},
{a:"DOD health care exclusively",b:1},
{a:"DOD and VA health care",b:1},
{a:"DOD supplemented by private insurance",b:1}
];

var data_va_coverage = [
{a:"VA health care exclusively",b:27},
{a:"Private insurance exclusively",b:25},
{a:"TRICARE and VA health care",b:17},
{a:"VA supplemented by private insurance",b:15},
{a:"TRICARE exclusively",b:8},
{a:"VA supplemented by Medicaid/Medicare",b:3},
{a:"Do not have health insurance",b:2},
{a:"DOD health care exclusively",b:1},
{a:"DOD and VA health care",b:1},
{a:"DOD supplemented by private insurance",b:1}
];

*/


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
{a:"Excellent",b:21},
{a:"Good",b:38},
{a:"Average",b:26},
{a:"Poor",b:11},
{a:"Terrible",b:4}
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
{a:"Strongly agree",b:24},
{a:"Somewhat agree",b:42},
{a:"Neither agree nor disagree",b:17},
{a:"Somewhat disagree",b:11},
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
{a:"Strongly agree",b:18},
{a:"Somewhat agree",b:38},
{a:"Neither agree nor disagree",b:18},
{a:"Somewhat disagree",b:16},
{a:"Strongly disagree",b:10}
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
/// feel safe when going to VA facilities
/////////
 

var data_va_safe = [
{a:"Strongly agree",b:43},
{a:"Somewhat agree",b:30},
{a:"Neither agree nor disagree",b:16},
{a:"Somewhat disagree",b:7},
{a:"Strongly disagree",b:4}
];

var dummydata_va_safe = [
{a:"Strongly agree",b:6},
{a:"Somewhat agree",b:26},
{a:"Neither agree nor disagree",b:15},
{a:"Somewhat disagree",b:31},
{a:"Strongly disagree",b:2}
];


///////////////







///////////////
/// VA employees treat me with respect
/////////
 

var data_va_respect = [
{a:"Strongly agree",b:41},
{a:"Somewhat agree",b:33},
{a:"Neither agree nor disagree",b:14},
{a:"Somewhat disagree",b:8},
{a:"Strongly disagree",b:4}
];

var dummydata_va_respect = [
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
{a:"Extremely easy",b:26},
{a:"Somewhat easy",b:36},
{a:"Neither easy nor difficult",b:15},
{a:"Somewhat difficult",b:16},
{a:"Extremely difficult",b:7}
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
{a:"Extremely easy",b:27},
{a:"Somewhat easy",b:30},
{a:"Neither easy nor difficult",b:17},
{a:"Somewhat difficult",b:16},
{a:"Extremely difficult",b:11}
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
{a:"Extremely easy",b:15},
{a:"Somewhat easy",b:27},
{a:"Neither easy nor difficult",b:20},
{a:"Somewhat difficult",b:23},
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
{a:"Extremely satisfied",b:33},
{a:"Somewhat satisfied",b:37},
{a:"Neither satisfied nor dissatisfied",b:14},
{a:"Somewhat dissatisfied",b:8},
{a:"Extremely dissatisfied",b:8}
];

var dummydata_va_satisfaction_prim = [
{a:"Extremely satisfied",b:26},
{a:"Somewhat satisfied",b:25},
{a:"Neither satisfied nor dissatisfied",b:11},
{a:"Somewhat dissatisfied",b:22},
{a:"Extremely dissatisfied",b:16}
];


///////////////



var data_va_satisfaction_special = [
{a:"Extremely satisfied",b:25},
{a:"Somewhat satisfied",b:33},
{a:"Neither satisfied nor dissatisfied",b:21},
{a:"Somewhat dissatisfied",b:12},
{a:"Extremely dissatisfied",b:9}
];

var dummydata_va_satisfaction_special = [
{a:"Extremely satisfied",b:26},
{a:"Somewhat satisfied",b:25},
{a:"Neither satisfied nor dissatisfied",b:11},
{a:"Somewhat dissatisfied",b:22},
{a:"Extremely dissatisfied",b:16}
];


///////////////



var data_va_satisfaction_mental = [
{a:"Extremely satisfied",b:32},
{a:"Somewhat satisfied",b:28},
{a:"Neither satisfied nor dissatisfied",b:17},
{a:"Somewhat dissatisfied",b:13},
{a:"Extremely dissatisfied",b:10}
];

var dummydata_va_satisfaction_mental = [
{a:"Extremely satisfied",b:26},
{a:"Somewhat satisfied",b:25},
{a:"Neither satisfied nor dissatisfied",b:11},
{a:"Somewhat dissatisfied",b:22},
{a:"Extremely dissatisfied",b:16}
];


///////////////






/////////
//////
///////
/////////////
/// community care
///////////////
///////////
///////////////
/////////////////////
///////////////
/// Rate your level of satisfaction with the non va following providers
/////////
 
  

var data_va_scheduling_non_prim = [
{a:"Extremely easy",b:27},
{a:"Somewhat easy",b:27},
{a:"Neither easy nor difficult",b:22},
{a:"Somewhat difficult",b:14},
{a:"Extremely difficult",b:10}
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
{a:"Extremely easy",b:33},
{a:"Somewhat easy",b:22},
{a:"Neither easy nor difficult",b:23},
{a:"Somewhat difficult",b:9},
{a:"Extremely difficult",b:13}
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
{a:"Extremely easy",b:24},
{a:"Somewhat easy",b:40},
{a:"Neither easy nor difficult",b:12},
{a:"Somewhat difficult",b:10},
{a:"Extremely difficult",b:13}
];

var dummydata_va_scheduling_non_spec = [
{a:"Extremely easy",b:26},
{a:"Somewhat easy",b:25},
{a:"Neither easy nor difficult",b:11},
{a:"Somewhat difficult",b:22},
{a:"Extremely difficult",b:16}
];


///////////////
 

//////
///////





///////////////
/// non va Clinicians understand the medical needs of veterans
/////////
 

var data_va_non_understand = [
{a:"Strongly agree",b:27},
{a:"Somewhat agree",b:39},
{a:"Neither agree nor disagree",b:20},
{a:"Somewhat disagree",b:9},
{a:"Strongly disagree",b:5}
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
{a:"Strongly agree",b:35},
{a:"Somewhat agree",b:33},
{a:"Neither agree nor disagree",b:12},
{a:"Somewhat disagree",b:13},
{a:"Strongly disagree",b:7}
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
/// How confident are you in VA's ability to successfully operate its Community Care program
/////////
 

var data_va_non_confident = [
{a:"Extremely confident",b:6},
{a:"Somewhat confident",b:29},
{a:"Neither confident nor unconfident",b:40},
{a:"Somewhat unconfident",b:15},
{a:"Extremely unconfident",b:10}
];

var dummydata_va_non_confident = [
{a:"Extremely confident",b:6},
{a:"Somewhat confident",b:26},
{a:"Neither confident nor unconfident",b:15},
{a:"Somewhat unconfident",b:31},
{a:"Extremely unconfident",b:2}
];


///////////////



/////
///////
///////////
//////////
/////////
///////
//////


var data_va_choose_non = [
{a:"Not eligible for VA health care",b:6},
{a:"I am not enrolled in VA health care",b:21},
{a:"Higher quality of care with non-VA provider",b:36},
{a:"More comfortable with non-VA provider",b:13},
{a:"Non-VA provider understands my military service",b:3},
{a:"Not satisfied with VA provider",b:13},
{a:"Non-VA provider more convenient",b:39}
];

var dummydata_va_choose_non = [
{a:"Not eligible for VA health care",b:43},
{a:"I am not enrolled in VA health care",b:37},
{a:"Higher quality of care with non-VA provider",b:13},
{a:"More comfortable with non-VA provider",b:4},
{a:"Non-VA provider understands my military service",b:4},
{a:"Not satisfied with VA provider",b:4},
{a:"Non-VA provider more convenient",b:3}
];


///////////////

 

var data_va_choose = [
{a:"The VA is my only source of health care",b:33},
{a:"VA health care is free",b:53},
{a:"Higher quality care with VA provider",b:8},
{a:"VA provider understands my military service",b:29},
{a:"The VA is more convenient (hours/location)",b:11},
{a:"Not satisfied with private provider",b:4}
];

var dummydata_va_choose = [
{a:"The VA is my only source of health care",b:6},
{a:"VA health care is free",b:21},
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
{a:"Yes",b:48},
{a:"No",b:52}
];

var dummydata_va_familiar = [
{a:"Yes",b:52},
{a:"No",b:48}
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



////
//// va mission act community care act heard
var numero_va_mission_heard = [36];
////

////
//// va mission act community care act familiar
var numero_va_mission_familiar = [36];
////
////
//// va mission act community care act used
var numero_va_mission_used = [16];
////


//////var numero_va_choice = [39];

////
//// support extensio of Choice Prog
var numero_va_exp = [91];
////

////////////////////
////////////
//// Experience with Choice Program
///////
//////
//////// now called community care program
////////////////
///////

var data_va_choice_exp = [
{a:"Excellent",b:24},
{a:"Good",b:39},
{a:"Average",b:20},
{a:"Poor",b:11},
{a:"Terrible",b:7}
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
 
 
//// 
var numero_va_rate = [81];
////

 
////////////////
////// support privatization of va  
/////////
 
////
//// 
var numero_va_priv = [44];
////



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
 

 ////
//// 
var numero_va_rating = [79];
////




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
{a:"125 days or less",b:14},
{a:"126-180 days",b:20},
{a:"181-365 days",b:16},
{a:"Over 365 days",b:28},
{a:"My claim is still pending",b:21} 
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
{a:"Yes",b:64},
{a:"No",b:36} 
];


var dummydata_va_outcome = [
{a:"Yes",b:20},
{a:"No",b:62} 
];




  
/////////
/////////
//// Have you ever appealed a VA disability compensation claim decision? 
 
var data_va_appeal = [
{a:"Yes",b:36},
{a:"No",b:64} 
];


var dummydata_va_appeal = [
{a:"Yes",b:20},
{a:"No",b:62} 
];






  
/////////
/////////
//// How long did it take to receive a final decision on your appeal?	 
 

var data_va_decision = [
{a:"125 days or less",b:25},
{a:"126-180 days",b:22},
{a:"181-365 days",b:23},
{a:"Over 365 days",b:27},
{a:"My claim is still pending",b:3} 
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
{a:"Veteran Service Organizations",b:63},
{a:"VA employees",b:42},
{a:"Friends",b:31},
{a:"Family",b:5},
{a:"Elected Government Officials",b:4},
{a:"Other",b:21} 
];


var dummydata_va_ask = [
{a:"Veteran Service Organizations",b:61},
{a:"VA employees",b:41},
{a:"Friends",b:30},
{a:"Family",b:7},
{a:"Elected Government Officials",b:4},
{a:"Other",b:23} 
];


////////////////
///////Please rate your satisfaction with the following VA benefits:

 
 
var data_va_rate_dis = [
{a:"Extremely satisfied",b:31},
{a:"Somewhat satisfied",b:43},
{a:"Somewhat dissatisfied",b:16},
{a:"Extremely dissatisfied",b:10}
];


var dummydata_va_rate_dis = [
{a:"Extremely satisfied",b:28},
{a:"Somewhat satisfied",b:44},
{a:"Somewhat dissatisfied",b:15},
{a:"Extremely dissatisfied",b:12}
];

 ////////
var data_va_rate_pension = [
{a:"Extremely satisfied",b:27},
{a:"Somewhat satisfied",b:45},
{a:"Somewhat dissatisfied",b:17},
{a:"Extremely dissatisfied",b:11}
];


var dummydata_va_rate_pension = [
{a:"Extremely satisfied",b:24},
{a:"Somewhat satisfied",b:42},
{a:"Somewhat dissatisfied",b:19},
{a:"Extremely dissatisfied",b:15}
];



var data_va_rate_edu = [
{a:"Extremely satisfied",b:43},
{a:"Somewhat satisfied",b:40},
{a:"Somewhat dissatisfied",b:11},
{a:"Extremely dissatisfied",b:6}
];


var dummydata_va_rate_edu = [
{a:"Extremely satisfied",b:44},
{a:"Somewhat satisfied",b:41},
{a:"Somewhat dissatisfied",b:10},
{a:"Extremely dissatisfied",b:5}
];





var data_va_rate_home = [
{a:"Extremely satisfied",b:58},
{a:"Somewhat satisfied",b:33},
{a:"Somewhat dissatisfied",b:5},
{a:"Extremely dissatisfied",b:3}
];


var dummydata_va_rate_home = [
{a:"Extremely satisfied",b:57},
{a:"Somewhat satisfied",b:33},
{a:"Somewhat dissatisfied",b:6},
{a:"Extremely dissatisfied",b:4}
];



 
var data_va_rate_ins = [
{a:"Extremely satisfied",b:23},
{a:"Somewhat satisfied",b:42},
{a:"Somewhat dissatisfied",b:18},
{a:"Extremely dissatisfied",b:16}
];


var dummydata_va_rate_ins = [
{a:"Extremely satisfied",b:21},
{a:"Somewhat satisfied",b:41},
{a:"Somewhat dissatisfied",b:22},
{a:"Extremely dissatisfied",b:17}
];



var data_va_rate_voc = [
{a:"Extremely satisfied",b:24},
{a:"Somewhat satisfied",b:34},
{a:"Somewhat dissatisfied",b:21},
{a:"Extremely dissatisfied",b:21}
];


var dummydata_va_rate_voc = [
{a:"Extremely satisfied",b:21},
{a:"Somewhat satisfied",b:33},
{a:"Somewhat dissatisfied",b:21},
{a:"Extremely dissatisfied",b:25}
];



 ////////
 

var data_va_rate_care = [
{a:"Extremely satisfied",b:17},
{a:"Somewhat satisfied",b:35},
{a:"Somewhat dissatisfied",b:22},
{a:"Extremely dissatisfied",b:26}
];


var dummydata_va_rate_care = [
{a:"Extremely satisfied",b:17},
{a:"Somewhat satisfied",b:35},
{a:"Somewhat dissatisfied",b:22},
{a:"Extremely dissatisfied",b:26}
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


////
//// eligible for the Post-9/11 GI Bill
var numero_gi_eligible = [75];
////
//// currently in school
var numero_gi_school_current = [16];
////


/////
/////// post-9/11 GI Bill used

 

var data_gi_use = [
{a:"Have used it",b:53},
{a:"Using it",b:11},
{a:"No, but I intend to use it",b:11},
{a:"Dependent is using/has used it",b:11},
{a:"No, and do not intend to use it",b:7},
{a:"No, but I intend to transfer it to my dependent",b:7}
];



var dummydata_gi_use = [
{a:"Have used it",b:13},
{a:"Using it",b:25},
{a:"No, but I intend to use it",b:1},
{a:"Dependent is using/has used it",b:51},
{a:"No, and do not intend to use it",b:1},
{a:"No, but I intend to transfer it to my dependent",b:1}
];



 
 ////
//   
////////// 


/////
/////// post-9/11 GI Bill graduated

 
var data_gi_grad = [
{a:"Yes",b:66},
{a:"No",b:18},
{a:"Still in school",b:16}
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
{a:"Excellent",b:48},
{a:"Good",b:35},
{a:"Average",b:13},
{a:"Poor",b:4},
{a:"Terrible",b:1}
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
{a:"Extremely important",b:47},
{a:"Very important",b:32},
{a:"Moderately important",b:14},
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
{a:"Extremely important",b:39},
{a:"Very important",b:28},
{a:"Moderately important",b:21},
{a:"Slightly important",b:5},
{a:"Not at all important",b:6}
];
 
var dummydata_gi_imp_retent = [
{a:"Extremely important",b:43},
{a:"Very important",b:37},
{a:"Moderately important",b:14},
{a:"Slightly important",b:4},
{a:"Not at all important",b:2}
];



var data_gi_imp_trans = [
{a:"Extremely important",b:60},
{a:"Very important",b:27},
{a:"Moderately important",b:9},
{a:"Slightly important",b:2},
{a:"Not at all important",b:1}
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

var numero_data_ed_b=[23];

///
/////
/// type of school are you attending/did you attend
/////////
var dummydata_ed_b=[{a:"State/public school",b:22},{a:"Not-for-profit private school",b:15},{a:"For-profit private school",b:13},{a:"Foreign school",b:1},{a:"Unsure",b:56}];

var data_ed_b=[{a:"State/public school",b:58},{a:"Not-for-profit private school",b:20},{a:"For-profit private school",b:24},{a:"Foreign school",b:1},{a:"Unsure",b:4}];


///
////
///// overall level of satisfaction with your educational program
///////
var dummydata_ed_c=[{a:"Extremely satisfied",b:34},{a:"Somewhat satisfied",b:45},{a:"Neither Satisfied or Dissatisfied",b:13},{a:"Somewhat dissatisfied",b:8},{a:"Extremely dissatisfied",b:8}];

var data_ed_c=[{a:"Extremely satisfied",b:46},{a:"Somewhat satisfied",b:38},{a:"Neither Satisfied or Dissatisfied",b:7},{a:"Somewhat dissatisfied",b:6},{a:"Extremely dissatisfied",b:2}];

 ////////
 //// To what level is/are your school(s) veteran friendly? 


var dummydata_ed_vetfriend=[{a:"Far above average",b:34},{a:"Somewhat above average",b:45},{a:"Average",b:13},{a:"Somewhat below average",b:8},{a:"Far below average",b:8}];

var data_ed_vetfriend=[{a:"Far above average",b:30},{a:"Somewhat above average",b:35},{a:"Average",b:28},{a:"Somewhat below average",b:5},{a:"Far below average",b:2}];


///////
////////
////////// VA educational benefits used for education
//////////////
var dummydata_ed_a=[{a:"Post-9/11 GI Bill",b:77},{a:"Montgomery GI Bill",b:9},{a:"VA Vocational Rehabilitation",b:1},{a:"Reserve Education Assistance Program",b:3},{a:"Other",b:4}];

var data_ed_a=[{a:"Post-9/11 GI Bill",b:80},{a:"Montgomery GI Bill",b:31},{a:"VA Vocational Rehabilitation",b:24},{a:"Reserve Education Assistance Program",b:3},{a:"Other",b:3}];

////
////
///  

////// took out private or federal loans for 
///////////
var numero_ed_d=[41];

////////
//// How much debt have you accrued through student loans
/////////////
var dummydata_ed_d=[{a:"Under $1000",b:2},{a:"$1,001-$5,000",b:6},{a:"$5,001-$10,000",b:8},{a:"$10,001-$15,000",b:8},{a:"$15,001-$20,000",b:5},{a:"$20,001-$50,000",b:15},{a:"$50,001-$100,000",b:15},{a:"Above $100,000",b:4}];

var data_ed_d=[{a:"Under $1000",b:4},{a:"$1,001-$5,000",b:6},{a:"$5,001-$10,000",b:16},{a:"$10,001-$15,000",b:11},{a:"$15,001-$20,000",b:10},{a:"$20,001-$50,000",b:26},{a:"$50,001-$100,000",b:18},{a:"Above $100,000",b:9}];



////
///////////////////////////
///////////////////////////////
////////////////////////////////
///// employment
//////////////////////////////////
/////////////////////////////////////
//////
// 

 


var data_employed=[
{a:"Employed full-time",b:57},
{a:"Retired",b:20},
{a:"Disabled or otherwise unable to work",b:17},
{a:"Self-employed business owner",b:7},
{a:"Student",b:6},
{a:"Unemployed and looking for work",b:6},
{a:"Employed part-time",b:5},
{a:"Unemployed and not looking for work",b:3},
{a:"Prefer not to answer",b:.5}];

var dummydata_employed=[
{a:"Employed full-time",b:57},
{a:"Retired",b:10},
{a:"Disabled or otherwise unable to work",b:12},
{a:"Self-employed business owner",b:5},
{a:"Student",b:5},
{a:"Unemployed and looking for work",b:5},
{a:"Employed part-time",b:4},
{a:"Unemployed and not looking for work",b:1},
{a:"Prefer not to answer",b:1}
];

/////
//////

var numero_data_employed=[5];

////
/////
var numero_data_underemployed=[34];

/////
/////// training 
 
var data_traing = [
{a:"Yes",b:39},
{a:"No",b:61}
];
 
var dummydata_traing = [
{a:"Yes",b:14},
{a:"No",b:50}
];


/////
/////// job secured before leaving military 
 
 //////

var numero_data_job_secured=[66];



var data_job_before = [
{a:"Yes",b:31},
{a:"No",b:69}
];
 
var dummydata_job_before = [
{a:"Yes",b:14},
{a:"No",b:50}
];


//////////
// How long were you without a job after transitioning out of the military?	 


var data_without_job = [
{a:"Less than 30 days",b:11},
{a:"31 to 60 days",b:13},
{a:"61 to 90 days",b:11},
{a:"91 to 180 days",b:15},
{a:"181 to 365 days",b:11},
{a:"Over 365 days",b:21},
{a:"Have not experienced unemployment",b:4},
{a:"Opted to attend school",b:14}
];
 
var dummydata_without_job = [
{a:"Less than 30 days",b:14},
{a:"31 to 60 days",b:20},
{a:"61 to 90 days",b:11},
{a:"91 to 180 days",b:18},
{a:"181 to 365 days",b:18},
{a:"Over 365 days",b:18},
{a:"Have not experienced unemployment",b:18},
{a:"Opted to attend school",b:7}
];



///
///// At which level do you currently work?
 
 
var data_level = [
{a:"Associate Level",b:30},
{a:"Junior Management",b:26},
{a:"Entry Level",b:18},
{a:"Senior Management",b:16},
{a:"Executive Level or Business Owner",b:10}
];
 
var dummydata_level = [
{a:"Associate Level",b:30},
{a:"Junior Management",b:26},
{a:"Entry Level",b:18},
{a:"Senior Management",b:16},
{a:"Executive Level or Business Owner",b:10}
];


/////////
//// Are you personally satisfied with your current job? 
 
var data_satisfied = [
{a:"Extremely satisfied",b:36},
{a:"Somewhat satisfied",b:42},
{a:"Neither satisfied nor dissatisfied",b:9},
{a:"Somewhat dissatisfied",b:9},
{a:"Extremely dissatisfied",b:4}
];
 
var dummydata_satisfied = [
{a:"Extremely satisfied",b:18},
{a:"Somewhat satisfied",b:10},
{a:"Neither satisfied nor dissatisfied",b:16},
{a:"Somewhat dissatisfied",b:16},
{a:"Extremely dissatisfied",b:10}
];


///////////
//// Why are you satisfied with your current job? (Select all that apply)	 

var data_satisfied_why = [
{a:"Job is challenging",b:50},
{a:"The environment and/or people",b:57},
{a:"Opportunity to apply skills/abilities",b:56},
{a:"Matches my education/experience level",b:46},
{a:"Compensation",b:55},
{a:"Job is mission driven/has an impact",b:56},
{a:"Benefits package",b:48},
{a:"Provides support programs for veterans/military",b:21},
{a:"Other",b:7}
];
 
var dummydata_satisfied_why = [
{a:"Job is challenging",b:19},
{a:"The environment and/or people",b:11},
{a:"Opportunity to apply skills/abilities",b:12},
{a:"Matches my education/experience level",b:12},
{a:"Compensation",b:12},
{a:"Job is mission driven/has an impact",b:12},
{a:"Benefits package",b:12},
{a:"Provides support programs for veterans/military",b:12},
{a:"Other",b:6}
];



/////////
/// Why arent you satisfied with your current job? (Select all that apply) 

var data_dissatisfied = [
{a:"Job is not challenging",b:35},
{a:"The environment and/or people",b:51},
{a:"Compensation",b:48},
{a:"Job does not best use my skills",b:55},
{a:"Job does not match my education/experience level",b:47},
{a:"Job is not mission driven/has an impact",b:31},
{a:"Benefits package",b:20},
{a:"No support programs for veterans/military",b:21},
{a:"Other",b:19}
];
 
var dummydata_dissatisfied = [
{a:"Job is not challenging",b:10},
{a:"The environment and/or people",b:17},
{a:"Compensation",b:1},
{a:"Job does not best use my skills",b:6},
{a:"Job does not match my education/experience level",b:5},
{a:"Job is not mission driven/has an impact",b:16},
{a:"Benefits package",b:18},
{a:"No support programs for veterans/military",b:11},
{a:"Other",b:7}
];


/////
//What is the main reason you are not looking for work? (Select all that apply) 

var data_looking = [
{a:"In School or training",b:19},
{a:"Lack skills/training experience",b:11},
{a:"Childcare conflicts",b:19},
{a:"Caregiver for a disabled, ill or injured individual",b:0},
{a:"Family responsibilities",b:35},
{a:"Concern about employer stereotypes",b:14},
{a:"Transportation challenges",b:0},
{a:"Mental health concerns/challenges",b:27},
{a:"Physical health concerns/challenges",b:27},
{a:"Other",b:28}
];
 
var dummydata_looking = [
{a:"In School or training",b:10},
{a:"Lack skills/training experience",b:17},
{a:"Childcare conflicts",b:1},
{a:"Caregiver for a disabled, ill or injured individual",b:6},
{a:"Family responsibilities",b:5},
{a:"Concern about employer stereotypes",b:16},
{a:"Transportation challenges",b:18},
{a:"Mental health concerns/challenges",b:11},
{a:"Physical health concerns/challenges",b:11},
{a:"Other",b:7}
];



///// If you are not a business owner, are you planning to start your own business/non-profit enterprise? 

var data_startup = [
{a:"Yes",b:20},
{a:"No",b:72},
{a:"I am already a business owner",b:8}
];
 
var dummydata_startup = [
{a:"Yes",b:14},
{a:"No",b:10},
{a:"I am already a business owner",b:50}
];

///
///////
///// Are you currently a business owner or do you have plans to start your own business/non-profit enterprise? 

var data_startup = [
{a:"I am already a business owner",b:9},
{a:"I am planning on starting my own business",b:18},
{a:"I have no plans to start my own business",b:73}
];
 
var dummydata_startup = [
{a:"I am already a business owner",b:14},
{a:"I am planning on starting my own business",b:10},
{a:"I have no plans to start my own business",b:50}
];


//////
// What challenges do you anticipate for starting your business/non-profit? 


var data_startup_challenges = [
{a:"Start up capital",b:72},
{a:"Operating costs",b:60},
{a:"Navigating federal and state regulations",b:48},
{a:"Can't qualify for loans",b:32},
{a:"Lack of industry experience",b:32},
{a:"Lack of available training",b:19},
{a:"Other",b:12}
];
 
var dummydata_startup_challenges = [
{a:"Start up capital",b:88},
{a:"Operating costs",b:62},
{a:"Navigating federal and state regulations",b:53},
{a:"Can't qualify for loans",b:37},
{a:"Lack of industry experience",b:36},
{a:"Lack of available training",b:22},
{a:"Other",b:13}
];



///
//// aware of VA/Department of Labor small business support programs for veterans

 var numero_employ_loans_aware = [43];

////
//////
////////

var numero_underemployed = [37];


var numero_unemployed = [65];

var numero_employ_loans = [38];


 



////
//////




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

//////var dummydata_va_decision=[{a:"2017",b:16},{a:"2015",b:57},{a:"2014",b:2}];

///////////var data_va_decision=[{a:"2017",b:36},{a:"2015",b:37},{a:"2014",b:32}];

////var dummydata_va_appeal=[{a:"2017",b:16},{a:"2015",b:57}];

///////var data_va_appeal=[{a:"2017",b:27},{a:"2015",b:33}];

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





//////////////////
//// profile of iava member
////////////////////
 /////////////////////////

drawHBarChart(data_gender);




///////

drawHBarChart(data_ethnicity);


drawHBarChart(data_religion);

drawPieChart(data_age);

drawPieChart(data_marital);

drawPieChart(data_children);

drawHBarChart(data_school);


drawHBarChart(data_income);



///////////////
/// added in
/////////////// drawHBarChart(data_party);
/////////////////
//////////////////drawStackChart(data_orientation);










drawStackChart(data_branch);
/////changePieChart(data_branch,"svg1");


drawStackChart(data_officer);
///changePieChart(data_officer,"svg2");


/////// number of deployments
drawPieChart(data_m);

drawPieChart(data_n);

//////////////
/// toook out community 2020

drawPieChart(data_o);
/*

changeHBarChart(data_o,"svg14");


drawStackChart(data_p,"svg15");

drawStackChart(data_pp,"svg16");
*/

drawHBarChart(data_natg);



drawStackChart(data_discharge);

drawHBarChart(data_milserve_separate);

/////////////////
///////// removed
/////////////////////// startnumerosA(numero_member,"svg12");

drawHBarChart(data_interact);

/////////////////////// changeHBarChart(data_interact_how,"svg19");
//////////////////////////drawStackChart(data_milserve_recommend,"svg24");


drawStackChart(data_reco_service);








///////////
////////////
////////////////
////
///////
//////////////

 
/////////////////////////////
///////
////// political engagement
///////////
 

startnumerosA(numero_vote_reg);
startnumerosC(numero_considered);
startnumerosB(data_planning);

  
 



//////
///// 2019 version
//////
///////// drawStackChart(data_reg);

//////
/// added in
////
drawStackChart(data_vet_impact);




/////
//////  
//////

///////
//// taken out in 2020
/////// drawHBarChart(data_party);
////
/////
//////








///////////////////
//////////
///// Civic Engagement
/////////////////////
//////////
/////////////////////






 

startnumerosA(numeros_civic_volunteer);
startnumerosC(numeros_civic_vol_more);
drawHBarChart(data_civic_issues);



///////
//////
////////
///////////// political perceptions
/// 2020 merged / changed to issues from the headlines
/////





drawStackChart(data_civic_oppose_trump);
drawStackChart(data_civic_border);
drawStackChart(data_civic_wall);
drawStackChart(data_civic_paroleinplace);
drawStackChart(data_civic_citizenship);

 
drawStackChart(data_selective_end);
drawStackChart(data_selective_women);
drawHBarChart(data_deport);
startnumerosA(numero_deport_impacted);
startnumerosB(numero_deport_know);

 
 



  
 
 drawHBarChart(data_iraq_worth);

drawHBarChart(data_afghan_worth);





drawStackChart(data_trump_support);

drawStackChart(data_congress_support);

drawStackChart(data_public_support);

drawStackChart(data_public_understand);

drawStackChart(data_employer_support);

drawStackChart(data_employer_retain);

 


 

/*
startnumerosB(numeroVoted);

startsmallnumerosA(numeroE);

drawStackChart(data_s);
*/


////////////////////
////////////////
////// 2020 suicide
////////////////////
//////////////////
 
 
//////////////
////////////////
////////// suicdie
////////////////////
////////////

 startnumerosB(numero_suicide_progress);
startnumerosA(numero_suicide_care);

   drawStackChart(data_mental_know_attempted);
  drawStackChart(data_mental_know);
  drawStackChart(data_mental_considered_before);
  drawStackChart(data_mental_considered);
  drawStackChart(data_mental_hotline);
  drawStackChart(data_mental_hotline_contact);
  drawStackChart(data_mental_hotline_rate);



 




 
  ////////
  /////// 
 
 
 ////////
/////////////////////////// 
//// exposed to burn pits
////////////////////////////

 startnumerosA(numero_burn_pit);

//////drawStackChart(data_burn);


drawStackChart(data_burn_symptoms);
drawStackChart(data_burn_discuss);
drawStackChart(data_burn_documented);
drawStackChart(data_burn_registry);
drawStackChart(data_burn_registered);

drawStackChart(data_burn_issues);

 
drawStackChart(data_burn_evaluation);



/////////
//////////
////// womens issues
/////////////
/////////////////


drawStackChart(data_wom_iava);
 
 
drawStackChart(data_wom_positions);
drawStackChart(data_wom_positions_f);
drawStackChart(data_wom_positions_m);

 drawStackChart(data_wom_combat);
 drawStackChart(data_wom_combat_f);
 drawStackChart(data_wom_combat_m);
 
 
drawStackChart(data_wom_recognition);
drawStackChart(data_wom_recognition_f);
drawStackChart(data_wom_recognition_m);

 
drawHBarChart(data_wom_motto);
drawHBarChart(data_wom_motto_f); 
drawHBarChart(data_wom_motto_m);


drawHBarChart(data_wom_suicidal);
drawHBarChart(data_wom_injury);
drawHBarChart(data_wom_expenses);


drawHBarChart(data_wom_safe);
drawHBarChart(data_wom_respected);




/////////////////////
////////////
///////////////////
//////////////
/////// mst
//////////////////


 


startnumerosC(numero_data_wom_survivor);
startnumerosB(numero_data_wom_survivor_f);
startnumerosA(numero_data_wom_survivor_m);
 startnumerosB(numero_data_wom_report);




 startnumerosA(numero_data_wom_retaliation);

drawHBarChart(data_wom_impact);
  
 drawStackChart(data_wom_prosecutor);

   




///
///////
////


 
 
 ///
////
//////////////////////
////////////////
///////// rate va healtn care

////////////


startnumerosB(numero_enrolled);

 startnumerosA(numero_va_primary);

  drawHBarChart(data_va_coverage);

drawStackChart(data_va_experience);

 startnumerosC(numero_2019_care_good);

 startnumerosB(numero_2017_care_good);


////////


 drawStackChart(data_va_understand);
 //////drawStackChart(data_va_non_understand,"svg92");

  drawStackChart(data_va_quality);
//////drawStackChart(data_va_non_quality,"svg90");

  drawStackChart(data_va_safe);

  drawStackChart(data_va_respect);


  drawStackChart(data_va_scheduling_mental);

  drawStackChart(data_va_scheduling_prim);

  drawStackChart(data_va_scheduling_special);



  drawStackChart(data_va_satisfaction_mental);

  drawStackChart(data_va_satisfaction_prim);

  drawStackChart(data_va_satisfaction_special);


 
   ///////////////////////////////////////////////
 /////////////////////////////////////////////////
/////////////////// mission act  community care
 /////////////////////////////////////////////////


startnumerosC(numero_va_mission_heard);

startnumerosB(numero_va_mission_familiar);

 startnumerosA(numero_va_mission_used);

  drawHBarChart(data_va_choice_exp);

  drawStackChart(data_va_non_understand);

  drawStackChart(data_va_non_quality);

  drawStackChart(data_va_scheduling_non_mental);

  drawStackChart(data_va_scheduling_non_prim);

  drawStackChart(data_va_scheduling_non_spec);

   drawHBarChart(data_va_non_confident);

 
 

 
   ///////////////////////////////////////////////
 /////////////////////////////////////////////////
///////////////////////////// rate va benefits
 /////////////////////////////////////////////////



startnumerosB(numero_va_rating);
//////drawStackChart(data_va_rating);




  drawHBarChart(data_va_decision);

  drawStackChart(data_va_outcome);

  drawStackChart(data_va_appeal);
  
  drawHBarChart(data_va_claim_long);



 /// drawStackChart(data_va_rating,"svg100");
  /////// changeHBarChart(data_va_pending,"svg102");
 
  //// changeHBarChart(data_va_appeal_pending,"svg106");
 
 
 
  drawStackChart(data_va_rate_dis);
  drawStackChart(data_va_rate_pension);
  drawStackChart(data_va_rate_edu);
  drawStackChart(data_va_rate_home);
  drawStackChart(data_va_rate_ins);
  drawStackChart(data_va_rate_voc);
  drawStackChart(data_va_rate_care);

 

  drawHBarChart(data_va_ask);
 
 
 




//////
////////
/////////
///////////////////////////// 
////////// gi bill education
/////////////////////////////////
//////
///////


/////// eligible for post 9/11 gi bill
  startnumerosB(numero_gi_eligible);

///// curenlty in school
  startnumerosB(numero_gi_school_current);

/////// ever used gi bill  
  drawHBarChart(data_gi_use);

///// graduate?
  drawStackChart(data_gi_grad);

/////// rate experience  
  drawStackChart(data_gi_exp);
   
/////// what type of school attending  
  drawHBarChart(data_ed_b);

 /////  satisfaction with your ed programs 
  drawHBarChart(data_ed_c);

//// vet friendly
  drawStackChart(data_ed_vetfriend);

//// va ed benefits for ed
  drawHBarChart(data_ed_a);


//// how important is gi bill for the following
 drawStackChart(data_gi_imp_recruit);
  drawStackChart(data_gi_imp_retent);
  drawStackChart(data_gi_imp_trans);

/////// private lons
 startnumerosB(numero_ed_d);

////// how much debt
   drawHBarChart(data_ed_d);

 




////////////////////////
///////////////////////////
 


 
////


 ///////////////////
 /// cannabis ////
 ////////////////////
  
 
 ////////////
 //////////////


 drawStackChart(data_mj_legal);
 drawStackChart(data_mj_medicinal);
 drawStackChart(data_mj_research);
drawStackChart(data_mj_va_research);



startnumerosA(numero_cannabis_rec);

 startnumerosB(numero_cannabis_med);


 
drawStackChart(data_mj_treatment);

drawPieChart(data_cannabis_state_med);
drawPieChart(data_cannabis);


 
 

 
 
 

 //////////////////////////
 //////////////
 //////// Tobacco alcohol use
 //      


drawHBarChart(data_alcohol);

drawHBarChart(data_alcohol_typical);

drawHBarChart(data_alcohol_twohour);






/////////////////////////
/////// removing item
//////////////////////////drawHBarChart(data_alcohol_typical);


////////////////////////////////////////// bingswitch bars for number
//////////////////////////////////////drawHBarChart(data_alcohol_twohour);

//// startnumerosA(numero_data_alcohol);





drawStackChart(data_tobacco);
drawStackChart(data_tobacco_use);
drawHBarChart(data_tobacco_type);
 
drawHBarChart(data_tobacco_often);

   
///
///////
//////////////






//// drawPieChart(dummydata_wom_combat);
/////drawPieChart(dummydata_wom_recognition);







  /////////////////////
  ////////// firearms
  //////////////////////
  
  
startnumerosA(numero_guns);
 drawHBarChart(data_guns_storage);

  drawStackChart(data_guns_lockers);
  drawStackChart(data_guns_trigger);
  drawStackChart(data_guns_background);
  drawStackChart(data_guns_assault);
  drawStackChart(data_guns_high);
  drawStackChart(data_guns_concealed);
  drawStackChart(data_guns_wait);

  

 
 



  

///
//////
////




///////////////////////////////////////
////////////////////  mental health
////



 
  
  
startnumerosA(numero_mental_injury);

startnumerosB(numero_mental_seek);
 
 ///////////////////////////////////////
 // insert top 3 mental help why here
 //////////////////////////////////////////
///////////////   changeHBarChart(data_mental_help_why,"svg82");

  drawHBarChart(data_mental_help_where);

 
   ///////////////////////////////////////////////
 // insert top 3 mental not seeking help why here
 /////////////////////////////////////////////////
////////////  changeHBarChart(data_mental_help_not,"svg86");

  drawStackChart(data_mental_help_suggest);
  drawStackChart(data_mental_help_sought);

  



  
////////////////////
////





///////////////////
///// general health
///////////////////////


////
//

drawPieChart(data_health_before);
drawPieChart(data_health_after);
drawPieChart(data_health_importance);
 
 startnumerosA(numero_health_injury);
drawHBarChart(data_health_a);

startnumerosB(numero_health_pain);

drawHBarChart(data_health_affect);
drawHBarChart(data_health_medication);


startnumerosC(numero_health_taking);

drawHBarChart(data_health_medication_past);


//////drawStackChart(data_health_injury,"svg92");

/////drawStackChart(data_health_pain,"svg93");
////changeHBarChart(data_health_a,"svg94");


drawHBarChart(data_health_therapies);


 startnumerosA(numero_health_therapies);


 startnumerosB(numero_health_assist);


drawHBarChart(data_health_assisting_who);

 drawStackChart(data_health_activities);

drawStackChart(data_health_sleep);
drawStackChart(data_health_sleep_trouble);

 startnumerosA(numero_health_sleep);

drawHBarChart(data_health_exercise_often);

 
  
////


/////////////////////////////////////
///// transition challenges
/////


  drawHBarChart(data_challenges);
  drawHBarChart(data_challenges_current);
  
  drawStackChart(data_challenges_success);
  drawStackChart(data_challenges_overcome);
  drawStackChart(data_challenges_valued);
  drawStackChart(data_challenges_belonging);

/////////////
  drawStackChart(data_finances);
  drawStackChart(data_bills);

/// loan practices
startnumerosA(numero_lending);
///loan type
  drawHBarChart(data_conditions);

//////// current living situation
  drawHBarChart(data_tran_current);


///// perm place to live
startnumerosB(numero_perm);

/// couchsurfing
startnumerosB(numero_tran_temp);

////// 
/// drawStackChart(data_tran_temp,"svg203");
  
//////   
//// changeHBarChart(data_tran_current,"svg204");

//how long
   drawStackChart(data_tran_long);

///////   
 drawStackChart(data_tran_tap);
//////
  drawStackChart(data_tran_rate);




////////////////////////
///////////////////////
 
//////
////////

 



///////////
////employment
///////////


 
 ///
 ////
 

   drawHBarChart(data_employed);

  ///////////  startnumerosA(numero_data_employed,"svg207");

    startnumerosB(numero_underemployed);

   drawStackChart(data_traing);
   
startnumerosC(numero_data_job_secured);
  
   drawHBarChart(data_without_job);
   drawStackChart(data_satisfied);
   drawStackChart(data_startup);
    drawHBarChart(data_startup_challenges);



 startnumerosB(numero_employ_loans);



 

 


////
///
//////////////////////
////////////////////////////////
//////// issues from headlines
////
//////////changed

/////////////////////////////////
/////// issues in the headlines //// taken out 2020
////////////////////////////////////
//////////
/*
 drawHBarChart(data_iraq_worth);
drawHBarChart(data_afghan_worth);
  drawStackChart(data_selective_end);
drawStackChart(data_selective_women);
  startnumerosB(numero_afghan_visa);
 drawHBarChart(data_citizenship);
drawHBarChart(data_deport);
startnumerosA(numero_deport_impacted);
startnumerosB(numero_deport_know);
  drawStackChart(data_transgender);
drawStackChart(data_dadt);
 drawStackChart(data_parade);
 drawHBarChart(data_nfl);
drawHBarChart(data_nfl_plan);
*/
///////////
////////////
/////////////


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



function showTitle2(){

var containerA=document.getElementById("container-1");containerA.setAttribute("style","visibility:visible; ");

var greenoverlay=document.getElementById("greenoverlay");greenoverlay.setAttribute("style","visibility:visible; ");


}


function showTitle3(){




iii=0;


///////
///////
////////


////////////////////////
////////////////////////////
/////////////////////////

//////////////////
//// moved
/////drawStackChart(data_gender,"svg0");

changeHBarChart(data_gender,"svg0");



///////

changeHBarChart(data_ethnicity,"svg1");


changeHBarChart(data_religion,"svg2");

changePieChart(data_age,"svg3");

changePieChart(data_marital,"svg4");

changePieChart(data_children,"svg5");

changeHBarChart(data_school,"svg6");


changeHBarChart(data_income,"svg7");






////////////////// changePieChart(data_community,"svg2");
///////////////
/// added in
////////////////////changeHBarChart(data_party,"svg8");
/////////////////


/////////////////////////drawStackChart(data_gender,"svg8");

////////drawStackChart(data_orientation,"svg8");




var containerA=document.getElementById("container-1");containerA.setAttribute("style","visibility:hidden; ");




}

function showTitle4(){



iii=8;


//////////////////////
////// added in


drawStackChart(data_branch,"svg8");
/////changePieChart(data_branch,"svg1");


drawStackChart(data_officer,"svg9");
///changePieChart(data_officer,"svg2");


/////// number of deployments
changePieChart(data_m,"svg10");

changePieChart(data_n,"svg11");

//////////////
/// toook out community 2020

changePieChart(data_o,"svg12");
/*

changeHBarChart(data_o,"svg14");


drawStackChart(data_p,"svg15");

drawStackChart(data_pp,"svg16");
*/

 changeHBarChart(data_natg,"svg13");

drawStackChart(data_discharge,"svg14");

changeHBarChart(data_milserve_separate,"svg15");

/////////////////
///////// removed
/////////////////////// startnumerosA(numero_member,"svg12");

changeHBarChart(data_interact,"svg16");

/////////////////////// changeHBarChart(data_interact_how,"svg19");
//////////////////////////drawStackChart(data_milserve_recommend,"svg24");


drawStackChart(data_reco_service,"svg17");




}

function showTitle5(){


iii=18;


 

startnumerosB(numero_vote_reg,"svg18");
startnumerosA(numero_considered,"svg19");
startnumerosC(data_planning,"svg20");


////
/// changed 2020
//////drawStackChart(data_reg,"svg28");

drawStackChart(data_vet_impact,"svg21");




//////////// changeHBarChart(data_party,"svg24");

////////////
 
}






function showTitle6(){


iii=22;



startnumerosB(numeros_civic_volunteer,"svg22");
startnumerosA(numeros_civic_vol_more,"svg23");
 

////
/// changed 2020
//////drawStackChart(data_reg,"svg28");

changeHBarChart(data_civic_issues,"svg24");

 





//////////////////////////changeHBarChart(data_party,"svg28");

////////////
 
}












function showTitle7(){

iii=25;


drawStackChart(data_civic_oppose_trump,"svg25");

drawStackChart(data_civic_border,"svg26");

drawStackChart(data_civic_wall,"svg27");


drawStackChart(data_civic_paroleinplace,"svg28");



drawStackChart(data_civic_citizenship,"svg29");

 






//////changeHBarChart(data_afghan_visa,"svg36");
 

////changeHBarChart(data_citizenship,"svg32");


drawStackChart(data_selective_end,"svg30");

 
 drawStackChart(data_selective_women,"svg31");


 
changeHBarChart(data_deport,"svg32");



startnumerosA(numero_deport_impacted,"svg33");

startnumerosB(numero_deport_know,"svg34");

 
//////drawStackChart(data_deport_impacted,"svg39");

//////drawStackChart(data_deport_know,"svg40");

 




  
 
 drawHBarChart(data_iraq_worth,"svg35");

drawHBarChart(data_afghan_worth,"svg36");





drawStackChart(data_trump_support,"svg37");

drawStackChart(data_congress_support,"svg38");

drawStackChart(data_public_support,"svg39");

drawStackChart(data_public_understand,"svg40");

drawStackChart(data_employer_support,"svg41");

drawStackChart(data_employer_retain,"svg42");



 

//////
/*

startnumerosA(numero_trump_supports,"svg30");
startnumerosB(numero_congress_supports,"svg31");
startnumerosC(numero_public_supports,"svg32");

 */
 //////





}



function showTitle8(){


 

iii=43;
/*
 

*/


 startnumerosB(numero_suicide_progress,"svg43");
 startnumerosC(numero_suicide_care,"svg44");


  drawStackChart(data_mental_know_attempted,"svg45");

  drawStackChart(data_mental_know,"svg46");


  drawStackChart(data_mental_considered_before,"svg47");

  drawStackChart(data_mental_considered,"svg48");


  drawStackChart(data_mental_hotline,"svg49");
  drawStackChart(data_mental_hotline_contact,"svg50");
 
  drawStackChart(data_mental_hotline_rate,"svg51");




 

}



function showTitle9(){


/*


*/




iii=52;
 

 
 startnumerosA(numero_burn_pit,"svg52");

////////drawStackChart(data_burn,"svg106");


drawStackChart(data_burn_symptoms,"svg53");

drawStackChart(data_burn_discuss,"svg54");
drawStackChart(data_burn_documented,"svg55");





drawStackChart(data_burn_registered,"svg56");
drawStackChart(data_burn_registry,"svg57");
drawStackChart(data_burn_issues,"svg58");

  
  drawStackChart(data_burn_evaluation,"svg59");



 


}

function showTitle10(){

/*

*/
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////


iii=60;
 




drawStackChart(data_wom_iava,"svg60");
 
 
drawStackChart(data_wom_positions,"svg61");
drawStackChart(data_wom_positions_f,"svg62");
drawStackChart(data_wom_positions_m,"svg63");

 drawStackChart(data_wom_combat,"svg64");
 drawStackChart(data_wom_combat_f,"svg65");
 drawStackChart(data_wom_combat_m,"svg66");
 
 
drawStackChart(data_wom_recognition,"svg67");
drawStackChart(data_wom_recognition_f,"svg68");
drawStackChart(data_wom_recognition_m,"svg69");

 
changeHBarChart(data_wom_motto,"svg70");
changeHBarChart(data_wom_motto_f,"svg71"); 
changeHBarChart(data_wom_motto_m,"svg72");


changeHBarChart(data_wom_suicidal,"svg73");
changeHBarChart(data_wom_injury,"svg74");
changeHBarChart(data_wom_expenses,"svg75");


changeHBarChart(data_wom_safe,"svg76");
changeHBarChart(data_wom_respected,"svg77");








}



function showTitle11(){

/*

 
*/


iii=78;



 
 



startnumerosC(numero_data_wom_survivor,"svg78");
startnumerosB(numero_data_wom_survivor_f,"svg79");
startnumerosA(numero_data_wom_survivor_m,"svg80");
 startnumerosB(numero_data_wom_report,"svg81");


 



 startnumerosA(numero_data_wom_retaliation,"svg82");

 



changeHBarChart(data_wom_impact,"svg83");
  
  
  
 drawStackChart(data_wom_prosecutor,"svg84");

  

  
  
  
  
  

}

function showTitle12(){

/*



*/

iii=85;
 




startnumerosB(numero_enrolled,"svg85");

 startnumerosA(numero_va_primary,"svg86");

  changeHBarChart(data_va_coverage,"svg87");

drawStackChart(data_va_experience,"svg88");

 startnumerosC(numero_2019_care_good,"svg89");

 startnumerosB(numero_2017_care_good,"svg90");


////////


 drawStackChart(data_va_understand,"svg91");
 //////drawStackChart(data_va_non_understand,"svg92");

  drawStackChart(data_va_quality,"svg92");
//////drawStackChart(data_va_non_quality,"svg90");

  drawStackChart(data_va_safe,"svg93");

  drawStackChart(data_va_respect,"svg94");


  drawStackChart(data_va_scheduling_mental,"svg95");

  drawStackChart(data_va_scheduling_prim,"svg96");

  drawStackChart(data_va_scheduling_special,"svg97");



  drawStackChart(data_va_satisfaction_mental,"svg98");

  drawStackChart(data_va_satisfaction_prim,"svg99");

  drawStackChart(data_va_satisfaction_special,"svg100");


 
 
 

}

function showTitle13(){


iii=101;


startnumerosC(numero_va_mission_heard,"svg101");

startnumerosB(numero_va_mission_familiar,"svg102");

 startnumerosA(numero_va_mission_used,"svg103");

  changeHBarChart(data_va_choice_exp,"svg104");

  drawStackChart(data_va_non_understand,"svg105");

  drawStackChart(data_va_non_quality,"svg106");

  drawStackChart(data_va_scheduling_non_mental,"svg107");

  drawStackChart(data_va_scheduling_non_prim,"svg108");

  drawStackChart(data_va_scheduling_non_spec,"svg109");

   changeHBarChart(data_va_non_confident,"svg110");

 
 

}

function showTitle14(){

/*
*/

iii=111;


  //// drawStackChart(data_va_rating,"svg111");




startnumerosB(numero_va_rating,"svg111");
//////drawStackChart(data_va_rating);




  changeHBarChart(data_va_decision,"svg112");

  drawStackChart(data_va_outcome,"svg113");

  drawStackChart(data_va_appeal,"svg114");
  
  changeHBarChart(data_va_claim_long,"svg115");



 /// drawStackChart(data_va_rating,"svg100");
  /////// changeHBarChart(data_va_pending,"svg102");
 
  //// changeHBarChart(data_va_appeal_pending,"svg106");
 
 
 
  drawStackChart(data_va_rate_dis,"svg116");
  drawStackChart(data_va_rate_pension,"svg117");
  drawStackChart(data_va_rate_edu,"svg118");
  drawStackChart(data_va_rate_home,"svg119");
  drawStackChart(data_va_rate_ins,"svg120");
  drawStackChart(data_va_rate_voc,"svg121");
  drawStackChart(data_va_rate_care,"svg122");

 
  changeHBarChart(data_va_ask,"svg123");
 
  



  
}

function showTitle15(){
/*


 */
 
 iii=124;

 
/////// eligible for post 9/11 gi bill
  startnumerosB(numero_gi_eligible,"svg124");

///// curenlty in school
  startnumerosB(numero_gi_school_current,"svg125");

/////// ever used gi bill  
  changeHBarChart(data_gi_use,"svg126");

///// graduate?
  drawStackChart(data_gi_grad,"svg127");

/////// rate experience  
  drawStackChart(data_gi_exp,"svg128");
   
/////// what type of school attending  
  changeHBarChart(data_ed_b,"svg129");

 /////  satisfaction with your ed programs 
  changeHBarChart(data_ed_c,"svg130");

//// vet friendly
  drawStackChart(data_ed_vetfriend,"svg131");

//// va ed benefits for ed
  changeHBarChart(data_ed_a,"svg132");


//// how important is gi bill for the following
 drawStackChart(data_gi_imp_recruit,"svg133");
  drawStackChart(data_gi_imp_retent,"svg134");
  drawStackChart(data_gi_imp_trans,"svg135");

/////// private lons
 startnumerosB(numero_ed_d,"svg136");

////// how much debt
   changeHBarChart(data_ed_d,"svg137");

 




}

function showTitle16(){


/*


*/

iii=138;

////drawStackChart(data_mj_medicinal,"svg133");
/////drawStackChart(data_mj_legal,"svg134");



 drawStackChart(data_mj_legal,"svg138");
 drawStackChart(data_mj_medicinal,"svg139");
 drawStackChart(data_mj_research,"svg140");
drawStackChart(data_mj_va_research,"svg141");



startnumerosA(numero_cannabis_rec,"svg142");

 startnumerosB(numero_cannabis_med,"svg143");


 
drawStackChart(data_mj_treatment,"svg144");

changePieChart(data_cannabis_state_med,"svg145");
changePieChart(data_cannabis,"svg146");


 
 






}

function showTitle17(){



iii=147;



changeHBarChart(data_alcohol,"svg147");

changeHBarChart(data_alcohol_typical,"svg148");

changeHBarChart(data_alcohol_twohour,"svg149");




//////////////////////////
//// removing item
//////////////////////changeHBarChart(data_alcohol_typical,"svg128");

///////////
///////////////changeHBarChart(data_alcohol_twohour,"svg127");

//// startnumerosA(numero_data_alcohol,"svg144");


drawStackChart(data_tobacco,"svg150");
 
drawStackChart(data_tobacco_use,"svg151");
changeHBarChart(data_tobacco_type,"svg152");
changeHBarChart(data_tobacco_often,"svg153");


/*
 
*/


 

 

}

function showTitle18(){
/*

*/
iii=154;
 

 //////////////////
 /// removing item
/////////////////////  changeHBarChart(data_wom_not_report,"svg141");


  


startnumerosA(numero_guns,"svg154");
 changeHBarChart(data_guns_storage,"svg155");

  drawStackChart(data_guns_lockers,"svg156");
  drawStackChart(data_guns_trigger,"svg157");
  drawStackChart(data_guns_background,"svg158");
  drawStackChart(data_guns_assault,"svg159");
  drawStackChart(data_guns_high,"svg160");
  drawStackChart(data_guns_concealed,"svg161");
  drawStackChart(data_guns_wait,"svg162");

  
 
  
 
}

function showTitle19(){

/*


 
*/
iii=163;

 
  
  
startnumerosA(numero_mental_injury,"svg163");

startnumerosB(numero_mental_seek,"svg164");
 
 ///////////////////////////////////////
 // insert top 3 mental help why here
 //////////////////////////////////////////
///////////////   changeHBarChart(data_mental_help_why,"svg82");

  changeHBarChart(data_mental_help_where,"svg165");

 
   ///////////////////////////////////////////////
 // insert top 3 mental not seeking help why here
 /////////////////////////////////////////////////
////////////  changeHBarChart(data_mental_help_not,"svg86");

  drawStackChart(data_mental_help_suggest,"svg166");
  drawStackChart(data_mental_help_sought,"svg167");

  
  
}

function showTitle20(){

   
 iii=168;




changePieChart(data_health_before,"svg168");
changePieChart(data_health_after,"svg169");
changePieChart(data_health_importance,"svg170");
 
 startnumerosA(numero_health_injury,"svg1714");
changeHBarChart(data_health_a,"svg172");

startnumerosB(numero_health_pain,"svg173");

changeHBarChart(data_health_affect,"svg174");
changeHBarChart(data_health_medication,"svg175");


startnumerosC(numero_health_taking,"svg176");

changeHBarChart(data_health_medication_past,"svg177");


//////drawStackChart(data_health_injury,"svg92");

/////drawStackChart(data_health_pain,"svg93");
////changeHBarChart(data_health_a,"svg94");


changeHBarChart(data_health_therapies,"svg178");


 startnumerosA(numero_health_therapies,"svg179");


 startnumerosB(numero_health_assist,"svg180");


changeHBarChart(data_health_assisting_who,"svg181");

 drawStackChart(data_health_activities,"svg182");

drawStackChart(data_health_sleep,"svg183");
drawStackChart(data_health_sleep_trouble,"svg184");

 startnumerosA(numero_health_sleep,"svg185");

changeHBarChart(data_health_exercise_often,"svg186");

 


   
}

function showTitle21(){

 

  iii=187;


  changeHBarChart(data_challenges,"svg187");
  changeHBarChart(data_challenges_current,"svg188");
  
  drawStackChart(data_challenges_success,"svg189");
  drawStackChart(data_challenges_overcome,"svg190");
  drawStackChart(data_challenges_valued,"svg191");
  drawStackChart(data_challenges_belonging,"svg192");

/////////////
  drawStackChart(data_finances,"svg193");
  drawStackChart(data_bills,"svg194");

/// loan practices
startnumerosA(numero_lending,"svg195");
///loan type
  changeHBarChart(data_conditions,"svg196");

//////// current living situation
  changeHBarChart(data_tran_current,"svg197");


///// perm place to live
startnumerosB(numero_perm,"svg198");

/// couchsurfing
startnumerosB(numero_tran_temp,"svg199");

////// 
/// drawStackChart(data_tran_temp,"svg203");
  
//////   
//// changeHBarChart(data_tran_current,"svg204");

//how long
   drawStackChart(data_tran_long,"svg200");

///////   
 drawStackChart(data_tran_tap,"svg201");
//////
  drawStackChart(data_tran_rate,"svg202");






 
}
 




function showTitle22(){
iii=203;

/*

startsmallnumerosA(numeroE,"svg23");

drawStackChart(data_s,"svg24");

}

function showTitle6(){

iii=52;

      
    

*/


   changeHBarChart(data_employed,"svg203");

  ///////////  startnumerosA(numero_data_employed,"svg207");

    startnumerosB(numero_underemployed,"svg204");

   drawStackChart(data_traing,"svg205");
   
startnumerosC(numero_data_job_secured,"svg206");
  
   changeHBarChart(data_without_job,"svg207");
   drawStackChart(data_satisfied,"svg208");
   drawStackChart(data_startup,"svg209");
    changeHBarChart(data_startup_challenges,"svg210");



 startnumerosB(numero_employ_loans,"svg211");



 
    ///////////////////////////////////////////////
 // removing
 /////////////////////////////////////////////////
////////////     changeHBarChart(data_satisfied_why,"svg206");
   ///////////////////////////////////////////////
 // removing
 /////////////////////////////////////////////////
////////////      changeHBarChart(data_dissatisfied,"svg207");
   ///////////////////////////////////////////////
 // removing
 /////////////////////////////////////////////////
////////////      changeHBarChart(data_looking,"svg211");








 
 d3.select("body").selectAll("toolTip").remove();

  
 
}




 

function showTitle23(){

/*

if (mapdrawn=='') {  
if(window.matchMedia("(max-width: 400px)").matches){var w=(window.innerWidth/1.3);

var h=300;

var projection=d3.geo.albersUsa().translate([w/2,h/2]).scale([400]);

var path=d3.geo.path().projection(projection);}else if(window.matchMedia("(min-width: 401px) and (max-width: 960px)").matches){var w=window.innerWidth;

var h=400;

var projection=d3.geo.albersUsa().translate([w/2,h/2]).scale([700]);

var path=d3.geo.path().projection(projection);}else{var w=(window.innerWidth/1.3);

var h=600;

var projection=d3.geo.albersUsa().translate([w/2,h/2]).scale([1080]);

var path=d3.geo.path().projection(projection);}var color=d3.scale.quantize().range(["#294636","#2f513e","#39634c","#416250","#4a705b","#5b836d","#afb48b","#ced49e","#deea81","#d0e05a","#dcf428"]);

var legsvg=d3.select("#legendcontain").append("svg").attr("width",(window.innerWidth/1.3)+"px").attr("height","40px");

var defs=legsvg.append("defs");

var linearGradient=defs.append("linearGradient").attr("id","linear-gradient");legsvg.append("rect").attr("width",(window.innerWidth/1.3)).attr("height",40).style("fill","url(#linear-gradient)");

var colorScale=d3.scale.linear().range(["#294636","#2f513e","#39634c","#416250","#4a705b","#5b836d","#afb48b","#ced49e","#deea81","#d0e05a","#dcf428"]);linearGradient.selectAll("stop").data(colorScale.range()).enter().append("stop").attr("offset",function(d,i){return i/(colorScale.range().length-1);}).attr("stop-color",function(d){return d;});

var svg=d3.select("#mapcontain").append("svg").attr("width",w).attr("height",h);d3.csv("states.csv",function(data){color.domain([d3.min(data,function(d){return d.ValidPercent;}),d3.max(data,function(d){return d.ValidPercent;})]);d3.json("us_states.json",function(json){for(var i=0;i<data.length;i++){var dataState=data[i].Name;

var dataValue=parseFloat(data[i].ValidPercent);for(var j=0;j<json.features.length;j++){var jsonState=json.features[j].properties.name;if(dataState==jsonState){json.features[j].properties.value=dataValue;break;}}}svg.selectAll("path").data(json.features).enter().append("path").attr("d",path).attr("class","stateouts").on("mousemove",function(d){div.style("left",d3.event.pageX-60+"px");div.style("top",(d3.event.pageY)-136+"px");div.style("display","inline-block");div.style("position","absolute");div.html((d.properties.name)+"<h4>"+(d.properties.value)+"%</h4>");}).on("mouseout",function(d){div.style("display","none");}).style("fill",function(d){var value=d.properties.value;if(value){return color(value);}else{return"#ccc";}});});});

var div=d3.select("body").append("div").attr("class","toolTip");
 mapdrawn = 1;


} else {}

*/

}
function showTitle24(){


 mapdrawn = 1;

d3.select("body").selectAll("toolTip").remove();
/////////d3.select("#legendcontain").select("rect").remove();
/////////d3.select("body").selectAll("toolTip").remove();d3.select("#mapcontain").select("svg").remove();d3.select("#mapcontain").select("g").remove();d3.select("#legendcontain").select("svg").remove();d3.select("#legendcontain").select("rect").remove();

}

function showTitle25(){

}

function showTitle26(){

///var titleCloser=document.getElementById("titleCloser");titleCloser.setAttribute("style","display:none; ");

}




/*
function showTitle24(){

////var titleCloser=document.getElementById("titleCloser");titleCloser.setAttribute("style","display:none; ");

}
*/




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


///////
///////
////////


////////////////////////
////////////////////////////
/////////////////////////

//////////////////
//// moved
/////drawStackChart(data_gender,"svg0");

changeHBarChart(data_gender,"svg0");



///////

changeHBarChart(data_ethnicity,"svg1");


changeHBarChart(data_religion,"svg2");

changePieChart(data_age,"svg3");

changePieChart(data_marital,"svg4");

changePieChart(data_children,"svg5");

changeHBarChart(data_school,"svg6");


changeHBarChart(data_income,"svg7");






////////////////// changePieChart(data_community,"svg2");
///////////////
/// added in
////////////////////changeHBarChart(data_party,"svg8");
/////////////////


/////////////////////////drawStackChart(data_gender,"svg8");

////////drawStackChart(data_orientation,"svg8");




var containerA=document.getElementById("container-1");containerA.setAttribute("style","visibility:hidden; ");



 



iii=8;


//////////////////////
////// added in


drawStackChart(data_branch,"svg8");
/////changePieChart(data_branch,"svg1");


drawStackChart(data_officer,"svg9");
///changePieChart(data_officer,"svg2");


/////// number of deployments
changePieChart(data_m,"svg10");

changePieChart(data_n,"svg11");

//////////////
/// toook out community 2020

changePieChart(data_o,"svg12");
/*

changeHBarChart(data_o,"svg14");


drawStackChart(data_p,"svg15");

drawStackChart(data_pp,"svg16");
*/

 changeHBarChart(data_natg,"svg13");

drawStackChart(data_discharge,"svg14");

changeHBarChart(data_milserve_separate,"svg15");

/////////////////
///////// removed
/////////////////////// startnumerosA(numero_member,"svg12");

changeHBarChart(data_interact,"svg16");

/////////////////////// changeHBarChart(data_interact_how,"svg19");
//////////////////////////drawStackChart(data_milserve_recommend,"svg24");


drawStackChart(data_reco_service,"svg17");


 

iii=18;


 

startnumerosB(numero_vote_reg,"svg18");
startnumerosA(numero_considered,"svg19");
startnumerosC(data_planning,"svg20");


////
/// changed 2020
//////drawStackChart(data_reg,"svg28");

drawStackChart(data_vet_impact,"svg21");




//////////// changeHBarChart(data_party,"svg24");

////////////
 
 


iii=22;



startnumerosB(numeros_civic_volunteer,"svg22");
startnumerosA(numeros_civic_vol_more,"svg23");
 

////
/// changed 2020
//////drawStackChart(data_reg,"svg28");

changeHBarChart(data_civic_issues,"svg24");

 





//////////////////////////changeHBarChart(data_party,"svg28");

////////////
 
 

iii=25;


drawStackChart(data_civic_oppose_trump,"svg25");

drawStackChart(data_civic_border,"svg26");

drawStackChart(data_civic_wall,"svg27");


drawStackChart(data_civic_paroleinplace,"svg28");



drawStackChart(data_civic_citizenship,"svg29");

 






//////changeHBarChart(data_afghan_visa,"svg36");
 

////changeHBarChart(data_citizenship,"svg32");


drawStackChart(data_selective_end,"svg30");

 
 drawStackChart(data_selective_women,"svg31");


 
changeHBarChart(data_deport,"svg32");



startnumerosA(numero_deport_impacted,"svg33");

startnumerosB(numero_deport_know,"svg34");

 
//////drawStackChart(data_deport_impacted,"svg39");

//////drawStackChart(data_deport_know,"svg40");

 




  
 
 changeHBarChart(data_iraq_worth,"svg35");

changeHBarChart(data_afghan_worth,"svg36");





drawStackChart(data_trump_support,"svg37");

drawStackChart(data_congress_support,"svg38");

drawStackChart(data_public_support,"svg39");

drawStackChart(data_public_understand,"svg40");

drawStackChart(data_employer_support,"svg41");

drawStackChart(data_employer_retain,"svg42");



 

//////
/*

startnumerosA(numero_trump_supports,"svg30");
startnumerosB(numero_congress_supports,"svg31");
startnumerosC(numero_public_supports,"svg32");

 */
 //////



 

 

iii=43;
/*
 

*/


 startnumerosB(numero_suicide_progress,"svg43");
 startnumerosC(numero_suicide_care,"svg44");


  drawStackChart(data_mental_know_attempted,"svg45");

  drawStackChart(data_mental_know,"svg46");


  drawStackChart(data_mental_considered_before,"svg47");

  drawStackChart(data_mental_considered,"svg48");


  drawStackChart(data_mental_hotline,"svg49");
  drawStackChart(data_mental_hotline_contact,"svg50");
 
  drawStackChart(data_mental_hotline_rate,"svg51");




 
 


/*


*/




iii=52;
 

 
 startnumerosA(numero_burn_pit,"svg52");

////////drawStackChart(data_burn,"svg106");


drawStackChart(data_burn_symptoms,"svg53");

drawStackChart(data_burn_discuss,"svg54");
drawStackChart(data_burn_documented,"svg55");





drawStackChart(data_burn_registered,"svg56");
drawStackChart(data_burn_registry,"svg57");
drawStackChart(data_burn_issues,"svg58");

  
  drawStackChart(data_burn_evaluation,"svg59");



 

 

/*

*/
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////


iii=60;
 




drawStackChart(data_wom_iava,"svg60");
 
 
drawStackChart(data_wom_positions,"svg61");
drawStackChart(data_wom_positions_f,"svg62");
drawStackChart(data_wom_positions_m,"svg63");

 drawStackChart(data_wom_combat,"svg64");
 drawStackChart(data_wom_combat_f,"svg65");
 drawStackChart(data_wom_combat_m,"svg66");
 
 
drawStackChart(data_wom_recognition,"svg67");
drawStackChart(data_wom_recognition_f,"svg68");
drawStackChart(data_wom_recognition_m,"svg69");

 
changeHBarChart(data_wom_motto,"svg70");
changeHBarChart(data_wom_motto_f,"svg71"); 
changeHBarChart(data_wom_motto_m,"svg72");


changeHBarChart(data_wom_suicidal,"svg73");
changeHBarChart(data_wom_injury,"svg74");
changeHBarChart(data_wom_expenses,"svg75");


changeHBarChart(data_wom_safe,"svg76");
changeHBarChart(data_wom_respected,"svg77");






 

/*

 
*/


iii=78;



 
 



startnumerosC(numero_data_wom_survivor,"svg78");
startnumerosB(numero_data_wom_survivor_f,"svg79");
startnumerosA(numero_data_wom_survivor_m,"svg80");
 startnumerosB(numero_data_wom_report,"svg81");


 



 startnumerosA(numero_data_wom_retaliation,"svg82");

 



changeHBarChart(data_wom_impact,"svg83");
  
  
  
 drawStackChart(data_wom_prosecutor,"svg84");

  

  
  
  
  
  
 

/*



*/

iii=85;
 




startnumerosB(numero_enrolled,"svg85");

 startnumerosA(numero_va_primary,"svg86");

  changeHBarChart(data_va_coverage,"svg87");

drawStackChart(data_va_experience,"svg88");

 startnumerosC(numero_2019_care_good,"svg89");

 startnumerosB(numero_2017_care_good,"svg90");


////////


 drawStackChart(data_va_understand,"svg91");
 //////drawStackChart(data_va_non_understand,"svg92");

  drawStackChart(data_va_quality,"svg92");
//////drawStackChart(data_va_non_quality,"svg90");

  drawStackChart(data_va_safe,"svg93");

  drawStackChart(data_va_respect,"svg94");


  drawStackChart(data_va_scheduling_mental,"svg95");

  drawStackChart(data_va_scheduling_prim,"svg96");

  drawStackChart(data_va_scheduling_special,"svg97");



  drawStackChart(data_va_satisfaction_mental,"svg98");

  drawStackChart(data_va_satisfaction_prim,"svg99");

  drawStackChart(data_va_satisfaction_special,"svg100");


 
 
  


iii=101;


startnumerosC(numero_va_mission_heard,"svg101");

startnumerosB(numero_va_mission_familiar,"svg102");

 startnumerosA(numero_va_mission_used,"svg103");

  changeHBarChart(data_va_choice_exp,"svg104");

  drawStackChart(data_va_non_understand,"svg105");

  drawStackChart(data_va_non_quality,"svg106");

  drawStackChart(data_va_scheduling_non_mental,"svg107");

  drawStackChart(data_va_scheduling_non_prim,"svg108");

  drawStackChart(data_va_scheduling_non_spec,"svg109");

   changeHBarChart(data_va_non_confident,"svg110");

 
 
 

/*
*/

iii=111;


startnumerosB(numero_va_rating,"svg111");
//////drawStackChart(data_va_rating);



  changeHBarChart(data_va_decision,"svg112");

  drawStackChart(data_va_outcome,"svg113");

  drawStackChart(data_va_appeal,"svg114");
  
  changeHBarChart(data_va_claim_long,"svg115");



 /// drawStackChart(data_va_rating,"svg100");
  /////// changeHBarChart(data_va_pending,"svg102");
 
  //// changeHBarChart(data_va_appeal_pending,"svg106");
 
 
 
  drawStackChart(data_va_rate_dis,"svg116");
  drawStackChart(data_va_rate_pension,"svg117");
  drawStackChart(data_va_rate_edu,"svg118");
  drawStackChart(data_va_rate_home,"svg119");
  drawStackChart(data_va_rate_ins,"svg120");
  drawStackChart(data_va_rate_voc,"svg121");
  drawStackChart(data_va_rate_care,"svg122");

 
  changeHBarChart(data_va_ask,"svg123");
 
  

 
/*


 */
 
 iii=124;

 
/////// eligible for post 9/11 gi bill
  startnumerosB(numero_gi_eligible,"svg124");

///// curenlty in school
  startnumerosB(numero_gi_school_current,"svg125");

/////// ever used gi bill  
  changeHBarChart(data_gi_use,"svg126");

///// graduate?
  drawStackChart(data_gi_grad,"svg127");

/////// rate experience  
  drawStackChart(data_gi_exp,"svg128");
   
/////// what type of school attending  
  changeHBarChart(data_ed_b,"svg129");

 /////  satisfaction with your ed programs 
  changeHBarChart(data_ed_c,"svg130");

//// vet friendly
  drawStackChart(data_ed_vetfriend,"svg131");

//// va ed benefits for ed
  changeHBarChart(data_ed_a,"svg132");


//// how important is gi bill for the following
 drawStackChart(data_gi_imp_recruit,"svg133");
  drawStackChart(data_gi_imp_retent,"svg134");
  drawStackChart(data_gi_imp_trans,"svg135");

/////// private lons
 startnumerosB(numero_ed_d,"svg136");

////// how much debt
   changeHBarChart(data_ed_d,"svg137");

 


 


/*


*/

iii=138;

////drawStackChart(data_mj_medicinal,"svg133");
/////drawStackChart(data_mj_legal,"svg134");



 drawStackChart(data_mj_legal,"svg138");
 drawStackChart(data_mj_medicinal,"svg139");
 drawStackChart(data_mj_research,"svg140");
drawStackChart(data_mj_va_research,"svg141");



startnumerosA(numero_cannabis_rec,"svg142");

 startnumerosB(numero_cannabis_med,"svg143");


 
drawStackChart(data_mj_treatment,"svg144");

changePieChart(data_cannabis_state_med,"svg145");
changePieChart(data_cannabis,"svg146");


 
 




 



iii=147;



changeHBarChart(data_alcohol,"svg147");

changeHBarChart(data_alcohol_typical,"svg148");

changeHBarChart(data_alcohol_twohour,"svg149");




//////////////////////////
//// removing item
//////////////////////changeHBarChart(data_alcohol_typical,"svg128");

///////////
///////////////changeHBarChart(data_alcohol_twohour,"svg127");

//// startnumerosA(numero_data_alcohol,"svg144");


drawStackChart(data_tobacco,"svg150");
 
drawStackChart(data_tobacco_use,"svg151");
changeHBarChart(data_tobacco_type,"svg152");
changeHBarChart(data_tobacco_often,"svg153");


/*
 
*/


 

 
 
/*

*/
iii=154;
 

 //////////////////
 /// removing item
/////////////////////  changeHBarChart(data_wom_not_report,"svg141");


  


startnumerosA(numero_guns,"svg154");
 changeHBarChart(data_guns_storage,"svg155");

  drawStackChart(data_guns_lockers,"svg156");
  drawStackChart(data_guns_trigger,"svg157");
  drawStackChart(data_guns_background,"svg158");
  drawStackChart(data_guns_assault,"svg159");
  drawStackChart(data_guns_high,"svg160");
  drawStackChart(data_guns_concealed,"svg161");
  drawStackChart(data_guns_wait,"svg162");

  
 
  
  

/*


 
*/
iii=163;

 
  
  
startnumerosA(numero_mental_injury,"svg163");

startnumerosB(numero_mental_seek,"svg164");
 
 ///////////////////////////////////////
 // insert top 3 mental help why here
 //////////////////////////////////////////
///////////////   changeHBarChart(data_mental_help_why,"svg82");

  changeHBarChart(data_mental_help_where,"svg165");

 
   ///////////////////////////////////////////////
 // insert top 3 mental not seeking help why here
 /////////////////////////////////////////////////
////////////  changeHBarChart(data_mental_help_not,"svg86");

  drawStackChart(data_mental_help_suggest,"svg166");
  drawStackChart(data_mental_help_sought,"svg167");

  
   

   
 iii=168;




changePieChart(data_health_before,"svg168");
changePieChart(data_health_after,"svg169");
changePieChart(data_health_importance,"svg170");
 
 startnumerosA(numero_health_injury,"svg1714");
changeHBarChart(data_health_a,"svg172");

startnumerosB(numero_health_pain,"svg173");

changeHBarChart(data_health_affect,"svg174");
changeHBarChart(data_health_medication,"svg175");


startnumerosC(numero_health_taking,"svg176");

changeHBarChart(data_health_medication_past,"svg177");


//////drawStackChart(data_health_injury,"svg92");

/////drawStackChart(data_health_pain,"svg93");
////changeHBarChart(data_health_a,"svg94");


changeHBarChart(data_health_therapies,"svg178");


 startnumerosA(numero_health_therapies,"svg179");


 startnumerosB(numero_health_assist,"svg180");


changeHBarChart(data_health_assisting_who,"svg181");

 drawStackChart(data_health_activities,"svg182");

drawStackChart(data_health_sleep,"svg183");
drawStackChart(data_health_sleep_trouble,"svg184");

 startnumerosA(numero_health_sleep,"svg185");

changeHBarChart(data_health_exercise_often,"svg186");

 

 

 

  iii=187;


  changeHBarChart(data_challenges,"svg187");
  changeHBarChart(data_challenges_current,"svg188");
  
  drawStackChart(data_challenges_success,"svg189");
  drawStackChart(data_challenges_overcome,"svg190");
  drawStackChart(data_challenges_valued,"svg191");
  drawStackChart(data_challenges_belonging,"svg192");

/////////////
  drawStackChart(data_finances,"svg193");
  drawStackChart(data_bills,"svg194");

/// loan practices
startnumerosA(numero_lending,"svg195");
///loan type
  changeHBarChart(data_conditions,"svg196");

//////// current living situation
  changeHBarChart(data_tran_current,"svg197");


///// perm place to live
startnumerosB(numero_perm,"svg198");

/// couchsurfing
startnumerosB(numero_tran_temp,"svg199");

////// 
/// drawStackChart(data_tran_temp,"svg203");
  
//////   
//// changeHBarChart(data_tran_current,"svg204");

//how long
   drawStackChart(data_tran_long,"svg200");

///////   
 drawStackChart(data_tran_tap,"svg201");
//////
  drawStackChart(data_tran_rate,"svg202");




 
iii=203;

/*

startsmallnumerosA(numeroE,"svg23");

drawStackChart(data_s,"svg24");

}

function showTitle6(){

iii=52;

      
    

*/


   changeHBarChart(data_employed,"svg203");

  ///////////  startnumerosA(numero_data_employed,"svg207");

    startnumerosB(numero_underemployed,"svg204");

   drawStackChart(data_traing,"svg205");
   
startnumerosC(numero_data_job_secured,"svg206");
  
   changeHBarChart(data_without_job,"svg207");
   drawStackChart(data_satisfied,"svg208");
   drawStackChart(data_startup,"svg209");
    changeHBarChart(data_startup_challenges,"svg210");



 startnumerosB(numero_employ_loans,"svg211");

  
  

 

/////
////
/////////


}