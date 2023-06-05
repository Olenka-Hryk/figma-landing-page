const toast = document.getElementById("toast");
const toastIcon = document.getElementById("toast-icon");
const toastContent = document.getElementById("toast-content");
const toastStatus = document.getElementById("toast-status");
const toastMessage = document.getElementById("toast-message");


const TOAST_CONFIG = {
    success: {
        status: "Well done!",
        className: "toast--success",
        icon: "/image/ui-icon/toast-success.png"
    },
    info: {
        status: "Heads up!",
        className: "toast--info",
        icon: "/image/ui-icon/toast-info.png"
    },
    warning: {
        status: "Warning!",
        className: "toast--warning",
        icon: "/image/ui-icon/toast-warning.png"
    },
    error: {
        status: "Oh snap!",
        className: "toast--error",
        icon: "/image/ui-icon/toast-error.png"
    }
}


function showToast(status, message) {
    const config = TOAST_CONFIG[status];
    if (!config) {
        throw new Error("Unknown status for toast");
    }
    toast.setAttribute("class", `toast ${config.className} show`);
    toastIcon.setAttribute('src', config.icon);
    toastStatus.innerText = config.status;
    toastMessage.innerText = message;
    setTimeout(() => {
        toastContent.style.visibility = "visible";
    }, 800);
    setTimeout(() => {
        toastContent.style.visibility = "hidden";
    }, 4000);
    setTimeout(function () {
        toast.className = toast.className.replace(`${config.className} show`, "");
    }, 5000);
}