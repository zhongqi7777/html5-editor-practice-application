import TraitView from './TraitView';
import { isUndefined } from 'underscore';
import InputNumber from 'domain_abstract/ui/InputNumber';

export default TraitView.extend({
  getValueForTarget() {
    const { model } = this;
    const { value, unit } = model.attributes;
    return !isUndefined(value) && value !== ''
      ? value + unit
      : model.get('default');
  },

  /**
   * Returns input element
   * @return {HTMLElement}
   * @private
   */
  getInputEl() {
    if (!this.input) {
      var value = this.getModelValue();
      var inputNumber = new InputNumber({
        contClass: this.ppfx + 'field-int',
        model: this.model,
        ppfx: this.ppfx
      });
      this.input = inputNumber.render();
      this.$input = this.input.inputEl;
      this.$unit = this.input.unitEl;
      this.model.set('value', value, { fromTarget: 1 });
      this.$input.val(value);
      this.input = inputNumber.el;
    }
    return this.input;
  }
});
