import {
  ITUserRemark,
  ITEmoji,
  ITLink,
  ITSroll,
  ITCard,
  ITAction,
} from "./../model/ITData";

export const Emoji: ITEmoji[] = [
  {
    id: 0,
    emoji: "😀",
  },
  {
    id: 1,
    emoji: "🤣",
  },
  {
    id: 2,
    emoji: "❤️️",
  },
  {
    id: 3,
    emoji: "👍",
  },
];
export const UserRemark: ITUserRemark[] = [
  {
    id: 1,
    name: "Kevin",
    email: "koto@gmail.com",
    remark: "on sjknqoqjwnjn ",
  },
  {
    id: 1,
    name: "Kevin",
    email: "koto@gmail.com",
    remark: "on sjknqoqjwnjn ",
  },
  {
    id: 1,
    name: "Kevin",
    email: "koto@gmail.com",
    remark: "on sjknqoqjwnjn ",
  },
  {
    id: 1,
    name: "Kevin",
    email: "koto@gmail.com",
    remark: "on sjknqoqjwnjn ",
  },
  {
    id: 1,
    name: "Kevin",
    email: "koto@gmail.com",
    remark: "on sjknqoqjwnjn ",
  },
  {
    id: 1,
    name: "Kevin",
    email: "koto@gmail.com",
    remark: "on sjknqoqjwnjn ",
  },
  {
    id: 1,
    name: "Kevin",
    email: "koto@gmail.com",
    remark: "on sjknqoqjwnjn ",
  },
  {
    id: 1,
    name: "Kevin",
    email: "koto@gmail.com",
    remark: "on sjknqoqjwnjn ",
  },
  {
    id: 1,
    name: "Kevin",
    email: "koto@gmail.com",
    remark: "on sjknqoqjwnjn ",
  },
  {
    id: 1,
    name: "Kevin",
    email: "koto@gmail.com",
    remark: "on sjknqoqjwnjn ",
  },
  {
    id: 1,
    name: "Kevin",
    email: "koto@gmail.com",
    remark: "on sjknqoqjwnjn ",
  },
  {
    id: 1,
    name: "Kevin",
    email: "koto@gmail.com",
    remark: "on sjknqoqjwnjn ",
  },
  {
    id: 1,
    name: "Kevin",
    email: "koto@gmail.com",
    remark: "on sjknqoqjwnjn ",
  },
  {
    id: 1,
    name: "Kevin",
    email: "koto@gmail.com",
    remark: "on sjknqoqjwnjn ",
  },
];

export const Links: ITLink[] = [
  {
    id: 0,
    isActive: true,
    label: "Home",
  },
  {
    id: 1,
    isActive: false,
    label: "About",
  },
  {
    id: 2,
    isActive: false,
    label: "My work",
  },
  {
    id: 3,
    isActive: false,
    label: "Contact",
  },
];

export const Cards: ITCard[] = [
  {
    id: 0,
    image: "/giphy.gif",
    actions: [
      {
        id: 0,
        label: "Github",
        icon:"/github-.svg"
      },
      {
        id: 1,
        label: "Demo",
        icon:"/eyes.svg"
      },
    ],
    tecno : [
      {
        id: 0,
        label: "Angular",
        image :"/angular.svg"
      },
      {
        id: 1,
        label: "Mongo",
        image:"/mongo.svg"
      },
      {
        id: 2,
        label: "Node",
        image:"/node.svg"
      },
      {
        id : 3 ,
        label:'bootstrap',
        image:'/boostra.svg'
      }
    ],
    description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia soluta repudiandae ipsa adipisci, voluptatibus ea nobis necessitatibus maxime minima qui autem veritatis odit itaque quia commodi cumque magnam neque delectus"
  },
  {
    id: 1,
    image: "/todo.gif",
    actions: [
      {
        id: 0,
        label: "Github",
        icon:"/github-.svg"
      },
      {
        id: 1,
        label: "Demo",
        icon:"/eyes.svg"
      },
    ],
    tecno : [
      {
        id: 0,
        label: "React",
        image :"/react.svg"
      },
      {
        id: 1,
        label: "Firebase",
        image:"/firebase.svg"
      },
      {
        id: 2,
        label: "Tailwind",
        image:"/tailwind.svg"
      }
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia soluta repudiandae ipsa adipisci, voluptatibus ea nobis necessitatibus maxime minima qui autem veritatis odit itaque quia commodi cumque magnam neque delectus",
  },
  {
    id: 2,
    image: "/sudoku.gif",
    actions: [
      {
        id: 0,
        label: "Github",
        icon:"/github-.svg"
      },
      {
        id: 1,
        label: "Demo",
        icon:"/eyes.svg"
      },
    ],
    tecno : [
      {
        id: 0,
        label: "Sudoku",
        image :"/js.svg"
      },
      {
        id: 1,
        label: "Css",
        image:"/css.svg"
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia soluta repudiandae ipsa adipisci, voluptatibus ea nobis necessitatibus maxime minima qui autem veritatis odit itaque quia commodi cumque magnam neque delectus",
  },
];
