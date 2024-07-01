<template>
  <div class="min-h-screen flex justify-center items-center">
    <Vueform>
      <TextElement name="e1" label="Text / Email" rules="required" />
      <PhoneElement name="e2" label="Phone" />
      <SelectElement name="e3" label="Select" :native="false" :items="[1,2,3]" />
      <SelectElement name="e4" label="Native Select" :items="[1,2,3]" />
      <CheckboxElement name="e5" text="Checkbox" />
      <CheckboxgroupElement name="e6" label="Checkbox group" :items="[1,2,3]" />
      <RadiogroupElement name="e7" label="Radio group" :items="[1,2,3]" />
      <ToggleElement name="e8" text="Toggle" />
      <ButtonElement name="e9" full primary sumbits>Submit</ButtonElement>
    </Vueform>
  </div>
</template>