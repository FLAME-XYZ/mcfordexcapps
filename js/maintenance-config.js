const maintenanceConfig = {
    enabled: true,
    allowedIPs: ['127.0.0.1'],
    endDate: '2025-06-27T23:59:59',
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
