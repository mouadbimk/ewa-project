const tab_services = function () {
  const btnsContainer = document.querySelector(".box-buttons-tab");
  const tabs = document.querySelectorAll(".tab");

  if (!btnsContainer || !tabs) return;
  btnsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest("button.btn-tab");
    if (!btn) return;
    document.querySelectorAll(".btn-tab").forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    const tabActive = +btn.dataset.tab;
    tabs.forEach((tab) => {
      tab.classList.remove("tab-active");
      document.querySelector(`.tab-${tabActive}`).classList.add("tab-active");
    });
  });
};
tab_services();
