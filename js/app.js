const { createApp } = Vue;

createApp({
  data() {
    return {
      name: 'Your Name',
      currentPage: 'home',
      welcomeMessage: 'This is the homepage of my portfolio. Check out my projects!',
      aboutMe: 'I am a passionate developer who loves to build things for the web.',
      projects: [
        { name: 'Project 1', description: 'A cool project I built.' },
        { name: 'Project 2', description: 'Another awesome project.' },
        { name: 'Project 3', description: 'Yet another project.' }
      ]
    };
  },
  methods: {
    showPage(page) {
      this.currentPage = page;
    }
  }
}).mount('#app');