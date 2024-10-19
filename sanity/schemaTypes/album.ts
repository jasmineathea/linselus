import {defineField, defineType} from 'sanity'

export const album = defineType({
  name: 'album',
  title: 'Photo album',
  type: 'document',
  fields: [
    defineField({
        name: 'name',
        type: 'string',
    }),
    defineField({
        name: 'slug',
        type: 'slug',
        options: {source: 'name'},
        validation: (rule) => rule.required().error(`Required to generate a page on the website`),
        hidden: ({document}) => !document?.name,
    }),
    defineField({
        name: 'date',
        type: 'date',
    }),
    defineField({
        name: 'camera',
        type: 'string',
    }),
    defineField({
        name: 'gallery',
        type: 'array',
        of: [
            { type: 'image' }
        ],
        options: {
            layout: 'grid'
        }
    }),
  ],
})
