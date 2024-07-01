import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vueform, {
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
} from './../vueform.core'

import vueformConfig from './../vueform.config'

const app = createApp(App)
app.use(Vueform, {
  ...vueformConfig,
  components: {
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
})
app.mount('#app')