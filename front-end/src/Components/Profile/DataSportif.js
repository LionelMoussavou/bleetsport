export const FilterData = [
  {
    id: 0,
    firstName: "Oceane",
    name: "BISON",
    icon: "run",
    photo: require("../../../assets/Images/Home/Femme1.jpg"),
    addess: "2 Square Vendetta",
    city: "Paris",
    cp: "75015",
    date: "09 mai",
    heure: "14:00-16:00",

    nbParticipated: 4,
  },
  {
    id: 1,
    name: "Soccer",
    icon: "soccer",
    userName: "Lionel-Fullstack",
    image: require("../../../assets/Images/Home/Homme2.jpg"),
    sport: "Baseball",
    date: "14 fevrier",
    heure: "10:00-14:00",
    addess: "20 Boulevard Hellas",
    city: "Paris",
    cp: "75005",
    nbParticipated: 5,
  },
  {
    id: 2,
    name: "Tennis",
    icon: "tennis",
    userName: "Binjamin-",
    image: require("../../../assets/Images/Home/Homme3.jpg"),
    sport: "Rugby",
    date: "02 mars",
    heure: "16:00-20:00",
    addess: "2 Square Vendetta",
    city: "Paris",
    cp: "75015",
    nbParticipated: 4,
  },
  {
    id: 3,
    name: "Basketball",
    icon: "basketball",
    icon: "surfing",
    userName: "Dany",
    image: require("../../../assets/Images/Home/Femme1.jpg"),
    sport: "Soccer",
    date: "10 juin",
    heure: "14:30-16:30",
    addess: "10 Avenue Foch",
    city: "Saint-Denis",
    cp: "93295",
    nbParticipated: 2,
  },
];

export const UserData = [
  {
    id: 0,
    name: "BISON",
    firstName: "Oceane",
    photo: require("../../../assets/Images/Home/Femme1.jpg"),
    addess: "2 Square Vendetta",
    city: "Paris",
    cp: "75015",
    mail: "oceane@gmail.com",
    password: "Oceane2022",
    sport: [
      {
        idSport: 0,
        nameSport: "Surf",
        icon: "surfing",
      },
      {
        idSport: 1,
        nameSport: "Rugby",
        icon: "rugby",
      },
      {
        idSport: 2,
        nameSport: "Basketball",
        icon: "basketball",
      },
      {
        idSport: 3,
        nameSport: "Tennis",
        icon: "tennis",
      },
    ],
  },
  {
    id: 1,
    name: "TIKOUE",
    firstName: "Brand",
    photo: null,
    //photo: require("../../../assets/Images/Home/Homme1.jpg"),
    addess: "32 General Leclerc",
    city: "Clichy",
    cp: "92110",
    mail: "brande@gmail.com",
    password: "Brand2022",
    sport: [
      {
        idSport: 0,
        name: "Soccer",
        icon: "soccer",
      },
      {
        idSport: 1,
        nameSport: "Rugby",
        icon: "rugby",
      },
      {
        idSport: 2,
        nameSport: "Basketball",
        icon: "basketball",
      },
      {
        idSport: 3,
        name: "Bodybuilding",
        icon: "weight-lifter",
      },
    ],
  },
];