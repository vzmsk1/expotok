const handleDummyHeight = () => {
  const dummy = document.querySelector(".dummy");

  if (dummy.offsetHeight > window.innerHeight) {
    document.documentElement.style.removeProperty("overflow");
  } else {
    document.documentElement.style.overflow = "hidden";
  }
};
handleDummyHeight();

window.addEventListener("resize", handleDummyHeight);
