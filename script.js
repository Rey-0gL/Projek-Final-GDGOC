
function showTab(tabId) {

    const contents = document.getElementsByClassName("tab-content");
    for (let content of contents) {
        content.style.display = "none";
    }

    const buttons = document.getElementsByClassName("tab-btn");
    for (let btn of buttons) {
        btn.classList.remove("active");
    }

    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.style.display = "block";
    }

    event.currentTarget.classList.add("active");
    
    console.log("Navigating to: " + tabId);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("defaultOpen").click();
    console.log("Violence District Guide Database Loaded Successfully.");
});