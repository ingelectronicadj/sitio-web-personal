document.addEventListener("DOMContentLoaded", () => {
  const certificateLinks = document.querySelectorAll(".link-new-window");

  function openLink(event) {
    event.preventDefault();
    const url = this.getAttribute("href");
    const width = 1000;
    const height = 700;
    // Dual monitor support
    const dualScreenLeft =
      window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop =
      window.screenTop !== undefined ? window.screenTop : window.screenY;

    const widthToUse = window.innerWidth
      ? window.innerWidth
      : document.documentElement.clientWidth
        ? document.documentElement.clientWidth
        : screen.width;
    const heightToUse = window.innerHeight
      ? window.innerHeight
      : document.documentElement.clientHeight
        ? document.documentElement.clientHeight
        : screen.height;

    const left = dualScreenLeft + (widthToUse - width) / 2;
    const top = dualScreenTop + (heightToUse - height) / 2;

    window.open(
      url,
      "_blank",
      `location=yes,scrollbars=yes,resizable=yes,width=${width},height=${height},left=${left},top=${top}`,
    );
  }

  certificateLinks.forEach((link) => {
    link.addEventListener("click", openLink);
  });
});
