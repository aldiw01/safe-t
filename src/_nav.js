export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      title: true,
      name: 'Menu',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Kendaraan',
      url: '/kendaraan',
      icon: 'fa fa-car'
    },
    {
      name: 'User',
      url: '/user',
      icon: 'icon-user',
      children: [
        {
          name: 'Daftar User',
          url: '/user/list',
          icon: 'icon-user-following',
        },
        {
          name: 'User Pending',
          url: '/user/pending',
          icon: 'icon-user-unfollow',
        }
      ]
    },
    {
      name: 'Tiket',
      url: '/tiket',
      icon: 'icon-note',
      children: [
        {
          name: 'Tiket Aktif',
          url: '/tiket/active',
          icon: 'icon-notebook',
        },
        {
          name: 'Tiket Closed',
          url: '/tiket/closed',
          icon: 'icon-check',
        }
      ]
    }
  ]
};
