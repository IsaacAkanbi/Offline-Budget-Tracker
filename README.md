# Offline-Budget-Tracker
Progressive Web Application (PWA) Concept

# Description

This budget tracking app is built to allow online and offline of keeping track of your financial transactions. This exceptional feature means you do not need to worry about connectivity, as you can continue tracking your expenses on the go where ever life takes you. 

Users are able to add transactions, corresponding amounts and either add or substract from the budget. Total budget is always displayed on the top of the page and a graphical representation of the history of transactions. There is also a tabular presentation of the list of items on the transaction and the amount for each. 

When offline, the application is still functional and users are able to continue adding transactions and the application's behaviour is unchanged - either offline or online.  



# Technical Details

This app is built with the concept of Progressive Web Application (PWA) which is an application software that utilizes web technologies such as HTML, CSS and JavaScript, through emerging web brower API and progressive enhancement. The basic components of this concept are manifest, service-worker and cache. 

When offline, the entries are saved in indexedDB (through a function called 'saveRecord'), and once connection is restored and application refreshed these items are added to the cache storage. 


The devOp structure are :

 `` models (transactions.js), 

 `` public (db.js, index.html, index.js, manifest.webmanifest, service-worker.js), 

 ``routes (api.js), 

 `` server.js 


## Pages

Deployment page (Heroku): https://nameless-spire-14609.herokuapp.com/ 

Github repository : https://github.com/IsaacAkanbi/Offline-Budget-Tracker 

