const tab_services = function () {
  const btnsContainer = document.querySelector(".box-buttons-tab");
  const tabs = document.querySelectorAll(".tab");

  if (!btnsContainer || !tabs) return;
  btnsContainer.addEventListener("click", (e) => {
    const btnClick = e.target.closest("button.btn-tab");
    if (!btnClick) return;
    document.querySelectorAll(".btn-tab").forEach((btn) => {
      btn.classList.remove("active");
      btnClick.classList.add("active");
    });
    const tabActive = +btnClick.dataset.tab;
    tabs.forEach((tab) => {
      tab.classList.remove("tab-active");
      document.querySelector(`.tab-${tabActive}`).classList.add("tab-active");
    });
  });
};
tab_services();
