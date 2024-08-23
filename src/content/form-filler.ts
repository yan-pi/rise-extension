import { SiteLayoutInteface } from '../interfaces/site-layout-interface';
import { generateUserData } from '../utils/data-generator';
import { getElements } from '../utils/element-selectors';
import { handleButtonWithSpan } from '../handlers/span-button-handler';
import { createLogger } from '../utils/logger';
import { UserData } from '../interfaces/userdata-interface';

const logger = createLogger();

export const fillForm = async (
  layout: SiteLayoutInteface,
  options: {
    predefinedPassword?: string;
    useRandomPassword: boolean;
  }
): Promise<void> => {
  logger.info(`Filling form with data: ${JSON.stringify(layout)}`);
  logger.info(`Options: ${JSON.stringify(options)}`);

  const userData = generateUserData(layout, options);
  console.log('Generated user data:', userData);

  const elements = getElements(layout.selectors);
  console.log('Elements found:', elements);

  fillFormFields(elements, userData);

  if (elements.agreeCheckbox instanceof HTMLInputElement) {
    logger.info('Agreeing to terms and conditions');
    elements.agreeCheckbox.checked = true;
  }

  await new Promise(resolve => setTimeout(resolve, 500));

  try {
    handleButtonWithSpan('Registro');
  } catch (error) {
    logger.error(`Error clicking button with span: Registro ${error}`);
  }
};

const fillFormFields = (elements: { [key: string]: HTMLElement | null }, userData: UserData): void => {
  Object.entries(elements).forEach(([key, element]) => {
    if (key !== 'form' && key !== 'submit' && key !== 'agreeCheckbox' && element instanceof HTMLInputElement) {
      element.value = userData[key] || '';
      element.dispatchEvent(new Event('input', { bubbles: true }));
    }
  });
};