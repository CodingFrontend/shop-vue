// nuxt.config.js
export default {
	buildModules: ['@nuxt/typescript-build', 'nuxt-typed-vuex'],
	typescript: {
		typeCheck: {
			eslint: {
				files: './**/*.{ts,js,vue}'
			}
		}
	},
	modules: ['@nuxtjs/axios']
}