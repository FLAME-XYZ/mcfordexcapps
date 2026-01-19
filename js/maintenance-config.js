const maintenanceConfig = {
    enabled: false,
    allowedIPs: ['127.0.0.1'],
    endDate: '2026-01-19T15:00:00',
};

function checkMaintenance() {
    if (maintenanceConfig.enabled) {
        const currentPage = window.location.pathname.split('/').pop();
        
        if (currentPage !== '/launching.html') {

            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    const userIP = data.ip;
                    if (!maintenanceConfig.allowedIPs.includes(userIP)) {

                        window.location.href = '/launching.html';
                    }
                })
                .catch(() => {

                    window.location.href = '/launching.html';
                });
        }
    }
}
document.addEventListener('DOMContentLoaded', checkMaintenance);
