export const MenuData = [
  {
    title: "Home",
    url: "/Home",
    cName: "nav-links",
    icon: "fa-solid fa-house-user"
  },
  {
    title: "About",
    url: "/about",
    cName: "nav-links",
    icon: "fa-solid fa-circle-info"
  },
  {
    title: "Service",
    cName: "nav-links",
    icon: "fa-solid fa-briefcase",
    submenu: [
      {
        title: "comicgpt",
        url: "https://vitejsvite43k98b-gphl--5173--7dbe22a9.local-credentialless.webcontainer.io/",
        cName: "nav-links-sub",
        icon: "fa-solid fa-bomb"
      },
      {
        title: "comicbites",
        url: "/comicbites",
        cName: "nav-links-sub",
        icon: "fa-solid fa-image"
      }
    ]
  },
  {
    title: "Blog",
    url: "/blog",
    cName: "nav-links",
    icon: "fa-solid fa-briefcase"
  },
  {
    title: "Contact",
    url: "/contact",
    cName: "nav-links",
    icon: "fa-solid fa-address-book"
  },
  {
    title: "Sign Up",
    url: "/Login",
    cName: "nav-links-mobile",
    icon: "fa-solid fa-user"
  }
];
