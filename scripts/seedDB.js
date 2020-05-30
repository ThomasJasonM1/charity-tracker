const mongoose = require("mongoose");
const Charity = require("../models/Charity");
const User = require("../models/User");


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/charityTracker"
);

const charitySeed = [
  {
    ein: '751785357',
    isDonationPartner: true,
    isVolunteerPartner: true,
    contact: {
      firstName: 'Ashley',
      lastName: 'VandenBush',
      email: 'info@ntfb.org',
      phone: '2143301396',
    },
    howWeCanHelp: 'Here are the most effective ways to help:Donate funds by visiting ntfb.org/donate. Every dollar donated provides 3 meals! Host a virtual fundraiser so others can give too! Click here to learn more and get started.Donate food. Folks can drop off food donations by following these directions or by purchase items from our Amazon Wishlist. Raise awareness about our need and how folks can help through our Virtual Volunteer program. Visit https://ntfb.org/virtualvolunteer/ to learn more.',
    events: [],
  },
  {
    ein: '751892059',
    isDonationPartner: true,
    isVolunteerPartner: true,
    contact: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '2145215124',
    },
    howWeCanHelp: 'Since the outbreak of COVID-19, we have put in place a series of changes to our services in order to best serve the LGBTQ and HIV communities who are at high risk during this time. All COVID-19 related updates and services can be found here.',
    events: [],
  },

];

const userSeed = [
  {
    firstName: 'Elmer',
    lastName: 'Fudd',
    email: 'killwabbits@gmail.com',
    phone: '5551234567',
    image: 'https://fsb.zobj.net/crop.php?r=-kzh-IEWgl4F1_qyPwo8N3LTmpOssS91bRHBy7D5QCCC02a4Y-9uttqqtPQyMPV_vgGEDPfGxLzf1J_BVY8FSooD4nkHpqeBMKe6mM1ddZOV-dGgbuIFimcmWTzRsIaLT8aWdoZqhWV6vSvc',
    username: 'fuddyDuddy',
    password: 'hunt!ngW@bb!t$',
  }
];

Charity.remove({})
  .then(() => Charity.collection.insertMany(charitySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

User.remove({})
.then(() => User.collection.insertMany(userSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});