import Util from '../utils/Utils';

export class SiteModel {
  static Layouts = {
    LAYOUT1: 'layout1',
    LAYOUT2: 'layout2',
  };

  static getSites() {
    return [
      { id: "site1", name: "Betting Site 1", url: "https://bettingsite1.com", layout: SiteModel.Layouts.LAYOUT1 },
      { id: "site2", name: "Betting Site 2", url: "https://bettingsite2.com", layout: SiteModel.Layouts.LAYOUT1 },
    ];
  }

  static getSiteConfig(siteId, customPassword = '') {
    const site = this.getSites().find(site => site.id === siteId);
    if (!site) {
      throw new Error('Site not found');
    }
  
    const password = customPassword || Util.generatePassword();

    return {
      ...site,
      password,
    };
  }
}

export default SiteModel;
