function loadAllNotifications() {
    const loadAllNotifications = document.querySelector('.load-all-notifications');
    const moreNotifications = document.querySelector('.more-notifications');
    const mainContent = document.getElementById('main');

    loadAllNotifications.style.display = 'none';
    moreNotifications.style.display = 'block';
    mainContent.style.height = 'auto';
}