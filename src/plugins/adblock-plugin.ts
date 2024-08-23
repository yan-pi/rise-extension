import { Plugin } from '../interfaces/plugin-interface';

interface ClassToProcess {
  selector: string;
  classNamePart: string;
  displayHide: boolean;
}

export const AdBlockerPlugin = (): Plugin => {
  const classesToProcess: ClassToProcess[] = [
    { selector: 'div', classNamePart: 'marquee', displayHide: true },
    { selector: 'uni-view', classNamePart: 'jackpot', displayHide: true }
  ];

  const classesToRemove: string[] = [
    'app-banner-border', 'marquee', 'AppBaixar', 'fp-drag-', 'game-swiper-body-',
    'swiper-horizontal', 'common-banner', 'notic-user-tip-warp', 'common-jackpot',
    'jackpot-quickenter', 'insbtn', 'kefubtn', 'bxindex', 'pofswp', 'bobao',
    'swiper-box', 'uni-margin-wrap', 'uni-swiper-slides', 'noticess', 'videoContainer',
    'game-tab-Tv5b2', 'contentAndroid', 'floatBox', 'slide-group', 'list-slide-group',
    'download-ios', 'header-time-', 'jackpot-quick', 'jack-box', 'danmus',
    'common-jackpot-card-', 'app-download', 'top-banner-frame', 'menu-button',
    'kefuBox', 'headerDownloadBox', 'downloadItem', 'indextongzhu', 'xiazaippp',
    'headerDownloadBox', 'top2s', 'winner-item', 'download-tips-top', 'service-icon',
    'notice-view', 'download-icon', 'emblaBanner', 'emblaContainer', 'fixed-icon',
    'shake-icon', 'add-to-desktop', 'TopDownLoad', 'normalSwiper', 'message-box',
    'number-count', 'pAa1CCxkvvHGQXbBsNFj', 'FgLD2AWEBHoBZhoItE6Q', 'PM7rjKYzufGxbLumLbeV',
    'ITNBVjxxuF9MRBjgYsnh', 'S4yb1bzpXCmFehhh77Dl', 'Y77JbFMnxjW1NqbJ8h74',
    'D1XCMWEUkHUfrifO5mnt', 'xDX7a7M9Oo9s7pnfKQUo', 'ZJcF1uQglN5AIUM7Yrkc',
    'mBXV3MzVN0rqUe2aNQwv', 'cpqeg5qFAnjaLAZa7u1y', '_pot_container_', '_floatInHome_',
    '_swipers_', '_poolsBg_', '_noticeList_', 'van-notice-bar', 'swiper_box',
    'count_list', 'swiper_pc', 'mem_box', 'notice_root', 'app_down', 'notice_text',
    'br_right_bar', 'index_notice', 'psmtc_', 'I2_iYLYYG250ofYSsMLU', 'HzLBVwTAr8vh_Ocr1Mne',
    'lEMmZjtXJGUAzu5aX_sj', '_VQdc8vOEOzzyOEUKmvZ'
  ];

  const idsToRemove: string[] = [
    'js_banner', 'js_notice', 'js_jackpot', 'jackPot', 'h5ScrollContainer',
    'MobileTopDownloadDom', 'suggest-download', 'pwa-bar', 'meiqia-container',
    'fb-root', 'pc_time', 'indexbr_box', 'scqGYv', 'topDown'
  ];

  const attributesToRemove: string[] = [
    '[data-type="MobilePddTurntablePopup"]', '[data-type="WebPddTurntablePopup"]',
    '[data-type="NotiftPopup"]', '[data-v-c1995e97]', '[data-v-734b3821]',
    '[data-v-812c107f]', '[data-v-b1f9c970]', '[data-v-c0ca9c41]', '[data-v-92bf5d4a]',
    '[data-v-2a1f5a95]', '[data-v-267b0780]', '[data-v-ced63400]', '[data-v-ea95bab2]',
    '.notice.flex', '[data-type="MobileTopDownloadPopup"]', '.jackpot', '.support',
    '.game-banner.isHomePage', '.van-swipe.home-banner', '.swiper-container.van-swipe',
    'uni-swiper', '[data-v-271b39c8]', '[data-v-d5374c67]', '[data-v-a152fbc9]',
    '[data-v-fa872e8a]', '[data-v-d39bc0be]', 'video', 'audio'
  ];

  const removeElements = (doc: Document, selector: string): void => {
    doc.querySelectorAll(selector).forEach(element => element.remove());
  };

  const hideAndCleanClasses = (doc: Document): void => {
    classesToProcess.forEach(({ selector, classNamePart, displayHide }) => {
      doc.querySelectorAll(selector).forEach(element => {
        element.classList.forEach(className => {
          if (className.includes(classNamePart)) {
            if (displayHide) {
              (element as HTMLElement).style.display = 'none';
            }
            element.classList.remove(className);
          }
        });
      });
    });
  };

  const processDocument = (doc: Document): void => {
    hideAndCleanClasses(doc);
    classesToRemove.forEach(cls => removeElements(doc, `[class*="${cls}"]`));
    idsToRemove.forEach(id => removeElements(doc, `[id*="${id}"]`));
    attributesToRemove.forEach(attr => removeElements(doc, attr));

    if (doc.body) {
      doc.body.style.overflow = '';
    }
  };

  const optimizePage = (): void => {
    try {
      processDocument(document);
      document.querySelectorAll('iframe').forEach(iframe => {
        const src = iframe.src;
        if (src && !src.includes('google') && src !== 'about:blank') {
          if (iframe.contentWindow && iframe.contentWindow.location.origin === window.location.origin) {
            const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            if (iframeDocument) {
              processDocument(iframeDocument);
            }
          }
        }
      });
    } catch (e) {
      console.error('Error processing document:', e);
    }

    window.clearInterval = () => {
      console.log('clearInterval has been disabled.');
    };
  };

  const enable = (): void => {
    optimizePage();
    const observer = new MutationObserver(mutations => {
      if (mutations.some(mutation => mutation.addedNodes.length > 0)) {
        optimizePage();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  };

  const disable = (): void => {
    console.log('AdBlocker disabled.');
  };

  return { enable, disable };
};