import {
  ITUserRemark,
  ITEmoji,
  ITLink,
  ITSroll,
  ITCard,
  ITAction,
  IMessage,
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
    label: "Portfolio",
  },
  {
    id: 1,
    isActive: false,
    label: "My work",
  },
  {
    id: 2,
    isActive: false,
    label: "Contact",
  },
  {
    id: 3,
    isActive: false,
    label: "Remark",
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
        url:"https://github.com/NirinaMickael"
      },
      {
        id: 1,
        label: "Demo",
        url: "https://front-chat-chi.vercel.app/",
      },
    ],
    tecno: [
      {
        id: 0,
        label: "Angular",
        image: "/angular.svg",
      },
      {
        id: 1,
        label: "Mongo",
        image: "/mongo.svg",
      },
      {
        id: 2,
        label: "Node",
        image: "/node.svg",
      },
      {
        id: 3,
        label: "bootstrap",
        image: "/boostra.svg",
      },
    ],
    description:
      "Simple chat application,user can send and receive messages at the same time, and can change his profile picture",
  },
  {
    id: 1,
    image: "/todo.gif",
    actions: [
      {
        id: 0,
        label: "Github",
        url:"https://github.com/NirinaMickael"
      },
      {
        id: 1,
        label: "Demo",
        url: "/eyes.svg",
      },
    ],
    tecno: [
      {
        id: 0,
        label: "React",
        image: "/react.svg",
      },
      {
        id: 1,
        label: "Firebase",
        image: "/firebase.svg",
      },
      {
        id: 2,
        label: "Tailwind",
        image: "/tailwind.svg",
      },
    ],
    description:
      "Todo list, new design and more functionality, dynamic. Which uses techno reactTs and firebase to store data",
  },
  {
    id: 2,
    image: "/sudoku.gif",
    actions: [
      {
        id: 0,
        label: "Github",
        url:"https://github.com/NirinaMickael"
      },
      {
        id: 1,
        label: "Demo",
        url: "/eyes.svg",
      },
    ],
    tecno: [
      {
        id: 0,
        label: "Sudoku",
        image: "/js.svg",
      },
      {
        id: 1,
        label: "Css",
        image: "/css.svg",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia soluta repudiandae ipsa adipisci, voluptatibus ea nobis necessitatibus maxime minima qui autem veritatis odit itaque quia commodi cumque magnam neque delectus",
  },
  {
    id: 2,
    image: "./v1.gif",
    actions: [
      {
        id: 0,
        label: "Github",
        url:"https://github.com/NirinaMickael"
      },
      {
        id: 1,
        label: "Demo",
        url: "http://mickaelnirina.orgfree.com",
      },
    ],
    tecno: [
      {
        id: 0,
        label: "js",
        image: "/js.svg",
      },
      {
        id: 1,
        label: "Css",
        image: "/css.svg",
      }
    ],
    description:
      "this is my first project , I only use basic languages ​​for website creation like html/css and js",
  }
];

export const Message: IMessage[] = [
  {
    id: 0,
    isOther: false,
    message: "hey!!",
  },
  {
    id: 1,
    isOther: false,
    message: "we are so glad to chat with you",
  },
];
