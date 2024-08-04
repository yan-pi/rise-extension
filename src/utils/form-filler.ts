export class FormFiller {
  fillForm(formData: Record<string, string>): void {
    Object.entries(formData).forEach(([key, value]) => {
      const element = document.querySelector(`[name="${key}"]`) as HTMLInputElement;
      if (element) {
        element.value = value;
      }
    });
  }
}