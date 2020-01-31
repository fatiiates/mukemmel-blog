

export const getPosts = () => {
  return [
    {
      id:1,
      slug:"e-mail",
      title: [
        {
          id:1,
          class:"fa-envelope",
          content:"fatiiates@gmail.com",
        },
      ],
    },
    {
      id:2,
      slug:"phone",
      title: [
        {
          id:1,
          class:"fa-phone",
          content:"+90 544 473 5349",
        },
      ],
    },
    {
      id:3,
      slug:"social",
      title: [
        {
          id:1,
          class:"fa-facebook",
          content:"//www.facebook.com/fatiiates",
        },
        {
          id:2,
          class:"fa-instagram",
          content:"//www.instagram.com/fatiiates",
        },
        {
          id:3,
          class:"fa-linkedin",
          content:"//www.linkedin.com/in/fatiiates/",
        },
        {
          id:4,
          class:"fa-google",
          content:'mailto:fatiiates@gmail.com',
        }
      ],
    }
  ];
};
