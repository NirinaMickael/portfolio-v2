export const Transition = {
  hidden: { opacity: 0.1, y: `-5vh` },
  visible: {
    opacity: 1,
    y: 0,
  },
};
export const Rounded = {
  hidden: { opacity: 1, scale: 0, y: "-10vh" },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.3,
    },
  },
};
export const FadeOut = {
  hidden: { opacity: 0.3 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.3,
    },
  },
};
export const Chat = {
  hidden: { opacity: 0.3 , x : "20vw"},
  visible: {
    opacity: 1,
    x:0
  },
};
export const Item = {
  hidden: { x:"-20vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};
