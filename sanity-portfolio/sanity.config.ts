import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'Frane-PTF',
  title: 'Frane-portfolio',

  projectId: '0x3paidz',
  dataset: 'production',

  plugins: [deskTool],

  schema: {
    types: schemaTypes,
  },
})
