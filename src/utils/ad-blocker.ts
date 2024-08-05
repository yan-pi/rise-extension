export function blockAds(): void {
  const adElements = document.querySelectorAll(".ad, .advertisement");
  adElements.forEach((element) => {
    element.remove();
  });
}
