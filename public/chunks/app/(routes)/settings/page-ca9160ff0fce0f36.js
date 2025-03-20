(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4426],{1345:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>y});var a=s(95155),r=s(12115),l=s(37186);let i=r.forwardRef(function(e,t){let{title:s,titleId:a,...l}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),s?r.createElement("title",{id:a},s):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"}))});var n=s(6678);let o=r.forwardRef(function(e,t){let{title:s,titleId:a,...l}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),s?r.createElement("title",{id:a},s):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"}))});var c=s(29337);let d=r.forwardRef(function(e,t){let{title:s,titleId:a,...l}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),s?r.createElement("title",{id:a},s):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"}))});var m=s(92071),h=s(6874),u=s.n(h),x=s(86798);let g={theme:"light",notifications:{email:!0,inApp:!0,sms:!1},display:{compactView:!1,hideCompleted:!1,showTutorials:!0}},p={name:"Dr. Jane Smith",email:"jane.smith@example.com",role:"Physician",specialty:"Family Medicine",organization:"Valley Medical Center",phoneNumber:"(555) 123-4567"},f=async()=>{try{console.log("Fetching user profile from API...");let e=localStorage.getItem("last-login-email"),t=await fetch("/api/users/profile",{headers:{"Content-Type":"application/json","x-bypass-dev-mode":"true",...e?{"x-last-login-email":e}:{}}});if(!t.ok)throw console.warn("API returned ".concat(t.status,": ").concat(t.statusText)),Error("Failed to fetch profile: ".concat(t.statusText));let s=await t.json();return console.log("Profile fetched successfully:",s),localStorage.setItem("cached_profile",JSON.stringify(s)),s}catch(t){console.error("Error fetching user profile:",t),console.log("Trying to use cached profile as fallback...");let e=localStorage.getItem("cached_profile");if(e)try{let t=JSON.parse(e);return console.log("Using cached profile:",t),t}catch(e){console.error("Error parsing cached profile:",e)}return null}},b=async e=>{try{let{auth:t}=await Promise.all([s.e(2992),s.e(9192),s.e(7131),s.e(9224),s.e(3843)]).then(s.bind(s,13843)),a=t.currentUser,r={"Content-Type":"application/json"};if(a)try{let e=await a.getIdToken();r.Authorization="Bearer ".concat(e)}catch(e){console.warn("Unable to get auth token:",e)}else console.log("No authenticated user found, proceeding with anonymous request");let l=await fetch("/api/users/profile",{method:"PUT",headers:r,body:JSON.stringify(e)});if(!l.ok)throw console.error("Failed to save user profile:",l.statusText),Error("Failed to save user profile");return await l.json()}catch(e){throw console.error("Error saving user profile:",e),e}};function y(){let[e,t]=(0,r.useState)(g),[s,h]=(0,r.useState)(p),[y,v]=(0,r.useState)(!1),[j,N]=(0,r.useState)(null),[w,k]=(0,r.useState)("display"),[A,S]=(0,r.useState)(!1);(0,r.useEffect)(()=>{(async()=>{try{let e=await f();console.log("User profile for admin check:",e),S((null==e?void 0:e.role)==="ADMIN"||(null==e?void 0:e.role)===x.g.ADMIN)}catch(e){console.error("Error checking admin status:",e)}})()},[]),(0,r.useEffect)(()=>{let e=localStorage.getItem("activeSettingsTab");e&&["display","notifications","profile"].includes(e)&&(k(e),localStorage.removeItem("activeSettingsTab"))},[]),(0,r.useEffect)(()=>{(async()=>{let s=await f();if(s)h({name:s.displayName||p.name,email:s.email||p.email,role:s.role||p.role,specialty:s.specialty||p.specialty,organization:s.organization||p.organization,phoneNumber:s.phoneNumber||p.phoneNumber}),s.settings&&t({...e,theme:s.settings.theme||e.theme,display:{...e.display,...s.settings.display||{}},notifications:{...e.notifications,...s.settings.notifications||{}}});else{let e=localStorage.getItem("user_preferences");if(e)try{t(JSON.parse(e))}catch(e){console.error("Error parsing user preferences:",e)}let s=localStorage.getItem("last-login-email");if(s)console.log("Creating fallback profile with last login email:",s),h({name:s.split("@")[0],email:s,role:"ADMIN",specialty:"",organization:"",phoneNumber:""}),"desalegnejigu2014@gmail.com"===s&&S(!0);else{let e=localStorage.getItem("user_profile");if(e)try{h(JSON.parse(e))}catch(e){console.error("Error parsing user profile:",e)}}}})()},[]);let E=s=>{let{name:a,checked:r}=s.target;t({...e,display:{...e.display,[a]:r}})},C=s=>{t({...e,theme:s}),"dark"===s?(document.documentElement.classList.add("dark"),document.body.style.backgroundColor="#1a1a1a",document.body.style.color="#f3f4f6"):(document.documentElement.classList.remove("dark"),document.body.style.backgroundColor="",document.body.style.color=""),localStorage.setItem("theme",s)};(0,r.useEffect)(()=>{let e=localStorage.getItem("theme");e&&C(e)},[]);let M=e=>{let{name:t,value:s}=e.target;h(e=>({...e,[t]:s}))},L=async()=>{v(!0),N(null),localStorage.setItem("user_preferences",JSON.stringify(e)),localStorage.setItem("user_profile",JSON.stringify(s));let t={displayName:s.name,email:s.email,specialty:s.specialty,organization:s.organization,phoneNumber:s.phoneNumber,settings:{theme:e.theme,display:e.display,notifications:e.notifications}};console.log("Saving profile data to API:",t);try{let e=await b(t);v(!1),e?(N("Settings saved successfully to server!"),console.log("Profile saved successfully:",e)):(N("Settings saved locally. Server sync failed."),console.warn("Profile save returned no data"))}catch(e){console.error("Error saving profile:",e),v(!1),N("Settings saved locally only.")}setTimeout(()=>{N(null)},3e3)};return(0,a.jsxs)("div",{className:"max-w-7xl mx-auto pb-12",children:[(0,a.jsxs)("div",{className:"mb-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-8 text-white",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold",children:"Settings"}),(0,a.jsx)("p",{className:"mt-2 text-blue-100 max-w-2xl",children:"Manage your account preferences and customize your experience"})]}),(0,a.jsx)(m.A,{}),(0,a.jsx)("div",{className:"mb-8 mt-8",children:(0,a.jsxs)("div",{className:"flex flex-wrap items-center space-x-1 sm:space-x-4 bg-white rounded-lg shadow-md p-2",children:[(0,a.jsxs)("button",{onClick:()=>k("display"),className:"".concat("display"===w?"bg-blue-50 text-blue-700 border-blue-200":"bg-white text-gray-600 hover:bg-gray-50 border-transparent"," flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ease-in-out border"),children:[(0,a.jsx)(l.A,{className:"h-5 w-5 mr-2"}),"Display"]}),(0,a.jsxs)("button",{onClick:()=>k("notifications"),className:"".concat("notifications"===w?"bg-blue-50 text-blue-700 border-blue-200":"bg-white text-gray-600 hover:bg-gray-50 border-transparent"," flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ease-in-out border"),children:[(0,a.jsx)(i,{className:"h-5 w-5 mr-2"}),"Notifications"]}),(0,a.jsxs)("button",{onClick:()=>k("profile"),className:"".concat("profile"===w?"bg-blue-50 text-blue-700 border-blue-200":"bg-white text-gray-600 hover:bg-gray-50 border-transparent"," flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ease-in-out border"),children:[(0,a.jsx)(n.A,{className:"h-5 w-5 mr-2"}),"Profile"]}),A&&(0,a.jsxs)(u(),{href:"/settings/users",className:"bg-white text-gray-600 hover:bg-gray-50 border-transparent flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ease-in-out border",children:[(0,a.jsx)(n.A,{className:"h-5 w-5 mr-2"}),"User Management"]})]})}),"display"===w&&(0,a.jsxs)("div",{className:"bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-500 transform",children:[(0,a.jsx)("div",{className:"px-6 py-5 bg-gradient-to-r from-blue-50 to-indigo-50",children:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"flex-shrink-0 bg-blue-100 rounded-full p-2",children:(0,a.jsx)(l.A,{className:"h-6 w-6 text-blue-600"})}),(0,a.jsxs)("div",{className:"ml-4",children:[(0,a.jsx)("h3",{className:"text-xl font-semibold text-gray-900",children:"Display Settings"}),(0,a.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"Customize how you view the application"})]})]})}),(0,a.jsxs)("div",{className:"px-6 py-6",children:[(0,a.jsxs)("div",{className:"space-y-8",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"text-base font-semibold text-gray-900 mb-4",children:"Theme"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[(0,a.jsx)("div",{onClick:()=>C("light"),className:"relative rounded-xl border-2 cursor-pointer overflow-hidden transition-all duration-200 ".concat("light"===e.theme?"border-blue-500 ring-2 ring-blue-200":"border-gray-200 hover:border-gray-300"),children:(0,a.jsxs)("div",{className:"p-4 bg-white",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,a.jsx)(o,{className:"h-6 w-6 text-yellow-500"}),"light"===e.theme&&(0,a.jsx)("div",{className:"bg-blue-500 text-white rounded-full p-1",children:(0,a.jsx)(c.A,{className:"h-4 w-4"})})]}),(0,a.jsx)("div",{className:"h-24 bg-gradient-to-b from-blue-50 to-gray-100 rounded-lg border border-gray-200 mb-3"}),(0,a.jsx)("p",{className:"font-medium text-gray-800",children:"Light Mode"}),(0,a.jsx)("p",{className:"text-xs text-gray-500 mt-1",children:"Standard bright interface"})]})}),(0,a.jsx)("div",{onClick:()=>C("dark"),className:"relative rounded-xl border-2 cursor-pointer overflow-hidden transition-all duration-200 ".concat("dark"===e.theme?"border-blue-500 ring-2 ring-blue-200":"border-gray-200 hover:border-gray-300"),children:(0,a.jsxs)("div",{className:"p-4 bg-gray-900",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[(0,a.jsx)(d,{className:"h-6 w-6 text-gray-300"}),"dark"===e.theme&&(0,a.jsx)("div",{className:"bg-blue-500 text-white rounded-full p-1",children:(0,a.jsx)(c.A,{className:"h-4 w-4"})})]}),(0,a.jsx)("div",{className:"h-24 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border border-gray-700 mb-3"}),(0,a.jsx)("p",{className:"font-medium text-gray-100",children:"Dark Mode"}),(0,a.jsx)("p",{className:"text-xs text-gray-400 mt-1",children:"Easier on the eyes at night"})]})})]})]}),(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsx)("h4",{className:"text-base font-semibold text-gray-900 mb-4",children:"Display Options"}),(0,a.jsx)("div",{className:"bg-gray-50 rounded-xl p-5",children:(0,a.jsxs)("div",{className:"space-y-5",children:[(0,a.jsxs)("div",{className:"flex items-start",children:[(0,a.jsx)("div",{className:"flex items-center h-5",children:(0,a.jsx)("input",{id:"compact-view",name:"compactView",type:"checkbox",checked:e.display.compactView,onChange:E,className:"h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"})}),(0,a.jsxs)("div",{className:"ml-3",children:[(0,a.jsx)("label",{htmlFor:"compact-view",className:"font-medium text-gray-800",children:"Compact View"}),(0,a.jsx)("p",{className:"text-sm text-gray-500",children:"Use a more condensed view for lists and tables"})]})]}),(0,a.jsxs)("div",{className:"flex items-start",children:[(0,a.jsx)("div",{className:"flex items-center h-5",children:(0,a.jsx)("input",{id:"hide-completed",name:"hideCompleted",type:"checkbox",checked:e.display.hideCompleted,onChange:E,className:"h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"})}),(0,a.jsxs)("div",{className:"ml-3",children:[(0,a.jsx)("label",{htmlFor:"hide-completed",className:"font-medium text-gray-800",children:"Hide Completed Items"}),(0,a.jsx)("p",{className:"text-sm text-gray-500",children:"Automatically hide completed visits from listings"})]})]}),(0,a.jsxs)("div",{className:"flex items-start",children:[(0,a.jsx)("div",{className:"flex items-center h-5",children:(0,a.jsx)("input",{id:"show-tutorials",name:"showTutorials",type:"checkbox",checked:e.display.showTutorials,onChange:E,className:"h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"})}),(0,a.jsxs)("div",{className:"ml-3",children:[(0,a.jsx)("label",{htmlFor:"show-tutorials",className:"font-medium text-gray-800",children:"Show Help Tips"}),(0,a.jsx)("p",{className:"text-sm text-gray-500",children:"Display helpful tooltips and guidance throughout the application"})]})]})]})})]})]}),(0,a.jsxs)("div",{className:"mt-8 flex justify-end",children:[j&&(0,a.jsxs)("div",{className:"mr-4 flex items-center px-3 py-2 rounded-md bg-green-50 text-green-700 border border-green-200",children:[(0,a.jsx)(c.A,{className:"h-5 w-5 mr-2 text-green-500"}),(0,a.jsx)("span",{className:"text-sm font-medium",children:j})]}),(0,a.jsx)("button",{type:"button",onClick:L,disabled:y,className:"flex items-center px-5 py-2.5 rounded-md text-sm font-medium shadow-sm ".concat(y?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700 text-white transform hover:translate-y-[-1px] transition-all"),children:y?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("svg",{className:"animate-spin h-4 w-4 mr-2 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Saving..."]}):"Save Preferences"})]})]})]}),"notifications"===w&&(0,a.jsxs)("div",{className:"bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-500 transform",children:[(0,a.jsx)("div",{className:"px-6 py-5 bg-gradient-to-r from-indigo-50 to-purple-50",children:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"flex-shrink-0 bg-indigo-100 rounded-full p-2",children:(0,a.jsx)(i,{className:"h-6 w-6 text-indigo-600"})}),(0,a.jsxs)("div",{className:"ml-4",children:[(0,a.jsx)("h3",{className:"text-xl font-semibold text-gray-900",children:"Notification Settings"}),(0,a.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"Configure email notifications and in-app alerts"})]})]})}),(0,a.jsxs)("div",{className:"px-6 py-6",children:[(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{className:"bg-gray-50 rounded-xl p-5",children:[(0,a.jsx)("h4",{className:"text-base font-semibold text-gray-900 mb-4",children:"Email Notifications"}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"flex items-start",children:[(0,a.jsx)("div",{className:"flex items-center h-5",children:(0,a.jsx)("input",{id:"email-appointment",name:"email",type:"checkbox",checked:e.notifications.email,onChange:s=>{t({...e,notifications:{...e.notifications,email:s.target.checked}})},className:"h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"})}),(0,a.jsxs)("div",{className:"ml-3",children:[(0,a.jsx)("label",{htmlFor:"email-appointment",className:"font-medium text-gray-800",children:"Appointment Reminders"}),(0,a.jsx)("p",{className:"text-sm text-gray-500",children:"Receive email notifications about upcoming appointments"})]})]}),(0,a.jsxs)("div",{className:"flex items-start",children:[(0,a.jsx)("div",{className:"flex items-center h-5",children:(0,a.jsx)("input",{id:"email-updates",name:"email-updates",type:"checkbox",checked:!0,onChange:()=>{},className:"h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"})}),(0,a.jsxs)("div",{className:"ml-3",children:[(0,a.jsx)("label",{htmlFor:"email-updates",className:"font-medium text-gray-800",children:"System Updates"}),(0,a.jsx)("p",{className:"text-sm text-gray-500",children:"Receive notifications about important system updates"}),(0,a.jsx)("p",{className:"text-xs text-gray-400 mt-1",children:"(Required for system administrators)"})]})]})]})]}),(0,a.jsxs)("div",{className:"bg-gray-50 rounded-xl p-5",children:[(0,a.jsx)("h4",{className:"text-base font-semibold text-gray-900 mb-4",children:"In-App Notifications"}),(0,a.jsx)("div",{className:"space-y-4",children:(0,a.jsxs)("div",{className:"flex items-start",children:[(0,a.jsx)("div",{className:"flex items-center h-5",children:(0,a.jsx)("input",{id:"inapp-notifications",name:"inApp",type:"checkbox",checked:e.notifications.inApp,onChange:s=>{t({...e,notifications:{...e.notifications,inApp:s.target.checked}})},className:"h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"})}),(0,a.jsxs)("div",{className:"ml-3",children:[(0,a.jsx)("label",{htmlFor:"inapp-notifications",className:"font-medium text-gray-800",children:"In-App Alerts"}),(0,a.jsx)("p",{className:"text-sm text-gray-500",children:"Show notifications within the application"})]})]})})]}),(0,a.jsxs)("div",{className:"bg-gray-50 rounded-xl p-5",children:[(0,a.jsx)("h4",{className:"text-base font-semibold text-gray-900 mb-4",children:"SMS Notifications"}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"flex items-start",children:[(0,a.jsx)("div",{className:"flex items-center h-5",children:(0,a.jsx)("input",{id:"sms-notifications",name:"sms",type:"checkbox",checked:e.notifications.sms,onChange:s=>{t({...e,notifications:{...e.notifications,sms:s.target.checked}})},className:"h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"})}),(0,a.jsxs)("div",{className:"ml-3",children:[(0,a.jsx)("label",{htmlFor:"sms-notifications",className:"font-medium text-gray-800",children:"SMS Alerts"}),(0,a.jsx)("p",{className:"text-sm text-gray-500",children:"Receive text messages for critical updates"})]})]}),e.notifications.sms&&(0,a.jsxs)("div",{className:"mt-3 pl-8",children:[(0,a.jsx)("label",{htmlFor:"phone-verify",className:"block text-sm font-medium text-gray-700 mb-1",children:"Verify Phone Number"}),(0,a.jsxs)("div",{className:"flex space-x-2",children:[(0,a.jsx)("input",{type:"text",id:"phone-verify",placeholder:s.phoneNumber||"Enter phone number",className:"shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"}),(0,a.jsx)("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:"Verify"})]})]})]})]})]}),(0,a.jsxs)("div",{className:"mt-8 flex justify-end",children:[j&&(0,a.jsxs)("div",{className:"mr-4 flex items-center px-3 py-2 rounded-md bg-green-50 text-green-700 border border-green-200",children:[(0,a.jsx)(c.A,{className:"h-5 w-5 mr-2 text-green-500"}),(0,a.jsx)("span",{className:"text-sm font-medium",children:j})]}),(0,a.jsx)("button",{type:"button",onClick:L,disabled:y,className:"flex items-center px-5 py-2.5 rounded-md text-sm font-medium shadow-sm ".concat(y?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700 text-white transform hover:translate-y-[-1px] transition-all"),children:y?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("svg",{className:"animate-spin h-4 w-4 mr-2 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Saving..."]}):"Save Preferences"})]})]})]}),"profile"===w&&(0,a.jsxs)("div",{className:"bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-500 transform",children:[(0,a.jsx)("div",{className:"px-6 py-5 bg-gradient-to-r from-indigo-50 to-blue-50",children:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"flex-shrink-0 bg-indigo-100 rounded-full p-2",children:(0,a.jsx)(n.A,{className:"h-6 w-6 text-indigo-600"})}),(0,a.jsxs)("div",{className:"ml-4",children:[(0,a.jsx)("h3",{className:"text-xl font-semibold text-gray-900",children:"User Profile"}),(0,a.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:"Manage your personal information"})]})]})}),(0,a.jsxs)("div",{className:"px-6 py-6",children:[(0,a.jsx)("div",{className:"bg-gray-50 rounded-xl p-6 mb-6",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-6",children:[(0,a.jsxs)("div",{className:"sm:col-span-3",children:[(0,a.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Full Name"}),(0,a.jsx)("input",{type:"text",name:"name",id:"name",value:s.name,onChange:M,className:"shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"})]}),(0,a.jsxs)("div",{className:"sm:col-span-3",children:[(0,a.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email Address"}),(0,a.jsx)("input",{type:"email",name:"email",id:"email",value:s.email,onChange:M,className:"shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"})]}),(0,a.jsxs)("div",{className:"sm:col-span-3",children:[(0,a.jsx)("label",{htmlFor:"role",className:"block text-sm font-medium text-gray-700 mb-1",children:"Role"}),(0,a.jsx)("input",{type:"text",name:"role",id:"role",value:s.role,onChange:M,className:"shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"})]}),(0,a.jsxs)("div",{className:"sm:col-span-3",children:[(0,a.jsx)("label",{htmlFor:"specialty",className:"block text-sm font-medium text-gray-700 mb-1",children:"Specialty"}),(0,a.jsx)("input",{type:"text",name:"specialty",id:"specialty",value:s.specialty,onChange:M,className:"shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"})]}),(0,a.jsxs)("div",{className:"sm:col-span-3",children:[(0,a.jsx)("label",{htmlFor:"organization",className:"block text-sm font-medium text-gray-700 mb-1",children:"Organization"}),(0,a.jsx)("input",{type:"text",name:"organization",id:"organization",value:s.organization,onChange:M,className:"shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"})]}),(0,a.jsxs)("div",{className:"sm:col-span-3",children:[(0,a.jsx)("label",{htmlFor:"phoneNumber",className:"block text-sm font-medium text-gray-700 mb-1",children:"Phone Number"}),(0,a.jsx)("input",{type:"text",name:"phoneNumber",id:"phoneNumber",value:s.phoneNumber,onChange:M,className:"shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"})]})]})}),(0,a.jsxs)("div",{className:"flex justify-end",children:[j&&(0,a.jsxs)("div",{className:"mr-4 flex items-center px-3 py-2 rounded-md bg-green-50 text-green-700 border border-green-200",children:[(0,a.jsx)(c.A,{className:"h-5 w-5 mr-2 text-green-500"}),(0,a.jsx)("span",{className:"text-sm font-medium",children:j})]}),(0,a.jsx)("button",{type:"button",onClick:L,disabled:y,className:"flex items-center px-5 py-2.5 rounded-md text-sm font-medium shadow-sm ".concat(y?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700 text-white transform hover:translate-y-[-1px] transition-all"),children:y?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("svg",{className:"animate-spin h-4 w-4 mr-2 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Saving..."]}):"Save Profile"})]})]})]}),(0,a.jsx)("div",{className:"mt-8",children:(0,a.jsx)("div",{className:"bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-sm border border-blue-100 text-center",children:(0,a.jsx)("p",{className:"text-base text-gray-600",children:"Additional settings functionality will be available in upcoming releases."})})})]})}},6678:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var a=s(12115);let r=a.forwardRef(function(e,t){let{title:s,titleId:r,...l}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},l),s?a.createElement("title",{id:r},s):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))})},29337:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var a=s(12115);let r=a.forwardRef(function(e,t){let{title:s,titleId:r,...l}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},l),s?a.createElement("title",{id:r},s):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"}))})},35695:(e,t,s)=>{"use strict";var a=s(18999);s.o(a,"useParams")&&s.d(t,{useParams:function(){return a.useParams}}),s.o(a,"usePathname")&&s.d(t,{usePathname:function(){return a.usePathname}}),s.o(a,"useRouter")&&s.d(t,{useRouter:function(){return a.useRouter}}),s.o(a,"useSearchParams")&&s.d(t,{useSearchParams:function(){return a.useSearchParams}})},37186:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var a=s(12115);let r=a.forwardRef(function(e,t){let{title:s,titleId:r,...l}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},l),s?a.createElement("title",{id:r},s):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"}),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))})},40058:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var a=s(12115);let r=a.forwardRef(function(e,t){let{title:s,titleId:r,...l}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},l),s?a.createElement("title",{id:r},s):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"}))})},42864:(e,t,s)=>{Promise.resolve().then(s.bind(s,1345))},64219:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var a=s(12115);let r=a.forwardRef(function(e,t){let{title:s,titleId:r,...l}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},l),s?a.createElement("title",{id:r},s):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"}))})},69994:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var a=s(12115);let r=a.forwardRef(function(e,t){let{title:s,titleId:r,...l}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},l),s?a.createElement("title",{id:r},s):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}))})},72227:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var a=s(12115);let r=a.forwardRef(function(e,t){let{title:s,titleId:r,...l}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},l),s?a.createElement("title",{id:r},s):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"}))})},86798:(e,t,s)=>{"use strict";s.d(t,{g:()=>r});var a=s(89644),r=function(e){return e.ADMIN="ADMIN",e.PROVIDER="PROVIDER",e.STAFF="STAFF",e.PATIENT="PATIENT",e.BILLING="BILLING",e.RESEARCHER="RESEARCHER",e}({});new a.Schema({firebaseUid:{type:String,required:!0,unique:!0},email:{type:String,required:!0,unique:!0},displayName:String,photoURL:String,role:{type:String,enum:Object.values(r),default:"PROVIDER"},specialty:String,organization:String,phoneNumber:String,npi:String,licenseNumber:String,licenseState:String,isActive:{type:Boolean,default:!0},permissions:{manageUsers:{type:Boolean,default:!1},manageTemplates:{type:Boolean,default:!1},viewReports:{type:Boolean,default:!1},createVisits:{type:Boolean,default:!0},editVisits:{type:Boolean,default:!0},deleteVisits:{type:Boolean,default:!1},managePatients:{type:Boolean,default:!0}},metadata:{lastLogin:Date,createdAt:Date,createdBy:{type:a.Schema.Types.ObjectId,ref:"User"},lastUpdated:Date,lastUpdatedBy:{type:a.Schema.Types.ObjectId,ref:"User"}},settings:{theme:{type:String,default:"light"},notifications:{email:{type:Boolean,default:!0},inApp:{type:Boolean,default:!0},sms:{type:Boolean,default:!1}},display:{compactView:{type:Boolean,default:!1},hideCompleted:{type:Boolean,default:!1},showTutorials:{type:Boolean,default:!0}}}},{timestamps:!0}).methods.hasPermission=function(e){return"ADMIN"===this.role||this.permissions&&!0===this.permissions[e]}},92071:(e,t,s)=>{"use strict";s.d(t,{A:()=>x});var a=s(95155),r=s(12115),l=s(6874),i=s.n(l),n=s(35695),o=s(69994),c=s(40058),d=s(72227),m=s(64219),h=s(94830);let u=r.forwardRef(function(e,t){let{title:s,titleId:a,...l}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},l),s?r.createElement("title",{id:a},s):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"}))});function x(e){let{title:t,breadcrumbs:s}=e,r=(0,n.usePathname)(),l="/dashboard"!==r,x=!r.includes("/patients/new");r.includes("/templates/new");let g=!r.includes("/visits/schedule")&&!r.includes("/dashboard-visits"),p=!r.includes("/patients")||r.includes("/patients/new"),f=!r.includes("/visits")&&!r.includes("/dashboard-visits")||r.includes("/visits/schedule"),b=!r.includes("/templates")||r.includes("/templates/new");return(0,a.jsxs)("div",{className:"mb-8",children:[(t||s)&&(0,a.jsxs)("div",{className:"mb-4",children:[t&&(0,a.jsx)("h1",{className:"text-2xl font-semibold text-gray-900",children:t}),s&&s.length>0&&(0,a.jsx)("nav",{className:"flex mt-1","aria-label":"Breadcrumb",children:(0,a.jsx)("ol",{className:"flex items-center space-x-2",children:s.map((e,t)=>(0,a.jsx)("li",{children:(0,a.jsxs)("div",{className:"flex items-center",children:[t>0&&(0,a.jsx)("svg",{className:"h-5 w-5 flex-shrink-0 text-gray-300",fill:"currentColor",viewBox:"0 0 20 20","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M5.555 17.776l8-16 .894.448-8 16-.894-.448z"})}),(0,a.jsx)(i(),{href:e.href,className:"ml-2 text-sm font-medium ".concat(e.current?"text-gray-700":"text-gray-500 hover:text-gray-700"),"aria-current":e.current?"page":void 0,children:e.name})]})},e.href))})})]}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-2",children:[l&&(0,a.jsxs)(i(),{href:"/dashboard",className:"inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50",children:[(0,a.jsx)(o.A,{className:"-ml-1 mr-2 h-5 w-5 text-gray-500"}),"Dashboard"]}),x&&(0,a.jsxs)(i(),{href:"/patients/new",className:"inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50",children:[(0,a.jsx)(c.A,{className:"-ml-1 mr-2 h-5 w-5 text-gray-500"}),"Add Patient"]}),g&&(0,a.jsxs)(i(),{href:"/dashboard-visits?new=true",className:"inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50",children:[(0,a.jsx)(d.A,{className:"-ml-1 mr-2 h-5 w-5 text-gray-500"}),"Schedule Visit"]}),p&&(0,a.jsxs)(i(),{href:"/patients",className:"inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50",children:[(0,a.jsx)(m.A,{className:"-ml-1 mr-2 h-5 w-5 text-gray-500"}),"Patients"]}),f&&(0,a.jsxs)(i(),{href:"/dashboard-visits",className:"inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50",children:[(0,a.jsx)(h.A,{className:"-ml-1 mr-2 h-5 w-5 text-gray-500"}),"Visits"]}),b&&(0,a.jsxs)(i(),{href:"/templates",className:"inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50",children:[(0,a.jsx)(u,{className:"-ml-1 mr-2 h-5 w-5 text-gray-500"}),"Templates"]})]})]})}},94830:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var a=s(12115);let r=a.forwardRef(function(e,t){let{title:s,titleId:r,...l}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},l),s?a.createElement("title",{id:r},s):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"}))})}},e=>{var t=t=>e(e.s=t);e.O(0,[6176,6874,8441,1684,7358],()=>t(42864)),_N_E=e.O()}]);