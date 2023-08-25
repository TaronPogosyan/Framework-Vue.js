const app = {
  data() {
    return {
      articlesData: [
        {
          id: 1,
          src: "../images/img-art-01.png",
          alt: "interior",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          button: "Kitchan Design",
        },
        {
          id: 2,
          src: "../images/img-art-02.png",
          alt: "interior",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
          button: "Living Design",
        },
        {
          id: 3,
          src: "../images/img-art-03.png",
          alt: "interior",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          button: "Interior Design",
        },
        {
          id: 4,
          src: "../images/img-art-04.png",
          alt: "interior",
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
          button: "Kitchan Design",
        },
        {
          id: 5,
          src: "../images/img-art-05.png",
          alt: "interior",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
          button: "Living Design",
        },
        {
          id: 6,
          src: "../images/img-art-06.png",
          alt: "interior",
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
          button: "Interior Design",
        },
      ],
    };
  },
  methods: {},
};

Vue.createApp(app).mount("#cardbox-container");
