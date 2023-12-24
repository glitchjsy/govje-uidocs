// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  uidocs: [
    'index',
    {
      label: 'Styles',
      type: 'category',
      link: {
        type: 'generated-index'
      },
      items: [
        'styles/colours'
      ]
    },
    {
      label: 'Components',
      type: 'category',
      link: {
        type: 'generated-index'
      },
      items: [
        'components/button',
        'components/table',
        'components/header',
        `components/breadcrumbs`,
        {
          type: 'category',
          label: 'Footer',
          link: {
            id: 'components/footer/index',
            type: 'doc',

          },
          items: [
            'components/footer/basic-footer',
            'components/footer/our-sites'
          ]
        }
      ]
    }
  ]
};

export default sidebars;
