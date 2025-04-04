export const useUtilities = () => {
  const loadBigMenu = () => {
    document.getElementById('header').style.top = '0';
    document.getElementById('logo').style.top = '-20px';
    document.getElementById('sm-logo').style.top = '-200px';
    document.getElementById('nav-container').style.height = '150px';
    document.getElementById('nav-container').style.alignContent = 'center';
    document.getElementById('nav-container').style.top = '0px';
  };

  const loadSmallMenu = () => {
    document.getElementById('header').style.top = '-85px';
    document.getElementById('logo').style.top = '-300px';
    document.getElementById('sm-logo').style.top = '40px';
    document.getElementById('nav-container').style.height = '120px';
    document.getElementById('nav-container').style.alignContent = 'end';
    document.getElementById('nav-container').style.top = '42px';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const isMediumScreen = () => {
    return window.innerWidth >= 501; // Adjust the range for medium screen sizes
  };

  return {
    loadBigMenu,
    loadSmallMenu,
    isMediumScreen,
    scrollToTop,
  };
};
