
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

var data_i=[{a:"Army",b:58},{a:"Marine Corps",b:15},{a:"Air Force",b:13},{a:"Navy",b:13},{a:"Coast Guard",b:1}];

var dummydata_i=[{a:"Army",b:1},{a:"Marine Corps",b:1},{a:"Air Force",b:1},{a:"Navy",b:95},{a:"Coast Guard",b:1}];

var data_j=[{a:"Officer",b:19},{a:"Enlisted",b:81}];

var dummydata_j=[{a:"Officer",b:1},{a:"Enlisted",b:1}];

var data_k=[{a:"Not separated",b:14},{a:"2015-2017",b:9},{a:"2013-2014",b:14},{a:"2011-2012",b:16},{a:"2009-2010",b:15},{a:"2007-2008",b:15},{a:"2005-2006",b:11},{a:"2003-2004",b:5},{a:"2002 or Earlier",b:1}];

var dummydata_k=[{a:"Not separated",b:1},{a:"2015-2017",b:1},{a:"2013-2014",b:1},{a:"2011-2012",b:1},{a:"2009-2010",b:1},{a:"2007-2008",b:1},{a:"2005-2006",b:1},{a:"2003-2004",b:88},{a:"2002 or Earlier",b:1}];

var data_l=[{a:"Iraq",b:66},{a:"CONUS",b:41},{a:"Afghanistan",b:33},{a:"Kuwait",b:32},{a:"Cent. Comm. AOR",b:10},{a:"Qatar",b:9},{a:"Bahrain",b:7},{a:"Guantanamo Bay",b:3},{a:"Other",b:23}];

var dummydata_l=[{a:"Iraq",b:44},{a:"CONUS",b:1},{a:"Afghanistan",b:1},{a:"Kuwait",b:2},{a:"Cent. Comm. AOR",b:1},{a:"Qatar",b:24},{a:"Bahrain",b:23},{a:"Guantanamo Bay",b:3},{a:"Other",b:1}];

var data_m=[{a:"Zero Deployments",b:18},{a:"One Deployment",b:55},{a:"Two Deployments",b:21},{a:"Three+ Deployments",b:6}];

var dummydata_m=[{a:"Zero Deployments",b:1},{a:"One Deployment",b:1},{a:"Two Deployments",b:90},{a:"Three+ Deployments",b:1}];

var data_n=[{a:"Zero Deployments",b:39},{a:"One Deployment",b:44},{a:"Two Deployments",b:12},{a:"Three+ Deployments",b:5}];

var dummydata_n=[{a:"Zero Deployments",b:1},{a:"One Deployment",b:1},{a:"Two Deployments",b:12},{a:"Three+ Deployments",b:1}];

var data_o=[{a:"Zero Deployments",b:90},{a:"One Deployment",b:9},{a:"Two Deployments",b:.5},{a:"Three+ Deployments",b:.5}];

var dummydata_o=[{a:"Zero Deployments",b:1},{a:"One Deployment",b:1},{a:"Two Deployments",b:3},{a:"Three+ Deployments",b:90}];

var data_p=[{a:"Zero Deployments",b:98},{a:"One Deployment",b:2},{a:"Two Deployments",b:0},{a:"Three+ Deployments",b:0}];

var dummydata_p=[{a:"Zero Deployments",b:1},{a:"One Deployment",b:1},{a:"Two Deployments",b:90},{a:"Three+ Deployments",b:1}];

var data_q=[{a:"Indep./No Affiliation",b:38},{a:"Dem. Party",b:17},{a:"Repub. Party",b:37},{a:"Libertarian",b:5},{a:"Other",b:3}];

var dummydata_q=[{a:"Indep./No Affiliation",b:18},{a:"Dem. Party",b:37},{a:"Repub. Party",b:7},{a:"Libertarian",b:35},{a:"Other",b:3}];

var data_r=[{a:"Trump",b:50},{a:"Clinton",b:28},{a:"Johnson",b:11},{a:"Stein",b:2},{a:"McMullin",b:1},{a:"Other",b:8}];

var dummydata_r=[{a:"Trump",b:1},{a:"Clinton",b:2},{a:"Johnson",b:1},{a:"Stein",b:90},{a:"McMullin",b:1},{a:"Other",b:1}];

var data_reg=[{a:"Registered",b:96},{a:"Not Registerd",b:4}];

var dummydata_reg=[{a:"Registered",b:50},{a:"Not Registerd",b:28}];

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

var numero_guns=[58];

var data_guns_own_aa=[{a:"Locked, Unloaded, Ammunition Stored Separately",b:29},{a:"Locked and Loaded",b:19},{a:"Unlocked, Unloaded, Ammunition Stored Separately",b:17},{a:"Would rather not say",b:15},{a:"Unlocked, Loaded",b:14},{a:"Other",b:4},{a:"Unlocked, Unloaded, No Ammunition in Home",b:1},{a:"Locked, Unloaded, No Ammunition in Home",b:1}];

var dummydata_guns_own_aa=[{a:"Locked, Unloaded, Ammunition Stored Separately",b:19},{a:"Locked and Loaded",b:1},{a:"Unlocked, Unloaded, Ammunition Stored Separately",b:27},{a:"Would rather not say",b:15},{a:"Unlocked, Loaded",b:14},{a:"Other",b:14},{a:"Unlocked, Unloaded, No Ammunition in Home",b:1},{a:"Locked, Unloaded, No Ammunition in Home",b:1}];

var data_guns_own_a=[{a:"Strongly Support",b:41},{a:"Support",b:27},{a:"Neutral",b:18},{a:"Oppose",b:8},{a:"Strongly Oppose",b:6}];

var dummydata_guns_own_a=[{a:"Strongly Support",b:25},{a:"Support",b:32},{a:"Neutral",b:14},{a:"Oppose",b:1},{a:"Strongly Oppose",b:28}];


/*
var data_milserve_a=[{a:"Yes",b:92},{a:"No",b:8},{a:"Don't Know",b:0}];

var dummydata_milserve_a=[{a:"Yes",b:41},{a:"No",b:27},{a:"Don't Know",b:18}];

var data_milserve_b=[{a:"Yes",b:82},{a:"No",b:7},{a:"Don't Know",b:11}];

var dummydata_milserve_b=[{a:"Yes",b:41},{a:"No",b:27},{a:"Don't Know",b:18}];

var data_milserve_c=[{a:"Yes",b:58},{a:"No",b:32},{a:"Don't Know",b:10}];

var dummydata_milserve_c=[{a:"Yes",b:41},{a:"No",b:27},{a:"Don't Know",b:18}];

*/

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

var numeroGuns=[58];

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

var numero_ed_a=[61];

var numero_ed_b=[35];

var numero_ed_c=[46];

var dummydata_ed_a=[{a:"Post-9/11 GI Bill",b:77},{a:"Montgomery GI Bill",b:9},{a:"Vocational Rehabilitation",b:7},{a:"Reserve Education Assistance Program",b:3},{a:"Other",b:4}];

var data_ed_a=[{a:"Post-9/11 GI Bill",b:56},{a:"Montgomery GI Bill",b:22},{a:"Vocational Rehabilitation",b:15},{a:"Reserve Education Assistance Program",b:3},{a:"Other",b:4}];

var dummydata_ed_b=[{a:"Community College",b:56},{a:"State School",b:22},{a:"For Profit",b:15},{a:"Technical, Vocational, Trade",b:13}];

var data_ed_b=[{a:"Community College",b:20},{a:"State School",b:47},{a:"For Profit",b:25},{a:"Technical, Vocational, Trade",b:8}];

var dummydata_ed_c=[{a:"Very Satisfied",b:34},{a:"Satisfied",b:45},{a:"Neither Satisfied or Dissatisfied",b:13},{a:"Dissatisfied",b:8}];

var data_ed_c=[{a:"Very Satisfied",b:34},{a:"Satisfied",b:45},{a:"Neither Satisfied or Dissatisfied",b:13},{a:"Dissatisfied",b:8}];

var dummydata_ed_d=[{a:"None",b:50},{a:"Under $1000",b:2},{a:"$1,001-$5,000",b:6},{a:"$5,001-$10,000",b:8},{a:"$10,001-$15,000",b:8},{a:"$15,001-$20,000",b:5},{a:"$20,001-$50,000",b:15},{a:"$50,001-$100,000",b:15},{a:"Above $100,000",b:4}];

var data_ed_d=[{a:"None",b:50},{a:"Under $1000",b:2},{a:"$1,001-$5,000",b:6},{a:"$5,001-$10,000",b:8},{a:"$10,001-$15,000",b:8},{a:"$15,001-$20,000",b:5},{a:"$20,001-$50,000",b:13},{a:"$50,001-$100,000",b:5},{a:"Above $100,000",b:3}];

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

var dummydata_mental_care=[{a:"VA Mental Health Professional",b:24},{a:"Vet Center Counselor",b:9},{a:"Peer Support Group",b:6},{a:"Civilian Mental Health Counselor",b:40},{a:"Religious/Spiritual Leader",b:6}];

var data_mental_care=[{a:"VA Mental Health Professional",b:24},{a:"Vet Center Counselor",b:9},{a:"Peer Support Group",b:6},{a:"Civilian Mental Health Counselor",b:6},{a:"Religious/Spiritual Leader",b:5}];

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

var dummydata_health_a=[{a:"PTSD",b:6},{a:"Anxiety",b:5},{a:"Depression",b:2},{a:"Tinnitus/Hearing Loss",b:4},{a:"Musculoskeletal Injuries/ Chronic Pain",b:8},{a:"TBI",b:9},{a:"Pulmonary issues",b:9},{a:"Burns/Scarring",b:1},{a:"Vision Loss",b:7},{a:"Other",b:1}];

var data_health_a=[{a:"PTSD",b:46},{a:"Anxiety",b:45},{a:"Depression",b:42},{a:"Tinnitus/Hearing Loss",b:41},{a:"Musculoskeletal Injuries/ Chronic Pain",b:38},{a:"TBI",b:19},{a:"Pulmonary issues",b:19},{a:"Burns/Scarring",b:11},{a:"Vision Loss",b:7},{a:"Other",b:19}];

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

var scrollVis=function(){
var width=window.innerWidth,height=window.innerHeight;

var margin={top:10,left:20,bottom:80,right:10};

var countslides=0;

var lastIndex=-1;

var activeIndex=0;

var svg=null;

var g=null;

var activateFunctions=[];

var updateFunctions=[];

var chart=function(selection){selection.each(function(){setupSections();});};setupVis=function(){};setupSections=function(){activateFunctions[0]=showTitle0;activateFunctions[1]=showTitle1;activateFunctions[2]=showTitle2;activateFunctions[3]=showTitle3;activateFunctions[4]=showTitle4;activateFunctions[5]=showTitle5;activateFunctions[6]=showTitle6;activateFunctions[7]=showTitle7;activateFunctions[8]=showTitle8;activateFunctions[9]=showTitle9;activateFunctions[10]=showTitle10;activateFunctions[11]=showTitle11;activateFunctions[12]=showTitle12;activateFunctions[13]=showTitle13;activateFunctions[14]=showTitle14;activateFunctions[15]=showTitle15;activateFunctions[16]=showTitle16;activateFunctions[17]=showTitle17;activateFunctions[18]=showTitle18;activateFunctions[19]=showTitle19;activateFunctions[20]=showTitle20;activateFunctions[21]=showTitle21;activateFunctions[22]=showTitle22;activateFunctions[23]=showTitle23;activateFunctions[24]=showTitle24;activateFunctions[25]=showTitle25;activateFunctions[26]=showTitle26;activateFunctions[27]=showTitle27;for(
var i=0;i<28+1;i++){updateFunctions[i]=function(){};}};

function showTitle0(){
var vis=document.getElementById("vis");vis.setAttribute("style","display:inline-block; ");

var navbarmd=document.getElementById("navbar-md");navbarmd.setAttribute("style","visibility:hidden; ");

var logoOpener=document.getElementById("logoOpener");logoOpener.setAttribute("style","display:inline-block; ");

var bgvid0=document.getElementById("bgvid0");bgvid0.setAttribute("style","visibility:visible; ");

var stepper=document.getElementById("step-1");stepper.setAttribute("style","visibility:hidden; ");

var greenoverlay=document.getElementById("greenoverlay");greenoverlay.setAttribute("style","visibility:hidden; ");

var greenoverlay=document.getElementById("greenoverlaycover");greenoverlay.setAttribute("style","visibility:visible; ");

var containerA=document.getElementById("container-1");containerA.setAttribute("style","visibility:hidden; ");if(!trigger){drawPieChart(dummydata_a);



  
  
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
drawHBarChart(data_ethnicity);
    
    
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
drawHBarChart(data_orientation);

 
//data_children
drawPieChart(data_children);
    

    
//data_religion
drawPieChart(dummydata_religion);





 
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
drawStackChart(data_interact);


//data_milserve_a
drawStackChart(data_milserve_b);

    
// data_milserve_b
drawStackChart(data_milserve_c);

//data_milserve_c
drawStackChart(data_milserve_c);

    
    
    
// data_milserve_separate
drawHBarChart(dummydata_milserve_separate);
    
    
    
    
// data_discharge
drawStackChart(data_discharge);


// data_milserve_separate
/////////drawStackChart(data_milserve_separate);


   startnumerosA(numero_natg);



////////
/////////////
///////




drawPieChart(dummydata_q);
drawPieChart(dummydata_r);
drawPieChart(dummydata_reg);
startnumerosA(numeroB);
startnumerosB(numeroVoted);
startsmallnumerosA(numeroE);
drawStackChart(data_s);
drawStackChart(data_t);
drawStackChart(data_u);
drawStackChart(data_v);
drawStackChart(data_w);
drawStackChart(data_x);
drawStackChart(data_y);
startsmallnumerosA(numero_guns);
drawHBarChart(data_guns_own_aa);
drawStackChart(data_milserve_a);
drawStackChart(data_milserve_b);
drawStackChart(data_milserve_c);
drawStackChart(data_milserve_d);
drawStackChart(data_milserve_e);
drawStackChart(data_equality_a);
drawStackChart(data_equality_c);
startnumerosA(numeroSupport);
startnumerosB(numeroUnderstand);
startnumerosC(numeroHire);
drawStackChart(data_p_obama);
drawStackChart(data_p_trump);
drawStackChart(data_p_congress);
drawStackChart(data_wom_a);
drawStackChart(data_wom_b);
drawStackChart(data_wom_c);
drawStackChart(data_wom_d);
drawStackChart(data_wom_e);
drawStackChart(data_wom_f);
drawStackChart(data_wom_g);
startnumerosA(numero_wom_a);
startnumerosB(numero_wom_b);
drawStackChart(data_wom_g_);
drawStackChart(data_wom_h_);
drawStackChart(data_wom_i_);
drawStackChart(data_wom_j_);
drawStackChart(data_wom_k_);
drawStackChart(data_wom_k__);
drawStackChart(data_wom_n);
drawStackChart(data_wom_o);
drawStackChart(data_wom_p);
drawStackChart(data_wom_q);
drawStackChart(data_wom_r);
startnumerosA(numero_wom_c);
startnumerosB(numero_wom_d);
startnumerosC(numero_wom_e);
drawStackChart(data_wom_s);
drawStackChart(data_wom_t);
drawStackChart(data_wom_u);
drawStackChart(data_wom_v);
startsmallnumerosA(numero_wom_f);
startsmallnumerosA(numero_wom_g);
drawStackChart(data_wom_y);
drawStackChart(data_wom_z);
startnumerosA(numero_sa_w);
startnumerosB(numero_sa_m);
drawStackChart(data_wom_cc);
drawStackChart(data_wom_dd);
drawStackChart(data_wom_ee);
drawStackChart(data_wom_ff);
drawStackChart(data_wom_gg);
drawStackChart(data_wom_hh);
drawStackChart(data_wom_ii);
drawStackChart(data_wom_jj);
drawPieChart(dummydata_gib_a);
drawPieChart(dummydata_gib_b);
drawPieChart(dummydata_gib_c);
startsmallnumerosA(numero_gib_nocuts);
drawStackChart(data_gib_d);
drawStackChart(data_gib_e);
drawStackChart(data_gib_f);
startnumerosA(numero_ed_a);
startnumerosB(numero_ed_b);
startnumerosC(numero_ed_c);
drawStackChart(data_ed_a);
drawStackChart(data_ed_b);
drawStackChart(data_ed_c);
drawHBarChart(data_ed_d);
drawStackChart(data_employ_a);
drawStackChart(data_employ_b);
drawStackChart(data_employ_c);
drawStackChart(data_employ_d);
drawHBarChart(data_employ_e);
startnumerosA(numero_employ_a);
startnumerosB(numero_employ_b);
startnumerosC(numero_employ_c);
startnumerosA(numero_employ_d);
drawPieChart(dummydata_va_a);
drawPieChart(dummydata_va_b);
drawPieChart(dummydata_va_c);
drawHBarChart(data_va_bars);
startnumerosA(numero_va_a);
startnumerosB(numero_va_b);
startnumerosC(numero_va_c);
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
startnumerosA(numero_va_comp);
startsmallnumerosB(numero_va_notify);
drawHBarChartsm(data_va_claim);
drawHBarChartsm(data_va_appeal);
drawHBarChartsm(data_va_decision);
startnumerosA(numero_mental_a);
drawHBarChart(data_mental_care);
startnumerosB(numero_mental_b);
startnumerosC(numero_mental_c);
drawStackChart(data_mental_a);
drawStackChart(data_mental_b);
startnumerosA(numero_suicide_a);
drawHBarChartsm(data_suicide_aa);
drawHBarChartsm(data_suicide_d);
drawHBarChartsm(data_suicide_e);
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
drawStackChart(data_tran_a);
startnumerosA(numero_tran_a);
startnumerosB(numero_tran_b);
startnumerosC(numero_tran_c);
startnumerosA(numero_tran_d);
startnumerosB(numero_tran_e);trigger=1;iii='';}else{}}
function showTitle1(){
var greenoverlaycover=document.getElementById("greenoverlaycover");greenoverlaycover.setAttribute("style","visibility:visible; ");

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
drawHBarChart(data_ethnicity,"svg5");
    
    
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
drawHBarChart(data_orientation,"svg7");

 
//data_children
changePieChart(data_children,"svg8");
    

    
//data_religion
changePieChart(data_religion,"svg9");





 

}
function showTitle3(){
var containerA=document.getElementById("container-1");containerA.setAttribute("style","visibility:hidden; ");


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




}
function showTitle4(){

iii=18;
changePieChart(data_q,"svg18");
changePieChart(data_r,"svg19");
changePieChart(data_reg,"svg20");
startnumerosA(numeroB,"svg21");
startnumerosB(numeroVoted,"svg22");

}
function showTitle5(){iii=23;
startsmallnumerosA(numeroE,"svg23");
changeStackChart(data_s,"svg24");
changeStackChart(data_t,"svg25");
changeStackChart(data_u,"svg26");
changeStackChart(data_v,"svg27");
changeStackChart(data_w,"svg28");
changeStackChart(data_x,"svg29");
changeStackChart(data_y,"svg30");

var greenoverlay=document.getElementById("greenoverlay");greenoverlay.setAttribute("style","visibility:visible; ");}
function showTitle6(){iii=31;
startsmallnumerosA(numero_guns,"svg31");
changeHBarChart(data_guns_own_aa,"svg32");}
function showTitle7(){iii=33;
changeStackChart(data_milserve_a,"svg33");
changeStackChart(data_milserve_b,"svg34");
changeStackChart(data_milserve_c,"svg35");
changeStackChart(data_milserve_d,"svg36");
changeStackChart(data_milserve_e,"svg37");}
function showTitle8(){iii=38;
changeStackChart(data_equality_a,"svg38");
changeStackChart(data_equality_c,"svg39");}
function showTitle9(){iii=40;
startnumerosA(numeroSupport,"svg40");
startnumerosB(numeroUnderstand,"svg41");
startnumerosC(numeroHire,"svg42");
changeStackChart(data_p_obama,"svg43");
changeStackChart(data_p_trump,"svg44");
changeStackChart(data_p_congress,"svg45");}
function showTitle10(){iii=46;
changeStackChart(data_wom_a,"svg46");
changeStackChart(data_wom_b,"svg47");
changeStackChart(data_wom_c,"svg48");
changeStackChart(data_wom_d,"svg49");
changeStackChart(data_wom_e,"svg50");
changeStackChart(data_wom_f,"svg51");
changeStackChart(data_wom_g,"svg52");}
function showTitle11(){iii=53;
startnumerosA(numero_wom_a,"svg53");
startnumerosB(numero_wom_b,"svg54");
changeStackChart(data_wom_g_,"svg55");
changeStackChart(data_wom_h_,"svg56");
changeStackChart(data_wom_i_,"svg57");
changeStackChart(data_wom_j_,"svg58");
changeStackChart(data_wom_k_,"svg59");
changeStackChart(data_wom_k__,"svg60");
changeStackChart(data_wom_n,"svg61");
changeStackChart(data_wom_o,"svg62");
changeStackChart(data_wom_p,"svg63");
changeStackChart(data_wom_q,"svg64");
changeStackChart(data_wom_r,"svg65");}
function showTitle12(){iii=66;
startnumerosA(numero_wom_c,"svg66");
startnumerosB(numero_wom_d,"svg67");
startnumerosC(numero_wom_e,"svg68");
changeStackChart(data_wom_s,"svg69");
changeStackChart(data_wom_t,"svg70");
changeStackChart(data_wom_u,"svg71");
changeStackChart(data_wom_v,"svg72");
startsmallnumerosA(numero_wom_f,"svg73");
startsmallnumerosA(numero_wom_g,"svg74");}
function showTitle13(){iii=75;
changeStackChart(data_wom_y,"svg75");
changeStackChart(data_wom_z,"svg76");
startnumerosA(numero_sa_w,"svg77");
startnumerosB(numero_sa_m,"svg78");
changeStackChart(data_wom_cc,"svg79");
changeStackChart(data_wom_dd,"svg80");
changeStackChart(data_wom_ee,"svg81");
changeStackChart(data_wom_ff,"svg82");
changeStackChart(data_wom_gg,"svg83");
changeStackChart(data_wom_hh,"svg84");
changeStackChart(data_wom_ii,"svg85");
changeStackChart(data_wom_jj,"svg86");}
function showTitle14(){iii=87;
changePieChart(data_gib_a,"svg87");
changePieChart(data_gib_b,"svg88");
changePieChart(data_gib_c,"svg89");
startsmallnumerosA(numero_gib_nocuts,"svg90");
changeStackChart(data_gib_d,"svg91");
changeStackChart(data_gib_e,"svg92");
changeStackChart(data_gib_f,"svg93");}
function showTitle15(){iii=94;
startnumerosA(numero_ed_a,"svg94");
startnumerosB(numero_ed_b,"svg95");
startnumerosC(numero_ed_c,"svg96");
changeStackChart(data_ed_a,"svg97");
changeStackChart(data_ed_b,"svg98");
changeStackChart(data_ed_c,"svg99");
changeHBarChart(data_ed_d,"svg100");}
function showTitle16(){iii=101;
changeStackChart(data_employ_a,"svg101");
changeStackChart(data_employ_b,"svg102");
changeStackChart(data_employ_c,"svg103");
changeStackChart(data_employ_d,"svg104");
changeHBarChart(data_employ_e,"svg105");
startnumerosA(numero_employ_a,"svg106");
startnumerosB(numero_employ_b,"svg107");
startnumerosA(numero_employ_d,"svg108");
startnumerosC(numero_employ_c,"svg109");}
function showTitle17(){iii=110;
changePieChart(data_va_a,"svg110");
changePieChart(data_va_b,"svg111");
changePieChart(data_va_c,"svg112");
changeHBarChart(data_va_bars,"svg113");
startnumerosA(numero_va_a,"svg114");
startnumerosB(numero_va_b,"svg115");
startnumerosC(numero_va_c,"svg116");
changeStackChart(data_va_d,"svg117");
changeStackChart(data_va_e,"svg118");
changeStackChart(data_va_f,"svg119");
changeStackChart(data_va_g,"svg120");
changeStackChart(data_va_h,"svg121");
changeStackChart(data_va_i,"svg122");
changeStackChart(data_va_j,"svg123");
startsmallnumerosA(numero_va_d,"svg124");
startsmallnumerosA(numero_va_e,"svg125");}
function showTitle18(){iii=126;
startnumerosA(numero_va_f,"svg126");
changeStackChart(data_va_k,"svg127");
changeStackChart(data_va_l,"svg128");
changeStackChart(data_va_m,"svg129");
changeStackChart(data_va_n,"svg130");
changeStackChart(data_va_o,"svg131");
changeStackChart(data_va_p,"svg132");
changeStackChart(data_va_q,"svg133");
startnumerosA(numero_va_comp,"svg134");
startsmallnumerosB(numero_va_notify,"svg135")
changeHBarChartsm(data_va_decision,"svg136");
changeHBarChartsm(data_va_appeal,"svg137");
changeHBarChartsm(data_va_claim,"svg138");}
function showTitle19(){iii=139;
startnumerosA(numero_mental_a,"svg139");
changeHBarChart(data_mental_care,"svg140");
startnumerosB(numero_mental_b,"svg141");
startnumerosC(numero_mental_c,"svg142");
changeStackChart(data_mental_a,"svg143");
changeStackChart(data_mental_b,"svg144");}
function showTitle20(){iii=145;
startnumerosA(numero_suicide_a,"svg145");
changeHBarChartsm(data_suicide_aa,"svg146");
changeHBarChartsm(data_suicide_d,"svg147");
changeHBarChartsm(data_suicide_e,"svg148");}
function showTitle21(){iii=149;
changeHBarChart(data_health_a,"svg149");
changeHBarChart(data_health_b,"svg150");
startnumerosA(numero_health_a,"svg151");
startnumerosB(numero_health_b,"svg152");
startnumerosC(numero_health_c,"svg153");
startnumerosA(numero_health_d,"svg154");
startnumerosB(numero_health_e,"svg155");
startnumerosC(numero_health_f,"svg156");
changeStackChart(data_health_c,"svg157");
changeStackChart(data_health_d,"svg158");
changeHBarChartsm(data_health_e,"svg159");}
function showTitle22(){iii=160;
changeStackChart(data_tran_a,"svg160");
startnumerosA(numero_tran_a,"svg161");
startnumerosB(numero_tran_b,"svg162");
startnumerosC(numero_tran_c,"svg163");
startnumerosA(numero_tran_d,"svg164");
startnumerosB(numero_tran_e,"svg165");
d3.select("#mapcontain").select("svg").remove();
d3.select("#mapcontain").select("g").remove();
d3.select("#legendcontain").select("svg").remove();
d3.select("#legendcontain").select("rect").remove();
d3.select("body").selectAll("toolTip").remove();}
function showTitle23(){if(window.matchMedia("(max-width: 400px)").matches){
var w=(window.innerWidth/1.3);

var h=300;

var projection=d3.geo.albersUsa().translate([w/2,h/2]).scale([400]);

var path=d3.geo.path().projection(projection);}else if(window.matchMedia("(min-width: 401px) and (max-width: 960px)").matches){
var w=window.innerWidth;

var h=400;

var projection=d3.geo.albersUsa().translate([w/2,h/2]).scale([700]);

var path=d3.geo.path().projection(projection);}else{
var w=(window.innerWidth/1.3);

var h=600;

var projection=d3.geo.albersUsa().translate([w/2,h/2]).scale([1080]);

var path=d3.geo.path().projection(projection);}
var color=d3.scale.quantize().range(["#294636","#2f513e","#39634c","#416250","#4a705b","#5b836d","#afb48b","#ced49e","#deea81","#d0e05a","#dcf428"]);

var legsvg=d3.select("#legendcontain").append("svg").attr("width",(window.innerWidth/1.3)+"px").attr("height","40px");

var defs=legsvg.append("defs");

var linearGradient=defs.append("linearGradient").attr("id","linear-gradient");legsvg.append("rect").attr("width",(window.innerWidth/1.3)).attr("height",40).style("fill","url(#linear-gradient)");

var colorScale=d3.scale.linear().range(["#294636","#2f513e","#39634c","#416250","#4a705b","#5b836d","#afb48b","#ced49e","#deea81","#d0e05a","#dcf428"]);linearGradient.selectAll("stop").data(colorScale.range()).enter().append("stop").attr("offset",function(d,i){return i/(colorScale.range().length-1);}).attr("stop-color",function(d){return d;});

var svg=d3.select("#mapcontain").append("svg").attr("width",w).attr("height",h);
d3.csv("states.csv",function(data){color.domain([d3.min(data,function(d){return d.ValidPercent;}),d3.max(data,function(d){return d.ValidPercent;})]);
d3.json("us_states.json",function(json){for(
var i=0;i<data.length;i++){
var dataState=data[i].Name;

var dataValue=parseFloat(data[i].ValidPercent);for(
var j=0;j<json.features.length;j++){
var jsonState=json.features[j].properties.name;if(dataState==jsonState){json.features[j].properties.value=dataValue;break;}}}svg.selectAll("path").data(json.features).enter().append("path").attr("d",path).attr("class","stateouts").on("mousemove",function(d){div.style("left",d3.event.pageX-60+"px");div.style("top",(d3.event.pageY)-136+"px");div.style("display","inline-block");div.style("position","absolute");div.html((d.properties.name)+"<h4>"+(d.properties.value)+"%</h4>");}).on("mouseout",function(d){div.style("display","none");}).style("fill",function(d){
var value=d.properties.value;if(value){return color(value);}else{return"#ccc";}});});});

var div=d3.select("body").append("div").attr("class","toolTip");}
function showTitle24(){d3.select("body").selectAll("toolTip").remove();
d3.select("#mapcontain").select("svg").remove();
d3.select("#mapcontain").select("g").remove();
d3.select("#legendcontain").select("svg").remove();
d3.select("#legendcontain").select("rect").remove();}
function showTitle25(){}
function showTitle26(){
var titleCloser=document.getElementById("titleCloser");titleCloser.setAttribute("style","display:none; ");}
function showTitle27(){
var titleCloser=document.getElementById("titleCloser");titleCloser.setAttribute("style","display:inline-block; ");}chart.activate=function(index){activeIndex=index;

var sign=activeIndex-lastIndex<0?-1:1;

var scrolledSections=d3.range(lastIndex+sign,activeIndex+sign,sign);scrolledSections.forEach(function(i){activateFunctions[i]();});lastIndex=activeIndex;};chart.update=function(index,progress){updateFunctions[index](progress);};return chart;};
function display(){
var plot=scrollVis();
d3.select("#vis").call(plot);

var scroll=scroller().container(d3.select("#graphic"));scroll(d3.selectAll(".step"));scroll.on("active",function(index){for(
var i=0;i<window.slides.length;i++){
var slide=window.slides[i];if(i+1===index){slide.show();console.log("show");}else{slide.hide();console.log("hide");}}d3.selectAll("#step-"+index).style("visibility",function(d,i){return i==index?"none":"inline-block";});
d3.selectAll("#step-"+(index-1)).style("visibility",function(d,i){return i==index?"inline-block":"none";});
d3.selectAll("#step-"+(index+1)).style("visibility",function(d,i){return i==index?"inline-block":"none";});plot.activate(index);});scroll.on("progress",function(index,progress){plot.update(index,progress);});}document.addEventListener("DOMContentLoaded",function(){display();});window.addEventListener("resize",onResize);
function onResize(h){
var height=window.windowHeight;

var width=window.windowWidth;resize();iii=0;
changePieChart(data_a,"svg0");
changePieChart(dataset,"svg1");
changePieChart(data_h,"svg2");
changeHBarChart(data_f,"svg3");
changeHBarChart(data_c,"svg4");
changeHBarChartsm(data_b,"svg5");
changeHBarChart(data_g,"svg6");
changeHBarChart(data_e,"svg7");iii=8;
changePieChart(data_i,"svg8");
changePieChart(data_j,"svg9");
changePieChart(data_k,"svg10");
changeHBarChart(data_l,"svg11");
changeStackChart(data_m,"svg12");
changeStackChart(data_n,"svg13");
changeStackChart(data_o,"svg14");
changeStackChart(data_p,"svg15");
startnumerosA(numeroNat,"svg16");
startnumerosB(numeroReserve,"svg17");iii=18;
changePieChart(data_q,"svg18");
changePieChart(data_r,"svg19");
changePieChart(data_reg,"svg20");
startnumerosA(numeroB,"svg21");
startnumerosB(numeroVoted,"svg22");iii=23;
startsmallnumerosA(numeroE,"svg23");
changeStackChart(data_s,"svg24");
changeStackChart(data_t,"svg25");
changeStackChart(data_u,"svg26");
changeStackChart(data_v,"svg27");
changeStackChart(data_w,"svg28");
changeStackChart(data_x,"svg29");
changeStackChart(data_y,"svg30");iii=31;
startsmallnumerosA(numero_guns,"svg31");
changeHBarChart(data_guns_own_aa,"svg32");iii=33;
changeStackChart(data_milserve_a,"svg33");
changeStackChart(data_milserve_b,"svg34");
changeStackChart(data_milserve_c,"svg35");
changeStackChart(data_milserve_d,"svg36");
changeStackChart(data_milserve_e,"svg37");iii=38;
changeStackChart(data_equality_a,"svg38");
changeStackChart(data_equality_c,"svg39");iii=40;
startnumerosA(numeroSupport,"svg40");
startnumerosB(numeroUnderstand,"svg41");
startnumerosC(numeroHire,"svg42");
changeStackChart(data_p_obama,"svg43");
changeStackChart(data_p_trump,"svg44");
changeStackChart(data_p_congress,"svg45");iii=46;
changeStackChart(data_wom_a,"svg46");
changeStackChart(data_wom_b,"svg47");
changeStackChart(data_wom_c,"svg48");
changeStackChart(data_wom_d,"svg49");
changeStackChart(data_wom_e,"svg50");
changeStackChart(data_wom_f,"svg51");
changeStackChart(data_wom_g,"svg52");iii=53;
startnumerosA(numero_wom_a,"svg53");
startnumerosB(numero_wom_b,"svg54");
changeStackChart(data_wom_g_,"svg55");
changeStackChart(data_wom_h_,"svg56");
changeStackChart(data_wom_i_,"svg57");
changeStackChart(data_wom_j_,"svg58");
changeStackChart(data_wom_k_,"svg59");
changeStackChart(data_wom_k__,"svg60");
changeStackChart(data_wom_n,"svg61");
changeStackChart(data_wom_o,"svg62");
changeStackChart(data_wom_p,"svg63");
changeStackChart(data_wom_q,"svg64");
changeStackChart(data_wom_r,"svg65");iii=66;
startnumerosA(numero_wom_c,"svg66");
startnumerosB(numero_wom_d,"svg67");
startnumerosC(numero_wom_e,"svg68");
changeStackChart(data_wom_s,"svg69");
changeStackChart(data_wom_t,"svg70");
changeStackChart(data_wom_u,"svg71");
changeStackChart(data_wom_v,"svg72");
startsmallnumerosA(numero_wom_f,"svg73");
startsmallnumerosA(numero_wom_g,"svg74");iii=75;
changeStackChart(data_wom_y,"svg75");
changeStackChart(data_wom_z,"svg76");
startnumerosA(numero_sa_w,"svg77");
startnumerosB(numero_sa_m,"svg78");
changeStackChart(data_wom_cc,"svg79");
changeStackChart(data_wom_dd,"svg80");
changeStackChart(data_wom_ee,"svg81");
changeStackChart(data_wom_ff,"svg82");
changeStackChart(data_wom_gg,"svg83");
changeStackChart(data_wom_hh,"svg84");
changeStackChart(data_wom_ii,"svg85");
changeStackChart(data_wom_jj,"svg86");iii=87;
changePieChart(data_gib_a,"svg87");
changePieChart(data_gib_b,"svg88");
changePieChart(data_gib_c,"svg89");
startsmallnumerosA(numero_gib_nocuts,"svg90");
changeStackChart(data_gib_d,"svg91");
changeStackChart(data_gib_e,"svg92");
changeStackChart(data_gib_f,"svg93");iii=94;
startnumerosA(numero_ed_a,"svg94");
startnumerosB(numero_ed_b,"svg95");
startnumerosC(numero_ed_c,"svg96");
changeStackChart(data_ed_a,"svg97");
changeStackChart(data_ed_b,"svg98");
changeStackChart(data_ed_c,"svg99");
changeHBarChart(data_ed_d,"svg100");iii=101;
changeStackChart(data_employ_a,"svg101");
changeStackChart(data_employ_b,"svg102");
changeStackChart(data_employ_c,"svg103");
changeStackChart(data_employ_d,"svg104");
changeHBarChart(data_employ_e,"svg105");
startnumerosA(numero_employ_a,"svg106");
startnumerosB(numero_employ_b,"svg107");
startnumerosA(numero_employ_d,"svg108");
startnumerosC(numero_employ_c,"svg109");iii=110;
changePieChart(data_va_a,"svg110");
changePieChart(data_va_b,"svg111");
changePieChart(data_va_c,"svg112");
changeHBarChart(data_va_bars,"svg113");
startnumerosA(numero_va_a,"svg114");
startnumerosB(numero_va_b,"svg115");
startnumerosC(numero_va_c,"svg116");
changeStackChart(data_va_d,"svg117");
changeStackChart(data_va_e,"svg118");
changeStackChart(data_va_f,"svg119");
changeStackChart(data_va_g,"svg120");
changeStackChart(data_va_h,"svg121");
changeStackChart(data_va_i,"svg122");
changeStackChart(data_va_j,"svg123");
startsmallnumerosA(numero_va_d,"svg124");
startsmallnumerosA(numero_va_e,"svg125");iii=126;
startnumerosA(numero_va_f,"svg126");
changeStackChart(data_va_k,"svg127");
changeStackChart(data_va_l,"svg128");
changeStackChart(data_va_m,"svg129");
changeStackChart(data_va_n,"svg130");
changeStackChart(data_va_o,"svg131");
changeStackChart(data_va_p,"svg132");
changeStackChart(data_va_q,"svg133");
startnumerosA(numero_va_comp,"svg134");
startsmallnumerosB(numero_va_notify,"svg135")
changeHBarChartsm(data_va_decision,"svg136");
changeHBarChartsm(data_va_appeal,"svg137");
changeHBarChartsm(data_va_claim,"svg138");iii=139;
startnumerosA(numero_mental_a,"svg139");
changeHBarChart(data_mental_care,"svg140");
startnumerosB(numero_mental_b,"svg141");
startnumerosC(numero_mental_c,"svg142");
changeStackChart(data_mental_a,"svg143");
changeStackChart(data_mental_b,"svg144");iii=145;
startnumerosA(numero_suicide_a,"svg145");
changeHBarChartsm(data_suicide_aa,"svg146");
changeHBarChartsm(data_suicide_d,"svg147");
changeHBarChartsm(data_suicide_e,"svg148");iii=149;
changeHBarChart(data_health_a,"svg149");
changeHBarChart(data_health_b,"svg150");
startnumerosA(numero_health_a,"svg151");
startnumerosB(numero_health_b,"svg152");
startnumerosC(numero_health_c,"svg153");
startnumerosA(numero_health_d,"svg154");
startnumerosB(numero_health_e,"svg155");
startnumerosC(numero_health_f,"svg156");
changeStackChart(data_health_c,"svg157");
changeStackChart(data_health_d,"svg158");
changeHBarChartsm(data_health_e,"svg159");iii=160;
changeStackChart(data_tran_a,"svg160");
startnumerosA(numero_tran_a,"svg161");
startnumerosB(numero_tran_b,"svg162");
startnumerosC(numero_tran_c,"svg163");
startnumerosA(numero_tran_d,"svg164");
startnumerosB(numero_tran_e,"svg165");}