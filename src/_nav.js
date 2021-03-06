export default {
  items: [
    {
      name: 'Dashboard',
      url: '/admin',
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
      url: '/admin/kendaraan',
      icon: 'fa fa-car'
    },
    {
      name: 'User',
      url: '/admin/user',
      icon: 'icon-people',
      children: [
        {
          name: 'Daftar User',
          url: '/admin/user/list',
          icon: 'icon-user-following',
        },
        {
          name: 'User Pending',
          url: '/admin/user/pending',
          icon: 'icon-hourglass',
        },
        {
          name: 'User Terdaftar',
          url: '/admin/user/registered',
          icon: 'icon-user-follow',
        },
        {
          name: 'User Non-Aktif',
          url: '/admin/user/archived',
          icon: 'icon-user-unfollow',
        }
      ]
    },
    {
      name: 'Tiket',
      url: '/admin/tiket',
      icon: 'icon-note',
      children: [
        {
          name: 'Tiket Aktif',
          url: '/admin/tiket/active',
          icon: 'icon-notebook',
        },
        {
          name: 'Tiket Closed',
          url: '/admin/tiket/closed',
          icon: 'icon-check',
        },
        {
          name: 'Tiket Non-Aktif',
          url: '/admin/tiket/archived',
          icon: 'icon-close',
        }
      ]
    },
    {
      name: 'Parkir',
      url: '/admin/parkir',
      icon: 'fa fa-product-hunt',
      children: [
        {
          name: 'Lokasi Parkir',
          url: '/admin/parkir/lokasi',
          icon: 'icon-map',
        },
        {
          name: 'List Parkir',
          url: '/admin/parkir/list',
          icon: 'icon-directions',
        }
      ]
    },
  ]
};
