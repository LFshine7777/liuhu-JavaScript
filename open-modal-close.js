// 保存打开的弹窗顺序
let openedModals = [];

// 打开弹窗
document.querySelectorAll("[data-lh-open]").forEach((button) => {
  button.addEventListener("click", function () {
    const modalKey = this.getAttribute("data-lh-open");
    const modal = document.querySelector(`[data-lh-modal="${modalKey}"]`);
    if (modal && !openedModals.includes(modal)) {
      modal.style.display = "block"; // 显示弹窗
      openedModals.push(modal); // 记录已打开的弹窗
    }
  });
});

// 关闭弹窗
document.querySelectorAll("[data-lh-close]").forEach((closeButton) => {
  closeButton.addEventListener("click", function () {
    const modalKey = this.getAttribute("data-lh-close");
    const modal = document.querySelector(`[data-lh-modal="${modalKey}"]`);
    if (modal) {
      modal.style.display = "none"; // 隐藏弹窗
      openedModals = openedModals.filter((m) => m !== modal); // 移除记录
    }
  });
});

// 点击弹窗外部关闭弹窗
window.addEventListener("click", function (event) {
  const isOutsideClick =
    !event.target.closest("[data-lh-modal]") &&
    !event.target.closest("[data-lh-open]");
  if (isOutsideClick && openedModals.length > 0) {
    // 关闭最后一个打开的弹窗
    const lastOpenedModal = openedModals.pop();
    lastOpenedModal.style.display = "none";
  }
});
