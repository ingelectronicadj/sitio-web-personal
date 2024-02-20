document.addEventListener('DOMContentLoaded', () => {
    const certificateLinks = document.querySelectorAll('.link-new-window');

    function openLink(event) {
        event.preventDefault();
        const url = this.getAttribute('href');
        const width = 1000;
        const height = 700;
        const left = (screen.availWidth / 2 - width / 2);
        const top = (screen.availHeight / 2 - height / 2);
        window.open(url, '', `location=yes,scrollbars=yes,resizable=yes,width=${width},height=${height},left=${left},top=${top}`);
    }

    certificateLinks.forEach(link => {
        link.addEventListener('click', openLink);
    });
});