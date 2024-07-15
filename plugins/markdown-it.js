import MarkdownIt from 'markdown-it'
import Shiki from '@shikijs/markdown-it'
export default defineNuxtPlugin(async() => {
  const md = new MarkdownIt({})
  md.use(await Shiki({
    themes: {
      light: 'dracula',
      dark: 'vitesse-dark',
    },
  }))

  return {
    provide: {
      md
    }
  }
})