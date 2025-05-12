export const useHandleScrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

export const useHandleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
