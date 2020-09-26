import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';
import { SelectDirective } from './select.directive';

describe('SelectDirective', () => {
  let spectator: SpectatorDirective<SelectDirective>;
  const createDirective = createDirectiveFactory(SelectDirective);

  beforeEach(() => {
    spectator = createDirective(`<div cnSelect="testclass">Test text</div>`);
  });

  it('should toggle class on click', () => {
    spectator.click(spectator.element);
    expect(spectator.element).toHaveClass('testclass');


    spectator.click(spectator.element);
    expect(spectator.element).not.toHaveClass('testclass');
  });

  it('should set default className when not set', () => {
    spectator.directive.className = undefined;

    spectator.click(spectator.element);
    expect(spectator.element).toHaveClass('select');


    spectator.click(spectator.element);
    expect(spectator.element).not.toHaveClass('select');
  });

  it('should get the instance', () => {
    const instance = spectator.directive;
    expect(instance).toBeDefined();
  });
});
