import useVueform from '@vueform/vueform/src/composables/useVueform'
import useClasses from '@vueform/vueform/src/composables/elements/useClasses'
import Vueform from '@vueform/vueform/src/components/Vueform'
import Validator from '@vueform/vueform/src/services/validation/validator'
import installer from '@vueform/vueform/src/installer'
import element from '@vueform/vueform/src/element'
import defineConfig from '@vueform/vueform/src/defineConfig'

const VueformElement = element
const defineElement = element

import {
  Vueform as VueformComponent,
  FormElements,

  // Essential form components
  FormErrors,
  FormMessages,

  // Essential element components
  ElementLayout,
  ElementLayoutInline,
  ElementLoader,
  ElementLabelFloating,
  ElementLabel,
  ElementInfo,
  ElementDescription,
  ElementError,
  ElementMessage,
  ElementText,
  ElementAddon,
  ElementAddonOptions,

  // Optional form components
  // FormLanguages,
  // FormLanguage,
  // FormTabs,
  // FormTab,
  // FormSteps,
  // FormStepsControls,
  // FormStepsControl,
  // FormStep,

  // Elements
  ButtonElement,
  // CaptchaElement,
  CheckboxElement,
  CheckboxgroupElement,
  // DateElement,
  // DatesElement,
  // FileElement,
  // GroupElement,
  // HiddenElement,
  // ListElement,
  // LocationElement,
  // MultifileElement,
  // MultiselectElement,
  // ObjectElement,
  PhoneElement,
  RadioElement,
  RadiogroupElement,
  SelectElement,
  // SliderElement,
  // StaticElement,
  // TagsElement,
  // TextareaElement,
  TextElement,
  ToggleElement,
  // EditorElement,
  // TTextareaElement,
  // TTextElement,
  // TEditorElement,

  // Element partials & wrappers
  // DragAndDrop,
  CheckboxgroupCheckbox,
  RadiogroupRadio,
  // FilePreview,
  // DatepickerWrapper,
  // EditorWrapper,
} from '@vueform/vueform/src/components'

const vueform = installer(undefined, {
  Vueform: VueformComponent,
  FormElements,
}, {})

export {
  useVueform,
  useClasses,
  Validator,
  vueform,
  element,
  defineElement,
  defineConfig,
  installer,

  // Mandatory form components
  Vueform,
  VueformElement,

  // Essential form components
  FormErrors,
  FormMessages,

  // Essential element components
  ElementLayout,
  ElementLayoutInline,
  ElementLoader,
  ElementLabelFloating,
  ElementLabel,
  ElementInfo,
  ElementDescription,
  ElementError,
  ElementMessage,
  ElementText,
  ElementAddon,
  ElementAddonOptions,

  // Optional form components
  // FormLanguages,
  // FormLanguage,
  // FormTabs,
  // FormTab,
  // FormSteps,
  // FormStepsControls,
  // FormStepsControl,
  // FormStep,

  // Elements
  ButtonElement,
  // CaptchaElement,
  CheckboxElement,
  CheckboxgroupElement,
  // DateElement,
  // DatesElement,
  // FileElement,
  // GroupElement,
  // HiddenElement,
  // ListElement,
  // LocationElement,
  // MultifileElement,
  // MultiselectElement,
  // ObjectElement,
  PhoneElement,
  RadioElement,
  RadiogroupElement,
  SelectElement,
  // SliderElement,
  // StaticElement,
  // TagsElement,
  // TextareaElement,
  TextElement,
  ToggleElement,
  // EditorElement,
  // TTextareaElement,
  // TTextElement,
  // TEditorElement,

  // Element partials & wrappers
  // DragAndDrop,
  CheckboxgroupCheckbox,
  RadiogroupRadio,
  // FilePreview,
  // DatepickerWrapper,
  // EditorWrapper,
}

export * from '@vueform/vueform/src/services/validation/rules'

export default vueform