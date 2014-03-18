"use strict";var app=angular.module("liftApp",["ngCookies","ngResource","ngSanitize","ngRoute","ngProgress"]);app.config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"lift/views/home.html",controller:"HomeCtrl"}).when("/medicine",{templateUrl:"lift/views/medicine.html",controller:"MedicineCtrl"}).when("/testResults",{templateUrl:"lift/views/testResults.html",controller:"TestResultsCtrl"}).when("/history",{templateUrl:"lift/views/history.html",controller:"HistoryCtrl"}).when("/meters",{templateUrl:"lift/views/meters.html",controller:"MetersCtrl"}).when("/clinician",{templateUrl:"lift/views/clinician.html",controller:"ClinicianCtrl"}).otherwise({redirectTo:"/"}),b.html5Mode(!0)}]),app.run(["$rootScope","ngProgress",function(a){a.$on("$routeChangeStart",function(){}),a.$on("$routeChangeSuccess",function(){})}]),angular.module("liftApp").controller("NavbarCtrl",["$scope","$location",function(a,b){a.menu=[{title:"Overview",link:"/"},{title:"Health Meters",link:"/meters"},{title:"Medicine",link:"/medicine"},{title:"History",link:"/history"},{title:"Test Results",link:"/testResults"},{title:"Clinician",link:"/clinician"}],a.isActive=function(a){return a===b.path()},a.users=[{name:"Melba Brewster",username:"melba"},{name:"Harriett Hodges",username:"hhodges"},{name:"Thomas Frost",username:"tfrost"},{name:"Diane Sparks",username:"sparks231"}],a.activeUser=a.users[0],a.chooseUser=function(b){a.activeUser=b}}]),angular.module("liftApp").controller("HomeCtrl",["$scope",function(a){a.meters=["127","Abdominal Cramps","Benadryl","Calories","Constipation","Decreased Hearing","Ear Ache","Ear Echo Right"]}]);var Holder=Holder||{},app=angular.module("liftApp");app.directive("linechart",function(){return{template:"<div></div>",restrict:"E",link:function(a,b){b.text("this is the linechart directive")}}}),app.directive("holderFix",function(){return{link:function(a,b){Holder.run({images:b[0],nocss:!0})}}}),angular.module("liftApp").controller("MedicineCtrl",["$scope",function(a){a.activeMedicines=[{drugName:"Metformin",dosage:"500 mg 2-3 times daily",classification:"Anti Diabetic agents"},{drugName:"Amidiopine",dosage:"2.5 mg once daily",classification:"Calcium Antagonist"},{drugName:"Catapres",dosage:"75-150 mgc twice daily",classification:"Anti Hypertensive"},{drugName:"Metopolol",dosage:"50-100 mg once daily",classification:"Beta Blockers"}]}]),angular.module("liftApp").controller("TestResultsCtrl",["$scope",function(a){a.testResults=[{testName:"Urine Test",date:"11/14/2013",result:"Normal"},{testName:"Blood Test",date:"11/14/2013",result:"Normal"},{testName:"Blood Glucose Test",date:"11/14/2013",result:"Normal"},{testName:"Blood Urea Nitrogen (BUN) Test",date:"11/14/2013",result:"Normal"},{testName:"Electrocardiogram (ECG) Test",date:"11/12/2013",result:"Normal"}]}]),angular.module("liftApp").controller("HistoryCtrl",["$scope",function(a){a.history=[{date:"December 5, 2012 6:00 PM",text:"Physician changed the dosage of Amelodopine from 2.5mg to 5mg daily"},{date:"November 10, 2012 5:00 PM",text:"Physician order: Take blood pressure every 4 hours"},{date:"November 09, 2012 6:00 PM",text:"Clinical Visit: Dr. Mendez at Philippine General Hospital",extraInfo:"Details..."},{date:"November 5, 2012 6:00 PM",text:"Physician prescribed the dosage of Amelodopine 2.5mg daily"}]}]),angular.module("liftApp").controller("MetersCtrl",["$scope",function(a){a.events=[{date:"11/14/2012 02:00PM",event:"Follow up checkup with Dr. Russel (Cardiologist)"},{date:"11/14/2012 08:00AM",event:"Amelodopine 10mg"},{date:"11/14/2012 06:00AM",event:"Light Jogging"},{date:"11/15/2012 09:00AM",event:"Physical Therapy Session with Dr. Santos(PT)"},{date:"11/15/2012 08:00AM",event:"Metformin 50mg"}]}]);var app=angular.module("liftApp");app.controller("ClinicianCtrl",["$scope",function(a){a.patientInfo=[{type:"chronic",number:80,percentage:40,icon:"fa-ambulance"},{type:"nominal",number:80,percentage:40,icon:"fa-medkit"},{type:"acute",number:20,percentage:10,icon:"fa-wheelchair"},{type:"new",number:20,percentage:10,icon:"fa-plus-square"}],a.transactionHistory=[{date:"Dec 5, 2012 5:00 PM",text:"[patient Eric] Increased dosage of Amlodopine from 2.5mg to 5mg daily"},{date:"Nov 16, 2012 9:00 AM",text:"[patient Eric] ordered to take blood pressure every 4 hours"},{date:"Nov 15, 2012 9:00 AM",text:"[patient Eric] regular clinical visit"},{date:"Nov 5, 2012 5:00 PM",text:"[patient Eric] Prescribed Amlodopine 2.5mg daily"}]}]);