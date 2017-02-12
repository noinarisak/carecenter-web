/* jshint -W079, -W101*/
var mockData = (function() {
  return {
    getMockPeople: getMockPeople,
    getMockOrganization: getMockOrganization,
    getMockStates: getMockStates
  };

  function getMockStates() {
    return [
      {
        state: 'dashboard',
        config: {
          url: '/',
          templateUrl: 'app/dashboard/dashboard.html',
          title: 'dashboard',
          settings: {
            nav: 1,
            content: '<i class="fa fa-dashboard"></i> Dashboard'
          }
        }
      }
    ];
  }

  function getMockPeople() {
    return [
      { firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
      { firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
      { firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
      { firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
      { firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
      { firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
      { firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' }
    ];
  }

  //jscs:disable maximumLineLength
  function getMockOrganization() {
    return [
      { name:'Mynte', description:'Excision of Left Innominate Vein Perc Approach, Diagn', webURL:'sbwire.com', services:[{ name:'Male', lat:'50.16819', long:'14.05458' }]},
      { name:'Voonix', description:'Destruction of L Acromioclav Jt, Perc Endo Approach',webURL:'webeden.co.uk',services:[{name:'Female',lat:'56.5515',long:'14.1383'}]},
      { name:'Skyble', description:'Excision of Thoracic Spinal Cord, Perc Endo Approach',webURL:'theglobeandmail.com',services:[{name:'Female',lat:'30.95128',long:'114.9678'}]},
      { name:'Twinder', description:'Insertion of Pace Lead into Cor Vein, Perc Endo Approach',webURL:'freewebs.com',services:[{name:'Female',lat:'53.38922',long:'17.68713'}]},
      { name:'Oyope', description:'Dilate of R Peroneal Art with 4+ Intralum Dev, Perc Approach',webURL:'shop-pro.jp',services:[{name:'Male',lat:'-25.34806',long:'-54.23778'}]},
      { name:'Bluezoom', description:'Destruction of Right Eustachian Tube, Open Approach',webURL:'fema.gov',services:[{name:'Male',lat:'39.5694',long:'2.6502'}]},
      { name:'Roodel', description:'Extirpation of Matter from Thoracic Duct, Open Approach',webURL:'de.vu',services:[{name:'Male',lat:'29.80028',long:'72.17583'}]},
      { name:'Flashdog', description:'HDR Brachytherapy of Mouth using Palladium 103',webURL:'nydailynews.com',services:[{name:'Female',lat:'33.3',long:'130.36667'}]},
      { name:'Jaxspan', description:'Occlusion R Hypogast Vein w Intralum Dev, Open',webURL:'imgur.com',services:[{name:'Female',lat:'50.94177',long:'20.42135'}]},
      { name:'Viva', description:'Drainage of Right Hand Artery, Perc Endo Approach, Diagn',webURL:'ocn.ne.jp',services:[{name:'Female',lat:'-7.2557',long:'108.8729'}]}
    ];
  }
  //jscs:enable maximumLineLength

})();
