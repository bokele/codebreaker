/** @type {import('tailwindcss').Config} */
export default {
    content: [
       './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        "./resources/**/*.js",
		 './storage/framework/views/*.php',
		 './resources/views/**/*.blade.php',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

