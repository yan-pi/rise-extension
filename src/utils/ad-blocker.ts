export class AdBlocker {
  blockAds(): void {
    // Implementação simplificada de bloqueio de anúncios
    const adElements = document.querySelectorAll('.ad, .advertisement');
    adElements.forEach((element) => {
      element.remove();
    });
  }
}