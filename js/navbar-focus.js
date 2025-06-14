document.querySelectorAll('#navbar .js-scroll-trigger').forEach(link => {
  const handleNavigation = (event) => {
    const isKeyboard = event.type === 'keydown' && (event.key === 'Enter' || event.key === ' ');

    if (event.type === 'click' || isKeyboard) {
      event.preventDefault();

      const targetSectionId = link.getAttribute('href').substring(1);
      const section = document.getElementById(targetSectionId);

      // ID del título asumido como: sectionId + 'Title'
      const titleId = `${targetSectionId}Title`;
      const titleElement = document.getElementById(titleId);

      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });

        setTimeout(() => {
          if (titleElement) {
            const hadTabindex = titleElement.hasAttribute('tabindex');
            if (!hadTabindex) {
              titleElement.setAttribute('tabindex', '-1');
            }

            titleElement.focus({ preventScroll: true });

            if (!hadTabindex) {
              titleElement.removeAttribute('tabindex');
            }
          }
        }, 400);
      }
    }
  };

  link.addEventListener('click', handleNavigation);
  link.addEventListener('keydown', handleNavigation);
});
