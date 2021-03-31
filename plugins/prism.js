import Prism from 'prismjs'

// Theme
import 'prismjs/themes/prism-okaidia.css'

// Language support
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-python'

// Useful plugins
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/plugins/show-language/prism-show-language'

Prism.languages.vue = Prism.languages.markup

export default Prism
